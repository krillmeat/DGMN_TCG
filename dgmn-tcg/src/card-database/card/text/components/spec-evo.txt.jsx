import React from 'react';
import '../css/spec-evo.txt.css';

const getCost = specEvo => specEvo.split("-")[2]
const getDgmn = specEvo => specEvo.split("-")[3]

const SpecEvoTXT = ({special}) => {
  const specEvo = special?.filter(spec => spec.indexOf("spec-evo-") !== -1)[0] || []
  return (<div className='spec-evo'>
    {specEvo?.length > 0 && <p>{`Digivolve: ${getCost(specEvo)} from ${getDgmn(specEvo)}`}</p>}
  </div>)
}

export default SpecEvoTXT;
