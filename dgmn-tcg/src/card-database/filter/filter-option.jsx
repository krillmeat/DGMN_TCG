import React, {useContext} from 'react';
import { AppContext } from '../../app';
import eggIcon from '../images/icons/filter-egg-icon.svg';
import dgmnIcon from '../images/icons/filter-dgmn-icon.svg';
import tamerIcon from '../images/icons/filter-tamer-icon.svg';
import optionIcon from '../images/icons/filter-option-icon.svg';
import { addItemToFilter, isItemInFilter, removeItemFromFilter } from './filter.utils';

const FILTERS = {
  type: {label: 'Card Type', choices: ['egg','dgmn','tamer','option']},
  color: {label: 'Color', choices: ['red','blue','yellow','green','black','purple','white']}
}

const ICON_MAP = {
  egg: eggIcon,
  dgmn: dgmnIcon,
  tamer: tamerIcon,
  option: optionIcon
}

const FilterOption = ({optionName,iconType}) => {
  const [context,setContext] = useContext(AppContext);

  const addItem = value => {
    setContext({...context, filters: {
      ...context.filters,
      [optionName]: addItemToFilter(value,context.filters[optionName])
    }})
  }

  const removeItem = value => {
    setContext({...context, filters: {
      ...context.filters,
      [optionName]: removeItemFromFilter(value,context.filters[optionName])
    }})
  }

  const toggleFilter = e => {
    let currentFilters = context.filters[optionName];
    let v = e.currentTarget.value;
    isItemInFilter(v,currentFilters) ? removeItem(v) : addItem(v);
    console.log("Context : ",context);
  }

  return (<div className={'filter '+optionName}>
    <p className='label'>{FILTERS[optionName].label}</p>
    <ul className={optionName}>
      {FILTERS[optionName].choices.map(value => {
        return <li key={value}>
                <button 
                  value={value} 
                  onClick={toggleFilter} 
                  className={isItemInFilter(value,context.filters[optionName]) ? 'active' : 'inactive'}>
                    {iconType ==='image' && <img src={ICON_MAP[value]}/>}
                    {iconType === 'div' && <div className={'icon '+value}></div>}
                </button>
               </li>
      })}
    </ul>
  </div>)
}

export default FilterOption;
