import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const renderListItem = bookmark => (
  <ListItem key={bookmark.id}>
    <a target="_blank" rel="noopener noreferrer" href={bookmark.url}>{bookmark.name}</a>
  </ListItem>
);

const BookmarkList = ({ bookmarks }) => (
  <List>
    {bookmarks && bookmarks.map(renderListItem)}
  </List>
);

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
};

export default BookmarkList;
