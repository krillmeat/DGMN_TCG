import React from 'react';

const CardTextCost = ({cardType, playCost, evoCosts, dgmnLevel}) => {
  return (<div className='cost'>
    <p className={'play-cost '+(playCost > 9 && 'double-digit')}>{playCost}</p>
    {cardType === 'dgmn' && <p className='evo-cost'>
        <span className='level'>Lv.{dgmnLevel - 1}</span>
        {evoCosts.value}
      </p>}
  </div>)
}

export default CardTextCost;
