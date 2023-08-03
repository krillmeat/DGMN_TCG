import React from 'react';
import './svg.css';
import CARDS from '../../card-database/cards.db';
import Frame from './pieces/frame';
import MainInfo from './pieces/main-info';
import Inherit from './pieces/inherit';
import Cost from './pieces/cost';
import './card-base.css';
import CardBaseEffect from './pieces/effect';


const CardBase = ({cardSet,cardNumber}) => {
  const cardData = CARDS[cardSet][cardNumber-1];
  const dgmnLevel = cardData.type === 'dgmn' ? cardData.level : 0;

  return (<div className="card-base">
    <svg width="100%" height="100%" viewBox="0 0 180 252">
      <Frame cardType={cardData.type} dgmnLevel={dgmnLevel}/>
      <Cost />
      <MainInfo cardType={cardData.type}  dgmnLevel={dgmnLevel} />
      <Inherit/>
      {cardData.effect.length > 0 && <CardBaseEffect />}
    </svg>
  </div>)
}

export default CardBase;
