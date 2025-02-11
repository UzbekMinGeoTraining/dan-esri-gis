import{a as l}from"./chunk-XC4LDHG5.js";import{b as h}from"./chunk-GKUBZAEG.js";import{a as u}from"./chunk-7DCEI345.js";import{a as c}from"./chunk-ZG3FCPXY.js";import{a as g}from"./chunk-RIUAG34V.js";import{c as d}from"./chunk-B72PB7U4.js";import{b as m}from"./chunk-644SLL4Y.js";import{a as v}from"./chunk-4IVMQ5PX.js";import{a as f}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-NPIYHDQ7.js";import{a as p}from"./chunk-2HN33SWB.js";import{b as a}from"./chunk-BXR2KKYP.js";import{a as r}from"./chunk-7W6RATG7.js";function C(t){let o=new f,{vertex:s,fragment:e}=o;return m(s,t),o.include(l,t),o.include(c,t),o.include(d,t),o.include(u,t),o.include(h,t),o.attributes.add(r.POSITION,"vec3"),o.attributes.add(r.UV0,"vec2"),t.perspectiveInterpolation&&o.attributes.add(r.PERSPECTIVEDIVIDE,"float"),o.varyings.add("vpos","vec3"),t.terrainDepthTest&&o.varyings.add("depth","float"),s.main.add(a`
    vpos = position;
    ${t.terrainDepthTest?"depth = (view * vec4(vpos, 1.0)).z;":""}
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}`),e.uniforms.add(new v("tex",i=>i.texture),new p("opacity",i=>i.opacity)),o.varyings.add("vTexCoord","vec2"),e.include(g),e.main.add(a`
    discardBySlice(vpos);
    ${t.terrainDepthTest?"terrainDepthTest(depth);":""}
    ${t.output===n.ObjectAndLayerIdColor?`fragColor = vec4(0, 0, 0, 1);
           return;`:""}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`),o}var E=Object.freeze(Object.defineProperty({__proto__:null,build:C},Symbol.toStringTag,{value:"Module"}));export{C as a,E as b};
