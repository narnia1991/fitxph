import React, { Component } from "react";
import {
  Container,
  Content
} from "native-base";
import { ImageBackground } from "react-native";
import imageLoader from '../utils/imageLoader';

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={imageLoader.Wallpaper}
          style={{ flex: 1, width: null, height: null }}
          imageStyle={{ resizeMode: 'cover' }}
        >
          <Content padder>
            {this.props.children}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Wrapper;
