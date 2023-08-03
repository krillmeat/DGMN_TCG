import { useContext, useEffect,useState,useMemo } from "react";
import { AppContext } from "../../app";
import CARDS from "../cards.db";
import { colorFilter, typeFilter, nameFilter } from "./filter.utils";

export const removeEmptyFilter = card => Object.keys(card).length !== 0

const useGetFilteredCards = () => {
  const [context] = useContext(AppContext);
  const {filters} = context;

  const [filteredCards,setFilteredCards] = useState([]);

  const mergedSets = useMemo(()=>{
    let sets = filters.sets;
    let merged = CARDS[sets[0]];
    for(let i = 1; i < sets.length; i++){
      merged = merged.concat(CARDS[sets[i]])
    }
    return merged;
  },[filters])

  useEffect(()=>{
    if(Object.keys(filters).length === 0) return;
    if(filters.sets.length === 0) return;
    if(!mergedSets) return;

    let filtered = mergedSets;
        filtered = filtered.filter(typeFilter(filters.type));
        filtered = filtered.filter(colorFilter(filters.color));
        filtered = filters.name ? filtered.filter(nameFilter(filters.name)) : filtered;

    setFilteredCards(filtered.filter(removeEmptyFilter)); // Make sure to remove empty Cards
  },[filters,mergedSets]);

  return [filteredCards];
}

export default useGetFilteredCards;
