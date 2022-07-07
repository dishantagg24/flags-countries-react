/** @format */

import React from 'react';
import { Filter } from '../components/Filter';
import { Loader } from '../components/Loader';
import { SearchForm } from '../components/SearchForm';
import { useGlobalContext } from '../context';
import './Home.scss';

export const Home = () => {
  const { loading, theme } = useGlobalContext();
  return (
    <section>
      <div className='sub-section'>
        <SearchForm />
        <Filter />
      </div>
      {loading ? <Loader /> : null}
    </section>
  );
};
