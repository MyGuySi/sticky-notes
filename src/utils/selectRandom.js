// @flow

function selectRandom (array: Array<any>) {
  const randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
}

export default selectRandom;