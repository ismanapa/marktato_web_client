import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header>
    <Typography variant="h6" color="inherit">
      {title}
    </Typography>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
