import{a as g}from"./chunk-UGVZ3EW2.js";import{a as E}from"./chunk-XBFBZZXW.js";import{a as R,c as _,d as H,e as G,f as k}from"./chunk-C3EWQ5V5.js";import{c as u}from"./chunk-4MZSW4Z6.js";import{f,g as T}from"./chunk-XZ52TEBV.js";import{b as $}from"./chunk-WAPQB6I3.js";import{a as d}from"./chunk-XC4LDHG5.js";import{b as V,d as A}from"./chunk-S3ASAZCA.js";import{a as S}from"./chunk-ZUUCQTSR.js";import{b as q}from"./chunk-GKUBZAEG.js";import{a as U,h as j,i as p}from"./chunk-PQPFAB53.js";import{a as m}from"./chunk-QPPQKNYU.js";import{a as L}from"./chunk-7DCEI345.js";import{a as W}from"./chunk-ZG3FCPXY.js";import{a as X}from"./chunk-RIUAG34V.js";import{a as I}from"./chunk-WW7S4V24.js";import{c}from"./chunk-B72PB7U4.js";import{a as N,b as D,c as F}from"./chunk-644SLL4Y.js";import{a as C}from"./chunk-RNN6GAXL.js";import{a as M}from"./chunk-CQUOQXLP.js";import{a as l,h as x}from"./chunk-NPIYHDQ7.js";import{a as s}from"./chunk-VI4TDFI5.js";import{a as z}from"./chunk-2HN33SWB.js";import{b as i,c as w}from"./chunk-BXR2KKYP.js";import{a as v}from"./chunk-7W6RATG7.js";import{c as b}from"./chunk-HWN5REN7.js";var h=8;function K(o,a){let t=v.FEATUREVALUE;o.attributes.add(t,"vec4");let e=o.vertex;e.code.add(i`
  bool isCapVertex() {
    return ${t}.w == 1.0;
  }
  `),e.uniforms.add(new C("size",r=>r.size)),a.vvSize?(e.uniforms.add(new s("vvSizeMinSize",r=>r.vvSize.minSize),new s("vvSizeMaxSize",r=>r.vvSize.maxSize),new s("vvSizeOffset",r=>r.vvSize.offset),new s("vvSizeFactor",r=>r.vvSize.factor)),e.code.add(i`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${t}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):e.code.add(i`vec2 getSize(){
return size;
}`),a.vvOpacity?(e.constants.add("vvOpacityNumber","int",h),e.uniforms.add(new m("vvOpacityValues",r=>r.vvOpacity.values,h),new m("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,h)),e.code.add(i`
    vec4 applyOpacity(vec4 color) {
      float value = ${t}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):e.code.add(i`vec4 applyOpacity(vec4 color){
return color;
}`),a.vvColor?(e.constants.add("vvColorNumber","int",p),e.uniforms.add(new m("vvColorValues",r=>r.vvColor.values,p),new U("vvColorColors",r=>r.vvColor.colors,p)),e.code.add(i`
    vec4 getColor() {
      float value = ${t}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):e.code.add(i`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),o.include(S),o.attributes.add(v.PROFILERIGHT,"vec4"),o.attributes.add(v.PROFILEUP,"vec4"),o.attributes.add(v.PROFILEVERTEXANDNORMAL,"vec4"),e.code.add(i`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),e.code.add(i`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),e.code.add(i`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),e.code.add(i`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}var J=class extends j{constructor(){super(...arguments),this.size=b(1,1)}};function Y(o){let a=new M,{vertex:t,fragment:e}=a;D(t,o),a.varyings.add("vpos","vec3"),a.include(K,o);let{output:r,spherical:y,pbrMode:O,receiveShadows:Q}=o,P=x(r);switch((P||r===l.ObjectAndLayerIdColor)&&(a.include(d,o),a.include(u,o),a.include(A,o),a.include(L,o),a.varyings.add("vnormal","vec3"),a.varyings.add("vcolor","vec4"),o.terrainDepthTest&&a.varyings.add("depth","float"),t.main.add(i`
      vpos = calculateVPos();
      vnormal = normalize(localNormal());

      ${o.terrainDepthTest?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);

      ${P?"forwardLinearDepth();":""}
      forwardObjectAndLayerIdColor();

      vcolor = getColor();`)),a.include(W,o),r){case l.ColorEmission:case l.Color:a.include(T,o),a.include(k,o),a.include(_,o),a.include(u,o),a.include(E,o),a.include(c,o),a.include(q,o),N(e,o),H(e),G(e),e.uniforms.add(t.uniforms.get("localOrigin"),new s("ambient",n=>n.ambient),new s("diffuse",n=>n.diffuse),new s("specular",n=>n.specular),new z("opacity",n=>n.opacity)),e.include(X),$(e),e.main.add(i`
        discardBySlice(vpos);
        ${o.terrainDepthTest?i`terrainDepthTest(depth);`:""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${y?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = ${Q?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth));":y?"lightingGlobalFactor * (1.0 - additionalAmbientScale);":"0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        ${w(O===f.Schematic,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
           vec4 emission = getEmissions();`)}

        vec3 shadedColor = ${O===f.Schematic?"evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);":"evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);"}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOID(finalColor, vpos);`);break;case l.Depth:a.include(d,o),t.main.add(i`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),a.include(c,o),e.main.add(i`discardBySlice(vpos);`);break;case l.Shadow:case l.ShadowHighlight:case l.ShadowExcludeHighlight:case l.ViewshedShadow:a.include(d,o),V(a),a.varyings.add("depth","float"),t.main.add(i`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),a.include(c,o),a.include(R,o),e.main.add(i`discardBySlice(vpos);
outputDepth(depth);`);break;case l.ObjectAndLayerIdColor:a.include(c,o),e.main.add(i`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case l.Normal:a.include(d,o),a.include(g,o),F(t),a.varyings.add("vnormal","vec3"),t.main.add(i`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),a.include(c,o),e.main.add(i`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case l.Highlight:a.include(d,o),a.include(g,o),a.varyings.add("vnormal","vec3"),t.main.add(i`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),a.include(c,o),a.include(I,o),e.main.add(i`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return a}var Lo=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));export{J as a,Y as b,Lo as c};
