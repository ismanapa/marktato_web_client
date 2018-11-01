import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo';

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

const BookmarksPage = ({ loading, error, data }) => (
<BookmarkList bookmarks={data.bookmarks} />
);

BookmarksPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default graphql(bookmarkQuery)(BookmarksPage);
