import{a as n,b as m,e as L,l as O,m as S}from"./chunk-AOA5JMXK.js";import{c as R,d as _,n as N}from"./chunk-5MNDZ6BX.js";import{a as p}from"./chunk-PYQRTZNZ.js";import{h as C}from"./chunk-5PTS4JDF.js";import{m as A}from"./chunk-4DLSYLKE.js";function P(a,i,t){let u=Math.sin(a),s=Math.cos(a),r=Math.sin(i),l=Math.cos(i),o=t;return o[0]=-u,o[4]=-r*s,o[8]=l*s,o[12]=0,o[1]=s,o[5]=-r*u,o[9]=l*u,o[13]=0,o[2]=0,o[6]=l,o[10]=r,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1,o}function F(a,i,t){return P(a,i,t),_(t,t),t}function g(a,i,t,u){if(a==null||u==null)return!1;let s=L(a,O),r=L(u,S);if(s===r&&!T(r)&&(s!==n.UNKNOWN||A(a,u)))return N(t,i),!0;if(T(r)){let o=m[s][n.LON_LAT],f=m[n.LON_LAT][r];return o!=null&&f!=null&&(o(i,0,c,0),f(c,0,e,0),P(E*c[0],E*c[1],t),t[12]=e[0],t[13]=e[1],t[14]=e[2],!0)}let l=T(s);if((r===n.WEB_MERCATOR||r===n.PLATE_CARREE||r===n.WGS84||r===n.CGCS2000)&&(s===n.WGS84||l||s===n.WEB_MERCATOR||s===n.CGCS2000)){let o=m[s][n.LON_LAT],f=m[n.LON_LAT][r];return o!=null&&f!=null&&(o(i,0,c,0),f(c,0,e,0),l?F(E*c[0],E*c[1],t):R(t),t[12]=e[0],t[13]=e[1],t[14]=e[2],!0)}return!1}function T(a){return a===n.SPHERICAL_ECEF||a===n.SPHERICAL_MARS_PCPF||a===n.SPHERICAL_MOON_PCPF||a===n.WGS84_ECEF}var E=C(1),c=p(),e=p();export{P as a,g as b};
