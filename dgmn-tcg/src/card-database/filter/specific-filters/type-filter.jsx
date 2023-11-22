import React, {useContext} from 'react';
import { AppContext } from '../../../app';
import eggIcon from '../../images/icons/filter-egg-icon.svg';
import { addItemToFilter, isItemInFilter, removeItemFromFilter } from '../filter.utils';

const TypeFilter = () => {
  const [context,setContext] = useContext(AppContext);

  const addItem = value => {
    setContext({...context, filters: {
      ...context.filters,
      type: addItemToFilter(value,context.filters.type)
    }})
  }

  const removeItem = value => {
    setContext({...context, filters: {
      ...context.filters,
      type: removeItemFromFilter(value,context.filters.type)
    }})
  }

  const toggleFilter = e => {
    let currentFilters = context.filters.type;
    let v = e.currentTarget.value;
    isItemInFilter(v,currentFilters) ? removeItem(v) : addItem(v);
    console.log("Context : ",context);
  }

  return (<div className='filter type'>
    <p>Card Type</p>
    <ul>
      <li><button value='egg' onClick={toggleFilter}><img src={eggIcon}/></button></li>
      <li><button><img src=''/></button></li>
      <li><button><img src=''/></button></li>
      <li><button><img src=''/></button></li>
    </ul>
  </div>)
}

export default TypeFilter;
