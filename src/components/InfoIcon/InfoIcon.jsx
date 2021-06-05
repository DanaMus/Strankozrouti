import React from 'react';
import './style.css';

export const InfoIcon = () => {
  

  return (
    
    <div className="infoicon_container">
      
      <div className="infoicon">
    <div className="infoicon--image">
    <img className="infoicon--image_monster"src='assets/jednoduse.svg'></img>
   </div>
      <div className="infoicon--description">
      <h3>Jednoduše</h3>
      <p>Nevíš co zapsat do čtenářského deníčku? Neznáš jeho strukturu? Náš formulář tě navede. Vyplň přednastavená políčka a pokud potřebuješ, přidej si vlastní. Po vyplnění si zápis můžeš uložit nebo vytisknout.</p>
      </div>
      </div>

      <div className="infoicon">
    <div className="infoicon--image">
    <img className="infoicon--image_monster"src='assets/prehledne.svg'></img>
   </div>
      <div className="infoicon--description">
      <h3>Přehledně</h3>
      <p>Všechny zapsané knížky najdeš přehledně pod záložkou přečtené knihy!</p>
      </div>
      </div>

      <div className="infoicon">
    <div className="infoicon--image">
    <img className="infoicon--image_monster"src='assets/zabavne.svg'></img>
   </div>
      <div className="infoicon--description">
      <h3>Zábavně</h3>
      <p>Každou přečtenou knížkou nakrmíš stránkožrouta. On ti za to rád poví kolik stránek už máš přečtených a jaký žánr u tebe zrovna vede.</p>
      </div>
      </div>
      </div>

  )
}

