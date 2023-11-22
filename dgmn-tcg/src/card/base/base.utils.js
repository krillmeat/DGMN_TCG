import {renderToStaticMarkup} from 'react-dom/server';
import { matchStyleConst } from './constants/style.const';

// Quick Utils
const emptyFilter = item => item !== ''; // Used to remove empty Array items
const isTagLine = line => line.indexOf("<") !== -1;

const doubleDigitFix = markup => {
  let mu = markup;
      mu = mu.replaceAll("cls-10",".cls-a");
      mu = mu.replaceAll("cls-11",".cls-b")
  return mu;
}

/** --------------------------------------------------------------------------
 * GET PATH STRING
 * ---------------------------------------------------------------------------
 * Takes a Component-ized SVG file and extracts the Path property
 * 
 * @param {ReactComponentElement} Component 
 * @returns String version of SVG's Path
 * -------------------------------------------------------------------------*/
export const getPathString = Component => {
  const markup = renderToStaticMarkup(<Component/>);
  const removeOpening = markup.substring(markup.indexOf(" d=\"")+4);
  const removeEnding = removeOpening.substring(0,removeOpening.indexOf("\""));
  return removeEnding;
}

const buildPath = (path, shouldAutoClose = false) => {
  const classString = path.substring(path.indexOf("class=\"")+7,path.indexOf("\" "));
  const pathString = path.substring(path.indexOf("d=\"")+3,path.indexOf("\">"))
  return shouldAutoClose ? <path className={classString} d={pathString}/> : <path></path>
}

const buildCircle = circle => {
  const classString = circle.substring(circle.indexOf("class=\"")+7,circle.indexOf("\" "));
  const cxString = circle.substring(circle.indexOf("cx=\"")+4,circle.indexOf("\" cy"));
  const cyString = circle.substring(circle.indexOf("cy=\"")+4,circle.indexOf("\" r"));
  const rString = circle.substring(circle.indexOf("r=\"")+3,circle.indexOf("\">"));
  return <circle className={classString} cx={cxString} cy={cyString} r={rString} />
}

const getBuilder = tag => {
  if(tag === 'path') return buildPath
  if(tag === 'circle') return buildCircle
}

const buildInner = mappable => { 
  return mappable.map((line,index) => {
    let tag = line.line.substring(1,line.line.indexOf(" "));
    return <g key={index}>{getBuilder(tag)(line.line,line.shouldAutoClose)}</g>
  })
}

/** ------------------------------------------------------------------------------------------
* CREATE CLASSES
* --------------------------------------------------------------------------------------------
* Goes through the Markup, and swaps out the generic SVG classes for something usable
* 
* @param {String} markup  Long string of SVG content (includes <style>)
* @returns  Markup with all of the Classes swapped out
* ------------------------------------------------------------------------------------------*/
const createClasses = markup => {
  let fixedMarkup = doubleDigitFix(markup); // Replace double-digit class names
  const styleMarkup = fixedMarkup.substring(fixedMarkup.indexOf("<style>")+7,fixedMarkup.indexOf("</style>"));
  const splitStyles = styleMarkup.split("}").filter(emptyFilter);

  // Loop through all of the classes in the <style> tag and make them usable
  for(let cssClass of splitStyles){
    let nameOfClass = cssClass.substring(1,cssClass.indexOf('{')); // Save current className
    // console.log("NOC ? ",nameOfClass)

    // Split up all of the Rules, then go through and replace them
    let split = cssClass.substring(cssClass.indexOf("{")+1).split(";").filter(emptyFilter);
    for(let property of split){
      let styleConst = matchStyleConst(property);
      fixedMarkup = fixedMarkup.replaceAll(nameOfClass,styleConst);
    }
  }

  return fixedMarkup;
}

/** ------------------------------------------------------------------------------------------
* REBUILD CONTENT
* --------------------------------------------------------------------------------------------
* Recreates the interior of the SVG
* TODO - Lots of work needs to be done on more complex SVGs
* 
* @param {String} content Inner SVG
* @return Node that can be used in final SVG
* ------------------------------------------------------------------------------------------*/
const rebuildContent = content => {
  const splitContent = content.split(">").filter(emptyFilter);
  let mappable = [];

  // Go through the split-up content and create a mappable array of lines
  for(let i = 0; i < splitContent.length; i++){
    if(splitContent[i] === "") continue; // Ignore any empty lines
    const line = splitContent[i]+">";

    // Look at next line and see if it auto-closes
    if(i + 1 === splitContent.length ) break; // Get out if you hit the last line

    // If the line has is a tag element (and not the inside of a tag)
    if(isTagLine(line)){
      const isOpening = line.indexOf("</") === -1;
      
      if(isOpening){
        if(isTagLine(splitContent[i+1])){ // If the next line is ALSO a Tag...
          mappable.push({line: line, shouldAutoClose: true});
        } else{
          console.log("Inner content");
        }
      }
    }
  }

  return buildInner(mappable);
}

/** ------------------------------------------------------------------------------------------
* REMOVE SVG WRAP
* --------------------------------------------------------------------------------------------
* Takes a Component-ized SVG and rebuilds it so it no longer has the exterior SVG wrapper
* 
* @param {ReactComponent} Component SVG to convert
* @returns  HTML for stripped SVG content
* ------------------------------------------------------------------------------------------*/
export const removeSvgWrap = Component => {
  let final;
  const markup = createClasses(renderToStaticMarkup(<Component/>));
  const svgRemoved = markup.substring(markup.indexOf(">")+1,markup.indexOf("</svg>"));
  const content = svgRemoved.substring(svgRemoved.indexOf("/defs>")+6);

  final = rebuildContent(content);
  return final;
}
