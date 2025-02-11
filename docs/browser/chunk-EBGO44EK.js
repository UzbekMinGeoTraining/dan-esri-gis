import{a as p}from"./chunk-HWN5REN7.js";import{a as h}from"./chunk-YRTBL7EE.js";import{l as m}from"./chunk-3FPO2LOS.js";var o=h(),g=class{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}};function y(n,t="Assertion"){if(!n){let r=new Error(t).stack;throw new g(`${t} at ${r}`)}}function E(n,t){n||(t=t||"",console.warn("Verify failed: "+t+`
`+new Error("verify").stack))}function T(n,t,r,s){let a,i=(r[0]-n[0])/t[0],e=(s[0]-n[0])/t[0];i>e&&(a=i,i=e,e=a);let c=(r[1]-n[1])/t[1],f=(s[1]-n[1])/t[1];if(c>f&&(a=c,c=f,f=a),i>f||c>e)return!1;c>i&&(i=c),f<e&&(e=f);let l=(r[2]-n[2])/t[2],u=(s[2]-n[2])/t[2];return l>u&&(a=l,l=u,u=a),!(i>u||l>e)&&(u<e&&(e=u),!(e<0))}function $(n,t,r,s,a,i=p()){let e=(s[a]-r[a])*(t[0]-n[0])-(s[0]-r[0])*(t[a]-n[a]),c=(s[0]-r[0])*(n[a]-r[a])-(s[a]-r[a])*(n[0]-r[0]);if(e===0)return!1;let f=c/e;return i[0]=n[0]+f*(t[0]-n[0]),i[1]=n[a]+f*(t[a]-n[a]),!0}function k(n,t,r,s,a){o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=1,m(o,o,t),a.length>2&&(a[2]=-o[2]),m(o,o,r),y(o[3]!==0),a[0]=o[0]/o[3],a[1]=o[1]/o[3],a[2]=o[2]/o[3],a[0]=(.5*a[0]+.5)*s[2]+s[0],a[1]=(.5*a[1]+.5)*s[3]+s[1]}function v(n,t){return Math.log(n)/Math.log(t)}function A(n){return n[0]===1&&n[1]===0&&n[2]===0&&n[3]===0&&n[4]===0&&n[5]===1&&n[6]===0&&n[7]===0&&n[8]===0&&n[9]===0&&n[10]===1&&n[11]===0&&n[15]===1}export{y as a,E as b,T as c,$ as d,k as e,v as f,A as g};
