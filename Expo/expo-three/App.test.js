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

    it('has a simple top level view', () => {
      expect(appViewStructure.type).toBe('View')
    })

    describe('Top Half - Greeting', () => {
      const topHalf = appViewStructure.children[0]
      expect(topHalf.type).toBe('View')

      it('uses only the top half of the screen', () => {
        expect(topHalf.props.style.flexDirection).toBe('column')
         // Two sibling components using the same
        expect(topHalf.props.style.flex).toBe(1.0)
      })

      describe('Text component', () => {
        const textComponent = topHalf.children.find(entry => entry.type === "Text")
        expect(textComponent).toBeDefined()
        expect(textComponent.type).toBe('Text')

        it('says Hello World', () => {
          const text = textComponent.children[0]
          expect(text).toBe('Hello World')
        })
      })
    })

    describe('Bottom Half - Content', () => {
      const bottomHalf = appViewStructure.children[1]

      describe('Scrolling Boxes', () => {

        it('uses a Scroll View', () => {
          expect(bottomHalf.type).toContain('ScrollView')   // instance nameg has a prefix
        })

        it('fills the bottom half of the screen', () => {
            expect(bottomHalf.props.style.flexDirection).toBe('column')
            expect(bottomHalf.props.style.flex).toBe(1.0)
        })
      })
    })
  })
})
