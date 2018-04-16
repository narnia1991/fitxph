import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Toast } from 'native-base';
import { Tile } from '../../components';
import imageLoader from '../../utils/imageLoader';
import { getData } from '../../AsyncStorage';
import { getProgress } from './LandingModel';

class Landing extends Component {
  state = {
    user: null
  };

  componentWillMount = () => {
    console.log('landing', this.props.user);
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  handlePlanPress = async () => {
    const progress = await getData(`${this.props.user.username}_progress`);

    if (!this.state.user.current_plan)
      return Actions.plan({ user: this.state.user });
    if (!progress.initial_weight)
      return Actions.initialData({ user: this.state.user });
    if (!progress.target_weight)
      return Actions.goal({ user: this.state.user });
    else Actions.journey({ user: this.state.user });
  };

  handleProgressPress = async () => {
    if (!this.state.user.current_plan)
      Toast.show({
        text: "You haven't set up a plan yet",
        position: 'bottom',
        buttonText: 'Okay'
      });
      else
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
        backGroundColor="rgba(0,139,139,.5)" //dark cyan
        onPress={this.handlePlanPress}
      />,
      <Tile uri={imageLoader.Progress} content="Progress" key="Progress" onPress={this.handleProgressPress} />,
      <Tile uri={imageLoader.Reference} content="Reference" key="Reference" onPress={this.handleReferencePress} />
    ];
  }
}

export default Landing;
