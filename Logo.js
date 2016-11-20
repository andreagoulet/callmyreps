import React, { Component } from 'react';
import { Image } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <Image
        source={require('./logo.png')}
        style={{width:200, height:200, marginTop: 30, marginBottom:30, alignSelf: 'center'}}
      />
    );
  }
}

export default Logo;
