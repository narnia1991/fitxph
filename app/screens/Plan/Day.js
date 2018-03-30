import React from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import { View } from "react-native";
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

  getMeals = () => {
    const meals = [];
    meals.push(this.state.user.custom);
  };

  renderDietPlan = () => {
    const dishes = this.getMeals();
    const diet = this.state.user.plan.dietplan;
    const day = this.state.user.progress.day;
    const dayplan = diet[day].map(meal => {
      return (
        <View>
          <Text>{meal.meal}</Text>
          <Text>{meal.dishes}</Text>
        </View>
      );
    });
    return dayplan;
  };

  renderTabs = () => {
    const { plan, progress } = this.state.user;
    const header = "";
    const tabs = [];
    if (plan.exerciseplan) {
      <Tab heading="Exercises">
        <Tab1 />
      </Tab>;
    } else if (plan.diet) {
      <Tab heading="Meals">{this.renderDietPlan()}</Tab>;
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
