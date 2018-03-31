import React, { Component } from "react";
import {
  Input,
  Item,
  Label,
} from "native-base";

const TextBox = ({ label, last, secureTextEntry, onChangeText }) => (
  <Item floatingLabel last={last}>
    <Label>{label}</Label>
    <Input
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  </Item>
)

export default TextBox;
