/** @format */

import React from 'react';
import ReactSwitch from 'react-switch';
import { useGlobalContext } from '../context';
import './navbar.scss';
export const Navbar = () => {
  const { theme, ThemeChange } = useGlobalContext();
  return (
    <nav className={`nav-${theme}`}>
      <h1>Where in the World?</h1>
      <div className='switch'>
        <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
        <ReactSwitch onChange={ThemeChange} checked={theme === 'dark'} />
      </div>
    </nav>
  );
};
