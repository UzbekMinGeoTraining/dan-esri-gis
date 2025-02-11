import{a as fn,f as bn,i as Y}from"./chunk-3ZOLHUAU.js";import{a as x,h as ln}from"./chunk-OFGHVREP.js";import{D as rn,F as T,H as en,I as cn,J as un,K as R,N as gn,b as v,f as r,u as w,v as tn,w as on,x as an}from"./chunk-X7XJWAFC.js";import{a as L}from"./chunk-XXOIKNT6.js";import{D as A,F as sn,a as h,b as u,c as N,d as p,e as j,n as b,p as nn,r as k,u as F,v as m,y as d}from"./chunk-2HUIJUS4.js";import{d as Q,f as $,p as D}from"./chunk-5MNDZ6BX.js";import{d as K}from"./chunk-6WKJD7BM.js";import{a as y}from"./chunk-3CR7P5WT.js";import{a as P,b as M,c as V}from"./chunk-PYQRTZNZ.js";import{k as J}from"./chunk-5PTS4JDF.js";import{r as H}from"./chunk-3IBUFXWY.js";var q=()=>H.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),z=class{constructor(){this.plane=w(),this.origin=P(),this.basis1=P(),this.basis2=P()}},Mn=z;function S(n=yn){return{plane:w(n.plane),origin:M(n.origin),basis1:M(n.basis1),basis2:M(n.basis2)}}function Vn(n,t,s){let i=Un.get();return i.origin=n,i.basis1=t,i.basis2=s,i.plane=tn(0,0,0,0),_(i),i}function O(n,t=S()){return mn(n.origin,n.basis1,n.basis2,t)}function jn(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),on(t.plane,n.plane)}function mn(n,t,s,i=S()){return u(i.origin,n),u(i.basis1,t),u(i.basis2,s),_(i),Bn(i,"fromValues()"),i}function _(n){T(n.basis2,n.basis1,n.origin,n.plane)}function dn(n,t,s){n!==s&&O(n,s);let i=b(r.get(),l(n),t);return p(s.origin,s.origin,i),s.plane[3]-=t,s}function An(n,t,s){return hn(t,s),dn(s,W(n,n.origin),s),s}function Tn(n,t){let s=n.basis1[0],i=n.basis2[1],[o,a]=n.origin;return K(o-s,a-i,o+s,a+i,t)}function hn(n,t=S()){let s=(n[2]-n[0])/2,i=(n[3]-n[1])/2;return N(t.origin,n[0]+s,n[1]+i,0),N(t.basis1,s,0,0),N(t.basis2,0,i,0),an(0,0,1,0,t.plane),t}function U(n,t,s){return!!en(n.plane,t,s)&&wn(n,s)}function xn(n,t,s){if(U(n,t,s))return s;let i=In(n,t,r.get());return p(s,t.origin,b(r.get(),t.direction,nn(t.origin,i)/h(t.direction))),s}function In(n,t,s){let i=E.get();Sn(n,t,i,E.get());let o=Number.POSITIVE_INFINITY;for(let a of Z){let e=X(n,a,C.get()),g=r.get();if(cn(i,e,g)){let c=sn(r.get(),t.origin,g),f=Math.abs(J(m(t.direction,c)));f<o&&(o=f,u(s,g))}}return o===Number.POSITIVE_INFINITY?Pn(n,t,s):s}function En(n,t){return(t-n)/t}function Pn(n,t,s){if(U(n,t,s))return s;let i=E.get(),o=E.get();Sn(n,t,i,o);let a=Number.POSITIVE_INFINITY;for(let e of Z){let g=X(n,e,C.get()),c=r.get();if(un(i,g,c)){let f=ln(t,c);if(!R(o,c))continue;f<a&&(a=f,u(s,c))}}return G(n,t.origin)<a&&Nn(n,t.origin,s),s}function Nn(n,t,s){let i=gn(n.plane,t,r.get()),o=Y(pn(n,n.basis1),i,-1,1,r.get()),a=Y(pn(n,n.basis2),i,-1,1,r.get());return j(s,p(r.get(),o,a),n.origin),s}function vn(n,t,s){let{origin:i,basis1:o,basis2:a}=n,e=j(r.get(),t,i),g=v(o,e),c=v(a,e),f=v(l(n),e);return N(s,g,c,f)}function G(n,t){let s=vn(n,t,r.get()),{basis1:i,basis2:o}=n,a=h(i),e=h(o),g=Math.max(Math.abs(s[0])-a,0),c=Math.max(Math.abs(s[1])-e,0),f=s[2];return g*g+c*c+f*f}function On(n,t){return Math.sqrt(G(n,t))}function _n(n,t){let s=Number.NEGATIVE_INFINITY;for(let i of Z){let o=X(n,i,C.get()),a=bn(o,t);a>s&&(s=a)}return Math.sqrt(s)}function Cn(n,t){return R(n.plane,t)&&wn(n,t)}function kn(n,t,s,i){return qn(n,s,i)}function W(n,t){let s=-n.plane[3];return v(l(n),t)-s}function Fn(n,t,s,i){let o=W(n,t),a=b(zn,l(n),s-o);return p(i,t,a),i}function Ln(n,t){return A(n.basis1,t.basis1)&&A(n.basis2,t.basis2)&&A(n.origin,t.origin)}function Rn(n,t,s){return n!==s&&O(n,s),$(I,t),Q(I,I),d(s.basis1,n.basis1,I),d(s.basis2,n.basis2,I),d(s.plane,n.plane,I),d(s.origin,n.origin,t),rn(s.plane,s.plane,s.origin),s}function Yn(n,t,s,i){return n!==i&&O(n,i),D(B,t,s),d(i.basis1,n.basis1,B),d(i.basis2,n.basis2,B),_(i),i}function l(n){return n.plane}function qn(n,t,s){switch(t){case y.X:u(s,n.basis1),F(s,s);break;case y.Y:u(s,n.basis2),F(s,s);break;case y.Z:u(s,l(n))}return s}function wn(n,t){let s=j(r.get(),t,n.origin),i=k(n.basis1),o=k(n.basis2),a=m(n.basis1,s),e=m(n.basis2,s);return-a-i<0&&a-i<0&&-e-o<0&&e-o<0}function pn(n,t){let s=C.get();return u(s.origin,n.origin),u(s.vector,t),s}function X(n,t,s){let{basis1:i,basis2:o,origin:a}=n,e=b(r.get(),i,t.origin[0]),g=b(r.get(),o,t.origin[1]);p(s.origin,e,g),p(s.origin,s.origin,a);let c=b(r.get(),i,t.direction[0]),f=b(r.get(),o,t.direction[1]);return b(s.vector,p(c,c,f),2),s}function Bn(n,t){Math.abs(m(n.basis1,n.basis2)/(h(n.basis1)*h(n.basis2)))>1e-6&&q().warn(t,"Provided basis vectors are not perpendicular"),Math.abs(m(n.basis1,l(n)))>1e-6&&q().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-m(l(n),n.origin)-n.plane[3])>1e-6&&q().warn(t,"Plane offset is not consistent with plane origin")}function Sn(n,t,s,i){let o=l(n);T(o,t.direction,t.origin,s),T(s,o,t.origin,i)}var yn={plane:w(),origin:V(0,0,0),basis1:V(1,0,0),basis2:V(0,1,0)},E=new x(w),C=new x(fn),zn=P(),Un=new x(()=>S()),Z=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],I=L(),B=L(),rs=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:Mn,altitudeAt:W,axisAt:kn,cameraFrustumCoverage:En,closestPoint:Pn,closestPointOnSilhouette:In,copy:O,copyWithoutVerify:jn,create:S,distance:On,distance2:G,distanceToSilhouette:_n,elevate:dn,equals:Ln,extrusionContainsPoint:Cn,fromAABoundingRect:hn,fromValues:mn,getExtent:Tn,intersectRay:U,intersectRayClosestSilhouette:xn,normal:l,projectPoint:Nn,projectPointLocal:vn,rotate:Yn,setAltitudeAt:Fn,setExtent:An,transform:Rn,up:yn,updateUnboundedPlane:_,wrap:Vn},Symbol.toStringTag,{value:"Module"}));export{Mn as a,S as b,O as c,mn as d,_ as e,hn as f,U as g,En as h,On as i,Cn as j,Rn as k,Yn as l,l as m,rs as n};
