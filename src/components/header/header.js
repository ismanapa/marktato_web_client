import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = ({ title }) => (
  <header className={styles.container}>
    <h3 className={styles.title}>
      {title}
    </h3>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
