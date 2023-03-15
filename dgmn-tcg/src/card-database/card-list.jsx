import React from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { AppContext } from '../app';
import Card from './card';
import CARDS from './cards.db';
import { typeFilter, colorFilter } from './filter/filter.utils';

const CardList = () => {

  const [context,setContext] = useContext(AppContext);

  const mergedSets = useMemo(()=>{
    let sets = context.filters.sets;
    let merged = CARDS[sets[0]];
    for(let i = 1; i < sets.length; i++){
      merged = merged.concat(CARDS[sets[i]])
    }
    return merged;
  },[context])

  const shownCards = useMemo(()=>{
    if(context.filters.sets.length === 0) return [];
    let filtered = mergedSets; // Set
        filtered = filtered.filter(typeFilter(context.filters.type)); // Type
        filtered = filtered.filter(colorFilter(context.filters.color)); // Color
        return filtered;
  },[context])

  return (<div className='card-list'>
    {shownCards.length > 0 ? shownCards.map((card,index) => {
      return <Card key={card.set+index} set={card.set} card={card.no} size='xxl' />
    }) : <p>Nothing found</p>}
  </div>)
}

export default CardList;
