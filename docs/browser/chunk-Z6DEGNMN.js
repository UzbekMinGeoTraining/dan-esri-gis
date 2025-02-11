import{a as l}from"./chunk-HCCGI45Q.js";import{a as y}from"./chunk-ZG3FCPXY.js";import{c as b}from"./chunk-B72PB7U4.js";import{a as N}from"./chunk-OO4IIGVK.js";import{a as p}from"./chunk-RNN6GAXL.js";import{a as S}from"./chunk-CQUOQXLP.js";import{a as k,b as L,c as s}from"./chunk-WOTA3FFP.js";import{a as h}from"./chunk-H6LJ2DCJ.js";import{a as A}from"./chunk-S3J33BKD.js";import{a as f}from"./chunk-AOTWUAUY.js";import{a as m}from"./chunk-GXSLPADW.js";import{a as w}from"./chunk-2HN33SWB.js";import{a as g}from"./chunk-523X5JOP.js";import{b as o}from"./chunk-BXR2KKYP.js";import{a as n}from"./chunk-7W6RATG7.js";import{a as v,c as x}from"./chunk-HWN5REN7.js";import{b as P}from"./chunk-XTES2GPX.js";function V(i){let e=o`bool isNaN( float val )
{
return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}`;i.code.add(e)}var O=x(.5,-4e-4);function j(i,e){let t=i.vertex;t.include(V),t.constants.add("depthBias","vec2",O),t.uniforms.add(new p("inverseViewport",(a,r)=>r.inverseViewport)),e.legacy?(t.uniforms.add(new f("proj",(a,r)=>r.camera.projectionMatrix)),t.code.add(o`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(t.uniforms.add(new A("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal),new f("transformProjFromView",a=>a.transformProjFromView)),t.code.add(o`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)),t.code.add(o`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)}function T(i,e){let t=i.vertex;e.silhouette?(t.code.add(o`bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
float faceAVisible = dot(viewDir, normalA);
float faceBVisible = dot(viewDir, normalB);
return faceAVisible * faceBVisible < 0.0;
}`),e.legacy?t.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 viewNormalA = _modelToViewNormal(data.normal);
vec3 viewNormalB = _modelToViewNormal(data.normal2);
vec3 viewDir = -viewPos;
if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`):t.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 worldNormalA = _modelToWorldNormal(data.normal);
vec3 worldNormalB = _modelToWorldNormal(data.normal2);
vec3 viewDir = -worldPos;
if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`)):t.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
return false;
}`)}function c(i,e){let t=i.vertex;switch(i.attributes.add(n.SIDENESS,"vec2"),e.type===s.Mixed?t.code.add(o`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`):t.code.add(o`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`),e.type){case s.Mixed:t.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);break;case s.Sketch:t.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case s.Solid:t.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case s.COUNT:break;default:e.type}}function C(i,e){let t=i.vertex;switch(i.include(c,e),e.type){case s.Solid:t.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case s.Sketch:t.uniforms.add(new l("strokesAmplitude",a=>a.strokesTexture.amplitude)),t.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case s.Mixed:t.uniforms.add(new l("strokesAmplitude",a=>a.strokesTexture.amplitude)),t.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
return 0.0;
}`);break;case s.COUNT:break;default:e.type}}function U(i,e){i.include(c,e);let{vertex:t,fragment:a}=i;switch(L(e.type)&&(t.uniforms.add(new m("strokesTexture",r=>r.strokesTexture.texture)),t.uniforms.add(new l("strokesLog2Resolution",r=>Math.log2(r.strokesTexture.resolution)),new l("strokeVariants",r=>r.strokesTexture.variants)),i.varyings.add("vStrokeUV","vec2"),a.uniforms.add(new m("strokesTexture",r=>r.strokesTexture.texture),new l("strokesNormalizationScale",r=>r.strokesTexture.normalizationScale)),t.code.add(o`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),i.fragment.include(h),a.code.add(o`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),e.type){case s.Solid:t.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),a.code.add(o`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case s.Sketch:t.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),a.code.add(o`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case s.Mixed:i.varyings.add("vType","float"),t.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),a.code.add(o`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`);break;case s.COUNT:break;default:e.type}}function W(i){let e=new S,{vertex:t,fragment:a}=e;return i.legacy&&t.uniforms.add(new u("model"),new u("localView")),e.include(j,i),e.include(k,i),e.include(C,i),e.include(c,i),e.include(U,i),e.include(b,i),e.include(T,i),e.include(y,i),e.varyings.add("vColor","vec4"),e.varyings.add("vRadius","float"),e.varyings.add("vPosition","vec3"),e.varyings.add("vWorldPosition","vec3"),i.terrainDepthTest&&e.varyings.add("vViewPos","vec3"),e.varyings.add("vLineLengthPixels","float"),e.varyings.add("vSizeFalloffFactor","float"),t.uniforms.add(new p("pixelToNDC",(r,d)=>P(z,2/d.camera.fullViewport[2],2/d.camera.fullViewport[3])),new N("viewport",(r,d)=>d.camera.fullViewport),new w("pixelRatio",(r,d)=>d.camera.pixelRatio)),e.attributes.add(n.POSITION0,"vec3"),e.attributes.add(n.POSITION1,"vec3"),e.attributes.add(n.VARIANTOFFSET,"float"),e.attributes.add(n.VARIANTSTROKE,"float"),e.attributes.add(n.VARIANTEXTENSION,"float"),t.code.add(o`
    const float opaqueCutoff = 1.0 / 255.0;

    void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
      vec2 sideness = unpackedAttributes.sideness;
      vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

      vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

      vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
      ${i.terrainDepthTest?"vViewPos = viewPos;":""}

      vec4 projPosV0 = projFromViewPosition(viewPosV0);
      vec4 projPosV1 = projFromViewPosition(viewPosV1);
      vec4 projPos = projFromViewPosition(viewPos);

      vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
      vec2 ndcToPixel = viewport.zw * 0.5;
      vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
      float lineLengthPixels = length(screenSpaceLinePixels);

      float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
      vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

      float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
      float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

      float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
      float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;

      vSizeFalloffFactor = falloffFactor;

      float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
      float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

      const float aaPaddingPixels = 1.0;

      // Line size with padding
      float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
      float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;

      // Half line width in NDC including padding for anti aliasing
      vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
      vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
      vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;

      // Compute screen space position of vertex, offsetting for line size and end caps
      vec2 ndcOffset = (
          screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
        + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
      );

      projPos.xy += ndcOffset * projPos.w;
      projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

      projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

      // Line length with end caps
      float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

      float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

      // Position in pixels with origin at first vertex of line segment
      vPosition = vec3(
        halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
        pixelPositionAlongLine,
        pixelPositionAlongLine / extendedLineLengthPixels
      );

      // The line width radius in pixels
      vRadius = lineWidthPixels * 0.5;
      vLineLengthPixels = extendedLineLengthPixels;

      // discard short edges below a certain length threshold
      ${i.type===s.Sketch?o`
        if (lineLengthPixels <= 3.0) {
          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return;
        }`:i.type===s.Mixed?o`
        if (lineLengthPixels <= 3.0 && unpackedAttributes.type <= 0.0) {
           gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
           return;
        }`:""}
      gl_Position = projPos;
    }`),t.main.add(o`ComponentData component = readComponentData();
UnpackedAttributes unpackedAttributes = unpackAttributes(component);
vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);
vColor = component.color;
if (vColor.a < opaqueCutoff) {
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return;
}
if (discardNonSilhouetteEdges(viewPosV0, worldPosV0, component)) {
return;
}
calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(component), unpackedAttributes);
calculateStyleOutputs(unpackedAttributes);`),a.code.add(o`vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
float positionX = position.x - calculateLineOffset();
if (radius < 1.0) {
float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
return vec2(0.5 - min(coverageX, coverageY), 0.0);
}
else {
float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);
vec2 lineToPosition = vec2(positionX, positionOnCap);
return vec2(length(lineToPosition) - radius, positionOnCap / radius);
}
}`),a.main.add(o`
    ${i.terrainDepthTest?"terrainDepthTest(vViewPos.z);":""}
    float radius = vRadius * calculateLinePressure();

    vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
    float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

    discardBySlice(vWorldPosition);

    fragColor = vec4(vColor.rgb, vColor.a * coverage);`),e}var z=v(),u=class extends g{constructor(e){super(e,"mat4")}},De=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}));export{W as a,De as b};
