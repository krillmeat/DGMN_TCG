import React from 'react';
import { useMemo } from 'react';
import { COLORS, EFFECT_BACK_SVG } from '../svg.const';

const getPath = (cardType,hasNoInherit,special) => {
  if(special?.length > 0 && special?.indexOf("tall-card-effect") !== -1) return 'dgmnTall'
  if(cardType === 'dgmn' && hasNoInherit) return 'dgmn6'

  return cardType
}

const CardEffectSVG = ({cardType,colors,hasNoInherit,special}) => {
  // const formatType = useMemo(()=> (cardType === 'dgmn' && hasNoInherit) ? 'dgmn6' : cardType ,[cardType,hasNoInherit])
  const formatType = useMemo(()=> getPath(cardType,hasNoInherit,special) ,[cardType,hasNoInherit,special]);

  const classBuilder = useMemo(()=>{
    let allClasses = ["card-effect-block"];

    if(hasNoInherit) allClasses.push("no-inherit");
    if(formatType === "dgmnTall") allClasses.push("dgmn-tall");

    return allClasses.join(" ");
  },[formatType,hasNoInherit])

  return (<g className={classBuilder}>
    <path fill={cardType === 'option' ? '#EFE7F1': "#000"} d={EFFECT_BACK_SVG[formatType].BACK}/>
    <path fill={COLORS[colors[0]]} d={EFFECT_BACK_SVG[formatType].LINES[0]}/>
    <path fill={colors.length === 2 ? COLORS[colors[1]] : COLORS[colors[0]]} d={EFFECT_BACK_SVG[formatType].LINES[1]}/>
  </g>)
}

export default CardEffectSVG;
