import ApolloClient from 'apollo-boost';

const resolvers = {
  Mutation: {
    updateBookmarks: (_, variables, { cache, getCacheKey }) => {
      cache.writeData({ data: { bookmarks: variables.bookmarks } });
      return variables.bookmarks;
    },
  },
};

const typeDefs = `
  type Bookmark {
    id: ID,
    name: String,
    description: String,
    usages: Int,
    lasUsage: Date,
    url: String
  }

  type Mutation {
    updateBookmarks(bookmarks: [Bookmark]): [Bookmark]
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  clientState: {
    resolvers,
    typeDefs,
  },
});

export default client;
