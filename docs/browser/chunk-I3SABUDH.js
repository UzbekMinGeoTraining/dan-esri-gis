import{c,d as p}from"./chunk-ELOFFQD3.js";import{p as h}from"./chunk-4YNUZOQW.js";import{a as y}from"./chunk-4DR6EKLV.js";import{a as g,c as l}from"./chunk-EPTSNNZF.js";import{p as m}from"./chunk-AOA5JMXK.js";function I(e,i,r,a){let o=e.type==="polygon"?p.CCW_IS_HOLE:p.NONE,t=e.type==="polygon"?e.rings:e.paths,{position:n,outlines:s}=c(t,!!e.hasZ,o,e.spatialReference),u=g(n.length),f=y(n,e.spatialReference,0,u,0,n,0,n.length/3,i,r,a),d=f!=null;return{lines:d?E(s,n,u):[],projectionSuccess:d,sampledElevation:f}}function R(e,i){let r=e.type==="polygon"?p.CCW_IS_HOLE:p.NONE,a=e.type==="polygon"?e.rings:e.paths,{position:o,outlines:t}=c(a,!1,r),n=m(o,e.spatialReference,0,o,i,0);for(let s=2;s<o.length;s+=3)o[s]=h;return{lines:n?E(t,o):[],projectionSuccess:n}}function E(e,i,r=null){let a=new Array;for(let{index:o,count:t}of e){if(t<=1)continue;let n=3*o,s=3*t;a.push({position:l(i,3*o,3*t),mapPositions:r!=null?l(r,n,s):void 0})}return a}var b;(function(e){e[e.EnableFastUpdates=0]="EnableFastUpdates",e[e.DisableFastUpdates=1]="DisableFastUpdates",e[e.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"})(b||(b={}));export{I as a,R as b,b as c};
