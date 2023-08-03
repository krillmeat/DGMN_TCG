import React from 'react';
import {ReactComponent as EffectDigimon} from './svgs/SVG_Effect_Digimon (3-5).svg';
import {ReactComponent as EffectDigimonSix} from './svgs/SVG_Effect_Digimon (6-7).svg';
import { removeSvgWrap } from '../base.utils';
const CardBaseEffect = ({dgmnLevel}) => {
  const effectComponent = dgmnLevel < 6 ? EffectDigimon : EffectDigimonSix;
  return (<g className='effect'>
    {removeSvgWrap(effectComponent)}
  </g>)
}

export default CardBaseEffect;
