import{a as n}from"./chunk-PD3MYUGK.js";import{r as g,y as h}from"./chunk-FW33MEBA.js";import{o as s}from"./chunk-T7BKG6V3.js";import{a as d}from"./chunk-CMMPCPP5.js";import{h as u}from"./chunk-2JF6YUJG.js";import{Q as a}from"./chunk-GGZQ5GCM.js";import{O as f,U as y}from"./chunk-TFUPB3ZG.js";import{a as o}from"./chunk-BMVJCP2M.js";import{b as c}from"./chunk-3IBUFXWY.js";var l,t=l=class extends u{constructor(r){super(r),this.geometry=null,this.type="clip"}writeGeometry(r,i,p,e){if(e.layer?.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!g(r.spatialReference,e.layer.spatialReference))return void(e?.messages&&e.messages.push(new f("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));let m=new s;h(r,m,e.layer.spatialReference),i[p]=m.toJSON(e)}else i[p]=r.toJSON(e);delete i[p].spatialReference}clone(){return new l({geometry:c(this.geometry),type:this.type})}};o([a({type:s}),n()],t.prototype,"geometry",void 0),o([d(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),o([a({type:["clip","mask","replace"],nonNullable:!0}),n()],t.prototype,"type",void 0),t=l=o([y("esri.layers.support.SceneModification")],t);var q=t;export{q as a};
