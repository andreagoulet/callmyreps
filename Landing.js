import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoadSceneButton from './LoadSceneButton.js'
import Logo from './Logo.js'

class Landing extends Component {
  render() {
    return (
      <View>
        <Logo />
        <LoadSceneButton />
        <LoadSceneButton />
        <LoadSceneButton />
      </View>
    );
  }
}

export default Landing;
