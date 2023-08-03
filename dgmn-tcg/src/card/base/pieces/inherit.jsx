import React from 'react';
import {ReactComponent as MainInfoDigimon} from '../pieces/svgs/SVG_Bottom_Digimon (3-5).svg';
import { removeSvgWrap } from '../base.utils';

const CardBaseInherit = () => {
  return (<g className='inherit'>
    {removeSvgWrap(MainInfoDigimon)}
  </g>)
}

export default CardBaseInherit;
