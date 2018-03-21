import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import Tile from '../components/Tile'
import imageLoader from './imageLoader'
class Landing extends Component {
  handlePlanPress = () => {
    Actions.plan()
  }
  handleProgressPress = () => {
    Actions.progress()
  }
  handleReferencePress = () => {
    Actions.reference()
  }

  render() {
    return [
      <Tile
        uri={imageLoader.Plans}
        content="Plan"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handlePlanPress}
      />,
      <Tile
        uri={imageLoader.Progress}
        content="Progress"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleProgressPress}
      />,
      <Tile
        uri={imageLoader.Reference}
        content="Reference"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleReferencePress}
      />
    ]
  }
}

export default Landing
