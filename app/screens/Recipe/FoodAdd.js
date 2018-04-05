import React from "react";
import { Form } from "native-base";
import { Dropdown, SectionLabel, Submit, TextBox, Wrapper } from "../../components";

class FoodAdd extends React.Component {
  state = {
    user: null,
    creator: "",
    name: "",
    calories: "",
    difficulty: "",
    preparation_time: "",
    ingredients: [],
    description: "",
    instructions: "",
    image_url: "",
    video_url: "",
    date_created: "",
    date_modified: ""
  };

  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };

  onValueChange(value) {
    this.setState({
      difficulty: value
    });
  }

  async handleSubmit(value) {
    const { foodName, calories, difficulty, preparationTime, ingredients, description, instructions, imageUrl, videoUrl } = this

    const customFood = {
      foodName, calories, difficulty, preparationTime, ingredients, description, instructions, imageUrl, videoUrl
    }

    const user = {
      ...this.state.user,
      customFood: [...this.state.user.customFood, customFood]
    }

    await setData(this.state.user, user)

    Actions.landing({user})
  }

  render() {
    return [
      <Wrapper key={1} padder>
        <Form>
          <TextBox label="Name of Food" onChangeText={(input) => this.foodName = input} />
          <TextBox label="Number of Calories" onChangeText={(input) => this.calories = input} />

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
          <TextBox label="Preparation Time" onChangeText={(input) => this.preparationTime = input} />
          <TextBox label="Ingredients" onChangeText={(input) => this.ingredients = input} />
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
export default FoodAdd;
