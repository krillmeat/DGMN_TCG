import React from 'react';
import { tagify } from '../text.utils';

const CardTextEffect = ({effectLines}) => {
  console.log("EFFECT LINES ? ",effectLines)
  return (<div className='effect main'>
    {effectLines.length > 0 && effectLines.map((line,index) => {
      return <p className='line' key={'line-'+index}>{tagify(line)}</p>
    })}
  </div>)
}

export default CardTextEffect;
