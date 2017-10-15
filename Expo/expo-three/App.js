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
        </ScrollView>
      </View>
    );
  }
}

const halfScreenContainer = {
  flexDirection: 'column',  // layout vertically from the top
  flex: 1.0,                // use only 50% of the screen, which for 2 sibling views means each are 100%
}

let topHalfContainer = {
  justifyContent: 'center', // vertical alignment
  alignItems: 'center',     // horizontal alignment
  backgroundColor: 'whitesmoke',
}
Object.assign(topHalfContainer, halfScreenContainer)  // merge in the half-screen properties

const styles = StyleSheet.create({
  launchScreen: {
    flex: 1.0,
  },
  topHalfContainer: topHalfContainer,
  bottomHalfContainer: halfScreenContainer,
});
