// @flow

import React from 'react';
import { render } from '@testing-library/react';
import KeyboardShortcut from './index';

test('Handles key down event', () => {
  const mockHandler = jest.fn(() => {});
  render(
    <KeyboardShortcut value='n' handler={mockHandler} />
  )
  const event = new KeyboardEvent('keydown', { key: 'n' });
  document.dispatchEvent(event);
  expect(mockHandler.mock.calls.length).toBe(1);
});