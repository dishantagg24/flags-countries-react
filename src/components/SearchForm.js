/** @format */

import SearchIcon from '../assets/search.svg';
import { useGlobalContext } from '../context';
import './SearchForm.scss';
export const SearchForm = () => {
  const { theme, searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <div className={`search-form search-form-${theme}`}>
      <img src={SearchIcon} alt='search-icon' />
      <input
        className={`input-${theme}`}
        type='search'
        placeholder='Search for a country'
        name='searchCountry'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
