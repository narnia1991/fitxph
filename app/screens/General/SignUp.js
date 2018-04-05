import React, { Component } from 'react';
import { Form, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { getData, setData } from '../../AsyncStorage';
import { Error, ScreenLabel, Submit, TextBox, Wrapper } from '../../components';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirm_password: '',
    errors: ''
  };

  handleSignUp = async () => {
    try {
      console.log(this.state);
      const user = await getData(this.state.username);
      if (!user) {
        console.log('====================================');
        console.log('reselt', await getData(this.state.username));
        console.log('====================================');
        await setData(this.state.username, {
          username: this.state.username,
          password: this.state.password
        });

        Actions.initialData({
          user: {
            username: this.state.username,
          }
        });
      } else if (this.state.password !== this.state.confirm_password) {
        this.setState({ errors: "Password didn't match" });
      } else if (user) {
        this.setState({ errors: 'Username already taken' });
      }
    } catch (error) {
      console.log(error);
      this.setState({ errors: 'Cannot Sign Up' });
    }
  };

  render() {
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Create" />
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
          <TextBox
            label="Confirm Password"
            secureTextEntry
            onChangeText={input =>
              this.setState({
                confirm_password: input,
                errors: ''
              })
            }
          />
        </Form>
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleSignUp} text="Signup" />
    ];
  }
}

export default SignUp;
