import React from "react";
import { Container, Content, Tab, Tabs } from "native-base";
import { Actions } from "react-native-router-flux";

class Day extends React.Component {
  state = {
    user: {}
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  renderTabs = () => {
    const { plan, progress } = this.state.user;
    const header = "";
    const tabs = [];
    if (plan.exerciseplan) {
      <Tab heading="Exercises">
        <Tab1 />
      </Tab>;
    } else if (plan.exerciseplan) {
      <Tab heading="Meals">
        <Tab1 />
      </Tab>;
    }
    return tabs;
  };

  render() {
    return (
      <Container>
        <Tabs initialPage={1}>{this.renderTabs}</Tabs>
      </Container>
    );
  }
}

export default Day;
