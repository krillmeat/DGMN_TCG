import React from 'react';

const CardTextDP = ({dgmnDP}) => {
  return (<p className={'dgmn-dp '+(dgmnDP > 9 && 'double-digit')}>
    <span className='value'>{dgmnDP}<span>000</span></span>
    <span className='label'>DP</span>
  </p>)
}

export default CardTextDP;
