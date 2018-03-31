import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

const Submit = ({ onSubmit, text }) => (
  <Footer>
    <FooterTab>
      <Button large onPress={onSubmit}>
        <Text>{text}</Text>
      </Button>
    </FooterTab>
  </Footer>
)

export default Submit

