import{a as y}from"./chunk-ZRDZCHT6.js";import{a as go,h as fo,j as yo}from"./chunk-W4FJ4A5Q.js";import{a as Co,b as i}from"./chunk-J7UK2QPE.js";import{a as no}from"./chunk-7OTZECLS.js";import{b as h}from"./chunk-XBFBZZXW.js";import{b as io,c as vo}from"./chunk-K5V3S3K3.js";import{a as to}from"./chunk-HCCGI45Q.js";import{a as S}from"./chunk-Q6D44QVW.js";import{a as ao,e as L,f as V}from"./chunk-C3EWQ5V5.js";import{a as D}from"./chunk-I6ETUG5Q.js";import{b as po}from"./chunk-4MZSW4Z6.js";import{f as C,g as co}from"./chunk-XZ52TEBV.js";import{b as mo}from"./chunk-WAPQB6I3.js";import{d as H}from"./chunk-S3ASAZCA.js";import{b as f}from"./chunk-ZUUCQTSR.js";import{a as $,b as ho}from"./chunk-GKUBZAEG.js";import{a as R,b as eo,c as lo}from"./chunk-UW734WOQ.js";import{a as uo}from"./chunk-ZG3FCPXY.js";import{a as F}from"./chunk-G5SIQY64.js";import{a as ro}from"./chunk-WW7S4V24.js";import{b as oo}from"./chunk-B72PB7U4.js";import{a as W}from"./chunk-4IVMQ5PX.js";import{a as so}from"./chunk-CQUOQXLP.js";import{a as T,d as Z}from"./chunk-BNUQT6PD.js";import{a as Q}from"./chunk-C2ONI6UP.js";import{b as v}from"./chunk-LCDA6FHZ.js";import{a as d,h as O}from"./chunk-NPIYHDQ7.js";import{a as Y}from"./chunk-GXSLPADW.js";import{b as a,c as s}from"./chunk-BXR2KKYP.js";import{a as K}from"./chunk-YJ3RZNO6.js";import{a as J}from"./chunk-B7GIKKEW.js";import{a as A,g as b}from"./chunk-4OZVVJHM.js";import{a as q,b as G,c as X}from"./chunk-VPXBKZQM.js";import{a as t}from"./chunk-BMVJCP2M.js";var u;function xo(o,e){let l=o.vertex;switch(l.code.add(a`#define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)`),e.vertexDiscardMode){case u.None:l.code.add(a`#define vertexDiscardByOpacity(_opacity_) {}`);break;case u.Opaque:l.code.add(a`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);break;case u.Transparent:l.code.add(a`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);break;case u.COUNT:break;default:e.vertexDiscardMode}}(function(o){o[o.None=0]="None",o[o.Transparent=1]="Transparent",o[o.Opaque=2]="Opaque",o[o.COUNT=3]="COUNT"})(u||(u={}));var g;(function(o){o[o.None=0]="None",o[o.NoOverlay=1]="NoOverlay",o[o.ColorOverlay=2]="ColorOverlay",o[o.ColorOverlayWithWater=3]="ColorOverlayWithWater",o[o.COUNT=4]="COUNT"})(g||(g={}));var r=class extends Co{constructor(e,l){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=l,this.output=d.Color,this.textureCoordinateType=R.None,this.componentData=T.Uniform,this.cullFace=A.Back,this.vertexDiscardMode=u.None,this.doubleSidedMode=h.WindingOrder,this.alphaDiscardMode=b.Opaque,this.integratedMeshMode=g.None,this.oitPass=F.NONE,this.ellipsoidMode=y.Earth,this.pbrMode=C.Disabled,this.normalType=v.Attribute,this.emissionSource=$.None,this.hasVertexColors=!1,this.hasNormals=!1,this.shadeNormals=!0,this.hasSlicePlane=!1,this.hasColorTexture=!1,this.receiveAmbientOcclusion=!0,this.receiveShadows=!0,this.blendingEnabled=!0,this.screenSpaceReflections=!1,this.hasPolygonOffset=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasNormalTextureTransform=!1,this.cloudReflections=!0,this.snowCover=!1,this.objectAndLayerIdColor=!1,this.discardInvisibleFragments=!1,this.occlusionPass=!1,this.bindType=J.Draw,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.useCustomDTRExponentForWater=!1,this.hasVertexTangents=!1,this.highStepCount=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.useFillLights=!0,this.objectAndLayerIdColorInstanced=!1,this.canHaveOverlay=!0}};t([i({count:d.COUNT})],r.prototype,"output",void 0),t([i({count:R.COUNT})],r.prototype,"textureCoordinateType",void 0),t([i({count:T.COUNT})],r.prototype,"componentData",void 0),t([i({count:A.COUNT})],r.prototype,"cullFace",void 0),t([i({count:u.COUNT})],r.prototype,"vertexDiscardMode",void 0),t([i({count:h.COUNT})],r.prototype,"doubleSidedMode",void 0),t([i({count:b.COUNT})],r.prototype,"alphaDiscardMode",void 0),t([i({count:g.COUNT})],r.prototype,"integratedMeshMode",void 0),t([i({count:F.COUNT})],r.prototype,"oitPass",void 0),t([i({count:y.COUNT})],r.prototype,"ellipsoidMode",void 0),t([i({count:C.COUNT})],r.prototype,"pbrMode",void 0),t([i({count:v.COUNT})],r.prototype,"normalType",void 0),t([i({count:$.COUNT})],r.prototype,"emissionSource",void 0),t([i()],r.prototype,"hasVertexColors",void 0),t([i()],r.prototype,"hasNormals",void 0),t([i()],r.prototype,"shadeNormals",void 0),t([i()],r.prototype,"hasSlicePlane",void 0),t([i()],r.prototype,"hasColorTexture",void 0),t([i()],r.prototype,"receiveAmbientOcclusion",void 0),t([i()],r.prototype,"receiveShadows",void 0),t([i()],r.prototype,"blendingEnabled",void 0),t([i()],r.prototype,"screenSpaceReflections",void 0),t([i()],r.prototype,"hasPolygonOffset",void 0),t([i()],r.prototype,"hasMetallicRoughnessTexture",void 0),t([i()],r.prototype,"hasOcclusionTexture",void 0),t([i()],r.prototype,"hasNormalTexture",void 0),t([i()],r.prototype,"hasOccludees",void 0),t([i()],r.prototype,"terrainDepthTest",void 0),t([i()],r.prototype,"cullAboveTerrain",void 0),t([i()],r.prototype,"hasNormalTextureTransform",void 0),t([i()],r.prototype,"cloudReflections",void 0),t([i()],r.prototype,"snowCover",void 0),t([i()],r.prototype,"objectAndLayerIdColor",void 0);function E(o,e){let l=o.fragment;switch(e.doubleSidedMode){case h.None:l.code.add(a`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case h.View:o.include(f,e),l.code.add(a`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case h.WindingOrder:l.code.add(a`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:e.doubleSidedMode;case h.COUNT:}switch(e.normalType){case v.Attribute:case v.Compressed:o.include(S,e),l.main.add(a`vec3 fragmentFaceNormal = _adjustDoublesided(normalize(vNormalWorld));
vec3 fragmentFaceNormalView = gl_FrontFacing ? normalize(vNormalView) : -normalize(vNormalView);`);break;case v.ScreenDerivative:o.include(f,e),l.main.add(a`vec3 fragmentFaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
vec3 fragmentFaceNormalView = normalize(cross(dFdx(vPosition_view), dFdy(vPosition_view)));`);default:case v.COUNT:}e.shadeNormals?l.main.add(a`vec3 fragmentShadingNormal = fragmentFaceNormal;`):e.spherical?(o.include(f,e),l.main.add(a`vec3 fragmentShadingNormal = normalize(positionWorld());`)):l.main.add(a`vec3 fragmentShadingNormal = vec3(0.0, 0.0, 1.0);`)}function bo(o,e){o.include(D,e),o.fragment.include(vo);let l=o.fragment;l.uniforms.add(new Q("baseColor",n=>n.baseColor)),l.uniforms.add(new to("objectOpacity",n=>n.objectOpacity)),e.hasVertexColors?l.code.add(a`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):l.code.add(a`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`),l.code.add(a`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)}function Oo(o,e){let l=e.hasColorTexture&&(O(e.output)||e.alphaDiscardMode!==b.Opaque);l&&(o.include(lo,e),o.fragment.uniforms.add(new Y("baseColorTexture",n=>n.texture))),o.fragment.code.add(a`
    vec4 readBaseColorTexture() {
      return ${l?"textureLookup(baseColorTexture, vuv0)":"vec4(1.0)"};
    }
  `)}function Do(o){let e=new so;e.include(f,o),e.include(S,o),e.include(D,o),e.include(eo,o),e.include(H,o),e.include(Z,o),e.include(io,o),e.include(oo,o),e.include(Oo,o),e.include(xo,o);let{vertex:l,fragment:n}=e,{output:m,pbrMode:N,hasNormalTexture:P,snowCover:I,receiveShadows:_,spherical:c,ellipsoidMode:U}=o,B=N===C.Normal||N===C.Schematic;B&&(e.include(co,o),P&&e.include(no,o));let j=m===d.Shadow||m===d.ShadowHighlight||m===d.ShadowExcludeHighlight,To=j&&o.componentData===T.Varying;l.code.add(`#define discardShadows(castShadows) { ${s(To,"if(!castShadows) { gl_Position = vec4(vec3(1e38), 1.0); return; }")} }`);let p=o.integratedMeshMode===g.ColorOverlay||o.integratedMeshMode===g.ColorOverlayWithWater;if(p){e.include(V,o),e.include(fo,o);let M=U===y.Earth,x=U===y.Earth,Mo=M?q.radius:x?G.radius:X.radius;l.code.add(`
      ${s(c,`const float invRadius = ${a.float(1/Mo)};`)}
      vec2 projectOverlay(vec3 pos) { return pos.xy ${s(c,"/ (1.0 + invRadius * pos.z);")}; }`)}let w=p&&O(m)&&N===C.WaterOnIntegratedMesh;if(w&&(e.varyings.add("tbnTangent","vec3"),e.varyings.add("tbnBiTangent","vec3"),e.varyings.add("groundNormal","vec3")),l.main.add(a`
    bool castShadows;
    vec4 externalColor = forwardExternalColor(castShadows);
    discardShadows(castShadows);

    vertexDiscardByOpacity(externalColor.a);

    ${m===d.ObjectAndLayerIdColor?a`externalColor.a = 1.0;`:""}

    if (externalColor.a < ${a.float(K)}) {
      // Discard this vertex
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }

    forwardPosition(readElevationOffset());
    forwardNormal();
    forwardTextureCoordinates();
    forwardVertexColor();
    forwardLinearDepth();
    forwardObjectAndLayerIdColor();
    ${w?c?a`
              groundNormal = normalize(positionWorld());
              tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
              tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:a`
              groundNormal = vec3(0.0, 0.0, 1.0);
              tbnTangent = vec3(1.0, 0.0, 0.0);
              tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
    ${p?a`setOverlayVTC(projectOverlay(position));`:""}
  `),O(m))return e.include(uo,o),e.include(bo,o),e.include(E,o),e.include(V,o),e.include(ho,o),_&&e.include(po,o),n.code.add(a`
      float evaluateShadow() {
        return ${_?"readShadowMap(vPositionWorldCameraRelative, linearDepth)":"0.0"};
      }`),p&&n.uniforms.add(new W("ovColorTex",(M,x)=>yo(M,x))),n.main.add(a`
      discardBySlice(vPositionWorldCameraRelative);
      terrainDepthTest(vPosition_view.z);

      vec4 textureColor = readBaseColorTexture();
      discardOrAdjustAlpha(textureColor);

      vec4 externalColor;
      int externalColorMixMode;
      readExternalColor(externalColor, externalColorMixMode);

      vec4 materialColor = computeMaterialColor(textureColor, externalColor, externalColorMixMode);
      ${p?a`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),B?(mo(n),c&&L(n),n.main.add(a`
        applyPBRFactors();
        ${s(N===C.Normal,a`if (externalColorMixMode == 3) {
              mrr = vec3(0.0, 0.6, 0.2);
            }`)}
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
        ${s(P,"mat3 tangentSpace = computeTangentSpace(fragmentShadingNormal, vPositionWorldCameraRelative, vuv0);")}
        vec3 shadingNormal = ${P?"computeTextureNormal(tangentSpace, vuv0)":"fragmentShadingNormal"};
        vec3 normalGround = ${c?a`normalize(positionWorld())`:a`vec3(0.0, 0.0, 1.0)`};

        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * evaluateAmbientOcclusionInverse();
        ${s(I,a`float snow = smoothstep(0.5, 0.55, dot(fragmentFaceNormal, normalize(positionWorld())));
                 materialColor.rgb = mix(materialColor.rgb, vec3(1.1), snow);
                 ssao = mix(ssao, 0.5 * ssao, snow);
                 shadingNormal = mix(shadingNormal, fragmentFaceNormal, snow);`)}
        ${s(p,"materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;")}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 emission = getEmissions();
        ${s(c,"float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());")}
        ${c?a`float shadow = max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow());`:"float shadow = evaluateShadow();"}
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, shadow, ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(c&&L(n),w&&n.uniforms.add(new W("ovNormalTex",(M,x)=>x.overlay?.getTexture(go.WaterNormal))),n.main.add(a`
        ${s(c,"float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());")}
        float shadow = ${_?c?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow())":"evaluateShadow()":c?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        ${s(I,a`float snow = smoothstep(0.5, 0.55, dot(fragmentFaceNormal, normalize(positionWorld())));
               materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)}

        // At global scale we create some additional ambient light based on the main light to simulate global illumination
        float ssao = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());

        ${p?a` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(fragmentShadingNormal, materialColor.rgb, shadow, ssao, additionalLight), materialColor.a);
        ${s(w,a`vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
                 float waterNormalLength = length(overlayWaterMask);
                 if (waterNormalLength > 0.95) {
                   mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                   vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                   vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                   // un-gamma the ground color to mix in linear space
                   shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
                 }`)}
      `)),n.main.add(a`outputColorHighlightOID(shadedColor, vPositionWorldCameraRelative);`),e;let z=m===d.Normal,No=m===d.ObjectAndLayerIdColor,wo=m===d.Highlight,k=j||m===d.ViewshedShadow;return k&&e.include(ao,o),z&&e.include(E,o),e.include(ro,o),n.main.add(a`
    discardBySlice(vPositionWorldCameraRelative);

    vec4 textureColor = readBaseColorTexture();
    discardOrAdjustAlpha(textureColor);

    ${s(k,"outputDepth(linearDepth);")}
    ${s(z,a`fragColor = vec4(vec3(0.5) + 0.5 * fragmentFaceNormalView, 1.0);`)}
    ${s(No,p?"fragColor = getOverlayColorTexel(vtcOverlay);":"outputObjectAndLayerIdColor();")}
    ${s(wo,a`${s(p,a`
           vec2 overlayHighlightTexel = getAllOverlayHighlightValuesEncoded();
           outputAllHighlights(overlayHighlightTexel);`,a`calculateOcclusionAndOutputHighlight();`)}`)}`),e}var ze=Object.freeze(Object.defineProperty({__proto__:null,build:Do},Symbol.toStringTag,{value:"Module"}));export{u as a,g as b,r as c,Do as d,ze as e};
