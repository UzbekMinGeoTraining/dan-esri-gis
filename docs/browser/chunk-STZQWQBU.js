import{b as a}from"./chunk-E43YKIMQ.js";import{a as n}from"./chunk-GCRQTPSO.js";var f=r=>{let e="";e+=r[0].toUpperCase();for(let t=1;t<r.length;t++){let s=r[t];s===s.toUpperCase()?(e+="_",e+=s):e+=s.toUpperCase()}return e},c=r=>{let e={};for(let t in r)e[f(t)]=r[t];return n(e)},d=(r,e,t,s)=>{let l=r+r.slice(Math.max(0,r.lastIndexOf("/"))),p=e+e.slice(Math.max(0,e.lastIndexOf("/"))),o=c(s);return{attributes:t,shaders:{vertexShader:o+a(`${l}.vert`),fragmentShader:o+a(`${p}.frag`)}}};export{d as a};
