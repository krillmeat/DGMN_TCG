import React from 'react';

const sumAll = cardList => {
  let total = 0;
  for(let card of Object.keys(cardList)){
    total += cardList[card].copies;
  }
  return total;
}

const CardCounts = ({cardList}) => {
  return (<div className='card-counts'>
    <p>Total: {sumAll(cardList)}</p>
  </div>)
}

export default CardCounts;
