import React from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Wrapper, Submit } from '../../components';
import { Actions } from 'react-native-router-flux';

class Journey extends React.Component {
  state = {
    progress: {},
    user: {},
    day: 0
  };

  componentWillMount() {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
    if (this.state.user.progress && this.state.user.progress.day) this.setState({ day: this.state.user.progress.day });
    console.log('exerciselist', this.state);
  }
  renderWeek(day) {
    let week = [];
    for (x = 1; x <= 7; x++) {
      let j = day * 7 + x - 7;
      if (j < 31) {
        console.log(j);
        week.push(
          <View key={j} style={this.state.day && this.state.day < j ? styles.dayBox : styles.dayBoxFinished}>
            <Text style={{ fontWeight: 'bold' }}>{this.state.day && this.state.day < j ? j : 'X'}</Text>
          </View>
        );
      }
    }
    return week;
  }
  renderCalendar() {
    let month = [];
    for (i = 1; i <= 5; i++) {
      month.push(
        <View key={i} style={styles.week}>
          {this.renderWeek(i)}
        </View>
      );
    }
    return month;
  }
  render() {
    return [
      <Wrapper padder key={1} style={styles.container}>
        {this.renderCalendar()}
      </Wrapper>,
      <Submit key={2} text="Proceed" onSubmit={() => Actions.daymeal({ user: this.state.user })} />
    ];
  }
}

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: width / 7
  },
  week: {
    flex: 1,
    flexDirection: 'row'
  },
  dayBox: {
    width: width / 7 * 5 / 7,
    height: width / 7 * 5 / 7,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: width / 500,
    elevation: 5
  },
  dayBoxFinished: {
    width: width / 7 * 5 / 7,
    height: width / 7 * 5 / 7,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    margin: width / 500,
    elevation: 5
  }
});
export default Journey;
