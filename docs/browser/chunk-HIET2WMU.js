import{m as w}from"./chunk-ADMU4VMS.js";import{b as E}from"./chunk-4AMJ3NIP.js";import{b as y}from"./chunk-OZ5LGYCJ.js";import{I as C}from"./chunk-ZPQQQXRA.js";import{a as b}from"./chunk-J2D4NQQB.js";import{c}from"./chunk-E24SCC45.js";import{a as x}from"./chunk-6DXGZQQN.js";import{a as M}from"./chunk-M2F4B74F.js";import{A as k,O as q,v as j}from"./chunk-X7XJWAFC.js";import{c as p,o as P,r as R}from"./chunk-2HUIJUS4.js";import{a as m}from"./chunk-PYQRTZNZ.js";import{ja as A}from"./chunk-4DLSYLKE.js";function X(r,t=S()){return F(r,t)}function Y(r,t=S()){return F(r,t,!1)}function F(r,t,a=r.hasZ){let s=w(r.spatialReference),i=A(s);if(i==null)return null;let U=(u,n)=>!(n.length<2)&&(p(u,n[0],n[1],a&&n[2]||0),!0),d=0;for(let u of r.rings){let n=u.length;if(n<3)continue;let{positionsWorldCoords:o}=t;for(;o.length<n;)o.push(m());let g=W,l=p(v,0,0,0),V=1/n;for(let e=0;e<n;e++){if(!U(g,u[e])||!M(g,r.spatialReference,o[e],s))return null;P(l,l,o[e],V)}let h=k(o[0],o[1],l,j());if(R(h)===0)continue;for(let e=0;e<n;e++)q(h,l,o[e],o[e]);let f=z(o);for(let e=0;e<f.length;e+=3)d+=x(o[f[e]],o[f[e+1]],o[f[e+2]])}return c(d,i)}var W=m(),v=m();function S(){return{positionsWorldCoords:[]}}function z(r){return b(H(r),[],2)}function H(r){let t=new Float64Array(2*r.length);for(let a=0;a<r.length;++a){let s=r[a],i=2*a;t[i]=s[0],t[i+1]=s[1]}return t}function or(r){let{spatialReference:t}=r;return E(t,L,N,r)}function L(r){return c(Math.abs(y([r],"square-meters")[0]),"square-meters")}function N(r){try{return c(Math.abs(C(r,"square-meters")),"square-meters")}catch{return null}}export{X as a,Y as b,S as c,z as d,or as e};
