// TODO: chart
// TODO: add update button to update progress
import React from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import { Body, Button, Left, List, ListItem, Right, Spinner, Text } from 'native-base';
import { ScreenLabel, SectionLabel, Wrapper, Submit } from '../../components';
import PureChart from 'react-native-pure-chart';
import { getUnix } from '../../utils';
import { styles } from './ProgressStyles'

import { getData } from '../../AsyncStorage';

// import regression from 'regression';
// import Table from 'react-native-simple-table'

// const dummyProgress = {
//   initial_weight: 76,
//   initial_height: 1.66,
//   initial_heart_rate: 89,
//   start_date: 1519677976,
//   target_weight: 72,
//   data: [
//     {
//       date: 1520023576,
//       weight: 77
//     },
//     {
//       date: 1520628376,
//       weight: 75.5
//     },
//     {
//       date: 1521233176,
//       weight: 74
//     },
//     {
//       date: 1521837976,
//       weight: 73
//     }
//   ]
// };

const linear = (data, options) => {
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

const calculateRegression = formattedData => {
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
    columns: [
      { title: 'Date', dataIndex: 'x' },
      { title: 'Progress', dataIndex: 'y' }
    ],
    datasets: []
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }
    const progress = await getData(`${this.props.user.username}_progress`);
    this.setState({ progress, user: this.props.user });



    let data = []
    if (!!progress.data && progress.data.length > 3) return this.calculate();
    if (!!progress.data) data.push(...this.state.progress.data.map(item => {
      return { x: item.date, y: item.weight };
    }))
    console.log(this.state.progress)
    console.log('days', Math.round((getUnix(new Date()) - progress.last_date) / 86400))
    console.log((Math.round((getUnix(new Date()) - progress.last_date) / 86400)) * progress.target_diff_per_day)
    console.log(this.state.progress)
    console.log(parseFloat(progress.last_weight) + parseFloat(((Math.round((getUnix(new Date()) - progress.last_date) / 86400)) * progress.target_diff_per_day)))

    let a_week = getUnix(moment(new Date()).add(7, 'days').format('MM/DD/YY'))
    if (parseInt(a_week) > parseInt(progress.target_date)) a_week = progress.target_date


    data.push({ x: getUnix(moment(new Date()).format('MM/DD/YY')), y: 'XX', z: (parseFloat(progress.last_weight) + parseFloat(((Math.round((getUnix(new Date()) - progress.last_date) / 86400)) * progress.target_diff_per_day))) })


    data.push({ x: a_week, y: 'XX', z: (parseFloat(progress.last_weight) + parseFloat(((Math.round((a_week - progress.last_date) / 86400)) * progress.target_diff_per_day))) })

    console.log('lastweight', parseFloat(progress.last_weight))
    console.log('initial', parseFloat(progress.initial_weight))
    console.log('target', parseFloat(progress.target_total))
    console.log('days', parseFloat(((Math.round((a_week - progress.last_date) / 86400)) * progress.target_diff_per_day)))

    const projection = (parseFloat(progress.last_weight) + parseFloat(((Math.round((a_week - progress.last_date) / 86400)) * progress.target_diff_per_day))) - parseFloat(progress.initial_weight) / parseFloat(progress.target_total) * 100

    console.log(data, ' projection', projection)
    this.setState({ datasets: data, columns: [...this.state.columns, { title: 'Target', dataIndex: 'z' }] });

  };

  calculate = () => {
    const progress = this.state.progress;
    dataset1 = [];
    dataset2 = [];
    dataset3 = calculateRegression(progress.data);
    dataset4 = [];
    datasets = [];
    // targetSlope = (progress.target_weight - progress.initial_weight);

    let len = 0;
    progress.data.forEach(data => {
      // let targetWeight = targetSlope * (data.date - progress.start_date) + progress.initial_weight;
      dataset1.push({ x: data.date, y: data.weight });
      dataset2.push({ x: data.date, y: data.target });
      dataset4.push({ x: data.date, y: dataset3[len][1] || '' });
      datasets.push({
        x: data.date,
        y: data.weight,
        z: Math.round(data.target).toFixed(2) || '',
        m: dataset3[len][1] || ''
      });
      len++;
    });

    this.setState({
      user: this.props.user,
      dataset1,
      dataset2,
      datasets,
      dataset4,
      columns: [...this.state.columns, { title: 'Track', dataIndex: 'm' }]
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
      console.log('xxxxx');
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
    console.log(this.state)
    const { dataset1, dataset2, dataset4 } = this.state;
    let sampleData = [];

    if (!!dataset1) {
      sampleData.push({ seriesName: 'progress', data: this.state.dataset1, color: '#297AB1' });
    }

    if (!!dataset2) {
      sampleData.push({ seriesName: 'target', data: this.state.dataset2, color: 'yellow' });
    }

    if (!!dataset4) {
      sampleData.push({ seriesName: 'Regression', data: this.state.dataset4, color: 'black' });
    }
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Progress" />
        <Right />
        <PureChart data={sampleData} type="line" />
        <View>
          <View style={styles.header}>{this.renderHeader()}</View>
          <ScrollView style={styles.dataView} contentContainerStyle={styles.dataViewContent}>
            {this.state.datasets.map((rowData, index) => {
              return this.renderRow(rowData, index);
            })}
          </ScrollView>
        </View>
      </Wrapper>,

      <Submit key={2} onSubmit={this.handleProgressClick} text="Add" />
    ];
  }
}
// <Submit key={2} onSubmit={this.handleProgressClick} text="Add Entry" />

export default Progress;
