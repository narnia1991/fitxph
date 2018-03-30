import React, { Component } from "react";
import {
  Input,
  Item,
  Label,
} from "native-base";

const TextBox = ({ label, secureTextEntry, onChangeText }) => (
  <Item floatingLabel>
    <Label>{label}</Label>
    <Input
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  </Item>
)

export default TextBox;
