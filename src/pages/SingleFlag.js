/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BackBtn } from '../components/BackBtn';
import { Loader } from '../components/Loader';
import './SingleFlag.scss';

const SingleFlag = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [flagInfo, setFlagInfo] = useState(null);

  const fetchFlagInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
      const data = await response.json();
      if (data) {
        const newData = data.map((item) => {
          const {
            name,
            population,
            region,
            capital,
            subregion,
            tld,
            currencies,
            languages,
            borders,
            flags,
          } = item;
          return {
            img: flags.png,
            countryName: name.common,
            nativeName: name.nativeName,
            region,
            capital: capital,
            population,
            subregion,
            tld,
            currencies,
            languages,
            borders,
          };
        });
        setFlagInfo(newData);
      } else {
        setFlagInfo(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlagInfo();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const {
    img,
    countryName,
    nativeName,
    region,
    capital,
    population,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = flagInfo[0];
  const { official } = Object.values(nativeName)[0];
  const { name } = Object.values(currencies)[0];
  const languagesArr = Object.values(languages);
  const totalLanguages = languagesArr.toString();
  const populationWCommas = population.toLocaleString('en-US');
  return (
    <section>
      <BackBtn />
      <div className='single-flag'>
        <img src={img} alt={`${name}-flag`} />
        <h1>{countryName}</h1>
        <div className='name-info'>
          <div>
            <h3>
              NativeName: <span>{official}</span>
            </h3>
            <h3>
              Population: <span>{populationWCommas}</span>
            </h3>
            <h3>
              Region: <span>{region}</span>
            </h3>
            <h3>
              Sub Region: <span>{subregion}</span>
            </h3>
            <h3>
              Capital: <span>{capital}</span>
            </h3>
            <h3 className='border'>
              Border Countries: <span>{borders}</span>
            </h3>
          </div>
          <div>
            <h3>
              Top Level Domain: <span>{tld}</span>
            </h3>
            <h3>
              Currencies: <span>{name}</span>
            </h3>
            <h3>
              Languages: <span>{totalLanguages}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFlag;
