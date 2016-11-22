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
          margin: 8
        }}>
        <Logo/>
        <LoadSceneButton text='Find My Reps' />
        <LoadSceneButton text='Calling Scripts' />
        <LoadSceneButton text='Tips &amp; Strategies'/>
      </View>
    );
  }
}

export default Landing;
