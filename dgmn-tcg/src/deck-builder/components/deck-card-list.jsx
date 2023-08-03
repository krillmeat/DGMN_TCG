import React from 'react';
import Card from '../../card/card';
import CardControls from './card-controls';
import { removeZeroes } from '../../card/card.utils';

const listOfUniqueCards = cardList => {
  let uniqueCards = [];
  for(let key of Object.keys(cardList)){
    uniqueCards.push(key);
  }
  return uniqueCards;
}

const DeckCardList = ({cardList}) => {
  return (<div className='deck-card-list'>
    {listOfUniqueCards(cardList).map((card, index)=>{
      return <div className='deck-card-wrapper' key={'deck-card-'+index}>
        <Card set={card.split('_')[0]} card={removeZeroes(card.split('_')[1])} size='s' />
        <CardControls card={card} cardList={cardList}/>
      </div>
    })}
  </div>)
}

export default DeckCardList;
