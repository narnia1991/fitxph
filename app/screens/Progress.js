// TODO: chart
// TODO: add update button to update progress
import React from "react";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Title,
  Body
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Dimensions, StyleSheet, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import Header from "../components/Header";

class Progress extends React.Component {
  state = {
    data: [
      { x: new Date(1982, 1, 1), y: 125 },
      { x: new Date(1987, 1, 1), y: 257 },
      { x: new Date(1993, 1, 1), y: 345 },
      { x: new Date(1997, 1, 1), y: 515 },
      { x: new Date(2001, 1, 1), y: 132 },
      { x: new Date(2005, 1, 1), y: 305 },
      { x: new Date(2011, 1, 1), y: 270 },
      { x: new Date(2015, 1, 1), y: 470 }
    ],
    user: null
  };

  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };

  render() {
    return (
      <Container>
        <Content padder>
          <VictoryChart theme={VictoryTheme.material} scale={{ x: "time" }}>
            <VictoryLine
              style={{ data: { stroke: "#c43a31" } }}
              data={this.state.data}
            />
          </VictoryChart>
        </Content>
      </Container>
    );
  }
}

let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  }
});
export default Progress;
