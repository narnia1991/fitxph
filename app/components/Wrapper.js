import React, { Component } from 'react';
import { Content } from 'native-base';
import { ImageBackground } from 'react-native';
import imageLoader from '../utils/imageLoader';

const Wrapper = ({ children, padder, style }) => (
  <ImageBackground
    source={imageLoader.Wallpaper}
    style={style || { flex: 1, width: null, height: null }}
    imageStyle={{ resizeMode: 'cover' }}
  >
    <Content padder={padder}>{children}</Content>
  </ImageBackground>
);

export default Wrapper;
