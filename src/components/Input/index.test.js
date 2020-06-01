// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Input from './index'

test('Renders correctly', () => {
  const component = renderer.create(
    <Input label='Name' type='text' placeholder='e.g. John Smith' onChange={e => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});