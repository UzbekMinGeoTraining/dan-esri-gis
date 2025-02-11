import{a as n}from"./chunk-644SLL4Y.js";import{a as f}from"./chunk-OO4IIGVK.js";import{a as t}from"./chunk-VI4TDFI5.js";import{b as r}from"./chunk-BXR2KKYP.js";import{c as l}from"./chunk-2HUIJUS4.js";import{a as i}from"./chunk-YRTBL7EE.js";import{c as o}from"./chunk-3FPO2LOS.js";import{a as s}from"./chunk-PYQRTZNZ.js";function d(e){e.vertex.code.add(r`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(r`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(r`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(r`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(r`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(r`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function V(e){e.uniforms.add(new t("screenSizePerspective",a=>m(a.screenSizePerspective)))}function v(e){e.uniforms.add(new t("screenSizePerspectiveAlignment",a=>m(a.screenSizePerspectiveAlignment||a.screenSizePerspective)))}function m(e){return l(w,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}var w=s();function L(e,a){let c=e.vertex;a.hasVerticalOffset?(O(c),a.hasScreenSizePerspective&&(e.include(d),v(c),n(e.vertex,a)),c.code.add(r`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${a.spherical?r`vec3 worldNormal = normalize(worldPos + localOrigin);`:r`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${a.hasScreenSizePerspective?r`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(r`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var u=i();function O(e){e.uniforms.add(new f("verticalOffset",(a,c)=>{let{minWorldLength:p,maxWorldLength:S,screenLength:z}=a.verticalOffset,P=Math.tan(.5*c.camera.fovY)/(.5*c.camera.fullViewport[3]),g=c.camera.pixelRatio||1;return o(u,z*g,P,p,S)}))}export{d as a,V as b,v as c,L as d,O as e};
