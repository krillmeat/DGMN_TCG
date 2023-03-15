import React, {useMemo} from 'react';
import { getTextColors, isTamerOrOption, tagify } from '../../../card.util';
import '../css/inherit.txt.css'

const InheritTXT = ({type,colors,inherit,special}) => {

  const classBuilder = useMemo(()=>{
    if(!inherit || !colors) return "";
    let allClasses = ["inherit"];

    if(colors.indexOf("yellow") !== -1) allClasses.push("text-"+getTextColors("inherit",colors))
    if(isTamerOrOption(type)) allClasses.push("security");
    if(isTamerOrOption(type) || type === 'egg') allClasses.push("shifted-up")
    if(!isTamerOrOption(type)) allClasses.push("ess")
    if(special?.length > 0 && special?.indexOf("condensed-inherit") !== -1) allClasses.push("condensed")

    return allClasses.join(" ");

  },[type,colors,inherit,special])

  return (inherit.length > 0 ? <div className={classBuilder}>
      <p className='inherit-label'>{(type === 'egg' || type === 'dgmn') ? 'Inherited Effect' : 'Security Effect'}</p>
      {inherit?.length !== 0 && inherit.map((line,index) => {
        return <p className='line' key={'line-'+index}>{tagify(line)}</p>
      })}
  </div> : <div className="inherit"></div>)
}

export default InheritTXT;
