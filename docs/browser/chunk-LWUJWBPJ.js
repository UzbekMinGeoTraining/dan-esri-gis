import{a as A,b as E,c as F,d as z}from"./chunk-V7QAQAGA.js";import{a as _,c as Z}from"./chunk-K5V3S3K3.js";import{c as G,d as q,e as J,f as K}from"./chunk-C3EWQ5V5.js";import{a as N}from"./chunk-I6ETUG5Q.js";import{b as Q,c as X}from"./chunk-4MZSW4Z6.js";import{a as H}from"./chunk-MEBZWNWT.js";import{f as v,g as k}from"./chunk-XZ52TEBV.js";import{a as U,b as W}from"./chunk-WAPQB6I3.js";import{a as S}from"./chunk-XC4LDHG5.js";import{d as L}from"./chunk-S3ASAZCA.js";import{a as P}from"./chunk-ZUUCQTSR.js";import{b as R}from"./chunk-GKUBZAEG.js";import{b as $}from"./chunk-UW734WOQ.js";import{a as B}from"./chunk-X7WNJQZZ.js";import{a as Y}from"./chunk-ZG3FCPXY.js";import{d as T}from"./chunk-ECBUS54L.js";import{c as D}from"./chunk-B72PB7U4.js";import{a as f,b as M}from"./chunk-644SLL4Y.js";import{a as I}from"./chunk-OO4IIGVK.js";import{a as V}from"./chunk-4IVMQ5PX.js";import{a as j}from"./chunk-CQUOQXLP.js";import{a as O}from"./chunk-LCDA6FHZ.js";import{a as c}from"./chunk-NPIYHDQ7.js";import{a as m}from"./chunk-VI4TDFI5.js";import{a as p}from"./chunk-2HN33SWB.js";import{b as i,c as e}from"./chunk-BXR2KKYP.js";import{a as y}from"./chunk-YJ3RZNO6.js";import{a as w}from"./chunk-7W6RATG7.js";function io(o){let a=new j,{vertex:l,fragment:t,varyings:n}=a,{output:u,offsetBackfaces:g,instancedColor:h,pbrMode:x,snowCover:d,spherical:b}=o,C=x===v.Normal||x===v.Schematic;if(M(l,o),a.include(P),n.add("vpos","vec3"),a.include(B,o),a.include(E,o),a.include(T,o),u===c.Color&&(f(a.vertex,o),a.include(O,o),a.include(S,o),g&&a.include(A),h&&a.attributes.add(w.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),o.terrainDepthTest&&n.add("depth","float"),a.include($,o),a.include(L,o),a.include(F,o),a.include(N,o),l.uniforms.add(new I("externalColor",s=>s.externalColor)),n.add("vcolorExt","vec4"),l.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${e(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${i.float(y)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${e(g,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${e(o.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),u===c.Color){let{hasColorTexture:s,hasColorTextureTransform:oo,receiveShadows:ao}=o;a.include(K,o),a.include(G,o),a.include(_,o),a.include(o.instancedDoublePrecision?Q:X,o),a.include(Y,o),a.include(D,o),a.include(R,o),f(a.fragment,o),U(t),q(t),J(t),t.uniforms.add(l.uniforms.get("localOrigin"),l.uniforms.get("view"),new m("ambient",r=>r.ambient),new m("diffuse",r=>r.diffuse),new p("opacity",r=>r.opacity),new p("layerOpacity",r=>r.layerOpacity)),s&&t.uniforms.add(new V("tex",r=>r.texture)),a.include(k,o),a.include(H,o),t.include(Z),W(t),t.main.add(i`
      discardBySlice(vpos);
      ${e(o.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${s?`texture(tex, ${oo?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${e(s,`${e(o.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${ao?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":b?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${o.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${e(d,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${e(C,`vec3 normalGround = ${b?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${C?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${e(d,i`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${d?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return a.include(z,o),a}var Bo=Object.freeze(Object.defineProperty({__proto__:null,build:io},Symbol.toStringTag,{value:"Module"}));export{io as a,Bo as b};
