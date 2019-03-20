import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import CssBaseline from '@material-ui/core/CssBaseline';

import apolloClient from './services/apolloClient';

import { Header } from './components';
import { BookmarksPageContainer } from './containers';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      // light: '#ffffff',
      dark: '#e5e5e5',
      contrastText: '#000000',
    },
    // secondary: {
    //   main: '#ffffff',
    //   light: '#ffffff',
    //   dark: '#ffffff',
    //   contrastText: '#000000',
    // },
    // background: {
    //   default: '#fff',
    // },
  },
});

const App = () => (
  <MuiThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ApolloProvider client={apolloClient}>
      <Fragment>
        <Header title={'Marktato'} />
        <section>
          <BookmarksPageContainer />
        </section>
      </Fragment>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
