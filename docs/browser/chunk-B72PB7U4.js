import{a as d}from"./chunk-BL63T6AU.js";import{a as P}from"./chunk-VI4TDFI5.js";import{a as S,b as r}from"./chunk-BXR2KKYP.js";import{a as I}from"./chunk-XXOIKNT6.js";import{c as g,d as h,e as H,y as f}from"./chunk-2HUIJUS4.js";import{h as m}from"./chunk-5MNDZ6BX.js";import{a as n,i as u}from"./chunk-PYQRTZNZ.js";var b=class extends S{constructor(s){super(),this.slicePlaneLocalOrigin=s}};function N(i,s){B(i,s,new P("slicePlaneOrigin",(e,a)=>T(s,e,a)),new P("slicePlaneBasis1",(e,a)=>_(s,e,a,a.slicePlane?.basis1)),new P("slicePlaneBasis2",(e,a)=>_(s,e,a,a.slicePlane?.basis2)))}function R(i,s){B(i,s,new d("slicePlaneOrigin",(e,a)=>T(s,e,a)),new d("slicePlaneBasis1",(e,a)=>_(s,e,a,a.slicePlane?.basis1)),new d("slicePlaneBasis2",(e,a)=>_(s,e,a,a.slicePlane?.basis2)))}function B(i,s,...e){if(!s.hasSlicePlane){let o=r`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&i.vertex.code.add(o),void i.fragment.code.add(o)}let a=r`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=r`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?r`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:r`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&i.vertex.uniforms.add(...e).code.add(a),i.fragment.uniforms.add(...e).code.add(a),i.fragment.code.add(c)}function v(i,s,e){return i.instancedDoublePrecision?g(G,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function L(i,s){return i!=null?H(p,s.origin,i):s.origin}function w(i,s,e){return i.hasSliceTranslatedView?s!=null?m(D,e.camera.viewMatrix,s):e.camera.viewMatrix:null}function T(i,s,e){if(e.slicePlane==null)return u;let a=v(i,s,e),l=L(a,e.slicePlane),c=w(i,a,e);return c!=null?f(p,l,c):l}function _(i,s,e,a){if(a==null||e.slicePlane==null)return u;let l=v(i,s,e),c=L(l,e.slicePlane),o=w(i,l,e);return o!=null?(h(t,a,c),f(p,c,o),f(t,t,o),H(t,t,p)):a}var G=n(),p=n(),t=n(),D=I();export{b as a,N as b,R as c};
