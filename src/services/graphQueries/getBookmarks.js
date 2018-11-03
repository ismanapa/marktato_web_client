import gql from 'graphql-tag';

const getBookmarks = gql`
  { 
    bookmarks{
      id,
      name,
      url
    }
  }
`;

export default getBookmarks;
