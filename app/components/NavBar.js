import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { deleteData } from '../AsyncStorage';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1'
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }

  handleLogout = async () => {
    try {
      await deleteData('current_user');
      Actions.login();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="md-menu" />
          </Button>
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
    );
  }
}

export default NavBar;
