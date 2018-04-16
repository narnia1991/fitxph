import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

const Submit = ({ onSubmit, text, disabled }) => (
  <Footer>
    <FooterTab>
      <Button large onPress={onSubmit} disabled={disabled}>
        <Text>{text}</Text>
      </Button>
    </FooterTab>
  </Footer>
)

export default Submit

