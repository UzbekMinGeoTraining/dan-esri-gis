import{a as d}from"./chunk-2K35ZAGK.js";import{a,g as y}from"./chunk-MBJHSEMD.js";import{a as V,b as p}from"./chunk-MXOOOTCV.js";import{c as o}from"./chunk-VQHENXDQ.js";import{Q as t}from"./chunk-GGZQ5GCM.js";import{U as n}from"./chunk-TFUPB3ZG.js";import{a as r}from"./chunk-BMVJCP2M.js";var s=class extends d{constructor(i){super(i),this.type="group",this.layerViews=new o}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),a(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},y),a(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",V(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){let i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(l=>a(()=>l.visible,h=>this._applyVisibility(()=>{h!==this.visible&&(l.visible=this.visible)},()=>this._applyExclusiveVisibility(h?l:null)),y)).toArray(),"grouplayerview:visible");let e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};r([t({readOnly:!0})],s.prototype,"creatingLayerViews",null),r([t({cast:p})],s.prototype,"layerViews",null),r([t({readOnly:!0})],s.prototype,"updatingProgress",null),r([t()],s.prototype,"view",void 0),s=r([n("esri.views.layers.GroupLayerView")],s);var O=s;export{O as a};
