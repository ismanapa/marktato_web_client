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

const renderAddBookmarkForm = (addBookmark) => {
  let name;
  let description;
  let url;
  return (
    <div>
      <h2>Add bookmark form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBookmark({ name: name.value, description: description.value, url: url.value });
          name.value = '';
          description.value = '';
          url.value = '';
        }}
      >
        <div>
          <label>
            name
                <input ref={(node) => { name = node; }} />
          </label>
        </div>

        <div>
          <label>
            description
                <input ref={(node) => { description = node; }} />
          </label>
        </div>

        <div>
          <label>
            url
                <input ref={(node) => { url = node; }} />
          </label>
        </div>

        <button type="submit">Add bookmark</button>
      </form>
    </div>
  );
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
      {renderAddBookmarkForm(addBookmark)}
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
