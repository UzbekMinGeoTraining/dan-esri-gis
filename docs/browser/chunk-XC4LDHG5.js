import{c as t}from"./chunk-S3ASAZCA.js";import{b as r}from"./chunk-BXR2KKYP.js";function p(e){t(e),e.vertex.code.add(r`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(r`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{p as a};
