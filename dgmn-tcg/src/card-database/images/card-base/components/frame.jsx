import React from 'react';
import { useMemo } from 'react';
import CardArtSVG from '../svg-components/card-art.svg';
import { CARD_BACK_SVG, CARD_VIEWBOX } from '../svg.const';

const Frame = ({type,set,formatCard,hasNoInherit=false}) => {
  const classLabel = useMemo(()=>(set+'-'+formatCard),[set,formatCard])
  const cardType = useMemo(() => hasNoInherit ? 'dgmn6' : type ,[type,hasNoInherit])

  return (<>
    <svg xmlns="http://www.w3.org/2000/svg" className='card-base' version='1.1' viewBox={CARD_VIEWBOX}>
      <path className='card-frame' fill={'#'+(type === 'option' ? '004A6B' : 'DDD')} d={CARD_BACK_SVG} />
    </svg>
    <CardArtSVG cardType={cardType} classLabel={classLabel} set={set} formatCard={formatCard}/>
  </>)
}

export default Frame;
