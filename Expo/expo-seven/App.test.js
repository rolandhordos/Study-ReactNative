// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Title from './App'

describe('the Title', () => {

  const component = renderer.create(<Title/>)
  const view = component.toJSON()

  it('renders consistently', () => {
    expect(component).toBeDefined()
    expect(view).toBeDefined()
    expect(view).toMatchSnapshot()
  })

  it('has Text that says TODO List', () => {
    expect(view.type).toBe('Text')
    expect(view.children[0]).toBe('TODO List')
  })

})