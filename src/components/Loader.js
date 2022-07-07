/** @format */

import React from 'react';
import { useGlobalContext } from '../context';
import './Loader.scss';

export const Loader = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={`lds-spinner loader-${theme}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
