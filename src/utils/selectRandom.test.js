// @flow

import selectRandom from './selectRandom'

test('returns a random value', () => {
  const values = [0, 1, 2, 3, 4];
  expect(values).toContain(selectRandom(values));
});