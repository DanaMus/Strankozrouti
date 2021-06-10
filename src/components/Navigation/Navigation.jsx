import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import './style.css';
import { Button } from '@material-ui/core';

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
            Přečtené
          </Link>
          <Link to="/kprecteni" id="plantoread" className="menu__item">
            Plánované
          </Link>
          <Link to="/statistika" id="statistics" className="menu__item">
            Moje
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
          <Button
            size="medium"
            variant="contained"
            color="primary"
            style={{ marginRight: '10px', marginTop: '25px' }}
            className="btn_login"
          >
            Přihlásit se
          </Button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
