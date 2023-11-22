import React, {useContext} from 'react';
import { useState } from 'react';
import { AppContext } from '../../../app';

const ALL_SETS = ['BT13','EX4','BT12','BT11','EX3','BT10','BT9','EX2','BT8','EX1','BT7','ST3','ST2','ST1','P']

const SetFilter = () => {
  const [context,setContext] = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const removeSet = set => {
    let currentSets = context.filters.sets;
        currentSets.splice(currentSets.indexOf(set),1);
    setContext({...context, filters: {
      ...context.filters,
      sets: currentSets
    }})  
  }

  const addSet = set => {
    let currentSets = context.filters.sets;
    if(currentSets.indexOf(set) !== -1) return
        currentSets.unshift(set);
    setContext({...context, filters: {
      ...context.filters,
      sets: currentSets
    }})
  }

  return (<div className='set-filter'>
    <div className='top'>
      <div className='left'><p className='label'>Sets</p>
      <ul className='active'>{context.filters.sets.map(set => {
        return <li className='pill' key={'set_'+set} onClick={()=>{removeSet(set)}}>{set}</li>
      })}</ul></div>
      <button className='expand' onClick={() => {setIsOpen(!isOpen)}}>+</button>
    </div>
    {isOpen && <ul className='inactive'>
      <li className='all pill' onClick={() => {}}>ADD ALL</li>
      {ALL_SETS.map(set => {
        return <li key={'set-pill_'+set} className='pill' onClick={() => {addSet(set)}}>{set}</li>
      })}
    </ul>}
  </div>)
}

export default SetFilter;
