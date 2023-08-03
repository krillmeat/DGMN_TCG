import React, {useMemo} from 'react';
import {ReactComponent as MainInfoEgg} from './svgs/SVG_Main-Info_Egg.svg';
import {ReactComponent as MainInfoDigimon} from '../pieces/svgs/SVG_Main-Info_Digimon (3-5).svg';
import {ReactComponent as MainInfoDigimonSix} from './svgs/SVG_Main-Info_Digimon (6-7).svg';
import {ReactComponent as MainInfoTamer} from './svgs/SVG_Main-Info_Tamer.svg';
import {ReactComponent as MainInfoOption} from './svgs/SVG_Main-Info_Option.svg';
import { removeSvgWrap } from '../base.utils';

const CardBaseMainInfo = ({cardType,dgmnLevel}) => {

  console.log("CARD TYPE ? ",cardType);

  const mainInfoComponent = useMemo(()=>{
    switch(cardType){
      case 'egg':
        return MainInfoEgg;
      case 'dgmn':
        return dgmnLevel < 6 ? MainInfoDigimon : MainInfoDigimonSix;
      case 'option':
        return MainInfoOption;
      case 'tamer':
        return MainInfoTamer;
      default:
        return MainInfoDigimon;
    }
  },[cardType,dgmnLevel]);

  return (<g className='main-info'>
    {removeSvgWrap(mainInfoComponent)}
  </g>)
}

export default CardBaseMainInfo;
