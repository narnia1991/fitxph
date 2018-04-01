//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";
import { Actions } from "react-native-router-flux";
import { DatePickerAndroid, TouchableOpacity } from "react-native";
import { Form, Text } from "native-base";
import { DatePicker, Dropdown, ScreenLabel, SectionLabel, Submit, TextBox, Wrapper } from "../../components";

const options = {
  date: new Date(),
  maxDate: new Date()
}

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

  handleSubmit = () => {
    const { name, dob, weight, height, weightGoal } = this

    console.log(dob);

  }


  render() {
    return [
      <Wrapper key={1}>
        <ScreenLabel text="Let's get started!" />
        <Form>
          <TextBox label="Name" onChangeText={(text) => this.name = text}
          />
          <DatePicker label="Date of Birth(MM/DD/YYYY)" onChangeText={(text) => this.dob = text} />
          <Dropdown label="Gender" options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" }
          ]} />
          <SectionLabel text="Target Information" />
          <TextBox label="Weight" onChangeText={(text) => this.weight = text} />
          <TextBox label="Height" onChangeText={(text) => this.height = text} />
          <TextBox label="Weight Goal" onChangeText={(text) => this.weightGoal = text} />
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
