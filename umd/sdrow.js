!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).sdrow={})}(this,(function(e){"use strict";const r=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),t=e=>e.toUpperCase(),o=e=>e.toLowerCase(),a=e=>{let r="";return Array.from(e).forEach((e,t)=>{e=t%2==0?e.toUpperCase():e.toLowerCase(),r+=e}),r},s=e=>{let r="";return Array.from(e).forEach((e,t)=>{e=t%2==1?e.toUpperCase():e.toLowerCase(),r+=e}),r},p=e=>e.replace(/\s+/g,""),l=e=>e.replace(/\s+/g," ").trim(),c=e=>e.replace(/[^\w\s]|\d/g,""),n=(e,r)=>{let t="";const o=e.split(" ");for(let e of o)e=r(e),t=t.concat(e," ");return t.trim()},i=e=>n(e,r),f=e=>n(e,o);e.camelCase=e=>{let r=e;return r=i(r),r=p(r),r=(r=c(r)).charAt(0).toLowerCase()+r.slice(1)},e.capWord=r,e.caseCase=n,e.jiggleCase=e=>n(e,a),e.jiggleWord=a,e.kababCase=e=>{let r=e;return r=f(r),r=l(r),r=(r=c(r)).replace(/\s/g,"-")},e.lowerCase=f,e.lowerWord=o,e.pascalCase=e=>{let r=e;return r=i(r),r=p(r),r=c(r)},e.removeNonAlpha=c,e.removeSpaces=p,e.snakeCase=e=>{let r=e;return r=f(r),r=l(r),r=(r=c(r)).replace(/\s/g,"_")},e.trimSpaces=l,e.upperCase=e=>n(e,t),e.upperWord=t,e.wiggleCase=e=>n(e,s),e.wiggleWord=s,Object.defineProperty(e,"__esModule",{value:!0})}));
