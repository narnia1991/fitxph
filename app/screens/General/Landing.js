import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Tile } from "../../components";
import imageLoader from "../../utils/imageLoader";

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
    // if (!this.state.user.plan) return false;
    // else
    Actions.progress({ user: this.state.user });
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
        contentColor="#FFF"
        backGroundColor="rgba(0,139,139,.5)"  //dark cyan
        onPress={this.handlePlanPress}
      />,
      <Tile
        uri={imageLoader.Progress}
        content="Progress"
        key="Progress"
        onPress={this.handleProgressPress}
      />,
      <Tile
        uri={imageLoader.Reference}
        content="Reference"
        key="Reference"
        onPress={this.handleReferencePress}
      />
    ]
  }
}

export default Landing;
