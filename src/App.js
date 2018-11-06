import React, { Component } from 'react';

// Third-party
import classNames from 'classnames';

// Components
import Modal from './components/Modal';

// Styles
import styles from './App.module.scss';

class App extends Component {
  state = {
    showModal: false
  }

  showModal = () => this.setState(
    prevState => ({
      showModal: !prevState.showModal
    })
  )

  renderModal = () => {
    if (this.state.showModal) {
      return (
        <Modal
          buttons={this.getModalButtons()}
        >
          <p>Test Content</p>
        </Modal>
      );
    }
    return false;
  }

  closeModal = () => this.setState({ showModal: false })

  getModalButtons = () => ([
    {
      type: 'primary',
      label: 'Action',
      onClick: () => {}
    },
    {
      type: 'utility',
      label: 'Close',
      onClick: this.closeModal
    }
  ])

  render() {
    return (
      <div className={styles.app}>
        <button onClick={this.showModal}>Click to Show Modal</button>
        { this.renderModal() }
      </div>
    );
  }
}

export default App;
