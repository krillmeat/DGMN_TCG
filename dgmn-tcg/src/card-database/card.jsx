import React from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
import { AppContext } from '../app';
import { formatCardNumber } from './card.util';

import CardBase from './images/card-base/card-base';

const Card = ({set,card,size}) => {
  const [context,setContext] = useContext(AppContext);

  const formatCard = useMemo(()=>{
    return formatCardNumber(set,card);
  },[set,card]);

  const launchPopup = e => {
    setContext({...context, isPopupOpen: !context.isPopupOpen, popupCard: {set: set, cardNo: card-1}});
  }

  return (
    <CardBase set={set} cardNo={card} size={size} />
  )
}

export default Card;
