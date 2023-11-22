import React, { useMemo } from 'react';
import {ReactComponent as FrameEgg} from './svgs/SVG_Frame_Egg.svg';
import {ReactComponent as FrameDigimon} from './svgs/SVG_Frame_Digimon (3-5).svg';
import {ReactComponent as FrameDigimonSix} from './svgs/SVG_Frame_Digimon (6-7).svg';
import {ReactComponent as FrameTamer} from './svgs/SVG_Frame_Tamer.svg';
import {ReactComponent as FrameOption} from './svgs/SVG_Frame_Option.svg';

import {ReactComponent as TopLineEgg} from './svgs/SVG_Top-Line_Egg.svg';
import {ReactComponent as TopLineDigimon} from './svgs/SVG_Top-Line_Digimon (3-5).svg';
import {ReactComponent as TopLineDigimonSix} from './svgs/SVG_Top-Line_Digimon (6-7).svg';
import {ReactComponent as TopLineTamer} from './svgs/SVG_Top-Line_Tamer.svg';
import {ReactComponent as TopLineOption} from './svgs/SVG_Top-Line_Option.svg';

import { removeSvgWrap } from '../base.utils';

const CardBaseFrame = ({cardType,dgmnLevel}) => {

  const frameComponent = useMemo(()=>{
    switch(cardType){
      case 'egg':
        return FrameEgg;
      case 'dgmn':
        return dgmnLevel < 6 ? FrameDigimon : FrameDigimonSix;
      case 'option':
        return FrameOption;
      case 'tamer':
        return FrameTamer;
      default:
        return FrameDigimon;
    }
  },[cardType,dgmnLevel]);

  const topLineComponent = useMemo(()=>{
    switch(cardType){
      case 'egg':
        return TopLineEgg;
      case 'dgmn':
        return dgmnLevel < 6 ? TopLineDigimon : TopLineDigimonSix;
      case 'option':
        return TopLineOption;
      case 'tamer':
        return TopLineTamer;
      default:
        return TopLineDigimon;
    }
  },[cardType,dgmnLevel]);

  return (<g className='frame'>
    {removeSvgWrap(frameComponent)}
    {removeSvgWrap(topLineComponent)}
  </g>)
}

export default CardBaseFrame;
