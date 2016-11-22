import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-material-ui';

class CallingScriptsButton extends Component {
  render() {
    return (
      <Button raised primary text="Calling Scripts"/>
    );
  }
}

export default CallingScriptsButton;
