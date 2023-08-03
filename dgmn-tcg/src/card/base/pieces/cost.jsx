import React from 'react';
import {ReactComponent as PlayCostDigimon} from '../pieces/svgs/SVG_Play-Cost_Digimon (3-5).svg';
import {ReactComponent as EvoCostDigimon} from '../pieces/svgs/SVG_Evo_Digimon (3-5).svg';
import { removeSvgWrap } from '../base.utils';

const CardBaseCost = ({cardType}) => {
  return (<g className='cost'>
    <g>{removeSvgWrap(PlayCostDigimon)}</g>
    {cardType === 'dgmn' && <g>{removeSvgWrap(EvoCostDigimon)}</g>}
  </g>)
}

export default CardBaseCost;
