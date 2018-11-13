import React from 'react';
import PropTypes from 'prop-types';
import {
  BookmarksPage,
} from '../pages';
import { getBookmarks } from '../services/graphQueries';
import { withQuery, withGraphClient } from '../hoc';
import searchBookmarksAction from '../services/graphActions/searchBookmarksActions';
import addBookmarkAction from '../services/graphActions/addBookmarkAction';

const BookmarksPageContainer = ({
  data,
  loading,
  error,
  makeSearch,
  addBookmark,
}) => (
  <BookmarksPage
    makeSearch={makeSearch}
    addBookmark={addBookmark}
    data={data}
    loading={loading}
    error={error} />
);

BookmarksPageContainer.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  makeSearch: PropTypes.func,
  addBookmark: PropTypes.func,
};

const actions = {
  makeSearch: searchBookmarksAction,
  addBookmark: addBookmarkAction,
};

export default withGraphClient(actions)(withQuery(getBookmarks)(BookmarksPageContainer));
