// exercise list
// fab to add exercise
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Fab,
  Icon
} from "native-base";

class ExerciseList extends React.Component {
  state = {
    user: {},
    items: ["Sit Ups", "Push Ups", "Lunges", "Squats", "Jumping Jacks"]
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };
  render() {
    return (
      <Container>
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
        <Fab
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-add" />
        </Fab>
      </Container>
    );
  }
}

export default ExerciseList;
