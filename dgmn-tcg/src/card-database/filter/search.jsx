import React from 'react';
import { useState, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../app';
import useGetSearchOptions from './search-options.hook';

const Search = () => {

  const [context,setContext] = useContext(AppContext);

  const [value,setValue] = useState('');

  const [searchOptions] = useGetSearchOptions(value,context.filters);

  const formRef = useRef();

  const clearField = e => {
    e.preventDefault();
    formRef.current.reset();
    setValue("");
    updateFilter("");
  }

  const submitSearch = e => {
    e.preventDefault();
    updateFilter();
  }

  const updateFilter = (overrideValue) => {
    setContext({
      ...context,
      filters: {
        ...context.filters,
        name: typeof overrideValue !== 'undefined' ? overrideValue : value
      }
    })
  }

  return (<div className={'search-bar'+(value !== "" ? " not-empty" : "")}>
    <form onSubmit={submitSearch} ref={formRef}>
      <input list="search-data" name='search' autoComplete="on" onChange={e=> { setValue(e.target.value) }}/>
      <datalist id='search-data'>
        {searchOptions.map(option => <option key={'option_'+option} value={option} />)}
      </datalist>
    </form>
    <button className='clear' onClick={clearField}>&times;</button>
  </div>)
}

export default Search;
