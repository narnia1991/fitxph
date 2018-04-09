import React from 'react';
import { Container, Header, Content, Text } from 'native-base';

import { Lists, Wrapper, Submit, SectionLabel } from '../../components';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getData } from '../../AsyncStorage';
import { weight_loss } from '../../default/plan';
import { weight_gain } from '../../default/plan2';
import { maintain } from '../../default/plan3';

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
    let plans = [weight_loss, weight_gain, maintain];
    //get custom plans from asyncstorage
    console.log(plans);
    const plan = plans.filter(plan => plan.name === this.props.user.current_plan.name);
    console.log(plan);
    if (plan) {
      const mealPlan = plan[0].meal_plan;
      if (mealPlan) {
        const meals = mealPlan[this.props.user.current_day - 1];
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

  renderMeals = () => {
    const renderItems = [];
    console.log(this.state.items.length);
    if (this.state.items.length > 0)
      this.state.items.forEach(item => {
        console.log(item);
        renderItems.push(
          <SectionLabel text={item.meal} />,
          <Lists key={item.meal} items={item.dish} keyValue="food" subKey="quantity" handlePress={() => {}} />
        );
      });
    console.log(renderItems);
    return renderItems;
  };

  render() {
    const item = this.state.items;
    return [
      <Wrapper key={1}>{this.renderMeals()}</Wrapper>,
      <Submit key={2} text="Workouts" onSubmit={() => Actions.dayworkout({ user: this.state.user })} />
    ];
  }
}

export default DayMeal;
