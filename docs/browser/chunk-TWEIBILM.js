import{b as J}from"./chunk-X7CRJ427.js";import{a as g}from"./chunk-RPMDOAYZ.js";import{b as Z}from"./chunk-TCQTMUK4.js";import{b as V,c as X}from"./chunk-6BV3ATJ4.js";import{b as G,d as H}from"./chunk-OC7V2CEX.js";import{a as f}from"./chunk-RRDM7P6F.js";import{a as j,d as F}from"./chunk-O4AQRVFI.js";import{k as I,l as B}from"./chunk-BDF7KEUQ.js";import{a as b}from"./chunk-HWN5REN7.js";import{a as k}from"./chunk-YFBPRKIN.js";import{a as L,c as U,f as c}from"./chunk-YRTBL7EE.js";import{c as W,m as $}from"./chunk-3FPO2LOS.js";import{a as D}from"./chunk-PYQRTZNZ.js";import{a as Y}from"./chunk-VWF5VUO3.js";import{K as E,Q as v,S as N}from"./chunk-GGZQ5GCM.js";import{U as P}from"./chunk-TFUPB3ZG.js";import{a as u}from"./chunk-BMVJCP2M.js";import{c as y,d as T}from"./chunk-WGF2T2BG.js";import{r as C}from"./chunk-3IBUFXWY.js";import{g as O}from"./chunk-JEGVIFEP.js";var q=class{constructor(t,e="center",i=!1,r=b(),a=U(0,0,0,-1),n="world",o=D(),d=0){this.verticalOffset=t,this.anchor=e,this.hasLabelVerticalOffset=i,this.screenOffset=r,this.centerOffset=a,this.centerOffsetUnits=n,this.translation=o,this.elevationOffset=d}},K=class{constructor(t,e="center",i="center",r=null,a=b()){this.placement=t,this.horizontalPlacement=e,this.verticalPlacement=i,this.text=r,this.displaySize=a}};var Q=class s{constructor(t){this.definition=t,this.key=JSON.stringify(t),this.haloSize=Math.round(t.halo.size),this.textStyle=tt(t.color),this.haloStyle=it(t.halo.color),this.backgroundStyle=t.background.color[3]!==0?tt(t.background.color):null}fontString(t){let e=this.definition.font;return`${e.style} ${e.weight} ${t}px ${e.family}, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`}setFontProperties(t,e){t.font=this.fontString(e),t.textAlign="left",t.textBaseline="alphabetic"}static fromSymbol(t,e){return O(this,null,function*(){let i=t?.material?.color,r=f.toUnitRGBA(i)??c,a=t.size!=null?k(t.size):12,n=t.lineHeight,o=t.background!=null?f.toUnitRGBA(t.background.color):c,d={family:t.font?.family??"sans-serif",decoration:t.font?.decoration??"none",weight:t.font?.weight??"normal",style:t.font?.style??"normal"},m=t.halo,st=m?.color!=null&&m.size>0?{size:k(m.size),color:f.toUnitRGBA(m.color)}:{size:0,color:c},S=new s({color:r,size:a,background:{color:o,padding:t.background!=null?[.65*a,.5*a]:[0,0],borderRadius:t.background!=null?a*(6/16):0},lineSpacingFactor:n,font:d,halo:st,pixelRatio:e});if(t.font){let M=!1,z=S.fontString(a);try{M=(yield document.fonts.load(z)).some(w=>!X(w))}catch{C.getLogger("esri.views.3d.webgl-engine.lib.TextRenderParameters").warnOnce(`Failed to preload font '${z}'. Some text symbology may be rendered using the default browser font.`)}if(!M&&!rt.has(t.font.family))try{yield V(t.font)}catch{}}return S})}};function it(s){return`rgb(${s.slice(0,3).map(t=>Math.floor(255*t)).toString()})`}function tt(s){return`rgba(${s.slice(0,3).map(t=>Math.floor(255*t)).toString()},${s[3]})`}var rt=new Set(["Arial","Times New Roman","Courier New","serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]);var l=4096,p=class extends N{constructor(s){super(s),this.type=Z.Texture,this.id=E(),this.events=new Y,this._glTexture=null,this._atlas=new A(256,256),this._needsRepack=!1,this._canRepack=!0,this._elementsToRender=new Map,this._elements=new Map,this._uvCallbacks=new Map,this.updating=!1}initialize(){this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","textAtlasCanvas"),this._canvas.setAttribute("style","display:none"),this._ctx=this._canvas.getContext("2d"),this._stage=this.view._stage,this._stage.add(this),this._updateCanvasElementSize(this._atlas),this._reset()}unload(){this._glTexture=y(this._glTexture),this._frameWorker=T(this._frameWorker),this.updating=!1,this.events.emit("unloaded")}get glTexture(){return this._glTexture}static get maxSize(){return _=J.stableRendering?h:0,[l-h-_,l-h-_-et]}load(s){if(this._glTexture)return this._glTexture;let t=new G;return t.wrapMode=B.CLAMP_TO_EDGE,t.samplingMode=I.LINEAR_MIPMAP_LINEAR,t.hasMipmap=!0,t.preMultiplyAlpha=!0,t.maxAnisotropy=s.parameters.maxMaxAnisotropy,this._glTexture=new H(s,t,this._canvas),this._frameWorker=this.view.resourceController.scheduler.registerTask(F.TEXT_TEXTURE_ATLAS,this),this.setDirty(),this._glTexture}dispose(){this._elements.clear(),this._elementsToRender.clear(),this._frameWorker=T(this._frameWorker),this._glTexture&&(this._stage.remove(this),this._glTexture=y(this._glTexture)),this._canvas.width=0,this._canvas.height=0,this._canvas=null,this._ctx=null}_updateCanvasElementSize(s){this._canvas.width=s.width,this._canvas.height=s.height}_resizeAtlas(s,t){let{width:e,height:i}=this._atlas;e===s&&i===t||(this._atlas.width=s,this._atlas.height=t,this._glTexture?.resize(s,t),this._glTexture?.updateData(0,0,0,e,i,this._canvas),this._updateCanvasElementSize(this._atlas),this._elements.forEach(r=>this._uvCallbacks.get(r.textRenderer.key)?.forEach(a=>a(r.uv))),this._reset())}_reset(){this._elementsToRender.clear(),this._atlas.reset(),this._needsRepack=!0,this.setDirty()}_addAtlasElement(s,t,e,i){let r=this._atlas;if(r.width<e||r.height<i)return!1;let a=r.cursors.get(i);if(!a){if(r.height<r.nextY+i)return!1;a=[new x(r.nextY)],r.cursors.set(i,a),r.nextY+=i}let n=a.find(o=>r.width>=o.x+e);if(n==null){if(r.height<r.nextY+i)return!1;n=new x(r.nextY),r.nextY+=i,a.push(n)}return s.setNewPosition(n),this._elements.set(t,s),this._elementsToRender.set(t,s),n.x+=e,!0}_ensureCallbacks(s){let t=this._uvCallbacks.get(s);if(t)return t;let e=new Set;return this._uvCallbacks.set(s,e),e}_addCallback(s,t){this._ensureCallbacks(s).add(t)}_removeCallback(s,t){let e=this._uvCallbacks.get(s);return!(!e?.delete(t)||e.size!==0)&&(this._uvCallbacks.delete(s),!0)}_processAddition(s){let t=s.textRenderer.key;if(this._needsRepack)return void this._elements.set(t,s);let e=this._atlas,i=s.textRenderer.renderedWidth,r=s.textRenderer.renderedHeight,a=i+h,n=r+h+et;if(!this._addAtlasElement(s,t,a,n)){if(this._canRepack)this._reset();else if(e.width<a){let o=Math.min(g(Math.max(a,1.5*e.width)),l);this._resizeAtlas(o,e.height)}else{let o=e.nextY+n,d=Math.min(g(Math.max(o,1.5*e.height)),l);if(d>e.height)this._resizeAtlas(e.width,d);else if(e.width<l){let m=Math.min(g(1.5*e.width),l);this._resizeAtlas(m,e.height)}}this._elements.set(t,s)}}_renderElement(s){let t=s.commitNewPosition(),e=s.textRenderer;this._ctx.clearRect(t[0]-h,t[1]-h,e.renderedWidth+2*h,e.renderedHeight+2*h),e.render(this._ctx,t[0],t[1]),this._uvCallbacks.get(e.key)?.forEach(i=>i(s.uv))}get running(){return this.updating}runTask(s){if(this._glTexture==null)return j;for(;this._needsRepack&&(this._canRepack||this._atlas.height<l&&this._atlas.height<l);){this._canRepack=this._needsRepack=!1;let t=this._elements;this._elements=new Map,t.forEach(e=>this._processAddition(e)),s.madeProgress()}if(this._elementsToRender.size>0){for(let[t,e]of this._elementsToRender){if(s.done)break;this._renderElement(e),this._elementsToRender.delete(t),s.madeProgress()}this._glTexture.setData(this._canvas)}this.updating=this._elementsToRender.size>0}addText(s,t){let e=s.key;this._addCallback(e,t);let i=this._elements.get(e);return i?$(i.uv,c)||t(i.uv):(i=new R(this._atlas,s),this._processAddition(i),this.setDirty()),{remove:()=>this._removeText(s,t)}}_removeText(s,t){let e=s.key;this._elements.get(e)&&this._removeCallback(e,t)&&(this._elements.delete(e),this._elementsToRender.delete(e),this._canRepack=!0)}setDirty(){this._glTexture&&(this.updating=!0)}get test(){}};u([v({constructOnly:!0})],p.prototype,"view",void 0),u([v({type:Boolean})],p.prototype,"updating",void 0),p=u([P("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],p);var h=2,et=2,R=class{constructor(t,e){this._atlas=t,this.textRenderer=e,this._uv=L(),this._newPosition=[0,0]}get uv(){if(this._xOffset==null||this._yOffset==null)return c;let{renderedWidth:t,renderedHeight:e}=this.textRenderer;return W(this._uv,this._xOffset/this._atlas.width,(this._yOffset+e)/this._atlas.height,(this._xOffset+t)/this._atlas.width,this._yOffset/this._atlas.height)}setNewPosition(t){this._newPosition[0]=t.x,this._newPosition[1]=t.y}commitNewPosition(){return this._xOffset=this._newPosition[0],this._yOffset=this._newPosition[1],this._newPosition}get xOffset(){return this._xOffset}get yOffset(){return this._yOffset}},A=class{constructor(t,e){this.width=t,this.height=e,this.cursors=new Map,this.nextY=0}reset(){this.cursors.clear(),this.nextY=_}},x=class{constructor(t){this.y=t,this.x=_}},_=0;export{q as a,K as b,Q as c,p as d};
