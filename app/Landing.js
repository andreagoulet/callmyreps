import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoadSceneButton from './LoadSceneButton.js'
import FindRepsButton from './FindRepsButton.js'
import CallingScriptsButton from './CallingScriptsButton.js'
import TipsStrategiesButton from './TipsStrategiesButton.js'
import Logo from './Logo.js'

class Landing extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        <Logo/>
        <FindRepsButton/>
        <CallingScriptsButton/>
        <TipsStrategiesButton/>
      </View>
    );
  }
}

export default Landing;
