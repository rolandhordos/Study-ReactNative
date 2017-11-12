// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// App is a top level component itself
export default class App extends Component {

  state = {
    count: 0,
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.counter}>(count)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 60,
    color: 'blue',
  }
})
