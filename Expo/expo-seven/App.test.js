// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import App from './App'
import Title from './components/Title'

describe('the App', () => {

  const component = renderer.create(<App/>)
  const view = component.toJSON()
  const instance = component.getInstance()

  it('renders without crashing', () => {
    expect(component).toBeDefined()
    expect(view).toBeDefined()
    expect(instance instanceof App)
    // TODO: enable App snapshot matching when we're closer to assembling the entire app
    // expect(view).toMatchSnapshot()  // includes colors and alignment
  })

  it('has a Title', () => {
    const titleView = view.children[0]
    // const instance = component.toTree().instance
    expect(view.type).toBe('View')
    expect(titleView.type).toBe('Text')
  })

})
