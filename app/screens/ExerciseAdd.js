import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button
} from "native-base";

class ExerciseAdd extends React.Component {
  state = {
    user: null,
    creator: "",
    name: "",
    difficulty: "",
    target_muscle_group: "",
    equipment: "",
    classification: "",
    description: "",
    instruction: "",
    image_url: "",
    video_url: "",
    date_created: "",
    date_modified: ""
  };

  componentWillMount = () => {
    this.setState({ user: this.state.user });
  };

  onValueChange(value) {
    this.setState({
      difficulty: value
    });
  }

  handleSubmit(calue) {
    console.log("====================================");
    console.log("handleClick");
    console.log("====================================");
  }

  render() {
    return;
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Name of Exercise</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Difficulty</Label>
            <Picker
              mode="dropdown"
              placeholder="Select Difficulty"
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Hard" value="hard" />
              <Item label="Medium" value="medium" />
              <Item label="Medium" value="easy" />
            </Picker>
          </Item>
          <Item floatingLabel>
            <Label>Target Muscle Group</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Equipment</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Classification</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>instructions</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Image URL</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Video URL</Label>
            <Input />
          </Item>
          <Button block light onPress={this.handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>;
  }
}
export default ExerciseAdd;
