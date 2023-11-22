import React from 'react';

const atMax = (card, copies) => {
  if(copies === 4) return true
}

const CardControls = ({card,cardList}) => {
  return (<div className='card-controls'>
    <button className='minus'>-</button>
    <p className='count'>{cardList[card].copies}</p>
    <button className={'plus '+(atMax(card,cardList[card].copies) ? 'disabled' : '')}>+</button>
  </div>)
}

export default CardControls;
