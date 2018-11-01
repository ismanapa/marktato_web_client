import React, { Fragment } from 'react';
import { Header } from './components';
import { BookmarksPage } from './pages';
import './App.css';


const App = () => (
    <Fragment>
        <Header/>
        <section>
            <BookmarksPage/>
        </section>
    </Fragment>
);

export default App;
