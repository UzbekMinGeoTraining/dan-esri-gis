import{a as s}from"./chunk-GDB2EJGA.js";import{a as M}from"./chunk-RDGFIF46.js";import{a as p}from"./chunk-C2ONI6UP.js";import{a as f}from"./chunk-H6LJ2DCJ.js";import{d as C}from"./chunk-IMNO5TXZ.js";import{a as c}from"./chunk-NPIYHDQ7.js";import{a as v}from"./chunk-GXSLPADW.js";import{a as u}from"./chunk-523X5JOP.js";import{b as t}from"./chunk-BXR2KKYP.js";import{a as m}from"./chunk-B7GIKKEW.js";import{a as x}from"./chunk-7W6RATG7.js";var i=class extends u{constructor(e,r){super(e,"int",m.Draw,(d,n,a)=>d.setUniform1i(e,r(n,a)))}};var l;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(l||(l={}));var E=429496.7296;function P(o,e){s(o/E*.5+.5,e)}function R(o,e){switch(e.componentData){case l.Varying:return g(o,e);case l.Uniform:return y(o,e);case l.COUNT:return;default:e.componentData}}function g(o,e){let{vertex:r,fragment:d}=o;r.include(f),r.uniforms.add(new v("componentColorTex",a=>a.componentParameters.texture.texture)),o.attributes.add(x.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");let n=e.output===c.ObjectAndLayerIdColor;n&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(C),r.constants.add("stride","float",M()?3:2),r.code.add(t`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),r.code.add(t`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${t.float(E)};
  }

  ${n?t`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:t`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),d.code.add(t`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${n?t`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function y(o,e){let{vertex:r,fragment:d}=o;r.uniforms.add(new p("externalColor",a=>a.componentParameters.externalColor)),d.uniforms.add(new i("externalColorMixMode",a=>a.componentParameters.externalColorMixMode)),o.varyings.add("vExternalColor","vec4"),r.code.add(t`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);let n=e.output===c.ObjectAndLayerIdColor;d.code.add(t`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${n?t`fragColor = vec4(0, 0, 0, 0);`:""}
 }
`)}export{l as a,E as b,P as c,R as d};
