import React from "react";

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
    this.setState({ user: this.state.user });
  };
  render() {
    return;
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>;
  }
}
export default FoodAdd;
