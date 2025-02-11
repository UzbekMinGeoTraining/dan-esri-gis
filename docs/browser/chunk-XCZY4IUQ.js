import{a as l}from"./chunk-F4QTXEUP.js";import{a}from"./chunk-OXOFK4XQ.js";import{a as t}from"./chunk-EHDNZUTT.js";import{a as r}from"./chunk-4IVMQ5PX.js";import{a as o}from"./chunk-CQUOQXLP.js";import{b as g}from"./chunk-BXR2KKYP.js";function s(){let e=new o;e.include(a),e.include(l);let{fragment:h}=e;return e.outputs.add("fragSingleHighlight","vec2",0),h.uniforms.add(new r("highlightTexture",i=>i.highlightTexture),new t("maxHighlightLevel",i=>i.maxHighlightLevel),new t("highlightLevel",i=>i.highlightLevel)),e.include(l),h.main.add(g`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}var p=Object.freeze(Object.defineProperty({__proto__:null,build:s},Symbol.toStringTag,{value:"Module"}));export{s as a,p as b};
