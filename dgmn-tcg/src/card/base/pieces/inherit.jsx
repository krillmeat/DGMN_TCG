import React, {useMemo} from 'react';
import {ReactComponent as InheritDigimon} from '../pieces/svgs/SVG_Bottom_Digimon (3-5).svg';
import {ReactComponent as InheritEgg} from '../pieces/svgs/SVG_Bottom_Egg.svg';
import { removeSvgWrap } from '../base.utils';

const CardBaseInherit = ({cardType}) => {

  const inheritComponent = useMemo(()=>{
    switch(cardType){
      case 'egg':
        return InheritEgg;
      case 'dgmn':
        return InheritDigimon;
      default:
        return InheritEgg;
    }
  },[cardType]);

  return (<g className='inherit'>
    {removeSvgWrap(inheritComponent)}
  </g>)
}

export default CardBaseInherit;
