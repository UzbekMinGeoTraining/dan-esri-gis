import{a as Y}from"./chunk-7OTZECLS.js";import{a as K}from"./chunk-XBFBZZXW.js";import{a as E,b as I,c as B,d as H}from"./chunk-V7QAQAGA.js";import{a as k,c as so}from"./chunk-K5V3S3K3.js";import{a as D}from"./chunk-Q6D44QVW.js";import{c as Q,d as oo,e as eo,f as ro}from"./chunk-C3EWQ5V5.js";import{a as _}from"./chunk-I6ETUG5Q.js";import{b as ao,c as io}from"./chunk-4MZSW4Z6.js";import{a as J}from"./chunk-MEBZWNWT.js";import{f as T,g as X}from"./chunk-XZ52TEBV.js";import{b as Z}from"./chunk-WAPQB6I3.js";import{a as L}from"./chunk-XC4LDHG5.js";import{d as A}from"./chunk-S3ASAZCA.js";import{a as S}from"./chunk-ZUUCQTSR.js";import{b as no}from"./chunk-GKUBZAEG.js";import{a as d,b as F}from"./chunk-UW734WOQ.js";import{a as W}from"./chunk-X7WNJQZZ.js";import{a as to}from"./chunk-ZG3FCPXY.js";import{d as j}from"./chunk-ECBUS54L.js";import{c as $}from"./chunk-B72PB7U4.js";import{a as g,b as R}from"./chunk-644SLL4Y.js";import{a as G}from"./chunk-OO4IIGVK.js";import{a as z}from"./chunk-4IVMQ5PX.js";import{a as q}from"./chunk-CQUOQXLP.js";import{a as O,b as c}from"./chunk-LCDA6FHZ.js";import{a as l}from"./chunk-S3J33BKD.js";import{h as N}from"./chunk-NPIYHDQ7.js";import{a as x}from"./chunk-VI4TDFI5.js";import{a as p}from"./chunk-2HN33SWB.js";import{b as r,c as i}from"./chunk-BXR2KKYP.js";import{a as P}from"./chunk-YJ3RZNO6.js";import{d as n}from"./chunk-DBLGLVAQ.js";import{a as M}from"./chunk-7W6RATG7.js";function lo(o,e){e.hasColorTextureTransform?(o.varyings.add("colorUV","vec2"),o.vertex.uniforms.add(new l("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??n)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardColorUV(){}`)}function mo(o,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==d.None?(o.varyings.add("normalUV","vec2"),o.vertex.uniforms.add(new l("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??n)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardNormalUV(){}`)}function co(o,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==d.None?(o.varyings.add("emissiveUV","vec2"),o.vertex.uniforms.add(new l("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??n)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardEmissiveUV(){}`)}function uo(o,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==d.None?(o.varyings.add("occlusionUV","vec2"),o.vertex.uniforms.add(new l("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??n)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardOcclusionUV(){}`)}function vo(o,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==d.None?(o.varyings.add("metallicRoughnessUV","vec2"),o.vertex.uniforms.add(new l("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??n)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Co(o){let e=new q,{vertex:a,fragment:s,varyings:m}=e,{output:fo,normalType:u,offsetBackfaces:h,instancedColor:w,spherical:C,receiveShadows:xo,snowCover:v,pbrMode:V,textureAlphaPremultiplied:po,instancedDoublePrecision:go,hasVertexColors:b,hasVertexTangents:y,hasColorTexture:U,hasNormalTexture:To,hasNormalTextureTransform:ho,hasColorTextureTransform:wo}=o;if(R(a,o),e.include(S),m.add("vpos","vec3"),e.include(W,o),e.include(I,o),e.include(j,o),e.include(lo,o),!N(fo))return e.include(H,o),e;e.include(mo,o),e.include(co,o),e.include(uo,o),e.include(vo,o),g(a,o),e.include(O,o),e.include(L,o);let f=u===c.Attribute||u===c.Compressed;return f&&h&&e.include(E),e.include(Y,o),e.include(D,o),w&&e.attributes.add(M.INSTANCECOLOR,"vec4"),m.add("vPositionLocal","vec3"),e.include(F,o),e.include(A,o),e.include(B,o),e.include(_,o),a.uniforms.add(new G("externalColor",t=>t.externalColor)),m.add("vcolorExt","vec4"),o.terrainDepthTest&&m.add("depth","float"),a.main.add(r`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${i(w,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${r.float(P)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${i(f,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${i(y,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${i(f&&h,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${i(o.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),e.include(ro,o),e.include(Q,o),e.include(k,o),e.include(go?ao:io,o),e.include(to,o),e.include($,o),e.include(no,o),g(s,o),s.uniforms.add(a.uniforms.get("localOrigin"),new x("ambient",t=>t.ambient),new x("diffuse",t=>t.diffuse),new p("opacity",t=>t.opacity),new p("layerOpacity",t=>t.layerOpacity)),U&&s.uniforms.add(new z("tex",t=>t.texture)),e.include(X,o),e.include(J,o),s.include(so),e.include(K,o),oo(s),eo(s),Z(s),s.main.add(r`
      discardBySlice(vpos);
      ${i(o.terrainDepthTest,"terrainDepthTest(depth);")}
      ${U?r`
              vec4 texColor = texture(tex, ${wo?"colorUV":"vuv0"});
              ${i(po,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${u===c.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${xo?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":i(C,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${i(b,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${i(b,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${To?`mat3 tangentSpace = computeTangentSpace(${y?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ho?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${C?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${i(v,r`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${V===T.Normal||V===T.Schematic?r`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${i(v,r`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${v?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),e}var me=Object.freeze(Object.defineProperty({__proto__:null,build:Co},Symbol.toStringTag,{value:"Module"}));export{Co as a,me as b};
