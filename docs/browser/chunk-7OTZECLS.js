import{b as g}from"./chunk-XBFBZZXW.js";import{a as c,c as u}from"./chunk-UW734WOQ.js";import{a as T}from"./chunk-RNN6GAXL.js";import{a as x}from"./chunk-4IVMQ5PX.js";import{a as i}from"./chunk-S3J33BKD.js";import{a as l}from"./chunk-GXSLPADW.js";import{b as r}from"./chunk-BXR2KKYP.js";import{a as d}from"./chunk-B7GIKKEW.js";import{d as s}from"./chunk-DBLGLVAQ.js";import{a as m}from"./chunk-7W6RATG7.js";import{g as o}from"./chunk-HWN5REN7.js";function C(n,a){let e=n.fragment;a.hasVertexTangents?(n.attributes.add(m.TANGENT,"vec4"),n.varyings.add("vTangent","vec4"),a.doubleSidedMode===g.WindingOrder?e.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):e.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):e.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),a.textureCoordinateType!==c.None&&(n.include(u,a),e.uniforms.add(a.bindType===d.Pass?new x("normalTexture",t=>t.textureNormal):new l("normalTexture",t=>t.textureNormal)),a.hasNormalTextureTransform&&(e.uniforms.add(new T("scale",t=>t.scale??o)),e.uniforms.add(new i("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??s))),e.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),a.hasNormalTextureTransform&&e.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),e.code.add(r`return tangentSpace * rawNormal;
}`))}export{C as a};
