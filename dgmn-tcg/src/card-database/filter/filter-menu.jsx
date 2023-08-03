import React from 'react';
import FilterOption from './filter-option';
import Search from './search';
import CardSizer from './sort/card-size';
import SetFilter from './specific-filters/set-filter';
import TypeFilter from './specific-filters/type-filter';

const FilterMenu = () => {
  return (<div className='filter-menu'>
    <div className='top'>
      <Search />
      <FilterOption optionName='type' iconType='image' />
      <FilterOption optionName='color' iconType='div' />
      <SetFilter/>
    </div>
    <div className='sorting'>
      <CardSizer/>
    </div>
  </div>)
}

export default FilterMenu;
