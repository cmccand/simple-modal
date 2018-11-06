import React from 'react';

import Button from '../Button';

import styles from './index.module.scss';

const renderButtons = buttons => buttons.map(btn => <Button {...btn} />);

const Modal = ({ title, children, buttons, onClose}) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        { title ? <h5>{ title }</h5> : false }
        { children }
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
  );
};

export default Modal;
