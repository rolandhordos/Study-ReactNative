// @flow

import React, { Component } from 'react'
import { View, Text, AppRegistry } from 'react-native'
import { createStore } from 'redux'

// Redux - Actions

const types = {
  INCREMENT: 'INCREMENT',
}

// Redux - Reducers

const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    // return a complete representation of state
    return { count: state.count + 1 }
  }
  return state  // default course is a passthrough of input state
}

// Initialize the store
const initialState = {count: 0}
const store = createStore(reducer, initialState)

console.log('#Redux is ready')

// Throw some state changes at the store
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })

export default class App extends Component<{}> {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 100 }}>
        {store.getState().count}
      </Text>
      </View>
    )
  }
}
