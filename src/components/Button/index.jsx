import React from 'react';

// Third-party
import classNames from 'classnames';

// Styles
import styles from './index.module.scss';

const Button = ({ type, label, onClick, className }) => (
  <button
    className={classNames(styles.button, styles[type], className)}
    onClick={onClick}
  >
    { label }
  </button>
);

export default Button;
