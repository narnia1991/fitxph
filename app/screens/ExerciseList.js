// exercise list
// fab to add exercise
import React from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";

class ExerciseList extends React.Component {
  state = {
    user: {},
    items: ["Sit Ups", "Push Ups", "Lunges", "Squats", "Jumping Jacks"]
  };
  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataArray={this.state.items}
            renderRow={(item, index) => (
              <ListItem key={index}>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default ExerciseList;
