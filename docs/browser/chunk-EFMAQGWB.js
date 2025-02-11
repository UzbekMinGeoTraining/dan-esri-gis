import{d as f}from"./chunk-757AZ3K3.js";import{a as s}from"./chunk-QOAGYFD2.js";import{a as u}from"./chunk-KGCWA4JJ.js";import{a as h}from"./chunk-JHBR5RZV.js";import{a as l}from"./chunk-6J446DPN.js";import{a as d}from"./chunk-WAPQB6I3.js";import{a as n}from"./chunk-6I6DPRXI.js";import{a as m}from"./chunk-4IVMQ5PX.js";import{a as c}from"./chunk-CQUOQXLP.js";import{a as p}from"./chunk-2HN33SWB.js";import{b as a,c as o}from"./chunk-BXR2KKYP.js";function v(x){let t=new c;t.include(s);let{reduced:r}=x,{fragment:e}=t;return e.uniforms.add(new m("depthTexture",(i,S)=>S.mainDepth),new p("hazeStrength",i=>i.hazeStrength)),d(e),t.include(l),e.include(n),e.include(u),e.include(h),e.include(f,!0),r&&e.code.add(a`float getDepth(vec2 uv){
return linearDepthFromTexture(depthTexture, uv);
}
float textureBilinear(vec2 uv) {
vec2 depthTextureSize = vec2(textureSize(depthTexture, 0));
vec2 texelSize = 1.0 / depthTextureSize;
vec2 depthUV = (uv * depthTextureSize) - vec2(0.5);
vec2 f = fract(depthUV);
vec2 snapUV = (floor(depthUV) + vec2(0.5)) / depthTextureSize;
float d0 = getDepth(snapUV);
float d1 = getDepth(snapUV + vec2(texelSize.x, 0.0));
float d2 = getDepth(snapUV + vec2(0.0, texelSize.y));
float d3 = getDepth(snapUV + texelSize);
return mix(mix(d0, d1, f.x), mix(d2, d3, f.x), f.y);
}`),e.main.add(a`
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture(depthTexture, uv).r;
      if (depthSample != 1.0) {
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;

        cameraSpaceRay *= ${o(r,"-textureBilinear(uv)","-linearDepthFromTexture(depthTexture, uv)")};
        terrainDepth = max(0.0, length(cameraSpaceRay));
      } else {
        discard;
      }

      // Alpha is ignored for haze blending
      vec3 col = vec3(0);
      float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
      if(depthSample != 1.0){
        col = (1.0 - fadeOut) * hazeStrength * raymarchAtmosphere(cameraPosition, rayDir, mainLightDirection, terrainDepth);
      }
      float alpha = 1.0;

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
  `),t}var A=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));export{v as a,A as b};
