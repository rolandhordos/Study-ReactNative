// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
// import {describe, expect, it} from './flow-typed/npm/jest_v20.x.x';

describe('The App', () => {

  const component = renderer.create(<App/>)
  const app = component.toTree().instance

  it('Renders without crashing', () => {
    expect(component).toBeDefined()
    expect(app).toBeDefined()
    expect(app instanceof App).toBeTruthy()
  })

  it('Has an rendered structure that should not change', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

})
