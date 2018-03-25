import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Container, Content } from "native-base";
import Tile from "../components/Tile";
import imageLoader from "./imageLoader";
class Landing extends Component {
  state = {
    user: null
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  handlePlanPress = () => {
    console.log(Actions.plan);
    Actions.plan({ user: this.state.user });
    // Actions.planlist({ user: this.state.user });
  };
  handleProgressPress = () => {
    if (!this.state.user.plan) Actions.progress({ user: this.state.user });
  };
  handleReferencePress = () => {
    Actions.reference({ user: this.state.user });
  };

  render() {
    return [
      <Tile
        uri={imageLoader.Plans}
        content="Plan"
        key="Plan"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handlePlanPress}
      />,
      <Tile
        uri={imageLoader.Progress}
        content="Progress"
        key="Progress"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleProgressPress}
      />,
      <Tile
        uri={imageLoader.Reference}
        content="Reference"
        key="Reference"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleReferencePress}
      />
    ];
  }
}

export default Landing;
