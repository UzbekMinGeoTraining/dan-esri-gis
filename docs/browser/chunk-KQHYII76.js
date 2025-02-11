import{b as e}from"./chunk-BXR2KKYP.js";import{a}from"./chunk-7W6RATG7.js";function s(t,i=!0){t.attributes.add(a.POSITION,"vec2"),i&&t.varyings.add("uv","vec2"),t.vertex.main.add(e`
      gl_Position = vec4(position, 0.0, 1.0);
      ${i?e`uv = position * 0.5 + vec2(0.5);`:""}
  `)}export{s as a};
