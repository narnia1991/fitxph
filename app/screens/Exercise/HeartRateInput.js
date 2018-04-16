//add option to bluetooth
//timer
//exercise image
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Fab, StyleProvider } from 'native-base';
import { Image, View } from 'react-native';
import imageLoader from '../../utils/imageLoader';
import { Wrapper, Submit, TextBox, ScreenLabel } from '../../components';
import { hrStatus, hrTarget } from '../../utils/bmi'

class HeartRateInput extends React.Component {
  state = {
    heartRate: 0,
    errors: '',
    status: '',
    mid: '',
    high: '',
    max: ''
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }

    this.setState({
      user: this.props.user,
      exercises: this.props.exercises
    });
  };

  handleNextClick = async () => {
    if (this.state.heartRate === 0) return this.setState({ errors: 'Please supply valid input' });
    const exercise_data = {
      pre_heart_rate: this.state.heartRate
    };
    Actions.exerciseongoing({ user: this.state.user, exercise_data, exercises: this.state.exercises });
  };
  handleChange = input => {
    // const status = hrStatus(input) || ''
    // const hrTarget = hrTarget(this.state.user.dob) || ''
    this.setState({
      heartRate: input,
      errors: '',
      // status,
      // mid: hrTarget.mid,
      // high: hrTarget.high,
      // max: hrTarget.max,
    })
  }
  render() {
    // const item = this.state.exercises[this.state.currentExercise];
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Heart Rate" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={imageLoader.Heart} style={{ width: 100, height: 100 }} />
          <View>
            {/* <Text>Status: {this.state.status}</Text>
            <Text>Max Heartrate: {this.state.max}</Text>
            <Text>Target(mid): {this.state.mid}</Text>
            <Text>Target(high): {this.state.high}</Text> */}
          </View>
        </View>
        <TextBox
          label="Heart Rate"
          onChangeText={this.handleChange}
          style={{ padding: 5 }}
        />
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleNextClick} text="Submit" />
    ];
  }
}

export default HeartRateInput;
