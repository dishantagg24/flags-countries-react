/** @format */

import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [theme, setTheme] = useState('light');
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      // console.log(data[0]);
      if (data) {
        const newData = data.map((item) => {
          const { name, population, region, capital, flags } = item;
          return {
            img: flags.png,
            name: name.common,
            region,
            capital: capital,
            population,
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
    fetchData();
  }, []);

  const ThemeChange = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const optionClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <AppContext.Provider
      value={{ theme, loading, isClicked, flags, optionClick, ThemeChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
