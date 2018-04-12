import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import { Image } from 'react-native';
import { Wrapper, Submit } from '../../components';
import { setData } from '../../AsyncStorage';

class ExerciseFinished extends React.Component {
  state = {
    user: {}
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });

    const user = {
      ...this.props.user,
      current_day: this.props.user.current_day + 1,
      current_day_finished: new Date()
    };

    setData(this.props.user.username, user);
  };

  handleClick() {
    return Action.landing({ user: this.state.user });
  }

  render() {
    return [
      <Wrapper key={1}>
        <Image source={imageLoader.Splash} />
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
