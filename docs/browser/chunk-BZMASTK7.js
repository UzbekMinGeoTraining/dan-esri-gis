import{a as y}from"./chunk-WG3SYF7L.js";import{a as V,b as m}from"./chunk-YOBNM4T6.js";import{a as O}from"./chunk-L3GHXHDP.js";import{a as F}from"./chunk-BIZV3H6H.js";import{a as P}from"./chunk-QPPQKNYU.js";import{a as x}from"./chunk-EHDNZUTT.js";import{a as b}from"./chunk-NH7OOX2I.js";import{a as U}from"./chunk-W3OGU5I2.js";import{a as M}from"./chunk-KQHYII76.js";import{a as T}from"./chunk-6I6DPRXI.js";import{a as l}from"./chunk-RNN6GAXL.js";import{a as d}from"./chunk-4IVMQ5PX.js";import{a as D}from"./chunk-CQUOQXLP.js";import{a}from"./chunk-AOTWUAUY.js";import{a as c}from"./chunk-VI4TDFI5.js";import{a as g}from"./chunk-2HN33SWB.js";import{a as u,b as r}from"./chunk-BXR2KKYP.js";import{a as n,d as v}from"./chunk-XXOIKNT6.js";import{e as s,h as w}from"./chunk-5MNDZ6BX.js";import{f as p}from"./chunk-PYQRTZNZ.js";var h=class extends u{constructor(){super(...arguments),this.localOrigin=p()}};function z(o){o.include(U),o.fragment.uniforms.add(new a("inverseViewMatrix",(t,e)=>{let i=w(n(),e.camera.viewMatrix,t.localOrigin);return s(i,i)})).code.add(r`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}var f=class extends h{constructor(){super(...arguments),this.shadowMap={depthTexture:null,nearFar:[1,100],numActiveFaces:1,atlasRegions:[[0,0,1,1]]},this.targetVector=[1,0,0],this.upVector=[0,0,1],this.fovs=[45,45],this.headingAndTilt=[0,0],this.observerOffset=[0,0,0],this.projectionMatrices=v.flat(),this.viewMatrices=v.flat(),this.volumeOffset=0}};function S(){let o=new D,t=o.fragment;return o.include(M),o.include(z),o.include(F),o.include(y),t.include(T),t.include(V),o.include(O),t.uniforms.add(new d("depthTexture",(e,i)=>i.depth?.attachment),new a("inverseProjectionMatrix",(e,i)=>i.camera.inverseProjectionMatrix),new a("inverseViewNormalMatrix",(e,i)=>s(N,i.camera.viewInverseTransposeMatrix)),new c("viewshedObserverOffset",e=>e.observerOffset),new c("viewshedTargetVector",e=>e.targetVector),new c("viewshedUpVector",e=>e.upVector),new l("viewshedFOVs",e=>e.fovs),new l("viewshedHeadingAndTilt",e=>e.headingAndTilt),new l("viewshedNearFar",e=>e.shadowMap.nearFar??[1,100]),new g("viewshedVolumeOffset",e=>e.volumeOffset),new d("viewshedShadowMap",e=>e.shadowMap.depthTexture),new m("viewshedProjectionMatrices",e=>e.projectionMatrices,6),new m("viewshedViewMatrices",e=>e.viewMatrices,6),new x("viewshedNumFaces",e=>e.shadowMap.numActiveFaces),new P("viewshedAtlasRegions",e=>e.shadowMap.atlasRegions.flat(),24),new d("normalMap",(e,i)=>e.normals),new b("useNormalMap",(e,i)=>e.normals!=null)),t.constants.add("visibleColor","vec4",[0,1,0,.5]),t.constants.add("occludedColor","vec4",[1,0,0,.5]),t.code.add(r`vec3 normalFromTexture() {
vec4 norm4 = texture(normalMap, uv);
vec3 nNormal = vec3(-1.0) + 2.0 * norm4.xyz;
return normalize((inverseViewNormalMatrix * vec4(nNormal, 1.0)).xyz);
}`).code.add(r`vec2 getViewshedUv(vec4 worldPosition, int face) {
mat4 viewshedMatrix = viewshedProjectionMatrices[face];
vec4 viewshedUv4 = viewshedMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
return viewshedUv.xy;
}
float viewshedDepthToFloat(float depth) {
return (depth - viewshedNearFar[0]) / (viewshedNearFar[1] - viewshedNearFar[0]);
}
float getOrthographicDepthToViewshed(vec4 worldPosition, int face) {
mat4 viewshedViewMatrix = viewshedViewMatrices[face];
vec4 viewshedUv4 = viewshedViewMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
float depth = -viewshedUv.z;
return viewshedDepthToFloat(depth);
}
float getDepthFromShadowMap(vec2 uv, int face) {
int index = 4 * face;
float umin = viewshedAtlasRegions[index];
float umax = viewshedAtlasRegions[index + 1];
float vmin = viewshedAtlasRegions[index + 2];
float vmax = viewshedAtlasRegions[index + 3];
vec4 atlasRegion = vec4(umin, vmin, umax, vmax);
return rgba4ToFloat(textureAtlasLookup(viewshedShadowMap, uv, atlasRegion));
}
struct ViewshedPoint {
int face;
vec2 uv;
bool isWithin;
float orthographicDepth;
};
mat3 rotationMatrix(vec3 axis, float angle)
{
float s = sin(angle);
float c = cos(angle);
float oc = 1.0 - c;
return mat3(
oc * axis.xxz * axis.xyx + vec3(c, axis.zy) * vec3(1., -s, s),
oc * axis.xyy * axis.yyz + vec3(axis.z, c, axis.x) * vec3(s, 1., -s),
oc * axis.zyz * axis.xzz + vec3(axis.yx, c) * vec3(-s, s, 1.)
);
}
float distanceToPlane(vec3 position, vec3 normal) {
return dot(position, normal);
}
bool outsideViewshed(float distance) {
return distance > -viewshedVolumeOffset;
}
bool isWithinViewshed(vec3 position) {
float positionLength = length(position - viewshedObserverOffset);
float farSphereDistance = positionLength - viewshedNearFar[1];
if (outsideViewshed(farSphereDistance)) { return false; }
float nearSphereDistance = viewshedNearFar[0] - positionLength;
if (outsideViewshed(nearSphereDistance)) { return false; }
vec3 westVector = normalize(cross(viewshedUpVector, viewshedTargetVector));
bool leftOfTarget = distanceToPlane(position, westVector) > 0.0;
if (viewshedFOVs[0] < TWO_PI) {
float horAngle = viewshedFOVs[0] / 2.0;
horAngle = leftOfTarget ? horAngle : -horAngle;
vec3 sideVector = viewshedTargetVector * rotationMatrix(viewshedUpVector, horAngle);
bool inFront = distanceToPlane(position, sideVector) > 0.0;
if (inFront) {
vec3 sideNormal = cross(viewshedUpVector, sideVector) * (leftOfTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
} else if (viewshedFOVs[0] < PI) { return false; }
}
if (viewshedFOVs[1] < PI) {
float t = dot(viewshedUpVector, position);
vec3 nProjVector = normalize(position - t * viewshedUpVector);
float heading = acos(clamp(dot(normalize(viewshedTargetVector), nProjVector), -1.0, 1.0));
heading = leftOfTarget ? heading : -heading;
bool aboveTarget = distanceToPlane(position, viewshedUpVector) > 0.0;
float verFOV = viewshedFOVs[1] / 2.0;
verFOV = aboveTarget ? -verFOV : verFOV;
mat3 rotateByHeading = rotationMatrix(viewshedUpVector, heading);
vec3 sideVector = viewshedTargetVector * rotationMatrix(westVector, verFOV) * rotateByHeading;
vec3 leftVector = westVector * rotateByHeading;
vec3 sideNormal = cross(sideVector, leftVector) * (aboveTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
}
return true;
}
bool getViewshedPoint(vec4 localPosition, out ViewshedPoint point) {
for(int i=0; i < viewshedNumFaces; i++) {
vec2 viewshedUv = getViewshedUv(localPosition, i);
if (viewshedUv.x > 0. && viewshedUv.x < 1. && viewshedUv.y > 0. && viewshedUv.y < 1.) {
float orthoDepth = getOrthographicDepthToViewshed(localPosition, i);
if (orthoDepth >= 0.) {
bool isWithin = isWithinViewshed(localPosition.xyz);
point = ViewshedPoint(i, viewshedUv, isWithin, orthoDepth);
return true;
}
}
}
return false;
}
float normalCosAngle(float linearDepth, vec3 localPosition) {
vec3 viewingDir = normalize(localPosition);
if(useNormalMap) {
vec3 normal = normalFromTexture();
return dot(normal, viewingDir);
}
vec3 cameraSpacePosition = reconstructPosition(gl_FragCoord.xy, linearDepth);
vec3 normal = normalFromDepth(depthTexture, cameraSpacePosition, gl_FragCoord.xy, uv);
normal = (inverseViewNormalMatrix * vec4(normal, 1.0)).xyz;
return dot(normal, viewingDir);
}`),t.main.add(r`float depth = depthFromTexture(depthTexture, uv);
if (depth >= 1.0 || depth <= 0.0) {
return;
}
float linearDepth = linearizeDepth(depth);
vec4 localPosition = reconstructLocalPosition(gl_FragCoord.xy, linearDepth);
ViewshedPoint point;
bool foundFace = getViewshedPoint(localPosition, point);
if (!foundFace || !point.isWithin) {
return;
}
float viewshedDepth = getDepthFromShadowMap(point.uv, point.face);
float distance = point.orthographicDepth;
bool visible = distance < viewshedDepth;
fragColor = visible ? visibleColor : occludedColor;
float cosAngle = normalCosAngle(linearDepth, localPosition.xyz);
float threshold = useNormalMap ? -0.01 : -0.04;
if (cosAngle > threshold) {
fragColor = occludedColor;
}`),o}var N=n(),se=Object.freeze(Object.defineProperty({__proto__:null,ViewshedPassParameters:f,build:S},Symbol.toStringTag,{value:"Module"}));export{f as a,S as b,se as c};
