// TODO: chart
// TODO: add update button to update progress
import React from "react";
import { Actions } from "react-native-router-flux";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Body, Left, List, ListItem, Right, Text } from "native-base";
import { VictoryBrushContainer, VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { ScreenLabel, Wrapper } from "../../components";
import PureChart from 'react-native-pure-chart';
// import Table from 'react-native-simple-table'

class Progress extends React.Component {
  state = {
    series1: [
      { x: '2018-02-02', y: 55 },
      { x: '2018-02-09', y: 54 },
      { x: '2018-02-16', y: 50 },
      { x: '2018-02-23', y: 49 },
    ],
    series2: [
      { x: '2018-02-02', y: 55 },
      { x: '2018-02-09', y: 53 },
      { x: '2018-02-16', y: 50 },
      { x: '2018-02-23', y: 48 },
    ],
    user: null,
    columns: [
      { title: "Date", dataIndex: 'x' },
      { title: "Weight", dataIndex: 'y' },
    ]
  };

  // componentWillMount = () => {
  //   if (!this.props.user) {
  //     Actions.login();
  //   }
  //   dataset = [];
  //   this.props.user.progress.progress.map(data => {
  //     dataset.push({ y: data.date, x: data.weight });
  //   });
  //   this.setState({ user: this.props.user, data: dataset });
  // };

  renderHeader() {
    return this.state.columns.map((col, index) => {
      if (index === 0) {
        return (
          <Left key={index} style={[styles.headerItem]}>
            <Text>{col.title}</Text>
          </Left>
        )
      } else {
        return (
          <Right key={index} style={[styles.headerItem]}>
            <Text>{col.title}</Text>
          </Right>
        )
      }
    })
  }

  renderRow(rowData, index) {
    return (
      <View key={index} style={styles.row}>
        {
          this.state.columns.map(col => this.renderCell(rowData[col.dataIndex], col))
        }
      </View>
    );
  }

  renderCell(cellData, col) {
    if (typeof cellData === "object") {
      return (
        <Left key={col.dataIndex}>
          <Text>{cellData.toLocaleDateString()}</Text>
        </Left>
      )
    } else {
      return (
        <Right key={col.dataIndex} style={[styles.cell]}>
          <Text>{cellData}</Text>
        </Right>
      )
    }
  }

  render() {
    let sampleData = [
      {
        seriesName: 'series1',
        data: this.state.series1,
        color: '#297AB1'
      },
      {
        seriesName: 'series2',
        data: this.state.series2,
        color: 'yellow'
      }
    ]
    return (
      <Wrapper padder>
        <ScreenLabel text="Progress" />
        <PureChart data={sampleData} type='line' />

        {/* <View>
          <View style={styles.header}>
            {this.renderHeader()}
          </View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent} >
            {data.map((rowData, index) => this.renderRow(rowData, index))}
          </ScrollView>
        </View> */}

      </Wrapper>
    );
  }
}

let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  header: {
    flexDirection: 'row',
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
  dataViewContent: {
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
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


{/* <Container>
  <Content padder>
    <VictoryChart theme={VictoryTheme.material} scale={{ x: "time" }}>
      <VictoryLine
        style={{ data: { stroke: "#c43a31" } }}
        data={this.state.data}
      />
    </VictoryChart>
    <List>{this.renderList}</List>
  </Content>
</Container> */}