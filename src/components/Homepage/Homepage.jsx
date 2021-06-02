import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Homepage = () => {


  return (
<>
<div className="menu">
      <button className="prihlasit">Přihlásit se</button>
      <div className="menu--items">
      <Link to="/" className='menu--item'>Domů</Link>
      <div>
        <Link to="/zjednoduseny" className='menu--item'>Zjednodušený zápis</Link>
      </div>
      <div>
        <Link to="/detailni" className='menu--item'>Podrobný zápis</Link>
      </div>
      <div>
        <Link to="/prectene" className='menu--item'>Přečtené knihy</Link>
      </div>
      </div>
      <div className="logo"></div>
    </div>

    <div className="hero_container">
      <div className="hero--description">
      <h1>Čtenářský deník</h1>
      <h1>... jednoduše a hravě</h1>
      <button>Zapsat knížku</button>
    </div>
    <div className="hero--image">
    </div>
    </div>

</>

  )
}