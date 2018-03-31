import React, { Component } from "react";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
import { Actions } from "react-native-router-flux";
import { deleteData } from "../AsyncStorage";

const Nav = ({ title }) => (
  <Header>
    <Left />
    <Body>
      <Title>{title}</Title>
    </Body>
  </Header>
)

export default Nav;
