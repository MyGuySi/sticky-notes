// @flow

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddNote from './index'

it('renders correctly', () => {
  const component = renderer.create(
    <AddNote isNotesEmpty={true} onClickAdd={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls add handler', () => {
  const handler = jest.fn();
  render(
    <AddNote isNotesEmpty={true} onClickAdd={handler} />
  )
  fireEvent.click(screen.getByTestId('add-button'));
  expect(handler.mock.calls.length).toBe(1);
});