import React,{useMemo} from 'react';
import { COLORS, TRIM_SVG } from '../svg.const';

const Trim = ({type,colors,hasNoInherit=false, isFullArt=false}) => {
  const isNonInheritDgmn = useMemo(() => (type === 'dgmn' && hasNoInherit) ,[type,hasNoInherit])
  return ( !isFullArt ? <g className="trim">
    <path fill={COLORS[colors[0]]} d={isNonInheritDgmn ? TRIM_SVG.dgmn6[0] : TRIM_SVG[type][0]}/> 
    <path fill={colors.length === 2 ? COLORS[colors[1]] : COLORS[colors[0]] } d={isNonInheritDgmn ? TRIM_SVG.dgmn6[1] : TRIM_SVG[type][1]}/> 
  </g> : <g></g>)
}

export default Trim;
