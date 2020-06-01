// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Stack from './index';

test('Renders correctly', () => {
  const component = renderer.create(
    <Stack>
      <p>One</p>
      <p>Two</p>
      <p>Three</p>
    </Stack>
  )
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})