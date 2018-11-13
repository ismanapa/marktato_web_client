import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import styles from './header.module.scss';

const Header = ({ title }) => (
  <header className={styles.container}>
    <h3 className={styles.title}>
      {title}
    </h3>
    <Button color="primary" variant="fab" aria-label="Add">
      <AddIcon/>
    </Button>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
