import{k as u}from"./chunk-3IBUFXWY.js";import{g as i}from"./chunk-JEGVIFEP.js";var d="arial-unicode-ms",l="woff2",f=new Map,h=new Set,o=class{constructor(e,r){this.fontFace=e,this.promise=r}};function b(t){return i(this,null,function*(){let e=y(t),r=g(t),a=f.get(e);if(a)return a.promise;let n=new FontFace(t.family,`url('${u.fontsUrl}/woff2/${r}.${l}') format('${l}')`,{style:t.style,weight:t.weight}),s=document.fonts;if(s.has(n)&&n.status==="loading")return n.loaded;let c=n.load().then(()=>(s.add(n),n));return f.set(e,new o(n,c)),h.add(n),c})}function C(t){return h.has(t)}function F(t){if(!t)return d;let e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function g(t){let e=m(t)+w(t);return F(t.family)+(e.length>0?e:"-regular")}function y(t){let e=m(t)+w(t);return(t.family||d)+(e.length>0?e:"-regular")}function m(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function w(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}export{d as a,b,C as c,F as d,g as e};
