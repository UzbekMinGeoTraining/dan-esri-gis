import{a as v}from"./chunk-QN72YLVS.js";import{a as f}from"./chunk-2K35ZAGK.js";import"./chunk-WP7QHDBV.js";import"./chunk-5DAF2FXI.js";import"./chunk-U3ETEC6R.js";import"./chunk-Q6ZVH4MK.js";import"./chunk-AYOI2Y26.js";import"./chunk-MBVOWLUI.js";import{a as u,i as m}from"./chunk-MBJHSEMD.js";import"./chunk-VQHENXDQ.js";import"./chunk-VWF5VUO3.js";import{f as p}from"./chunk-HRP5LYWJ.js";import"./chunk-BIVFGNT6.js";import"./chunk-3M7VXIQH.js";import"./chunk-TBYT66N3.js";import"./chunk-4R5NBZMW.js";import"./chunk-CMMPCPP5.js";import"./chunk-4DLSYLKE.js";import"./chunk-VPXBKZQM.js";import"./chunk-B7IARA3F.js";import"./chunk-IZVEJCCI.js";import"./chunk-TEY6TKJV.js";import"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import{Q as t}from"./chunk-GGZQ5GCM.js";import{U as y}from"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import{a}from"./chunk-BMVJCP2M.js";import{k as o,n as V}from"./chunk-GMC3I5VG.js";import{b as d,e as c}from"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import{t as h}from"./chunk-3IBUFXWY.js";import"./chunk-BP73DJTS.js";import{g as r}from"./chunk-JEGVIFEP.js";var A=e=>{let i=class extends e{constructor(...s){super(...s),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(s){this.analysisView!=null&&(this.analysisView.interactive=s)}get selectedViewshed(){return this.analysisView!=null?this.analysisView.selectedViewshed:null}set selectedViewshed(s){this.analysisView!=null&&(this.analysisView.selectedViewshed=s)}createViewsheds(s){return r(this,null,function*(){if(this.analysisView==null)throw o();yield this.analysisView.createViewsheds(s)})}};return a([t()],i.prototype,"layer",void 0),a([t()],i.prototype,"interactive",null),a([t()],i.prototype,"selectedViewshed",null),i=a([y("esri.views.layers.ViewshedLayerView")],i),i};var _="analysis-view-handles",l=class extends v(A(f)){constructor(e){super(e),this.type="viewshed-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,e=>{this._destroyAnalysisView(),e!=null&&this._createAnalysisView(e)},m),_)}destroy(){this.removeHandles(_),this._destroyAnalysisView()}whenAnalysisView(){return r(this,null,function*(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new h("layerview:no-analysisview-for-analysis","The analysis has not been set on the ViewshedLayer of this layer view")})}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(e){let i=p(s=>r(this,null,function*(){return this.analysisView=yield this._createAnalysisViewPromise(e,s),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView}));this.addResolvingPromise(i.promise),this._createAnalysisViewTask=i}_destroyAnalysisView(){this.analysisView=d(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}_createAnalysisViewPromise(e,i){return r(this,null,function*(){let s=this._analysisModule;if(s==null){let n=yield this._loadAnalysisModule();this._analysisModule=n,s=n}let w=new s.default({analysis:e,view:this.view,parent:this});if(yield w.when(),V(i)){w.destroy();let n=this.layer.source;throw n!=null&&e!==n?o("Source has changed during creation."):new h("layerview:no-analysisview-for-analysis","The analysis has not been added to the ViewshedLayer of this layer view",{analysis:e})}return w})}_loadAnalysisModule(){return import("./chunk-KJ3NY7ZU.js")}};a([t()],l.prototype,"type",void 0),a([t()],l.prototype,"analysisView",void 0),a([t()],l.prototype,"_createAnalysisViewTask",void 0),l=a([y("esri.views.3d.layers.ViewshedLayerView3D")],l);var G=l;export{G as default};
