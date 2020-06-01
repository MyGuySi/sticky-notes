// @flow

import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  children: React.Node
}

function Heading (props: Props) {
  let Element = 'h1';
  if (props.level) {
    Element = 'h' + props.level;
  }
  return (
    <Element className={styles.heading}>{props.children}</Element>
  )
}

export default Heading