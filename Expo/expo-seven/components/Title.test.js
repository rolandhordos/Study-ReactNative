// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title'

describe('the Title', () => {

  const component = renderer.create(<Title/>)
  const view = component.toJSON()

  it('renders consistently', () => {
    expect(component).toBeDefined()
    expect(view).toBeDefined()
    expect(view).toMatchSnapshot()  // includes colors and alignment
  })

  it('has Text that says TODO List', () => {
    expect(view.type).toBe('View')
    const textView = view.children[0]
    expect(textView.type).toBe('Text')
    expect(textView.children[0]).toBe('TODO List')
  })

})
