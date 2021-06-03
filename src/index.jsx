import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Simpleformpage from './pages/Simpleformpage';
import Detailformpage from './pages/Detailformpage';
import { Homepage } from './pages/Homepage/Homepage';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import BookListPage from './pages/BookListPage';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/detailni">
          <Detailformpage />
        </Route>
        <Route path="/prectene">
          <BookListPage />
        </Route>
        <Route path="/"></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
