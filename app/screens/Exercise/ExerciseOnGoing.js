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

class ExerciseOnGoing extends React.Component {
  state = {
    buttonText: 'Next',
    user: {},
    exercises: [],
    finished: [],
    isCountdown: false,
    currentExercise: 0,
    exerciseFinished: false,
    routineFinished: false,
    exerciseOnGoing: false,
    routineLength: 0
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }

    this.setState({
      user: this.props.user,
      exercises: this.props.exercises,
      routineLength: this.props.exercises.length
    });
    console.log('exercise ongoing', this.state);
  };

  handleNextClick = () => {
    if (this.state.isCountdown) {
      this.countdown(this.state.currentExercise.reps.match(/\d+/)[0]);
      if (!this.state.timer) {
        this.setState({ isCountdown: false });
      }
    }
    this.setState({ isCountdown: false });
    Tts.stop();
    if (this.state.currentExercise < this.state.exercises.length - 1) {
      this.setState({ currentExercise: this.state.currentExercise + 1 });
      if (isNaN(this.state.currentExercise.reps))
        this.setState({
          isCountdown: true,
          buttonText: 'Start'
        });
    } else Actions.exercisefinished({ user: this.state.user });
  };

  countdown = timeCount => {
    timeCount = timeCount - 1;
    if (timeCount > -1) {
      setTimeout(() => {
        this.setState({ timer: timeCount });
        if (timeCount == 0) this.setState({ finished: true });
        this.countdown(timeCount);
      }, 1000);
    }
  };

  render() {
    const item = this.state.exercises[this.state.currentExercise];
    return [
      <Wrapper>
        <Image source={imageLoader[item.Workout] || imageLoader.Splash} />
        <Text> </Text>
        <Card>
          <CardItem header>
            <Text>{item.Workout}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{this.state.isCountdown?this.state.timer:item.Reps}</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>,
      <Submit
        disabled={this.state.exerciseOnGoing}
        key={2}
        onSubmit={this.handleNextClick}
        text={this.state.buttonText}
      />
    ];
  }
}

export default ExerciseOnGoing;
