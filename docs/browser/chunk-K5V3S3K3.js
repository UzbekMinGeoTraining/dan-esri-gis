import{a as d}from"./chunk-HCCGI45Q.js";import{a as c}from"./chunk-RIUAG34V.js";import{a}from"./chunk-IMNO5TXZ.js";import{a as s}from"./chunk-2HN33SWB.js";import{b as e}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-YJ3RZNO6.js";import{g as i}from"./chunk-4OZVVJHM.js";function v(r,o){f(r,o,new s("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function C(r,o){f(r,o,new d("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function f(r,o,t){let n=r.fragment;switch(o.alphaDiscardMode){case i.Blend:r.fragment.code.add(e`
        #define discardOrAdjustAlpha(color) { if (color.a < ${e.float(l)}) { discard; } }
      `);break;case i.Opaque:n.code.add(e`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case i.Mask:n.uniforms.add(t).code.add(e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case i.MaskBlend:n.uniforms.add(t).code.add(e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function y(r){r.include(c),r.code.add(e`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${e.int(a.Multiply)}) {
        return allMixed;
      }
      if (mode == ${e.int(a.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${e.int(a.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${e.int(a.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${e.int(a.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{v as a,C as b,y as c};
