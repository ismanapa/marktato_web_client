import React from 'react';
import PropTypes from 'prop-types';

import BookmarkItem from './bookmarkItem';

import styles from './bookmarkList.module.scss';

const renderListItem = bookmark => (
  <BookmarkItem key={bookmark.id} bookmark={bookmark}/>
);

const BookmarkList = ({ bookmarks }) => (
  <div className={styles.bookmarkContainer}>
    {bookmarks.map(renderListItem)}
  </div>
);

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
};

BookmarkList.defaultProps = {
  bookmarks: [],
};

export default BookmarkList;
