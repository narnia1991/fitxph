// TODO: chart
// TODO: add update button to update progress
import React from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Body, Left, List, ListItem, Right, Text } from 'native-base';
import { ScreenLabel, Wrapper } from '../../components';
import PureChart from 'react-native-pure-chart';
import { getUnix } from '../../utils';
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
      weight: 76
    },
    {
      date: 1520628376,
      weight: 75.5
    },
    {
      date: 1521233176,
      weight: 74
    },
    {
      date: 1521837976,
      weight: 73.7
    }
  ]
};

class Progress extends React.Component {
  state = {
    user: null,
    columns: [{ title: 'Date', dataIndex: 'x' }, { title: 'Weight', dataIndex: 'y' }]
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }

    // const progress = await getData(`${this.props.user.username}_progress`)
    const progress = dummyProgress;

    dataset1 = [];
    dataset2 = [];
    targetSlope =
      (progress.target_weight - progress.initial_weight) / progress.initial_date + 2592000 - progress.initial_date;

    progress.data.forEach(data => {
      console.log(targetSlope);
      console.log(moment.unix(data.date).format('MM/DD/YYYY'));

      dataset1.push({ x: data.date, y: data.weight });
      dataset2.push({ x: data.date, y: targetSlope * (data.date - progress.initial_date) + progress.initial_weight });
    });

    this.setState({ user: this.props.user, dataset1, dataset2 });
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
    console.log(col);

    if (col.dataIndex === 'x') {
      return (
        <Left key={col.dataIndex}>
          <Text>{moment(cellData, 'MM/dd/YYYY')}</Text>
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

  render() {
    let sampleData = [
      {
        seriesName: 'progress',
        data: this.state.dataset1,
        color: '#297AB1'
      },
      {
        seriesName: 'target',
        data: this.state.dataset2,
        color: 'yellow'
      }
    ];
    return (
      <Wrapper padder>
        <ScreenLabel text="Progress" />
        <PureChart data={sampleData} type="line" />

        <View>
          <View style={styles.header}>{this.renderHeader()}</View>
          <ScrollView style={styles.dataView} contentContainerStyle={styles.dataViewContent}>
            {this.state.dataset1.map((rowData, index) => this.renderRow(rowData, index))}
          </ScrollView>
        </View>
      </Wrapper>
    );
  }
}

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
