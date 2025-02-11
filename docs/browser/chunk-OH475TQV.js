import{a as g}from"./chunk-DSHXH3B4.js";import{b as T}from"./chunk-CY477QBZ.js";import{i as x,r as E,t as N}from"./chunk-FW33MEBA.js";import{a as y,d as v,e as O,f as A}from"./chunk-Q5WFUDPQ.js";import{m as Z}from"./chunk-T7BKG6V3.js";import{d as h,f as U,g as F}from"./chunk-N27U3N2T.js";import{B as f,C as p,ga as P,m,p as z,u as c}from"./chunk-4DLSYLKE.js";import{a as b}from"./chunk-B7IARA3F.js";import{E as j}from"./chunk-GMC3I5VG.js";import{u as _}from"./chunk-BP73DJTS.js";import{g as l}from"./chunk-JEGVIFEP.js";var R=[0,0];function k(t,e){if(!e)return null;if("x"in e){let i={x:0,y:0};return[i.x,i.y]=t(e.x,e.y,R),e.z!=null&&(i.z=e.z),e.m!=null&&(i.m=e.m),i}if("xmin"in e){let i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=t(e.xmin,e.ymin,R),[i.xmax,i.ymax]=t(e.xmax,e.ymax,R),e.hasZ&&(i.zmin=e.zmin,i.zmax=e.zmax,i.hasZ=!0),e.hasM&&(i.mmin=e.mmin,i.mmax=e.mmax,i.hasM=!0),i}return"rings"in e?{rings:q(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:q(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:J(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function q(t,e){let i=[];for(let n of t)i.push(J(n,e));return i}function J(t,e){let i=[];for(let n of t){let r=e(n[0],n[1],[0,0]);i.push(r),n.length>2&&r.push(n[2]),n.length>3&&r.push(n[3])}return i}function d(t,e){return l(this,null,function*(){if(!t||!e)return;let i=Array.isArray(t)?t.map(n=>n.geometry!=null?n.geometry.spatialReference:null).filter(_):[t];yield N(i.map(n=>({source:n,dest:e})))})}var L=k.bind(null,U),B=k.bind(null,F);function M(t,e,i,n){if(!t||(i||(i=e,e=t.spatialReference),!f(e)||!f(i)||m(e,i)))return t;if(h(e,i)){let r=c(i)?L(t):B(t);return r.spatialReference=i,r}return x(g,[t],e,i,null,n)[0]}var S=class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(e,i,n,r){return l(this,null,function*(){if(!e?.length||!i||!n||m(i,n))return e;let a={geometries:e,inSpatialReference:i,outSpatialReference:n,geographicTransformation:r,resolve:j()};return this._jobs.push(a),this._timer??=setTimeout(this._process,10),a.resolve.promise})}_process(){this._timer=null;let e=this._jobs.shift();if(!e)return;let{geometries:i,inSpatialReference:n,outSpatialReference:r,resolve:a,geographicTransformation:o}=e;h(n,r)?c(r)?a(i.map(L)):a(i.map(B)):a(x(g,i,n,r,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},K=new S;function it(t,e,i,n){return K.push(t,e,i,n)}var Q=new b({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),W=Object.freeze({});function pt(t,e,i){return l(this,null,function*(){let{outFields:n,orderByFields:r,groupByFieldsForStatistics:a,outStatistics:o}=t;if(n)for(let s=0;s<n.length;s++)n[s]=n[s].trim();if(r)for(let s=0;s<r.length;s++)r[s]=r[s].trim();if(a)for(let s=0;s<a.length;s++)a[s]=a[s].trim();if(o)for(let s=0;s<o.length;s++)o[s].onStatisticField&&(o[s].onStatisticField=o[s].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),C(t,e,i)})}function C(t,e,i){return l(this,null,function*(){if(!t)return null;let{where:n}=t;if(t.where=n=n?.trim(),(!n||/^1 *= *1$/.test(n)||e&&e===n)&&(t.where=null),!t.geometry)return t;let r=yield I(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){let{spatialReference:a}=t.geometry;r=Z(r),r.spatialReference=a}if(r){yield d(r.spatialReference,i),r=D(r,i);let a=(yield T(A(r)))[0];if(a==null)throw W;let o="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,s=o&&G(r,i)?{densificationStep:8*o}:void 0,w=a.toJSON(),u=M(w,w.spatialReference,i,s);if(!u)throw W;u.spatialReference=i,t.geometry=u}return t})}function G(t,e){if(!t)return!1;let i=t.spatialReference;return(y(t)||O(t)||v(t))&&!m(i,e)&&!E(i,e)}function D(t,e){let i=t.spatialReference;return G(t,e)&&y(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}function I(t){return l(this,null,function*(){let{distance:e,units:i}=t,n=t.geometry;if(e==null||"vertexAttributes"in n)return n;let r=n.spatialReference,a=i?Q.fromJSON(i):P(r),o=r&&(z(r)||c(r))?n:yield d(r,p).then(()=>M(n,p));return(yield V())(o.spatialReference,o,e,a)})}function V(){return l(this,null,function*(){return(yield import("./chunk-JV4XXL5J.js")).geodesicBuffer})}export{d as a,M as b,it as c,Q as d,W as e,pt as f,C as g};
