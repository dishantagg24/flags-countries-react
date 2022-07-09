/** @format */

import React from 'react';
import { useGlobalContext } from '../context';
import './Modal.scss';

export const Modal = () => {
  const { theme, setSelectedRegion, setshowModal } = useGlobalContext();

  const clearFilter = () => {
    setSelectedRegion('');
    setshowModal(false);
  };

  return (
    <div className={`clear-filter clear-filter-${theme}`} onClick={clearFilter}>
      <span className='X'>X</span>
      <span>Clear filter</span>
    </div>
  );
};
