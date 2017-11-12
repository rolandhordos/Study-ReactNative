// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// App is a top level component itself
export default class App extends Component {

  state = {
    count: 0,
  }

  componentDidMount() { // lifecycle - called once before initial render
    // We need a timer to advance the counter at a given rate
    setInterval(() => {          // bound function acting on this instance
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.count}</Text>
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
