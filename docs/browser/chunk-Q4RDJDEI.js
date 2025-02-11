import{a as s}from"./chunk-KQHYII76.js";import{a as n}from"./chunk-4IVMQ5PX.js";import{a}from"./chunk-CQUOQXLP.js";import{a as t}from"./chunk-2HN33SWB.js";import{b as r}from"./chunk-BXR2KKYP.js";function m(o){let i=new a;return i.include(s),i.fragment.uniforms.add(new n("densityMap",e=>e.densityMap),new n("tex",e=>e.colorRamp),new t("densityNormalizer",e=>1/(e.maxDensity-e.minDensity)),new t("minDensity",e=>e.minDensity),new t("densityMultiplier",e=>3/(e.searchRadius*e.searchRadius*Math.PI)*(o.usesHalfFloat?4:1))).main.add(r`float density = texture(densityMap, uv).r * densityMultiplier;
float densityRatio = (density - minDensity) * densityNormalizer;
fragColor = texture(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));`),i}var p=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));export{m as a,p as b};
