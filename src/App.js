import React, { Component } from 'react';

// Third-party
import classNames from 'classnames';

// Components
import Button from './components/Button';
import Modal from './components/Modal';

// Styles
import styles from './App.module.scss';

class App extends Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  showModal = () => this.setState(
    prevState => ({
      showModal: !prevState.showModal
    })
  )

  renderDemoButton = () => this.state.showModal
    ? false
    : <Button className={styles.button} type="primary" label='Show Modal' onClick={this.showModal} />

  renderModal = () => {
    return (
      <Modal
        title="This Is My Modal"
        buttons={this.getModalButtons()}
        isOpen={this.state.showModal}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    );
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

  onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        showModal: false
      });
    }
  }

  render() {
    return (
      <div className={styles.app}>
        { this.renderDemoButton() }
        { this.renderModal() }
      </div>
    );
  }
}

export default App;
