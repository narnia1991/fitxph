import React, { Component } from "react";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Picker,
  StyleProvider
} from "native-base";
import { Actions } from "react-native-router-flux";
import { deleteData } from "../AsyncStorage";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const Item = Picker.Item;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }

  handleLogout = async () => {
    try {
      await deleteData("currentUser");

      Actions.login();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Header>
          <Left>
            {/* <Button transparent>
            <Icon name="md-menu" />
          </Button> */}
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.handleLogout}>
              <Icon name="md-log-out" />
            </Button>
          </Right>
        </Header>
      </StyleProvider>
    );
  }
}

export default NavBar;
