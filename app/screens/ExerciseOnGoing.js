//add option to bluetooth
//timer
//exercise image
import React from "react";

class ExerciseOnGoing extends React.Component {
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

export default ExerciseOnGoing;
