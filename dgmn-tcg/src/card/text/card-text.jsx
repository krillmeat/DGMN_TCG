import React from 'react';
import MainInfo from './pieces/main-info.txt';
import Inherit from './pieces/inherit.txt';
import Effect from './pieces/effect.txt';
import CARDS from '../../card-database/cards.db';
import './card-text.css';
import './mod-classes.css';
import DP from './pieces/dp.txt';
import Cost from './pieces/cost.txt';
import SpecEvo from './pieces/spec-evo';

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

    {cardData.type === 'dgmn' && <DP dgmnDP={cardData.dp} />}

    <Cost cardType={cardData.type} playCost={cardData.cost} evoCosts={cardData.evoCost} dgmnLevel={cardData.level}/>

    <MainInfo 
      cardType={cardData.type} 
      cardSet={cardSet}
      cardNumber={cardNumber} 
      cardRarity={cardData.rarity}
      dgmnLevel={cardData.level} 
      cardName={cardData.name} 
      miniInfo={miniInfo}
      cardRotation={cardData?.rotation} />

      {cardData.specEvo && <SpecEvo specEvo={cardData.specEvo}/>}
      {cardData.effect && cardData.effect?.length !== 0 && <Effect effectLines={cardData.effect} /> }


    {cardData.inherit?.length > 0 && <Inherit cardType={cardData.type} inheritLines={cardData.inherit} />}
  </div>)
}

export default CardText;
