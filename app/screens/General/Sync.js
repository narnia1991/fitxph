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
import { loginUser } from "../../FireBase";

class Sync extends React.Component {
  state = {
    user: null,
    email: "",
    errors: ""
  };

  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };

  componentDidMount = () => {
    console.log(" potato");
  };

  handleSyncLater = () => {
    Actions.landing({ user: this.state.user });
  };

  handleSync = async () => {
    //check for username availability online
    //upload data online
    const user = this.state.user;
    user.email = this.state.email;
    try {
      const syncUser = await loginUser(user.email, this.state.user.password);
      if (syncUser) {
        await setSyncData(user.email, user);
        await setData(user.username, user);
        Actions.landing(user);
      }
    } catch (error) {
      this.setState({ errors: "Cannot sync data" });
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={input =>
                  this.setState({
                    email: input
                  })
                }
              />
            </Item>
            <Text onPress={this.handleSyncLater}>Sync Later</Text>
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
