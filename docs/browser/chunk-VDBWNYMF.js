import{a as ge,b as ye,c as be,d as _e}from"./chunk-3U6BMQLZ.js";import{a as D}from"./chunk-25T3ULWN.js";import{b as xe}from"./chunk-ILCAH2F6.js";import{a as we}from"./chunk-CYCLIMTY.js";import{a as V,b as N}from"./chunk-XXOIKNT6.js";import{b as y,h as u,k as b,l as _}from"./chunk-BDF7KEUQ.js";import{D as Te,b as B,c as C,d as U,m as ae,n as se,o as ie,p as ue,q as le,r as fe,s as ce,t as de,u as me,v as pe,z as he}from"./chunk-B4JAL745.js";import{g as ee,h as te,i as re,j as oe,q as ne}from"./chunk-5MNDZ6BX.js";import{A as W,B as Q,D as Z,t as q}from"./chunk-4M6XQSBA.js";import{u as X}from"./chunk-TFUPB3ZG.js";import{x as F}from"./chunk-GMC3I5VG.js";import{r as g,t as i}from"./chunk-3IBUFXWY.js";import{a as T,b as J,g as c}from"./chunk-JEGVIFEP.js";function Se(o={}){return T({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},o)}function Ee(o,e={}){return{data:o,parameters:T({wrap:T({s:_.REPEAT,t:_.REPEAT},e.wrap),noUnpackFlip:!0,mipmap:!1},e)}}function O(o,e){let r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}var et=Object.freeze(Object.defineProperty({__proto__:null,makeDense:O},Symbol.toStringTag,{value:"Module"}));var A=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){let e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){let r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var S,Re;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(S||(S={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(Re||(Re={}));var Ne={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Fe={pbrMetallicRoughness:Ne,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Be={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},P=(o={})=>{let e=T(T({},Ne),o.pbrMetallicRoughness),r=Ue(T(T({},Be),o.extras));return J(T(T({},Fe),o),{pbrMetallicRoughness:e,extras:r})};function Ue(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:o.ESRI_externalColorMixMode,o.ESRI_externalColorMixMode="tint"}return o}var Ve={magFilter:b.LINEAR,minFilter:b.LINEAR_MIPMAP_LINEAR,wrapS:_.REPEAT,wrapT:_.REPEAT},Oe=o=>T(T({},Ve),o);function Ae(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,n,a)=>(e=n||"",r=a||"","")),{dirPart:e,filePart:r}}var v={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20},I=class o{constructor(e,r,t,n){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Ae(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static load(e,r,t){return c(this,null,function*(){if(W(r)){let s=Z(r);if(s&&s.mediaType!=="model/gltf-binary")try{let l=JSON.parse(s.isBase64?atob(s.data):s.data);return new o(e,r,l)}catch{}let f=Q(r);if(o._isGLBData(f))return this._fromGLBData(e,r,f)}if(ke.test(r)||t?.expectedType==="gltf"){let s=yield e.loadJSON(r,t);return new o(e,r,s)}let n=yield e.loadBinary(r,t);if(o._isGLBData(n))return this._fromGLBData(e,r,n);if(Ke.test(r)||t?.expectedType==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");let a=yield e.loadJSON(r,t);return new o(e,r,a)})}static _isGLBData(e){if(e==null)return!1;let r=new A(e);return r.remainingBytes()>=4&&r.readUint32()===v.MAGIC}static _fromGLBData(e,r,t){return c(this,null,function*(){let n=yield o._parseGLBData(t);return new o(e,r,n.json,n.binaryData)})}static _parseGLBData(e){return c(this,null,function*(){let r=new A(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");let t=r.readUint32(),n=r.readUint32(),a=r.readUint32();if(t!==v.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<a)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(n!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let s,f,l=0;for(;r.remainingBytes()>=8;){let d=r.readUint32(),h=r.readUint32();if(l===0){if(h!==v.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(d<0)throw new i("gltf-loader-error","No JSON data found.");s=yield be(r.readUint8Array(d))}else if(l===1){if(h!==v.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");f=r.readUint8Array(d)}else g.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");l+=1}if(!s)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:s,binaryData:f}})}getBuffer(e,r){return c(this,null,function*(){let t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}let n=yield this._getBufferLoader(e,r);if(n.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return n})}_getBufferLoader(e,r){return c(this,null,function*(){let t=this._bufferLoaders.get(e);if(t)return t;let n=this.json.buffers[e].uri,a=this._context.loadBinary(this._resolveUri(n),r).then(s=>new Uint8Array(s));return this._bufferLoaders.set(e,a),a})}getAccessor(e,r){return c(this,null,function*(){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");let t=this.json.accessors[e];if(t?.bufferView==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[S.MAT2,S.MAT3,S.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);let n=this.json.bufferViews[t.bufferView],a=yield this.getBuffer(n.buffer,r),s=Ge[t.type],f=je[t.componentType],l=s*f,d=n.byteStride||l;return{raw:a.buffer,byteStride:d,byteOffset:a.byteOffset+(n.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:d===l,componentCount:s,componentByteSize:f,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}})}getIndexData(e,r){return c(this,null,function*(){if(e.indices==null)return;let t=yield this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return O(w(ae,t));case u.UNSIGNED_SHORT:return O(w(le,t));case u.UNSIGNED_INT:return O(w(me,t))}})}getPositionData(e,r){return c(this,null,function*(){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");let t=yield this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(C,t)})}getNormalData(e,r){return c(this,null,function*(){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");let t=yield this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(C,t)})}getTangentData(e,r){return c(this,null,function*(){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");let t=yield this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return w(U,t)})}getTextureCoordinates(e,r){return c(this,null,function*(){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");let t=yield this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return w(B,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return He(t)})}getVertexColors(e,r){return c(this,null,function*(){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");let t=yield this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return w(U,t);if(t.componentType===u.UNSIGNED_BYTE)return w(ue,t);if(t.componentType===u.UNSIGNED_SHORT)return w(de,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return w(C,t);if(t.componentType===u.UNSIGNED_BYTE)return w(ie,t);if(t.componentType===u.UNSIGNED_SHORT)return w(ce,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])})}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}getMaterial(e,r,t){return c(this,null,function*(){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){let a=e.material!=null?P(this.json.materials[e.material]):P(),s=a.pbrMetallicRoughness,f=this.hasVertexColors(e),l=this.getTexture(s.baseColorTexture,r),d=this.getTexture(a.normalTexture,r),h=t?this.getTexture(a.occlusionTexture,r):void 0,p=t?this.getTexture(a.emissiveTexture,r):void 0,E=t?this.getTexture(s.metallicRoughnessTexture,r):void 0,m=e.material!=null?e.material:-1;n={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,color:s.baseColorFactor,doubleSided:!!a.doubleSided,colorTexture:yield l,normalTexture:yield d,name:a.name,id:m,occlusionTexture:yield h,emissiveTexture:yield p,emissiveFactor:a.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:yield E,hasVertexColors:f,ESRI_externalColorMixMode:a.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:a.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:a.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:a.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:a.extras.ESRI_receiveAmbientOcclusion,receiveShadows:a.extras.ESRI_receiveShadows}}return n})}getTexture(e,r){return c(this,null,function*(){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");let t=e.index,n=this.json.textures[t],a=Oe(n.sampler!=null?this.json.samplers[n.sampler]:{}),s=Ce(n),f=this.json.images[s],l=yield this._loadTextureImageData(t,n,r);return X(this._textureCache,t,()=>{let d=p=>p===33071||p===33648||p===10497,h=p=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${p}`)};return{data:l,wrapS:d(a.wrapS)?a.wrapS:h(a.wrapS),wrapT:d(a.wrapT)?a.wrapT:h(a.wrapT),minFilter:a.minFilter,name:f.name,id:t}})})}getNodeTransform(e){if(e===void 0)return De;let r=this._nodeTransformCache.get(e);if(!r){let t=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?r=ee(V(),t,n.matrix):n.translation||n.rotation||n.scale?(r=N(t),n.translation&&te(r,r,n.translation),n.rotation&&(M[3]=xe(M,n.rotation),oe(r,r,M[3],M)),n.scale&&re(r,r,n.scale)):r=N(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return q(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){let e=D.parse(this.json.asset.version,"glTF");Pe.validate(e)}_checkRequiredExtensionsSupported(){let e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}_loadTextureImageData(e,r,t){return c(this,null,function*(){let n=this._textureLoaders.get(e);if(n)return n;let a=this._createTextureLoader(r,t);return this._textureLoaders.set(e,a),a})}_createTextureLoader(e,r){return c(this,null,function*(){let t=Ce(e),n=this.json.images[t];if(n.uri){if(n.uri.endsWith(".ktx2")){let l=yield this._context.loadBinary(this._resolveUri(n.uri),r);return new ge(new Uint8Array(l))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(n.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(n.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");let a=this.json.bufferViews[n.bufferView],s=yield this.getBuffer(a.buffer,r);if(a.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");let f=s.byteOffset+(a.byteOffset||0);return _e(new Uint8Array(s.buffer,f,a.byteLength),n.mimeType)})}getLoadedBuffersSize(){return c(this,null,function*(){if(this._glbBuffer)return this._glbBuffer.byteLength;let e=yield F(Array.from(this._bufferLoaders.values())),r=yield F(Array.from(this._textureLoaders.values()));return e.reduce((t,n)=>t+(n?.byteLength??0),0)+r.reduce((t,n)=>t+(n?ye(n)?n.data.byteLength:n.width*n.height*4:0),0)})}},De=ne(V(),Math.PI/2),Pe=new D(2,0,"glTF"),M=we(),Ge={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},je={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function He(o){switch(o.componentType){case u.BYTE:return new he(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_BYTE:return new se(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.SHORT:return new Te(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_SHORT:return new fe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_INT:return new pe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.FLOAT:return new B(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}function w(o,e){return new o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function Ce(o){if(o.extensions?.KHR_texture_basisu!=null)return o.extensions.KHR_texture_basisu.source;if(o.source!==null)return o.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}var ke=/\.gltf$/i,Ke=/\.glb$/i;var Ye=0;function Ut(n,a){return c(this,arguments,function*(o,e,r={},t=!0){let s=yield I.load(o,e,r),f="gltf_"+Ye++,l={lods:[],materials:new Map,textures:new Map,meta:$e(s)},d=!(!s.json.asset.extras||s.json.asset.extras.ESRI_type!=="symbolResource"),h=s.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,p=new Map;yield ze(s,(m,L,x,G)=>c(this,null,function*(){let j=p.get(x)??0;p.set(x,j+1);let R=m.mode!==void 0?m.mode:y.TRIANGLES,H=R===y.TRIANGLES||R===y.TRIANGLE_STRIP||R===y.TRIANGLE_FAN?R:null;if(H==null)return void g.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+y[R]+"). Skipping primitive.");if(!s.hasPositions(m))return void g.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");let ve=s.getPositionData(m,r),Me=s.getMaterial(m,r,t),k=s.hasNormals(m)?s.getNormalData(m,r):null,K=s.hasTangents(m)?s.getTangentData(m,r):null,Y=s.hasTextureCoordinates(m)?s.getTextureCoordinates(m,r):null,$=s.hasVertexColors(m)?s.getVertexColors(m,r):null,Ie=s.getIndexData(m,r),Le={name:G,transform:N(L),attributes:{position:yield ve,normal:k?yield k:null,texCoord0:Y?yield Y:null,color:$?yield $:null,tangent:K?yield K:null},indices:yield Ie,primitiveType:H,material:Xe(l,yield Me,f)},z=null;l.meta?.ESRI_lod!=null&&l.meta.ESRI_lod.metric==="screenSpaceRadius"&&(z=l.meta.ESRI_lod.thresholds[x]),l.lods[x]=l.lods[x]||{parts:[],name:G,lodThreshold:z},l.lods[x].parts[j]=Le}));for(let m of l.lods)m.parts=m.parts.filter(L=>!!L);let E=yield s.getLoadedBuffersSize();return{model:l,meta:{isEsriSymbolResource:d,uri:s.uri,ESRI_webstyle:h},customMeta:{},size:E}})}function $e(o){let e=o.json,r=null;return e.nodes.forEach(t=>{let n=t.extras;n!=null&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(r=n)}),r}function ze(o,e){return c(this,null,function*(){let r=o.json,t=r.scenes[r.scene||0].nodes,n=t.length>1,a=[];for(let f of t){let l=r.nodes[f];a.push(s(f,0)),Je(l)&&!n&&l.extensions.MSFT_lod.ids.forEach((d,h)=>s(d,h+1))}function s(f,l){return c(this,null,function*(){let d=r.nodes[f],h=o.getNodeTransform(f);if(d.weights!=null&&g.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),d.mesh!=null){let p=r.meshes[d.mesh];for(let E of p.primitives)a.push(e(E,h,l,p.name))}for(let p of d.children||[])a.push(s(p,l))})}yield Promise.all(a)})}function Je(o){return o.extensions?.MSFT_lod&&Array.isArray(o.extensions.MSFT_lod.ids)}function Xe(o,e,r){let t=a=>{let s=`${r}_tex_${a&&a.id}${a?.name?"_"+a.name:""}`;if(a&&!o.textures.has(s)){let f=Ee(a.data,{wrap:{s:a.wrapS,t:a.wrapT},mipmap:qe.has(a.minFilter),noUnpackFlip:!0});o.textures.set(s,f)}return s},n=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(n)){let a=Se({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});o.materials.set(n,a)}return n}var qe=new Set([b.LINEAR_MIPMAP_LINEAR,b.LINEAR_MIPMAP_NEAREST]);export{Ut as a};
