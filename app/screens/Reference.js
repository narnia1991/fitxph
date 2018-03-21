import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import Tile from '../components/Tile'
import imageLoader from './imageLoader'
class Landing extends Component {
  handleExercisePress = () => {
    Actions.exerciselist()
  }
  handleFoodPress = () => {
    Actions.foodlist()
  }
  handleDiscoverPress = () => {
    Actions.discover()
  }

  render() {
    return [
      <Tile
        uri={imageLoader.Workout}
        content="Exercises"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleExercisePress}
      />,
      <Tile
        uri={imageLoader.Eat}
        content="Foods"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleFoodPress}
      />,
      <Tile
        uri={imageLoader.Discover}
        content="Discover"
        contentColor="#fff"
        backGroundColor="rgba(9,9,9,.8)"
        onPress={this.handleDiscoverPress}
      />
    ]
  }
}

export default Landing
