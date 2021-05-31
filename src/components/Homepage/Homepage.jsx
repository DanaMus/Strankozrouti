import React from 'react';
import './style.css';

export const Homepage = () => {


  return (
<>
    <div className="menu">
      <button className="prihlasit">Přihlásit se</button>
      <div className="menu--odkazy">
        <a>domů</a>
        <a>Zapsat knížku</a>
        <a>o projektu</a>
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
      <img className="heroimage"></img>
    </div>
    </div>

</>

  )
}