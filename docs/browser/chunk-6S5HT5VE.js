import{a as n}from"./chunk-NH7OOX2I.js";import{a as y}from"./chunk-OO4IIGVK.js";import{a as o}from"./chunk-4IVMQ5PX.js";import{a as b}from"./chunk-CQUOQXLP.js";import{a as x,b as t}from"./chunk-BXR2KKYP.js";import{a as g}from"./chunk-7W6RATG7.js";import{f,g as d,i as c}from"./chunk-YFBPRKIN.js";import{a as p}from"./chunk-YRTBL7EE.js";import{c as v}from"./chunk-3FPO2LOS.js";var i=class extends x{constructor(){super(...arguments),this.mask=null,this.overlay=null,this.input=null,this.size=0}};function k(){let e=new b;return e.attributes.add(g.POSITION,"vec2"),e.vertex.uniforms.add(new y("drawPosition",(r,a)=>U(r,a))),e.varyings.add("vUV","vec2"),e.vertex.main.add(t`vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);`),e.fragment.uniforms.add(new o("textureInput",r=>r.input)),e.fragment.uniforms.add(new o("textureMask",r=>r.mask)),e.fragment.uniforms.add(new o("textureOverlay",r=>r.overlay)),e.fragment.uniforms.add(new n("maskEnabled",r=>r.magnifier.maskEnabled)),e.fragment.uniforms.add(new n("overlayEnabled",r=>r.magnifier.overlayEnabled)),e.fragment.code.add(t`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}`),e.fragment.main.add(t`float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;`),e}function U(e,r){let a=r.camera.pixelRatio,w=e.magnifier.offset.x*a,h=e.magnifier.offset.y*a;c(e.magnifier.position,P);let s=r.camera.screenToRender(P,O),l=Math.ceil(a*e.magnifier.size),{fullWidth:m,fullHeight:u}=r.camera;return v(C,(s[0]+w)/m*2-1,(s[1]-h)/u*2-1,l/m*2,l/u*2)}var P=f(),O=d(),C=p(),j=Object.freeze(Object.defineProperty({__proto__:null,MagnifierPassParameters:i,build:k},Symbol.toStringTag,{value:"Module"}));export{i as a,k as b,j as c};
