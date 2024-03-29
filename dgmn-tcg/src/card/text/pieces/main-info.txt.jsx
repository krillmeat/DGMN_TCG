import React, { useMemo } from 'react';
import { formatCardNumber } from '../../../card-database/card.util';
import {ReactComponent as RarityIconC} from './svgs/SVG_Rarity_C.svg';
import {ReactComponent as RarityIconU} from './svgs/SVG_Rarity_U.svg';
import {ReactComponent as RarityIconR} from './svgs/SVG_Rarity_R.svg';
import {ReactComponent as RarityIconSR} from './svgs/SVG_Rarity_SR.svg';
import {ReactComponent as RarityIconSEC} from './svgs/SVG_Rarity_SEC.svg';
import {ReactComponent as RarityIconP} from './svgs/SVG_Rarity_P.svg';
import {ReactComponent as RotationIcon} from './svgs/SVG_Rotation.svg';

import { removeSvgWrap } from '../../base/base.utils';

const CardTextMainInfo = ({cardType, cardRotation, cardRarity, cardSet, cardNumber, cardName, dgmnLevel, miniInfo}) => {

  const RarityComponent = useMemo(()=>{
    switch(cardRarity){
      case 'C':
        return RarityIconC;
      case 'U':
        return RarityIconU;
      case 'R':
        return RarityIconR;
      case 'SR':
        return RarityIconSR;
      case 'SEC':
        return RarityIconSEC;
      case 'P':
        return RarityIconP;
      default:
        return RarityIconC;
    }
  },[cardRarity])

  const builtSetString = cardSet+"-"+formatCardNumber(cardSet,cardNumber);

  return (<div className='main-info'>
    {(cardType === 'dgmn' || cardType === 'egg') && <p className="level"><span className='label'>Lv.</span>{dgmnLevel}</p>}
    
    <p className="card-name">{cardName}</p>
   
    <div className="set-info">
      <p className="card-number">{builtSetString}</p>
      <div className="set-icons">
        <RarityComponent className='rarity-icon'/>
        <div className="rotation-icon">
          <RotationIcon/>
          <p>{cardRotation ? cardRotation : "00"}</p>
        </div>
      </div>
    </div>

    <div className="mini-info">
      <p className="form">{miniInfo.form}</p>
      {dgmnLevel !== 2 && <p className="att">{miniInfo.attr}</p>}
      <p className="traits">{miniInfo.traits.join("/")}</p>
    </div>

  </div>)
}

export default CardTextMainInfo;
