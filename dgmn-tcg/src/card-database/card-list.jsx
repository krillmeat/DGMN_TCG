import React from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { AppContext } from '../app';
import Card from '../card/card';
import CARDS from './cards.db';
import { typeFilter, colorFilter } from './filter/filter.utils';
import useGetFilteredCards from './filter/filtered-cards.hook';

const NOTHING_FOUND = "No cards were found. Try adjusting your filters to be less restrictive."

const CardList = () => {

  const [context] = useContext(AppContext)

  const [shownCards] = useGetFilteredCards();

  return (<div className='card-list'>
    {shownCards.length > 0 ? shownCards.map((card,index) => {
      return <Card key={card.set+index} set={card.set} card={card.no} size={context.cardSize} />
    }) : <p className='empty-database'>{NOTHING_FOUND}</p>}
  </div>)
}

export default CardList;
