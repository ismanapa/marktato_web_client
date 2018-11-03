import React from 'react';
import PropTypes from 'prop-types';

import styles from './bookmarkItem.module.scss';

const BookmarkItem = ({ bookmark }) => (
  <div
    className={styles.bookmarkItemContainer}
    title={bookmark.url}>
    <div className={styles.bookmarkImage} />
    <div>
      <a className={styles.bookmarkItemLink} href={bookmark.url} target="_blank" rel="noopener noreferrer"></a>
      <p className={styles.bookmarkName}>
        {bookmark.name}
      </p>
    </div>
  </div>
);

BookmarkItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default BookmarkItem;
