/** @format */

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './card.scss';

export const Card = ({ img, name, region, capital, population }) => {
  const { theme } = useGlobalContext();
  const populationWCommas = population.toLocaleString('en-US');
  return (
    <div className={`card card-${theme}`}>
      <Link to={`/name/${name}`}>
        <img src={img} alt={`${name}-flag`} />
      </Link>

      <div>
        <h1>{name}</h1>
        <h3>
          Population: <span>{populationWCommas}</span>
        </h3>
        <h3>
          Region: <span>{region}</span>
        </h3>
        <h3>
          Capital: <span>{capital ? capital[0] : ''}</span>
        </h3>
      </div>
    </div>
  );
};
