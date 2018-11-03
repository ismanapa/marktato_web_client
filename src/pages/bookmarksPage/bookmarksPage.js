import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  BookmarkList,
} from './components';

const ADD_BOOKMARK = gql`
  mutation addBookmark (
    $name: String,
    $description: String,
    $url: String
  ){
    addBookmark(
      name: $name,
      description: $description,
      url: $url
    ) {
      id,
      name,
      url
    }
  }
`;

const renderList = (data, error) => {
  if (error) return (<span>{error.toString()}</span>);
  return <BookmarkList bookmarks={data.bookmarks} />;
};

const renderAddBookmarkForm = () => {
  let name;
  let description;
  let url;
  return (
    <div>
      <h2>Add bookmark form</h2>
      <Mutation mutation={ADD_BOOKMARK}>
        {
          (addBookmark, { data }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addBookmark({ variables: { name: name.value, description: description.value, url: url.value } });
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
          )}
      </Mutation>
    </div>
  );
};

const BookmarksPage = ({ data, loading, error }) => (
  <Fragment>
    {loading ? <CircularProgress /> : renderList(data, error)}
    {renderAddBookmarkForm()}
  </Fragment>
);

BookmarksPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default BookmarksPage;
