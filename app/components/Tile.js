import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

class Tile extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center"
      },
      image: {
        flexGrow: 1,
        height: null,
        width: null,
        alignItems: "center",
        justifyContent: "center"
      },
      paragraph: {
        textAlign: "center",
        color: this.props.contentColor,
        fontSize: 35
      },
      opaque: {
        backgroundColor: this.props.backGroundColor,
        padding: 5,
        elevation: 3
      }
    });

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <ImageBackground source={this.props.uri} style={styles.image}>
          <View style={styles.opaque}>
            <Text style={styles.paragraph}>{this.props.content}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default Tile;
