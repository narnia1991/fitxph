import React from "react";

class ExerciseFinished extends React.Component {
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

export default ExerciseFinished;
