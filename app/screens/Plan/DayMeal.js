import React from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

import { Lists, Wrapper, Submit } from '../../components';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getData } from '../../AsyncStorage';
import { weight_loss } from '../../default/plan';
import { weight_gain } from '../../default/plan2';

class DayMeal extends React.Component {
  state = {
    user: {},
    meals: []
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    console.log('daymeal');
    let plans = [weight_loss, weight_gain];
    //get custom plans from asyncstorage
    console.log(plans);
    const plan = plans.filter(plan => plan.name === this.props.user.plan.name);
    console.log(plan);
    if (plan) {
      const mealPlan = plan[0].meal_plan;
      console.log('plan', mealPlan);

      if (mealPlan) {
        const meals = mealPlan[this.props.user.progress.day];
        console.log('mealplan', meals);

        if (meals) {
          console.log('meals');
          this.setState({ items: meals });
        }
      }
    }
    this.setState({ user: this.props.user });
  };

  renderMeals = () => {
    return foreach(this.state.items, item => {
      <Lists items={this.state.item.dish} keyValue="food" subKey="quantity" />;
    });
  };

  render() {
    console.log(this.state);
    return [
      <Wrapper key={1}>{this.renderMeals}</Wrapper>,
      <Submit text="Workouts" onSubmit={() => Actions.dayworkout({ user: this.state.user })} />
    ];
  }
}

export default DayMeal;
