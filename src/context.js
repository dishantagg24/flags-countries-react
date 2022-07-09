/** @format */

import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [theme, setTheme] = useState('light');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showModal, setshowModal] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      if (data) {
        const filterData1 = data.filter((item) =>
          item.region.toLowerCase().includes(selectedRegion.toLowerCase())
        );
        const filterData = filterData1.filter((item) =>
          item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const newData = filterData.map((item) => {
          const { name, population, region, capital, flags, cca3 } = item;
          return {
            img: flags.png,
            name: name.common,
            region,
            capital: capital,
            population,
            cca3,
          };
        });
        setFlags(newData);
      } else {
        setFlags([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('darktheme');
    } else {
      document.body.classList.add('darktheme');
    }
  }, [theme]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, selectedRegion]);

  const ThemeChange = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const optionClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        loading,
        isClicked,
        flags,
        searchTerm,
        selectedRegion,
        showModal,
        setshowModal,
        setSelectedRegion,
        setSearchTerm,
        optionClick,
        ThemeChange,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
