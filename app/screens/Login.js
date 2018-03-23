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
import Header from "../components/Header";
import { getData, setData } from "./asyncStorage";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  componentWillMount = () => {};

  componentDidMount = () => {
    console.log(" potato");
  };
  handleLogin = () => {
    const user = {
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
    Actions.landing({ user });
  };
  handleSignUp = () => {
    Actions.signup();
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChange={input => this.setState({ username: input })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChange={input => this.setState({ password: input })} />
            </Item>
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
  syncNowText: {
    paddingBottom: 30
  }
});

export default Login;
