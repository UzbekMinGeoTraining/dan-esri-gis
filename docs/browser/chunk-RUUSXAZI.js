import{b as c}from"./chunk-GKUBZAEG.js";import{a as f}from"./chunk-ZG3FCPXY.js";import{a as u}from"./chunk-RIUAG34V.js";import{c as m}from"./chunk-B72PB7U4.js";import{b as p}from"./chunk-644SLL4Y.js";import{a as s}from"./chunk-OO4IIGVK.js";import{a as n}from"./chunk-RNN6GAXL.js";import{a as v}from"./chunk-CQUOQXLP.js";import{b as i}from"./chunk-BXR2KKYP.js";import{a}from"./chunk-7W6RATG7.js";function h(t){let o=new v,{vertex:d,fragment:e,varyings:l}=o;return o.include(m,t),o.include(f,t),o.include(c,t),p(d,t),o.attributes.add(a.POSITION,"vec3"),o.attributes.add(a.UV0,"vec2"),l.add("vUV","vec2"),l.add("vpos","vec3"),t.terrainDepthTest&&o.varyings.add("depth","float"),d.main.add(i`
      vUV = uv0;
      vpos = position;
      ${t.terrainDepthTest?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);`),e.uniforms.add(new n("size",r=>r.size)),e.uniforms.add(new s("color1",r=>r.color1)),e.uniforms.add(new s("color2",r=>r.color2)),e.include(u),e.main.add(i`
      ${t.terrainDepthTest?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      outputColorHighlightOID(fragColor, vpos);`),o}var P=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));export{h as a,P as b};
