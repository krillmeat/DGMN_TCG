import React from 'react';
import MainInfo from './pieces/main-info.txt';
import Inherit from './pieces/inherit.txt';
import CARDS from '../../card-database/cards.db';
import './card-text.css';
import './mod-classes.css';
import DP from './pieces/dp.txt';
import Cost from './pieces/cost.txt';

const modClasses = modList => {
  return modList ? modList.join(' ') : "";
}

const CardText = ({cardSet,cardNumber}) => {

  const cardData = CARDS[cardSet][cardNumber-1];

  const miniInfo = {
    form: cardData.form,
    attr: cardData.attr,
    traits: cardData.traits
  }
  return (<div className={'card-text '+modClasses(cardData.modClasses)}>

    <DP dgmnDP={cardData.dp} />

    <Cost playCost={cardData.cost}/>

    <MainInfo 
      cardType={cardData.type} 
      cardSet={cardSet}
      cardNumber={cardNumber} 
      cardRarity={cardData.rarity}
      dgmnLevel={cardData.level} 
      cardName={cardData.name} 
      miniInfo={miniInfo}
      cardRotation={cardData.rotation} />


    <Inherit inheritLines={cardData.inherit} />
  </div>)
}

export default CardText;
