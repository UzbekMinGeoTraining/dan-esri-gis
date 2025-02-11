import{a}from"./chunk-NPIYHDQ7.js";import{b as r}from"./chunk-BXR2KKYP.js";import{a as d}from"./chunk-7W6RATG7.js";function C(o,e){if(e.output!==a.ObjectAndLayerIdColor)return o.vertex.code.add(r`void forwardObjectAndLayerIdColor() {}`),void o.fragment.code.add(r`void outputObjectAndLayerIdColor() {}`);let t=e.objectAndLayerIdColorInstanced;o.varyings.add("objectAndLayerIdColorVarying","vec4"),o.attributes.add(t?d.INSTANCEOBJECTANDLAYERIDCOLOR:d.OBJECTANDLAYERIDCOLOR,"vec4"),o.vertex.code.add(r`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${t?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),o.fragment.code.add(r`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}export{C as a};
