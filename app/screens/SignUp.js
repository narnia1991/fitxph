import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Title
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Dimensions, StyleSheet, Text } from "react-native";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    confirm_password: "",
    errors: ""
  };
  handleSignUp = async () => {
    const user = await getData(this.state.username);
    if (password !== confirm_password) {
      this.setState({ errors: "Password didn't match" });
    } else if (user) {
      this.setState({ errors: "Username already taken" });
    } else {
      await setData(username, {
        username: this.state.username,
        password: this.state.password
      });
      Actions.sync({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      });
    }
  };
  title = () => <Title>SignUp</Title>;
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Text>{this.state.errors}</Text>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChange={input => this.setState({ username: input })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChange={input => this.setState({ password: input })} />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input
                onChange={input => this.setState({ confirm_password: input })}
              />
            </Item>
            <Button block light onPress={this.handleSignUp}>
              <Text>Submit</Text>
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

export default SignUp;
