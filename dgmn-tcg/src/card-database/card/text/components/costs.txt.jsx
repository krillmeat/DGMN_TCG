import React from 'react';
import { useMemo } from 'react';
import { hasSpecial } from '../../../card.util';

import '../css/costs.txt.css';

const isDgmn = type => type === 'dgmn';

const getLv = (spot,level,special) => {
  let specialIndex = hasSpecial(special,'diff-evo');
  if(specialIndex === -1) return level - 1

  return special[specialIndex].split('-')[spot+2]
}


const CostsTXT = ({type,cost,evoCosts,level,colors,special}) => {

  const classBuilder = useMemo(()=>{
    let allClasses = ["cost-numbers"];

    if(cost > 9) allClasses.push('double-digit')
    if(colors[0] === 'yellow' || colors[1] === 'white') allClasses.push('black')
    if(colors[1] === 'yellow' || colors[1] === 'white') allClasses.push('black-2')

    return allClasses.join(" ");
  },[cost,colors]);

  return ( <div className={classBuilder}>
    {type !== 'egg' && <p className={'play-cost'}>{cost}</p> }
    {isDgmn(type) && <div className="evo-costs">
      <p className='first'>
        <span className='lv-req'>Lv.{getLv(0,level,special)}</span>
        <span className='evo-value'>{evoCosts[0]}</span>
      </p>
      {evoCosts.length === 2 && <p className={'second'}>
        <span className='lv-req'>Lv.{getLv(1,level,special)}</span>
        <span className='evo-value'>{evoCosts[1]}</span>
      </p>}
    </div>}
  </div> )
}

export default CostsTXT;
