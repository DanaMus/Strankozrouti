import React from 'react';
import './style.css';

export const Homepage = () => {


  return (

    <div className="hero_container">
      <div className="hero--description">
      <h1>Čtenářský deník</h1>
      <h1>jednuduše a zábavně!</h1>
      <button>Zapsat knížku</button>
     </div>
    <div className="hero--image">
    <img className="hero--monster" src='assets/monsterlibraryleft.svg'></img>
   </div>
   </div>

  )
}