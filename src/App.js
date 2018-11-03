import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apolloClient';

import { Header } from './components';
import { BookmarksPageContainer } from './containers';


const App = () => (
  <ApolloProvider client={apolloClient}>
    <Fragment>
      <Header title={'Marktato'}/>
      <section>
        <BookmarksPageContainer />
      </section>
    </Fragment>
  </ApolloProvider>
);

export default App;
