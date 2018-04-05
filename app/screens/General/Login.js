import React from 'react';
import { Form, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dimensions, StyleSheet } from 'react-native';
import { getData, setData } from '../../AsyncStorage';
import { Error, ScreenLabel, Submit, TextBox, Wrapper } from '../../components';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errors: ''
  };

  componentWillMount = async () => {
    let user;
    try {
      const username = await getData('currentUser');
      console.log('******', username);
      if (username) user = await getData(username);
    } catch (error) {
      console.log('No user signed in');
    }
    console.log('login', this.state);
    console.log('login', user);
    if (user) Actions.landing({ user });
  };

  componentDidMount = () => {
    console.log(' potato');
  };

  handleLogin = async () => {
    console.log('potoato', this.state);
    try {
      const user = await getData(this.state.username);

      if (!user) throw new Error();
      console.log(user, 'user');

      if (user.password == this.state.password) {
        await setData('currentUser', user.username);
        Actions.landing({ user });
      } else {
        throw new Error();
      }
    } catch (error) {
      this.setState({ errors: 'Invalid Username /  Password' });
    }
  };

  handleSignUp = () => {
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
          <Text style={styles.createUserText} onPress={() => Actions.signup()}>
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

const dummyUser = {
  username: 'puroyski',
  password: 'potato',
  plan: 'defaultfull',
  progress: {
    day: 10,
    intitial_height: 169,
    initial_weight: 68,
    initial_date: Date(),
    target_weight: 60,
    progress: [
      {
        date: Date(),
        weight: 67.5
      },
      {
        date: Date(),
        weight: 66.7
      },
      {
        date: Date(),
        weight: 66
      },
      {
        date: Date(),
        weight: 65.6
      }
    ]
  },
  notification: false,
  sound: false,
  sync: false,
  customdishes: [],
  customexercises: [],
  customplans: [],
  date_created: Date(),
  date_modified: Date()
};

export default Login;

// <Container>
//   <Content padder>
//     <Text style={styles.syncText} onPress={() => Actions.syncnow()}>
//       Sync Now
//           </Text>
//     <Form>
//       <Text style={styles.errorText}>{this.state.errors}</Text>
//       <Item floatingLabel>
//         <Label>Username</Label>
//         <Input
//           onChangeText={input =>
//             this.setState({
//               username: input,
//               errors: ""
//             })
//           }
//         />
//       </Item>
//       <Item floatingLabel last>
//         <Label>Password</Label>
//         <Input
//           secureTextEntry
//           onChangeText={input =>
//             this.setState({
//               password: input,
//               errors: ""
//             })
//           }
//         />
//       </Item>
//       <Text
//         style={styles.createUserText}
//         onPress={() => Actions.signup()}
//       >
//         Create new user
//             </Text>
//       <Button block onPress={this.handleLogin}>
//         <Text>Login</Text>
//       </Button>
//     </Form>
//   </Content>
// </Container>
