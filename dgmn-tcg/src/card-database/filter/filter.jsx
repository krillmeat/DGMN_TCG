import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../../app';
import filterIcon from '../images/icons/filter-icon.svg';
import FilterMenu from './filter-menu';
import './filter.css';

const TOP_FILTER_SIZES = ['S'];

const CardFilter = () => {
  const [{windowSize}] = useContext(AppContext);
  const [isOpen,setIsOpen] = useState(false);

  const toggleFilter = e => { setIsOpen(!isOpen) }

  return (<div className='card-filter'>
    <div className='launch'>
      <p>Filter</p>
      <button onClick={toggleFilter}><img alt='' src={filterIcon}/></button>
    </div>
    {(isOpen || !TOP_FILTER_SIZES.includes(windowSize)) && <FilterMenu />}
  </div>)
}

export default CardFilter;
