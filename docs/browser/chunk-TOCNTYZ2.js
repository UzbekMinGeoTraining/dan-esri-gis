import{a as C,b as P}from"./chunk-Y6H3NTW7.js";import{a as L}from"./chunk-5PTS4JDF.js";function D(o,n,s){let e=Array.isArray(o),r=e?o.length/n:o.byteLength/(4*n),h=e?o:new Uint32Array(o,0,r*n),A=s?.minReduction??0,a=s?.originalIndices||null,I=a?a.length:0,i=s?.componentOffsets||null,m=0;if(i)for(let t=0;t<i.length-1;t++){let c=i[t+1]-i[t];c>m&&(m=c)}else m=r;let w=Math.floor(1.1*m)+1;(u==null||u.length<2*w)&&(u=new Uint32Array(L(2*w)));for(let t=0;t<2*w;t++)u[t]=0;let f=0,d=!!i&&!!a,p=d?I:r,y=P(r),U=new Uint32Array(I),M=1.96,O=A!==0?Math.ceil(4*M*M/(A*A)*A*(1-A)):p,b=1,j=i?i[1]:p;for(let t=0;t<p;t++){if(t===O){let l=1-f/t;if(l+M*Math.sqrt(l*(1-l)/t)<A)return null;O*=2}if(t===j){for(let l=0;l<2*w;l++)u[l]=0;if(a)for(let l=i[b-1];l<i[b];l++)U[l]=y[a[l]];j=i[++b]}let c=d?a[t]:t,H=c*n,q=v(h,H,n),g=q%w,k=f;for(;u[2*g+1]!==0;){if(u[2*g]===q){let l=u[2*g+1]-1;if(R(h,H,l*n,n)){k=y[l];break}}g++,g>=w&&(g-=w)}k===f&&(u[2*g]=q,u[2*g+1]=c+1,f++),y[c]=k}if(A!==0&&1-f/r<A)return null;if(d){for(let t=i[b-1];t<U.length;t++)U[t]=y[a[t]];y=C(U)}let x=e?new Array(f):new Uint32Array(f*n);f=0;for(let t=0;t<p;t++)y[t]===f&&(T(h,(d?a[t]:t)*n,x,f*n,n),f++);if(a&&!d){let t=new Uint32Array(I);for(let c=0;c<t.length;c++)t[c]=y[a[c]];y=C(t)}return{buffer:Array.isArray(x)?x:x.buffer,indices:y,uniqueCount:f}}function R(o,n,s,e){for(let r=0;r<e;r++)if(o[n+r]!==o[s+r])return!1;return!0}function T(o,n,s,e,r){for(let h=0;h<r;h++)s[e+h]=o[n+h]}function v(o,n,s){let e=0;for(let r=0;r<s;r++)e=o[n+r]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}var u=null;export{D as a};
