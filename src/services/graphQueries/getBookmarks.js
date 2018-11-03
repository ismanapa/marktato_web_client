import gql from 'graphql-tag';

const getBookmarks = gql`
  { 
    bookmarks{
      name,
      url
    }
  }
`;

export default getBookmarks;
