import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
          <NavLink exact to="/" id="home" activeClassName="selected" className="menu__item">
            Domů
          </NavLink>
          <NavLink exact to="/detailni" id="book" activeClassName="selected" className="menu__item">
            Zapsat knížku
          </NavLink>
          <NavLink exact to="/prectene" id="read" activeClassName="selected" className="menu__item">
            Přečtené
          </NavLink>
          <NavLink exact to="/kprecteni" id="plantoread" activeClassName="selected" className="menu__item">
            Plánované
          </NavLink>
          <NavLink exact to="/statistika" id="statistics" activeClassName="selected" className="menu__item">
            Moje
          </NavLink>
          <NavLink exact to="/oprojektu" id="about" activeClassName="selected" className="menu__item">
            O projektu
          </NavLink>
        </div>

        <div className="menu__burger">
          <HamburgerMenu
            open={open}
            pressButton={handleClickHamburgerMenu}
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
