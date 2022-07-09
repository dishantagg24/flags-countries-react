/** @format */

import React from 'react';
import './BackBtn.scss';
import ArrowBack from '../assets/arrowLeft.svg';
import ArrowBackDark from '../assets/arrowLeftWhite.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export const BackBtn = () => {
  const { theme } = useGlobalContext();
  return (
    <Link to='/'>
      <div className={`back-btn back-btn-${theme}`}>
        {theme === 'light' ? (
          <img src={ArrowBack} alt='back-arrow' />
        ) : (
          <img src={ArrowBackDark} alt='back-arrow-dark' />
        )}
        <span>Back</span>
      </div>
    </Link>
  );
};
