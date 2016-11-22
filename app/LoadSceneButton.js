import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-material-ui';

class LoadSceneButton extends Component {
  render() {
    return (
      <Button raised primary text="This is a button"/>
    );
  }
}

export default LoadSceneButton;
