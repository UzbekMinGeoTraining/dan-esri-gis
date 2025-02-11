import{a as ge}from"./chunk-ZZBU366R.js";import{a as pe,g as D,i as g}from"./chunk-W4FJ4A5Q.js";import{a as fe}from"./chunk-UGVZ3EW2.js";import{a as ae,c as ne,d as ce,e as de,f as $}from"./chunk-C3EWQ5V5.js";import{a as me,c as ve}from"./chunk-4MZSW4Z6.js";import{f as m}from"./chunk-XZ52TEBV.js";import{a as le,b as se}from"./chunk-WAPQB6I3.js";import{a as X}from"./chunk-XC4LDHG5.js";import{a as R,b as J,d as K}from"./chunk-S3ASAZCA.js";import{a as q}from"./chunk-ZUUCQTSR.js";import{b as oe}from"./chunk-UW734WOQ.js";import{a as te}from"./chunk-WW7S4V24.js";import{c as Q}from"./chunk-B72PB7U4.js";import{a as Z,b as ee,c as N}from"./chunk-644SLL4Y.js";import{a as Y}from"./chunk-A54VD7GL.js";import{a as re}from"./chunk-4IVMQ5PX.js";import{a as ie}from"./chunk-CQUOQXLP.js";import{a as H}from"./chunk-LCDA6FHZ.js";import{a as n}from"./chunk-NPIYHDQ7.js";import{a as E}from"./chunk-VI4TDFI5.js";import{a as h}from"./chunk-523X5JOP.js";import{b as o,c as t}from"./chunk-BXR2KKYP.js";import{a as x}from"./chunk-YJ3RZNO6.js";import{a as G}from"./chunk-XXOIKNT6.js";import{c as _,u as k}from"./chunk-2HUIJUS4.js";import{h as j}from"./chunk-5MNDZ6BX.js";import{a as I}from"./chunk-PYQRTZNZ.js";var u;(function(e){e[e.Opaque=0]="Opaque",e[e.Transparent=1]="Transparent",e[e.InvisibleWithDraped=2]="InvisibleWithDraped",e[e.Invisible=3]="Invisible",e[e.COUNT=4]="COUNT"})(u||(u={}));function ue(e,a){e.varyings.add("tbnTangent","vec3"),e.varyings.add("tbnBiTangent","vec3"),a.spherical?e.vertex.code.add(o`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(o`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(o`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}var w;(function(e){e[e.LayerOnly=0]="LayerOnly",e[e.ColorComposite=1]="ColorComposite",e[e.GridComposite=2]="GridComposite",e[e.COUNT=3]="COUNT"})(w||(w={}));var T=class extends me{constructor(){super(...arguments),this.overlayOpacity=1}};function Ce(e,a){let{vertex:i,fragment:r,varyings:l}=e;l.add("vtc","vec2"),i.uniforms.add(new O("texOffsetAndScale")),r.uniforms.add(new S("tex")),r.uniforms.add(new y("textureOpacities"));let v=a.textureFadingEnabled&&!a.renderOccluded;v&&(i.uniforms.add(new O("nextTexOffsetAndScale")),l.add("nvtc","vec2"),r.uniforms.add(new S("texNext")),r.uniforms.add(new y("nextTexOpacities")),r.uniforms.add(new L("fadeFactor")));let s=a.tileBlendInput===w.ColorComposite,C=a.tileBlendInput===w.GridComposite;C&&r.include(ge),s&&r.uniforms.add(new y("backgroundColor")),i.code.add(o`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${v?o`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:o``}
  }`),r.code.add(o`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${C||s?o`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${s?o`backgroundColor`:o`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:o`return color;`}
    }`),v?r.code.add(o`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):r.code.add(o`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)}var L=class extends h{constructor(a){super(a,"float")}},y=class extends h{constructor(a){super(a,"vec3")}},O=class extends h{constructor(a){super(a,"vec4")}},S=class extends h{constructor(a){super(a,"sampler2D")}};var A=class extends T{};function he(e){let a=new ie,{vertex:i,fragment:r,varyings:l}=a,{output:v,pbrMode:s,overlayMode:C,tileBorders:F,spherical:W,transparencyMode:z,screenSizePerspective:b}=e;a.include(q),a.include(H,e),a.include(oe,e);let U=()=>{a.include(fe,e),i.code.add(o`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};ee(i,e),a.include(X,e);let V=z===u.InvisibleWithDraped||z===u.Invisible,c=C!==D.Disabled,p=c&&V;switch(v){case n.ColorEmission:case n.Color:{a.include(Ce,e),a.include($,e),c&&(e.pbrMode=s===m.Simplified?m.TerrainWithWater:m.Water,a.include(g,e),e.pbrMode=s);let f=C===D.EnabledWithWater;f&&a.include(ue,e),l.add("vnormal","vec3"),l.add("vpos","vec3"),l.add("vup","vec3"),U(),b&&N(i);let P=e.receiveShadows&&!e.renderOccluded;P&&a.include(K,e),b&&(l.add("screenSizeDistanceToCamera","float"),l.add("screenSizeCosAngle","float")),i.main.add(o`
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);
          vnormal = getNormal();
          vup = getLocalUp(position, localOrigin);
          ${t(f,o`forwardVertexTangent(vnormal);`)}

          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${t(c,"setOverlayVTC(uv);")}
          ${t(F,"forwardTextureCoordinates();")}
          ${t(b,o`vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
                 screenSizeDistanceToCamera = length(viewPos);
                 vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
                 screenSizeCosAngle = abs(viewSpaceNormal.z);`)}
          ${t(P,"forwardLinearDepth();")}`),a.include(Q,e),a.include($,e),a.include(ne,e),a.include(ve,e),Z(r,e),ce(r),de(r),r.uniforms.add(i.uniforms.get("localOrigin"),new E("viewDirection",(M,d)=>k(xe,_(xe,d.camera.viewMatrix[12],d.camera.viewMatrix[13],d.camera.viewMatrix[14])))),f&&r.uniforms.add(new re("ovWaterTex",(M,d)=>d.overlay?.getTexture(pe.WaterNormal)),new Y("view",(M,d)=>j(we,d.camera.viewMatrix,M.origin)));let B=.2;r.code.add(o`float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),le(r),se(r),r.main.add(o`
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${P?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":W?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${t(c,o`vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
                   vec4 overlayColor = overlayOpacity * overlayColorOpaque;
                   ${t(V,`if (overlayColor.a < ${o.float(x)}) { discard; }`)}
                   vec4 groundColor = tileColor;
                   tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`)}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a < ${o.float(x)}) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= ${o.float(B)};
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${s===m.Simplified||s===m.TerrainWithWater?o`fragColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:o`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${t(f,o`vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
                   float waterNormalLength = length(overlayWaterMask);
                   if (waterNormalLength > 0.95) {
                     mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                     vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                     vec4 viewPosition = view*vec4(vpos, 1.0);
                     vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                     vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                     float opacity = sliced ? ${o.float(B)} : 1.0;
                     // un-gamma the ground color to mix in linear space
                     fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
                   }`)}
          ${t(b,o`float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0));
                   if (perspectiveScale <= 0.25) {
                     fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
                   } else if (perspectiveScale <= 0.5) {
                     fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
                   } else if (perspectiveScale >= 0.99) {
                     fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
                   } else {
                     fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
                   }`)}
          ${t(e.visualizeNormals,W?o`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);`:o`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);`)}
          ${t(F,o`vec2 dVuv = fwidth(vuv0);
                 vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
                 float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
                 fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`)}
          fragColor = highlightSlice(fragColor, vpos);`)}break;case n.Depth:p&&a.include(g,e),i.main.add(o`
        ${t(p,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);`),r.main.add(`${t(p,`if (getCombinedOverlayColor().a < ${o.float(x)}) discard;`)}`);break;case n.Shadow:case n.ShadowHighlight:case n.ShadowExcludeHighlight:case n.ViewshedShadow:a.include(ae,e),R(a),J(a),i.main.add(o`gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);`),r.main.add(o`outputDepth(linearDepth);`);break;case n.Normal:p&&a.include(g,e),l.add("vnormal","vec3"),N(i),U(),i.main.add(o`
        ${t(p,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);
        vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);`),r.main.add(o`
        ${t(p,`if (getCombinedOverlayColor().a < ${o.float(x)}) discard;`)}
        vec3 normal = normalize(vnormal);
        if (gl_FrontFacing == false) {
          normal = -normal;
        }
        fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case n.Highlight:c&&a.include(g,e),i.main.add(o`
        ${t(c,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);`),a.include(te,e),r.main.add(o`
        ${t(c,o`
           vec2 overlayHighlightTexel = getAllOverlayHighlightValuesEncoded();
           outputAllHighlights(overlayHighlightTexel);`,"calculateOcclusionAndOutputHighlight();")}
      `)}if(v===n.ObjectAndLayerIdColor)if(c)e.pbrMode=m.Disabled,a.include(g,e),e.pbrMode=s,i.main.add(o`gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());`),r.main.add(o`fragColor = getOverlayColorTexel(vtcOverlay);`);else{let f=z===u.Opaque;i.main.add(o`${t(f,"gl_Position = transformPosition(proj, view, position);")}`),r.main.add(o`fragColor = vec4(0.0);`)}return a}var we=G(),xe=I(),so=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:A,build:he},Symbol.toStringTag,{value:"Module"}));export{u as a,w as b,A as c,he as d,so as e};
