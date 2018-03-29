import React from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import imageLoader from '../../utils/imageLoader'

class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => Actions.login(), 1500)
  }

  render() {
    return (
      <View style={styles.content}>
        <Image large source={imageLoader.Splash} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  }
})

export default Splash
