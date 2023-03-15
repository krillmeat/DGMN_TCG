import React from 'react';
import CardList from './card-list';
import './card-database.css';
import CardFilter from './filter/filter';
import CardPopup from './card-popup/card-popup';
import { useContext } from 'react';
import { AppContext } from '../app';

const CardDatabase = () => {
  const [context,setContext] = useContext(AppContext);
  return (<div className='card-database'>
    <CardFilter />
    <CardList set='ST1' />
    {context.isPopupOpen && <CardPopup />}
  </div>)
}

export default CardDatabase;
