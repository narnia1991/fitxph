import React from "react";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Title,
  Body
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Dimensions, StyleSheet, Text } from "react-native";
import { getData, setData } from "../AsyncStorage";

class Login extends React.Component {
  state = {
    username: "",
    password: "potato",
    errors: ""
  };

  componentWillMount = async () => {
    let user;
    const username = await getData("currentUser");
    if (username) user = await getData(username);
    if (user) Actions.landing(user);
  };

  componentDidMount = () => {
    console.log(" potato");
  };

  handleLogin = async () => {
    user = dummyUser;
    console.log("====================================");
    console.log(user, "user");
    console.log(this.state, "state");
    console.log("====================================");
    // const user = await getData(this.state.username);
    if (user && user.password == this.state.password) {
      console.log(user, "user");

      // await setData("currentUser", user.username);
      //upload to firebase
      Actions.landing({ user });
    }
    this.setState({ errors: "invalid Username /  Password" });
  };

  handleSignUp = () => {
    Actions.signup();
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={styles.syncText} onPress={() => Actions.syncnow()}>
            Sync Now
          </Text>
          <Form>
            <Text>{this.state.errors}</Text>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChange={input =>
                  this.setState({
                    username: input,
                    errors: ""
                  })
                }
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChange={input =>
                  this.setState({
                    password: input,
                    errors: ""
                  })
                }
              />
            </Item>
            <Text
              style={styles.createUserText}
              onPress={() => Actions.signup()}
            >
              Create new user
            </Text>
            <Button block onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

let { height, width } = Dimensions.get("window");
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
    paddingBottom: 30
  },
  syncNowText: {
    paddingBottom: 30
  }
});

const dummyUser = {
  username: "puroyski",
  password: "potato",
  plan: "defaultfull",
  progress: {
    day: 10,
    intitial_height: 169,
    initial_weight: 68,
    initial_date: Date(),
    target_weight: 60,
    progress: {
      date: Date(),
      weight: 67.5
    }
  },
  notification: false,
  sound: false,
  sync: false,
  custom_data: {
    exercises: [],
    dishes: [],
    plans: []
  },
  date_created: Date(),
  date_modified: Date()
};

export default Login;
