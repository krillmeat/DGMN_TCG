import React from 'react';
import { useMemo } from 'react';
import { formatCardNumber } from '../../../card.util';
import Frame from '../components/frame';
import Trim from '../components/trim';
import { CARD_VIEWBOX } from '../svg.const';
import PlayCost from '../components/play-cost';
import EvoCost from '../components/evo-cost';
import MainInfoSVG from './main-info.svg';
import InheritSVG from './inherit.svg';
import CardEffectSVG from './card-effect.svg';

const CardBaseSVG = ({cardData}) => {
  
  const formatCard = useMemo(()=>{
    return formatCardNumber(cardData.set,cardData.no)
  },[cardData]);

  const isEgg = useMemo(()=> cardData.type === 'egg' ,[cardData])
  const isOption = useMemo(()=> cardData.type === 'option' ,[cardData])
  const isTamer = useMemo(()=> cardData.type === 'tamer' ,[cardData])

  return (<div className='card-base-svg'>
    <Frame type={cardData.type} set={cardData.set} formatCard={formatCard} hasNoInherit={cardData.inherit?.length === 0} />

    <svg xmlns="http://www.w3.org/2000/svg" className='card-base content' version='1.1' viewBox={CARD_VIEWBOX}>
      {cardData.effect?.length > 0 && <CardEffectSVG cardType={cardData.type} colors={cardData.colors} hasNoInherit={cardData.inherit?.length === 0} special={cardData.special}/> }
      <Trim type={cardData.type} colors={cardData.colors} hasNoInherit={cardData.inherit?.length === 0} />
      {!isEgg && <g>
        <PlayCost isOption={cardData.type === 'option'}/>
        {(!isTamer && !isOption) && <EvoCost colors={cardData.colors} />}
      </g>}
      <MainInfoSVG type={cardData.type} colors={cardData.colors} hasNoInherit={cardData.inherit?.length === 0} rarity={cardData.rarity} />
      {cardData.inherit?.length !== 0 && <InheritSVG type={cardData.type} colors={cardData.colors} />}
    </svg>
  </div>)
}

export default CardBaseSVG;
