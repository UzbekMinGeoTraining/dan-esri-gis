import{e as x}from"./chunk-LVPMJTA6.js";import{F as N,n as u}from"./chunk-EPTSNNZF.js";import{d as z,e as A,f as Z,g as k}from"./chunk-RDHMB7M5.js";import{a as d}from"./chunk-YSOJWUIW.js";import{A as b,i as l}from"./chunk-6WKJD7BM.js";import{a as g}from"./chunk-NDYVXEZ5.js";import{K as f}from"./chunk-GGZQ5GCM.js";import{M as y,y as h}from"./chunk-BP73DJTS.js";var F=class{constructor(e,s,r){this.uid=e,this.geometry=s,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}};function E(t){return t.geometry!=null}var I=class{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}};function H(t,e){let s=d.fromJSON(t.geometryType),r=g.fromJSON(t.spatialReference),n=t.transform,o=t.objectIdFieldName,M=e?.maxStringAttributeLength,j=e?.maxStringAttributeFields,c,S=t.features.map(m=>{let i=O(m,s,r,t.objectIdFieldName),a=i.geometry;if(P(i.attributes,j,M,v=>{c??=[];let p=T(i,o);p!=null&&c.push({objectId:p,attribute:v})}),a!=null&&n)switch(a.type){case"point":i.geometry=A(n,a,a);break;case"multipoint":i.geometry=z(n,a,a);break;case"polygon":i.geometry=Z(n,a,a);break;case"polyline":i.geometry=k(n,a,a);break;case"extent":case"mesh":i.geometry=a}return i});return{geometryType:s,features:S,spatialReference:r,fields:t.fields?.map(m=>x.fromJSON(m))??[],objectIdFieldName:t.objectIdFieldName,globalIdFieldName:t.globalIdFieldName,geohashFieldName:t.geohashFieldName,geometryProperties:t.geometryProperties,hasZ:t.hasZ,hasM:t.hasM,exceededTransferLimit:t.exceededTransferLimit,transform:null,missingAttributes:c}}function O(t,e,s,r){return{uid:f(),objectId:r&&t.attributes?t.attributes[r]:null,attributes:t.attributes,geometry:R(t.geometry,e,s),visible:!0}}function R(t,e,s){if(t==null)return null;switch(e){case"point":{let r=t;return{x:r.x,y:r.y,z:r.z,m:r.m,hasZ:r.z!=null,hasM:r.m!=null,type:"point",spatialReference:s}}case"polyline":{let r=t;return{paths:r.paths,hasZ:!!r.hasZ,hasM:!!r.hasM,type:"polyline",spatialReference:s}}case"polygon":{let r=t;return{rings:r.rings,hasZ:!!r.hasZ,hasM:!!r.hasM,type:"polygon",spatialReference:s}}case"multipoint":{let r=t;return{points:r.points,hasZ:!!r.hasZ,hasM:!!r.hasM,type:"multipoint",spatialReference:s}}}}function w(t){if(t==null)return 0;let e=32;switch(t.type){case"point":e+=42;break;case"polyline":case"polygon":{let s=0,r=2+(t.hasZ?1:0)+(t.hasM?1:0),n=t.type==="polyline"?t.paths:t.rings;for(let o of n)s+=o.length;e+=8*s*r+64,e+=128*s,e+=34,e+=32*(n.length+1);break}case"multipoint":{let s=2+(t.hasZ?1:0)+(t.hasM?1:0),r=t.points.length;e+=8*r*s+64,e+=128*r,e+=34,e+=32;break}case"extent":e+=98,t.hasM&&(e+=32),t.hasZ&&(e+=32);break;case"mesh":e+=y(t.vertexAttributes.position,t.vertexAttributes.normal,t.vertexAttributes.uv,t.vertexAttributes.tangent)}return e}function Q(t){let e=32;return e+=h(t.attributes),e+=3,e+=8+w(t.geometry),e}function X(t){if(t==null)return 0;switch(t.type){case"point":return 1;case"polyline":{let e=0;for(let s of t.paths)e+=s.length;return e}case"polygon":{let e=0;for(let s of t.rings)e+=s.length;return e}case"multipoint":return t.points.length;case"extent":return 2;case"mesh":{let e=t.vertexAttributes&&t.vertexAttributes.position;return e?e.length/3:0}default:return}}function Y(t){if(t==null)return!1;switch(t.type){case"extent":case"point":return!0;case"polyline":for(let e of t.paths)if(e.length>0)return!0;return!1;case"polygon":for(let e of t.rings)if(e.length>0)return!0;return!1;case"multipoint":return t.points.length>0;case"mesh":return!t.loaded||t.vertexAttributes.position.length>0}}function _(t,e){switch(N(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[3]=t.x,e[1]=e[4]=t.y,t.hasZ&&(e[2]=e[5]=t.z);break;case"polyline":for(let s=0;s<t.paths.length;s++)u(e,t.paths[s],!!t.hasZ);break;case"polygon":for(let s=0;s<t.rings.length;s++)u(e,t.rings[s],!!t.hasZ);break;case"multipoint":u(e,t.points,!!t.hasZ);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[3]=t.xmax,e[4]=t.ymax,t.zmin!=null&&(e[2]=t.zmin),t.zmax!=null&&(e[5]=t.zmax)}}function $(t,e){switch(b(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[2]=t.x,e[1]=e[3]=t.y;break;case"polyline":for(let s=0;s<t.paths.length;s++)l(e,t.paths[s]);break;case"polygon":for(let s=0;s<t.rings.length;s++)l(e,t.rings[s]);break;case"multipoint":l(e,t.points);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax}}function T(t,e){return t.objectId!=null?t.objectId:t.attributes&&e?t.attributes[e]:null}function P(t,e,s,r){if(e?.size&&s!=null&&t)for(let n in t){if(!e.has(n))continue;let o=t[n];typeof o=="string"&&o.length>s&&(r(n),t[n]="")}}export{F as a,E as b,I as c,H as d,Q as e,X as f,Y as g,_ as h,$ as i,T as j,P as k};
