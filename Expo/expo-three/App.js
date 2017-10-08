import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styling.container}><Text>Hello World</Text></View>
    );
  }
}

const styling = StyleSheet.create({
    container: {
      flex: 1, /* use the entire container */
      // alignItems: 'center',
      justifyContent: 'center',
    }
});
