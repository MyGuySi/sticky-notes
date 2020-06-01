// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index'

test('Renders correctly', () => {
  const component = renderer.create(
    <Button onClick={() => {}}>Title</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders primary state', () => {
  const component = renderer.create(
    <Button isPrimary onClick={() => {}}>Title</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders muted state', () => {
  const component = renderer.create(
    <Button isMuted onClick={() => {}}>Title</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});