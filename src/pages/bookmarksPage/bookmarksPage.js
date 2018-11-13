import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  BookmarkList,
} from './components';

const renderList = (data, error) => {
  if (error) return (<span>{error.toString()}</span>);
  return <BookmarkList bookmarks={data.bookmarks} />;
};

const renderSeach = (makeSearch) => {
  let search;
  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <label>
          search
          <input ref={(node) => { search = node; }} />
        </label>
      </div>

      <button
        onClick={async () => { makeSearch(search.value); }}>
        Click me!
      </button>
    </div>
  );
};

const BookmarksPage = ({
  data,
  loading,
  error,
  makeSearch,
  addBookmark,
}) => (
    <Fragment>
      {loading ? <CircularProgress /> : renderList(data, error)}
      {renderSeach(makeSearch)}
    </Fragment>
);

BookmarksPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  makeSearch: PropTypes.func,
  addBookmark: PropTypes.func,
};

export default BookmarksPage;
