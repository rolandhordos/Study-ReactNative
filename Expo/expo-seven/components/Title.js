// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../Style'

export default class Title extends Component<{}> {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>TODO List</Text>
      </View>
      )
    }

}
