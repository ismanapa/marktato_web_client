import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  BookmarkList,
} from './components';

const renderList = (data, error) => {
  if (error) return (<span>{error.toString()}</span>);
  return <BookmarkList bookmarks={data.bookmarks}/>;
};

const BookmarksPage = ({ data, loading, error }) => (
    <Fragment>
      { loading ? <CircularProgress/> : renderList(data, error)}
    </Fragment>
);

BookmarksPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default BookmarksPage;
