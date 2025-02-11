import{a as v,b as _,d as $}from"./chunk-TWW3KW7Z.js";import{o as Y,p as Z}from"./chunk-T7BKG6V3.js";import{a as J}from"./chunk-NDYVXEZ5.js";import{P as H,p as V,u as X}from"./chunk-4DLSYLKE.js";import{A as T}from"./chunk-TFUPB3ZG.js";import{t as C}from"./chunk-3IBUFXWY.js";function ee(e){if(!e)return null;let n=e.wkid;if(n)return $[n];let t=e.wkt2??e.wkt;return t?re(t):null}function re(e){let n=_.exec(e);if(!n||n.length!==2)return null;let t=n[1].split(",");if(!t||t.length<3)return null;let h=parseFloat(t[1]),i=parseFloat(t[2]);return isNaN(h)||isNaN(i)?null:{a:h,f:i===0?0:1/i}}function E(e){let n=ee(e);if(oe(n))return n;let t=n.a*(1-n.f);return Object.assign(n,{b:t,eSq:1-(t/n.a)**2,radius:(2*n.a+t)/3,densificationRatio:1e4/((2*n.a+t)/3)})}function oe(e){return e!=null&&"b"in e&&"eSq"in e&&"radius"in e}function P(e,n,t){let{a:h,eSq:i}=E(t),s=Math.sqrt(i),a=Math.sin(n[1]*v),l=h*n[0]*v,o;return i>0?o=h*((1-i)*(a/(1-i*(a*a))-1/(2*s)*Math.log((1-s*a)/(1+s*a))))*.5:o=h*a,e[0]=l,e[1]=o,e}function O(e){return V(e)&&!!ee(e)}function Re(e,n="square-meters"){if(e.some(a=>!O(a.spatialReference)))throw new C("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");let t=[];for(let a=0;a<e.length;a++){let l=e[a],o=l.spatialReference,{radius:c,densificationRatio:p}=E(o),r=c*p;t.push(ce(l,r))}let h=[],i=[0,0],s=[0,0];for(let a=0;a<t.length;a++){let{rings:l,spatialReference:o}=t[a],c=0;for(let p=0;p<l.length;p++){let r=l[p];P(i,r[0],o),P(s,r[r.length-1],o);let d=s[0]*i[1]-i[0]*s[1];for(let m=0;m<r.length-1;m++)P(i,r[m+1],o),P(s,r[m],o),d+=s[0]*i[1]-i[0]*s[1];c+=d}c=H(c,"square-meters",n),h.push(c/-2)}return h}function ze(e,n="meters"){if(!e)throw new C("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some(h=>!O(h.spatialReference)))throw new C("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");let t=[];for(let h=0;h<e.length;h++){let i=e[h],{spatialReference:s}=i,a=i.type==="polyline"?i.paths:i.rings,l=0;for(let o=0;o<a.length;o++){let c=a[o],p=0;for(let r=1;r<c.length;r++){let d=c[r-1][0],m=c[r][0],M=c[r-1][1],g=c[r][1];if(M!==g||d!==m){let u=new U;te(u,[d,M],[m,g],s),p+=u.distance}}l+=p}l=H(l,"meters",n),t.push(l)}return t}function ce(e,n){if(e.type!=="polyline"&&e.type!=="polygon")throw new C("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");let{spatialReference:t}=e;if(!O(t))throw new C("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");let h=e.type==="polyline"?e.paths:e.rings,i=[],s=[0,0],a=new U;for(let o of h){let c=[];i.push(c),c.push([o[0][0],o[0][1]]);let p,r,d=o[0][0],m=o[0][1];for(let M=0;M<o.length-1;M++){if(p=o[M+1][0],r=o[M+1][1],d===p&&m===r)continue;let g=[d,m];te(a,[d,m],[p,r],t);let{azimuth:u,distance:R}=a,w=R/n;if(w>1){for(let A=1;A<=w-1;A++)K(s,g,u,A*n,t),c.push(s.slice());K(s,g,u,(R+Math.floor(w-1)*n)/2,t),c.push(s.slice())}K(s,g,u,R,t),c.push(s.slice()),d=s[0],m=s[1]}}let l=T(J,t);return e.type==="polyline"?new Z({paths:i,spatialReference:l}):new Y({rings:i,spatialReference:l})}var U=class{constructor(n=0,t=void 0,h=void 0){this.distance=n,this.azimuth=t,this.reverseAzimuth=h}};function K(e,n,t,h,i){let s=n[0],a=n[1],l=s*v,o=a*v,c=(t??0)*v,{a:p,b:r,f:d}=E(i),m=Math.sin(c),M=Math.cos(c),g=(1-d)*Math.tan(o),u=1/Math.sqrt(1+g*g),R=g*u,w=Math.atan2(g,M),A=u*m,G=A*A,b=1-G,f=b*(p*p-r*r)/(r*r),k=1+f/16384*(4096+f*(f*(320-175*f)-768)),F=f/1024*(256+f*(f*(74-47*f)-128)),z,x,y,j,N=h/(r*k),q=2*Math.PI;for(;Math.abs(N-q)>1e-12;)y=Math.cos(2*w+N),z=Math.sin(N),x=Math.cos(N),j=F*z*(y+F/4*(x*(2*y*y-1)-F/6*y*(4*z*z-3)*(4*y*y-3))),q=N,N=h/(r*k)+j;let S=R*z-u*x*M,I=Math.atan2(R*x+u*z*M,(1-d)*Math.sqrt(G+S*S)),W=Math.atan2(z*m,u*x-R*z*M),D=d/16*b*(4+d*(4-3*b)),L=I/v,B=(l+(W-(1-D)*d*A*(N+D*z*(y+D*x*(2*y*y-1)))))/v;return e[0]=B,e[1]=L,e}function te(e,n,t,h){let i=n[0]*v,s=n[1]*v,a=t[0]*v,l=t[1]*v,{a:o,b:c,f:p,radius:r}=E(h),d=a-i,m=Math.atan((1-p)*Math.tan(s)),M=Math.atan((1-p)*Math.tan(l)),g=Math.sin(m),u=Math.cos(m),R=Math.sin(M),w=Math.cos(M),A,G,b,f,k,F,z,x,y,j,N=1e3,q=d;do{if(z=Math.sin(q),x=Math.cos(q),b=Math.sqrt(w*z*(w*z)+(u*R-g*w*x)*(u*R-g*w*x)),b===0)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;k=g*R+u*w*x,F=Math.atan2(b,k),y=u*w*z/b,G=1-y*y,f=k-2*g*R/G,isNaN(f)&&(f=0),j=p/16*G*(4+p*(4-3*G)),A=q,q=d+(1-j)*p*y*(F+j*b*(f+j*k*(2*f*f-1)))}while(Math.abs(q-A)>1e-12&&--N>0);if(N===0){let B=r,ne=Math.acos(Math.sin(s)*Math.sin(l)+Math.cos(s)*Math.cos(l)*Math.cos(a-i))*B,Q=a-i,ie=Math.sin(Q)*Math.cos(l),se=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(Q),ae=Math.atan2(ie,se);return e.azimuth=ae/v,e.distance=ne,e.reverseAzimuth=void 0,e}let S=G*(o*o-c*c)/(c*c),I=S/1024*(256+S*(S*(74-47*S)-128)),W=c*(1+S/16384*(4096+S*(S*(320-175*S)-768)))*(F-I*b*(f+I/4*(k*(2*f*f-1)-I/6*f*(4*b*b-3)*(4*f*f-3)))),D=Math.atan2(w*Math.sin(q),u*R-g*w*Math.cos(q)),L=Math.atan2(u*Math.sin(q),u*R*Math.cos(q)-g*w);return e.azimuth=D/v,e.distance=W,e.reverseAzimuth=L/v,e}function be(e){return O(e)?e:X(e)?J.WGS84:null}export{O as a,Re as b,ze as c,U as d,K as e,te as f,be as g};
