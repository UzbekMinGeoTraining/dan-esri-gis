import{a as w,b as S,c as m,e as x}from"./chunk-GKDKJ4AN.js";import"./chunk-XC5QOYTY.js";import"./chunk-6GQ5JB2B.js";import{a as c,b as h}from"./chunk-R7P6RQXJ.js";import{a as F}from"./chunk-4I7LQWUX.js";import"./chunk-JLNQ6WQT.js";import"./chunk-GB5RQL32.js";import"./chunk-R6S6A5GA.js";import"./chunk-X7XJWAFC.js";import{e as M}from"./chunk-ILCAH2F6.js";import{a as y}from"./chunk-CYCLIMTY.js";import"./chunk-RRDM7P6F.js";import"./chunk-LWJTIQQT.js";import"./chunk-IHBD2IWR.js";import"./chunk-NH3JQE75.js";import"./chunk-XXOIKNT6.js";import"./chunk-DBLGLVAQ.js";import"./chunk-EN6CTWVM.js";import{p as d}from"./chunk-AOA5JMXK.js";import"./chunk-TWW3KW7Z.js";import"./chunk-7W6RATG7.js";import"./chunk-HWN5REN7.js";import{A as g}from"./chunk-2HUIJUS4.js";import"./chunk-P2YRCTWM.js";import"./chunk-5MNDZ6BX.js";import"./chunk-DPZGANVI.js";import"./chunk-YRTBL7EE.js";import"./chunk-3FPO2LOS.js";import"./chunk-QNZSBADV.js";import"./chunk-PYQRTZNZ.js";import"./chunk-5PTS4JDF.js";import{a as p}from"./chunk-NDYVXEZ5.js";import"./chunk-CMMPCPP5.js";import"./chunk-4DLSYLKE.js";import"./chunk-VPXBKZQM.js";import"./chunk-B7IARA3F.js";import"./chunk-IZVEJCCI.js";import"./chunk-TEY6TKJV.js";import"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import"./chunk-GGZQ5GCM.js";import"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import"./chunk-BMVJCP2M.js";import"./chunk-GMC3I5VG.js";import"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import"./chunk-3IBUFXWY.js";import{B as v,u as D}from"./chunk-BP73DJTS.js";import"./chunk-JEGVIFEP.js";var A=class{transform(t){let e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];e.pointIdFilterMap!=null&&r.push(e.pointIdFilterMap.buffer);for(let n of e.attributes)"buffer"in n.values&&v(n.values.buffer)&&n.values.buffer!==e.rgb.buffer&&r.push(n.values.buffer);return Promise.resolve({result:e,transferList:r})}_transform(t){let e=S(t.schema,t.geometryBuffer),r=e.length/3,n=null,i=new Array,o=m(t.primaryAttributeData,e,r);t.primaryAttributeData!=null&&o&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});let u=m(t.modulationAttributeData,e,r);t.modulationAttributeData!=null&&u&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});let a=w(t.rendererInfo,o,u,r);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){let l=t.filterAttributesData.filter(D).map(f=>{let j=m(f,e,r),I={attributeInfo:f.attributeInfo,values:j};return i.push(I),I});n=new Uint32Array(r),r=x(e,a,n,t.filterInfo,l)}for(let l of t.userAttributesData){let f=m(l,e,r);i.push({attributeInfo:l.attributeInfo,values:f})}3*r<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*r))),R(e,r,t.elevationOffset);let b=B(e,r,F.fromData(t.obbData),p.fromJSON(t.inSR),p.fromJSON(t.outSR));return{obbData:t.obbData,points:b,rgb:a,attributes:i,pointIdFilterMap:n}}};function B(s,t,e,r,n){if(!d(s,r,0,s,n,0,t))throw new Error("Can't reproject");let i=h(e.center),o=c(),u=c(),a=h(e.halfSize);M(O,e.quaternion);let b=new Float32Array(3*t);for(let l=0;l<t;l++){let f=3*l;o[0]=s[f]-i[0],o[1]=s[f+1]-i[1],o[2]=s[f+2]-i[2],g(u,o,O),a[0]=Math.max(a[0],Math.abs(u[0])),a[1]=Math.max(a[1],Math.abs(u[1])),a[2]=Math.max(a[2],Math.abs(u[2])),b[f++]=o[0],b[f++]=o[1],b[f]=o[2]}return e.halfSize=a,b}function R(s,t,e){if(e!==0)for(let r=0;r<t;r++)s[3*r+2]+=e}var O=y();function L(){return new A}export{L as default};
