import{a as P}from"./chunk-CYCLIMTY.js";import{a as N}from"./chunk-DBLGLVAQ.js";import{J as G,u as Z,v as D,w as d}from"./chunk-2HUIJUS4.js";import{a as E,c as L,d as _,e as v,g as z,h as O,i as T,j as S,k as W,m as X,n as Y}from"./chunk-3FPO2LOS.js";import{a as y,b}from"./chunk-QNZSBADV.js";import{a as I,c as x}from"./chunk-PYQRTZNZ.js";function H(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function k(a,s,r){r*=.5;let e=Math.sin(r);return a[0]=e*s[0],a[1]=e*s[1],a[2]=e*s[2],a[3]=Math.cos(r),a}function J(a,s){let r=2*Math.acos(s[3]),e=Math.sin(r/2);return e>y()?(a[0]=s[0]/e,a[1]=s[1]/e,a[2]=s[2]/e):(a[0]=1,a[1]=0,a[2]=0),r}function w(a,s,r){let e=s[0],o=s[1],t=s[2],c=s[3],i=r[0],n=r[1],u=r[2],l=r[3];return a[0]=e*l+c*i+o*u-t*n,a[1]=o*l+c*n+t*i-e*u,a[2]=t*l+c*u+e*n-o*i,a[3]=c*l-e*i-o*n-t*u,a}function K(a,s,r){r*=.5;let e=s[0],o=s[1],t=s[2],c=s[3],i=Math.sin(r),n=Math.cos(r);return a[0]=e*n+c*i,a[1]=o*n+t*i,a[2]=t*n-o*i,a[3]=c*n-e*i,a}function Q(a,s,r){r*=.5;let e=s[0],o=s[1],t=s[2],c=s[3],i=Math.sin(r),n=Math.cos(r);return a[0]=e*n-t*i,a[1]=o*n+c*i,a[2]=t*n+e*i,a[3]=c*n-o*i,a}function U(a,s,r){r*=.5;let e=s[0],o=s[1],t=s[2],c=s[3],i=Math.sin(r),n=Math.cos(r);return a[0]=e*n+o*i,a[1]=o*n-e*i,a[2]=t*n+c*i,a[3]=c*n-t*i,a}function $(a,s){let r=s[0],e=s[1],o=s[2];return a[0]=r,a[1]=e,a[2]=o,a[3]=Math.sqrt(Math.abs(1-r*r-e*e-o*o)),a}function A(a,s,r,e){let o=s[0],t=s[1],c=s[2],i=s[3],n,u,l,M,f,m=r[0],p=r[1],q=r[2],g=r[3];return u=o*m+t*p+c*q+i*g,u<0&&(u=-u,m=-m,p=-p,q=-q,g=-g),1-u>y()?(n=Math.acos(u),l=Math.sin(n),M=Math.sin((1-e)*n)/l,f=Math.sin(e*n)/l):(M=1-e,f=e),a[0]=M*o+f*m,a[1]=M*t+f*p,a[2]=M*c+f*q,a[3]=M*i+f*g,a}function aa(a){let s=b,r=s(),e=s(),o=s(),t=Math.sqrt(1-r),c=Math.sqrt(r);return a[0]=t*Math.sin(2*Math.PI*e),a[1]=t*Math.cos(2*Math.PI*e),a[2]=c*Math.sin(2*Math.PI*o),a[3]=c*Math.cos(2*Math.PI*o),a}function sa(a,s){let r=s[0],e=s[1],o=s[2],t=s[3],c=r*r+e*e+o*o+t*t,i=c?1/c:0;return a[0]=-r*i,a[1]=-e*i,a[2]=-o*i,a[3]=t*i,a}function ea(a,s){return a[0]=-s[0],a[1]=-s[1],a[2]=-s[2],a[3]=s[3],a}function B(a,s){let r=s[0]+s[4]+s[8],e;if(r>0)e=Math.sqrt(r+1),a[3]=.5*e,e=.5/e,a[0]=(s[5]-s[7])*e,a[1]=(s[6]-s[2])*e,a[2]=(s[1]-s[3])*e;else{let o=0;s[4]>s[0]&&(o=1),s[8]>s[3*o+o]&&(o=2);let t=(o+1)%3,c=(o+2)%3;e=Math.sqrt(s[3*o+o]-s[3*t+t]-s[3*c+c]+1),a[o]=.5*e,e=.5/e,a[3]=(s[3*t+c]-s[3*c+t])*e,a[t]=(s[3*t+o]+s[3*o+t])*e,a[c]=(s[3*c+o]+s[3*o+c])*e}return a}function oa(a,s,r,e){let o=.5*Math.PI/180;s*=o,r*=o,e*=o;let t=Math.sin(s),c=Math.cos(s),i=Math.sin(r),n=Math.cos(r),u=Math.sin(e),l=Math.cos(e);return a[0]=t*n*l-c*i*u,a[1]=c*i*l+t*n*u,a[2]=c*n*u-t*i*l,a[3]=c*n*l+t*i*u,a}function ra(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}var ta=E,ca=L,ia=_,na=w,ua=v,la=S,ha=W,C=z,Ma=C,F=O,fa=F,j=T,ma=X,pa=Y;function qa(a,s,r){let e=D(s,r);return e<-.999999?(d(h,ga,s),G(h)<1e-6&&d(h,da,s),Z(h,h),k(a,h,Math.PI),a):e>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(d(h,s,r),a[0]=h[0],a[1]=h[1],a[2]=h[2],a[3]=1+e,j(a,a))}var h=I(),ga=x(1,0,0),da=x(0,1,0);function Aa(a,s,r,e,o,t){return A(R,s,o,t),A(V,r,e,t),A(a,R,V,2*t*(1-t)),a}var R=P(),V=P();function xa(a,s,r,e){let o=ya;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=e[0],o[4]=e[1],o[7]=e[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],j(a,B(a,o))}var ya=N(),_a=Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:$,conjugate:ea,copy:ta,dot:la,equals:pa,exactEquals:ma,fromEuler:oa,fromMat3:B,getAxisAngle:J,identity:H,invert:sa,len:Ma,length:C,lerp:ha,mul:na,multiply:w,normalize:j,random:aa,rotateX:K,rotateY:Q,rotateZ:U,rotationTo:qa,scale:ua,set:ca,setAxes:xa,setAxisAngle:k,slerp:A,sqlerp:Aa,sqrLen:fa,squaredLength:F,str:ra},Symbol.toStringTag,{value:"Module"}));export{k as a,J as b,w as c,sa as d,ea as e,oa as f,ca as g,ma as h,qa as i};
