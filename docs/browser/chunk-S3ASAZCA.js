import{b as t}from"./chunk-ZUUCQTSR.js";import{a as d}from"./chunk-RNN6GAXL.js";import{a as e}from"./chunk-NPIYHDQ7.js";import{b as o}from"./chunk-BXR2KKYP.js";function n(a){a.varyings.add("linearDepth","float")}function s(a){a.vertex.uniforms.add(new d("nearFar",(i,r)=>r.camera.nearFar))}function c(a){a.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(a,i){let{vertex:r}=a;switch(i.output){case e.Color:case e.ColorEmission:if(i.receiveShadows)return n(a),void r.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case e.Shadow:case e.ShadowHighlight:case e.ShadowExcludeHighlight:case e.ViewshedShadow:return a.include(t,i),n(a),s(a),c(a),void r.code.add(o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(o`void forwardLinearDepth() {}`)}export{n as a,s as b,c,u as d};
