import{a as n}from"./chunk-KQHYII76.js";import{a as r}from"./chunk-4IVMQ5PX.js";import{a as m}from"./chunk-CQUOQXLP.js";import{a,b as s}from"./chunk-BXR2KKYP.js";var t=class extends a{};function u(){let e=new m;return e.include(n),e.fragment.uniforms.add(new r("colorTexture",o=>o.color),new r("depthTexture",(o,l)=>l.mainDepth)),e.fragment.main.add(s`float depthSample = texture(depthTexture, uv).r;
if (depthSample != 1.0 ) {
fragColor = vec4(0);
return;
}
fragColor = texture(colorTexture, uv);`),e}var c=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:t,build:u},Symbol.toStringTag,{value:"Module"}));export{t as a,u as b,c};
