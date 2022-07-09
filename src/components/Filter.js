/** @format */
import React, { useRef } from 'react';
import ArrowDownWhite from '../assets/arrowLeftWhite.svg';
import ArrowDownBlack from '../assets/arrowLeft.svg';
import { useGlobalContext } from '../context';
import './Filter.scss';
export const Filter = () => {
  const {
    theme,
    isClicked,
    optionClick,
    showModal,
    setshowModal,
    setSelectedRegion,
    selectedRegion,
  } = useGlobalContext();

  const pElement = useRef();

  const handleCLick = (e) => {
    setSelectedRegion(e.target.innerHTML);
    pElement.current.innerHTML = e.target.innerHTML;
    setshowModal(true);
  };

  return (
    <div className={`select-flag select-flag-${theme}`} onClick={optionClick}>
      <div className={`filter filter-${theme}`}>
        <p ref={pElement}>
          {showModal === false ? 'Filter by Region' : selectedRegion}
        </p>
        {theme === 'light' ? (
          <img src={ArrowDownBlack} alt='arrow-black' />
        ) : (
          <img src={ArrowDownWhite} alt='arrow-white' />
        )}
      </div>
      {isClicked ? (
        <div className={`options options-${theme}`}>
          <p onClick={handleCLick} className={`option-${theme}`}>
            Africa
          </p>
          <p onClick={handleCLick} className={`option-${theme}`}>
            Americas
          </p>
          <p onClick={handleCLick} className={`option-${theme}`}>
            Asia
          </p>
          <p onClick={handleCLick} className={`option-${theme}`}>
            Europe
          </p>
          <p onClick={handleCLick} className={`option-${theme}`}>
            Oceania
          </p>
        </div>
      ) : null}
    </div>
  );
};
