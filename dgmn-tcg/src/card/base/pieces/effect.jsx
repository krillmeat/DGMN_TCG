import React from 'react';
import {ReactComponent as EffectDigimon} from './svgs/SVG_Effect_Digimon (3-5).svg';
import { removeSvgWrap } from '../base.utils';
const CardBaseEffect = () => {
  return (<g className='effect'>
    {removeSvgWrap(EffectDigimon)}
  </g>)
}

export default CardBaseEffect;
