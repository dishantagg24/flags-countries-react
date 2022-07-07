/** @format */
import React from 'react';
import ArrowDownWhite from '../assets/arrowLeftWhite.svg';
import ArrowDownBlack from '../assets/arrowLeft.svg';
import { useGlobalContext } from '../context';
import './Filter.scss';
export const Filter = () => {
  const { theme } = useGlobalContext();
  return (
    <div className='filter'>
      <select>
        <option value='' disabled selected hidden>
          Filter by Region
        </option>
        <option>Africans</option>
        <option>Americans</option>
        <option>Indians</option>
        <option>Chinese</option>
      </select>
      {theme === 'light' ? (
        <img src={ArrowDownBlack} alt='arrow-black' />
      ) : (
        <img src={ArrowDownWhite} alt='arrow-white' />
      )}
    </div>
  );
};
