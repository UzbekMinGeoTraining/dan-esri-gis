import{a as qe,b as Q}from"./chunk-Y5CS3SQX.js";import{a as q,b as B,c as Ae,e as Ee,f as We,g as Be,h as Re,i as Fe,j as Ce,k as Oe,l as Ge,m as Ve,n as Ze,o as X,p as H,q as Ne,r as je,s as Xe}from"./chunk-3KJK5VT6.js";import{c as Ye}from"./chunk-AFJD7CUR.js";import{a as P,b as R,e as Te,hb as pe,kb as D}from"./chunk-AN522XY4.js";import{m as De,q as de}from"./chunk-DI7IQ2JQ.js";import{k as Le,l as ze}from"./chunk-4HNIM6ZU.js";import{a as Y}from"./chunk-YNTLVJOI.js";import{g as ue,h as ke}from"./chunk-PVCDKA4D.js";import{b as fe}from"./chunk-H7Y5XCPW.js";import{L as Z}from"./chunk-PXLEIVAM.js";import{a as Ie}from"./chunk-RRDM7P6F.js";import{n as le,t as we}from"./chunk-PM4ZR7W6.js";import{a as N}from"./chunk-PJX4LNSV.js";import{h as k}from"./chunk-BDF7KEUQ.js";import{a as T}from"./chunk-HWN5REN7.js";import{b as A,c as Se,g as he,n as j,y as me}from"./chunk-XTES2GPX.js";import{a as E}from"./chunk-YFBPRKIN.js";import{v as be}from"./chunk-TFUPB3ZG.js";import{b as Me,r as ve,t as Pe}from"./chunk-3IBUFXWY.js";import{u as V}from"./chunk-BP73DJTS.js";import{a as L,b as z,g as I}from"./chunk-JEGVIFEP.js";var U=class extends Ee{};function He(a){let{sprite:e,isMapAligned:r,colorLocked:s,scaleSymbolsProportionally:t,isStroke:o}=a,i=0;return r&&(i|=B(R.bitset.isMapAligned)),s&&(i|=B(R.bitset.colorLocked)),e.sdf&&(i|=B(R.bitset.isSDF)),t&&(i|=B(R.bitset.scaleSymbolsProportionally)),o&&(i|=B(R.bitset.isStroke)),i}var $=class extends U{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:r,texelDimensions:s,baseSize:t,referenceSize:o,strokeWidth:i,sizeRatio:n}=e;r||(r=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),s||(s=e.sprite.sdf?[0,0]:r),t=E(t),o=E(o),i=E(i);let c=(e.sprite.sdfDecodeCoeff??1)*n;return z(L({},e),{pixelDimensions:r,texelDimensions:s,baseSize:t,referenceSize:o,strokeWidth:i,sdfDecodeCoeff:c})},optionalAttributes:{zoomRange:{type:k.SHORT,count:2,packPrecisionFactor:Z,pack:({scaleInfo:e},{tileInfo:r})=>q(e,r)}},attributes:{id:{type:k.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:k.UNSIGNED_BYTE,count:1,pack:He},pos:{type:k.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:k.FLOAT,count:2,packAlternating:{count:4,pack:e=>{let r=e.texelDimensions;return[[-.5*r[0],-.5*r[1]],[.5*r[0],-.5*r[1]],[-.5*r[0],.5*r[1]],[.5*r[0],.5*r[1]]]}}},uv:{type:k.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:r,texYmax:s,texYmin:t})=>[[r,t],[e,t],[r,s],[e,s]]}},animationPointerAndBaseSizeAndReferenceSize:{type:k.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:r,referenceSize:s})=>[e.dataColumn,e.dataRow,r,s]},sizing:{type:k.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:r,baseSize:s,sprite:t,sizeRatio:o})=>{let i=Math.max(s*t.width/t.height,s),n=t.sdfDecodeCoeff*i*o;return[r[0],r[1],e,n]}},angle:{type:k.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,r){let s=this.evaluatedMeshParams.sprite,{textureBinding:t}=s;e.recordStart(this.instanceId,this.attributeLayout,t);let o=r.getDisplayId();if(r.geometryType==="esriGeometryPolygon"){let i=r.readCentroidForDisplay();if(!i)return;let[n,c]=i.coords;this._writeQuad(e,o,n,c)}else if(r.geometryType==="esriGeometryPoint"){let i=r.readXForDisplay(),n=r.readYForDisplay();this._writeQuad(e,o,i,n)}else{let i=r.readGeometryForDisplay();if(i){let{angleToLine:n}=this.evaluatedMeshParams;if(n){let c=!0,m=null,u=null;i.forEachVertex((h,l)=>{if(m!=null&&u!=null){let p=Math.atan2(l-u,h-m)/Te;c&&(this._writeQuad(e,o,m,u,p),c=!1),this._writeQuad(e,o,h,l,p)}m=h,u=l})}else i.forEachVertex((c,m)=>{this._writeQuad(e,o,c,m)})}}e.recordEnd()}_writeQuad(e,r,s,t,o=0){let i=this.evaluatedMeshParams.sprite,{rect:n}=i,c=n.x+2,m=n.y+2,u=n.x+n.width-2,h=n.y+n.height-2,l=e.vertexCount();e.recordBounds(s,t,64,64);let p={texXmin:c,texYmin:m,texXmax:u,texYmax:h,angle:o};for(let g=0;g<4;g++)this._writeVertex(e,r,s,t,p);e.indexEnsureSize(6),e.indexWrite(l),e.indexWrite(l+1),e.indexWrite(l+2),e.indexWrite(l+1),e.indexWrite(l+3),e.indexWrite(l+2)}};function Qe(a,e,r){return a[0]=e[0]-r[0],a[1]=e[1]-r[1],a}function $e(a,e){return Math.sqrt(a*a+e*e)}function Ue(a){let e=$e(a[0],a[1]);a[0]/=e,a[1]/=e}function ot(a,e){return $e(a[0]-e[0],a[1]-e[1])}function at(a,e){return a[e+1]}function Je(a){return a.length-1}function nt(a){let e=0;for(let r=0;r<Je(a);r++)e+=ct(a,r);return e}function ct(a,e,r=1){let[s,t]=at(a,e);return[s,t]=[Math.round(s),Math.round(t)],Math.sqrt(s*s+t*t)*r}var ge=class a{constructor(e,r,s,t,o){this._segments=e,this._index=r,this._distance=s,this._xStart=t,this._yStart=o,this._done=!1}static create(e){return new a(e,0,0,e[0][0],e[0][1])}clone(){return new a(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){let e=this.dy,r=(0*e+-1*-this.dx)/(1*this.length),s=Math.acos(r);return e>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){let{dx:e,dy:r}=this;return Math.sqrt(e*e+r*r)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<Je(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,r){let s=this.backwardLength;if(e<=s)return this._distance=(s-e)/this.length,this;let t=this.backwardLength;for(;this.prev();){if(t+this.length>e)return this._seekBackwards(e-t);t+=this.length}return this._distance=0,r?this:null}seek(e,r=!1){if(e<0)return this._seekBackwards(Math.abs(e),r);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>e)return this.seek(e-s,r);s+=this.length}return this._distance=1,r?this:null}};function K(a,e,r,s=!0){let t=nt(a),o=ge.create(a),i=t/2;if(!s)return o.seek(i),void(Math.abs(o.x)<1024&&Math.abs(o.y)<1024&&r(o.clone(),0,i+0*e,t));let n=Math.max((t-e)/2,0),c=Math.floor(n/e),m=i-c*e;o.seek(m);for(let u=-c;u<=c;u++)Math.abs(o.x)<1024&&Math.abs(o.y)<1024&&r(o.clone(),u,i+u*e,t),o.seek(e)}function ee(a,e){let r=e;for(let s=0;s<a.length;s++){let t=a[s];lt(t,r);let o=[];o.push(t[0]);for(let i=1;i<t.length;i++){let[n,c]=t[i-1],[m,u]=t[i],h=m-n,l=u-c;o.push([h,l])}a[s]=o,t=o}return a}function lt(a,e){if(e<=0)return;let s=a.length;if(s<3)return;let t=[],o=0;t.push(0);for(let h=1;h<s;h++)o+=ot(a[h],a[h-1]),t.push(o);e=Math.min(e,.2*o);let i=[];i.push(a[0][0]),i.push(a[0][1]);let n=a[s-1][0],c=a[s-1][1],m=Qe([0,0],a[0],a[1]);Ue(m),a[0][0]+=e*m[0],a[0][1]+=e*m[1],Qe(m,a[s-1],a[s-2]),Ue(m),a[s-1][0]+=e*m[0],a[s-1][1]+=e*m[1];for(let h=1;h<s;h++)t[h]+=e;t[s-1]+=e;let u=.5*e;for(let h=1;h<s-1;h++){let l=0,p=0,g=0;for(let f=h-1;f>=0&&!(t[f+1]<t[h]-u);f--){let d=u+t[f+1]-t[h],_=t[f+1]-t[f],y=t[h]-t[f]<u?1:d/_;if(Math.abs(y)<1e-6)break;let x=y*y,w=y*d-.5*x*_,M=y*_/e,v=a[f+1],S=a[f][0]-v[0],G=a[f][1]-v[1];l+=M/w*(v[0]*y*d+.5*x*(d*S-_*v[0])-x*y*_*S/3),p+=M/w*(v[1]*y*d+.5*x*(d*G-_*v[1])-x*y*_*G/3),g+=M}for(let f=h+1;f<s&&!(t[f-1]>t[h]+u);f++){let d=u-t[f-1]+t[h],_=t[f]-t[f-1],y=t[f]-t[h]<u?1:d/_;if(Math.abs(y)<1e-6)break;let x=y*y,w=y*d-.5*x*_,M=y*_/e,v=a[f-1],S=a[f][0]-v[0],G=a[f][1]-v[1];l+=M/w*(v[0]*y*d+.5*x*(d*S-_*v[0])-x*y*_*S/3),p+=M/w*(v[1]*y*d+.5*x*(d*G-_*v[1])-x*y*_*G/3),g+=M}i.push(l/g),i.push(p/g)}i.push(n),i.push(c);for(let h=0,l=0;h<s;h++)a[h][0]=i[l++],a[h][1]=i[l++]}var te=1,F=0,ht=128,mt=be(a=>{let e=0;if(a===0)return 1/0;for(;!(a%2);)e++,a/=2;return e}),re=class extends H{constructor(){super(...arguments),this._zoomLevel=0}_write(e,r,s,t){if(this._zoomLevel=t||0,s!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(r.geometryType){case"esriGeometryPoint":{let o=r.readXForDisplay(),i=r.readYForDisplay();this._writePoint(e,o,i,r);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{let o=r.readCentroidForDisplay();if(!o)return;let[i,n]=o.coords;this._writePoint(e,i,n,r);break}case"esriGeometryPolyline":this._writeLines(e,r)}}_createLineLabelMetric(e,r,s,t){let o=pe(e),i=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,n=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,m=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new de(o,r,s,i,n,c,m,t??null)}_writePoint(e,r,s,t){let o=this._getShaping();if(!o)return;let i=t.getDisplayId(),n=Le(this.evaluatedMeshParams.horizontalAlignment),c=ze(this.evaluatedMeshParams.verticalAlignment),m=this.evaluatedMeshParams.scaleInfo?.maxScale??0,u=this.evaluatedMeshParams.scaleInfo?.minScale??0,h=pe(t.getDisplayId()),l=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new de(h,r,s,n,c,m,u,l)),this._writeGlyphs(e,i,r,s,o,0,l),e.metricBoxWrite(o.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(let e of this._references){let r=e.getBoundsInfo();if(r)return r}return null}_writeLines(e,r){let{scaleInfo:s,verticalAlignment:t}=this.evaluatedMeshParams,o=this.evaluatedMeshParams.repeatLabelDistance||128,i=this._getShaping("middle");if(!i)return;let n=(m,u,h,l)=>this._placeSubdivGlyphs(m,u,h,l),c=(i.bounds.width+o)/(1<<te);this._current={out:e,id:r.getDisplayId(),shaping:i,zoomRange:q(s,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=t==="bottom"?"above":t==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(r,n,c):this._writeCenterAlong(r,n,c)}_writeAboveAndBelowAlong(e,r,s){let{repeatLabel:t}=this.evaluatedMeshParams,{shaping:o}=this._current,i=o.bounds.halfHeight,n=e.readGeometryForDisplay();if(!n)return;let c=new N;we(c,n,!1,!1,"esriGeometryPolyline",1);let m=Ke(new N,c,i),u=Ke(new N,c,-i),h=le(u,"esriGeometryPolyline",!1,!1),l=le(m,"esriGeometryPolyline",!1,!1),p=ee(l.paths,o.bounds.width),g=ee(h.paths,o.bounds.width);this._current.offsetDirection="above";for(let f of p)K(f,s,r,!!t);this._current.offsetDirection="below";for(let f of g)K(f,s,r,!!t)}_writeCenterAlong(e,r,s){let{repeatLabel:t}=this.evaluatedMeshParams,{shaping:o}=this._current,i=ee(e.readLegacyGeometryForDisplay().paths,o.bounds.width);for(let n of i)K(n,s,r,!!t)}_placeSubdivGlyphs(e,r,s,t){let{allowOverrun:o,labelPosition:i,repeatLabelDistance:n}=this.evaluatedMeshParams,c=this._current.zoomRange[0],m=mt(r),u=this._current.shaping.bounds.width/(1<<te),h=Math.sqrt(n||ht)/(1<<te),l=Math.min(s,t-s),p=this._current.shaping.isMultiline?X:Math.log2(l/(h+u/2)),g=r===0?p:Math.min(m,p),f=Math.max(c,this._zoomLevel+te-g),d=this._zoomLevel-f,_=this._current.shaping.bounds.width/2*2**d;this._current.shaping.isMultiline?r===0&&this._placeStraight(e,f):o&&d<0?this._placeStraightAlong(e,c):i==="parallel"?this._placeStraightAlong(e,f):i==="curved"&&this._placeCurved(e,f,_)}_placeStraight(e,r){let{out:s,id:t,shaping:o,referenceBounds:i}=this._current,{x:n,y:c}=e;s.metricStart(this._createLineLabelMetric(t,n,c)),s.metricBoxWrite(o.boundsT);let m=e.angle*(180/Math.PI)%360,u=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(s,t,n,c,o,0,i,{clipAngle:m,mapAligned:!0,isLineLabel:!0,minZoom:r}),this._writeGlyphs(s,t,n,c,o,0,i,{clipAngle:u,mapAligned:!0,isLineLabel:!0,minZoom:r}),s.metricEnd()}_placeCurved(e,r,s){let{out:t,id:o}=this._current;t.metricStart(this._createLineLabelMetric(o,e.x,e.y));let i=e.clone(),n=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(i,r,1,n),this._placeBack(e,i,r,s,1,n),this._placeForward(e,i,r,s,1,n)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(i,r,0,c),this._placeBack(e,i,r,s,0,c),this._placeForward(e,i,r,s,0,c)),t.metricEnd()}_placeStraightAlong(e,r){let{out:s,id:t,shaping:o,zoomRange:i,referenceBounds:n}=this._current,{boxBorderLineColor:c,boxBackgroundColor:m}=this.evaluatedMeshParams,u=e.clone(),h=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360,p=o.glyphs.length>0&&!(!c&&!m);if(s.metricStart(this._createLineLabelMetric(t,e.x,e.y)),p){let g=Math.max(r,i[0],0),f=Math.min(X,i[1]),d=ke(Y(),-e.angle),_={minZoom:g,maxZoom:f,clipAngle:h,mapAligned:!0,isLineLabel:!0},y=E(this.evaluatedMeshParams.offsetX),x=E(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){let w=fe(y,-1*x),[M,v]=o.shapeBackground(ue(Y(),d,w));s.recordStart(this.instanceId,this.attributeLayout,o.glyphs[0].textureBinding);let S=2*Math.max(M.width,M.height);s.recordBounds(e.x+M.x,e.y+M.y,S,S),this._writeTextBox(s,t,e.x,e.y,v,n,_),s.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){let w=fe(y,x),[M,v]=o.shapeBackground(ue(Y(),d,w));_.clipAngle=l,s.recordStart(this.instanceId,this.attributeLayout,o.glyphs[0].textureBinding);let S=2*Math.max(M.width,M.height);s.recordBounds(e.x+M.x,e.y+M.y,S,S),this._writeTextBox(s,t,e.x,e.y,v,n,_),s.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(u,r,1,h,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(u,r,0,l,!0),s.metricEnd()}_placeBack(e,r,s,t,o,i){let n=e.clone(),c=e.backwardLength+F;for(;n.prev()&&!(c>=t);)this._placeOnSegment(n,r,c,s,-1,o,i),c+=n.length+F}_placeForward(e,r,s,t,o,i){let n=e.clone(),c=e.remainingLength+F;for(;n.next()&&!(c>=t);)this._placeOnSegment(n,r,c,s,1,o,i),c+=n.length+F}_placeFirst(e,r,s,t,o=!1){let{out:i,id:n,shaping:c,zoomRange:m,referenceBounds:u}=this._current,h=c.glyphs;for(let l of h){let p=l.x>c.bounds.x?s:1-s,g=p*e.remainingLength+(1-p)*e.backwardLength,f=Math.abs(l.x+l.width/2-c.bounds.x),d=Math.max(0,this._zoomLevel+Math.log2(f/(g+F))),_=Math.max(r,o?0:d);l.maxZoom=Math.min(m[1],X),l.angle=e.angle+(1-s)*Math.PI,l.minZoom=Math.max(m[0],_),this._writeLineGlyph(i,n,e.x,e.y,c.bounds,l,t,u,!0),(s||this._current.offsetDirection)&&this._isVisible(l.minZoom,l.maxZoom)&&i.metricBoxWrite(l.bounds)}}_placeOnSegment(e,r,s,t,o,i,n){let{out:c,id:m,shaping:u,referenceBounds:h}=this._current,l=u.glyphs,p=e.dx/e.length,g=e.dy/e.length,f={x:e.x+s*-o*p,y:e.y+s*-o*g};for(let d of l){let _=d.x>u.bounds.x?i:1-i;if(!(_&&o===1||!_&&o===-1))continue;let y=Math.abs(d.x+d.width/2-u.bounds.x),x=Math.max(0,this._zoomLevel+Math.log2(y/s)-.1),w=Math.max(t,this._zoomLevel+Math.log2(y/(s+e.length+F)));x!==0&&(d.angle=e.angle+(1-i)*Math.PI,d.minZoom=w,d.maxZoom=x,this._writeLineGlyph(c,m,f.x,f.y,u.bounds,d,n,h,!0),(i||this._current.offsetDirection)&&this._isVisible(d.minZoom,d.maxZoom)&&c.metricBoxWrite(d.bounds))}}_writeLineGlyph(e,r,s,t,o,i,n,c,m){let u=s+o.x,h=t+o.y,l=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),p=Math.max(o.width,o.height)*l;e.recordStart(this.instanceId,this.attributeLayout,i.textureBinding),e.recordBounds(u,h,p,p);let{texcoords:g,offsets:f}=i,{fontSize:d,haloSize:_,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,r,s,t,{texcoords:g,offsets:f,fontSize:d,haloSize:_,outlineSize:y,color:Ae(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],i.minZoom),maxZoom:Math.min(this._current.zoomRange[1],i.maxZoom),clipAngle:n,mapAligned:m,isLineLabel:!0}),e.recordEnd()}_isVisible(e,r){let s=Math.floor(this._zoomLevel*Z)/Z;return e<=s&&s<=r}};function Ke(a,e,r){let{coords:s,lengths:t}=e,o=T(),i=T(),n=T(),c=T(),m=T(),u=T(),h=2,l=0;for(let p=0;p<t.length;p++){let g=t[p];for(let f=0;f<g;f++){let d=h*(f+l-1),_=h*(f+l),y=h*(f+l+1);f>0?A(o,s[d],s[d+1]):A(o,0,0),A(i,s[_],s[_+1]),f<g-1?A(n,s[y],s[y+1]):A(n,0,0),f===0?A(c,0,0):(me(c,i,o),j(c,c),A(c,c[1],-c[0])),f===g-1?A(m,0,0):(me(m,n,i),j(m,m),A(m,m[1],-m[0])),Se(u,c,m),j(u,u);let x=u[0]*m[0]+u[1]*m[1];x!==0&&he(u,u,x),he(u,u,r),a.coords.push(i[0]+u[0],i[1]+u[1])}a.lengths.push(g),l+=g}return a}function O(a){return a instanceof C?a:typeof a=="object"&&"type"in a?ut[a.type].hydrate(a):new W(a)}var C=class{constructor(e){this.inputs=e}encode(){let e=[];for(let r of this.inputs)e.push(...r.encode());return e.push(...this.instructions),e}},W=class extends C{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){let[e,r,s,t]=this.value;return t!=null?D.vector4.encode([e,r||0,s||0,t]):D.vector3.encode([e,r||0,s||0])}return D.scalar.encode(this.value)}},_e=class a extends C{constructor(e,r){super([r]),this._config=e,this._parent=r}static hydrate(e){return new a(e,O(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;let e=this._parent.simplify();if(!(e instanceof W))return this;let[r,s,t,o]=e.value,i=this._config.translation.from[0],n=this._config.translation.from[1],c=this._config.rotation.from,m=this._config.scale.from;if(i===this._config.translation.to[0]&&n===this._config.translation.to[1]&&c===this._config.rotation.to&&m===this._config.scale.to){let u=t+c,h=o*m,l=Math.sin(t),p=Math.cos(t);return new W([p*o*i-l*o*n+r,l*o*i+p*o*n+s,u,h])}return new a(this._config,e)}get instructions(){return D.animatedTransform.encode(this._config)}},ye=class a extends C{constructor(e,r){super([r]),this._config=e,this._parent=r}static hydrate(e){return new a(e,O(e.parent))}simplify(){let e=this._parent.simplify();if(!(e instanceof W))return this;let[r,s,t,o]=e.value,i=this._config.color.from[0],n=this._config.color.from[1],c=this._config.color.from[2],m=this._config.color.from[3],u=this._config.opacity.from;return i===this._config.color.to[0]&&n===this._config.color.to[1]&&c===this._config.color.to[2]&&m===this._config.color.to[3]&&u===this._config.opacity.to?(m*=u,new W([r*i,s*n,t*c,o*m])):new a(this._config,e)}get instructions(){return D.animatedColor.encode(this._config)}},ut={AnimatedTransform:_e,AnimatedColor:ye};function et(a){return xe(a.map(e=>b(e)).map(e=>O(e).simplify()))}function tt(a){let e=[];return e.push(a.transform),e.push(a.fromColor),e.push(a.toColor),e.push(a.colorMix),e.push(a.toOpacity),e.push(a.opacityMix),e}function xe(a){let e=[],r=[],s=0;for(let t of a){let o=[...t.encode(),...D.ret.encode()];e.push([s+a.length,0,0,0]),r.push(...o),s+=o.length}return[...e,...r]}function ie(a,e){return I(this,null,function*(){let r=a,s;if(typeof r=="number"||typeof r=="string"||typeof r=="boolean")s=r;else if(Array.isArray(r))s=yield Promise.all(r.map(t=>ie(t,e)));else if(typeof r=="object")if("valueExpressionInfo"in r){let{valueExpressionInfo:t}=r,{expression:o}=t;s=z(L({},r),{computed:yield e.createComputedField({expression:o})})}else{s={};for(let t in r)s[t]=yield ie(r[t],e)}return s})}function b(a,e,r){function s(i){if(!("computed"in i))return i;let n=i.computed.readWithDefault(e,r,[255*i.defaultValue[0],255*i.defaultValue[1],255*i.defaultValue[2],i.defaultValue[3]]);if(typeof n=="string"){let c=Ie.fromString(n);c&&(n=[c.r,c.g,c.b,c.a])}return n}let t=a,o;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")o=t;else if(Array.isArray(t))o=t.map(i=>b(i,e,r));else if(typeof t=="object")if("type"in t&&t.type!=null&&t.type==="Process")switch(t.op){case"ArcadeColor":{let i=b(t.value,e,r);se(Array.isArray(i)&&i.length===4),o=[i[0]/255,i[1]/255,i[2]/255,i[3]]}break;case"Transparency":{let i=b(t.value,e,r);se(typeof i=="number"),o=1-i/100}break;case"Divide":{let i=b(t.left,e,r);se(typeof i=="number");let n=b(t.right,e,r);se(typeof n=="number"),o=i/n}break;case"Random":{let i=b(t.seed,e,r),n=b(t.min,e,r),c=b(t.max,e,r),m=e.getObjectId(),u=Q(m||0);o=n+qe(u,i)*(c-n)}}else if("computed"in t)o=s(t);else{o={};for(let i in t)o[i]=b(t[i],e,r)}return o}function se(a){if(!a)throw new Error("Assertion failed.")}var oe=class extends Ye{constructor(e){super(),this._value=e}resize(e){}read(e,r){return this._value}readWithDefault(e,r,s){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}};var ft=()=>ve.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");function ae(a,e,r=!1){return I(this,null,function*(){let{defaultValue:s,valueExpressionInfo:t,value:o}=e;if(t){let{expression:i}=t,n=yield a.createComputedField({expression:i},r);return n?z(L({},e),{computed:n,defaultValue:s}):null}return z(L({},e),{computed:new oe(o),defaultValue:s})})}function rt(a,e){return I(this,null,function*(){let{valueExpressionInfo:r}=e,{expression:s}=r,t=yield a.createComputedField({expression:s});return t?z(L({},e),{computed:t}):null})}function st(a){return typeof a=="object"&&a!=null&&(!(!("valueExpressionInfo"in a)||!a.valueExpressionInfo)||"type"in a&&a.type==="Process"&&"op"in a&&a.op==="Random")}function ne(a){if(Array.isArray(a)){for(let e of a)if(ne(e))return!0}if(typeof a=="object"){if(st(a))return!0;for(let e in a)if(ne(a[e]))return!0}return!1}var ce=class a{static create(e,r,s){return I(this,null,function*(){let t={},o=new Map,i=new Map,n=new Map,c=new Map,m=new Map,u=new Map;for(let h in s){let l=s[h];if(l!=null&&typeof l=="object")if(Array.isArray(l)){if(typeof l[0]=="object")throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);t[h]=l}else if("valueExpressionInfo"in l){if(l.value){t[h]=l.value;continue}let p=yield rt(e,l);if(!p){t[h]=l.defaultValue;continue}o.set(h,p),t[h]=null}else switch(l.type){case"cim-effect-infos":if(l.effectInfos.some(p=>p.overrides.length)){i.set(h,{effects:yield Promise.all(l.effectInfos.map(p=>I(this,null,function*(){let g=p.overrides.map(f=>ae(e,f));return{effect:p.effect,compiledOverrides:(yield Promise.all(g)).filter(V)}})))});break}t[h]=l.effectInfos.map(p=>p.effect);break;case"cim-marker-placement-param":l.overrides.length&&n.set(h,{placementInfo:l,compiledOverrides:(yield Promise.all(l.overrides.map(p=>ae(e,p)))).filter(V)}),t[h]=l.placement;break;case"text-rasterization-param":{if(l.overrides.length){let g=l.overrides.map(f=>ae(e,f,l.useLegacyLabelEvaluationRules));c.set(h,{compiledOverrides:(yield Promise.all(g)).filter(V),rasterizationParam:l,objectIdToResourceId:new Map});continue}let p={type:"cim-rasterization-info",resource:l.resource};t[h]=(yield r.fetchResourceImmediate(p))??null;break}case"sprite-rasterization-param":{if(l.overrides.length){let g=l.overrides.map(f=>ae(e,f));c.set(h,{compiledOverrides:(yield Promise.all(g)).filter(V),rasterizationParam:l,objectIdToResourceId:new Map});continue}if(l.resource.type==="animated"){c.set(h,{compiledOverrides:[],rasterizationParam:l,objectIdToResourceId:new Map});continue}let p={type:"cim-rasterization-info",resource:l.resource};t[h]=(yield r.fetchResourceImmediate(p))??null;break}case"cim-marker-transform-param":{let{params:p}=l;if(ne(p)){let g={compiledMarkerInfos:[]};yield Promise.all(p.map(f=>I(this,null,function*(){let d={props:{}};for(let _ in f)if(st(f[_])){let y=yield rt(e,f[_]);d.compiledExpressionMap||(d.compiledExpressionMap=new Map);let x=d.compiledExpressionMap;y&&x.set(_,y)}else d.props[_]=f[_];g.compiledMarkerInfos.push(d)}))),m.set(h,g)}else t[h]={type:"cim-marker-transform-info",infos:p};break}case"animation-params":{let{params:p}=l,g=tt(p);if(ne(g)){let f=yield Promise.all(g.map(d=>ie(d,e)));u.set(h,{params:f,propertyIdToResourceId:new Map,key:h})}else{let f=et(g),d=yield r.fetchResourceImmediate({type:"animation-info",resource:f});d!=null&&d.type==="sprite"&&(t[h]={dataRow:d.rect.y,dataColumn:d.rect.x})}break}default:t[h]=l}else t[h]=l}return new a(s,t,o,i,n,c,m,u)})}constructor(e,r,s,t,o,i,n,c){this.inputMeshParams=e,this._resolvedMeshParams=r,this._dynamicProperties=s,this._dynamicEffectProperties=t,this._dynamicPlacementProperties=o,this._dynamicAsyncProperties=i,this._dynamicTransformProperties=n,this._dynamicAsyncAnimations=c,this.evaluator=m=>m}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,r,s){for(let t of this._dynamicAsyncProperties.values()){let o=Me(t.rasterizationParam.resource);t.rasterizationParam.resource.type==="animated"&&t.rasterizationParam.resource.randomizeStartTime&&(o.primitiveName="__RESERVED__PRIMITIVE__NAME__",o.startGroup=Q(r.getObjectId()||0));for(let{primitiveName:n,propertyName:c,computed:m,defaultValue:u,valueExpressionInfo:h}of t.compiledOverrides)try{let l=t.rasterizationParam.resource.type==="animated"?o.primitiveName:n;De(o,l,c,m,r,s,u)}catch(l){ft().errorOnce(new Pe("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${h?.expression}' (primitive: '${n}', property: '${c}')`,l))}let i=e.enqueueRequest({type:"cim-rasterization-info",resource:o});t.objectIdToResourceId.set(r.getObjectId(),i)}for(let t of this._dynamicAsyncAnimations.values()){let o=t.params.map(c=>b(c,r,s)).map(O).map(c=>c.simplify()),i=xe(o),n=e.enqueueRequest({type:"animation-info",resource:i});t.propertyIdToResourceId.set(r.getObjectId()+"."+t.key,n)}}evaluateMeshParams(e,r,s){for(let[t,o]of this._dynamicProperties.entries())this._resolvedMeshParams[t]=o.computed.readWithDefault(r,s,o.defaultValue);for(let[t,o]of this._dynamicPlacementProperties.entries())for(let{computed:i,defaultValue:n,propertyName:c}of o.compiledOverrides){let m=i.readWithDefault(r,s,n);o.placementInfo.placement[c]=m,this._resolvedMeshParams[t]=o.placementInfo.placement}for(let[t,o]of this._dynamicEffectProperties.entries())for(let i of o.effects){for(let{computed:n,defaultValue:c,propertyName:m}of i.compiledOverrides){let u=n.readWithDefault(r,s,c);i.effect[m]=u}this._resolvedMeshParams[t]=o.effects.map(n=>n.effect)}for(let[t,o]of this._dynamicTransformProperties.entries()){let i={type:"cim-marker-transform-info",infos:[]};for(let n of o.compiledMarkerInfos){let c=L({},n.props);if(n.compiledExpressionMap)for(let[m,u]of n.compiledExpressionMap){let h=u.computed.readWithDefault(r,s,u.defaultValue);c[m]=typeof h=="number"||typeof h=="boolean"?h:u.defaultValue}i.infos.push(c)}this._resolvedMeshParams[t]=i}for(let[t,o]of this._dynamicAsyncProperties.entries()){let i=o.objectIdToResourceId.get(r.getObjectId());if(i==null)continue;let n=e.getResource(i);this._resolvedMeshParams[t]=n}for(let[t,o]of this._dynamicAsyncAnimations.entries()){let i=o.propertyIdToResourceId.get(r.getObjectId()+"."+t);if(i==null)continue;let n=e.getResource(i);this._resolvedMeshParams[t]={dataRow:n.rect.y,dataColumn:n.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}};var it=class{createMeshWriter(e,r,s,t){return I(this,null,function*(){let o=this._getMeshWriter(t.techniqueType),i=yield ce.create(e,r,t.inputParams),n=new o(t.id,i,t.optionalAttributes,s);return yield n.loadDependencies(),n})}_getMeshWriter(e){switch(e){case P.Fill:return Be;case P.DotDensity:return We;case P.ComplexFill:return Fe;case P.PatternFill:return Re;case P.OutlineFill:return Oe;case P.PatternOutlineFill:return Ve;case P.ComplexOutlineFill:return Ge;case P.Marker:return je;case P.PieChart:return Xe;case P.Text:return H;case P.Line:return Ce;case P.TexturedLine:return Ne;case P.Heatmap:return Ze;case P.Label:return re;case P.AnimatedMarker:return $;default:throw new Error("Internal Error: Mesh writer not in the registry")}}};export{oe as a,it as b};
