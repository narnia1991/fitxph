import React from "react";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native";

const Link = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default Link;