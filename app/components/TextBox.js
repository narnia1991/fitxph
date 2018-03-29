import React, { Component } from "react";
import {
  Input,
  Item,
  Label,
  Text
} from "native-base";
import { StyleSheet, View } from "react-native";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.errorText}>{this.props.errors}</Text>
        <Item floatingLabel>
          <Label>{this.props.label}</Label>
          <Input
            secureTextEntry={this.props.secured}
            onChangeText={this.props.onChangeText}
          />
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: "red"
  }
});

export default TextBox;
