import React from 'react';
import { Link } from 'react-router-dom';
import { InfoIcon } from '../../components/InfoIcon/InfoIcon';
import { Button } from '@material-ui/core';

import './style.css';

export const Homepage = () => {
  return (
    <>
      <div className="homepage__container">
        <div className="hero__container">
          <div className="hero__description">
            <h1>Čtenářský deník</h1>
            <h1>jednoduše a zábavně!</h1>
            <Link className="hero__link" to="/detailni">
              <Button
                size="large"
                variant="contained"
                color="primary"
                className="btn__record"
              >
                Zapsat knížku
              </Button>
            </Link>
          </div>
          <div className="hero__image">
            <img
              className="hero__monster"
              src="assets/monsterlibraryleft.svg"
            ></img>
          </div>
        </div>
      </div>
      <InfoIcon />
    </>
  );
};
