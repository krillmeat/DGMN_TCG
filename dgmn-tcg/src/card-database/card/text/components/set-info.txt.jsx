import React, {useMemo} from 'react';
import { getTextColors } from '../../../card.util';

const SetInfoTXT = ({set,formattedCardNumber,rarity,colors}) => {

  const classBuilder = useMemo(rarity => {
    let allClasses = ["set-no"];

    if(rarity === 'SEC') allClasses.push('sec-rarity');

    if(colors.indexOf("yellow") !== -1 || colors.indexOf("white") !== -1) allClasses.push(getTextColors("set-info",colors))

    return allClasses.join(" ");
  },[rarity]);

  return <p className={classBuilder}>{set+"-"+formattedCardNumber}</p>
}

export default SetInfoTXT;
