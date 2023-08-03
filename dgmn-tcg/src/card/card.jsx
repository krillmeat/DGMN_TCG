import React, {useRef} from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
import { AppContext } from '../app';
import ContextMenu from '../context-menu';
import { formatCardNumber } from '../card-database/card.util';
import CardBase from './base/card-base';
import CardText from './text/card-text';
import './card.css';
import CARDS from '../card-database/cards.db';

const Card = ({set,card,size}) => {
  const [context,setContext] = useContext(AppContext);
  const cardData = CARDS[set][card-1];

  const formatCard = useMemo(()=>{
    return formatCardNumber(set,card);
  },[set,card]);

  const colorClass = cardData.colors.length === 1 ? 
                      `color-one-${cardData.colors[0]} color-two-${cardData.colors[0]}` :
                      `color-one-${cardData.colors[0]} color-two-${cardData.colors[1]}`;

  const typeClass = cardData.type === 'dgmn' ? cardData.type + '-' + cardData.level : cardData.type;

  const launchPopup = e => {
    setContext({...context, isPopupOpen: !context.isPopupOpen, popupCard: {set: set, cardNo: card-1}});
  }

  const cardRef = useRef();

  return (<div className={"card "+colorClass+" "+typeClass+" "+size} ref={cardRef}>
    {/* <CardBase set={set} cardNo={card} size={size} /> */}
    <div className='art-wrap'><img className='card-art' src={`https://rossdanielconover.com/dgmn-card-database/${set}/${set}-${formatCardNumber(set,card)}.png`}/></div>
    <CardBase cardSet={set} cardNumber={card} />
    <CardText cardSet={set} cardNumber={card} />
    <ContextMenu origin='card' cardNo={set+'-'+formatCardNumber(set,card)} cardRef={cardRef}/>
    </div>)
}

export default Card;
