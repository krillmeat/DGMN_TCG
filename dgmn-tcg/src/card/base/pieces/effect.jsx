import React, {useMemo} from 'react';
import {ReactComponent as EffectDigimon} from './svgs/SVG_Effect_Digimon (3-5).svg';
import {ReactComponent as EffectDigimonSix} from './svgs/SVG_Effect_Digimon (6-7).svg';
import {ReactComponent as EffectTamer} from './svgs/SVG_Effect_Tamer.svg';
import {ReactComponent as EffectOption} from './svgs/SVG_Effect_Option.svg';
import { removeSvgWrap } from '../base.utils';


const CardBaseEffect = ({cardType,dgmnLevel}) => {

  const effectComponent = useMemo(()=>{
    switch(cardType){
      case 'dgmn':
        return dgmnLevel < 6 ? EffectDigimon : EffectDigimonSix;
      case 'option':
        return EffectOption;
      case 'tamer':
        return EffectTamer;
      default:
        return EffectDigimon;
    }
  },[cardType,dgmnLevel]);

  return (<g className='effect'>
    {removeSvgWrap(effectComponent)}
  </g>)
}

export default CardBaseEffect;
