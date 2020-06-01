// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import StickyNote from './index'

test('renders correctly', () => {
  const component = renderer.create(
    <StickyNote color='pink'>
      <p>Test</p>
    </StickyNote>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
