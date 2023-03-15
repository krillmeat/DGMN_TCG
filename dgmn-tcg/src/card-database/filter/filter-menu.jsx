import React from 'react';
import FilterOption from './filter-option';
import SetFilter from './specific-filters/set-filter';
import TypeFilter from './specific-filters/type-filter';

const FilterMenu = () => {
  return (<div className='filter-menu'>
    <FilterOption optionName='type' iconType='image' />
    <FilterOption optionName='color' iconType='div' />
    <SetFilter/>
  </div>)
}

export default FilterMenu;
