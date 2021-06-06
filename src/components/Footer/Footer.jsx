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
    <p>Tento projekt byl vytvořen v rámci Digitální akademie</p>
    <img className='czechitas_logo' src='/assets/czechitas.png' alt='czechitaslogo'></img>
  </footer>

  )} else {
    return <></>
  }
}