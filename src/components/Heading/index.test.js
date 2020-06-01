// @flow

import React from 'react';
import renderer from 'react-test-renderer'
import Heading from './index'

test('Renders correctly', () => {
  const component = renderer.create(
    <Heading>Test</Heading>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})