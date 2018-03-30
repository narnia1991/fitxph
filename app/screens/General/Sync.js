import React from "react";
import { Form, Text } from "native-base";
import { Actions } from "react-native-router-flux";
import { Dimensions, StyleSheet } from "react-native";
import { loginUser } from "../../FireBase";
import { Error, ScreenLabel, Submit, TextBox, Wrapper } from "../../components";

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
    return [
      <Wrapper padder key={1}>
        <ScreenLabel text="Sync" />
        <Form>
          <Error message={this.state.errors} />
          <TextBox label="Email" onChangeText={input => this.setState({
            email: input
          })} />
          <Text onPress={this.handleSyncLater} style={styles.syncLater}>Maybe Later</Text>
        </Form>
      </Wrapper>,
      <Submit key={2} text="Sync" onSubmit={this.handleSync} />
    ]
  }
}

const styles = StyleSheet.create({
  syncLater: {
    padding: 15
  }
});

export default Sync;
