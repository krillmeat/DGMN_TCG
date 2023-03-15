import React from 'react';
import { useState } from 'react';
import filterIcon from '../images/icons/filter-icon.svg';
import FilterMenu from './filter-menu';
import './filter.css';

const CardFilter = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggleFilter = e => { setIsOpen(!isOpen) }

  return (<div className='card-filter'>
    <div className='launch'>
      <p>Filter</p>
      <button onClick={toggleFilter}><img alt='' src={filterIcon}/></button>
    </div>
    {isOpen && <FilterMenu />}
  </div>)
}

export default CardFilter;
