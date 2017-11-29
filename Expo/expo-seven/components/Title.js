// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component<{}> {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>TODO List</Text>
      </View>
      )
    }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 20
  },
  title: {
    textAlign: 'center',
    color: 'white'
  }
})
