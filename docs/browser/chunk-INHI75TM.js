import{a as c}from"./chunk-EHDNZUTT.js";import{a as l}from"./chunk-KQHYII76.js";import{a as e}from"./chunk-4IVMQ5PX.js";import{a as f}from"./chunk-CQUOQXLP.js";import{a as t,b as s}from"./chunk-BXR2KKYP.js";var a=class extends t{};function u(){let o=new f;return o.include(l),o.outputs.add("fragColor","vec4",0),o.fragment.uniforms.add(new e("colorTexture",r=>r.color),new e("focusArea",r=>r.focusArea),new c("focusAreaEffectMode",r=>r.effect??1)).main.add(s`float mask = texture( focusArea, uv, 0.0 ).r;
vec4 color = texture( colorTexture, uv, 0.0 );
vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
if (focusAreaEffectMode == 1) {
fragColor = mask > 0.0 ? color : 0.55 * colorDeSaturate + 0.45;
} else {
fragColor = mask > 0.0 ? color : 0.33 * mix(color, colorDeSaturate, 0.);
}`),o}var g=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:a,build:u},Symbol.toStringTag,{value:"Module"}));export{a,u as b,g as c};
