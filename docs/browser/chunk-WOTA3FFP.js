import{b as f}from"./chunk-BNUQT6PD.js";import{a as s}from"./chunk-H6LJ2DCJ.js";import{a as v}from"./chunk-LCDA6FHZ.js";import{a as p,b as i}from"./chunk-RZPELDHM.js";import{a as F}from"./chunk-S3J33BKD.js";import{a as d}from"./chunk-BL63T6AU.js";import{a as u}from"./chunk-AOTWUAUY.js";import{a as m}from"./chunk-VI4TDFI5.js";import{a as c}from"./chunk-GXSLPADW.js";import{a as x}from"./chunk-2HN33SWB.js";import{b as r}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-7W6RATG7.js";function N(e,a){let o=e.vertex;o.include(s),e.include(v,a),o.uniforms.add(new x("distanceFalloffFactor",t=>t.distanceFalloffFactor)),o.code.add(r`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),o.uniforms.add(new c("componentDataTex",t=>t.componentDataTexture)),e.attributes.add(l.COMPONENTINDEX,"float"),o.constants.add("componentColorFieldOffset","float",0),o.constants.add("componentOtherFieldOffset","float",1),o.constants.add("componentVerticalOffsetFieldOffset","float",2),o.constants.add("componentFieldCount","float",3),o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(r`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${a.silhouette?r`decompressNormal(normal2Compressed)`:r`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${r.float(f)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),a.legacy?o.code.add(r`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(o.uniforms.add(new i("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel)),o.code.add(r`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),a.silhouette?(e.attributes.add(l.NORMAL2COMPRESSED,"vec2"),o.code.add(r`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(r`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),a.legacy?o.code.add(r`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(p,a),o.uniforms.add(new F("transformViewFromCameraRelativeRS",t=>t.transformViewFromCameraRelativeRS),new i("transformWorldFromModelRS",t=>t.transformWorldFromModelRS),new d("transformWorldFromModelTL",t=>t.transformWorldFromModelTL),new d("transformWorldFromModelTH",t=>t.transformWorldFromModelTH),new m("transformWorldFromViewTL",t=>t.transformWorldFromViewTL),new m("transformWorldFromViewTH",t=>t.transformWorldFromViewTH)),o.code.add(r`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${a.spherical?r`normalize(transformWorldFromModelTL + rotatedModelPosition);`:r`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),o.uniforms.add(new u("transformProjFromView",(t,T)=>T.camera.projectionMatrix)),o.code.add(r`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(r`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function E(e){return e===n.Sketch||e===n.Mixed}var n,w;(function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"})(n||(n={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(w||(w={}));export{N as a,E as b,n as c,w as d};
