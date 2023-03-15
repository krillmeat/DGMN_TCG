import React, {useMemo} from 'react';
import { getCondensedTextRule, getSmallerTextRule, getXrosTextRule, isTamerOrOption, tagify } from '../../../card.util';
import SpecEvoTXT from './spec-evo.txt';

import '../css/effect.txt.css';

const CardEffectTXT = ({type, effect, inherit, special}) => {

  const tagifiedEffect = useMemo(()=>{
    if(!effect) return
    return effect.map(line=>{return tagify(line)})
  },[effect]);

  const classBuilder = useMemo(() => {
    if(!effect) return ""
    let allClasses = ["card-effect"];

    if(inherit.length === 0) allClasses.push("no-inherit")
    if(isTamerOrOption(type)) allClasses.push('shifted-up')

    if(special?.length > 0){
      if(special?.indexOf("tall-card-effect") !== -1) allClasses.push("tall")
      if(special?.indexOf("no-inherit") !== -1) allClasses.push("no-inherit")

      allClasses.push(getCondensedTextRule(special))
      allClasses.push(getSmallerTextRule(special))
      allClasses.push(getXrosTextRule(special))
    }

    return allClasses.filter(className => className !== "").join(" ");
  },[type,effect,inherit,special])

  return (<div className={classBuilder}>
    <SpecEvoTXT special={special} />
    {tagifiedEffect?.length > 0 && tagifiedEffect.map((line,index) => {
      return <p key={'line-'+index}>{line}</p>
    })}
  </div>)
}

export default CardEffectTXT;
