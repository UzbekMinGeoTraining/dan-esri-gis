import{a as d}from"./chunk-W3OGU5I2.js";import{a as i}from"./chunk-6I6DPRXI.js";import{a as r}from"./chunk-4IVMQ5PX.js";import{a as n}from"./chunk-VI4TDFI5.js";import{a}from"./chunk-2HN33SWB.js";import{b as l}from"./chunk-BXR2KKYP.js";function w(p,s){let e=p.fragment;e.include(i),p.include(d),e.uniforms.add(new a("globalAlpha",o=>o.globalAlpha),new n("glowColor",o=>o.glowColor),new a("glowWidth",(o,t)=>o.glowWidth*t.camera.pixelRatio),new a("glowFalloff",o=>o.glowFalloff),new n("innerColor",o=>o.innerColor),new a("innerWidth",(o,t)=>o.innerWidth*t.camera.pixelRatio),new r("depthMap",(o,t)=>t.depth?.attachment),new r("normalMap",o=>o.normals)),e.code.add(l`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),e.code.add(l`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),e.code.add(l`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),e.code.add(l`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),s.contrastControlEnabled?(e.uniforms.add(new r("frameColor",(o,t)=>o.colors),new a("globalAlphaContrastBoost",o=>o.globalAlphaContrastBoost!=null?o.globalAlphaContrastBoost:1)),e.code.add(l`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):e.code.add(l`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}export{w as a};
