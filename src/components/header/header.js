import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import styles from './header.module.scss';
import AddBookmarkModal from '../addBookmarkModal/addBookmarkModal';

class Header extends React.Component {
  state = {
    showModal: false,
  };

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      title,
    } = this.props;
    return (
      <Fragment>
        <header className={styles.container}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <Button
            onClick={this.openModal.bind(this)}
            color="primary"
            variant="fab"
            aria-label="Add">
            <AddIcon />
          </Button>
        </header>

        <AddBookmarkModal
          handleClose={this.closeModal.bind(this)}
          showModal={this.state.showModal} />

      </Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
