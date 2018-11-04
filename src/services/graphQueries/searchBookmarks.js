import gql from 'graphql-tag';

const searchBookmarks = gql`
query searchBookmarks($name: String){
    bookmarks(name: $name){
      id,
      name,
      url
    }
  }
`;

export default searchBookmarks;
