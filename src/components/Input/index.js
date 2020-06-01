// @noflow
// TODO: - Fix issue with Flow type for 'otherProps'

import React from 'react';
import styles from './styles.module.css';

type Props = { label: string }

const Input = React.forwardRef((props: Props, ref) => {
  const { label,...otherProps } = props

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>{label}:</label>
      )}
      <input ref={ref} className={styles.input} {...otherProps} />
    </div>
  )
})

export default Input;