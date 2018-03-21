import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

class Tile extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
      },
      image: {
        flexGrow: 1,
        height: null,
        width: null,
        alignItems: 'center',
        justifyContent: 'center'
      },
      paragraph: {
        textAlign: 'center',
        color: this.props.contentColor,
        fontSize: 35
      },
      opaque: {
        backgroundColor: this.props.backGroundColor,
        padding: 5,
        elevation: 3
      }
    })

    return (
      <View style={styles.container}>
        <ImageBackground source={this.props.uri} style={styles.image}>
          <View style={styles.opaque}>
            <Text style={styles.paragraph}>{this.props.content}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Tile
