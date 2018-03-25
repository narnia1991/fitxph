//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button
} from "native-base";

class InitialData extends React.Component {
  state = {
    user: {},
    gender: ""
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  onValueChange(value) {
    this.setState({
      gender: value
    });
  }

  handleSubmit() {
    console.log("truemethod");
  }

  render() {
    return (
      <Container>
        <Header />
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
      </Container>
    );
  }
}

export default InitialData;
