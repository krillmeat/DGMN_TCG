import React from 'react';
import { tagify } from '../text.utils';

const CardTextInherit = ({cardType,inheritLines}) => {
  return (<div className={'effect inherit '+cardType}>
    {inheritLines.length > 0 && inheritLines.map((line,index) => {
      return <p className='line' key={'line-'+index}>{tagify(line)}</p>
    })}
  </div>)
}

export default CardTextInherit;
