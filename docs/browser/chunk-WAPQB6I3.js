import{a}from"./chunk-VI4TDFI5.js";import{b as t}from"./chunk-BXR2KKYP.js";function d(i){i.uniforms.add(new a("mainLightDirection",(o,n)=>n.lighting.mainLight.direction))}function r(i){i.uniforms.add(new a("mainLightIntensity",(o,n)=>n.lighting.mainLight.intensity))}function e(i){d(i.fragment),r(i.fragment),i.fragment.code.add(t`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}export{d as a,r as b,e as c};
