import{a as P}from"./chunk-4UETQE5S.js";import{hb as I}from"./chunk-AN522XY4.js";import{d as R,e as c}from"./chunk-DI7IQ2JQ.js";import{c as B}from"./chunk-243IQYOZ.js";import{b as w,d as D}from"./chunk-OC7V2CEX.js";import{i as v,j as E,k as F,l as U,m as M,n as O,o as k,p as L,u as a}from"./chunk-PXLEIVAM.js";import{k as y,l as T}from"./chunk-BDF7KEUQ.js";import{r as S,t as V}from"./chunk-3IBUFXWY.js";import{a as l}from"./chunk-BP73DJTS.js";var j=()=>S.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),x=class{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;let{buffer:s,pixelType:r,textureOnly:n}=t,o=c(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new o(s)),this._resetRange()}destroy(){this._texture?.dispose();for(let t in this._fbos){let e=this._fbos[t];e&&(t==="0"&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){let t=new w;return t.wrapMode=T.CLAMP_TO_EDGE,t.samplingMode=y.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){let s=I(t),r=this.data,n=s*this.texelSize+e;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;let i=I(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){let i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new B(t,i)}return this._fbos[e]}get hasDirty(){let t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{let i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;l("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();let r=this.data.buffer,n=this.getTexture(t),o=4,u=(i-i%this.size)/this.size,h=(s-s%this.size)/this.size,d=u,b=this.size,p=h,_=u*this.size*o,m=(b+p*this.size)*o-_,A=c(this.pixelType),$=new A(r,_*A.BYTES_PER_ELEMENT,m),N=this.size,z=p-d+1;if(z>this.size)return void j().error(new V("mapview-webgl","Out-of-bounds index when updating AttributeData"));n.updateData(0,0,d,N,z,$)}catch{}}update(t){let{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){let r=this.data,n=i*this.texelSize;for(let o=0;o<e.length;o++){let u=1<<o%this.texelSize;t.layout&u&&(r[n+o]=e[o])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){let i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));let s=c(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){let e=new D(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){let i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(t),u=R(r),h=new(c(r))(new ArrayBuffer(i*s*u*this.texelSize)),d=t.getBoundFramebufferObject(),{x:b,y:p,width:_,height:m}=t.getViewport();t.bindFramebuffer(o),o.readPixels(0,0,i,s,n,r,h),e.updateData(0,0,0,2*i,s/2,h),t.setViewport(b,p,_,m),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}},f=class{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");let e=t.blockDescriptors;if(this.size=t.blockSize,l("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new x(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){let s=this._data[i],r=e[i];r!=null&&(s==null?this._data[i]=new x(r,this.size,i):s.resize(r,this.size))}}destroy(){for(let t of this._data??[])t?.destroy();this._defaultTexture?.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,a.FilterFlags,1,e)}setLocalTimeOrigin(t,e){this.setData(t,a.LocalTimeOrigin,0,e)}getLabelMinZoom(t){return this.getData(t,a.FilterFlags,1,255)}getFilterFlags(t){return this.getData(t,a.FilterFlags,0,0)}getVisualVariableData(t,e){return this.getData(t,a.VV,e,0)}getData(t,e,i,s){if(!this._data)return 0;let r=this._data[e];if(r==null)return 0;let n=r.getData(t,i);return n??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;let t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(let e of t){let{blockData:i,initArgs:s,sendUpdateEpoch:r,version:n}=e;l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${r}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=r,s!=null&&this._initialize(s);let o=this._data;for(let u=0;u<i.length;u++){let h=i[u],d=o[u];d!=null&&h!=null&&(l("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${u}] AttributeStoreView.update`,{block:h}),d.update(h))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,a.FilterFlags),unit:v},animation:{texture:this._getTexture(t,a.Animation),unit:E},gpgpu:{texture:this._getTexture(t,a.GPGPU),unit:k},localTimeOrigin:{texture:this._getTexture(t,a.LocalTimeOrigin),unit:L},visualVariableData:{texture:this._getTexture(t,a.VV),unit:F},dataDriven0:{texture:this._getTexture(t,a.DD0),unit:U},dataDriven1:{texture:this._getTexture(t,a.DD1),unit:M},dataDriven2:{texture:this._getTexture(t,a.DD2),unit:O},size:this.size}}_getTexture(t,e){let i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){let e=new w;e.wrapMode=T.CLAMP_TO_EDGE,e.samplingMode=y.NEAREST,e.width=1,e.height=1,this._defaultTexture=new D(t,e,new Uint8Array(4))}return this._defaultTexture}};var G=60,C=class extends P{constructor(t){super(t),this._statisticsByLevel=new Map,this._entityIndex=new Map,this.attributeView=new f}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(t){t.context.capabilities.enable("textureFloatLinear"),super.doRender(t)}get hasAnimations(){for(let t of this.children)if(t.hasAnimations)return!0;return!1}_reindexAndUpdateFeaturesIfNeeded(){if(this.hasAnimations&&(this._reindexFeatures(),this.attributeView.size!==0))for(let t of this._entityIndex.values())t.dirty&&(this.attributeView.setData(t.displayId,a.LocalTimeOrigin,0,t.firstIndexed),t.dirty=!1)}restartAnimation(t){let e=this._entityIndex.get(t);if(!e)return;let i=performance.now()/1e3;e.firstIndexed=i,e.dirty=!0}restartAllAnimations(){let t=performance.now()/1e3;for(let[e,i]of this._entityIndex)i.firstIndexed=t,i.dirty=!0}_reindexFeatures(){let t=performance.now()/1e3;for(let e of this.children)for(let i of e.entityIds){let{objectId:s}=i,r=this._entityIndex.get(s);r||(r={objectId:s,displayId:0,firstIndexed:t,lastIndexed:0,dirty:!0},this._entityIndex.set(s,r)),r.lastIndexed=t,r.displayId=i.displayId}for(let[e,i]of this._entityIndex)t-i.lastIndexed>G&&this._entityIndex.delete(e)}_updateAttributeView(){this.attributeView.update(),this._reindexAndUpdateFeaturesIfNeeded()}createRenderParams(t){let e=super.createRenderParams(t);return e.attributeView=this.attributeView,e.instanceStore=this._instanceStore,e.statisticsByLevel=this._statisticsByLevel,e}};var q=class{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}};export{C as a,q as b};
