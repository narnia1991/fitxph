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
import { Body, Left, Right, Text, Title, Fab, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Lists, Tile, Wrapper } from "../../components";
// import fullPlan from "../default/fullplan";

class PlanList extends React.Component {
  state = {
    list: null,
    user: null
  };

  componentWillMount = () => {
    // if (!this.props.user) {
    //   Actions.login();
    // }
    // const list = fullPlan;
    // this.setState({ user: this.props.user, list });
  };

  componentDidMount = async () => {
    //get plan list data
    let items = [
      { name: "Easy", purpose: "Weight Loss" },
      { name: "Easy", purpose: "Weight Gain" }
    ];

    // items = [items, ...fetchedData]
    this.setState({ items });
  };


  render() {
    return [
      <Wrapper key={1}>
        <Lists items={this.state.items} keyValue="name" subKey="purpose" />
      </Wrapper>,
      <Fab
        key={2}
        containerStyle={{}}
        style={{ backgroundColor: "#5067FF" }}
        position="bottomRight"
        onPress={() => Actions.addplan({ user: this.state.user })}
      >
        <Icon name="md-add" />
      </Fab>
    ]
  }
}

export default PlanList;
