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

class Sync extends React.Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount = () => {};

  handleSync = () => {
    //authnticate then get the data

    //set the data to the database
    //set current user
    Actions.landing({ user });
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
