import React from 'react';
import { RARITY_SVG } from '../svg.const';

const RarityIcon = ({rarity,color}) => {
  return (<g className={'rarity '+rarity}>
    <path fill={(color === 'yellow' || color === 'white') ? '#000' : '#FFF'} d={RARITY_SVG[rarity]}/>
  </g>)
}

export default RarityIcon;
