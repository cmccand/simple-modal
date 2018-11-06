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
          title="This Is My Modal"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttons={this.getModalButtons()}
        />
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
