import React, { Component } from 'react'
import {
  Container,
  Header as Ulo,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Picker,
  Title
} from 'native-base'
const Item = Picker.Item

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected1: 'key1'
    }
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    })
  }
  render() {
    return (
      <Header>
        <Body>{this.props.body || <Title>Title</Title>}</Body>
      </Header>
    )
  }
}

export default Header
