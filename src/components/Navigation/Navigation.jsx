import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = () => {


  return (
<div className="menu">
<div className="logo"></div>
      <div className="menu--items">
      <Link to="/" className='menu--item'>Domů</Link>
      <Link to="/zjednoduseny" className='menu--item'>Zjednodušený zápis</Link>
      <Link to="/detailni" className='menu--item'>Podrobný zápis</Link>
      <Link to="/prectene" className='menu--item'>Přečtené knihy</Link>
      </div>
      <button className="btn--prihlasit">Přihlásit se</button>
    </div>
  )
}
