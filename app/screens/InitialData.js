//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";
import { Actions } from "react-native-router-flux";

class InitialData extends React.Component {
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

export default InitialData;
