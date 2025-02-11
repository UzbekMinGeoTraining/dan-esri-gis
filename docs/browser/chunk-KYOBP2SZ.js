import{a as w}from"./chunk-NTN3HUFI.js";import{b as f}from"./chunk-4MZSW4Z6.js";import{a as u}from"./chunk-W3OGU5I2.js";import{a as c}from"./chunk-KQHYII76.js";import{a as m}from"./chunk-6I6DPRXI.js";import{a as o}from"./chunk-4IVMQ5PX.js";import{a as h}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-H6LJ2DCJ.js";import{a as l}from"./chunk-AOTWUAUY.js";import{b as d}from"./chunk-BXR2KKYP.js";import{a as p}from"./chunk-XXOIKNT6.js";import{f as i,h as s}from"./chunk-5MNDZ6BX.js";var x=255,S=1/x;function M(){let e=new h,t=e.fragment;return t.include(n),t.include(m),e.include(u),e.include(c),e.include(f,P),t.uniforms.add(new o("shadowMap",(r,a)=>a.shadowMap.depthTexture),new o("depthMap",(r,a)=>a.depth?.attachment),new l("inverseViewMatrix",(r,a)=>i(v,s(v,a.camera.viewMatrix,a.camera.center)))),t.constants.add("sampleValue","float",S),e.outputs.add("sampleCount","float"),t.main.add(d`sampleCount = 0.0;
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
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return;
}
ivec2 texSize = textureSize(shadowMap, 0);
ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));
float depthShadow = readShadowMapDepth(uvShadow, shadowMap);
bool shadow = depthShadow < lvpos.z;
if (shadow) {
sampleCount = sampleValue;
}`),e}var v=p(),P=new w,O=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastMaxSamples:x,build:M},Symbol.toStringTag,{value:"Module"}));export{x as a,M as b,O as c};
