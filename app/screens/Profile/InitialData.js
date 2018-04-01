//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";
import { Actions } from "react-native-router-flux";
import { Form, Text } from "native-base";
import { ScreenLabel, Submit, TextBox, Wrapper } from "../../components";

class InitialData extends React.Component {
  state = {
    user: {},
    gender: ""
  };

  // componentWillMount = () => {
  //   if (!this.props.user) {
  //     Actions.login();
  //   }
  //   this.setState({ user: this.props.user });
  // };

  onValueChange(value) {
    this.setState({
      gender: value
    });
  }

  handleSubmit() {
    console.log("truemethod");
  }

  render() {
    return [
      <Wrapper key={1}>
        <ScreenLabel text="Let's get started!" />
        <Form>
          <TextBox label="Name" />
        </Form>
      </Wrapper>,
      <Submit key={2} text="Submit" onSubmit={this.handleSubmit} />
    ];
  }
}

export default InitialData;

{/* <Container>
  <Content>
    <Form>
      <Item floatingLabel>
        <Label>What is your name?</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>What is your date of birth?(MM/DD/YYYY)</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>What is your current weight?</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>What is your height?</Label>
        <Input />
      </Item>
      <Item stackedLabel>
        <Label>What is your gender?</Label>
        <Picker
          mode="dropdown"
          placeholder="Select Gender"
          onValueChange={this.onValueChange.bind(this)}
        >
          <Item label="Male" value="male" />
          <Item label="Female" value="female" />
        </Picker>
      </Item>
      <Item floatingLabel last>
        <Label>What is your weight goal?</Label>
        <Input />
      </Item>
      <Button block onPress={this.handleSubmit}>
        <Text>Submit</Text>
      </Button>
    </Form>
  </Content>
</Container> */}
