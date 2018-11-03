import React from 'react';
import PropTypes from 'prop-types';
import {
  BookmarksPage,
} from '../pages';
import { getBookmarks } from '../services/graphQueries';
import { withQuery } from '../hoc';

const BookmarksPageContainer = ({ data, loading, error }) => (
    <BookmarksPage
        data={data}
        loading={loading}
        error={error}/>
);

BookmarksPageContainer.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default withQuery(getBookmarks)(BookmarksPageContainer);
