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
import { getData, setData } from "../AsyncStorage";
class SignUp extends Component {
  state = {
    username: "",
    password: "",
    confirm_password: "",
    errors: ""
  };
  handleSignUp = async () => {
    try {
      console.log(this.state);
      const user = await getData(this.state.username);
      if (!user) {
        console.log("====================================");
        console.log("reselt", await getData(this.state.username));
        console.log("====================================");
        await setData(this.state.username, {
          username: this.state.username,
          password: this.state.password
        });

        Actions.sync({
          user: {
            username: this.state.username,
            password: this.state.password
          }
        });
      } else if (this.state.password !== this.state.confirm_password) {
        this.setState({ errors: "Password didn't match" });
      } else if (user) {
        this.setState({ errors: "Username already taken" });
      }
    } catch (error) {
      console.log(error);
      this.setState({ errors: "Cannot Sign Up" });
    }
  };
  title = () => <Title>SignUp</Title>;
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Text style={styles.error}>{this.state.errors}</Text>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={input =>
                  this.setState({
                    username: input
                  })
                }
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={input =>
                  this.setState({
                    password: input
                  })
                }
              />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                onChangeText={input =>
                  this.setState({
                    confirm_password: input
                  })
                }
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
  },
  errorText: {
    color: "red"
  }
});

export default SignUp;
