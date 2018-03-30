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
  Body,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Dimensions, StyleSheet } from "react-native";
import { loginUser } from "../../FireBase";
import { setData } from "../../AsyncStorage";
class Sync extends React.Component {
  state = {
    email: "",
    password: "",
    errors: ""
  };

  componentDidMount = () => { };

  handleSync = async () => {
    const user = await loginUser(this.state.email, this.state.password);
    if (user) {
      const userData = await getSyncData(this.state.email);
      if (userData) {
        await setData(userData.username, userData);
        Actions.landing({ user });
      }
    } else {
      this.setState({ errors: "Invalid Credentials" });
    }
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Text>{this.state.errors}</Text>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={input => this.setState({ email: input })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={input => this.setState({ password: input })}
              />
            </Item>
            <Button block onPress={this.handleSync}>
              <Text>Sync</Text>
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

export default Sync;
