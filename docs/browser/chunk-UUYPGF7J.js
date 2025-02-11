import{a as p}from"./chunk-OO4IIGVK.js";import{a as f}from"./chunk-CQUOQXLP.js";import{a as c}from"./chunk-AOTWUAUY.js";import{a as m}from"./chunk-2HN33SWB.js";import{b as l}from"./chunk-BXR2KKYP.js";import{a as n}from"./chunk-XXOIKNT6.js";import{a as o}from"./chunk-7W6RATG7.js";import{a as s,g as i}from"./chunk-5MNDZ6BX.js";function d(){let a=new f;return a.attributes.add(o.POSITION,"vec3"),a.attributes.add(o.COLOR,"vec4"),a.attributes.add(o.SIZE,"float"),a.varyings.add("vcolor","vec4"),a.varyings.add("vsize","float"),a.vertex.uniforms.add(new c("transform",(t,r)=>v(t,r)),new p("viewport",(t,r)=>r.camera.fullViewport),new m("pixelRatio",(t,r)=>r.camera.pixelRatio)),a.vertex.main.add(l`gl_Position = transform * vec4(position, 0);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;`),a.fragment.main.add(l`float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
fragColor = vec4(vcolor.xyz, intensity);`),a}function v(a,t){return s(e,t.camera.projectionMatrix),e[10]=24e-8-1,e[11]=-1,e[14]=(24e-8-2)*t.camera.near,i(e,e,t.camera.viewMatrix),i(e,e,a.modelMatrix)}var e=n(),w=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));export{d as a,w as b};
