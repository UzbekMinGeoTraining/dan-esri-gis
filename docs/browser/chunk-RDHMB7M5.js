function V(n){return n?{originPosition:n.originPosition==="upper-left"?"upperLeft":n.originPosition==="lower-left"?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance,1,1]:[1,1,1,1],translate:n.extent!=null?[n.extent.xmin,n.extent.ymax,n.extent.zmin??0,n.extent.mmin??0]:[0,0,0,0]}:null}function d(n){return n.originPosition==="lowerLeft"&&n.scale.length===4&&n.translate.length===4}function x(n){if(d(n))return n;let{originPosition:t,scale:r,translate:s}=n,a=r[0]??1,o=r[1]??1;return{originPosition:"lowerLeft",scale:[a,t==="lowerLeft"?o:-o,r[2]??1,r[3]??1],translate:[s[0]??0,s[1]??0,s[2]??0,s[3]??0]}}function Z({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function P({scale:n,translate:t},r){return Math.round((r-t[1])/n[1])}function N({scale:n,translate:t},r){return Math.round(((r??0)-t[2])/n[2])}function A({scale:n,translate:t},r){return r?Math.round((r-t[3])/n[3]):0}function M({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return r*n[1]+t[1]}function g({scale:n,translate:t},r){return(r??0)*n[2]+t[2]}function z({scale:n,translate:t},r){return r?r*n[3]+t[3]:0}function q(n,t){return n&&t?E:n&&!t?w:!n&&t?T:Y}var Y=(n,t)=>{let r=new Array(t.length);if(!t.length)return r;let s=t[0],a=M(n,s[0]),o=y(n,s[1]);r[0]=[a,o];let{scale:i,originPosition:e}=n,l=i[0],c=e==="lowerLeft"?i[1]:-i[1];for(let u=1;u<t.length;u++){let[h,f]=t[u];a+=l*h,o+=c*f,r[u]=[a,o]}return r},w=(n,t)=>{let r=new Array(t.length);if(!t.length)return r;let s=t[0],a=M(n,s[0]),o=y(n,s[1]);r[0]=[a,o,g(n,s[2])];let{scale:i,originPosition:e}=n,l=i[0],c=e==="lowerLeft"?i[1]:-i[1];for(let u=1;u<t.length;u++){let[h,f,m]=t[u];a+=l*h,o+=c*f,r[u]=[a,o,g(n,m)]}return r},T=(n,t)=>{let r=new Array(t.length);if(!t.length)return r;let s=t[0],a=M(n,s[0]),o=y(n,s[1]);r[0]=[a,o,z(n,s[2])];let{scale:i,originPosition:e}=n,l=i[0],c=e==="lowerLeft"?i[1]:-i[1];for(let u=1;u<t.length;u++){let[h,f,m]=t[u];a+=l*h,o+=c*f,r[u]=[a,o,z(n,m)]}return r},E=(n,t)=>{let r=new Array(t.length);if(!t.length)return r;let s=t[0],a=M(n,s[0]),o=y(n,s[1]);r[0]=[a,o,g(n,s[2]),z(n,s[3])];let{scale:i,originPosition:e}=n,l=i[0],c=e==="lowerLeft"?i[1]:-i[1];for(let u=1;u<t.length;u++){let[h,f,m,I]=t[u];a+=l*h,o+=c*f,r[u]=[a,o,g(n,m),z(n,I)]}return r};function p(n,t,r){let s=new Array(r.length);for(let a=0;a<r.length;a++)s[a]=t(n,r[a]);return s}function _(n,t,r){let s=x(n);return t.x=Z(s,r.x),t.y=P(s,r.y),r.z!=null&&(t.z=N(s,r.z)),r.m!=null&&(t.m=A(s,r.m)),t}function Q(n,t,r,s=r?.hasZ??!1,a=r?.hasM??!1){if(r!=null){let o=x(n);t.points=q(s,a)(o,r.points),t.hasZ=s,t.hasM=a}return t}function G(n,t,r,s=r?.z!=null,a=r?.m!=null){if(r==null)return t;let o=x(n);return t.x=M(o,r.x),t.y=y(o,r.y),s&&(t.z=g(o,r.z)),a&&(t.m=z(o,r.m)),t}function O(n,t,r,s=r?.hasZ??!1,a=r?.hasM??!1){if(r!=null){let o=x(n);t.rings=p(o,q(s,a),r.rings),t.hasZ=s,t.hasM=a}return t}function S(n,t,r,s=r?.hasZ??!1,a=r?.hasM??!1){if(r!=null){let o=x(n);t.paths=p(o,q(s,a),r.paths),t.hasZ=s,t.hasM=a}return t}export{V as a,x as b,_ as c,Q as d,G as e,O as f,S as g};
