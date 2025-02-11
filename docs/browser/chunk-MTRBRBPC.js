import{a as d,c as f,h as T}from"./chunk-ACVF7Z7X.js";import{e as g}from"./chunk-LVPMJTA6.js";import{d as c}from"./chunk-MUI46NAG.js";import{y as m}from"./chunk-N27U3N2T.js";var F,G;function E(e){return g.fromJSON(e.toJSON())}function w(e){return e.toJSON?e.toJSON():e}function k(e){return e instanceof Date}function L(e){return e instanceof c}function h(e){return e instanceof d}function J(e){return e instanceof f}function M(e){return e instanceof T}function B(e){if(e==null)return null;if(typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function A(e){if(e==null)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new m({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function C(e){if(e==null)return null;if(typeof e=="number"||typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(F||(F={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(G||(G={}));var U=1e3;var R={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},j={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},q={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function _(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function X(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});let S=typeof n.cycles=="boolean"&&n.cycles,b=n.cmp&&(a=n.cmp,function(o){return function(t,i){let r={key:t,value:o[t]},l={key:i,value:o[i]};return a(r,l)}});var a;let s=[];return function o(t){if(t?.toJSON&&typeof t.toJSON=="function"&&(t=t.toJSON()),t===void 0)return;if(typeof t=="number")return isFinite(t)?""+t:"null";if(typeof t!="object")return JSON.stringify(t);let i,r;if(Array.isArray(t)){for(r="[",i=0;i<t.length;i++)i&&(r+=","),r+=o(t[i])||"null";return r+"]"}if(t===null)return"null";if(s.includes(t)){if(S)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}let l=s.push(t)-1,y=Object.keys(t).sort(b?.(t));for(r="",i=0;i<y.length;i++){let u=y[i],p=o(t[u]);p&&(r&&(r+=","),r+=JSON.stringify(u)+":"+p)}return s.splice(l,1),"{"+r+"}"}(e)}function v(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function z(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return v(e)}}export{F as a,G as b,E as c,w as d,k as e,L as f,h as g,J as h,M as i,B as j,A as k,C as l,U as m,R as n,j as o,q as p,_ as q,X as r,v as s,z as t};
