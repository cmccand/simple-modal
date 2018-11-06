import React from 'react';

// Third-party
import classNames from 'classnames';

// Styles
import styles from './index.module.scss';

const Button = ({ type, label, onClick }) => (
  <button
    className={classNames(styles.button, styles[type])}
    onClick={onClick}
  >
    { label }
  </button>
);

export default Button;
