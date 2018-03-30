import React, { Component } from "react";
import {
  Input,
  Item,
  Label,
} from "native-base";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
        />
      </Item>
    );
  }
}



export default TextBox;
