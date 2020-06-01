// @noflow
// TODO: - Fix issue with Flow type for 'otherProps'

import * as React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

type Props = {
  isPrimary: bool,
  isMuted: bool,
  children: React.Node
}

function Button (props: Props) {
  const { isPrimary, isMuted, children, ...otherProps } = props;
  return (
    <button
      className={
        cx(styles.button, {
          [styles.primary]: isPrimary,
          [styles.muted]: isMuted
        }
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button