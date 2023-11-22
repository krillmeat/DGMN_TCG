import {useEffect, useMemo, useState} from 'react';
import CARDS from '../cards.db';
import useGetFilteredCards from './filtered-cards.hook';

export const buildNamesList = (value,allCards) => {
  if(value.length < 2) return [];
  let a = [];

  for(let card of allCards){
    if(!a.includes(card.name)) a.push(card.name)
  }

  return a;
}

const useGetSearchOptions = (value,currentFilters) => {

  const ALL_CARDS = CARDS;

  const [filteredCards] = useGetFilteredCards();

  const [allNames,setAllNames] = useState([]);

  useEffect(()=>{
    // let cardSelection = filteredCards ? filteredCards : ALL_CARDS;
    setAllNames(buildNamesList(value,filteredCards))
  },[value,filteredCards])

  // const allNames = useMemo(()=> buildNamesList(ALL_CARDS) ,[ALL_CARDS])
  
  return [allNames];
}

export default useGetSearchOptions;
