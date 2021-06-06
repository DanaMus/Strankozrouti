import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import './style.css';

export const Navigation = () => {

  const [open, setOpen] = useState(false);
  const handleClickHamburgerMenu = () => {
    setOpen(!open);
  };


  return (
    <div className="menu">
      <Link to="/" className="logo">
        </Link>
       
      <div className={open ? "menu__items" : "menu__items menu__items--closed"} >
      
        <Link to="/" className="menu__item">
          Domů
        </Link>
        <Link to="/oprojektu" className="menu__item">
          O projektu
        </Link>
        <Link to="/detailni" className="menu__item">
          Zapsat knížku
        </Link>
        <Link to="/prectene" className="menu__item">
          Přečtené knihy
        </Link>
        <Link to="/kprecteni" className="menu__item">
          Plánovaná četba
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
};
