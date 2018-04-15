import React from 'react';
import moment from 'moment'
import { Form, Text, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dimensions, StyleSheet } from 'react-native';
import { getUnix } from '../../utils';
import { getData, setData } from '../../AsyncStorage';
import { Error, DatePicker, ScreenLabel, Submit, TextBox, Wrapper } from '../../components';

class InputProgress extends React.Component {
  state = {
    user: {},
    disableButton: false
  };
  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }
    const progress = await getData(`${this.props.user.username}_progress`)
    this.setState({ user: this.props.user, progress });
    if ((getUnix(new Date()) - progress.last_date) < 1) this.setState({ disableButton: true })
  };

  handleProgress = async () => {
    if (!this.weight) return this.setState({ errors: 'Error in input' });
    const progress = this.state.progress
    progress.last_date = getUnix(this.date)
    progress.last_weight = this.weight
    if (!progress.data) progress.data = [];

    const target = parseFloat(progress.last_weight) + parseFloat(((Math.round((getUnix(this.date) - progress.last_date) / 86400)) * progress.target_diff_per_day))

    console.log(target, 'targeeeeeeeeeeeeeeeeeeet')
    progress.data = [...progress.data, { date: getUnix(this.date), weight: this.weight, target }]

    await setData(`${this.state.user.username}_progress`, progress);
    console.log({ user: this.state.user, progress });
    Actions.replace('progress', { user: this.state.user, progress });
  };

  render() {
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Progress" />
        <Form>
          <Error message={this.state.errors} />


          <DatePicker label="Date(MM/DD/YYYY)" onChangeText={text => (this.date = text)} options={{ maxDate: new Date() }} />
          <TextBox label="Weight(kg)" onChangeText={input => (this.weight = input)} />
        </Form>
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleProgress} text="Save" />
    ];
  }
}

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  createUserText: {
    paddingTop: 30,
    paddingBottom: 30
  },
  syncText: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'right'
  },
  syncNowText: {
    paddingBottom: 30
  }
});

export default InputProgress;
