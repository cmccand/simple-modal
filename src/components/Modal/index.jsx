import React from 'react';

import Button from '../Button';

import classNames from 'classnames';

import styles from './index.module.scss';

const renderButtons = buttons => buttons.map(btn => <Button {...btn} />);

const Modal = ({ title, children, buttons, isOpen, onClose}) => {
  const modalClass = isOpen ? 'open' : 'closed';
  return (
    isOpen
      ? (
        <div className={styles.container}>
          <div className={classNames(styles.modal, styles[modalClass])}>
            { title ? <h5 className={styles.title}>{ title }</h5> : false }
            <div className={styles.content}>
              { children }
            </div>
            {
              buttons
                ? (
                  <div className={styles.buttonContainer}>
                    { renderButtons(buttons) }
                  </div>
                )
                : false
            }
          </div>

        </div>
      )
    : false
  );
};

export default Modal;
