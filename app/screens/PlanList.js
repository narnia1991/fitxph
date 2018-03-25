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
    items: null
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    } else {
      this.setState({ user: this.props.user });
    }
  };

  componentDidMount = async () => {
    //get plan list data
    let items = [];
    switch (this.props.type) {
      case "workout":
        items.push({
          name: "default"
        });
      case "diet":
        items.push({
          name: "default"
        });
      default:
        items.push({
          name: "default"
        });
    }

    // items = [items, ...fetchedData]

    this.setState({ items });
  };

  renderList = () => {
    if (this.state.items)
      return this.state.items.map(item => (
        <ListItem>
          <Text>{item.name}</Text>
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
