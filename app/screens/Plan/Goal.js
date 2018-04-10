import React from 'react';
import { Button, Right, Text, Item, Input, Label } from 'native-base';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Wrapper, ScreenLabel, SectionLabel, Submit, TextBox } from '../../components';
import { Actions } from 'react-native-router-flux';
import { getData, setData } from '../../AsyncStorage';
import { bmi, bmiStatus } from '../../utils/bmi';

class Goal extends React.Component {
  state = {
    user: {},
    day: 1,
    weight: 0
  };

  componentWillMount() {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  }

  componentDidMount = async () => {
    const progress = await getData(`${this.props.user.username}_progress`);
    console.log(progress)
    this.setState({ progress });
    // this.setState({ day: this.props.user.current_day });
  };

  handleOnChange = input => {
    this.setState({ target_weight: input });
  }

  handleSubmit = async () => {
    const target_weight = this.targetWeight;

    const progress = await getData(`${this.state.user.username}_progress`)

    progress.target_weight = target_weight;

    await setData(`${this.state.user.username}_progress`, progress);
    Actions.replace('journey', { user: this.state.user });
  };

  getCurrentBMI = () => {
    if (this.state.progress && this.state.progress.initial_weight && this.state.progress.initial_height) {
      const { initial_weight, initial_height } = this.state.progress

      return bmi(initial_weight, initial_height).toString();
    } else {
      return '0'
    }
  }

  getTargetBMI = weight => {
    const targetWeight = weight || 0;

    if (targetWeight && this.state.progress && this.state.progress.initial_height) {
      const { initial_height } = this.state.progress

      return bmi(targetWeight, initial_height).toString()
    } else {
      return '0'
    }
  }

  getStatusBMI = weight => {
    const targetWeight = weight || 0;

    if (targetWeight && this.state.progress && this.state.progress.initial_height) {
      const { initial_height } = this.state.progress

      const bmiValue = bmi(targetWeight, initial_height)
      return bmiStatus(bmiValue)
    } else {
      return '0'
    }
  }

  render() {
    if (this.state.progress) {
      return [
        <Wrapper key={1} padder>
          <ScreenLabel text="Set your Goal" />
          <TextBox label="Target Weight" onChangeText={(input) => this.handleOnChange(input)} />
          <SectionLabel text="Status:" />
          <Item disabled stackedLabel>
            <Label>Current Weight</Label>
            <Input disabled placeholder={this.state.progress && this.state.progress.initial_weight ? this.state.progress.initial_weight : 'Not set'} />
          </Item>
          <Item disabled stackedLabel>
            <Label>Current BMI</Label>
            <Input disabled placeholder={this.getCurrentBMI()} />
          </Item>
          <SectionLabel text="Target Status:" />
          <Item disabled stackedLabel>
            <Label>Target BMI</Label>
            <Input disabled placeholder={this.getTargetBMI(this.state.target_weight)} />
          </Item>
          <Item disabled stackedLabel>
            <Label>BMI Status</Label>
            <Input disabled placeholder={this.getStatusBMI(this.state.target_weight)} />
          </Item>
        </Wrapper>,
        <Submit key={2} text="Start" onSubmit={this.handleSubmit} />
      ];
    } else {
      return <Text>Initial Data Not Set</Text>
    }
  }
}

export default Goal;
