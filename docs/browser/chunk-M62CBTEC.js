import{b as m}from"./chunk-644SLL4Y.js";import{a as v}from"./chunk-CQUOQXLP.js";import{a as f}from"./chunk-2HN33SWB.js";import{b as o}from"./chunk-BXR2KKYP.js";import{a}from"./chunk-7W6RATG7.js";function S(i){let s=new v,{vertex:e,fragment:d,attributes:t,varyings:u}=s;m(e,i);let{isAttributeDriven:r,usesHalfFloat:n}=i;return t.add(a.POSITION,"vec3"),t.add(a.UV0,"vec2"),r&&(t.add(a.FEATUREATTRIBUTE,"float"),u.add("attributeValue","float")),n&&d.constants.add("compressionFactor","float",.25),u.add("unitCirclePos","vec2"),e.uniforms.add(new f("radius",({resolutionForScale:l,searchRadius:R},{camera:c,screenToWorldRatio:p,overlayStretch:P})=>2*R*(l===0?1:l/p)*c.pixelRatio/c.fullViewport[2]/P)),e.main.add(o`
    unitCirclePos = uv0;

    vec4 posProj = proj * (view * vec4(${a.POSITION}, 1.0));
    vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

    ${r?o`attributeValue = ${a.FEATUREATTRIBUTE};`:""}
    gl_Position = posProj + quadOffset;
  `),d.main.add(o`
    float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
    if (radiusRatioSquared > 1.0) {
      fragColor = vec4(0.0);
    }
    else {
      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${r?o` * attributeValue`:""} ${n?o` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `),s}var C=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));export{S as a,C as b};
