import React from 'react';
import { useMemo } from 'react';
import reactStringReplace from 'react-string-replace';
import { formatCardNumber, getNameLengthClass, hasSpecial } from '../../card.util';
import MainInfoTXT from '../../card/text/components/main-info.txt';
import { getTagColor } from './card-base.util';
import CardEffectTXT from '../../card/text/components/card-effect.txt';
import InheritTXT from '../../card/text/components/inherit.txt';
import CostsTXT from '../../card/text/components/costs.txt';

const TYPE_LABELS = {
  dgmn: 'Digimon',
  egg: 'Digi-Egg',
  tamer: 'Tamer',
  option: 'Option'
}

const CardText = ({cardData}) => {


  const hasDP = useMemo(()=> cardData.type === 'dgmn' ,[cardData])

  return (<div className='card-text'>

    <p className='card-type-label'>{TYPE_LABELS[cardData.type]}</p>

  <CostsTXT 
    type={cardData.type} 
    cost={cardData.cost} 
    evoCosts={cardData.evoCost} 
    level={cardData.level} 
    colors={cardData.colors}
    special={cardData.special} />

  {/* DP */}
  {hasDP && <div className={'dp '+(cardData.dp >= 10 ? 'double-digit' : '')}>
    <p className='label'>DP</p>
    <p className='value'>{cardData.dp}<span>000</span></p>
  </div>}
  
  <CardEffectTXT 
    type={cardData.type}
    effect={cardData.effect}
    inherit={cardData.inherit}
    special={cardData.special} />
  
  <MainInfoTXT cardData={cardData}/>

  <InheritTXT
    type={cardData.type}
    colors={cardData.colors}
    inherit={cardData.inherit}
    special={cardData.special} />

  {/* INHERIT EFFECT */}
  {/* {cardData.inherit?.length !== 0 && <div className='inherit-effect'>
    <p className='inherit-label'>{(cardData.type === 'egg' || cardData.type === 'dgmn') ? 'Inherited Effect' : 'Security Effect'}</p>
    {cardData.inherit.map((line,index) => {
      return <p className='line' key={cardData.name+index}>{tagify(line)}</p>
    })}
  </div>} */}

</div>)
}

export default CardText;
