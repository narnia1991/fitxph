// exercise list
// fab to add exercise
import React from "react";

class ExerciseList extends React.Component {
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

export default ExerciseList;
