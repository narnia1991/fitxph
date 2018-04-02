import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Tile } from "../../components";
import imageLoader from "../../utils/imageLoader";

class Reference extends Component {
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
        key={1}
        uri={imageLoader.Workout}
        content="Exercises"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleExercisePress}
      />,
      <Tile
        key={2}
        uri={imageLoader.Eat}
        content="Foods"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleFoodPress}
      />,
      <Tile
        key={3}
        uri={imageLoader.Discover}
        content="Discover"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleDiscoverPress}
      />
    ];
  }
}

export default Reference;
