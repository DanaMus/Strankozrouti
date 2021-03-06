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

  const [LogIn, setLogIn] = useState(true);

  const regex = /prectene\/(.*)/g;
  if (!location.pathname.match(regex)) {
    return (
      <div className="menu">
        <Link to="/" className="logo"></Link>

        <div
          className={open ? 'menu__items' : 'menu__items menu__items--closed'}
        >
          <NavLink exact to="/" onClick={handleClickHamburgerMenu} id="home" activeClassName="selected" className="menu__item">
            Domů
          </NavLink>
          <NavLink exact to="/detailni" onClick={handleClickHamburgerMenu} id="book" activeClassName="selected" className="menu__item">
            Zapsat knížku
          </NavLink>
          <NavLink exact to="/prectene" onClick={handleClickHamburgerMenu} id="read" activeClassName="selected" className="menu__item">
            Přečtené
          </NavLink>
          <NavLink exact to="/kprecteni" onClick={handleClickHamburgerMenu} id="plantoread" activeClassName="selected" className="menu__item">
            Plánované
          </NavLink>
          <NavLink exact to="/statistika" onClick={handleClickHamburgerMenu} id="statistics" activeClassName="selected" className="menu__item">
            Moje
          </NavLink>
          <NavLink exact to="/oprojektu" onClick={handleClickHamburgerMenu} id="about" activeClassName="selected" className="menu__item">
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
          variant={LogIn ? "contained" : "outlined" }
          color="primary"
            
            style={{ marginRight: '10px', marginTop: '25px' }}
            onClick={() => setLogIn(!LogIn)}>{LogIn ? "Přihlásit" : "Odhlásit"}
          </Button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
