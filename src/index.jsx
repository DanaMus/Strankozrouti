import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Simpleformpage from './pages/Simpleformpage';
import Detailformpage from './pages/Detailformpage';

const App = () => {
  return (
    <Router>
      <Link to="/">Domů</Link>
      <h2>Chci si zapsat přečtenou knížku</h2>
      <div>
        <Link to="/zjednoduseny">Zjednodušený zápis</Link>
      </div>
      <div>
        <Link to="/detailni">Podrobný zápis</Link>
      </div>
      <Switch>
        <Route path="/zjednoduseny">
          <Simpleformpage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/detailni">
          <Detailformpage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
