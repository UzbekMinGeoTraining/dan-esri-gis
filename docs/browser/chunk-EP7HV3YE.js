import{a as s}from"./chunk-KQHYII76.js";import{a as o}from"./chunk-4IVMQ5PX.js";import{a as n}from"./chunk-CQUOQXLP.js";import{a,b as t}from"./chunk-BXR2KKYP.js";var r=class extends a{};function i(){let e=new n;return e.include(s),e.fragment.uniforms.add(new o("tex",m=>m.texture)),e.fragment.main.add(t`fragColor = vec4(1.0 - texture(tex, uv).a);`),e}var c=Object.freeze(Object.defineProperty({__proto__:null,HUDCompositingPassParameters:r,build:i},Symbol.toStringTag,{value:"Module"}));export{r as a,i as b,c};
