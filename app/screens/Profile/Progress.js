import React from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import { Body, Button, Left, List, ListItem, Right, Spinner, Text } from 'native-base';
import { Error, ScreenLabel, SectionLabel, Wrapper, Submit } from '../../components';
import PureChart from 'react-native-pure-chart';
import { getUnix } from '../../utils';
import { styles } from './ProgressStyles';

import { getData } from '../../AsyncStorage';

// linear regression
const linear = (data, options) => {
  const sum = [0, 0, 0, 0, 0];
  let len = 0;

  for (let n = 0; n < data.length; n++) {
    if (data[n][1] !== null) {
      len++;
      sum[0] += data[n][0]; // summation x
      sum[1] += data[n][1]; // summation y
      sum[2] += data[n][0] * data[n][0]; // summation x^2
      sum[3] += data[n][0] * data[n][1]; // summation xy
      sum[4] += data[n][1] * data[n][1]; // summation y^2
    }
  }

  // x = unix timestamp(date)
  // unix timestamp = seconds after jan 1, 1970
  // y = weight
  // n = number of entries
  const run = Math.round(((len * sum[2] )- (sum[0] * sum[0])) * 100) / 100; // (n * sumx^2 - sumx * sum x )* 100 / 100 <== round off 2 decimals

  console.log('run', run)

  const rise = Math.round(((len * sum[3] )- (sum[0] * sum[1])) * 100) / 100; // (n *  sumxy - sumx*sumy) *100 / 100

  console.log('rise',rise)

  const gradient = run === 0 ? 0 : Math.round(rise / run * 100) / 100;// {slope} rise/run

  console.log('gradient',gradient)

  const intercept = Math.round(((sum[1] / len) -( (gradient * sum[0] )/ len)) * 100) / 100; // y where x = 0

  console.log('intercept',intercept)

  const predict = x => [Math.round(x * 100) / 100, Math.round((gradient * (x + intercept)) * 100) / 100];
  // prediction of (x, y)

  const points = data.map(point => {
    console.log(point)
    return predict(point[0]);
  });
  return {
    points,
    predict,
    equation: [gradient, intercept]
  };

  const sum = [0, 0, 0, 0, 0];
  let len = 0;

  for (let n = 0; n < data.length; n++) {
    if (data[n][1] !== null) {
      len++;
      sum[0] += data[n][0];
      sum[1] += data[n][1];
      sum[2] += data[n][0] * data[n][0];
      sum[3] += data[n][0] * data[n][1];
      sum[4] += data[n][1] * data[n][1];
    }
  }

  const run = Math.round((len * sum[2] - sum[0] * sum[0]) * 100) / 100;
  const rise = Math.round((len * sum[3] - sum[0] * sum[1]) * 100) / 100;
  const gradient = run === 0 ? 0 : Math.round(rise / run * 100) / 100;
  const intercept = Math.round((sum[1] / len - gradient * sum[0] / len) * 100) / 100;

  const predict = x => [Math.round(x * 100) / 100, Math.round((gradient * x + intercept) * 100) / 100];
  const points = data.map(point => {
    return predict(point[0]);
  });
  return {
    points,
    predict,
    equation: [gradient, intercept]
  };
};

const calculateRegression = (formattedData, progress) => {
  // let regressionData = [];
  // regressionData = formattedData.map(el => {
  //   // convert {date, weight} to coordinates [x,y]
  //   // Math.round(el.date / 86400 * 100) / 100 => convert unix timestamp to days for the number to be smaller
  //   return [Math.round((el.date - progress.initial_date) / 86400 * 100) / 100, el.weight];
  // });
  // console.log('regression',regressionData)
  // const result = linear(regressionData);
  // return result.points;

  let regressionData = [];
  regressionData = formattedData.map(el => {
    return [Math.round(el.date / 86400 * 100) / 100, el.weight];
  });
  const result = linear(regressionData);
  return result.points;
};

class Progress extends React.Component {
  state = {
    user: null,
    columns: [{ title: 'Date', dataIndex: 'x' }, { title: 'Progress', dataIndex: 'y' }],
    datasets: [],
    projectedSuccess: 100,
    errors: '',
    disableButton: false
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }

    const progress = await getData(`${this.props.user.username}_progress`);
    console.log('!!progress.end_weight', progress.end_weight);
    if (!!progress.end_weight) {
      this.setState({ disableButton: true, errors: 'workout plan already finished. Reset to continue' });
    }
    console.log(progress);
    this.setState({ progress, user: this.props.user });
    let data = [{ x: progress.initial_date, y: progress.initial_weight }];
    if (!!progress.data && progress.data.length > 3) this.calculate();
    else {
      if (!!progress.data)
        data.push(
          ...this.state.progress.data.map(item => {
            return { x: item.date, y: item.weight };
          })
        );

      // console.log(target)
      // get the unix timestamp of the day next week
      let a_week = getUnix(
        moment(new Date())
          .add(7, 'days')
          .format('MM/DD/YY')
      );

      if (parseInt(a_week) > parseInt(progress.target_date)) a_week = progress.target_date;
      ``;
      // l_weight j

      if (progress.last_date < getUnix(new Date()) - 43200) console.log(getUnix(moment(new Date()).format('MM/DD/YY')));
      console.log(progress.target_diff_per_day);

      if (progress.last_date < getUnix(new Date()) - 43200)
        data.push({
          x: getUnix(new Date()),
          y: 'XX',
          z:
            Math.round(
              parseFloat(progress.last_weight) +
                parseFloat(
                  Math.round((getUnix(new Date()) - progress.last_date) / 86400) * progress.target_diff_per_day
                )
            ) *
            100 /
            100
        });

      console.log(progress.target_weight);

      data.push({
        x: a_week,
        y: 'XX',
        z:
          Math.round(
            parseFloat(progress.last_weight) +
              parseFloat(
                progress.target_diff_per_day * ((getUnix(new Date()) - progress.last_date + 86400 * 7) / 86400)
              )
          ) *
          100 /
          100
      });
      console.log(progress);

      const projection =
        (progress.last_weight - progress.initial_weight) /
        ((progress.last_date - progress.initial_date) / 86400 * progress.target_diff_per_day) *
        100;

      this.setState({
        projectedSuccess: Math.round(projection) * 100 / 100,
        progress,
        datasets: data,
        columns: [...this.state.columns, { title: 'Target', dataIndex: 'z' }]
      });
    }
  };

  calculate = () => {
    console.log('progressssasssssssssssssssssssssssssssssssssssss');
    const progress = this.state.progress;
    dataset1 = [{ x: progress.initial_date, y: progress.initial_weight }];
    dataset2 = [{ x: progress.initial_date, y: 0 }];
    dataset3 = calculateRegression(progress.data, progress);
    dataset4 = [];
    datasets = [{ x: progress.initial_date, y: progress.initial_weight, z: '' }];
    let a_week = getUnix(
      moment(new Date())
        .add(7, 'days')
        .format('MM/DD/YY')
    );

    if (parseInt(a_week) > parseInt(progress.target_date)) a_week = progress.target_date;

    let len = 0;

    progress.data.forEach(data => {
      console.log(dataset3[len]);
      dataset1.push({ x: data.date, y: data.weight });
      dataset2.push({ x: data.date, y: data.target });
      // dataset4.push({ x: data.date, y: dataset3[len][1]});
      datasets.push({
        x: data.date,
        y: data.weight,
        z: Math.round(data.target) * 100 / 100
        // m: dataset3[len][1]
      });
      len++;
    });

    console.log((getUnix(new Date()) - progress.last_date + 86400 * 7) / 86400);

    datasets.push({
      x: a_week,
      y: 'XX',
      z:
        Math.round(
          parseFloat(progress.last_weight) +
            parseFloat(progress.target_diff_per_day * ((getUnix(new Date()) - progress.last_date + 86400 * 7) / 86400))
        ) *
        100 /
        100
    });

    // calcTarget = ({weight, date, target_date, target_weight, initial_date, initial_weight}) =>{
    //   // get the unix timestamp of the day next week
    // let a_week = getUnix(moment(new Date()).add(7, 'days').format('MM/DD/YY'))

    // if (parseInt(a_week) > parseInt(target_date)) a_week = target_date

    // // l_weight j
    // data.push({ x: getUnix(moment(new Date()).format('MM/DD/YY')), y: 'XX', z: (parseFloat(last_weight) + parseFloat(((Math.round((getUnix(new Date()) - last_date) / 86400)) * target_diff_per_day))) })

    // data.push({ x: a_week, y: 'XX', z: (parseFloat(progress.last_weight) + parseFloat(((Math.round((a_week - progress.last_date) / 86400)) * progress.target_diff_per_day))) })

    const projection =
      parseFloat(progress.last_weight) +
      parseFloat(Math.round((a_week - progress.initial_date) / 86400) * progress.target_diff_per_day) -
      parseFloat(progress.initial_weight) / parseFloat(progress.target_total) * 100;

    this.setState({ projectedSuccess: projection });

    // }

    this.setState({
      user: this.props.user,
      dataset1,
      dataset2,
      datasets,
      dataset4,
      columns: [...this.state.columns, { title: 'Target', dataIndex: 'z' }]
    });
  };

  renderHeader() {
    return this.state.columns.map((col, index) => {
      if (index === 0) {
        return (
          <Left key={index} style={[styles.headerItem]}>
            <Text>{col.title}</Text>
          </Left>
        );
      } else {
        return (
          <Right key={index} style={[styles.headerItem]}>
            <Text>{col.title}</Text>
          </Right>
        );
      }
    });
  }

  renderRow(rowData, index) {
    return (
      <View key={index} style={styles.row}>
        {this.state.columns.map(col => this.renderCell(rowData[col.dataIndex], col, index))}
      </View>
    );
  }

  handleRemove = index => {
    this.setState({ progress: { ...this.state.progress, data: delete dummyProgress.data[index] } });
    this.calculate();
  };

  renderCell(cellData, col, index) {
    console.log(cellData);
    if (col.dataIndex === 'x') {
      return (
        <Left key={col.dataIndex}>
          <Text>{moment.unix(cellData).format('MM/DD/YY')}</Text>
        </Left>
      );
    }
    return (
      <Right key={col.dataIndex} style={[styles.cell]}>
        <Text>{cellData}</Text>
      </Right>
    );
  }

  handleProgressClick = () => {
    Actions.inputprogress({ user: this.state.user });
  };

  render() {
    console.log(this.state);
    const { dataset1, dataset2, dataset4 } = this.state;
    let sampleData = [];

    // if (!!dataset1&&dataset1.length>1) {
    //   sampleData.push({ seriesName: 'progress', data: this.state.dataset1, color: '#297AB1' });
    // }

    // if (!!dataset2) {
    //   sampleData.push({ seriesName: 'target', data: this.state.dataset2, color: 'yellow' });
    // }

    // if (!!dataset4) {
    //   sampleData.push({ seriesName: 'Regression', data: this.state.dataset4, color: 'black' });
    // }

    if (!this.state.progress)
      return (
        <Wrapper key={1} padder>
          <SectionLabel text="No plan selected yet" />
        </Wrapper>
      );
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Progress" />

        <Error message={this.state.errors} />
        <Right />
        <PureChart data={sampleData} type="line" />
        <View>
          <View style={styles.header}>{this.renderHeader()}</View>
          <ScrollView style={styles.dataView} contentContainerStyle={styles.dataViewContent}>
            {this.state.datasets.map((rowData, index) => {
              return this.renderRow(rowData, index);
            })}
          </ScrollView>
          <Right>
            <Text>{this.state.projectedSuccess}% Success </Text>
          </Right>
        </View>
      </Wrapper>,

      <Submit key={2} disabled={this.state.disableButton} onSubmit={this.handleProgressClick} text="Add" />
    ];
  }
}

export default Progress;
