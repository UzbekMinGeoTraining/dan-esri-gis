import{f as o}from"./chunk-XZ52TEBV.js";import{a as n}from"./chunk-OO4IIGVK.js";import{a as s}from"./chunk-VI4TDFI5.js";import{b as e}from"./chunk-BXR2KKYP.js";import{c as r}from"./chunk-2HUIJUS4.js";import{a as b}from"./chunk-YRTBL7EE.js";import{c as g}from"./chunk-3FPO2LOS.js";import{a as c}from"./chunk-PYQRTZNZ.js";function L(A,m){let l=A.fragment,a=m.lightingSphericalHarmonicsOrder!==void 0?m.lightingSphericalHarmonicsOrder:2;a===0?(l.uniforms.add(new s("lightingAmbientSH0",(t,i)=>r(d,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),l.code.add(e`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(l.uniforms.add(new n("lightingAmbientSH_R",(t,i)=>g(h,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new n("lightingAmbientSH_G",(t,i)=>g(h,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new n("lightingAmbientSH_B",(t,i)=>g(h,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),l.code.add(e`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(l.uniforms.add(new s("lightingAmbientSH0",(t,i)=>r(d,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new n("lightingAmbientSH_R1",(t,i)=>g(h,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new n("lightingAmbientSH_G1",(t,i)=>g(h,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new n("lightingAmbientSH_B1",(t,i)=>g(h,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new n("lightingAmbientSH_R2",(t,i)=>g(h,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new n("lightingAmbientSH_G2",(t,i)=>g(h,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new n("lightingAmbientSH_B2",(t,i)=>g(h,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),l.code.add(e`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),m.pbrMode!==o.Normal&&m.pbrMode!==o.Schematic||l.code.add(e`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var d=c(),h=b();export{L as a};
