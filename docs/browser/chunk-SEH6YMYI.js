import{a as D}from"./chunk-NTN3HUFI.js";import{a as y}from"./chunk-WG3SYF7L.js";import{a as h}from"./chunk-4EBEFT6T.js";import{b as S}from"./chunk-4MZSW4Z6.js";import{a as v}from"./chunk-OO4IIGVK.js";import{a as w}from"./chunk-KQHYII76.js";import{a as o}from"./chunk-4IVMQ5PX.js";import{a as x}from"./chunk-CQUOQXLP.js";import{a as m}from"./chunk-H6LJ2DCJ.js";import{a as f}from"./chunk-AOTWUAUY.js";import{a as u}from"./chunk-VI4TDFI5.js";import{a}from"./chunk-2HN33SWB.js";import{b as r}from"./chunk-BXR2KKYP.js";import{a as g}from"./chunk-XXOIKNT6.js";import{u as p,y as c}from"./chunk-2HUIJUS4.js";import{f as s,h as d}from"./chunk-5MNDZ6BX.js";import{a as n}from"./chunk-PYQRTZNZ.js";var b=.025;function T(){let i=new x;i.include(S,z),i.include(w),i.include(y);let l=i.fragment;return l.include(m),l.uniforms.add(new o("defaultDepthTex",(e,t)=>t.shadowMap.getSnapshot(h.ExcludeHighlight)),new o("highlightDepthTex",(e,t)=>t.shadowMap.getSnapshot(h.Highlight)),new o("depthMap",(e,t)=>t.depth?.attachment),new o("highlightTexture",e=>e.highlight),new v("uColor",e=>e.shadowColor),new a("opacity",e=>e.shadowOpacity),new a("occludedOpacity",e=>e.occludedShadowOpacity),new a("terminationFactor",e=>e.opacityElevation*e.dayNightTerminator),new u("lightingMainDirectionView",(e,t)=>p(P,c(P,t.lighting.mainLight.direction,t.camera.viewInverseTransposeMatrix))),new f("inverseViewMatrix",(e,t)=>s(M,d(M,t.camera.viewMatrix,t.camera.center)))).main.add(r`
    ivec2 highlightTextureSize = textureSize(highlightTexture, 0);
    ivec2 highlightIUV = ivec2(uv * vec2(highlightTextureSize));
    vec4 highlightInfo = texelFetch(highlightTexture, highlightIUV, 0);

    fragColor = vec4(0.0);

    // Calculate bit mask to check if pixel is highlit unoccluded at any level
    int ored =
         (int(highlightInfo.r*255.0) << 0)
       | (int(highlightInfo.g*255.0) << 8)
       | (int(highlightInfo.b*255.0) << 16)
       | (int(highlightInfo.a*255.0) << 24);
    bool visiblyHighlighted = ((ored & ~(ored >> 1)) & (1+4+16+64)) != 0;
    if (visiblyHighlighted) {
      return;
    }

    // 1.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
    float depth = depthFromTexture(depthMap, uv);
    if (depth >= 1.0 || depth <= 0.0) {
      return;
    }

    float currentPixelDepth = linearizeDepth(depth);
    vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
    vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

    mat4 shadowMatrix;
    float linearDepth = -currentPixelDepth;
    int i = chooseCascade(linearDepth, shadowMatrix);
    if (i >= numCascades) {
      return;
    }

    // vertex completely outside? -> no shadow
    vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
    if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
      return;
    }

    ivec2 texSize = textureSize(highlightDepthTex, 0);
    ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));

    float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
    bool shadowHighlight = depthHighlight < lvpos.z;
    if (!shadowHighlight) {
      return;
    }

    float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
    bool shadowDefault = depthDefault < lvpos.z;

    vec3 normal = normalFromDepth(depthMap, currentPixelPos.xyz, gl_FragCoord.xy, uv);
    bool shaded = dot(normal, lightingMainDirectionView) < ${r.float(b)};

    float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
    fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
  `),i}var M=g(),P=n(),z=new D,A=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{T as a,A as b};
