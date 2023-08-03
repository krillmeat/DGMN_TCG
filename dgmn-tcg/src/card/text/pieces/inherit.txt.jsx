import React from 'react';
import { tagify } from '../text.utils';

const CardTextInherit = ({inheritLines}) => {
  return (<div className='effect inherit'>
    {inheritLines.length > 0 && inheritLines.map((line,index) => {
      return <p className='line' key={'line-'+index}>{tagify(line)}</p>
    })}
  </div>)
}

export default CardTextInherit;

/*
return (inherit.length > 0 ? <div className={classBuilder}>
      <p className='inherit-label'>{(type === 'egg' || type === 'dgmn') ? 'Inherited Effect' : 'Security Effect'}</p>
      {inherit?.length !== 0 && inherit.map((line,index) => {
        return <p className='line' key={'line-'+index}>{tagify(line)}</p>
      })}
  </div> : <div className="inherit"></div>)
*/