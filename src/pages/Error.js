/** @format */

import React from 'react';
import Dark404 from '../assets/404Dark.svg';
import Light404 from '../assets/404Light.svg';
import { Link } from 'react-router-dom';
import './Error.scss';
import { useGlobalContext } from '../context';
export const Error = () => {
  const { theme } = useGlobalContext();
  return (
    <div className='error-page'>
      {theme === 'light' ? (
        <img src={Dark404} alt='dark-404' />
      ) : (
        <img src={Light404} alt='light-404' />
      )}
      <Link to='/' className={`link link-${theme}`}>
        Go to Home
      </Link>
    </div>
  );
};
