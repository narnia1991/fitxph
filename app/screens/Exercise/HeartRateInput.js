//add option to bluetooth
//timer
//exercise image
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Fab, StyleProvider } from 'native-base';
import { Image } from 'react-native';
import imageLoader from '../../utils/imageLoader';
import { Wrapper, Submit } from '../../components';
import Tts from 'react-native-tts';

class HeartRateInput extends React.Component {
  state = {
    heartRate: 0,
    errors: ''
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }

    this.setState({
      user: this.props.user
    });
  };

  handleNextClick = async () => {
    if (isNaN(this.state.heartRate) || this.state.heartRate === 0)
      return this.setState({ errors: 'Please supply valid input' });
    const exercise_data = {
      pre_heart_rate: this.state.heartRate
    };
    Actions.exerciseongoing({ user: this.state.user, exercise_data });
  };

  render() {
    const item = this.state.exercises[this.state.currentExercise];
    return [
      <Wrapper>
        <Image source={imageLoader.heart} />
        <TextBox
          label="Heart Rate"
          onChangeText={input =>
            this.setState({
              heartRate: input,
              errors: ''
            })
          }
        />
      </Wrapper>,
      <Submit disabled={this.state.exerciseOnGoing} key={2} onSubmit={this.handleNextClick} text="Submit" />
    ];
  }
}

export default HeartRateInput;
