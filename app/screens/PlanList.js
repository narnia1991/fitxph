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
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Fab,
  Icon
} from "native-base";
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

  renderlist = () => {
    if (this.state.list) {
      return (
        <List
          dataArray={this.state.list}
          renderRow={(item, index) => (
            <ListItem key={index}>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      );
    }
    return <Text>No Plans Available</Text>;
  };

  render() {
    return (
      <Container>
        <Content>
          <List>{this.renderList}</List>
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

export default PlanList;
