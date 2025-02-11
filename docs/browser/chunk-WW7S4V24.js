import{a as u}from"./chunk-UGAMS6PU.js";import{a as o}from"./chunk-EHDNZUTT.js";import{a as g}from"./chunk-4IVMQ5PX.js";import{a as c}from"./chunk-NPIYHDQ7.js";import{b as e}from"./chunk-BXR2KKYP.js";function v(l,d){let{fragment:t}=l;d.output===c.Highlight?(t.uniforms.add(new g("depthTexture",(h,i)=>i.mainDepth),new g("highlightTexture",(h,i)=>i.highlightMixTexture),new o("highlightLevel",(h,i)=>i.highlightLevel),new u("highlightMixOrigin",(h,i)=>i.highlightMixOrigin)),l.outputs.add("fragHighlight","vec2",0),t.code.add(e`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),d.canHaveOverlay&&(t.constants.add("occlusionAndMask","int",85),t.code.add(e`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):t.code.add(e`void calculateOcclusionAndOutputHighlight() {}`)}export{v as a};
