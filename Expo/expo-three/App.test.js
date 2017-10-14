import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('Launch Screen', () => {
  const appView = renderer.create(<App/>)
  const appViewStructure = appView.toJSON()

  it('Displays a known initial View', () => {
    expect(appViewStructure).toMatchSnapshot()
  })

  describe('Layout', () => {

    expect(appViewStructure.type).toBe('View')

    it('uses only the top half of the screen', () => {
      // console.log(appViewStructure)
      expect(appViewStructure.props.style.flexDirection).toBe('column')
      expect(appViewStructure.props.style.flex).toBe(0.5)
    })

    describe('Text component', () => {
      const textComponent = appViewStructure.children.find(entry => entry.type === "Text")
      expect(textComponent).toBeDefined()
      expect(textComponent.type).toBe('Text')

      it('which says Hello World', () => {
        const text = textComponent.children[0]
        expect(text).toBe('Hello World')
      })
    })
  })

  })
})
