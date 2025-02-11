import{a as l}from"./chunk-KQHYII76.js";import{a}from"./chunk-4IVMQ5PX.js";import{a as n}from"./chunk-CQUOQXLP.js";import{a as t,b as c}from"./chunk-BXR2KKYP.js";var o=class extends t{};function s(){let r=new n;return r.include(l),r.fragment.uniforms.add(new a("colorTexture",e=>e.colorTexture),new a("alphaTexture",e=>e.alphaTexture),new a("frontFaceTexture",e=>e.frontFaceTexture)).main.add(c`float srcAlpha = texture(alphaTexture, uv).r;
if(srcAlpha == 0.0){
fragColor = vec4(0.0);
return;
}
vec4 srcColor = texture(colorTexture, uv);
vec4 frontFace = texture(frontFaceTexture, uv);
fragColor = vec4(mix(srcColor.rgb / srcAlpha, frontFace.rgb, frontFace.a), 1.0 - srcColor.a);`),r}var i=Object.freeze(Object.defineProperty({__proto__:null,OITBlendPassParameters:o,build:s},Symbol.toStringTag,{value:"Module"}));export{o as a,s as b,i as c};
