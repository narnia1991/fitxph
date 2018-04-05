//add option to bluetooth
//timer
//exercise image
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Fab, StyleProvider } from 'native-base';
import { Image } from 'react-native';
import imageLoader from '../../utils/imageLoader';
import { Wrapper } from "../../components";

class ExerciseOnGoing extends React.Component {
  state = {
    user: {},
    exercises: [],
    finished: [],
    currentExercise: 0,
    exerciseFinished: false,
    routineFinished: false
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({
      user: this.props.user,
      exercises: this.props.user.plan.exercise_plan[this.props.user.progress.day]
    });

    console.log('exercise ongoing', this.state);
  };

  handleNextClick = () => { };

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
    return [
      <Wrapper>
        <Image source={imageLoader.Splash} />
        <Text>{item.reps}</Text>
        <Card>
          <CardItem header>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{item.Workout}</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleLogin} text="Login" />
    ];
  }
}

export default ExerciseOnGoing;
