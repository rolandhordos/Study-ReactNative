import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('Launch Screen', () => {
  const appView = renderer.create(<App/>)

  describe('Layout', () => {

    const appViewStructure = appView.toJSON()
    expect(appViewStructure.type).toBe('View')

    it('Displays a known initial View', () => {
      expect(appViewStructure).toMatchSnapshot()
    })

    it('uses only the top half of the screen', () => {
      // console.log(appViewStructure)
      expect(appViewStructure.props.style.flex).toBe(0.5)
    })
  })
})
