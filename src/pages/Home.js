/** @format */

import React from 'react';
import { CardList } from '../components/cardList';
import { Filter } from '../components/Filter';
import { Loader } from '../components/Loader';
import { SearchForm } from '../components/SearchForm';
import { useGlobalContext } from '../context';
import './Home.scss';

export const Home = () => {
  const { loading, theme, flags } = useGlobalContext();
  return (
    <section className='home'>
      <SearchForm />
      <Filter />
      {loading ? <Loader /> : <CardList />}
    </section>
  );
};
