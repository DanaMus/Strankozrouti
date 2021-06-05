import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = () => {
  return (
    <div className="menu">
      <Link to="/" className="logo">
        </Link>
      <div className="menu--items">
        <Link to="/" className="menu--item">
          Domů
        </Link>
        <Link to="/oprojektu" className="menu--item">
          O projektu
        </Link>
        <Link to="/detailni" className="menu--item">
          Zapsat knížku
        </Link>
        <Link to="/prectene" className="menu--item">
          Přečtené knihy
        </Link>
        <Link to="/kprecteni" className="menu--item">
          Plánovaná četba
        </Link>
      </div>
      <button className="btn--prihlasit">Přihlásit se</button>
    </div>
  );
};
