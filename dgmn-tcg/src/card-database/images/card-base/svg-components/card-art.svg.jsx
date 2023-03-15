import React, {useMemo} from 'react';
import { CLIP_SVG, CARD_VIEWBOX, CARD_HEIGHT, CARD_WIDTH } from '../svg.const';

const CardArtSVG = ({cardType,classLabel,set,formatCard}) => {

  const classStyle = useMemo(()=> {
    return {clipPath: 'url(#image-path-'+classLabel+')'}
  },[classLabel]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='card-base art' version='1.1' viewBox={CARD_VIEWBOX}>
      <defs> <clipPath id={'image-path-'+classLabel} className='card-art-clip'> 
        <path d={CLIP_SVG[cardType]}/> 
      </clipPath> </defs>
      <image id={'card-image-'+classLabel} style={classStyle} href={`https://rossdanielconover.com/dgmn-card-database/${set}/${set}-${formatCard}.png`} width={CARD_WIDTH} height={CARD_HEIGHT} x='0' y='4'/>
  </svg>)
}

export default CardArtSVG;
