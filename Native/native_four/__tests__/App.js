import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders without throwing', () => {
  const tree = renderer.create(
    <App />
  );
});
