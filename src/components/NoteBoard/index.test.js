// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './index'

const mockNotes = [
  { text: 'Test note', timestamp: 1590933321, color: 'pink' }
]

it('renders correctly', () => {
  const component = renderer.create(
    <Board
      title="Title"
      notes={mockNotes}
      onCreateNote={() => {}}
      onClickClearNotes={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('switches to active state when add button is clicked', () => {
  render(
    <Board
      title="Title"
      notes={mockNotes}
      onCreateNote={() => {}}
      onClickClearNotes={() => {}}
    />
  )
  fireEvent.click(screen.getByTestId('add-button'));
  expect(screen.queryByTestId('add-button')).toBeNull();
  expect(screen.queryByTestId('text-input')).toBeTruthy();
  expect(screen.queryByTestId('save-button')).toBeTruthy();
  expect(screen.queryByTestId('clear-button')).toBeTruthy();
});

it('calls create handler when input has a value', () => {
  const handler = jest.fn();
  render(
    <Board
      title="Title"
      notes={mockNotes}
      onCreateNote={handler}
      onClickClearNotes={() => {}}
    />
  )
  fireEvent.click(screen.getByTestId('add-button'));
  fireEvent.change(screen.getByTestId('text-input'), { target: { value: 'test' }});
  fireEvent.click(screen.getByTestId('save-button'));
  expect(handler.mock.calls.length).toBe(1);
});

it('does not call create handler when input is empty', () => {
  const handler = jest.fn();
  render(
    <Board
      title="Title"
      notes={mockNotes}
      onCreateNote={handler}
      onClickClearNotes={() => {}}
    />
  )
  fireEvent.click(screen.getByTestId('add-button'));
  fireEvent.click(screen.getByTestId('save-button'));
  expect(handler.mock.calls.length).toBe(0);
});

it('calls clear handler', () => {
  const handler = jest.fn();
  render(
    <Board
      title="Title"
      notes={mockNotes}
      onCreateNote={() => {}}
      onClickClearNotes={handler}
    />
  )
  fireEvent.click(screen.getByTestId('add-button'));
  fireEvent.click(screen.getByTestId('clear-button'));
  expect(handler.mock.calls.length).toBe(1);
});