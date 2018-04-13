import React from 'react';
import { Form, Text, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dimensions, StyleSheet } from 'react-native';
import { getUnix } from '../../utils';
import { getData, setData } from '../../AsyncStorage';
import { Error, DatePicker, ScreenLabel, Submit, TextBox, Wrapper } from '../../components';

class InputProgress extends React.Component {
  state = {
    user: {}
  };
  componentWillMount = async () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  handleProgress = async () => {
    if (!this.date || !this.weight) return this.setState({ errors: 'Error in input' });
    const progress = await getData(`${this.state.user.username}_progress`);
    if (!progress.data) progress.data = [];
    progress.data = [...progress.data, { date: getUnix(this.date), weight: this.weight }];
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
          <DatePicker label="Date (MM/DD/YYYY)" onChangeText={text => (this.date = text)} />
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
