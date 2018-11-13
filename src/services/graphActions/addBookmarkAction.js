import gql from 'graphql-tag';
import { getBookmarks } from '../graphQueries';

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

const addBookmarkAction = client => async (bookmark) => {
  client.mutate({
    mutation: ADD_BOOKMARK,
    variables: bookmark,
    update: (cache, { data: { addBookmark } }) => {
      const { bookmarks } = cache.readQuery({ query: getBookmarks });
      cache.writeQuery({
        query: getBookmarks,
        data: { bookmarks: bookmarks.concat([addBookmark]) },
      });
    },
  });
};

export default addBookmarkAction;
