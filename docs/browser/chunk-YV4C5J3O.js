import{a as le,b as ue,c as pe}from"./chunk-GBBCQMJZ.js";import{a as I}from"./chunk-X6MZ5ATR.js";import{a as ie,c as ae,d as oe}from"./chunk-D4P3UBRY.js";import{a as re,b as se}from"./chunk-NVD74CNP.js";import{a as Y,b as K,c as C}from"./chunk-IVZ2RXL2.js";import{a as J}from"./chunk-V2QHUPXP.js";import{a as L}from"./chunk-NPSROKUX.js";import{k as ne}from"./chunk-4FO73WSB.js";import{a as ee}from"./chunk-DQVRRO4N.js";import{a as te}from"./chunk-MM6IP4FS.js";import{h as X}from"./chunk-2F2E6NNR.js";import{a as W}from"./chunk-MNOCKVQA.js";import{c as $}from"./chunk-SDHCGQUI.js";import{a as Z}from"./chunk-VY6QN6EN.js";import{c as z}from"./chunk-RPIA54UY.js";import{d as v}from"./chunk-WYOOSF42.js";import{a as V}from"./chunk-C3YONAAM.js";import{a as B}from"./chunk-HVNUIUKO.js";import{a as w}from"./chunk-AYOI2Y26.js";import{b as x}from"./chunk-ZGDQY5ZD.js";import{d as k}from"./chunk-O4AQRVFI.js";import{a as j}from"./chunk-PFIMJ2UL.js";import{a as _,b as q,h as y}from"./chunk-MBJHSEMD.js";import{a as U}from"./chunk-YSOJWUIW.js";import{b as P}from"./chunk-TBYT66N3.js";import{d as M,e as N,y as D}from"./chunk-N27U3N2T.js";import{Q as s,S as E}from"./chunk-GGZQ5GCM.js";import{U as m}from"./chunk-TFUPB3ZG.js";import{a as r}from"./chunk-BMVJCP2M.js";import{a as H,l as S,o as A,v as F}from"./chunk-GMC3I5VG.js";import{b,d as T}from"./chunk-WGF2T2BG.js";import{r as G}from"./chunk-3IBUFXWY.js";import{a as g,b as f,g as d}from"./chunk-JEGVIFEP.js";var de=L,h=class extends E{get layer(){return this.context.layer}get spatialReference(){return this.context.spatialReference}get _queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new x({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._dataQueryEngineInstance=null}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}executeQueryForIdSet(e,t,a){return d(this,null,function*(){return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e,t),a)})}executeQueryForCount(e,t){return d(this,null,function*(){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)})}executeQueryForExtent(e,t){return d(this,null,function*(){let{count:a,extent:i}=yield this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:a,extent:D.fromJSON(i)}})}executeQueryForIds(e,t){return d(this,null,function*(){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)})}executeQueryForLatestObservations(e,t){return d(this,null,function*(){let a=yield this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),i=V.fromJSON(a);return i.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),i})}executeQuery(e,t){return d(this,null,function*(){let a=yield this._dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),i=V.fromJSON(a);return i.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),i})}_ensureQueryJSON(e,t){let a=this.defaultQueryJSON;if(e!=null&&("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),a=e.toJSON()),t!=null){let i=t.geometries.map(n=>n.toJSON()).reduce((n,l)=>(n.rings=n.rings.concat(l.rings),n));a=f(g({},a),{sceneFilter:f(g({},t),{geometry:i})})}return a}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;let e="timeInfo"in this.layer&&this.layer.timeInfo?.toJSON()||null,t=this.layer.objectIdField,a=U.toJSON(this._queryGeometryType),i=this.layer.fieldsIndex?.toJSON()||new j([]),n=this.priority,l=this.spatialReference.toJSON(),{hasZ:u,hasM:c,featureStore:R,scheduler:O}=this.context;return this._dataQueryEngineInstance=new de({hasZ:u,hasM:c,geometryType:a,fieldsIndex:i,timeInfo:e,spatialReference:l,objectIdField:t,featureStore:R,scheduler:O,priority:n}),this._dataQueryEngineInstance}};r([s({constructOnly:!0})],h.prototype,"context",void 0),r([s({constructOnly:!0})],h.prototype,"priority",void 0),r([s()],h.prototype,"layer",null),r([s()],h.prototype,"spatialReference",null),r([s()],h.prototype,"_queryGeometryType",null),r([s()],h.prototype,"defaultQueryJSON",null),h=r([m("esri.views.3d.layers.graphics.QueryEngine")],h);var p=class extends E{constructor(e){super(e),this._frameTask=null,this._queryEngine=null,this._updateRequested=!0,this._updatingHandles=new w,this._abortController=new AbortController}initialize(){let e=k.FILTER_VISIBILITY,{layer:t,view:a}=this._configuration,{featureStore:i}=this.context,n=this._configuration.hasZ??!1,l=this._configuration.hasM??!1;this._queryEngine=new h({context:{spatialReference:a.spatialReference,layer:t,scheduler:a.resourceController.scheduler,featureStore:i,hasM:l,hasZ:n},priority:e}),this._frameTask=a.resourceController.scheduler.registerTask(e),this._updatingHandles.add(()=>[this._compositedFeatureFilter,this._sceneFilter],()=>this._updateRequested=!0,y),this._updatingHandles.addWhen(()=>!this._frameTask.updating&&this._updateRequested,()=>{this._frameTask.schedule(()=>this._updateVisibility(),this._abortController.signal),this._updateRequested=!1},y)}destroy(){this._abortController.abort(),this._updatingHandles.destroy(),this.clear(),this._frameTask=T(this._frameTask),this._queryEngine=b(this._queryEngine),this._set("context",null)}get updating(){return this._updateRequested||this._updatingHandles.updating||this._frameTask.updating}get defaultVisibility(){return this._compositedFeatureFilter==null&&this._sceneFilter==null}get _featureFilter(){return"filter"in this._configuration?this._configuration.filter:null}get _sceneFilter(){return"layerFilter"in this._configuration?this._configuration.layerFilter:null}get _floorFilter(){return W(this._configuration)}get _timeExtent(){return"timeExtent"in this._configuration?this._configuration.timeExtent:null}get _compositedFeatureFilter(){let{_featureFilter:e,_timeExtent:t,_floorFilter:a}=this;if(t==null&&a==null)return e;let i=e?.clone()??new Z;if(t!=null&&(i.timeExtent=i.timeExtent?.intersection(t)??t),a!=null){let n=i.where==null||i.where==="";i.where=n?a:`(${i.where}) AND (${a})`}return i}get _configuration(){return this.context.configuration}reapply(){this._updateRequested=!0}clear(){this._queryEngine.clear(),this.context.clearFeaturesVisibility()}_updateVisibility(){return d(this,null,function*(){let e=this._compositedFeatureFilter,t=this._sceneFilter,{signal:a}=this._abortController,i=this._frameTask,{context:n}=this;if(S(a),e==null&&t==null||n.getFeatureCount()===0)return yield i.schedule(()=>this.clear(),a);try{let l=yield this._queryEngine.executeQueryForIdSet(e,t,a);return S(a),yield i.schedule(()=>{n.updateFeatureVisibilities(u=>l.has(u))},a)}catch(l){return A(l),G.getLogger(this).warn(`FeatureFilter query failed: ${l}`,{error:l}),yield i.schedule(()=>{n.setAllFeaturesVisibility(!0)},a)}})}};r([s({constructOnly:!0})],p.prototype,"context",void 0),r([s()],p.prototype,"updating",null),r([s()],p.prototype,"defaultVisibility",null),r([s()],p.prototype,"_featureFilter",null),r([s()],p.prototype,"_sceneFilter",null),r([s()],p.prototype,"_floorFilter",null),r([s()],p.prototype,"_timeExtent",null),r([s()],p.prototype,"_compositedFeatureFilter",null),r([s()],p.prototype,"_configuration",null),r([s()],p.prototype,"_updateRequested",void 0),p=r([m("esri.views.3d.layers.support.FeatureVisibilityFilter")],p);var o=class extends P{constructor(e){super(e),this.type="graphics-3d",this._randomRotationRenderers=null,this._updatingHandles=new w,this.elevationFeatureExpressionEnabled=!1,this.scaleVisibilityEnabled=!1,this.filterVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this.elevationAlignmentEnabled=!1,this.timeExtentEnabled=!1,this.setUidToIdOnAdd=!0,this.dataExtent=null,this.drapeSourceType=ee.Features,this.preferredUpdatePolicy=te.ASYNC,this._suspendResumeExtent=null}initialize(){let e=this.owner,t=(this.filterVisibilityEnabled||this.timeExtentEnabled)&&e.layer.geometryType!=="multipatch",a=new ae({owner:this,layer:this.layer,preferredUpdatePolicy:this.preferredUpdatePolicy,elevationFeatureExpressionEnabled:this.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:e.hasZ,hasM:e.hasM,setUidToIdOnAdd:this.setUidToIdOnAdd,componentFactories:{deconflictor:i=>e.view.deconflictor.addGraphicsOwner(i),labeler:(i,n)=>e.view.labeler.addGraphicsOwner(i,n),elevationAlignment:this.elevationAlignmentEnabled?(i,n)=>new le({graphicsCoreOwner:this,graphicsCore:i,queryGraphicUIDsInExtent:n,elevationProvider:e.view.elevationProvider}):null,scaleVisibility:this.scaleVisibilityEnabled?(i,n)=>new oe({graphicsCoreOwner:this,layer:this.layer,queryGraphicUIDsInExtent:n,graphicsCore:i,basemapTerrain:e.view.basemapTerrain}):null,filterVisibility:t?i=>new p({context:f(g({},i),{configuration:e})}):null,objectStates:i=>new pe(i)}});this._set("graphicsCore",a),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new ue({graphicsCoreOwner:this})),this.elevationAlignment&&this._updatingHandles.add(()=>this.layer.elevationInfo,(i,n)=>{v(i,n)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}),this._updatingHandles.add(()=>this.layer.labelsVisible,()=>this.graphicsCore.updateVisibilityInfo()),this._updatingHandles.add(()=>this.layer.labelingInfo,(i,n)=>{v(i,n)&&this.graphicsCore.updateLabelingInfo()}),this._updatingHandles.add(()=>this.preferredUpdatePolicy,i=>this.graphicsCore.preferredUpdatePolicy=i),this.addResolvingPromise(this._initializeAsync())}_initializeAsync(){return d(this,null,function*(){yield F(this.graphicsCore.initializePromise);let e=this.owner;this._updatingHandles.add(()=>this.renderer,t=>this._updatingHandles.addPromise(this.graphicsCore.rendererChange(t))),this._updatingHandles.add(()=>e.fullOpacity,()=>this.graphicsCore.opacityChange()),this._setupSuspendResumeExtent(),this.updateClippingExtent&&(this._updatingHandles.add(()=>e.view.clippingArea,()=>this._updateClippingExtent()),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&(yield F(this.graphicsCore.updateLabelingInfo()))})}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",b(this.frustumVisibility)),this._set("graphicsCore",b(this.graphicsCore)),this._set("owner",null)}get layer(){return this.owner.layer}get dataUpdating(){return this.graphicsCore?.dataUpdating??!1}get renderer(){let{renderer:e,objectIdField:t}=this.layer;if(!e||!t||e.type==="heatmap"||!e.visualVariables)return e;let a=e.visualVariables.findIndex(n=>n.type==="rotation"&&n.valueExpression!=null&&z(n.valueExpression)===t&&(n.axis==null||n.axis==="heading")&&n.rotationType==="geographic");if(a<0)return e;let i=e.clone();return i.visualVariables?(i.visualVariables.splice(a,1),this._randomRotationRenderers||(this._randomRotationRenderers=new WeakMap),this._randomRotationRenderers.set(i,t),i):e}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get filterVisibility(){return this.graphicsCore?.filterVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get suspendResumeExtentMode(){return this.owner.suspendResumeExtentMode??"computed"}get scaleVisibilitySuspended(){return this.scaleVisibility!=null&&this.scaleVisibility.suspended}get suspended(){return this.owner.suspended}get legendEnabled(){return this.frustumVisibility==null||!this.frustumVisibility.suspended}get suspendInfo(){let e={};return this.scaleVisibilitySuspended&&(e.outsideScaleRange=!0),this.frustumVisibility!=null&&this.frustumVisibility.suspended&&(e.outsideOfView=!0),e}get updating(){return!!(this.graphicsCore?.updating||this.frustumVisibility?.updating||this._updatingHandles.updating)}get updatingRemaining(){return this.graphicsCore?.updatingRemaining??0}get featureStore(){return this.graphicsCore?.featureStore}get view(){return this.owner.view}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner?.fullOpacity}get filter(){return"filter"in this.owner?this.owner.filter:null}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}get featureSpatialReference(){return"featureSpatialReference"in this.owner?this.owner.featureSpatialReference:this.owner.view.spatialReference}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get symbolUpdateType(){return this.graphicsCore?.symbolUpdateType}get displayFeatureLimit(){let e=this.view.quality,t=this.graphicsCore?.displayFeatureLimit;if(e===1)return t;let a=Math.ceil(t.maximumNumberOfFeatures*e);return new ie(t.maximumTotalNumberOfVertices,a,t.averageSymbolComplexity)}get usedMemory(){return this.graphicsCore?.usedMemory??0}get loadedFeatures(){return this.graphicsCore?.numberOfGraphics??0}get usedMemoryPerFeature(){return this.graphicsCore?.usedMemoryPerGraphic??0}get unprocessedMemoryEstimate(){return this.graphicsCore?.unprocessedMemoryEstimate??0}get performanceInfo(){return this.graphicsCore.performanceInfo}maskOccludee(e){let t=this.graphicsCore?.objectStates;if(!t)return H();let{set:a,handle:i}=t.acquireOccludeeSet(null);return t.setUid(a,e.uid),i}highlight(e,t=null,a){let i=this.graphicsCore?.objectStates;if(!i)return C;if(a??=X,e instanceof x){let{set:l,handle:u}=i.acquireHighlightSet(a,t);return this.owner.queryObjectIds(e).then(c=>i.setObjectIds(l,c)),u}let n=Y(e);if(n.length===0)return C;if(n[0]instanceof B){let l=n;if(I(this.layer.fieldsIndex,l[0].attributes,t)==null){let u=l.map(O=>O.uid),{set:c,handle:R}=i.acquireHighlightSet(a,null);return i.setUids(c,u),R}n=l.map(u=>I(this.layer.fieldsIndex,u.attributes,t))}if(K(n[0])){let l=n,{set:u,handle:c}=i.acquireHighlightSet(a,t);return i.setObjectIds(u,l),c}return C}resetObjectStates(){this.graphicsCore?.objectStates?.reset()}whenGraphicBounds(e,t){return this.graphicsCore?.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.graphicsCore?.computeAttachmentOrigin(e,t)}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,a){let i=re(e,{renderer:t,arcade:a});if(i?.color){let n=i.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}if(i!=null&&t!=null&&this._randomRotationRenderers?.has(t)){let n=this._randomRotationRenderers.get(t),l=e.attributes[n],u=new J(0);u.updateFloatArray([l]),u.updateUint8Array([173]),i.heading=8381e-11*u.digest()}return i}getRenderingInfoAsync(e,t,a,i){return se(e,g({renderer:t,arcade:a},i))}getSymbolLayerSize(e,t){return this.graphicsCore?.getSymbolLayerSize(e,t)}setObjectIdVisibility(e,t){this.graphicsCore?.setObjectIdVisibility(e,t)}refreshFilter(){this.filterVisibility!=null&&this.filterVisibility.reapply()}getGraphics3DGraphicByObjectId(e){return this.graphicsCore?.getGraphics3DGraphicByObjectId(e)}_updateClippingExtent(){let e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}_setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this.addHandles(_(()=>this.suspendResumeExtentMode,()=>{switch(this.removeHandles(Q),this.suspendResumeExtentMode){case"computed":this.addHandles([_(()=>this.graphicsCore.computedExtent,e=>this._updateSuspendResumeExtent(e),y),_(()=>this.graphicsCore.extentPadding,()=>this._updateSuspendResumeExtent(this.graphicsCore.computedExtent))],Q);break;case"data":this.addHandles([q(()=>this.dataExtent,e=>this._updateSuspendResumeExtent(e),y),_(()=>this.graphicsCore.extentPadding,()=>this._updateSuspendResumeExtent(this.dataExtent))],Q);break;default:this.suspendResumeExtentMode}},y))}_updateSuspendResumeExtent(e){e?this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e,this._suspendResumeExtent)):this._suspendResumeExtentChanged(null)}_extentToSuspendResumeRect(e,t){let a=this.owner.view.spatialReference;if(!e.spatialReference.equals(a)){if(!M(e,a))return;e=N(e,a)}return $(e,t,ne,this.graphicsCore.extentPadding)}_suspendResumeExtentChanged(e){this.frustumVisibility!=null&&this.frustumVisibility.setExtent(e),this.scaleVisibility!=null&&this.scaleVisibility.setExtent(e)}};r([s()],o.prototype,"type",void 0),r([s({constructOnly:!0})],o.prototype,"owner",void 0),r([s()],o.prototype,"layer",null),r([s({readOnly:!0})],o.prototype,"dataUpdating",null),r([s()],o.prototype,"renderer",null),r([s({constructOnly:!0})],o.prototype,"updateClippingExtent",void 0),r([s({constructOnly:!0})],o.prototype,"elevationFeatureExpressionEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"graphicsCore",void 0),r([s({constructOnly:!0})],o.prototype,"scaleVisibilityEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"filterVisibilityEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"frustumVisibilityEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"elevationAlignmentEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"timeExtentEnabled",void 0),r([s({constructOnly:!0})],o.prototype,"setUidToIdOnAdd",void 0),r([s()],o.prototype,"scaleVisibility",null),r([s()],o.prototype,"filterVisibility",null),r([s()],o.prototype,"elevationAlignment",null),r([s({constructOnly:!0})],o.prototype,"frustumVisibility",void 0),r([s()],o.prototype,"suspendResumeExtentMode",null),r([s()],o.prototype,"dataExtent",void 0),r([s()],o.prototype,"scaleVisibilitySuspended",null),r([s()],o.prototype,"suspended",null),r([s()],o.prototype,"legendEnabled",null),r([s()],o.prototype,"suspendInfo",null),r([s()],o.prototype,"updating",null),r([s()],o.prototype,"updatingRemaining",null),r([s()],o.prototype,"featureStore",null),r([s()],o.prototype,"view",null),r([s()],o.prototype,"loadedGraphics",null),r([s()],o.prototype,"fullOpacity",null),r([s()],o.prototype,"filter",null),r([s()],o.prototype,"slicePlaneEnabled",null),r([s()],o.prototype,"drapeSourceType",void 0),r([s()],o.prototype,"updatePolicy",null),r([s()],o.prototype,"preferredUpdatePolicy",void 0),r([s({readOnly:!0})],o.prototype,"displayFeatureLimit",null),o=r([m("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")],o);var Q="suspendResumeExtentMode";export{h as a,p as b,o as c};
