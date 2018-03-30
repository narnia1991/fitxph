import React from "react";
import { Form, Text } from "native-base";
import { Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";
import { loginUser } from "../../FireBase";
import { setData } from "../../AsyncStorage";
import { Error, ScreenLabel, Submit, TextBox, Wrapper } from "../../components"


class SyncNow extends React.Component {
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
    return [
      <Wrapper key={1} padder>
        <ScreenLabel text="Sync" />
        <Form>
          <Error message={this.state.errors} />
          <TextBox
            label="Username"
            onChangeText={input =>
              this.setState({
                username: input,
                errors: ""
              })
            }
          />
          <TextBox
            label="Password"
            secureTextEntry
            onChangeText={input =>
              this.setState({
                password: input,
                errors: ""
              })
            }
          />
        </Form>
      </Wrapper>,
      <Submit key={2} onSubmit={this.handleSync} text="Sync Now" />
    ];
  }
}

const styles = StyleSheet.create({
  syncNowText: {
    paddingBottom: 30
  }
});

export default SyncNow;
