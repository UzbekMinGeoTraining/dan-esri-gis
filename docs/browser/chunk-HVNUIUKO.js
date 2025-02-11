import{n as _}from"./chunk-Y5M2SONX.js";import{D as T}from"./chunk-OL43UY3L.js";import{a as v}from"./chunk-EN6CTWVM.js";import{b as l}from"./chunk-MBJHSEMD.js";import{a as d}from"./chunk-OFZ6SV37.js";import{f as h}from"./chunk-Q5WFUDPQ.js";import{g as f,h as b}from"./chunk-2JF6YUJG.js";import{K as y,Q as o,c as m}from"./chunk-GGZQ5GCM.js";import{U as c}from"./chunk-TFUPB3ZG.js";import{a as s}from"./chunk-BMVJCP2M.js";import{r as g}from"./chunk-3IBUFXWY.js";import{a as u}from"./chunk-JEGVIFEP.js";var p;function M(e){if(!e)return null;let t={};for(let r in e){let a=h(e[r]);a&&(t[r]=a)}return Object.keys(t).length!==0?t:null}function L(e){if(e==null)return null;let t={};for(let r in e){let a=e[r];a&&(t[r]=a.toJSON())}return Object.keys(t).length!==0?t:null}var i=p=class extends v(b){constructor(e){super(e),this.isAggregate=!1,this.layer=null,this.origin=null,this.popupTemplate=null,this.sourceLayer=null,this._version=0,Object.defineProperty(this,"uid",{value:y(),configurable:!0}),Object.defineProperty(this,"_lastMeshTransform",{value:{},configurable:!0,writable:!0,enumerable:!1}),arguments.length>1&&m(g.getLogger(this),"Graphic",{version:"4.30"})}initialize(){this._watchMeshGeometryChanges()}set aggregateGeometries(e){let t=this._get("aggregateGeometries");JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){let t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){let t=this._get("geometry");t!==e&&(this._set("geometry",e),e?.type!=="mesh"&&this._notifyLayer("geometry",t,e))}set symbol(e){let t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}get version(){return this._version}set visible(e){let t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}cloneShallow(){return new p({aggregateGeometries:this.aggregateGeometries,attributes:this.attributes,geometry:this.geometry,isAggregate:this.isAggregate,layer:this.layer,popupTemplate:this.popupTemplate,sourceLayer:this.sourceLayer,symbol:this.symbol,visible:this.visible,origin:this.origin})}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;let t=this.origin&&"layer"in this.origin?this.origin.layer:null;for(let r of[t,this.sourceLayer,this.layer])if(r){if("popupTemplate"in r&&r.popupTemplate)return r.popupTemplate;if(e&&"defaultPopupTemplate"in r&&r.defaultPopupTemplate!=null)return r.defaultPopupTemplate}return null}getAttribute(e){return this.attributes?.[e]}setAttribute(e,t){if(this.attributes){let r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:L(this.aggregateGeometries),geometry:this.geometry!=null?this.geometry.toJSON():null,symbol:this.symbol!=null?this.symbol.toJSON():null,attributes:f(this.attributes)?this.attributes.toJSON():u({},this.attributes),popupTemplate:this.popupTemplate?.toJSON()??null}}notifyMeshTransformChanged(e={}){let{geometry:t}=this;if(t?.type==="mesh"){let r={origin:t.origin,transform:t.transform};this._notifyLayer("origin-transform",r,r,e.action)}}_notifyLayer(e,t,r,a){if(this._version++,!this.layer||!("graphicChanged"in this.layer))return;let n={graphic:this,property:e,oldValue:t,newValue:r};e==="origin-transform"&&(n.action=a),e==="attributes"&&(n.attributeName=a),this.layer.graphicChanged(n)}_watchMeshGeometryChanges(){this.addHandles([l(()=>this.geometry?.type==="mesh"&&this.geometry.vertexSpace.origin?{localMatrix:this.geometry.transform?.localMatrix,origin:this.geometry.vertexSpace.origin}:void 0,({localMatrix:e,origin:t})=>{this._lastMeshTransform.localMatrix===e&&this._lastMeshTransform.origin===t||(this._lastMeshTransform.localMatrix=e,this._lastMeshTransform.origin=t,this.notifyMeshTransformChanged())}),l(()=>this.geometry?.type==="mesh"?{vertexAttributes:this.geometry.vertexAttributes}:void 0,()=>{let e=this.geometry;e?.type==="mesh"&&e.vertexSpace.origin?(this._lastMeshTransform.localMatrix=e.transform?.localMatrix,this._lastMeshTransform.origin=e.vertexSpace.origin):(this._lastMeshTransform.localMatrix=void 0,this._lastMeshTransform.origin=void 0),this._notifyLayer("geometry",this.geometry,this.geometry)},{equals:(e,t)=>e===t,sync:!0})])}};s([o({value:null,json:{read:M}})],i.prototype,"aggregateGeometries",null),s([o({value:null})],i.prototype,"attributes",null),s([o({value:null,types:d,json:{read:h}})],i.prototype,"geometry",null),s([o({type:Boolean})],i.prototype,"isAggregate",void 0),s([o({clonable:"reference"})],i.prototype,"layer",void 0),s([o({clonable:"reference"})],i.prototype,"origin",void 0),s([o({type:_})],i.prototype,"popupTemplate",void 0),s([o({clonable:"reference"})],i.prototype,"sourceLayer",void 0),s([o({value:null,types:T})],i.prototype,"symbol",null),s([o({clonable:!1,json:{read:!1,write:!1}})],i.prototype,"_version",void 0),s([o({type:Boolean,value:!0})],i.prototype,"visible",null),i=p=s([c("esri.Graphic")],i);var B=i;export{B as a};
