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
    user:null
  };

  componentWillMount = () => {
    this.setState({user:this.props.user})
  }
  componentDidMount = () => {
    console.log(" potato");
  };

  handleSync = () => {
    //check for username availability online
    //upload data online
    const user = await getData(this.state.user)
    Actions.landing({});
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
