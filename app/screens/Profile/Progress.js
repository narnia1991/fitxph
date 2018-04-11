// TODO: chart
// TODO: add update button to update progress
import React from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Body, Left, List, ListItem, Right, Text } from 'native-base';
import { ScreenLabel, Wrapper, Submit } from '../../components';
import PureChart from 'react-native-pure-chart';
import { getUnix } from '../../utils';

// import regression from 'regression';
// import Table from 'react-native-simple-table'

const dummyProgress = {
  initial_weight: 76,
  initial_height: 166,
  initial_heart_rate: 89,
  initial_date: 1519677976,
  target_weight: 72,
  data: [
    {
      date: 1520023576,
      weight: 100
    },
    {
      date: 1520628376,
      weight: 75.5
    },
    {
      date: 1521233176,
      weight: 50
    },
    {
      date: 1521837976,
      weight: 45
    }
  ]
};

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
  // const gradient = result.equation[0];
  // const yIntercept = result.equation[1];
  // console.log(result.points);
  // regressionData = result.points.map(el => {
  //   return {
  //     x: el[0],
  //     y: el[1]
  //   };
  // });
  // return { regressionData, gradient, yIntercept, prediction };
};

class Progress extends React.Component {
  state = {
    user: null,
    columns: [
      { title: 'Date', dataIndex: 'x' },
      { title: 'Weight', dataIndex: 'y' },
      { title: ' Target Weight', dataIndex: 'z' },
      { title: 'Regression', dataIndex: 'm' }
    ]
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }

    // const progress = await getData(`${this.props.user.username}_progress`)
    const progress = dummyProgress;

    dataset1 = [];
    dataset2 = [];
    dataset3 = calculateRegression(progress.data);
    dataset4 = [];
    datasets = [];
    targetSlope = (progress.target_weight - progress.initial_weight) / 2592000;

    console.log('dataset', dataset3);
    let len = 0;
    progress.data.forEach(data => {
      let targetWeight = targetSlope * (data.date - progress.initial_date) + progress.initial_weight;
      dataset1.push({ x: data.date, y: data.weight });
      dataset2.push({ x: data.date, y: targetWeight });
      console.log(dataset3[len][1]);
      dataset4.push({ x: data.date, y: dataset3[len][1] });
      datasets.push({ x: data.date, y: data.weight, z: Math.round(targetWeight).toFixed(2), m: dataset3[len][1] });
      len++;
    });

    this.setState({ user: this.props.user, dataset1, dataset2, datasets, dataset4 });
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
        {this.state.columns.map(col => this.renderCell(rowData[col.dataIndex], col))}
      </View>
    );
  }

  renderCell(cellData, col) {
    if (col.dataIndex === 'x') {
      return (
        <Left key={col.dataIndex}>
          <Text>{moment.unix(cellData).format('MM/DD/YYYY')}</Text>
        </Left>
      );
    } else {
      return (
        <Right key={col.dataIndex} style={[styles.cell]}>
          <Text>{cellData}</Text>
        </Right>
      );
    }
  }

  handleProgressClick = () => {
    Actions.inputprogress({ user: this.state.user });
  };

  render() {
    let sampleData = [
      { seriesName: 'progress', data: this.state.dataset1, color: '#297AB1' },
      { seriesName: 'target', data: this.state.dataset2, color: 'yellow' },
      { seriesName: 'Regression', data: this.state.dataset4, color: 'black' }
    ];
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Progress" />
        <PureChart data={sampleData} type="line" />

        <View>
          <View style={styles.header}>{this.renderHeader()}</View>
          <ScrollView style={styles.dataView} contentContainerStyle={styles.dataViewContent}>
            {this.state.datasets.map((rowData, index) => this.renderRow(rowData, index))}
          </ScrollView>
        </View>
      </Wrapper>
    ];
  }
}

// <Submit key={2} onSubmit={this.handleProgressClick} text="Add Entry" />

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  header: {
    flexDirection: 'row'
  },
  headerItem: {
    minHeight: 30,
    backgroundColor: '#000',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataView: {
    flexGrow: 1,
    marginBottom: 10
  },
  dataViewContent: {},
  row: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf'
  },
  cell: {
    minHeight: 25,
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Progress;

const dummyUser = [
  {
    day: 1,
    initial_heart_rate: 89,
    end_heart_rate: 123,
    date: 1523306784,
    data: [
      {
        exercise: 'Jumping Jacks',
        time: 60
      },
      {
        exercise: 'High Knees',
        time: 60
      },
      {
        exercise: 'Sit Ups',
        time: 60
      },
      {
        exercise: 'Squats',
        time: 60
      },
      {
        exercise: 'Push Ups',
        time: 60
      }
    ]
  }
];
