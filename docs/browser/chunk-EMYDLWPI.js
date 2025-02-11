import{a as u}from"./chunk-XC4LDHG5.js";import{b as z}from"./chunk-GKUBZAEG.js";import{a as P}from"./chunk-ZG3FCPXY.js";import{a as b}from"./chunk-RIUAG34V.js";import{c as f}from"./chunk-B72PB7U4.js";import{a as S,b as w,c as g}from"./chunk-644SLL4Y.js";import{a as c}from"./chunk-OO4IIGVK.js";import{a as h}from"./chunk-CQUOQXLP.js";import{a as v}from"./chunk-NPIYHDQ7.js";import{a as p}from"./chunk-VI4TDFI5.js";import{a as d}from"./chunk-2HN33SWB.js";import{b as a}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-7W6RATG7.js";import{a as m}from"./chunk-YRTBL7EE.js";function C(i,o){if(!o.screenSizeEnabled)return;let r=i.vertex;S(r,o),r.uniforms.add(new d("perScreenPixelRatio",(e,t)=>t.camera.perScreenPixelRatio),new d("screenSizeScale",e=>e.screenSizeScale)).code.add(a`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function D(i){let o=new h,r=i.terrainDepthTest&&i.output===v.Color;o.include(u,i),o.include(C,i),o.include(f,i),o.include(z,i);let{vertex:e,fragment:t}=o;return t.include(b),w(e,i),t.uniforms.add(new c("uColor",s=>s.color)),o.attributes.add(l.POSITION,"vec3"),o.varyings.add("vWorldPosition","vec3"),r&&o.varyings.add("depth","float"),i.screenSizeEnabled&&o.attributes.add(l.OFFSET,"vec3"),i.shadingEnabled&&(g(e),o.attributes.add(l.NORMAL,"vec3"),o.varyings.add("vViewNormal","vec3"),t.uniforms.add(new p("shadingDirection",s=>s.shadingDirection)),t.uniforms.add(new c("shadedColor",s=>N(s.shadingTint,s.color)))),e.main.add(a`
      vWorldPosition = ${i.screenSizeEnabled?a`screenSizeScaling(offset, position)`:a`position`};
      ${i.shadingEnabled?a`vec3 worldNormal = normal;
                 vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`:""}
      ${r?a`depth = (view * vec4(vWorldPosition, 1.0)).z;`:""}
      gl_Position = transformPosition(proj, view, vWorldPosition);
  `),r&&o.include(P,i),t.main.add(a`
      discardBySlice(vWorldPosition);
      ${r?a`terrainDepthTest(depth);`:""}
      ${i.shadingEnabled?a`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:a`vec4 finalColor = uColor;`}
      outputColorHighlightOID(finalColor, vWorldPosition);`),o}function N(i,o){let r=1-i[3],e=i[3]+o[3]*r;return e===0?(n[3]=e,n):(n[0]=(i[0]*i[3]+o[0]*o[3]*r)/e,n[1]=(i[1]*i[3]+o[1]*o[3]*r)/e,n[2]=(i[2]*i[3]+o[2]*o[3]*r)/e,n[3]=o[3],n)}var n=m(),M=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}));export{D as a,M as b};
