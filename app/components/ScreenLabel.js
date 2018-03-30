import React, { Component } from "react";
import {
  Text
} from "native-base";
import { StyleSheet } from "react-native";

class ScreenLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Text style={styles.label}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20
  }
})

export default ScreenLabel;
