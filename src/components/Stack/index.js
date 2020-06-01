// @flow

import * as React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

type Props = {
  direction?: 'row' | 'column',
  children: React.Node
}

function Stack (props: Props) {
  return (
    <div className={cx(styles.stack, {
      [styles.row]: props.direction === 'row'
    })}>
      {props.children}
    </div>
  )
}

export default Stack;