import{i as V}from"./chunk-MA4NJINO.js";import{a as L,b as q,m as Z}from"./chunk-ES4GGVYJ.js";import{a as P,b as U,c as A,d as W}from"./chunk-4QRGVGHK.js";import"./chunk-VWT6NXFZ.js";import"./chunk-YIBWVOPM.js";import"./chunk-PY5WUUCV.js";import{f as E}from"./chunk-M4PATAW3.js";import{b as R}from"./chunk-6BV3ATJ4.js";import"./chunk-YNTLVJOI.js";import"./chunk-PVCDKA4D.js";import"./chunk-AXPRNSO3.js";import"./chunk-U4Y7WABQ.js";import"./chunk-OL43UY3L.js";import"./chunk-H2QMNAXT.js";import"./chunk-GKUDWGVQ.js";import{d as z}from"./chunk-NZ7WSL6F.js";import{a as F}from"./chunk-RRDM7P6F.js";import"./chunk-EN6CTWVM.js";import"./chunk-AO7UDTUI.js";import"./chunk-Q7O5PY54.js";import"./chunk-EPTSNNZF.js";import"./chunk-AKDLIRLE.js";import"./chunk-L62KOIOF.js";import"./chunk-5TKTI2G2.js";import"./chunk-MBJHSEMD.js";import"./chunk-SEKMXZL5.js";import"./chunk-MXOOOTCV.js";import"./chunk-7D4IYTAJ.js";import"./chunk-TSNWBMBA.js";import"./chunk-GLWPOGYF.js";import{a as w}from"./chunk-YFBPRKIN.js";import"./chunk-P2YRCTWM.js";import"./chunk-OFZ6SV37.js";import"./chunk-5MNDZ6BX.js";import"./chunk-YSOJWUIW.js";import"./chunk-Q5WFUDPQ.js";import"./chunk-DPZGANVI.js";import"./chunk-T7BKG6V3.js";import"./chunk-R6VC74T7.js";import"./chunk-6WKJD7BM.js";import"./chunk-3CR7P5WT.js";import"./chunk-YRTBL7EE.js";import"./chunk-3FPO2LOS.js";import"./chunk-QNZSBADV.js";import"./chunk-PYQRTZNZ.js";import"./chunk-S4PLWG55.js";import"./chunk-DZAY272R.js";import"./chunk-GYH7NDHH.js";import"./chunk-S3UQHW42.js";import"./chunk-VQHENXDQ.js";import"./chunk-VWF5VUO3.js";import"./chunk-HRP5LYWJ.js";import"./chunk-BIVFGNT6.js";import"./chunk-7PEPFLZH.js";import"./chunk-BRVOQZDM.js";import"./chunk-3M7VXIQH.js";import"./chunk-TBYT66N3.js";import"./chunk-5PTS4JDF.js";import"./chunk-MUI46NAG.js";import"./chunk-N27U3N2T.js";import"./chunk-4R5NBZMW.js";import"./chunk-NDYVXEZ5.js";import"./chunk-CMMPCPP5.js";import"./chunk-4DLSYLKE.js";import"./chunk-VPXBKZQM.js";import"./chunk-ZTKK3KB7.js";import"./chunk-GZXWFBZI.js";import"./chunk-B7IARA3F.js";import"./chunk-IZVEJCCI.js";import"./chunk-TEY6TKJV.js";import"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import"./chunk-GGZQ5GCM.js";import"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import"./chunk-BMVJCP2M.js";import"./chunk-GMC3I5VG.js";import"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import{t as O}from"./chunk-3IBUFXWY.js";import"./chunk-BP73DJTS.js";import{a as x,b as M,g as B}from"./chunk-JEGVIFEP.js";var J="picture-fill",N="picture-marker",Q="simple-fill",X="simple-line",Y="simple-marker",_="text",$="Aa",ee=L.size,j=L.maxSize,ae=L.maxOutlineSize,H=L.lineWidth,I=225,te=document.createElement("canvas");function K(a,e){let n=te.getContext("2d"),t=[];e&&(e.weight&&t.push(e.weight),e.size&&t.push(e.size+"px"),e.family&&t.push(e.family)),n.font=t.join(" ");let{width:r,actualBoundingBoxLeft:i,actualBoundingBoxRight:f,actualBoundingBoxAscent:h,actualBoundingBoxDescent:c}=n.measureText(a);return{width:Math.ceil(Math.max(r,i+f)),height:Math.ceil(h+c),x:Math.floor(i),y:Math.floor((h-c)/2)}}function k(a){let e=a?.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}function ne(a,e){return B(this,null,function*(){let n=e.fill,t=a.color;if(n?.type==="pattern"&&t&&a.type!==J){let r=yield U(n.src,t.toCss(!0));n.src=r,e.fill=n}})}function le(a,e,n,t){return B(this,null,function*(){if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{yield R(a.font)}catch{}let{width:r,height:i}=k(t);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){let{width:f,height:h,x:c,y:d}=K(e.shape.text,{weight:e.font?.weight,size:e.font?.size,family:e.font?.family});n[0]=r??f,n[1]=i??h,e.shape.x=c,e.shape.y=d;let p="angle"in a?a.angle:null;if(t?.rotation!=null&&(p=(p??0)+t.rotation),p){let l=p*(Math.PI/180),o=Math.abs(Math.sin(l)),v=Math.abs(Math.cos(l));n[1]=n[0]*o+n[1]*v}}})}function oe(a,e,n,t,r){if(a.haloColor!=null&&a.haloSize!=null){r.masking??=n.map(()=>[]);let i=w(a.haloSize);t[0]+=i,t[1]+=i,n.unshift([M(x({},e),{fill:null,stroke:{color:a.haloColor,width:2*i,join:"round",cap:"round"}})]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:t[0]+2*z,height:t[1]+2*z},fill:[255,255,255],stroke:null},M(x({},e),{fill:[0,0,0,0],stroke:null})])}a.backgroundColor==null&&a.borderLineColor==null||(t[0]+=2*z,t[1]+=2*z,n.unshift([{shape:{type:"rect",x:0,y:0,width:t[0],height:t[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),r.masking?.unshift([]))}function G(a,e){return a>e?"dark":"light"}function ie(a,e){let n=typeof e?.size=="number"?e?.size:null,t=n!=null?w(n):null,r=e?.maxSize!=null?w(e.maxSize):null,i="angle"in a?a.angle:null;e?.rotation!=null&&(i=(i??0)+e.rotation);let f=P(a),h=A(a);se(a,245)!=="dark"||e?.ignoreWhiteSymbols||(h=M(x({width:.75},h),{color:"#bdc3c7"}));let c={shape:null,fill:f,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,ae));let d=h?.width||0,p=e?.size!=null&&(e?.scale==null||e?.scale),l=0,o=0,v=!1;switch(a.type){case Y:{let u=a.style,{width:m,height:s}=k(e),b=m===s&&m!=null?m:t??Math.min(w(a.size),r||j);switch(l=b,o=b,u){case"circle":c.shape={type:"circle",cx:0,cy:0,r:.5*b},p||(l+=d,o+=d);break;case"cross":c.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[l,.5*o]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,o]}]};break;case"diamond":c.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*o]},{command:"L",values:[.5*l,o]},{command:"Z",values:[]}]},p||(l+=d,o+=d);break;case"square":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},p||(l+=d,o+=d),i&&(v=!0);break;case"triangle":c.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},p||(l+=d,o+=d),i&&(v=!0);break;case"x":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,o]},{command:"M",values:[l,0]},{command:"L",values:[0,o]}]},i&&(v=!0);break;case"path":c.shape={type:"path",path:a.path||""},p||(l+=d,o+=d),i&&(v=!0),p=!0}break}case X:{let{width:u,height:m}=k(e),s=W(h).reduce((D,C)=>D+C,0),b=s&&Math.ceil(H/s),g=m??t??d,y=u??(s*b||H);h&&(h.width=g),l=y,o=g,p=!0,c.shape={type:"path",path:[{command:"M",values:[g/2,o/2]},{command:"L",values:[l-g/2,o/2]}]};break}case J:case Q:{let u=typeof e?.symbolConfig=="object"&&!!e?.symbolConfig?.isSquareFill,{width:m,height:s}=k(e);l=!u&&m!==s||m==null?t??ee:m,o=!u&&m!==s||s==null?l:s,p||(l+=d,o+=d),p=!0,c.shape=u?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:q.fill[0];break}case N:{let u=Math.min(w(a.width),r||j),m=Math.min(w(a.height),r||j),{width:s,height:b}=k(e),g=s===b&&s!=null?s:t??Math.max(u,m),y=u/m;l=y<=1?Math.ceil(g*y):g,o=y<=1?g:Math.ceil(g/y),c.shape={type:"image",x:-Math.round(l/2),y:-Math.round(o/2),width:l,height:o,src:a.url||""},i&&(v=!0);break}case _:{let u=a,m=e?.overrideText||u.text||$,s=u.font,{width:b,height:g}=k(e),y=g??t??Math.min(w(s.size),r||j),{width:D,height:C}=K(m,{weight:s.weight,size:y,family:s.family}),S=/[\uE600-\uE6FF]/.test(m);l=b??(S?y:D),o=S?y:C;let T=.5*(S?y:C);S&&(T+=5),c.shape={type:"text",text:m,x:u.xoffset||0,y:u.yoffset||T,align:"middle",alignBaseline:u.verticalAlignment,decoration:s&&s.decoration,rotated:u.rotated,kerning:u.kerning},c.font=s&&{size:y,style:s.style,decoration:s.decoration,weight:s.weight,family:s.family};break}}return{shapeDescriptor:c,size:[l,o],renderOptions:{node:e?.node,scale:p,opacity:e?.opacity,rotations:[i],useRotationSize:v,effectView:e?.effectView,ariaLabel:e?.ariaLabel}}}function ye(a,e){return B(this,null,function*(){let{shapeDescriptor:n,size:t,renderOptions:r}=ie(a,e);if(!n.shape)throw new O("symbolPreview: renderPreviewHTML2D","symbol not supported.");yield ne(a,n),yield le(a,n,t,e);let i=[[n]];if(typeof e?.symbolConfig=="object"&&e?.symbolConfig?.applyColorModulation){let f=.6*t[0];i.unshift([M(x({},n),{offset:[-f,0],fill:Z(n.fill,-.3)})]),i.push([M(x({},n),{offset:[f,0],fill:Z(n.fill,.3)})]),t[0]+=2*f,r.scale=!1}return a.type==="text"&&oe(a,n,i,t,r),V(i,t,r)})}function se(a,e=I){let n=P(a),t=A(a),r=!n||"type"in n?null:new F(n),i=t?.color?new F(t?.color):null,f=r?G(E(r),e):null,h=i?G(E(i),e):null;return h?f?f===h?f:e>=I?"light":"dark":h:f}export{se as getContrastingBackgroundTheme,ie as getRenderSymbolParameters,ye as previewSymbol2D};
