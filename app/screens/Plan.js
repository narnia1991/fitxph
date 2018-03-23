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
import { Actions } from "react-native-router-flux";
import imageLoader from "./imageLoader";

import Header from "../components/Header";

class Plan extends React.Component {
  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };
  render() {
    return (
      <Container>
        <Header title="Plan" hasTabs />
        <Tabs initialPage="1">
          <Tab heading="Workout Plan">
            <PlanList type="workout" />
          </Tab>
          <Tab heading="Diet Plan">
            <PlanList type="diet" />
          </Tab>
          <Tab heading="Full FItness Plan">
            <PlanList type="full" />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Plan;
