import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Simpleformpage from './pages/Simpleformpage';
import Detailformpage from './pages/Detailformpage';
import { Homepage } from './components/Homepage/Homepage';
import BookListPage from './pages/BookListPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/zjednoduseny">
          <Simpleformpage />
        </Route>
        <Route path="/detailni">
          <Detailformpage />
        </Route>
        <Route path="/prectene">
          <BookListPage />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
