import{a as t}from"./chunk-AOTWUAUY.js";import{b as v,c as r}from"./chunk-BXR2KKYP.js";import{a as c}from"./chunk-XXOIKNT6.js";import{a as n}from"./chunk-7W6RATG7.js";import{e as s}from"./chunk-5MNDZ6BX.js";function M(e,d={needUVs:!0,needEyeDirection:!0}){e.attributes.add(n.POSITION,"vec2"),e.varyings.add("worldRay","vec3");let{needUVs:a,needEyeDirection:o}=d;a&&e.varyings.add("uv","vec2"),o&&e.varyings.add("eyeDir","vec3"),e.vertex.uniforms.add(new t("inverseProjectionMatrix",(m,i)=>i.camera.inverseProjectionMatrix),new t("inverseViewMatrix",(m,i)=>s(p,i.camera.viewMatrix))),e.vertex.main.add(v`
    vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
    ${r(o,"eyeDir = posViewNear;")}
    worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
    ${r(a,"uv = position * 0.5 + vec2(0.5);")}
    gl_Position = vec4(position, 1, 1);
  `)}var p=c();export{M as a};
