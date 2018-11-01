import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  BookmarkList,
} from './components';

const bookmarkQuery = gql`
  { 
    bookmarks{
      name,
      url
    }
  }
`;

const BookmarksPage = ({ data }) => (
    <Fragment>
      { data.loading && <CircularProgress/>}
      <BookmarkList bookmarks={data.bookmarks} />
    </Fragment>
);

BookmarksPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default graphql(bookmarkQuery)(BookmarksPage);
