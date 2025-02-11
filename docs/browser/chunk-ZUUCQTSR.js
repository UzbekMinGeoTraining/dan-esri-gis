import{a as v,b as w}from"./chunk-RZPELDHM.js";import{a as F}from"./chunk-S3J33BKD.js";import{a as n}from"./chunk-BL63T6AU.js";import{a as W}from"./chunk-AOTWUAUY.js";import{a as i}from"./chunk-VI4TDFI5.js";import{a as s,b as e}from"./chunk-BXR2KKYP.js";import{a as f}from"./chunk-XXOIKNT6.js";import{a as m}from"./chunk-DBLGLVAQ.js";import{a as l}from"./chunk-7W6RATG7.js";import{a}from"./chunk-PYQRTZNZ.js";function c(o){o.attributes.add(l.POSITION,"vec3"),o.vertex.code.add(e`vec3 positionModel() { return position; }`)}function O(o,d){o.include(c);let t=o.vertex;t.include(v,d),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),t.uniforms.add(new i("transformWorldFromViewTH",r=>r.transformWorldFromViewTH),new i("transformWorldFromViewTL",r=>r.transformWorldFromViewTL),new F("transformViewFromCameraRelativeRS",r=>r.transformViewFromCameraRelativeRS),new W("transformProjFromView",r=>r.transformProjFromView),new w("transformWorldFromModelRS",r=>r.transformWorldFromModelRS),new n("transformWorldFromModelTH",r=>r.transformWorldFromModelTH),new n("transformWorldFromModelTL",r=>r.transformWorldFromModelTL)),t.code.add(e`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),t.code.add(e`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${d.spherical?e`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:e`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),o.fragment.uniforms.add(new i("transformWorldFromViewTL",r=>r.transformWorldFromViewTL)),t.code.add(e`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),o.fragment.code.add(e`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var P=class extends s{constructor(){super(...arguments),this.transformWorldFromViewTH=a(),this.transformWorldFromViewTL=a(),this.transformViewFromCameraRelativeRS=m(),this.transformProjFromView=f()}},p=class extends s{constructor(){super(...arguments),this.transformWorldFromModelRS=m(),this.transformWorldFromModelTH=a(),this.transformWorldFromModelTL=a()}};export{c as a,O as b,P as c,p as d};
