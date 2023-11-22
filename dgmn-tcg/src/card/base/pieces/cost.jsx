import React from 'react';
import {ReactComponent as PlayCostDigimon} from '../pieces/svgs/SVG_Play-Cost_Digimon (3-5).svg';
import {ReactComponent as EvoCostDigimon} from '../pieces/svgs/SVG_Evo_Digimon (3-5).svg';
import {ReactComponent as PlayCostOption} from '../pieces/svgs/SVG_Play-Cost_Option.svg';
import { removeSvgWrap } from '../base.utils';

const buildEvoColorClasses = evoColors => {
  if(!evoColors) return '';
  if(evoColors.length === 1) return 'evo-color-one-'+evoColors[0]

  return 'evo-color-one-'+evoColors[0]+' evo-color-two-'+evoColors[1]
}

const CardBaseCost = ({cardType,evoColors}) => {
  return (<g className='cost'>
    <g className='play'>{cardType !== 'option' ? removeSvgWrap(PlayCostDigimon) : removeSvgWrap(PlayCostOption)}</g>
    {cardType === 'dgmn' && 
      <g className={'evo '+buildEvoColorClasses(evoColors)}>
        {removeSvgWrap(EvoCostDigimon)}
      </g>}
  </g>)
}

export default CardBaseCost;
