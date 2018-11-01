import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apolloClient';

import { Header } from './components';
import { BookmarksPage } from './pages';
import './App.css';


const App = () => (
  <ApolloProvider client={apolloClient}>
    <Fragment>
      <Header />
      <section>
        <BookmarksPage />
      </section>
    </Fragment>
  </ApolloProvider>
);

export default App;
