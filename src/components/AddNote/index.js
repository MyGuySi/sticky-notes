// @flow

import React from 'react';
import KeyboardShortcut from '../KeyboardShortcut';
import Button from '../Button';
import styles from './styles.module.css'

type Props = {
  isNotesEmpty: bool,
  onClickAdd: () => void,
}

function AddNote (props: Props) {
  return (
    <div className={styles.wrapper}>
      <KeyboardShortcut value='n' handler={props.onClickAdd} blockEvent />
      <Button onClick={props.onClickAdd} data-testid='add-button'>New note (n)</Button>
      {props.isNotesEmpty && (
        <img className={styles.empty} src={require('../../images/get-started.svg')} width='225' height='83' alt='' />
      )}
    </div>
  )
}

export default AddNote