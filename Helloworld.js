import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HelloWorldApp extends React.component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
