import{a as g}from"./chunk-6WKJD7BM.js";import{y as I}from"./chunk-N27U3N2T.js";import{L as p,O as y}from"./chunk-BP73DJTS.js";function N(a,e=!1){return a<=y?e?new Array(a).fill(0):new Array(a):new Float64Array(a)}function W(a){return(p(a)?a.length:a.byteLength/8)<=y?Array.from(a):new Float64Array(a)}function B(a,e,i){return Array.isArray(a)?a.slice(e,e+i):a.subarray(e,e+i)}function n(a=z){return[a[0],a[1],a[2],a[3],a[4],a[5]]}function d(a,e,i,r,t,u,o=n()){return o[0]=a,o[1]=e,o[2]=i,o[3]=r,o[4]=t,o[5]=u,o}function v(a,e=n()){return w(a,0,a.length/3,e)}function w(a,e,i,r=n()){return b(r,A),E(r,a,e,i),r}function D(a,e=N(24)){let[i,r,t,u,o,f]=a;return e[0]=i,e[1]=r,e[2]=t,e[3]=i,e[4]=r,e[5]=f,e[6]=i,e[7]=o,e[8]=t,e[9]=i,e[10]=o,e[11]=f,e[12]=u,e[13]=r,e[14]=t,e[15]=u,e[16]=r,e[17]=f,e[18]=u,e[19]=o,e[20]=t,e[21]=u,e[22]=o,e[23]=f,e}function O(a,e){let i=isFinite(a[2])||isFinite(a[5]);return new I(i?{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:e}:{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:e})}function q(a,e){a[0]=Math.min(a[0],e[0]),a[1]=Math.min(a[1],e[1]),a[2]=Math.min(a[2],e[2]),a[3]=Math.max(a[3],e[3]),a[4]=Math.max(a[4],e[4]),a[5]=Math.max(a[5],e[5])}function C(a,e){a[0]=Math.min(a[0],e[0]),a[1]=Math.min(a[1],e[1]),a[3]=Math.max(a[3],e[2]),a[4]=Math.max(a[4],e[3])}function G(a,e){a[0]=Math.min(a[0],e[0]),a[1]=Math.min(a[1],e[1]),a[2]=Math.min(a[2],e[2]),a[3]=Math.max(a[3],e[0]),a[4]=Math.max(a[4],e[1]),a[5]=Math.max(a[5],e[2])}function E(a,e,i=0,r=e.length/3){let t=a[0],u=a[1],o=a[2],f=a[3],c=a[4],h=a[5];for(let s=0;s<r;s++)t=Math.min(t,e[i+3*s]),u=Math.min(u,e[i+3*s+1]),o=Math.min(o,e[i+3*s+2]),f=Math.max(f,e[i+3*s]),c=Math.max(c,e[i+3*s+1]),h=Math.max(h,e[i+3*s+2]);a[0]=t,a[1]=u,a[2]=o,a[3]=f,a[4]=c,a[5]=h}function Z(a,e,i){let r=e.length,t=a[0],u=a[1],o=a[2],f=a[3],c=a[4],h=a[5];if(i)for(let s=0;s<r;s++){let m=e[s];t=Math.min(t,m[0]),u=Math.min(u,m[1]),o=Math.min(o,m[2]),f=Math.max(f,m[0]),c=Math.max(c,m[1]),h=Math.max(h,m[2])}else for(let s=0;s<r;s++){let m=e[s];t=Math.min(t,m[0]),u=Math.min(u,m[1]),f=Math.max(f,m[0]),c=Math.max(c,m[1])}a[0]=t,a[1]=u,a[2]=o,a[3]=f,a[4]=c,a[5]=h}function L(a){for(let e=0;e<6;e++)if(!isFinite(a[e]))return!1;return!0}function M(a){return a[0]>=a[3]?0:a[3]-a[0]}function x(a){return a[1]>=a[4]?0:a[4]-a[1]}function l(a){return a[2]>=a[5]?0:a[5]-a[2]}function j(a){let e=M(a),i=l(a),r=x(a);return Math.sqrt(e*e+i*i+r*r)}function k(a,e=[0,0,0]){return e[0]=a[0]+M(a)/2,e[1]=a[1]+x(a)/2,e[2]=a[2]+l(a)/2,e}function H(a,e=[0,0,0]){return e[0]=M(a),e[1]=x(a),e[2]=l(a),e}function J(a,e){return e[0]>=a[0]&&e[1]>=a[1]&&e[2]>=a[2]&&e[0]<=a[3]&&e[1]<=a[4]&&e[2]<=a[5]}function K(a,e){return e[0]>=a[0]&&e[1]>=a[1]&&e[2]>=a[2]&&e[3]<=a[3]&&e[4]<=a[4]&&e[5]<=a[5]}function T(a,e){return Math.max(e[0],a[0])<=Math.min(e[3],a[3])&&Math.max(e[1],a[1])<=Math.min(e[4],a[4])&&Math.max(e[2],a[2])<=Math.min(e[5],a[5])}function Q(a,e){return e==null||T(a,e)}function U(a,e,i,r,t=a){return t[0]=a[0]+e,t[1]=a[1]+i,t[2]=a[2]+r,t[3]=a[3]+e,t[4]=a[4]+i,t[5]=a[5]+r,t}function X(a,e,i=a){let r=a[0]+M(a)/2,t=a[1]+x(a)/2,u=a[2]+l(a)/2;return i[0]=r+(a[0]-r)*e,i[1]=t+(a[1]-t)*e,i[2]=u+(a[2]-u)*e,i[3]=r+(a[3]-r)*e,i[4]=t+(a[4]-t)*e,i[5]=u+(a[5]-u)*e,i}function $(a,e){return e[0]=a[0],e[1]=a[1],e[2]=a[2],e}function aa(a,e,i=a){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i!==a&&(i[3]=a[3],i[4]=a[4],i[5]=a[5]),i}function ea(a,e,i=a){return i[3]=e[0],i[4]=e[1],i[5]=e[2],i!==a&&(i[0]=a[0],i[1]=a[1],i[2]=a[2]),a}function b(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a}function ia(a){return a?b(a,A):n(A)}function ra(a,e){return e||(e=g()),e[0]=a[0],e[1]=a[1],e[2]=a[3],e[3]=a[4],e}function ta(a,e){return a[0]=e[0],a[1]=e[1],a[2]=Number.NEGATIVE_INFINITY,a[3]=e[2],a[4]=e[3],a[5]=Number.POSITIVE_INFINITY,a}function ua(a,e,i,r,t){return a[0]=e,a[1]=i,a[2]=Number.NEGATIVE_INFINITY,a[3]=r,a[4]=t,a[5]=Number.POSITIVE_INFINITY,a}function F(a){return a.length===6}function oa(a){return M(a)===0&&x(a)===0&&l(a)===0}function sa(a,e,i){if(a==null||e==null)return a===e;if(!F(a)||!F(e))return!1;if(i){for(let r=0;r<a.length;r++)if(!i(a[r],e[r]))return!1}else for(let r=0;r<a.length;r++)if(a[r]!==e[r])return!1;return!0}function fa(a,e,i,r,t,u){return d(a,e,i,r,t,u,V)}var ma=[-1/0,-1/0,-1/0,1/0,1/0,1/0],A=[1/0,1/0,1/0,-1/0,-1/0,-1/0],z=[0,0,0,0,0,0],V=n();export{N as a,W as b,B as c,n as d,d as e,v as f,w as g,D as h,O as i,q as j,C as k,G as l,E as m,Z as n,L as o,M as p,x as q,l as r,j as s,k as t,H as u,J as v,K as w,T as x,Q as y,U as z,X as A,$ as B,aa as C,ea as D,b as E,ia as F,ra as G,ta as H,ua as I,F as J,oa as K,sa as L,fa as M,ma as N,A as O,z as P};
