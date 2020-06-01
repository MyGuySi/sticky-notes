// @flow

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NewNote from './index';

it('renders correctly', () => {
  const component = renderer.create(
    <NewNote
      text='Test'
      color='cyan'
      onChangeText={() => {}}
      onClickSave={() => {}}
      onClickCancel={() => {}}
    />
  )
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls change handler', () => {
  const handler = jest.fn();
  render(
    <NewNote
      text='Test'
      color='cyan'
      onChangeText={handler}
      onClickSave={() => {}}
      onClickCancel={() => {}}
    />
  )
  fireEvent.change(screen.getByTestId('text-input'), { target: { value: 'test' }});
  expect(handler.mock.calls.length).toBe(1);
});

it('calls save handler', () => {
  const handler = jest.fn();
  render(
    <NewNote
      text='Test'
      color='cyan'
      onChangeText={() => {}}
      onClickSave={handler}
      onClickCancel={() => {}}
    />
  )
  fireEvent.click(screen.getByTestId('save-button'));
  expect(handler.mock.calls.length).toBe(1);
});

it('calls cancel handler', () => {
  const handler = jest.fn();
  render(
    <NewNote
      text='Test'
      color='cyan'
      onChangeText={() => {}}
      onClickSave={() => {}}
      onClickCancel={handler}
    />
  )
  // Using fireEvent.click on the resert button seems to have issues with
  // propagating the onReset event, so decided to dispatch directly on the form.
  const resetEvent = new Event('reset');
  screen.getByTestId('new-form').dispatchEvent(resetEvent);
  expect(handler.mock.calls.length).toBe(1);
});