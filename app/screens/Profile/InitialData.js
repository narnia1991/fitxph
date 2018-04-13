//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { DatePickerAndroid, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Form, Text } from 'native-base';
import { DatePicker, Dropdown, ScreenLabel, SectionLabel, Submit, TextBox, Wrapper } from '../../components';
import { setData } from '../../AsyncStorage';
import { getUnix } from '../../utils/unix';

const options = {
  date: new Date(),
  maxDate: new Date()
};

class InitialData extends React.Component {
  state = {
    user: {},
    gender: '',
    errors: ''
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
    this.gender = 'male';
  };

  onValueChange(value) {
    this.setState({
      gender: value
    });
  }

  handleSubmit = async () => {
    const { name, dob, gender, weight, height } = this;
    console.log('data', name, dob, gender, weight, height);
    console.log('state', this.state);
    if (!name || !dob || !gender || !weight || !height) return this.setState({ errors: 'All fields are required' });
    const user = {
      ...this.state.user,
      name,
      dob,
      gender,
      initial_weight: weight,
      initial_height: height,
      start_date: getUnix(options.date)
    };

    await setData(`${this.state.user.username}_progress`, user);
    Actions.replace('landing', { user });
  };

  render() {
    return [
      <Wrapper key={1}>
        <ScreenLabel text="Let's get started!" />
        <Text style={{ color: 'red' }}>{this.state.errors}</Text>
        <Form>
          <TextBox label="Name" onChangeText={text => (this.name = text)} />
          <DatePicker label="Date of Birth(MM/DD/YYYY)" onChangeText={text => (this.dob = text)} />
          <Dropdown
            label="Gender"
            onChange={value => (this.gender = value)}
            options={[{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }]}
            defaultValue={{ name: 'Male', value: 'male' }}
          />
          <SectionLabel text="Initial Data" />
          <TextBox label="Weight(kg)" onChangeText={text => (this.weight = text)} />
          <TextBox label="Height(m)" onChangeText={text => (this.height = text)} />
        </Form>
      </Wrapper>,
      <Submit key={2} text="Submit" onSubmit={this.handleSubmit} />
    ];
  }
}

export default InitialData;
