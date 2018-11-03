import React from 'react';
import PropTypes from 'prop-types';

const renderListItem = bookmark => (
  <li key={bookmark.id}>
    <a target="_blank" rel="noopener noreferrer" href={bookmark.url}>{bookmark.name}</a>
  </li>
);

const BookmarkList = ({ bookmarks }) => (
  <ul>
    {bookmarks.map(renderListItem)}
  </ul>
);

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
};

BookmarkList.defaultProps = {
  bookmarks: [],
};

export default BookmarkList;
