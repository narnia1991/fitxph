import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import { Image, View } from 'react-native';
import { Wrapper, Submit } from '../../components';
import { getData, setData } from '../../AsyncStorage';
import imageLoader from '../../utils/imageLoader';
import {getUnix} from '../../utils/unix'

class ExerciseFinished extends React.Component {
  state = {
    user: {}
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });

    const user = {
      ...this.props.user,
      current_day: this.props.user.current_day + 1,
      current_day_finished: getUnix(new Date())
    };
  console.log(user)
    let exerciseData = [];
    exerciseData.push(await getData(`${this.props.user.username}_exercise_data`))

    exerciseData.push(this.props.exercise_data)

    await setData(this.props.user.username, user);
    await setData(`${this.props.user.username}_exercise_data`, exerciseData);
  };

  handleClick = () => {
    return Actions.replace('landing', { user: this.state.user });
  }

  render() {
    return [
      <Wrapper key={1}>
        <View style={{flex:1, alignItems: 'center'}}>
          <Image source={imageLoader.Splash} />
        </View>
      <Card>
          <CardItem header>
            <Text>Congratulations!!!</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>You have finished your workout</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>,
      <Submit key={2} text="Go to Home Screen" onSubmit={this.handleClick} />
    ];
  }
}

export default ExerciseFinished;
