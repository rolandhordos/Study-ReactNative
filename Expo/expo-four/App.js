import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Carousel from '@rolandhordos/react-native-carousel'

export default class App extends Component {

  render() {
    return(
      <Carousel width={styles.slide.width} animate={false}>
        <View style={styles.slide}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.slide}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.slide}>
          <Text>Item 3</Text>
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
    backgroundColor: '#00CED1', // Dark Turquoise
  }
})
