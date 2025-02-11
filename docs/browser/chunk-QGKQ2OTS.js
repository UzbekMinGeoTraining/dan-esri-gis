import{a as f}from"./chunk-I6ETUG5Q.js";import{a as u}from"./chunk-XC4LDHG5.js";import{b as O}from"./chunk-GKUBZAEG.js";import{a as m}from"./chunk-X7WNJQZZ.js";import{a as C}from"./chunk-7DCEI345.js";import{a as b}from"./chunk-ZG3FCPXY.js";import{a as g}from"./chunk-RIUAG34V.js";import{c as d}from"./chunk-B72PB7U4.js";import{b as c}from"./chunk-644SLL4Y.js";import{a as v}from"./chunk-OO4IIGVK.js";import{a as h}from"./chunk-CQUOQXLP.js";import{a as p}from"./chunk-NPIYHDQ7.js";import{b as l}from"./chunk-BXR2KKYP.js";import{a}from"./chunk-7W6RATG7.js";function w(o){let r=new h,{vertex:t,fragment:s,attributes:n,varyings:i}=r;c(t,o),r.include(u,o),r.include(f,o),r.include(m,o),r.include(C,o),r.include(d,o),r.include(O,o),n.add(a.POSITION,"vec3"),o.vvColor&&n.add(a.COLORFEATUREATTRIBUTE,"float"),i.add("vColor","vec4"),i.add("vpos","vec3");let e=o.terrainDepthTest&&o.output===p.Color;return e&&i.add("depth","float"),t.uniforms.add(new v("eColor",T=>T.color)),t.main.add(l`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${o.hasVertexColors?"vColor *= eColor;":o.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${e?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);`),r.include(d,o),e&&r.include(b,o),s.include(g),s.main.add(l`
    discardBySlice(vpos);
    ${e?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;
    outputColorHighlightOID(fColor, vpos);`),r}var F=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{w as a,F as b};
