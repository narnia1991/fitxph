import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
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
      if (j < 31)
        week.push(
          <View key={j} style={this.state.day && this.state.day < j ? styles.dayBox : styles.dayBoxFinished}>
            <Text style={{ fontWeight: 'bold' }}>{this.state.day && this.state.day < j ? j : 'X'}</Text>
          </View>
        );
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
      <Wrapper>{this.renderCalendar()}</Wrapper>,
      <Submit text="Proceed" onSubmit={() => Actions.daymeal({ user: this.state.user })} />
    ];
  }
}

const styles = StyleSheet.create({
  week: {
    flex: 1,
    flexDirection: 'row'
  },
  dayBox: {
    flex: 1,
    width: 20,
    height: 20,
    backgroundColor: 'green'
  },
  dayBoxFinished: {
    flex: 1,
    width: 20,
    height: 20,
    backgroundColor: 'red'
  }
});
export default Journey;
