import React from 'react';
import { Button, Right, Text } from 'native-base';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Wrapper, Submit, TextBox } from '../../components';
import { Actions } from 'react-native-router-flux';
import { setData } from '../../AsyncStorage';
import moment from 'moment';

class Journey extends React.Component {
  state = {
    user: {},
    day: 1
  };

  componentWillMount() {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
    console.log('currentday', this.props.user.current_day);
  }

  componentDidMount = () => {
    this.setState({ day: this.props.user.current_day });
  };

  handleReset = async () => {
    user = this.state.user;
    delete user.current_plan;
    delete user.current_day;
    await setData(user.username, user);
    Actions.replace('plan', { user });
  };

  renderWeek(day) {
    let week = [];
    for (x = 1; x <= 7; x++) {
      let j = day * 7 + x - 7;
      if (j < 31) {
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

  handleNextClick = () => {
    if (!!this.state.user.current_day_finished) {
      if (moment(this.state.user.current_day_finished).isSame(new Date(), 'day'))
        Alert.alert(
          'Exercise Already Done',
          'Seems you already accompplished your plan. Patience and consistency is key',
          [{ text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }],
          { cancelable: false }
        );
    }
    Actions.daymeal({ user: this.state.user });
  };
  render() {
    console.log('exerciselist', this.state);

    return [
      <Wrapper key={1} style={styles.container}>
        <Button style={{ left: 0, marginBottom: 5 }} onPress={this.handleReset}>
          <Text>Reset Plan</Text>
        </Button>
        {this.renderCalendar()}
      </Wrapper>,
      <Submit key={2} text="Proceed" onSubmit={this.handleNextClick} />
    ];
  }
}

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: width / 7
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
