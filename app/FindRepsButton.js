import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-material-ui';

class FindRepsButton extends Component {
  render() {
    return (
      <Button raised primary text="Find My Reps"/>
    );
  }
}

export default FindRepsButton;
