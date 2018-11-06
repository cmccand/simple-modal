import React from 'react';

import Button from '../Button';

import styles from './index.module.scss';

const renderButtons = buttons => buttons.map(btn => <Button {...btn} />);

const Modal = ({ title, content, buttons, onClose}) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        { title ? <h5 className={styles.title}>{ title }</h5> : false }
        { content ? <p className={styles.content}>{ content }</p> : false }
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
