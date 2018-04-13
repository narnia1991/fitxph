//add option to bluetooth
//timer
//exercise image
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Fab, StyleProvider } from 'native-base';
import { Image, View } from 'react-native';
import imageLoader from '../../utils/imageLoader';
import { Wrapper, Submit, TextBox, ScreenLabel } from '../../components';
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
      user: this.props.user,
      exercise_data: this.props.exercise_data
    });
  };

  handleNextClick = async () => {
    if (this.state.heartRate === 0) return this.setState({ errors: 'Please supply valid input' });
    const exercise_data = {
      post_heart_rate: this.state.heartRate
    };
    Actions.exercisefinished({ user: this.state.user, exercise_data, exercises: this.state.exercises });
  };

  render() {
    // const item = this.state.exercises[this.state.currentExercise];
    return [
      <Wrapper>
        <ScreenLabel text="Heart Rate" />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={imageLoader.Heart} style={{ height: 200, width: 200 }} />
        </View>
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
      <Submit key={2} onSubmit={this.handleNextClick} text="Submit" />
    ];
  }
}

export default HeartRateInput;
