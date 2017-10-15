import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.launchScreen}>
        <View style={styles.topHalfContainer}>
          <Text>Hello World</Text>
        </View>
        <ScrollView style={styles.bottomHalfContainer}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </ScrollView>
      </View>
    );
  }
}

// Establish some normalized standards of User Experience.  Additionally if we use standard property names we can
// aggregate from DRY models using Object.assign.

// All boxes should use the same corner radius
const corner = { borderRadius: 8 }
// Establish a consistent container for half-screen layouts
const halfScreenContainer = {
  flexDirection: 'column',  // layout vertically from the top
  flex: 1.0,                // use only 50% of the screen, which for 2 sibling views means each are 100%
}
// The top half of the screen will hold the centered Hello World greeting
let greetingContainer = {
  justifyContent: 'center', // vertical alignment
  alignItems: 'center',     // horizontal alignment
  backgroundColor: 'whitesmoke',
}
Object.assign(greetingContainer, halfScreenContainer)  // adopt the standard half-screen settings

// Assembly time.
const styles = StyleSheet.create({
  launchScreen: {
    flex: 1.0,
  },
  topHalfContainer: greetingContainer,
  bottomHalfContainer: halfScreenContainer,
  box: {
    backgroundColor: 'orange',
    width: '30%',   // cool I can scale the layout for larger screens
    height: 110,
    margin: 12,
    borderRadius: corner.borderRadius,
  }
});
