import{c as O}from"./chunk-UW734WOQ.js";import{a as P}from"./chunk-RIUAG34V.js";import{a as c}from"./chunk-G5SIQY64.js";import{a as T}from"./chunk-WW7S4V24.js";import{a as E}from"./chunk-4IVMQ5PX.js";import{a as g,h as l,n as C}from"./chunk-NPIYHDQ7.js";import{a as h}from"./chunk-BL63T6AU.js";import{a as x}from"./chunk-VI4TDFI5.js";import{a as v}from"./chunk-GXSLPADW.js";import{b as t,c as r}from"./chunk-BXR2KKYP.js";import{a as d}from"./chunk-YJ3RZNO6.js";import{a as f}from"./chunk-B7GIKKEW.js";var p;(function(o){o[o.None=0]="None",o[o.Value=1]="Value",o[o.Texture=2]="Texture",o[o.COUNT=3]="COUNT"})(p||(p={}));function $(o,s){if(!l(s.output))return;let{emissionSource:n,hasEmissiveTextureTransform:m,bindType:a}=s,e=n===p.Texture;e&&(o.include(O,s),o.fragment.uniforms.add(a===f.Pass?new E("texEmission",i=>i.textureEmissive):new v("texEmission",i=>i.textureEmissive)));let u=n===p.Value||e;u&&o.fragment.uniforms.add(a===f.Pass?new x("emissionFactor",i=>i.emissiveFactor):new h("emissionFactor",i=>i.emissiveFactor)),o.fragment.code.add(t`
    vec4 getEmissions() {
      vec4 emissions = ${u?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${r(e,`emissions *= textureLookup(texEmission, ${m?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function q(o,s){o.include(T,s),o.include($,s),o.fragment.include(P);let n=s.output===g.ObjectAndLayerIdColor,m=C(s.output),a=l(s.output)&&s.oitPass===c.ColorAlpha,e=l(s.output)&&s.oitPass!==c.ColorAlpha,u=s.discardInvisibleFragments,i=0;(e||m||a)&&o.outputs.add("fragColor","vec4",i++),m&&o.outputs.add("fragEmission","vec4",i++),a&&o.outputs.add("fragAlpha","float",i++),o.fragment.code.add(t`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${r(n,t`finalColor.a = 1.0;`)}

      ${r(u,t`if (finalColor.a < ${t.float(d)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${r(a,t`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${r(e,"fragColor = finalColor;")}
      ${r(m,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${r(n,"outputObjectAndLayerIdColor();")}
    }
  `)}export{p as a,q as b};
