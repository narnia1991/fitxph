import React from "react";
import { Actions } from "react-native-router-flux";

class Featured extends React.Component {
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

export default Featured;
