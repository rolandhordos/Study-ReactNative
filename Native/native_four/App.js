import React, { Component } from 'react'
import { View, Text, StyleSheet, AppRegistry } from 'react-native'
import Carousel from '@rolandhordos/react-native-carousel'

export default class App extends Component {

  render() {
    return (
      <Carousel animate={false}>
        <View style={styles.slide}>
          <Text>Page 1</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
})
