import React from 'react';
import { useMemo } from 'react';
import { formatCardNumber,getNameLengthClass, isTamerOrOption } from '../../../card.util';
import '../css/main-info.txt.css';
import CardNameTXT from './card-name.txt';
import SetInfoTXT from './set-info.txt';
import SmallInfoTXT from './small-info.txt';

// TODO - Find out the cardData I need

const MainInfoTXT = ({cardData}) => {

  const classBuilder = useMemo(()=>{
    if(!cardData) return "";
    let allClasses = ["main-info"];

    if(isTamerOrOption(cardData.type) || cardData.type === 'egg') allClasses.push("shifted-up");
    if(cardData?.inherit?.length === 0) allClasses.push("shifted-down");

    return allClasses.join(" ");
  },[cardData])
  return (<div className={classBuilder}>

    <CardNameTXT cardType={cardData.type} cardName={cardData.name} colors={cardData.colors} special={cardData.special}/>
    <SetInfoTXT 
      set={cardData.set} 
      formattedCardNumber={formatCardNumber(cardData.set,cardData.no)} 
      colors={cardData.colors}
      rarity={cardData.rarity}/>

    {(cardData.type === 'egg' || cardData.type === 'dgmn') && <p className={'dgmn-lv '+(cardData.colors[0] === 'black' && 'white')}><span>Lv. </span>{cardData.level}</p>}

    <SmallInfoTXT type={cardData.type} form={cardData.form} attr={cardData.attr} traits={cardData.traits}/>
    
</div>)
}

export default MainInfoTXT;
