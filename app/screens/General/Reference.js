import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Container, Content } from "native-base";
import Tile from "../../components/Tile";
import imageLoader from "../../utils/imageLoader";
class Landing extends Component {
  state = {
    user: null
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    } else {
      this.setState({ user: this.props.user });
    }
  };

  handleExercisePress = () => {
    Actions.exerciselist({ user: this.state.user });
  };
  handleFoodPress = () => {
    Actions.foodlist({ user: this.state.user });
  };
  handleDiscoverPress = () => {
    Actions.discover({ user: this.state.user });
  };

  render() {
    return [
      <Tile
        uri={imageLoader.Workout}
        content="Exercises"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleExercisePress}
      />,
      <Tile
        uri={imageLoader.Eat}
        content="Foods"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleFoodPress}
      />,
      <Tile
        uri={imageLoader.Discover}
        content="Discover"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleDiscoverPress}
      />
    ];
  }
}

export default Landing;
