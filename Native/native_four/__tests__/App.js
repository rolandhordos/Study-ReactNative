import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Carousel', () => {

  it('renders a simple configuration', () => {
    const carousel = renderer.create(<App/>)
    expect(carousel).toBeDefined()

    const structure = carousel.toJSON()
    expect(structure).toBeDefined()
  })
})


it('renders without throwing', () => {
  const tree = renderer.create(
    <App />
  );
});
