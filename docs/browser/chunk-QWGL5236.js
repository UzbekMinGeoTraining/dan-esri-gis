import{a as K}from"./chunk-55A6ZSIC.js";import{a as R}from"./chunk-3FCM74ZB.js";import{a as F}from"./chunk-AO7UDTUI.js";import{a as E,h as H}from"./chunk-MBJHSEMD.js";import{k as _}from"./chunk-TEY6TKJV.js";import{j}from"./chunk-4M6XQSBA.js";import{Q as w,S as k,x as M}from"./chunk-GGZQ5GCM.js";import{U as P}from"./chunk-TFUPB3ZG.js";import{a as y}from"./chunk-BMVJCP2M.js";import{a as L,k as U,n as C,q as I,t as T}from"./chunk-GMC3I5VG.js";import{a as x}from"./chunk-VEDIBGHD.js";import{b as q,t as m}from"./chunk-3IBUFXWY.js";import{M as z,O as S}from"./chunk-BP73DJTS.js";import{a as v,b as g,g as $}from"./chunk-JEGVIFEP.js";function N(e,i=!1){return e<=S?i?new Array(e).fill(0):new Array(e):new Uint32Array(e)}var b=class e{constructor(i){Q(i);let{location:a,data:t}=i;this.location=Object.freeze(q(a));let r=this.location.width,o=this.location.height,n=!0,s=!0,c=Math.ceil(r*o/32),l=N(c),h=0;for(let f=0;f<t.length;f++){let u=f%32;t[f]?(s=!1,l[h]|=1<<u):n=!1,u===31&&++h}s?(this._availability="unavailable",this.byteSize=40):n?(this._availability="available",this.byteSize=40):(this._availability=l,this.byteSize=40+z(l))}getAvailability(i,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;let t=(i-this.location.top)*this.location.width+(a-this.location.left),r=t%32,o=t>>5,n=this._availability;return o<0||o>n.length?"unknown":n[o]&1<<r?"available":"unavailable"}static fromDefinition(i,a){let t=i.service.request||_,{row:r,col:o,width:n,height:s}=i,c={query:{f:"json"}};return a=a?v(v({},c),a):c,t(G(i),a).then(l=>l.data).catch(l=>{if(l?.details?.httpStatus===422)return{location:{top:r,left:o,width:n,height:s},valid:!0,data:new Array(n*s).fill(0)};throw l}).then(l=>{if(l.location&&(l.location.top!==r||l.location.left!==o||l.location.width!==n||l.location.height!==s))throw new m("tilemap:location-mismatch","Tilemap response for different location than requested",{response:l,definition:{top:r,left:o,width:n,height:s}});return e.fromJSON(l)})}static fromJSON(i){return Object.freeze(new e(i))}};function D(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function G(e){let i;if(e.service.tileServers?.length){let t=e.service.tileServers;i=`${t&&t.length?t[e.row%t.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else i=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;let a=e.service.query;return a&&(i=`${i}?${a}`),i}function Q(e){if(!e?.location)throw new m("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new m("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new m("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new m("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new m("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var d;function B(e,i,a){return new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a})}var p=d=class extends k{constructor(e){super(e),this._pendingTilemapRequests={},this.request=_,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new F(2*K.MEGABYTES),this.addHandles(E(()=>{let{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]},()=>this._initializeTilemapDefinition(),H))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";let t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(B(e,i,a)):this._fetchTilemap(e,i,a,t).catch(r=>r).then(r=>{if(r instanceof b){let o=r.getAvailability(i,a);if(o==="unavailable")throw B(e,i,a);return o}if(T(r))throw r;return"unknown"})}fetchAvailabilityUpsample(e,i,a,t,r){t.level=e,t.row=i,t.col=a;let o=this.layer.tileInfo;o.updateTileInfo(t);let n=this.fetchAvailability(e,i,a,r).catch(s=>{if(T(s))throw s;if(o.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t,r);throw s});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,r,n),n}_fetchAvailabilityUpsamplePrefetch(e,i,a,t,r,o){return $(this,null,function*(){if(!this._prefetchingEnabled||e==null)return;let n=`prefetch-${e}`;if(this.hasHandles(n))return;let s=new AbortController;o.then(()=>s.abort(),()=>s.abort());let c=!1,l=L(()=>{c||(c=!0,s.abort())});if(this.addHandles(l,n),yield M(10,s.signal).catch(()=>{}),c||(c=!0,this.removeHandles(n)),C(s))return;let h=new R(e,i,a,t),f=g(v({},r),{signal:s.signal}),u=this.layer.tileInfo;for(let J=0;d._prefetches.length<d._maxPrefetch&&u.upsampleTile(h);++J){let A=this.fetchAvailability(h.level,h.row,h.col,f);d._prefetches.push(A);let O=()=>{d._prefetches.removeUnordered(A)};A.then(O,O)}})}_fetchTilemap(e,i,a,t){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new m("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));let r=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,i,a,r);if(o)return Promise.resolve(o);let n=t?.signal;return t=g(v({},t),{signal:null}),new Promise((s,c)=>{I(n,()=>c(U()));let l=D(r),h=this._pendingTilemapRequests[l];if(!h){h=b.fromDefinition(r,t).then(u=>(this._tilemapCache.put(l,u,u.byteSize),u));let f=()=>{delete this._pendingTilemapRequests[l]};this._pendingTilemapRequests[l]=h,h.then(f,f)}h.then(s,c)})}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;let{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:j(g(v(v({},e.query),a),{token:i??e.query?.token})),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;let r=D(t);return this._tilemapCache.get(r)}get test(){}};p._maxPrefetch=4,p._prefetches=new x({initialSize:d._maxPrefetch}),y([w({constructOnly:!0})],p.prototype,"layer",void 0),y([w({constructOnly:!0})],p.prototype,"minLOD",void 0),y([w({constructOnly:!0})],p.prototype,"maxLOD",void 0),y([w({constructOnly:!0})],p.prototype,"request",void 0),y([w({constructOnly:!0})],p.prototype,"size",void 0),p=d=y([P("esri.layers.support.TilemapCache")],p);export{p as a};
