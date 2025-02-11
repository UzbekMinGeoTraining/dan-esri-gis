import{a as o}from"./chunk-OXOFK4XQ.js";import{a as s}from"./chunk-Z3USGHSR.js";import{a}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-GXSLPADW.js";import{a as i,b as l}from"./chunk-BXR2KKYP.js";import{a as u}from"./chunk-HWN5REN7.js";var t=class extends i{constructor(){super(...arguments),this.blurSize=u()}};function g(){let e=new a;return e.include(o),e.fragment.uniforms.add(new s("blurSize",r=>r.blurSize),new n("blurInput",r=>r.blurInput)),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.main.add(l`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}var h=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:t,build:g},Symbol.toStringTag,{value:"Module"}));export{t as a,g as b,h as c};
