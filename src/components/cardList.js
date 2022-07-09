/** @format */

import { useGlobalContext } from '../context';
import { Card } from './card';
import './cardList.scss';
export const CardList = () => {
  const { flags } = useGlobalContext();
  return (
    <section>
      <div className='card-list'>
        {flags.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </section>
  );
};
