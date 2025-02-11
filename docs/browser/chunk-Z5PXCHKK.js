import{a as C}from"./chunk-TTXY6GKV.js";import{n as B}from"./chunk-4DLSYLKE.js";import{k as T}from"./chunk-TFUPB3ZG.js";function _(u,o){return[u,o]}function S(u,o,t){return u[0]=o,u[1]=t,u}function X(u,o,t,e,l){return u[0]=o,u[1]=t,u[2]=e,u[3]=l,u}var y=new C("0/0/0/0"),I=class u{static create(o,t,e=null){let l=B(o.spatialReference),i=t.origin||_(o.origin.x,o.origin.y),n=_(o.size[0]*t.resolution,o.size[1]*t.resolution),r=_(-1/0,-1/0),s=_(1/0,1/0),a=_(1/0,1/0);e!=null&&(S(r,Math.max(0,Math.floor((e.xmin-i[0])/n[0])),Math.max(0,Math.floor((i[1]-e.ymax)/n[1]))),S(s,Math.max(0,Math.floor((e.xmax-i[0])/n[0])),Math.max(0,Math.floor((i[1]-e.ymin)/n[1]))),S(a,s[0]-r[0]+1,s[1]-r[1]+1));let{cols:h,rows:m}=t,w,M,F,g;return!e&&h&&m&&(S(r,h[0],m[0]),S(s,h[1],m[1]),S(a,h[1]-h[0]+1,m[1]-m[0]+1)),o.isWrappable?(w=_(Math.ceil(Math.round((l.valid[1]-l.valid[0])/t.resolution)/o.size[0]),a[1]),M=!0,F=l.origin,g=l.valid):(w=a,M=!1),new u(t.level,t.resolution,t.scale,i,r,s,a,n,w,M,F,g)}constructor(o,t,e,l,i,n,r,s,a,h,m,w){this.level=o,this.resolution=t,this.scale=e,this.origin=l,this.first=i,this.last=n,this.size=r,this.norm=s,this.worldSize=a,this.wrap=h,this._spatialReferenceOrigin=m,this._spatialReferenceValid=w}normalizeCol(o){if(!this.wrap)return o;let t=this.worldSize[0];return o<0?t-1-Math.abs((o+1)%t):o%t}normalizeKey(o){if(!this.wrap)return;let t=this.worldSize[0],e=o.col;e<0?(o.col=e+t,o.world-=1):e>=t&&(o.col=e-t,o.world+=1)}denormalizeCol(o,t){return this.wrap?this.worldSize[0]*t+o:o}getWorldForColumn(o){return this.wrap?Math.floor(o/this.worldSize[0]):0}getFirstColumnForWorld(o){return o*this.worldSize[0]+this.first[0]}getLastColumnForWorld(o){return o*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(o){return(o-this.origin[0])/this.norm[0]}getXForColumn(o){let t=this.origin[0]+o*this.norm[0],e=this._spatialReferenceOrigin,l=this._spatialReferenceValid;return this.wrap&&e&&l?t===e[0]?l[0]:this.origin[0]===e[0]&&o===this.worldSize[0]?l[1]:t:t}getRowForY(o){return(this.origin[1]-o)/this.norm[1]}getYForRow(o){return this.origin[1]-o*this.norm[1]}getTileBounds(o,t,e=!1){y.set(t);let l=e?y.col:this.denormalizeCol(y.col,y.world),i=y.row;return X(o,this.getXForColumn(l),this.getYForRow(i+1),this.getXForColumn(l+1),this.getYForRow(i)),o}getTileCoords(o,t,e=!1){y.set(t);let l=e?y.col:this.denormalizeCol(y.col,y.world);return Array.isArray(o)?S(o,this.getXForColumn(l),this.getYForRow(y.row)):(o.x=this.getXForColumn(l),o.y=this.getYForRow(y.row)),o}};var z=class{constructor(){this.spans=[]}acquire(o){this.lodInfo=o}release(){this.lodInfo=null,this.spans.length=0}*keys(){let o=this.lodInfo;for(let{row:t,colFrom:e,colTo:l}of this.spans)for(let i=e;i<=l;i++){let n=o.getWorldForColumn(i);yield new C(o.level,t,o.normalizeCol(i),n)}}forEach(o,t){let{spans:e,lodInfo:l}=this,{level:i}=l;if(e.length!==0)for(let{row:n,colFrom:r,colTo:s}of e)for(let a=r;a<=s;a++)o.call(t,i,n,l.normalizeCol(a),l.getWorldForColumn(a))}};z.pool=new T(z);var x=class{constructor(o,t,e){this.row=o,this.colFrom=t,this.colTo=e}};var c=new C("0/0/0/0"),R=class u{static create(o,t){o[1]>t[1]&&([o,t]=[t,o]);let[e,l]=o,[i,n]=t,r=i-e,s=n-l,a=s!==0?r/s:0,h=(Math.ceil(l)-l)*a,m=(Math.floor(l)-l)*a;return new u(e,Math.floor(l),Math.ceil(n),a,r<0?h:m,r<0?m:h,r<0?i:e,r<0?e:i)}constructor(o,t,e,l,i,n,r,s){this.x=o,this.ymin=t,this.ymax=e,this.invM=l,this.leftAdjust=i,this.rightAdjust=n,this.leftBound=r,this.rightBound=s}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}},p=[[0,0],[0,0],[0,0],[0,0]],Y=1e-6,L=class{constructor(o,t=null,e=o.lods[0].level,l=o.lods[o.lods.length-1].level){this.tileInfo=o,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};let i=o.lods.filter(r=>r.level>=e&&r.level<=l);this.minScale=i[0].scale,this.maxScale=i[i.length-1].scale;let n=this._lodInfos=i.map(r=>I.create(o,r,t));i.forEach((r,s)=>{this._infoByLevel[r.level]=n[s],this._infoByScale[r.scale]=n[s],this.scales[s]=r.scale},this),this._wrap=o.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(o){return this._infoByLevel[typeof o=="number"?o:o.level]}getTileBounds(o,t,e=!1){c.set(t);let l=this._infoByLevel[c.level];return l?l.getTileBounds(o,c,e):o}getTileCoords(o,t,e=!1){c.set(t);let l=this._infoByLevel[c.level];return l?l.getTileCoords(o,c,e):o}getTileCoverage(o,t=192,e=!0,l="closest"){if(!e&&(o.scale>this.minScale||o.scale<this.maxScale))return null;let i=l==="closest"?this.getClosestInfoForScale(o.scale):this.getSmallestInfoForScale(o.scale),n=z.pool.acquire(i),r=this._wrap,s,a,h,m=1/0,w=-1/0,M=n.spans;p[0][0]=p[0][1]=p[1][1]=p[3][0]=-t,p[1][0]=p[2][0]=o.size[0]+t,p[2][1]=p[3][1]=o.size[1]+t;for(let f of p)o.toMap(f,f),f[0]=i.getColumnForX(f[0]),f[1]=i.getRowForY(f[1]);let F=[],g=3;for(let f=0;f<4;f++){if(p[f][1]===p[g][1]){g=f;continue}let d=R.create(p[f],p[g]);m=Math.min(d.ymin,m),w=Math.max(d.ymax,w),F[d.ymin]===void 0&&(F[d.ymin]=[]),F[d.ymin].push(d),g=f}if(m==null||w==null||w-m>100)return null;let v=[];for(s=m;s<w;){F[s]!=null&&(v=v.concat(F[s])),a=1/0,h=-1/0;for(let f=v.length-1;f>=0;f--){let d=v[f];a=Math.min(a,d.getLeftCol()),h=Math.max(h,d.getRightCol())}if(a=Math.floor(a),h=Math.floor(h),s>=i.first[1]&&s<=i.last[1])if(r)if(i.size[0]<i.worldSize[0]){let f=Math.floor(h/i.worldSize[0]);for(let d=Math.floor(a/i.worldSize[0]);d<=f;d++)M.push(new x(s,Math.max(i.getFirstColumnForWorld(d),a),Math.min(i.getLastColumnForWorld(d),h)))}else M.push(new x(s,a,h));else a>i.last[0]||h<i.first[0]||(a=Math.max(a,i.first[0]),h=Math.min(h,i.last[0]),M.push(new x(s,a,h)));s+=1;for(let f=v.length-1;f>=0;f--){let d=v[f];d.ymax>=s?d.incrRow():v.splice(f,1)}}return n}getTileParentId(o){c.set(o);let t=this._infoByLevel[c.level],e=this._lodInfos.indexOf(t)-1;return e<0?null:(this._getTileIdAtLOD(c,this._lodInfos[e],c),c.id)}getTileResolution(o){let t=this._infoByLevel[typeof o=="object"?o.level:o];return t?t.resolution:-1}getTileScale(o){let t=this._infoByLevel[o.level];return t?t.scale:-1}intersects(o,t){c.set(t);let e=this._infoByLevel[c.level],l=o.lodInfo;if(l.resolution>e.resolution){this._getTileIdAtLOD(c,l,c);let n=l.denormalizeCol(c.col,c.world);for(let r of o.spans)if(r.row===c.row&&r.colFrom<=n&&r.colTo>=n)return!0}if(l.resolution<e.resolution){let[n,r,s,a]=o.spans.reduce((g,v)=>(g[0]=Math.min(g[0],v.row),g[1]=Math.max(g[1],v.row),g[2]=Math.min(g[2],v.colFrom),g[3]=Math.max(g[3],v.colTo),g),[1/0,-1/0,1/0,-1/0]),h=e.denormalizeCol(c.col,c.world),m=l.getColumnForX(e.getXForColumn(h)),w=l.getRowForY(e.getYForRow(c.row)),M=l.getColumnForX(e.getXForColumn(h+1))-1,F=l.getRowForY(e.getYForRow(c.row+1))-1;return!(m>a||M<s||w>r||F<n)}let i=l.denormalizeCol(c.col,c.world);return o.spans.some(n=>n.row===c.row&&n.colFrom<=i&&n.colTo>=i)}normalizeBounds(o,t,e){if(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],this._wrap){let l=B(this.tileInfo.spatialReference),i=-e*(l.valid[1]-l.valid[0]);o[0]+=i,o[2]+=i}return o}getSmallestInfoForScale(o){let t=this.scales;if(this._infoByScale[o])return this._infoByScale[o];if(o>t[0])return this._infoByScale[t[0]];for(let e=1;e<t.length-1;e++)if(o>t[e]+Y)return this._infoByScale[t[e-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(o){let t=this.scales;return this._infoByScale[o]||(o=t.reduce((e,l)=>Math.abs(l-o)<Math.abs(e-o)?l:e,t[0])),this._infoByScale[o]}scaleToLevel(o){let t=this.scales;if(this._infoByScale[o])return this._infoByScale[o].level;for(let e=t.length-1;e>=0;e--)if(o<t[e])return e===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[e]].level+(t[e]-o)/(t[e]-t[e+1]);return this._infoByScale[t[0]].level}scaleToZoom(o){return this.tileInfo.scaleToZoom(o)}zoomToScale(o){return this.tileInfo.zoomToScale(o)}_getTileIdAtLOD(o,t,e){let l=this._infoByLevel[e.level];return o.set(e),t.resolution<l.resolution?null:(t.resolution===l.resolution||(o.level=t.level,o.col=Math.floor(e.col*l.resolution/t.resolution+.01),o.row=Math.floor(e.row*l.resolution/t.resolution+.01)),o)}};export{z as a,L as b};
