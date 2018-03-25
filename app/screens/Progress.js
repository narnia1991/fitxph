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

class Progress extends React.Component {
  state = {
    data: [],
    user: null
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    dataset = [];
    this.props.user.progress.progress.map(data => {
      dataset.push({ y: data.date, x: data.weight });
    });
    this.setState({ user: this.props.user, data: dataset });
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
