import{c as lt}from"./chunk-NPF6KTZO.js";import{b as D}from"./chunk-BUWHOOA3.js";import{a as F}from"./chunk-S2HMCZNZ.js";import{a as mt}from"./chunk-2DN2BYDF.js";import{c as ut}from"./chunk-Q6D44QVW.js";import{a as E}from"./chunk-NPIYHDQ7.js";import{d as ht}from"./chunk-4OZVVJHM.js";import{a as j}from"./chunk-XXOIKNT6.js";import{a as nt}from"./chunk-4RLJMQW4.js";import{a as x}from"./chunk-EBGO44EK.js";import{a as it,d as at,f as ot}from"./chunk-5MNDZ6BX.js";import{a as rt}from"./chunk-PYQRTZNZ.js";import{a as st}from"./chunk-5PTS4JDF.js";import{B as $,Q as tt}from"./chunk-GGZQ5GCM.js";import{U as et}from"./chunk-TFUPB3ZG.js";import{a as q}from"./chunk-BMVJCP2M.js";import{c as Z}from"./chunk-WGF2T2BG.js";import{a as A}from"./chunk-VEDIBGHD.js";import{o as U,q as X}from"./chunk-BP73DJTS.js";var B=class{constructor(e,s){this._material=e,this._repository=s,this._map=new Map}dispose(){this._map.forEach((e,s)=>{e!=null&&this._repository.release(this._material,s)})}load(e,s,i){if(!this._material.produces.get(s)?.(i))return null;this._map.has(i)||this._map.set(i,this._repository.acquire(this._material,s,i));let a=this._map.get(i);if(a!=null){if(a.ensureResources(e)===ht.LOADED)return a;this._repository.requestRender()}return null}};var M=class extends ut{constructor(e=rt()){super(),this.origin=e}get slicePlaneLocalOrigin(){return this.origin}};var O=class{constructor(e=0,s=0){this.from=e,this.to=s}get numElements(){return this.to-this.from}};function k(t){let e=new Map;t.forAll(i=>e.set(i.from,i));let s=!0;for(;s;){s=!1;for(let i=0;i<t.length;++i){let r=t.data[i],a=e.get(r.to);if(!a)return;r.to=a.to,e.delete(a.from),t.removeUnordered(a),s=!0}}}var R=class extends O{constructor(e,s,i){super(s,i),this.geometry=e}get isVisible(){return this.geometry.visible}get hasHighlights(){return this.isVisible&&this.geometry.hasHighlights}foreachHighlightGroup(e){this.isVisible&&this.geometry.foreachHighlightGroup(e)}get hasOccludees(){return this.geometry.occludees!=null}};var G=class{constructor(){this.first=0,this.count=0}};var L=class{constructor(){this._numElements=0,this._instances=new Map,this.holes=new A({allocator:e=>e||new O,deallocator:null}),this.hasHiddenInstances=!1,this.hasOccludees=!1,this.drawCommandsDirty=!0,this.highlightGroups=new Set,this.drawCommandsDefault=I(),this.drawCommandsHighlights=new Map,this.drawCommandsOccludees=I(),this.drawCommandsShadowHighlightRest=I()}get numElements(){return this._numElements}get instances(){return this._instances}get hasHighlights(){return this.highlightGroups.size>0}resetInstanceSummary(){this.hasHiddenInstances=!1,this.hasOccludees=!1,this.highlightGroups.clear()}updateIfDrawCommandsDirty(e){if(this.drawCommandsDirty){this.resetInstanceSummary();for(let s of this.instances.values())this.updateDrawState(s);this.updateDrawCommands(e)}}addInstance(e,s){this.deleteInstance(e),this._instances.set(e,s),this._numElements+=s.numElements}deleteInstance(e){let s=this._instances.get(e);s&&(this._numElements-=s.numElements,this._instances.delete(e))}updateInstance(e,s,i){let r=this._instances.get(e);r&&(this._numElements-=r.numElements,r.from=s,r.to=i,this._numElements+=r.numElements)}updateDrawState(e){e.isVisible?(e.foreachHighlightGroup(s=>this.highlightGroups.add(s)),e.hasOccludees&&(this.hasOccludees=!0)):this.hasHiddenInstances=!0}updateDrawCommands(e){if(this.drawCommandsDefault.clear(),this.drawCommandsHighlights.clear(),this.drawCommandsOccludees.clear(),this.drawCommandsShadowHighlightRest.clear(),this.drawCommandsDirty=!1,this._instances.size===0)return;if(!this.needsMultipleCommands()){let r=this.drawCommandsDefault.pushNew(),a=this.holes.front();return this.vao!=null&&this.holes.length===1&&a.to===Math.floor(this.vao.byteSize/e)?(r.first=0,void(r.count=a.from)):(r.first=1/0,r.count=0,this._instances.forEach(o=>{r.first=Math.min(r.first,o.from),r.count=Math.max(r.count,o.to)}),void(r.count-=r.first))}let s=Array.from(this._instances.values()).sort((r,a)=>r.from===a.from?r.to-a.to:r.from-a.from),{drawCommandsHighlights:i}=this;for(let r of s)r.isVisible&&(Y(r.hasOccludees?this.drawCommandsOccludees:this.drawCommandsDefault,r),r.hasHighlights?r.foreachHighlightGroup(a=>{let o=i.get(a);o||(o=I(),i.set(a,o)),Y(o,r)}):Y(this.drawCommandsShadowHighlightRest,r))}needsMultipleCommands(){return this.hasOccludees||this.hasHighlights||this.hasHiddenInstances}};function ct(t){return t.vao!=null}function I(){return new A({allocator:t=>t||new G,deallocator:t=>t})}function Y(t,e){let s=t.back();if(s==null){let i=t.pushNew();return i.first=e.from,void(i.count=e.numElements)}if(yt(s,e)){let i=e.from-s.first+e.numElements;s.count=i}else{let i=t.pushNew();i.first=e.from,i.count=e.numElements}}function yt(t,e){return t.first+t.count>=e.from}var P=class{constructor(e){this.origin=e,this.buffers=new Array}dispose(){this.buffers.forEach(e=>e.vao.dispose()),this.buffers.length=0}findBuffer(e){return this.buffers.find(s=>s.instances.has(e))}};var J=class extends lt{get _hasAnyHighlight(){return this._highlightGroups.size>0}constructor(t){super(t),this._dataByOrigin=new Map,this._drawParameters=new M,this._highlightGroups=new Set,this.drapedPriority=0,this._produces=new Map,this._hasOccludees=!1}destroy(){this._glMaterials=Z(this._glMaterials),this._dataByOrigin.forEach(t=>t.dispose()),this._dataByOrigin.clear(),this._vaoCache=null}initialize(){this.material.produces.forEach((t,e)=>{this._produces.set(e,s=>!(this._dataByOrigin.size===0||!(s!==E.Highlight&&s!==E.ShadowHighlight||this._hasAnyHighlight))&&t(s))})}initializeRenderContext(t,e){this._glMaterials=new B(this.material,e??t.materials),this._bufferWriter=this.material.createBufferWriter(),this._vaoCache=t.renderContext.rctx.getVaoCache(this.material.vertexAttributeLocations,nt(this._bufferWriter.vertexBufferLayout))}uninitializeRenderContext(){}get produces(){return this._produces}get hasOccludees(){return this._hasOccludees}get hasEmissions(){return this.material.hasEmissions}get isDecoration(){return this.material.parameters.isDecoration}queryRenderOccludedState(t){return this.material.queryRenderOccludedState(t)}get numGeometries(){let t=0;return this._dataByOrigin.forEach(e=>t+=e.buffers.reduce((s,i)=>s+i.instances.size,0)),t}get usedMemory(){let t=0;return this._dataByOrigin.forEach(e=>t+=e.buffers.reduce((s,i)=>s+i.vao.usedMemory,0)),t}forEachGeometry(t){this._dataByOrigin.forEach(e=>e.buffers.forEach(s=>s.instances.forEach(({geometry:i})=>t(i))))}modify(t){this._updateGeometries(t.updates),this._addAndRemoveGeometries(t.adds,t.removes),this._updateDrawCommands()}_updateGeometries(t){let e=this._bufferWriter;if(e==null)return;let s=e.vertexBufferLayout.stride/4;for(let i of t){let r=i.renderGeometry,a=this._dataByOrigin.get(r.localOrigin.id),o=a?.findBuffer(r.id);if(o==null)return;let n=o.instances.get(r.id);if(i.updateType&(D.GEOMETRY|D.TRANSFORMATION)){let l=T(e.elementCount(n.geometry.geometry.attributes)*s),u=e.vertexBufferLayout.createView(l.buffer);this._writeGeometry(r,u,0),o.vao.vertexBuffers.get("geometry").setSubData(l,n.from*s,0,n.numElements*s)}i.updateType&(D.HIGHLIGHT|D.OCCLUDEE|D.VISIBILITY)&&(o.drawCommandsDirty=!0)}}_computeDeltas(t,e){let s=new mt;for(let i of t){let r=i.localOrigin;if(r==null)continue;let a=s.get(r.id,null);a==null&&(a=new N(r.vec3),s.set(r.id,null,a)),a.changes.push(i)}for(let i of e){let r=i.localOrigin;if(r==null)continue;let a=this._dataByOrigin.get(r.id),o=a?.findBuffer(i.id);if(o==null)continue;let n=s.get(r.id,o);n==null&&(n=new N(r.vec3),s.set(r.id,o,n)),n.changes.push(i)}return s}_addAndRemoveGeometries(t,e){if(this._bufferWriter==null||this._vaoCache==null)return;let{_bufferWriter:s,_dataByOrigin:i}=this,r=s.vertexBufferLayout.stride/4,a=this._computeDeltas(t,e);a.forEach((o,n)=>{let l=o.get(null),u=l?.changes??[];a.delete(n,null);let f=i.get(n);if(o.forEach((c,h)=>{if(a.delete(n,h),h==null)return void x(!1,"No VAO for removed geometries");if(h.instances.size===c.changes.length)return this._vaoCache.deleteVao(h.vao),U(f.buffers,h),void(f.buffers.length===0&&u.length===0&&i.delete(n));let m=h.numElements,y=h.vao.byteSize/4,d=u.reduce((_,C)=>_+s.elementCount(C.geometry.attributes),0),p=c.changes.reduce((_,C)=>_+s.elementCount(C.geometry.attributes),0),g=Math.min((m+d-p)*r,z),w=g>y;g>W&&g<y/2?(c.changes.forEach(({id:_})=>h.deleteInstance(_)),h.instances.forEach(({geometry:_})=>u.push(_)),this._vaoCache.deleteVao(h.vao),U(f.buffers,h)):w?this._applyAndRebuild(h,u,c):this._applyRemoves(h,c)}),u.length>0)for(f==null&&(f=new P(l.origin),i.set(n,f)),f.buffers.forEach(c=>this._applyAdds(c,u));u.length>0;)f.buffers.push(this._applyAndRebuild(new L,u,null))})}_updateDrawCommands(){this._highlightGroups.clear(),this._hasOccludees=!1,this._dataByOrigin.forEach(t=>{t.buffers.forEach(e=>{e.updateIfDrawCommandsDirty(this._bufferWriter.vertexBufferLayout.stride),e.hasHighlights&&$(this._highlightGroups,e.highlightGroups),this._hasOccludees=this._hasOccludees||e.hasOccludees})})}_applyAndRebuild(t,e,s){if(s)for(let m of s.changes)t.deleteInstance(m.id);let i=this._bufferWriter,r=i.vertexBufferLayout.stride,a=r/4,o=Math.floor(z/a),n=t.numElements;for(;e.length>0;){let m=e.pop(),y=i.elementCount(m.geometry.attributes);if(n+y>o&&n>0){e.push(m);break}n+=y;let d=new R(m,0,0);x(t.instances.get(m.id)==null),t.addInstance(m.id,d)}let l=n*a,u=T(l),f=i.vertexBufferLayout.createView(u.buffer),c=0;t.resetInstanceSummary(),t.instances.forEach((m,y)=>{this._writeGeometry(m.geometry,f,c);let d=c;c+=i.elementCount(m.geometry.geometry.attributes),t.updateInstance(y,d,c),t.updateDrawState(m)}),this._vaoCache.deleteVao(t.vao),t.vao=this._vaoCache.newVao(dt(l)),t.vao.vertexBuffers.get("geometry").setSubData(u,0,0,c*a),t.holes.clear();let h=t.holes.pushNew();return h.from=c,h.to=Math.floor(t.vao.byteSize/r),t.updateDrawCommands(r),t}_applyRemoves(t,e){if(e.changes.length===0||this._bufferWriter==null)return;for(let o of e.changes){let n=o.id,l=t.instances.get(n);if(!l)continue;t.deleteInstance(n);let u=v.back();if(u){if(u.to===l.from){u.to=l.to;continue}if(u.from===l.to){u.from=l.from;continue}}let f=v.pushNew();f.from=l.from,f.to=l.to}k(v);let s=this._bufferWriter.vertexBufferLayout.stride/4,i=v.reduce((o,n)=>Math.max(o,n.numElements),0)*s,r=T(i);r.fill(0,0,i);let a=t.vao.vertexBuffers.get("geometry");v.forAll(o=>a.setSubData(r,o.from*s,0,o.numElements*s)),t.holes.pushArray(v.data,v.length),v.forAll((o,n)=>v.data[n]=null),v.clear(),t.drawCommandsDirty=!0}_applyAdds(t,e){if(e.length===0||this._bufferWriter==null)return;if(!ct(t))return void this._applyAndRebuild(t,e,null);let s=this._bufferWriter,i=s.vertexBufferLayout.stride/4,r=t.numElements,a=e.reduce((p,g)=>p+s.elementCount(g.geometry.attributes),0),o=Math.min((r+a)*i,z),n=4*o;if(t.vao.byteSize<dt(z-W)&&n>t.vao.byteSize)return void this._applyAndRebuild(t,e,null);k(t.holes);let l=new Array;for(let p of e){let g=s.elementCount(p.geometry.attributes),w=_t(t.holes,g);l.push(w)}let u=t.vao.vertexBuffers.get("geometry"),f=0,c=0,h=0,m=T(o),y=s.vertexBufferLayout.createView(m.buffer);e.forEach((p,g)=>{let w=l[g];if(w==null)return;if(h!==w){let b=h-c;b>0&&u.setSubData(m,c*i,0,b*i),c=w,f=0}let _=s.elementCount(p.geometry.attributes);this._writeGeometry(p,y,f),f+=_,h=w+_;let C=new R(p,w,w+_);x(t.instances.get(p.id)==null),t.addInstance(p.id,C),t.drawCommandsDirty=!0});let d=h-c;d>0&&u.setSubData(m,c*i,0,d*i),X(e,(p,g)=>l[g]==null)}_writeGeometry(t,e,s){this._bufferWriter!=null&&(it(H,t.transformation),H[12]-=t.localOrigin.vec3[0],H[13]-=t.localOrigin.vec3[1],H[14]-=t.localOrigin.vec3[2],ot(V,H),at(V,V),this._bufferWriter.write(H,V,t.geometry.attributes,t.geometry.objectAndLayerIdColor,e,s))}updateAnimation(t){return this.material.update(t)}acquireTechniques(t){if(!this.material.shouldRender(t))return null;let{output:e,bind:s}=t;if(!this.material.produces.get(s.slot)?.(e))return null;let{highlightGroupName:r,slot:a}=s,o=e===E.ShadowHighlight,n=e===E.Highlight,l=n||o,u=h=>l&&(this._highlightGroups.size===0||n&&!!r&&!h.has(r));if(u(this._highlightGroups))return null;let f=e===E.ShadowExcludeHighlight,c=!(l||f);for(let{buffers:h}of this._dataByOrigin.values())for(let m of h){if(u(m.highlightGroups))continue;let y=o?m.drawCommandsHighlights.size>0:l?r?m.drawCommandsHighlights.get(r):m.drawCommandsHighlights.size>0:((f&&m.needsMultipleCommands()?m.drawCommandsShadowHighlightRest:m.drawCommandsDefault)||null)?.length??!1,d=c&&m.drawCommandsOccludees||null;if(y||d?.length){let p=this._glMaterials.load(t.rctx,a,e),g=p?.beginSlot(s);if(g)return g}}return null}render(t,e){let{output:s,bind:i}=t,{slot:r,highlightGroupName:a}=i,o=s===E.Highlight;if(o&&!a)return;let n=s===E.ShadowHighlight,l=o||n,u=s===E.ShadowExcludeHighlight,f=!(l||u),c=r===F.OCCLUDER_MATERIAL||r===F.TRANSPARENT_OCCLUDER_MATERIAL?r:null,{rctx:h}=t;h.runAppleAmdDriverHelper();let m=h.bindTechnique(e,i,this.material.parameters);for(let y of this._dataByOrigin.values())for(let d of y.buffers){if(o&&(!d.hasHighlights||!d.drawCommandsHighlights.has(a))||n&&!d.hasHighlights)continue;let p=()=>{let b=[];for(let S of d.drawCommandsHighlights.values())b.push(S);return b},g=l&&!n?d.drawCommandsHighlights.get(a)??null:null,w=n?p():l?g?[g]:gt:(u&&d.needsMultipleCommands()?[d.drawCommandsShadowHighlightRest]:[d.drawCommandsDefault])||gt,_=w.some(b=>b.length>0),C=f&&d.drawCommandsOccludees||null;if(_||C?.length){if(this._drawParameters.origin=y.origin,m.bindDraw(i,this.material.parameters,this._drawParameters),e.ensureAttributeLocations(d.vao),h.bindVAO(d.vao),_)for(let b of w)h.setPipelineState(e.getPipeline(!1,c)),b.forAll(S=>h.drawArrays(e.primitiveType,S.first,S.count));C?.length&&(h.setPipelineState(e.getPipeline(!0,c)),C.forAll(b=>h.drawArrays(e.primitiveType,b.first,b.count)))}}}get test(){}};q([tt({constructOnly:!0})],J.prototype,"material",void 0),J=q([et("esri.views.3d.webgl-engine.materials.renderers.MergedRenderer")],J);var N=class{constructor(e){this.origin=e,this.changes=new Array}};function _t(t,e){let s=t.find(r=>r.numElements>=e);if(s==null)return null;let i=s.from;return s.from+=e,s.from>=s.to&&t.removeUnordered(s),i}var H=j(),V=j(),v=new A({allocator:t=>t||new O,deallocator:null}),W=65536,K=4*W,ft=1024,pt=16777216,z=pt/4,Q=new Float32Array(W);function T(t){return Q.length<t&&(Q=new Float32Array(t)),Q}function dt(t){let e=4*t;return e<=ft?ft:e<K?st(e):Math.max(Math.min(Math.ceil(1.5*e/K)*K,pt),e)}var gt=[];export{B as a,M as b,J as c,dt as d};
