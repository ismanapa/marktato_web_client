import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apolloClient';

import { Header } from './components';
import { BookmarksPage } from './pages';


const App = () => (
  <ApolloProvider client={apolloClient}>
    <Fragment>
      <Header title={'Marktato'}/>
      <section>
        <BookmarksPage />
      </section>
    </Fragment>
  </ApolloProvider>
);

export default App;
