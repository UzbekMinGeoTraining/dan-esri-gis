import{a as u}from"./chunk-I6ETUG5Q.js";import{a as p}from"./chunk-XC4LDHG5.js";import{a as g}from"./chunk-WW7S4V24.js";import{c}from"./chunk-B72PB7U4.js";import{b as m}from"./chunk-644SLL4Y.js";import{a as f}from"./chunk-OO4IIGVK.js";import{a as h}from"./chunk-CQUOQXLP.js";import{a as e}from"./chunk-NPIYHDQ7.js";import{a as d}from"./chunk-2HN33SWB.js";import{b as t}from"./chunk-BXR2KKYP.js";import{a as n}from"./chunk-YJ3RZNO6.js";import{a as s}from"./chunk-7W6RATG7.js";function C(o){let r=new h,{vertex:l,fragment:a}=r;return r.include(p,o),r.include(u,o),m(l,o),r.attributes.add(s.POSITION,"vec3"),r.varyings.add("vpos","vec3"),l.main.add(t`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),r.include(g,o),r.include(c,o),a.uniforms.add(new d("alphaCoverage",(i,v)=>Math.min(1,i.width*v.camera.pixelRatio))),o.hasVertexColors||a.uniforms.add(new f("constantColor",i=>i.color)),a.main.add(t`
    discardBySlice(vpos);

    vec4 color = ${o.hasVertexColors?"vColor":"constantColor"};

    ${o.output===e.ObjectAndLayerIdColor?"color.a = 1.0;":""}

    if (color.a < ${t.float(n)}) {
      discard;
    }

    ${o.output===e.Color?t`fragColor = highlightSlice(color, vpos);`:""}
    calculateOcclusionAndOutputHighlight();
  `),r}var I=Object.freeze(Object.defineProperty({__proto__:null,build:C},Symbol.toStringTag,{value:"Module"}));export{C as a,I as b};
