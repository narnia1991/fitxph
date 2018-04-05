import React from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

import { Lists, Wrapper, Submit } from '../../components';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getData } from '../../AsyncStorage';
import { weight_loss } from '../../default/plan';
import { weight_gain } from '../../default/plan2';

class DayWorkout extends React.Component {
  state = {
    user: {},
    meals: []
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }

    console.log('dayexercise');
    let plans = [weight_loss, weight_gain];
    //get custom plans from asyncstorage
    const plan = plans.filter(plan => plan.name === this.props.user.plan.name);
    if (plan) {
      const exercisePlan = plan[0].exercise_plan;
      if (exercisePlan) {
        const exercise = exercisePlan[this.props.user.progress.day];
        if (exercise) {
          this.setState({ items: exercise });
        }
      }
    }
    this.setState({ user: this.props.user });
  };

  render() {
    console.log(this.state);
    return [
      <Wrapper key={1}>
        <Lists items={this.state.items} keyValue="Workout" subKey="Reps" handlePress={() => {}} />
      </Wrapper>,
      <Submit
       key={2}
        text="Proceed"
        onSubmit={() => Actions.exerciseongoing({ user: this.state.user, exercises: this.state.items })}
      />
    ];
  }
}

export default DayWorkout;
