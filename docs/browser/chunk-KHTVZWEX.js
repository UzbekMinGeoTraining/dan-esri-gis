import{b as he}from"./chunk-IGNHVSQC.js";import{a as we}from"./chunk-JBGML6IF.js";import{a as w}from"./chunk-S2HMCZNZ.js";import{b as Re}from"./chunk-WUAC4CFP.js";import{b as ve,c as ge,d as xe,f as Se,g as Oe,h as ye}from"./chunk-ONDKJR4V.js";import{c as Ce,g as Me,h as be}from"./chunk-QB4KDO4M.js";import{a as Ae}from"./chunk-NNNTRPDR.js";import{b as i}from"./chunk-J7UK2QPE.js";import{b as _e}from"./chunk-3QNHUVFJ.js";import{b as v}from"./chunk-XBFBZZXW.js";import{b as Ne}from"./chunk-LWUJWBPJ.js";import{b as ne,c as le}from"./chunk-Q6D44QVW.js";import{c as Pe,f as x}from"./chunk-XZ52TEBV.js";import{a as A,b as fe}from"./chunk-N6PITG7Q.js";import{a as f}from"./chunk-GKUBZAEG.js";import{a as W,e as De}from"./chunk-UW734WOQ.js";import{j as ce,l as pe,m as me}from"./chunk-ATV5GTE5.js";import{f as ue,i as de,j as Te}from"./chunk-MJXFSFCY.js";import{a as z}from"./chunk-G5SIQY64.js";import{a as ae}from"./chunk-RDGFIF46.js";import{b as T}from"./chunk-LCDA6FHZ.js";import{a as y,b as R,c as ie,d as k,h as oe}from"./chunk-NPIYHDQ7.js";import{a as S}from"./chunk-YJ3RZNO6.js";import{a as q}from"./chunk-GB5RQL32.js";import{a as d,b as O,g as b}from"./chunk-4OZVVJHM.js";import{b as re}from"./chunk-J6ZRC6RI.js";import{a as m}from"./chunk-7W6RATG7.js";import{i as F,x as se}from"./chunk-BDF7KEUQ.js";import{D as te,a as J,b as K,c as L,e as _,n as B,u as X,v as $,z as ee}from"./chunk-2HUIJUS4.js";import{c as Z}from"./chunk-YRTBL7EE.js";import{a as u,c as Y,d as V,i as D}from"./chunk-PYQRTZNZ.js";import{a as s}from"./chunk-BMVJCP2M.js";import{a as E}from"./chunk-JEGVIFEP.js";var N=class extends ne{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Pe,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=d.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=D,this.instancedDoublePrecision=!1,this.normalType=T.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=V(.2,.2,.2),this.diffuse=V(.8,.8,.8),this.externalColor=Z(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=u(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=O.Less,this.textureAlphaMode=b.Blend,this.textureAlphaCutoff=S,this.textureAlphaPremultiplied=!1,this.renderOccluded=Te.Occlude,this.isDecoration=!1}},Ie=class extends le{constructor(){super(...arguments),this.origin=u(),this.slicePlaneLocalOrigin=this.origin}},C=class extends fe{constructor(t,a,e,n=new A(_e,()=>import("./chunk-F3KT2DVP.js"))){super(t,a,n,e),this.type="DefaultMaterialTechnique"}_makePipeline(t,a){let{oitPass:e,output:n,transparent:h,cullFace:c,customDepthTest:p,hasOccludees:l,enableOffset:g}=t,M=e===z.NONE,P=e===z.FrontFace;return me({blending:oe(n)&&h?ve(e):null,culling:Fe(t)?ce(c):null,depthTest:{func:Oe(e,Be(p))},depthWrite:ge(t),drawBuffers:n===y.Depth?{buffers:[se.NONE]}:ye(e,n),colorWrite:pe,stencilWrite:l?Ce:null,stencilTest:l?a?be:Me:null,polygonOffset:M||P?null:Se(g)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function Be(o){return o===O.Lequal?F.LEQUAL:F.LESS}function Fe(o){return o.cullFace!==d.None||!o.hasSlicePlane&&!o.transparent&&!o.doubleSidedMode}var r=class extends Ae{constructor(t,a){super(),this.spherical=t,this.doublePrecisionRequiresObfuscation=a,this.alphaDiscardMode=b.Opaque,this.doubleSidedMode=v.None,this.pbrMode=x.Disabled,this.cullFace=d.None,this.normalType=T.Attribute,this.customDepthTest=O.Less,this.emissionSource=f.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===f.Texture||this.hasOcclusionTexture||this.hasNormalTexture?W.Default:W.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}};s([i({count:b.COUNT})],r.prototype,"alphaDiscardMode",void 0),s([i({count:v.COUNT})],r.prototype,"doubleSidedMode",void 0),s([i({count:x.COUNT})],r.prototype,"pbrMode",void 0),s([i({count:d.COUNT})],r.prototype,"cullFace",void 0),s([i({count:T.COUNT})],r.prototype,"normalType",void 0),s([i({count:O.COUNT})],r.prototype,"customDepthTest",void 0),s([i({count:f.COUNT})],r.prototype,"emissionSource",void 0),s([i()],r.prototype,"hasVertexColors",void 0),s([i()],r.prototype,"hasSymbolColors",void 0),s([i()],r.prototype,"hasVerticalOffset",void 0),s([i()],r.prototype,"hasSlicePlane",void 0),s([i()],r.prototype,"hasSliceHighlight",void 0),s([i()],r.prototype,"hasColorTexture",void 0),s([i()],r.prototype,"hasMetallicRoughnessTexture",void 0),s([i()],r.prototype,"hasOcclusionTexture",void 0),s([i()],r.prototype,"hasNormalTexture",void 0),s([i()],r.prototype,"hasScreenSizePerspective",void 0),s([i()],r.prototype,"hasVertexTangents",void 0),s([i()],r.prototype,"hasOccludees",void 0),s([i()],r.prototype,"hasModelTransformation",void 0),s([i()],r.prototype,"offsetBackfaces",void 0),s([i()],r.prototype,"vvSize",void 0),s([i()],r.prototype,"vvColor",void 0),s([i()],r.prototype,"receiveShadows",void 0),s([i()],r.prototype,"receiveAmbientOcclusion",void 0),s([i()],r.prototype,"textureAlphaPremultiplied",void 0),s([i()],r.prototype,"instanced",void 0),s([i()],r.prototype,"instancedColor",void 0),s([i()],r.prototype,"writeDepth",void 0),s([i()],r.prototype,"transparent",void 0),s([i()],r.prototype,"enableOffset",void 0),s([i()],r.prototype,"terrainDepthTest",void 0),s([i()],r.prototype,"cullAboveTerrain",void 0),s([i()],r.prototype,"snowCover",void 0),s([i()],r.prototype,"hasColorTextureTransform",void 0),s([i()],r.prototype,"hasEmissionTextureTransform",void 0),s([i()],r.prototype,"hasNormalTextureTransform",void 0),s([i()],r.prototype,"hasOcclusionTextureTransform",void 0),s([i()],r.prototype,"hasMetallicRoughnessTextureTransform",void 0);var I=class extends C{constructor(t,a,e){super(t,a,e,new A(Ne,()=>import("./chunk-UNA2JARJ.js"))),this.type="RealisticTreeTechnique"}};var Ee=class extends de{constructor(t,a){super(t,j),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[w.OPAQUE_MATERIAL,e=>(k(e)||R(e))&&!this.parameters.transparent],[w.TRANSPARENT_MATERIAL,e=>(k(e)||R(e))&&this.parameters.transparent&&this.parameters.writeDepth],[w.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(ie(e)||R(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=ke(this.parameters),this._configuration=new r(a.spherical,a.doublePrecisionRequiresObfuscation)}isVisibleForOutput(t){return t!==y.Shadow&&t!==y.ShadowExcludeHighlight&&t!==y.ShadowHighlight||this.parameters.castShadows}get visible(){let t=this.parameters;if(t.layerOpacity<S)return!1;let{hasInstancedColor:a,hasVertexColors:e,hasSymbolColors:n,vvColor:h}=t,c=a||h||n,p=t.colorMixMode==="replace",l=t.opacity>=S;if(e&&c)return p||l;let g=t.externalColor&&t.externalColor[3]>=S;return e?p?g:l:c?p||l:p?g:l}get hasEmissions(){return!!this.parameters.emissiveTextureId||!te(this.parameters.emissiveFactor,D)}getConfiguration(t,a){let e=this.parameters,{treeRendering:n,doubleSided:h,doubleSidedType:c}=e;return this._configuration.output=t,this._configuration.hasNormalTexture=!n&&!!e.normalTextureId,this._configuration.hasColorTexture=!!e.textureId,this._configuration.hasVertexTangents=!n&&e.hasVertexTangents,this._configuration.instanced=e.isInstanced,this._configuration.instancedDoublePrecision=e.instancedDoublePrecision,this._configuration.vvSize=!!e.vvSize,this._configuration.hasVerticalOffset=e.verticalOffset!=null,this._configuration.hasScreenSizePerspective=e.screenSizePerspective!=null,this._configuration.hasSlicePlane=e.hasSlicePlane,this._configuration.hasSliceHighlight=e.hasSliceHighlight,this._configuration.alphaDiscardMode=e.textureAlphaMode,this._configuration.normalType=n?T.Attribute:e.normalType,this._configuration.transparent=e.transparent,this._configuration.writeDepth=e.writeDepth,e.customDepthTest!=null&&(this._configuration.customDepthTest=e.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=e.hasSlicePlane?d.None:e.cullFace,this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration.hasModelTransformation=!n&&e.modelTransformation!=null,this._configuration.hasVertexColors=e.hasVertexColors,this._configuration.hasSymbolColors=e.hasSymbolColors,this._configuration.doubleSidedMode=n?v.WindingOrder:h&&c==="normal"?v.View:h&&c==="winding-order"?v.WindingOrder:v.None,this._configuration.instancedColor=e.hasInstancedColor,this._configuration.receiveShadows=e.receiveShadows&&e.receiveShadows,this._configuration.receiveAmbientOcclusion=e.receiveAmbientOcclusion&&a.ssao!=null,this._configuration.vvColor=!!e.vvColor,this._configuration.textureAlphaPremultiplied=!!e.textureAlphaPremultiplied,this._configuration.pbrMode=e.usePBR?e.isSchematic?x.Schematic:x.Normal:x.Disabled,this._configuration.hasMetallicRoughnessTexture=!n&&!!e.metallicRoughnessTextureId,this._configuration.emissionSource=n?f.None:e.emissiveTextureId!=null?f.Texture:e.usePBR?f.Value:f.None,this._configuration.hasOcclusionTexture=!n&&!!e.occlusionTextureId,this._configuration.offsetBackfaces=!(!e.transparent||!e.offsetTransparentBackfaces),this._configuration.oitPass=a.oitPass,this._configuration.enableOffset=a.camera.relativeElevation<xe,this._configuration.snowCover=qe(a),this._configuration.hasColorTextureTransform=!!e.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!e.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!e.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!e.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!e.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(t,a,e,n,h,c){if(this.parameters.verticalOffset!=null){let p=e.camera;L(H,a[12],a[13],a[14]);let l=null;switch(e.viewingMode){case q.Global:l=X(Ve,H);break;case q.Local:l=K(Ve,Ue)}let g=0,M=_(He,H,p.eye),P=J(M),Le=B(M,M,1/P),Q=null;this.parameters.screenSizePerspective&&(Q=$(l,Le)),g+=ue(p,P,this.parameters.verticalOffset,Q??0,this.parameters.screenSizePerspective),B(l,l,g),ee(U,l,e.transform.inverseRotation),n=_(ze,n,U),h=_(We,h,U)}Re(t,e,n,h,he(e.verticalOffset),c)}createGLMaterial(t){return new G(t)}createBufferWriter(){return new we(this._vertexBufferLayout)}},G=class extends De{constructor(t){super(E(E({},t),t.material.parameters))}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});let a=this._material.parameters;this.updateTexture(a.textureId);let e=t.camera.viewInverseTransposeMatrix;return L(a.origin,e[3],e[7],e[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(a.treeRendering?I:C,t)}},j=class extends N{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};function qe(o){return o.weather!=null&&o.weatherVisible&&o.weather.type==="snowy"&&o.weather.snowCover==="enabled"}function ke(o){let t=re().vec3f(m.POSITION);return o.normalType===T.Compressed?t.vec2i16(m.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(m.NORMAL),o.hasVertexTangents&&t.vec4f(m.TANGENT),(o.textureId||o.normalTextureId||o.metallicRoughnessTextureId||o.emissiveTextureId||o.occlusionTextureId)&&t.vec2f(m.UV0),o.hasVertexColors&&t.vec4u8(m.COLOR),o.hasSymbolColors&&t.vec4u8(m.SYMBOLCOLOR),ae()&&t.vec4u8(m.OBJECTANDLAYERIDCOLOR),t}var ze=u(),We=u(),Ue=Y(0,0,1),Ve=u(),U=u(),H=u(),He=u();export{Ie as a,Ee as b};
