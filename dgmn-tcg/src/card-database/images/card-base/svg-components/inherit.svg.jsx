import React, {useContext} from 'react';
import SecurityIconSVG from '../components/securityicon.svg';

import { COLORS, DARK_COLORS, INHERIT_SVG, SECURITY_ICON_SVG } from '../svg.const';
import GridBackingSVG from './grid-backing.svg';

const InheritSVG = ({type,colors,inherit}) => {
  return (<g className='inherit'>
    <path fill={COLORS[colors[0]]} d={INHERIT_SVG[type][0]}/>
    <path fill={colors.length === 2 ? COLORS[colors[1]] : COLORS[colors[0]]} d={INHERIT_SVG[type][1]}/>

    {(type === 'dgmn' || type === 'egg') ? 
      <g className='img-frame'>
        <polygon fill={colors[0] === 'yellow' ? '#000': '#FFF'} points=".42 5.12 0 5.12 0 0 5.08 0 5.08 .42 .42 .42 .42 5.12"/><polygon fill={colors[0] === 'yellow' ? '#000': '#FFF'} points="25.89 5.12 25.47 5.12 25.47 .42 20.81 .42 20.81 0 25.89 0 25.89 5.12"/><polygon fill={colors[0] === 'yellow' ? '#000': '#FFF'} points="25.89 25.93 20.81 25.93 20.81 25.51 25.47 25.51 25.47 20.86 25.89 20.86 25.89 25.93"/><polygon fill={colors[0] === 'yellow' ? '#000': '#FFF'} points="5.08 25.93 0 25.93 0 20.86 .42 20.86 .42 25.51 5.08 25.51 5.08 25.93"/> </g> : 
      <g className='security-icon'>
        <path fill={DARK_COLORS[colors[0]]} d={SECURITY_ICON_SVG.BACK_COLOR} />
        <path fill='#FFF' d={SECURITY_ICON_SVG.WHITE_TRIM} />
        <path fill={DARK_COLORS[colors[0]]} d={SECURITY_ICON_SVG.MAIN_COLOR} />
        <path fill={COLORS[colors[0]]} d={SECURITY_ICON_SVG.COLOR_TRIM} />
        <g>
          <path fill="#FFF" d={SECURITY_ICON_SVG.LOCK_ICON.BODY} />
          <path fill="#FFF" d={SECURITY_ICON_SVG.LOCK_ICON.RING} />
        </g>
      </g>}
  </g>)
}

export default InheritSVG;
