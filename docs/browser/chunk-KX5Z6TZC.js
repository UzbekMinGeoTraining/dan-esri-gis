import{a as k,b as G}from"./chunk-E3DN7XQP.js";import{a as C,b as B,c as K,d as Z}from"./chunk-A7QJESER.js";import{a as M}from"./chunk-2BYXPFOZ.js";import{k as A}from"./chunk-HW47RMVO.js";import{a as u}from"./chunk-VHWLEJLO.js";import{a as N}from"./chunk-VZPIZOOE.js";import{a as Q}from"./chunk-7Z3Y27UA.js";import{c as D}from"./chunk-3A66AUSD.js";import{c as _,h as m}from"./chunk-J2R7NR2E.js";import{b as O}from"./chunk-OD6TX477.js";import{a as E}from"./chunk-HVNUIUKO.js";import{n as q}from"./chunk-Y5M2SONX.js";import{a as w}from"./chunk-Q6ZVH4MK.js";import{a as U}from"./chunk-63EK7JRZ.js";import{b as T}from"./chunk-ZGDQY5ZD.js";import{b as j}from"./chunk-WDFAQFJ4.js";import{a as P}from"./chunk-PFIMJ2UL.js";import{h as R}from"./chunk-7D4IYTAJ.js";import{a as x}from"./chunk-DPZGANVI.js";import{a as S}from"./chunk-BRVOQZDM.js";import{a as v}from"./chunk-TBYT66N3.js";import{y as L}from"./chunk-N27U3N2T.js";import{a as l}from"./chunk-4R5NBZMW.js";import{a as F}from"./chunk-NDYVXEZ5.js";import{a as b}from"./chunk-B7IARA3F.js";import{k as I}from"./chunk-TEY6TKJV.js";import{Q as r}from"./chunk-GGZQ5GCM.js";import{J as g,U as d}from"./chunk-TFUPB3ZG.js";import{a as t}from"./chunk-BMVJCP2M.js";import{r as f,t as y}from"./chunk-3IBUFXWY.js";import{a as c,b as h,g as p}from"./chunk-JEGVIFEP.js";var s=class extends w(O){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,a){return typeof a.alias=="string"?a.alias:typeof a.name=="string"?a.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],s.prototype,"title",void 0),t([l("service","title",["alias","name"])],s.prototype,"readTitle",null),t([r()],s.prototype,"layer",void 0),t([r({type:g,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"id",void 0),t([l("service","id")],s.prototype,"readIdOnlyOnce",null),t([r(m(String))],s.prototype,"modelName",void 0),t([r(m(Boolean))],s.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],s.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],s.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],s.prototype,"opacity",void 0),s=t([d("esri.layers.buildingSublayers.BuildingSublayer")],s);var J=s;var V=N(),i=class extends S.LoadableMixin(v(J)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new P(this.fields)}readAssociatedLayer(e,a){let o=this.layer.associatedFeatureServiceItem,n=a.associatedLayerID;return o!=null&&typeof n=="number"?new u({portalItem:o,customParameters:this.customParameters,layerId:n}):null}get objectIdField(){if(this.fields!=null){for(let e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){let a=e!=null?e.signal:null,o=this._fetchService(a).then(()=>{this.indexInfo=M(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,f.getLogger(this),a)});return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){return Q(this,e)}_fetchService(e){return p(this,null,function*(){let a=(yield I(this.parsedUrl.path,{query:h(c({f:"json"},this.customParameters),{token:this.apiKey}),responseType:"json",signal:e})).data;this.read(a,{origin:"service",url:this.parsedUrl})})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,a){let o=this.getFeatureType(a?.feature)?.domains?.[e];return o&&o.type!=="inherited"?o:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){let e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:j,{query:a,data:{supportsZ:o,supportsM:n,isVersioned:$}}=e;return{query:a,data:{supportsZ:o,supportsM:n,isVersioned:$}}}createQuery(){let e=new T;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,a){return this._getAssociatedLayerForQuery().then(o=>o.queryExtent(e||this.createQuery(),a))}queryFeatureCount(e,a){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatureCount(e||this.createQuery(),a))}queryFeatures(e,a){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatures(e||this.createQuery(),a)).then(o=>{if(o?.features)for(let n of o.features)n.layer=this.layer,n.sourceLayer=this;return o})}queryObjectIds(e,a){return this._getAssociatedLayerForQuery().then(o=>o.queryObjectIds(e||this.createQuery(),a))}queryCachedAttributes(e,a){return p(this,null,function*(){let o=R(this.fieldsIndex,yield k(this,G(this)));return A(this.parsedUrl.path,this.attributeStorageInfo,e,a,o,this.apiKey,this.customParameters)})}queryCachedFeature(e,a){return p(this,null,function*(){let o=yield this.queryCachedAttributes(e,[a]);if(!o||o.length===0)throw new y("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new E({attributes:o[0],layer:this,sourceLayer:this})})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){let e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){return p(this,null,function*(){if(yield this.load(),this.associatedLayer==null)throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{yield this.associatedLayer.load()}catch(e){throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer})}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:C,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[B],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[K],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[Z],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(V.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:u})],i.prototype,"associatedLayer",void 0),t([l("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(V.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:String})],i.prototype,"customParameters",null),t([r({readOnly:!0,type:L})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:F})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:U})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:D,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(_)],i.prototype,"popupEnabled",void 0),t([r({type:q,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),x(new b({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),t([r({readOnly:!0})],i.prototype,"statisticsInfo",void 0),i=t([d("esri.layers.buildingSublayers.BuildingComponentSublayer")],i);var $e=i;export{J as a,$e as b};
