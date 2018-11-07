import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';

// Styles
import styles from './index.module.scss';

const renderButtons = buttons => buttons.map((btn, i) => <Button {...btn} key={i} />);

const Modal = ({ title, children, buttons }) => (
  <div className={styles.container}>
    <div className={styles.modal}>
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
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

Modal.defaultProps = {
  title: '',
  buttons: null
};

export default Modal;
