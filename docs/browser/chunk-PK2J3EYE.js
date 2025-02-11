import{d as u}from"./chunk-757AZ3K3.js";import{a as f}from"./chunk-QOAGYFD2.js";import{a as d}from"./chunk-KGCWA4JJ.js";import{a as p}from"./chunk-JHBR5RZV.js";import{a as m}from"./chunk-6J446DPN.js";import{a as c}from"./chunk-WAPQB6I3.js";import{a as l}from"./chunk-4IVMQ5PX.js";import{a as s}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-VI4TDFI5.js";import{a as o}from"./chunk-2HN33SWB.js";import{b as t,c as i}from"./chunk-BXR2KKYP.js";function y(h){let r=new s;r.include(f);let{reduced:g}=h,{fragment:e}=r;return e.uniforms.add(new n("backgroundColor",a=>a.backgroundColor),new o("innerFadeDistance",a=>a.innerFadeDistance),new o("altitudeFade",a=>a.altitudeFade),new l("depthTexture",(a,D)=>D.mainDepth)),c(e),r.include(m),e.include(d),e.include(p),e.include(u,!1),e.code.add(t`vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
float rayPlanetDistance = heightParameters[1] - radii[0] * radii[0];
vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, rayPlanetDistance);
if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
return fragColor;
}
float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
if (relDist > 1.0) {
return surfaceColor;
}
return mix(fragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
}
float getGlow(float dist, float radius, float intensity) {
return pow(radius / max(dist, 1e-6), intensity);
}
vec3 getSun(vec3 cameraPos, vec3 rayDir, vec3 lightDir){
float scaleFract = (length(cameraPos) - radii[0]) / scaleHeight;
float sunOpticalDepth = getOpticalDepth(cameraPos, rayDir, max(scaleFract, 0.0));
vec3 sunTransmittance = exp(-(mix(betaCombined, betaRayleigh, 0.5)) * max(0.0, sunOpticalDepth));
float mu = clamp(dot(rayDir, lightDir), 0.0, 1.0);
float sunDisc = 256.0 * smoothstep(0.0, 128.0, clamp(getGlow(1.0 - mu, 3e-5, 3.0), 0.0, 128.0));
return normalize(sunTransmittance) * sunDisc;
}`),e.main.add(t`
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${i(!g,t`float depthSample = texture(depthTexture, uv).r;
             if (depthSample != 1.0) {
                fragColor = vec4(0);
                return;
             }`)}

      vec3 col = linearizeGamma(backgroundColor);
      col += raymarchAtmosphere(cameraPosition, rayDir, mainLightDirection, terrainDepth);
      col += getSun(cameraPosition, rayDir, mainLightDirection);
      float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
      fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);
  `),r}var z=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{y as a,z as b};
