import{a as fe}from"./chunk-6QY3LIKU.js";import{a as ue}from"./chunk-IQ574AWT.js";import{a as de}from"./chunk-QN72YLVS.js";import{a as he}from"./chunk-4IUQ56CO.js";import{a as me}from"./chunk-2K35ZAGK.js";import{a as ge}from"./chunk-MXVB4FQA.js";import{a as ce}from"./chunk-DQVRRO4N.js";import{a as pe}from"./chunk-MM6IP4FS.js";import{a as b}from"./chunk-DYNH5H2C.js";import{h as le}from"./chunk-ZBOVC36T.js";import{a as D}from"./chunk-BUWHOOA3.js";import{c as ne}from"./chunk-B3W5V2XP.js";import{b as oe}from"./chunk-KDLA3TQ2.js";import{a as se}from"./chunk-6N46AY7Z.js";import{d as ae}from"./chunk-5DAF2FXI.js";import{b as O}from"./chunk-JLNQ6WQT.js";import{a as re}from"./chunk-EPTSNNZF.js";import{a as ie}from"./chunk-I6LCIPDY.js";import{a as G}from"./chunk-7W6RATG7.js";import{l as N}from"./chunk-BDF7KEUQ.js";import{d as X}from"./chunk-MBJHSEMD.js";import{C as te,a as S,c as M,k as x,l as _,v as $,x as ee}from"./chunk-6WKJD7BM.js";import{a as K,c as Q}from"./chunk-HRP5LYWJ.js";import{y as H}from"./chunk-N27U3N2T.js";import{Q as w}from"./chunk-GGZQ5GCM.js";import{U as J}from"./chunk-TFUPB3ZG.js";import{a as f}from"./chunk-BMVJCP2M.js";import{D as Z,a as W,k,l as A,n as B,q as Y,t as I}from"./chunk-GMC3I5VG.js";import{e as L}from"./chunk-WGF2T2BG.js";import{r as R}from"./chunk-3IBUFXWY.js";import{a as q,b as j,g as h}from"./chunk-JEGVIFEP.js";function ye(t,e,r){let a=x(t)/_(t),i={width:r,height:r};return a>1.0001?i.height=r/a:a<.9999&&(i.width=r*a),i.width=Math.round(i.width/(x(t)/x(e))),i.height=Math.round(i.height/(_(t)/_(e))),i}function V(t,e){return le(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function we(t,e,r){if(!$(e,r))return V(t,r);let a=[e[1]-r[1],Math.min(e[3],r[3])-Math.max(e[1],r[1]),r[3]-e[3],123456],i=[e[0]-r[0],Math.min(e[2],r[2])-Math.max(e[0],r[0]),r[2]-e[2],123456],n=r[2]-r[0],l=r[3]-r[1],s=i[0]>0&&i[2]>0?3:2,m=a[0]>0&&a[2]>0?3:2,o=(m+1)*(s+1),c=re(3*o),u=ie(2*o),d=new Array(6*(m*s-1)),T=0,P=0,z=0,p=0,y=0;for(let E=0;E<4;E++){let F=a[E];if(F<=0)continue;let C=0;for(let v=0;v<4;v++){let U=i[v];U<=0||(c[P++]=r[0]+C,c[P++]=r[1]+T,c[P++]=-1,u[z++]=C/n,u[z++]=T/l,v<3&&E<3&&(v!==1||E!==1)&&(d[y++]=p,d[y++]=p+1,d[y++]=p+s+1,d[y++]=p+1,d[y++]=p+s+2,d[y++]=p+s+1),p++,C+=U)}T+=F}let xe=new Array(d.length);return new ne(t,[[G.POSITION,new O(c,d,3,!0)],[G.NORMAL,new O(_e,xe,3,!0)],[G.UV0,new O(u,d,2,!0)]])}var _e=[0,0,1];var g=class extends he(de(me)){constructor(){super(...arguments),this.drapeSourceType=ce.RasterImage,this.updatePolicy=pe.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=Z(t=>h(this,null,function*(){this.destroyed||(yield this._doRefresh(t).catch(e=>{I(e)||R.getLogger(this).error(e)}))}),2e3)}get visibleAtCurrentScale(){let t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return ae(e,this.view.scale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(W(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ue(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((r,a)=>{this._overlays[a]=r,this._updateImageExtent(r,a)})}_updateImageExtent(t,e){let r=this._clippedExtent(t.extent,Ee);if(r==null)return;let a=ye(t.extent,r,t.resolution),i=t.pixelRatio*this.view.state.pixelRatio,{layer:n}=this;if("imageMaxWidth"in n&&n.imageMaxWidth!=null||"imageMaxHeight"in n&&n.imageMaxHeight!=null){let s=n.imageMaxWidth,m=n.imageMaxHeight;if(a.width>s){let o=s/a.width;a.height=Math.floor(a.height*o),a.width=s,i*=o}if(a.height>m){let o=m/a.height;a.width=Math.floor(a.width*o),a.height=m,i*=o}}let l=this._extents[e];l&&te(l.extent,r)&&this._imageSizeEquals(r,l.imageSize,a)||(this._extents[e]={extent:S(r),imageSize:a,pixelRatio:i},this.suspended||this._fetch(e).catch(s=>{I(s)||R.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}doRefresh(){return h(this,null,function*(){return this._doRefresh()})}_doRefresh(t){return h(this,null,function*(){if(this.suspended)return;let e=[];for(let r=0;r<this._extents.length;r++)this._extents[r]&&e.push(this._fetch(r,t));yield Promise.allSettled(e)})}processResult(t,e,r){return h(this,null,function*(){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)})}findExtentInfoAt(t){for(let e of this._extents){let r=e.extent;if(new H(r[0],r[1],r[2],r[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}redraw(t,e){return h(this,null,function*(){yield K(this._images,(r,a)=>h(this,null,function*(){r&&(yield t(r,e),yield this._createStageObjects(a,r.image,e))}))})}_imageSizeEquals(t,e,r){if(!this.maximumDataResolution)return!1;let a=x(t)/this.maximumDataResolution.x,i=_(t)/this.maximumDataResolution.y,n=a/e.width,l=i/e.height,s=a/r.width,m=i/r.height,o=Math.abs(n-s),c=Math.abs(l-m),u=se.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=u&&c<=u}_fetch(t,e){return h(this,null,function*(){if(this.suspended)return;let r=this._extents[t],a=r.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:S(a)});let i=this._images[t];i.loadingAbortController=L(i.loadingAbortController);let n=new H(a[0],a[1],a[2],a[3],this._spatialReference);if(n.width===0||n.height===0)return void this._clearImage(t);let l=new AbortController;i.loadingAbortController=l,Y(e,()=>l.abort());let s=l.signal,m=this._waitFetchReady(s).then(()=>h(this,null,function*(){let o=j(q({requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio},this.getFetchOptions()),{signal:s}),{height:c,width:u}=r.imageSize;return this.layer.fetchImage(n,u,c,o)})).then(o=>{if(B(s))throw R.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),k();return this.processResult(i,o)}).then(()=>{M(i.renderExtent,a)});i.loadingPromise=m,yield this._updatingHandles.addPromise(m.then(()=>h(this,null,function*(){A(s),yield this._createStageObjects(t,i.image,s)})).catch(o=>{throw o&&!I(o)&&R.getLogger(this).error(o),o}).finally(()=>{m===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))})}_clearImage(t){let e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],D.UPDATE),e.renderGeometry=null);let r=this.view._stage,a=e.texture;a?.unload(),r.remove(a),e.texture=null,r.remove(e.material),e.material=null,e.loadingAbortController=L(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}_createStageObjects(t,e,r){return h(this,null,function*(){let a=this.view._stage,i=this._images[t],n=()=>{i.texture?.unload(),a.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],D.UPDATE),i.renderGeometry=null)};if(e){let l=new oe(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:N.CLAMP_TO_EDGE,t:N.CLAMP_TO_EDGE}}),s;if(yield Q(this._images[t===b.INNER?b.OUTER:b.INNER].loadingPromise),A(r),n(),yield a.schedule(()=>l.load(a.renderView.renderingContext),r),a.add(l),i.texture=l,i.material==null?(i.material=new fe({textureId:l.id}),a.add(i.material)):i.material.setParameters({textureId:l.id}),t===b.INNER)s=V(i.material,i.renderExtent);else{let m=this._images[0].renderExtent;if(!m)return void n();s=we(i.material,m,i.renderExtent)}i.renderGeometry=new ge(s),i.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],D.UPDATE)}else n(),a.remove(i.material),i.material=null})}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return M(e,t);let r=this.view.basemapTerrain;return r.ready?ee(t,r.extent,e):M(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}_waitFetchReady(t){return h(this,null,function*(){yield X(()=>this.view.stationary,t),A(t)})}};f([w()],g.prototype,"layer",void 0),f([w()],g.prototype,"suspended",void 0),f([w({readOnly:!0})],g.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([w({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),f([w()],g.prototype,"updating",void 0),g=f([J("esri.views.3d.layers.DynamicLayerView3D")],g);var at=g,Ee=S();export{at as a};
