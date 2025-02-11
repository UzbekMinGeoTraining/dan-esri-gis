import{a as u}from"./chunk-QOAGYFD2.js";import{a as h}from"./chunk-KGCWA4JJ.js";import{a as g}from"./chunk-JHBR5RZV.js";import{a as d}from"./chunk-6J446DPN.js";import{a as f}from"./chunk-RNN6GAXL.js";import{a as c}from"./chunk-4IVMQ5PX.js";import{a as l}from"./chunk-CQUOQXLP.js";import{a as m}from"./chunk-VI4TDFI5.js";import{a as o}from"./chunk-2HN33SWB.js";import{a as p,b as n}from"./chunk-BXR2KKYP.js";import{a as i}from"./chunk-PYQRTZNZ.js";var s=class extends p{constructor(){super(...arguments),this.color=i(),this.strength=4e-6,this.atmosphereC=1,this.amount=0}};function S(){let a=new l;a.include(u,{needUVs:!0,needEyeDirection:!0});let r=a.fragment;return r.uniforms.add(new o("atmosphereC",e=>e.atmosphereC),new m("cameraPosition",(e,t)=>t.camera.eye),new f("nearFar",(e,t)=>t.camera.nearFar),new c("depthTexture",(e,t)=>t.mainDepth),new o("fogStrength",e=>e.strength),new o("fogAmount",e=>e.amount),new m("fogColor",e=>e.color)),a.include(d),r.include(h),r.include(g),r.code.add(n`float getFogAmount(float dist, vec3 rayDir) {
if(dist == -1.0){
dist = 0.055 * sphereIntersect(cameraPosition, rayDir, atmosphereC).y;
}
return fogAmount * (1.0 - exp(-dist * fogStrength));
}`),r.main.add(n`vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, uv).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
float fogAmount = getFogAmount(terrainDepth, rayDir);
vec4 fog = vec4(fogColor, 1.0) * fogAmount;
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));`),a}var R=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:s,build:S},Symbol.toStringTag,{value:"Module"}));export{s as a,S as b,R as c};
