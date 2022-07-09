/** @format */
import React from 'react';
import ArrowDownWhite from '../assets/arrowLeftWhite.svg';
import ArrowDownBlack from '../assets/arrowLeft.svg';
import { useGlobalContext } from '../context';
import './Filter.scss';
export const Filter = () => {
  const { theme, isClicked, optionClick } = useGlobalContext();
  return (
    <div className={`select-flag select-flag-${theme}`} onClick={optionClick}>
      <div className={`filter filter-${theme}`}>
        <p>Filter by Region</p>
        {theme === 'light' ? (
          <img src={ArrowDownBlack} alt='arrow-black' />
        ) : (
          <img src={ArrowDownWhite} alt='arrow-white' />
        )}
      </div>
      {isClicked ? (
        <div className={`options options-${theme}`}>
          <p className={`option-${theme}`}>Africa</p>
          <p className={`option-${theme}`}>Americas</p>
          <p className={`option-${theme}`}>Asia</p>
          <p className={`option-${theme}`}>Europe</p>
          <p className={`option-${theme}`}>Oceania</p>
        </div>
      ) : null}
    </div>
  );
};
