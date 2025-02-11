import{a as d}from"./chunk-RNN6GAXL.js";import{b as t}from"./chunk-BXR2KKYP.js";import{a}from"./chunk-HWN5REN7.js";import{b as o}from"./chunk-XTES2GPX.js";function f(e){e.uniforms.add(new d("zProjectionMap",(r,p)=>c(p.camera))),e.code.add(t`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(t`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(t`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function c(e){let r=e.projectionMatrix;return o(i,r[14],r[10])}var i=a();export{f as a};
