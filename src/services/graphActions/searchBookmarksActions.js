import gql from 'graphql-tag';

import { searchBookmarks } from '../graphQueries';

const UPDATE_BOOKMARKS = gql`
  mutation UpdateBookmarks($bookmarks: [Bookmark]) {
    updateBookmarks(bookmarks: $bookmarks) @client
  }
`;

const searchBookmarksAction = client => async (search) => {
  const { data } = await client.query({
    query: searchBookmarks,
    variables: { name: search },
  });

  client.mutate({
    mutation: UPDATE_BOOKMARKS,
    variables: { bookmarks: data.bookmarks },
  });
};

export default searchBookmarksAction;
