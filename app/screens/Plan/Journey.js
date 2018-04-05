import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Wrapper, Submit } from '../../components';
import { Actions } from 'react-native-router-flux';

class Journey extends React.Component {
  state = {
    progress: null,
    user: null
  };

  componentWillMount() {
    if (!this.props.user) {
      Actions.login();
    }

    const progress = this.props.user.progress || { day: 0 };
    this.setState({ user: this.props.user, progress });
    console.log('exerciselist', this.state);
  }
  renderWeek(day) {
    let week = [];
    for (x = 1; x <= 7; x++) {
      let j = day * 7 + x - 7;
      if (j < 31)
        week.push(
          <View
            key={j}
            style={this.state.progress.day && this.state.progress.day < j ? styles.dayBox : styles.dayBoxFinished}
          >
            <Text style={{ fontWeight: 'bold' }}>
              {this.state.progress.day && this.state.progress.day < j ? j : 'X'}
            </Text>
          </View>
        );
    }
    return week;
  }
  renderCalendar() {
    let month = [];
    for (i = 1; i <= 5; i++) {
      month.push(<View key={i}>{this.renderWeek(i)}</View>);
    }
    return month;
  }
  render() {
    return [
      <Wrapper>{this.renderCalendar()}</Wrapper>,
      <Submit text="Proceed" onPress={() => Actions.daymeal({ user: this.state.user })} />
    ];
  }
}

const styles = StyleSheet.create({
  dayBox: {
    width: 20,
    height: 20,
    color: 'green'
  },
  dayBoxFinished: {
    width: 20,
    height: 20,
    color: 'red'
  }
});
export default Journey;
