/** @format */

import { useGlobalContext } from '../context';
import { Card } from './card';
import './cardList.scss';
import { Modal } from './Modal';
export const CardList = () => {
  const { flags, searchTerm, showModal } = useGlobalContext();
  if (flags.length === 0) {
    return <h1 className='not-found'>"{searchTerm}" not found 😪</h1>;
  }
  return (
    <section>
      {showModal ? <Modal /> : null}
      <div className='card-list'>
        {flags.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </section>
  );
};
