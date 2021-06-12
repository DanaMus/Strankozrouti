import React from 'react';
import './style.css';

export const InfoIcon = () => {
  

  return (
    
    <div className="infoicon__container">
      
      <div className="infoicon">
    <div className="infoicon__image">
    <img className="infoicon__image--monster"src='assets/jednoduse.svg'></img>
   </div>
      <div className="infoicon__description">
      <h3>Jednoduše</h3>
      <p>Nevíš co zapsat do čtenářského deníčku? Neznáš jeho strukturu? Náš formulář tě navede. Vyplň přednastavená políčka a pokud potřebuješ, můžeš použít políčko "ostatní".</p>
      </div>
      </div>

      <div className="infoicon">
    <div className="infoicon__image">
    <img className="infoicon__image--monster"src='assets/prehledne.svg'></img>
   </div>
      <div className="infoicon__description">
      <h3>Přehledně</h3>
      <p>Všechny zapsané knížky najdeš přehledně pod záložkou "přečtené". Odtud si můžeš svůj záznam vytisknout nebo uložit.</p>
      </div>
      </div>

      <div className="infoicon">
    <div className="infoicon__image">
    <img className="infoicon__image--monster"src='assets/zabavne.svg'></img>
   </div>
      <div className="infoicon__description">
      <h3>Zábavně</h3>
      <p>Každou přečtenou knížkou nakrmíš Stránkožrouta. On ti za to rád poví, kolik stránek a knížek už máš přečtených.</p>
      </div>
      </div>
      </div>

  )
}

