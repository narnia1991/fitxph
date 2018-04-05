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
      if (mealPlan) {
        const meals = mealPlan[this.props.user.progress.day];
        if (meals) {
          this.setState({ items: meals });
        }
      }
    }
    this.setState({ user: this.props.user });
  };

  renderMealPlan = () => {
    const meals = [];
    this.state.items.map(item => {
      meals.push(renderMeals(item));
    });
    return meals;
  };

  renderMeals = item => {
    return <Lists key={item.meal} items={item.dish} keyValue="food" subKey="quantity" handlePress={() => {}} />;
  };

  render() {
    console.log('render', this.state);
    return [
      <Wrapper key={1}>{this.renderMealPlan}</Wrapper>,
      <Submit text="Workouts" onSubmit={() => Actions.dayworkout({ user: this.state.user })} />
    ];
  }
}

export default DayMeal;
