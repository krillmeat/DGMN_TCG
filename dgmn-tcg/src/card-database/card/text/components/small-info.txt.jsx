import React from 'react';

const SmallInfoTXT = ({type,form,attr,traits}) => {
  return (<ul className='small-info'>
      <li>{form}</li>
        { type !== 'egg' && <li>{attr}</li>}
      <li>{traits.join('/')}</li>
    </ul>)
}

export default SmallInfoTXT;
