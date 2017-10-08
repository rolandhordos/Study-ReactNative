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
      flex: 0.5, /* use only 50% of the screen, vertically from the top */
      justifyContent: 'center', /* vertical alignment */
      alignItems: 'center',     /* horizontal alignment */
    }
});
