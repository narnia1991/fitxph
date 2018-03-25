//TODO: create data for plan selection
//SECTIONS || Diet plan | Workout plan | Full Fitness Plan
// if there is a current plan, redirect to calendar
//option to add custom plan
/*
plan structure:
{
    name,
    creator,
    type,
    difficulty,
    exerciseplan
    dietplan
    exercises,
    dishes
}
*/

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Container, Tabs, Tab } from "native-base";
import { Actions } from "react-native-router-flux";
import imageLoader from "./imageLoader";
import PlanList from "./PlanList";
import Header from "../components/Header";

class Plan extends React.Component {
  state = {
    user: null
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    console.log("plan");
    console.log(user);
    if (this.props.user.plan) {
      console.log("hasplan");
      console.log(Actions.calendar);
      Actions.calendar({ user: this.props.user });
    } else this.setState({ user: this.props.user });
  };

  render() {
    return (
      <Container>
        <Tabs initialPage={1}>
          <Tab heading="Workout Plan">
            <PlanList type="exercise" user={this.state.user} />
          </Tab>
          <Tab heading="Diet Plan">
            <PlanList type="diet" user={this.state.user} />
          </Tab>
          <Tab heading="Full Fitness ">
            <PlanList type="full" user={this.state.user} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Plan;
