import React from 'react';
import { Button, Right, Text, Item, Input, Label } from 'native-base';
import { StyleSheet, Dimensions, View } from 'react-native';
import { DatePicker, Error, Wrapper, ScreenLabel, SectionLabel, Submit, TextBox } from '../../components';
import { Actions } from 'react-native-router-flux';
import { getData, setData } from '../../AsyncStorage';
import { bmi, bmiStatus } from '../../utils/bmi';
import { getUnix } from '../../utils/unix'

const options = {
  date: new Date(),
  maxDate: new Date()
};


class Goal extends React.Component {
  state = {
    user: {},
    day: 1,
    weight: 0,
    errorMsg: ''
  };

  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }
    const progress = this.props.progress || await getData(`${this.props.user.username}_progress`);
    this.setState({ user: this.props.user, progress });
  }

  // componentDidMount = async () => {
  //   const progress = await getData(`${this.props.user.username}_progress`);
  //   this.setState({ progress });
  // };

  handleOnChange = input => {
    console.log(input);
    this.setState({ target_weight: input, errorMsg: '' });
  };

  handleSubmit = async () => {
    if (!this.state.target_weight)
      return this.setData({ errorMsg: 'all fields required' })


    const progress = this.state.progress

    progress.target_weight = this.state.target_weight;
    progress.target_date = getUnix(new Date()) + (86400 * 30)
    progress.target_no_days = 30

    // i_weight = 90
    // t_weight = 85
    // t_total = -5

    // t_total = t_weight - i_weight
    // e_weight - i_weight / t_total * 100
    // 87 - 90 / -5

    progress.target_total = this.state.target_weight - progress.initial_weight

    // t_weight - i_weight/ 30
    progress.target_diff_per_day = (this.state.target_weight - progress.initial_weight) / 30
    progress.target_discrepancy = 0

    console.log(progress)

    await setData(`${this.state.user.username}_progress`, progress);
    Actions.replace('journey', { user: this.state.user });

  };

  getCurrentBMI = () => {
    if (this.state.progress && this.state.progress.initial_weight && this.state.progress.initial_height) {
      const { initial_weight, initial_height } = this.state.progress;

      return bmi(initial_weight, initial_height).toString();
    } else {
      return '0';
    }
  };

  getTargetBMI = weight => {
    const targetWeight = weight || 0;

    if (targetWeight && this.state.progress && this.state.progress.initial_height) {
      const { initial_height } = this.state.progress;

      return bmi(targetWeight, initial_height).toString();
    } else {
      return '0';
    }
  };

  getStatusBMI = weight => {
    const targetWeight = weight || 0;

    if (targetWeight && this.state.progress && this.state.progress.initial_height) {
      const { initial_height } = this.state.progress;

      const bmiValue = bmi(targetWeight, initial_height);
      return bmiStatus(bmiValue);
    } else {
      return 'Nothing to Show';
    }
  };

  render() {
    return [<Wrapper key={1} padder>
      <ScreenLabel text="Set your Goal" />
      <Error message={this.state.errorMsg} />
      <TextBox label="Target Weight(kg)" onChangeText={input => this.handleOnChange(input)} />
      <SectionLabel text="Status:" />
      <Item disabled stackedLabel>
        <Label>Current Weight</Label>
        <Input
          disabled
          placeholder={
            this.state.progress && this.state.progress.initial_weight
              ? this.state.progress.initial_weight
              : 'Not set'
          }
        />
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
    ]
  }
}

export default Goal;
