import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button large onPress={this.props.onSubmit}>
            <Text>{this.props.text}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default Submit;
