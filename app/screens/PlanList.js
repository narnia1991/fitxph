//list of plans
/*
plan structure:
{
    name,
    creator,
    type,
    difficulty,
    exerciseplan
    dietplan
    exercises,
    dishes
}
*/
import React from "react";
import { Container, Content, List, ListItem, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

class PlanList extends React.Component {
  state = {
    items: null,
    user: null
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  componentDidMount = async () => {
    //get plan list data
    let items = [];
    switch (this.props.type) {
      case "exercise":
        items.push({
          name: "default",
          creator: "default"
        });
      case "diet":
        items.push({
          name: "default",
          creator: "default"
        });
      default:
        items.push({
          name: "default",
          creator: "default"
        });
    }

    // items = [items, ...fetchedData]
    this.setState({ items });
  };
  handleSelectPlan = item => {
    //set initial plan data
    //set initial progress data
    //show initialdatascreen
    Actions.initialdata({ user: this.state.user, plan: item });
  };
  renderList = () => {
    if (this.state.items)
      return this.state.items.map(item => (
        <ListItem onPress={this.handleSelectPlan(item)}>
          <Text>{item.name}</Text>
          <Text>{item.creator}</Text>
        </ListItem>
      ));
    return <Text>No Plans Available</Text>;
  };

  render() {
    return (
      <Container>
        <Content>
          <List>{this.renderList}</List>
        </Content>
      </Container>
    );
  }
}

export default PlanList;
