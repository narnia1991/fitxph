import React from "react";
import { Form } from "native-base";
import { Dropdown, SectionLabel, Submit, TextBox, Wrapper } from "../../components";

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

  handleSubmit() {
    const { exerciseName, difficulty, muscleGroup, equipment, classification, description, instructions, imageUrl, videoUrl } = this
    console.log("====================================");
    console.log("handleClick");
    console.log("====================================");
  }

  render() {
    return [
      <Wrapper key={1} padder>
        <Form>
          <TextBox label="Name of Exercise" onChangeText={(input) => this.exerciseName = input} />
          <Dropdown
            label="Difficulty"
            selected={this.state.selected1}
            onChange={(value) => this.difficulty = value}
            options={[
              { name: "Hard", value: "hard" },
              { name: "Medium", value: "medium" },
              { name: "Easy", value: "easy" }
            ]}
            prompt
          />
          <TextBox label="Target Muscle Group" onChangeText={(input) => this.muscleGroup = input} />
          <TextBox label="Equipment" onChangeText={(input) => this.equipment = input} />
          <TextBox label="Classification" onChangeText={(input) => this.classification = input} />
          <TextBox label="Description" onChangeText={(input) => this.description = input} />
          <TextBox label="Instructions" onChangeText={(input) => this.instructions = input} />
          <TextBox label="Image URL" onChangeText={(input) => this.imageUrl = input} />
          <TextBox label="Video URL" onChangeText={(input) => this.videoUrl = input} />
        </Form>
      </Wrapper>,
      <Submit key={2} text="Add Exercise" onSubmit={this.handleSubmit} />
    ];
  }
}

export default ExerciseAdd;

