import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import './style.css';

export const Navigation = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const [open, setOpen] = useState(false);
  const handleClickHamburgerMenu = () => {
    setOpen(!open);
  };
  const regex = /prectene\/(.*)/g;
  if (!location.pathname.match(regex)) {
    return (
      <div className="menu">
        <Link to="/" className="logo"></Link>

        <div
          className={open ? 'menu__items' : 'menu__items menu__items--closed'}
        >
          <Link to="/" id="home" className="menu__item">
            Domů
          </Link>
          <Link to="/detailni" id="book" className="menu__item">
            Zapsat knížku
          </Link>
          <Link to="/prectene" id="read" className="menu__item">
            Přečtené knihy
          </Link>
          <Link to="/kprecteni" id="plantoread" className="menu__item">
            Plánovaná četba
          </Link>
          <Link to="/statistika" id="statistics" className="menu__item">
            Statistika
          </Link>
          <Link to="/oprojektu" id="about" className="menu__item">
            O projektu
          </Link>
        </div>

        <div className="menu__burger">
          <HamburgerMenu
            open={open}
            naKliknutiNaTlacitko={handleClickHamburgerMenu}
          />
        </div>
        <div className="login">
          <button className="btn_login">Přihlásit se</button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Link to="/prectene" className="menu__item">
          Zpět na přečtené knihy
        </Link>
      </>
    );
  }
};
