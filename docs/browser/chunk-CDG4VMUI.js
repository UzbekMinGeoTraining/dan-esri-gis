import{a as o,b as u,f as _,h as x,j as P,k as A}from"./chunk-AOA5JMXK.js";import{a as E}from"./chunk-PYQRTZNZ.js";import{h as m}from"./chunk-5PTS4JDF.js";import{a as f}from"./chunk-VPXBKZQM.js";import{B as R}from"./chunk-GMC3I5VG.js";import{f as p}from"./chunk-WGF2T2BG.js";var C=class{constructor(n,r){this._textures=n,this.loadPromise=null,this._disposed=!1;let s=this._textures.acquire(r);R(s)?(s.then(t=>{this._disposed?p(t):this._textureRef=t}),this.loadPromise=s):this._textureRef=s}dispose(){this._textureRef=p(this._textureRef),this._disposed=!0}get glTexture(){return this._textureRef!=null?this._textureRef.glTexture:null}};function y(e,n,r,s){if(n==null||s==null)return!1;let t=P(n,s,j);if(t.projector===_)return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],!0;if(t.projector==null)return!1;let{source:i,dest:c}=t;if(c.spatialReferenceId===o.WEB_MERCATOR){let a=u[i.spatialReferenceId][o.WGS84];return a!=null&&(a(e,0,d,0),x(d,0,r,0),r[3]=I(d[1],e[2],e[3],f.radius),!0)}if(i.spatialReferenceId!==o.WGS84&&i.spatialReferenceId!==o.CGCS2000||c.spatialReferenceId!==o.PLATE_CARREE){t.projector(e,0,r,0);let a=i.metersPerUnit??1,l=c.metersPerUnit??1;r[3]=e[3]*a/l}else{let a=u[i.spatialReferenceId][o.SPHERICAL_ECEF],l=u[o.SPHERICAL_ECEF][o.PLATE_CARREE],h=e[3];a!=null&&l!=null&&(h=I(e[1],e[2],e[3],f.radius)),t.projector(e,0,r,0),r[3]=h}return!0}function I(e,n,r,s){let t=s+n;if(t<s/2||r>t)return Number.MAX_VALUE;let i=Math.abs(M*e)+Math.asin(r/t);return i>=Math.PI/2?Number.MAX_VALUE:r/Math.cos(i)}var d=E(),j=A(),M=m(1);export{y as a,C as b};
