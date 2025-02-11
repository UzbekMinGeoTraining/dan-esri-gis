import{a as T}from"./chunk-GEZWIVEL.js";import{a as O,b as S}from"./chunk-V5Q4ZJF2.js";import{a as p}from"./chunk-TJH2I4RU.js";import{a as U}from"./chunk-CJTT5UF4.js";import{b as g,c as P}from"./chunk-MBVOWLUI.js";import{f as b}from"./chunk-LAJXTVEO.js";import"./chunk-EUZMXXZJ.js";import"./chunk-7PEPFLZH.js";import"./chunk-BRVOQZDM.js";import"./chunk-3M7VXIQH.js";import"./chunk-TBYT66N3.js";import"./chunk-N27U3N2T.js";import"./chunk-4R5NBZMW.js";import"./chunk-NDYVXEZ5.js";import"./chunk-CMMPCPP5.js";import"./chunk-4DLSYLKE.js";import"./chunk-VPXBKZQM.js";import"./chunk-ZTKK3KB7.js";import"./chunk-GZXWFBZI.js";import"./chunk-B7IARA3F.js";import"./chunk-IZVEJCCI.js";import"./chunk-TEY6TKJV.js";import{L,h as I}from"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import"./chunk-GGZQ5GCM.js";import"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import"./chunk-BMVJCP2M.js";import"./chunk-GMC3I5VG.js";import"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import{t as d}from"./chunk-3IBUFXWY.js";import"./chunk-BP73DJTS.js";import{a as v,b as w,g as f}from"./chunk-JEGVIFEP.js";var J={FeatureLayer:!0,SceneLayer:!0};function B(a){return f(this,null,function*(){let{properties:t,url:e}=a,s=w(v({},t),{url:e}),l=yield M(e,t?.customParameters),{Constructor:r,layerId:n,sourceJSON:c,parsedUrl:i,layers:u,tables:o}=l;if(u.length+o.length===0)return n!=null&&(s.layerId=n),c!=null&&(s.sourceJSON=c),new r(s);let y=new(yield import("./chunk-7V2JNCPE.js")).default({title:i.title});return yield k(y,l,s),y})}function C(a,t){return a?a.find(({id:e})=>e===t):null}function F(a,t,e,s,l){let r=w(v({},l),{layerId:t});return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in s.prototype&&(r.sublayerTitleMode="service-name"),new s(r)}function k(a,t,e){return f(this,null,function*(){let s=t.sublayerConstructorProvider;for(let{id:l,serverUrl:r}of t.layers){let n=C(t.sublayerInfos,l),c=F(r,l,n,(n&&s?.(n))??t.Constructor,e);a.add(c)}if(t.tables.length){let l=yield h("FeatureLayer");t.tables.forEach(({id:r,serverUrl:n})=>{let c=F(n,r,C(t.tableInfos,r),l,e);a.tables.add(c)})}})}function M(a,t){return f(this,null,function*(){let e=g(a);if(e==null&&(e=yield V(a,t)),e==null)throw new d("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});let{serverType:s,sublayer:l}=e,r,n={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=s==="FeatureServer",i=s==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?l??void 0:void 0,layers:[],tables:[]};switch(s){case"MapServer":if(l!=null){let{type:o}=yield p(a,{customParameters:t});switch(r="FeatureLayer",o){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new d("arcgis-layers:unsupported",`fromUrl() not supported for "${o}" layers`)}}else r=(yield E(a,t))?"TileLayer":"MapImageLayer";break;case"ImageServer":{let o=yield p(a,{customParameters:t}),{tileInfo:y,cacheType:m}=o;r=y?y?.format?.toUpperCase()!=="LERC"||m&&m.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{let o=yield p(e.url.path,{customParameters:t});if(r="SceneLayer",o){let y=o?.layers;if(o?.layerType==="Voxel")r="VoxelLayer";else if(y?.length){let m=y[0]?.layerType;m!=null&&b[m]!=null&&(r=b[m])}}break}case"3DTilesServer":throw new d("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){let o=yield p(a,{customParameters:t});u.sourceJSON=o,r=S(o.type)}break;default:r=n[s]}if(J[r]&&l==null){let o=yield x(a,s,t);if(c&&(u.sublayerInfos=o.layerInfos,u.tableInfos=o.tableInfos),o.layers.length+o.tables.length!==1)u.layers=o.layers,u.tables=o.tables,c&&o.layerInfos?.length&&(u.sublayerConstructorProvider=yield A(o.layerInfos));else if(c||i){let y=o.layerInfos?.[0]??o.tableInfos?.[0];if(u.layerId=o.layers[0]?.id??o.tables[0]?.id,u.sourceJSON=y,c){let m=y?.type;r=S(m)}}}return u.Constructor=yield h(r),u})}function V(a,t){return f(this,null,function*(){let e=yield p(a,{customParameters:t}),s=null,l=null,r=e.type;if(r==="Feature Layer"||r==="Table"?(s="FeatureServer",l=e.id??null):r==="indexedVector"?s="VectorTileServer":e.hasOwnProperty("mapName")?s="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?s="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":e.hasOwnProperty("streamUrls")?s="StreamServer":N(e)?(s="SceneServer",l=e.id):e.hasOwnProperty("layers")&&N(e.layers?.[0])&&(s="SceneServer"),!s)return null;let n=l!=null?P(a):null;return{title:n!=null&&e.name||L(a),serverType:s,sublayer:l,url:{path:n!=null?n.serviceUrl:I(a).path}}})}function N(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}function x(a,t,e){return f(this,null,function*(){let s,l,r=!1;switch(t){case"FeatureServer":{let i=yield O(a,{customParameters:e});r=!!i.layersJSON,s=i.layersJSON||i.serviceJSON;break}case"SceneServer":{let i=yield G(a,e);s=i.serviceInfo,l=i.tableServerUrl;break}default:s=yield p(a,{customParameters:e})}let n=s?.layers,c=s?.tables;return{layers:n?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:l,id:i.id})).reverse()||[],layerInfos:r?n:[],tableInfos:r?c:[]}})}function G(a,t){return f(this,null,function*(){let e=yield p(a,{customParameters:t});if(!e.layers?.[0])return{serviceInfo:e};try{let{serverUrl:l}=yield T(a),r=yield p(l,{customParameters:t}).catch(()=>null);return r&&(e.tables=r.tables),{serviceInfo:e,tableServerUrl:l}}catch{return{serviceInfo:e}}})}function h(a){return f(this,null,function*(){return(0,U[a])()})}function E(a,t){return f(this,null,function*(){return(yield p(a,{customParameters:t})).tileInfo})}function A(a){return f(this,null,function*(){if(!a.length)return;let t=new Set,e=[];for(let{type:r}of a)t.has(r)||(t.add(r),e.push(h(S(r))));let s=yield Promise.all(e),l=new Map;return Array.from(t).forEach((r,n)=>{l.set(r,s[n])}),r=>l.get(r.type)})}export{B as fromUrl};
