import{b as l}from"./chunk-KDLA3TQ2.js";import{a as M}from"./chunk-GDB2EJGA.js";import{l as h}from"./chunk-BDF7KEUQ.js";var m=128,T=.5;function P(e){return e==="cross"||e==="x"}function y(e,t=m,a=t*T,r=0){let n=w(e,t,a,r);return new l(n,{mipmap:!1,wrap:{s:h.CLAMP_TO_EDGE,t:h.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0})}function w(e,t=m,a=t*T,r=0){switch(e){case"circle":default:return R(t,a);case"square":return d(t,a);case"cross":return A(t,a,r);case"x":return C(t,a,r);case"kite":return Q(t,a);case"triangle":return E(t,a);case"arrow":return _(t,a)}}function R(e,t){let a=e/2-.5;return f(e,S(a,a,t/2))}function d(e,t){return p(e,t,!1)}function Q(e,t){return p(e,t,!0)}function A(e,t,a=0){return x(e,t,!1,a)}function C(e,t,a=0){return x(e,t,!0,a)}function E(e,t){return f(e,b(e/2,t,t/2))}function _(e,t){let a=t,r=t/2,n=e/2,s=.8*a,c=S(n,(e-t)/2-s,Math.sqrt(s*s+r*r)),i=b(n,a,r);return f(e,(u,o)=>Math.max(i(u,o),-c(u,o)))}function p(e,t,a){return a&&(t/=Math.SQRT2),f(e,(r,n)=>{let s=r-.5*e+.25,c=.5*e-n-.75;if(a){let i=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=i}return Math.max(Math.abs(s),Math.abs(c))-.5*t})}function x(e,t,a,r=0){t-=r,a&&(t*=Math.SQRT2);let n=.5*t;return f(e,(s,c)=>{let i,u=s-.5*e,o=.5*e-c-1;if(a){let q=(u+o)/Math.SQRT2;o=(o-u)/Math.SQRT2,u=q}return u=Math.abs(u),o=Math.abs(o),i=u>o?u>n?Math.sqrt((u-n)*(u-n)+o*o):o:o>n?Math.sqrt(u*u+(o-n)*(o-n)):u,i-=r/2,i})}function S(e,t,a){return(r,n)=>{let s=r-e,c=n-t;return Math.sqrt(s*s+c*c)-a}}function b(e,t,a){let r=Math.sqrt(t*t+a*a);return(n,s)=>{let c=Math.abs(n-e)-a,i=s-e+t/2+.75,u=(t*c+a*i)/r,o=-i;return Math.max(u,o)}}function f(e,t){let a=new Uint8Array(4*e*e);for(let r=0;r<e;r++)for(let n=0;n<e;n++){let s=n+e*r,c=t(n,r);c=c/e+.5,M(c,a,4*s)}return a}export{m as a,T as b,P as c,y as d,w as e};
