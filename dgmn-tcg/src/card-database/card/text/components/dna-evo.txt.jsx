import React from 'react';
import '../css/spec-evo.txt.css';

const getCost = specEvo => specEvo.split("-")[2]
const getLevel = specEvo => specEvo.split("-")[3]
const getColor = (specEvo,color) => specEvo.split("-")[4+color]

const DNAEvoTXT = ({special}) => {
  const dnaEvo = special?.filter(spec => spec.indexOf("dna-evo-") !== -1)[0] || []

  return (<div className='dna-evo'>
    {dnaEvo.length > 0 && <p>{`DNA Digivolution: ${getCost(dnaEvo)} from `}<span className={`c-${getColor(dnaEvo,0)}`}>{`Lv.${getLevel(dnaEvo)}`}</span>+<span className={`c-${getColor(dnaEvo,1)}`}>{`Lv.${getLevel(dnaEvo)}`}</span></p>}
  </div>)
}

export default DNAEvoTXT;
