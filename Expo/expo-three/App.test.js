import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// First Snapshot
it('Displays a known initial View', () => {

  // Render, then diff with the snapshot created last run.
  const appView = renderer.create(<App/>)

  const appViewStructure = appView.toJSON()

  expect(appViewStructure).toMatchSnapshot()
})
