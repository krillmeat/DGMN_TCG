import React, {useMemo} from 'react';
import './card-base.css';
import CARDS from '../../cards.db';
import PlayCost from './components/play-cost';
import EvoCost from './components/evo-cost';
import { formatCardNumber } from '../../card.util';
import Frame from './components/frame';
import Trim from './components/trim';
import CardText from './card-text';
import { EFFECT_BACK } from './svg.const';
import InheritSVG from './svg-components/inherit.svg';
import MainInfoSVG from './svg-components/main-info.svg';
import CardBaseSVG from './svg-components/card-base.svg';

const CardBase = ({set,cardNo,size}) => {
  const card = CARDS[set][cardNo-1]; // Temporary

  // const isNotEgg = useMemo(()=> card.type !== 'egg',[card])
  // const isTamer = useMemo(()=> card.type === 'tamer',[card]);
  // const isOption = useMemo(()=> card.type === 'option',[card]);
  // const effectOffsetClass = useMemo(()=>{
  //   if(card.inherit?.length === 0) return 'moved-down'
  //   if(card.type === 'tamer' || card.type === 'option') return 'moved-up'
  //   return ''
  // },[card])

  return ( <div className={'card '+size+' '+card.type+' '+(card.colors.join(" "))+" "+(card.special && card.special.join(" "))}><div className='card-wrap'>
    <CardBaseSVG cardData={card} />

    <div className='non-svg-wrap'>
      <CardText cardData={card} />
    </div>

  </div></div>)
}

export default CardBase;
