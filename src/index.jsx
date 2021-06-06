import React, {useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Simpleformpage from './pages/Simpleformpage';
import Detailformpage from './pages/Detailformpage';
import { Homepage } from './pages/Homepage/Homepage';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import BookListPage from './pages/BookListPage';
import ToReadPage from './pages/ToReadPage';
import AboutPage from './pages/AboutPage';
import DetailBook from './components/DetailBook';

const App = () => {
  

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/detailni">
          <Detailformpage />
        </Route>
        <Route path="/prectene/:id">
          <DetailBook />
        </Route>
        <Route path="/prectene">
          <BookListPage />
        </Route>
        <Route path="/kprecteni">
          <ToReadPage />
        </Route>
        <Route path="/oprojektu" exact>
          <AboutPage />
        </Route>
        <Route path="/" exact></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
