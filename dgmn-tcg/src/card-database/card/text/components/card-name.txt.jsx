import React from 'react';
import { useMemo } from 'react';
import { getNameCondensedTextRule, getTextColors, hasSpecial, isTamerOrOption } from '../../../card.util';

const getNameLengthClass = cardName => {
  let offset = cardName.length - 9;
  if(offset > 0){
    return "offset-"+offset;
  } return "";
}

const CardNameTXT = ({cardType,cardName,colors,special}) => {

  const classBuilder = useMemo(()=>{
    let allClasses = ["card-name"]

    if(isTamerOrOption(cardType)){
      allClasses.push('center');
      allClasses.push('align-bottom');
    }

    if(special) allClasses.push(getNameCondensedTextRule(special))

    if(colors.indexOf('yellow') !== -1 || colors.indexOf('white') !== -1) allClasses.push(getTextColors("card-name",colors))

    return allClasses.join(" ");
  },[cardType,cardName]);

  return  <p className={classBuilder}>{cardName}</p>
}

export default CardNameTXT;
