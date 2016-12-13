import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-material-ui';

windowWidth = Dimensions.get('window').width;

const LoadSceneButton = ({ sceneId, text }) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <Button raised primary text={text}  />
    </View>
  );
};

export default LoadSceneButton;
