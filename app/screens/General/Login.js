import React from 'react';
import { Form, Text, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dimensions, StyleSheet } from 'react-native';
import { getData, setData } from '../../AsyncStorage';
import { Error, ScreenLabel, Submit, TextBox, Wrapper } from '../../components';

class Login extends React.Component {
  initialState = {
    username: '',
    password: '',
    errors: ''
  };

  state = {
    ...this.initialState
  };

  componentWillMount = async () => {
    let user;
    try {
      const username = await getData('current_user');
      if (username) user = await getData(username);
    } catch (error) {
      console.log('No user signed in');
    }
    if (user) {
      const progress = await getData(`${user.username}_progress`);
      console.log(!progress);
      if (!progress) return Actions.replace('initialData', { user });
      Actions.replace('landing', {
        user,
        onBack: this.showExit
      });
    }
  };
  showExit = () => {
    Alert.alert(
      'Are You Sure You Want to Exit?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            style: 'cancel';
          }
        },
        { text: 'OK', onPress: this.handleExit }
      ],
      { cancelable: false }
    );
  };

  handleLogin = async () => {
    if (!this.state.username || !this.state.password)
      return this.setState({ errors: 'Username and Password required' });
    try {
      const user = await getData(this.state.username);
      const progress = await getData(`${this.state.username}_progress`);
      console.log('progress', progress);

      if (!user) throw new Error();

      if (user.password == this.state.password) {
        await setData('current_user', user.username);

        // if (!progress) return Actions.replace('initialData', { user });
        Actions.replace('landing', { user });
      } else {
        throw new Error();
      }
    } catch (error) {
      this.setState({ errors: 'Invalid Username /  Password' });
    }
  };

  handleSignUp = () => {
    this.setState(this.initialState);
    Actions.signup();
  };

  render() {
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Login" />
        <Form>
          <Error message={this.state.errors} />
          <TextBox
            label="Username"
            onChangeText={input =>
              this.setState({
                username: input,
                errors: ''
              })
            }
          />
          <TextBox
            label="Password"
            secureTextEntry
            onChangeText={input =>
              this.setState({
                password: input,
                errors: ''
              })
            }
          />
          <Text style={styles.createUserText} onPress={this.handleSignUp}>
            Create new user
          </Text>
        </Form>
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleLogin} text="Login" />
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

export default Login;
