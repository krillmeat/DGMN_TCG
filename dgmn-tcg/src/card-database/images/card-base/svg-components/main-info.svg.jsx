import React from 'react';
import { COLORS, MAIN_INFO_BACK_SVG, MAIN_INFO_FRONT_SVG } from '../svg.const';
import RarityIcon from './rarity-icon.svg';

const MainInfoSVG = ({type,colors,hasNoInherit,rarity}) => {
  return (<g className={'main-info '+(hasNoInherit ? 'no-inherit' : '')}>
    <path fill={COLORS[colors[0]]} d={MAIN_INFO_BACK_SVG[0]}/>
    <path fill={colors.length === 2 ? COLORS[colors[1]] : COLORS[colors[0]]} d={MAIN_INFO_BACK_SVG[1]}/>
    {(type === 'dgmn' || type === 'egg') && <path fill={colors[0] === 'black' ? '#FFF' : "#000"} d={MAIN_INFO_FRONT_SVG}/>}
    <RarityIcon rarity={rarity} color={colors[1]}/>
  </g>)
}

export default MainInfoSVG;
