import React from 'react';
import {
  BookmarkList,
} from './components';

const mockedBookmarks = [
  {
    name: 'Bookmark 1',
    url: 'http://www.google.es',
  },
  {
    name: 'Bookmark 2',
    url: 'http://www.google.es',
  },
  {
    name: 'Bookmark 3',
    url: 'http://www.google.es',
  },
  {
    name: 'Bookmark 4',
    url: 'http://www.google.es',
  },
  {
    name: 'Bookmark 5',
    url: 'http://www.google.es',
  },
  {
    name: 'Bookmark 6',
    url: 'http://www.google.es',
  },
];

const BookmarksPage = () => (
  <BookmarkList bookmarks={mockedBookmarks}/>
);

export default BookmarksPage;
