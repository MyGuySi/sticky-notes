// @flow

import { type NoteColor } from '../../types'
import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  color: NoteColor,
  children: React.Node
}

function StickyNote (props: Props) {
  const className = styles.note + ' ' + styles[props.color];
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default StickyNote;