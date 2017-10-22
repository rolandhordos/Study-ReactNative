import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Carousel from '@rolandhordos/react-native-carousel'

export default class App extends Component {
  render() {
    return (
      <Carousel>
        <View style={styles.slide} width={styles.slide.width}>
          <Text>Slide 1</Text>
        </View>
        <View style={styles.slide} width={styles.slide.width}>
          <Text>Slide 2</Text>
        </View>
        <View style={styles.slide} width={styles.slide.width}>
          <Text>Slide 3</Text>
        </View>
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
  }
})
