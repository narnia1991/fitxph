//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";

class InitialData extends React.Component {
  state = {
    user: {}
  };
  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };
  render() {
    return;
  }
}

export default InitialData;
