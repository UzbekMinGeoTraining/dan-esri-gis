import{b}from"./chunk-EDY6B353.js";import{a as p}from"./chunk-DYNH5H2C.js";import{b as I}from"./chunk-Q6D44QVW.js";import{f as y}from"./chunk-XZ52TEBV.js";import{a as M,b as V}from"./chunk-WAPQB6I3.js";import{a as C}from"./chunk-4IVMQ5PX.js";import{a as h}from"./chunk-C2ONI6UP.js";import{a as m}from"./chunk-NPIYHDQ7.js";import{a as T}from"./chunk-2HN33SWB.js";import{a as w}from"./chunk-523X5JOP.js";import{b as c}from"./chunk-BXR2KKYP.js";import{k as n,l as d,n as u}from"./chunk-6WKJD7BM.js";import{a as O}from"./chunk-YRTBL7EE.js";import{a as g}from"./chunk-PYQRTZNZ.js";var v;(function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"})(v||(v={}));var x=class extends I{constructor(){super(...arguments),this.slicePlaneLocalOrigin=g(),this.origin=this.slicePlaneLocalOrigin,this.modelTransformation=null}};var i;(function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"})(i||(i={}));var S=class extends x{constructor(){super(...arguments),this.identifier=i.Material,this.output=m.Color,this.transparent=!1}},P=class extends x{constructor(){super(...arguments),this.identifier=i.ShadowMap}},D=class extends x{constructor(){super(...arguments),this.identifier=i.Highlight}},W=class extends x{constructor(){super(...arguments),this.identifier=i.ViewshedShadowMap}};var N;function oe(e,r){let{vertex:t,fragment:o}=e;t.uniforms.add(new h("overlayTexOffset",(a,l)=>R(a,l)),new h("overlayTexScale",(a,l)=>U(a,l))),o.constants.add("overlayOpacity","float",1),o.uniforms.add(new C("ovColorTex",(a,l)=>L(a,l))),E(e,r)}function ae(e,r){let{vertex:t,fragment:o}=e;t.uniforms.add(new f("overlayTexOffset"),new f("overlayTexScale")),o.uniforms.add(new T("overlayOpacity",a=>a.overlayOpacity),new C("ovColorTex",(a,l)=>l.overlay?.getTexture(a.overlayContent))),E(e,r)}function E(e,r){let t=r.pbrMode===y.Water||r.pbrMode===y.WaterOnIntegratedMesh||r.pbrMode===y.TerrainWithWater;t&&e.include(b,r);let{vertex:o,fragment:a}=e;e.varyings.add("vtcOverlay","vec4"),o.code.add(c`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),a.code.add(c`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),a.code.add(c`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),a.code.add(c`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),a.code.add(c`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = vec2(uvInner.x * 0.5,       uvInner.y);
vec2 texelCoordOuter = vec2(uvOuter.x * 0.5 + 0.5, uvOuter.y);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`),t&&(M(a),V(a),a.code.add(c`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function L(e,r){return e.identifier===i.Material&&e.output===m.Color?r.overlay?.getTexture(v.ColorNoRasterImage):e.identifier===i.Material&&e.output===m.ObjectAndLayerIdColor?r.overlay?.getTexture(v.ObjectAndLayerIdColor):e.identifier===i.Highlight?r.overlay?.getTexture(v.Highlight):null}function R(e,r){let t=r.overlay?.overlays[p.INNER]?.extent;u(t)&&(s[0]=e.toMapSpace[0]/n(t)-t[0]/n(t),s[1]=e.toMapSpace[1]/d(t)-t[1]/d(t));let o=r.overlay?.overlays[p.OUTER]?.extent;return u(o)&&(s[2]=e.toMapSpace[0]/n(o)-o[0]/n(o),s[3]=e.toMapSpace[1]/d(o)-o[1]/d(o)),s}function U(e,r){let t=r.overlay?.overlays[p.INNER]?.extent;u(t)&&(s[0]=e.toMapSpace[2]/n(t),s[1]=e.toMapSpace[3]/d(t));let o=r.overlay?.overlays[p.OUTER]?.extent;return u(o)&&(s[2]=e.toMapSpace[2]/n(o),s[3]=e.toMapSpace[3]/d(o)),s}(function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"})(N||(N={}));var s=O(),f=class extends w{constructor(r){super(r,"vec4")}};export{v as a,i as b,S as c,P as d,D as e,W as f,N as g,oe as h,ae as i,L as j};
