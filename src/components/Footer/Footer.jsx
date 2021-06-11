import React, { useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

export const Footer = () => {

  const location = useLocation();
  useEffect(() => {
  console.log(location.pathname);
  },[location])

  const regex = /prectene\/(.*)/g;
if (!location.pathname.match(regex)) { return (
    
  <footer>
    <div className="footer__container">
    <p className="footer__description">Tento projekt byl vytvořen v rámci Digitální akademie<a href="https://www.czechitas.cz/"><img className='czechitas_logo' src='/assets/czechitas.png' alt='czechitaslogo'></img></a></p>
    
    </div>
  </footer>

  )} else {
    return <></>
  }
}