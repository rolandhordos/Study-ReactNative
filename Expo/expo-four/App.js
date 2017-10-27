import React, { Component } from 'react'
import { View, Text, StyleSheet, AppRegistry } from 'react-native'
import Carousel from '@rolandhordos/react-native-carousel'

export default class RNCarousel extends Component {

  render() {
    return (
      <Carousel width={styles.container.width} animate={false}>
        <View style={styles.container}>
          <Text>Page 1</Text>
        </View>
        <View style={styles.container}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.container}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
})
