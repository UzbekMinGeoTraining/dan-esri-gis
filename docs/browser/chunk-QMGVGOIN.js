import{a as F,b}from"./chunk-M7Q5ICON.js";var N="<Null>",C="equal-interval",k=1,M=5,B=10,w=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,q=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),E=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),$=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function g(n){return n==null||typeof n=="string"&&!n?N:n}function O(n){let t=n.normalizationField!=null||n.normalizationType!=null,l=n.minValue!=null||n.maxValue!=null,e=!!n.sqlExpression&&n.supportsSQLExpression;return!t&&!l&&!e}function tn(n){let{outStatisticTypes:t}=n,l=n.returnDistinct?[...new Set(n.values)]:n.values,e=l.filter(u=>u!=null).sort(),i=e.length,a={count:i,min:e[0],max:e[i-1]};return n.supportsNullCount&&(a.nullcount=l.length-i),!n.percentileParams||t?.include?.length&&!t.include.includes("median")||t?.exclude?.length&&t.exclude.includes("median")||(a.median=I(l,n.percentileParams)),a}function P(n){let{values:t,useSampleStdDev:l,supportsNullCount:e,outStatisticTypes:i}=n,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,r=null,d=null,m=null,s=0,c=n.minValue==null?-1/0:n.minValue,v=n.maxValue==null?1/0:n.maxValue;for(let f of t)Number.isFinite(f)?f>=c&&f<=v&&(o=o===null?f:o+f,a=Math.min(a,f),u=Math.max(u,f),s++):typeof f=="string"&&s++;if(s&&o!=null){r=o/s;let f=0;for(let T of t)Number.isFinite(T)&&T>=c&&T<=v&&(f+=(T-r)**2);m=l?s>1?f/(s-1):0:s>0?f/s:0,d=Math.sqrt(m)}else a=null,u=null;let p={avg:r,count:s,max:u,min:a,stddev:d,sum:o,variance:m};return e&&(p.nullcount=t.length-s),!n.percentileParams||i?.include?.length&&!i.include.includes("median")||i?.exclude?.length&&i.exclude.includes("median")||(p.median=I(t,n.percentileParams)),p}function I(n,t){let{fieldType:l,value:e,orderBy:i,isDiscrete:a}=t,u=U(l,i==="desc");if((n=[...n].filter(v=>v!=null).sort((v,p)=>u(v,p))).length===0)return null;if(e<=0)return n[0];if(e>=1)return n[n.length-1];let o=(n.length-1)*e,r=Math.floor(o),d=r+1,m=o%1,s=n[r],c=n[d];return d>=n.length||a||typeof s=="string"||typeof c=="string"?s:s*(1-m)+c*m}function U(n,t){if(n){if(q.has(n))return z(t);if(E.has(n))return y(t,!1);if(n==="esriFieldTypeTimestampOffset")return R(t);let u=y(t,!0);if(n==="esriFieldTypeString")return u;if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID")return(o,r)=>u(D(o),D(r))}let l=t?1:-1,e=z(t),i=y(t,!0),a=S(t);return(u,o)=>typeof u=="number"&&typeof o=="number"?e(u,o):typeof u=="string"&&typeof o=="string"?i(u,o):a(u,o)??l}var h=(n,t)=>n==null?t==null?0:1:t==null?-1:null,V=(n,t)=>n==null?t==null?0:-1:t==null?1:null;function S(n){return n?h:V}var G=(n,t)=>V(n,t)??(n===t?0:new Date(n).getTime()-new Date(t).getTime()),L=(n,t)=>h(n,t)??(n===t?0:new Date(t).getTime()-new Date(n).getTime());function R(n){return n?L:G}var A=(n,t)=>V(n,t)??(n===t?0:n<t?-1:1),Y=(n,t)=>h(n,t)??(n===t?0:n<t?1:-1);function y(n,t){if(!t)return n?Y:A;let l=S(n);return n?(e,i)=>{let a=l(e,i);return a??((e=e.toUpperCase())>(i=i.toUpperCase())?-1:e<i?1:0)}:(e,i)=>{let a=l(e,i);return a??((e=e.toUpperCase())<(i=i.toUpperCase())?-1:e>i?1:0)}}var _=(n,t)=>h(n,t)??t-n,j=(n,t)=>V(n,t)??n-t;function z(n){return n?_:j}function D(n){return n.slice(24,36)+n.slice(19,23)+n.slice(16,18)+n.slice(14,16)+n.slice(11,13)+n.slice(9,11)+n.slice(6,8)+n.slice(4,6)+n.slice(2,4)+n.slice(0,2)}function ln(n,t,l){let e;for(e in n)t?.include?.length&&!t.include.includes(e)||t?.exclude?.length&&t.exclude.includes(e)?delete n[e]:$.includes(e)&&(Number.isFinite(n[e])||(n[e]=null));return l&&["avg","stddev","variance"].forEach(i=>{n[i]!=null&&(n[i]=Math.ceil(n[i]??0))}),n}function en(n){let t={};for(let l of n)(l==null||typeof l=="string"&&l.trim()==="")&&(l=null),t[l]==null?t[l]={count:1,data:l}:t[l].count++;return{count:t}}function x(n){return n?.type!=="coded-value"?[]:n.codedValues.map(t=>t.code)}function an(n,t,l,e){let i=n.count,a=[];if(l&&t){let u=[],o=x(t[0]);for(let r of o)if(t[1]){let d=x(t[1]);for(let m of d)if(t[2]){let s=x(t[2]);for(let c of s)u.push(`${g(r)}${e}${g(m)}${e}${g(c)}`)}else u.push(`${g(r)}${e}${g(m)}`)}else u.push(r);for(let r of u)i.hasOwnProperty(r)||(i[r]={data:r,count:0})}for(let u in i){let o=i[u];a.push({value:o.data,count:o.count,label:o.label})}return{uniqueValueInfos:a}}function on(n,t,l,e){let i=null;switch(t){case"log":n!==0&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(e)&&e!==0&&(i=n/e*100);break;case"field":Number.isFinite(l)&&l!==0&&(i=n/l);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5)}return i}function H(n,t){let l=J({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||M});return n=Q(n,t.minValue,t.maxValue),b({definition:l,values:n,normalizationTotal:t.normalizationTotal})}function Q(n,t,l){let e=t??-1/0,i=l??1/0;return n.filter(a=>Number.isFinite(a)&&a>=e&&a<=i)}function J(n){let{breakCount:t,field:l,normalizationField:e,normalizationType:i}=n,a=n.classificationMethod||C,u=a==="standard-deviation"?n.standardDeviationInterval||k:void 0,o=a==="defined-interval"?n.definedInterval:void 0;return new F({breakCount:t,classificationField:l,classificationMethod:a,normalizationField:i==="field"?e:void 0,normalizationType:i,standardDeviationInterval:u,definedInterval:o})}function un(n,t){let l=n.classBreaks,e=l.length,i=l[0]?.minValue,a=l[e-1]?.maxValue,u=t==="standard-deviation",o=w;return l=l.map(r=>{let d=r.label,m={minValue:r.minValue,maxValue:r.maxValue,label:d};if(u&&d){let s=d.match(o),c=s?.map(v=>+v.trim())??[];c.length===2?(m.minStdDev=c[0],m.maxStdDev=c[1],c[0]<0&&c[1]>0&&(m.hasAvg=!0)):c.length===1&&(d.includes("<")?(m.minStdDev=null,m.maxStdDev=c[0]):d.includes(">")&&(m.minStdDev=c[0],m.maxStdDev=null))}return m}),{minValue:i,maxValue:a,classBreakInfos:l,normalizationTotal:n.normalizationTotal}}function rn(n,t){let l=K(n,t);if(l.min==null&&l.max==null)return{bins:[],minValue:l.min,maxValue:l.max,normalizationTotal:t.normalizationTotal};let e=l.intervals,i=l.min??0,a=l.max??0,u=e.map((o,r)=>({minValue:e[r][0],maxValue:e[r][1],count:0}));for(let o of n)if(o!=null&&o>=i&&o<=a){let r=W(e,o);r>-1&&u[r].count++}return{bins:u,minValue:i,maxValue:a,normalizationTotal:t.normalizationTotal}}function K(n,t){let{field:l,classificationMethod:e,standardDeviationInterval:i,normalizationType:a,normalizationField:u,normalizationTotal:o,minValue:r,maxValue:d}=t,m=t.numBins||B,s=null,c=null,v=null;if((!e||e==="equal-interval")&&!a){if(r!=null&&d!=null)s=r,c=d;else{let p=P({values:n,minValue:r,maxValue:d,useSampleStdDev:!a,supportsNullCount:O({normalizationType:a,normalizationField:u,minValue:r,maxValue:d})});s=p.min??null,c=p.max??null}v=X(s??0,c??0,m)}else{let{classBreaks:p}=H(n,{field:l,normalizationType:a,normalizationField:u,normalizationTotal:o,classificationMethod:e,standardDeviationInterval:i,minValue:r,maxValue:d,numClasses:m});s=p[0].minValue,c=p[p.length-1].maxValue,v=p.map(f=>[f.minValue,f.maxValue])}return{min:s,max:c,intervals:v}}function W(n,t){let l=-1;for(let e=n.length-1;e>=0;e--)if(t>=n[e][0]){l=e;break}return l}function X(n,t,l){let e=(t-n)/l,i=[],a,u=n;for(let o=1;o<=l;o++)a=u+e,a=Number(a.toFixed(16)),i.push([u,o===l?t:a]),u=a;return i}export{g as a,O as b,tn as c,P as d,I as e,U as f,ln as g,en as h,an as i,on as j,H as k,un as l,rn as m};
