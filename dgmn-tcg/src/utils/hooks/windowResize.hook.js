import { useEffect, useState } from "react";
import { debounce } from "../event.util";

const BREAKPOINTS = [
  { min: 0,
  label: 'null' },
  { min: 800,
    label: 'S'},
  { min: 1000,
    label: 'M'}];

const getCurrentWindowSize = () => {
  for(let i in BREAKPOINTS){
    if(i === BREAKPOINTS.length-1) return BREAKPOINTS[i].label;
    if(window.innerWidth < BREAKPOINTS[i].min) return BREAKPOINTS[i].label;
  } return BREAKPOINTS[BREAKPOINTS.length-1].label;
}

export const useWindowResize = () => {

  const [windowSize,setWindowSize] = useState(getCurrentWindowSize());

  useEffect(()=>{
    window.addEventListener('resize',debounce(()=>{setWindowSize(getCurrentWindowSize())},100))
  },[])
  
  return [windowSize];
}
