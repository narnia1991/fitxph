// exercise list
// fab to add exercise
import React from "react";
import { Actions } from "react-native-router-flux";

class ExerciseList extends React.Component {
  state = {
    user: {}
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };
  render() {
    return;
  }
}

export default ExerciseList;
