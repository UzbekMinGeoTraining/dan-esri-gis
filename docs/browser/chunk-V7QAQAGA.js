import{a as M}from"./chunk-K5V3S3K3.js";import{a as z}from"./chunk-Q6D44QVW.js";import{a as U}from"./chunk-C3EWQ5V5.js";import{a as v}from"./chunk-XC4LDHG5.js";import{b as F}from"./chunk-S3ASAZCA.js";import{b as x}from"./chunk-UW734WOQ.js";import{b as j,c as $}from"./chunk-UCYGH5UZ.js";import{a as C}from"./chunk-X7WNJQZZ.js";import{h}from"./chunk-MJXFSFCY.js";import{a as W}from"./chunk-7DCEI345.js";import{a as B}from"./chunk-WW7S4V24.js";import{a as H}from"./chunk-EHDNZUTT.js";import{c as u}from"./chunk-B72PB7U4.js";import{b as f,c as E}from"./chunk-644SLL4Y.js";import{a as g}from"./chunk-4IVMQ5PX.js";import{d as L}from"./chunk-IMNO5TXZ.js";import{a as P,b as p}from"./chunk-LCDA6FHZ.js";import{a as V}from"./chunk-RZPELDHM.js";import{a as D}from"./chunk-S3J33BKD.js";import{a as s}from"./chunk-NPIYHDQ7.js";import{a as O}from"./chunk-BL63T6AU.js";import{a as _}from"./chunk-AOTWUAUY.js";import{b as r,c as m}from"./chunk-BXR2KKYP.js";import{g as A}from"./chunk-4OZVVJHM.js";import{p as I}from"./chunk-NH3JQE75.js";import{d as N}from"./chunk-XXOIKNT6.js";import{a as S}from"./chunk-DBLGLVAQ.js";import{a as c}from"./chunk-7W6RATG7.js";import{c as y}from"./chunk-2HUIJUS4.js";import{a as T}from"./chunk-PYQRTZNZ.js";function Y(o){o.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}var k=S();function mo(o,e){let i=e.hasModelTransformation,a=e.instancedDoublePrecision;i&&(o.vertex.uniforms.add(new _("model",l=>l.modelTransformation??N)),o.vertex.uniforms.add(new D("normalLocalOriginFromModel",l=>(I(k,l.modelTransformation??N),k)))),e.instanced&&a&&(o.attributes.add(c.INSTANCEMODELORIGINHI,"vec3"),o.attributes.add(c.INSTANCEMODELORIGINLO,"vec3"),o.attributes.add(c.INSTANCEMODEL,"mat3"),o.attributes.add(c.INSTANCEMODELNORMAL,"mat3"));let t=o.vertex;a&&(t.include(V,e),t.uniforms.add(new O("viewOriginHi",(l,n)=>j(y(b,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),b)),new O("viewOriginLo",(l,n)=>$(y(b,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),b)))),t.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${i?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?r`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),t.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${i?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===s.Normal&&(E(t),t.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${i?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&t.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var b=T();function Mo(o,e){e.hasSymbolColors?(o.include(L),o.attributes.add(c.SYMBOLCOLOR,"vec4"),o.varyings.add("colorMixMode","mediump float"),o.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(o.fragment.uniforms.add(new H("colorMixMode",i=>h[i.colorMixMode])),o.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function jo(o,e){let{vertex:i,fragment:a}=o,t=e.hasColorTexture&&e.alphaDiscardMode!==A.Opaque,{output:l,normalType:n,hasColorTextureTransform:w}=e;switch(l){case s.Depth:f(i,e),o.include(v,e),o.include(u,e),o.include(x,e),t&&a.uniforms.add(new g("tex",d=>d.texture)),i.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(M,e),a.main.add(r`
          discardBySlice(vpos);
          ${m(t,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case s.Shadow:case s.ShadowHighlight:case s.ShadowExcludeHighlight:case s.ViewshedShadow:case s.ObjectAndLayerIdColor:f(i,e),o.include(v,e),o.include(x,e),o.include(C,e),o.include(U,e),o.include(u,e),o.include(W,e),F(o),o.varyings.add("depth","float"),t&&a.uniforms.add(new g("tex",d=>d.texture)),i.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),o.include(M,e),a.main.add(r`
          discardBySlice(vpos);
          ${m(t,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${l===s.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case s.Normal:{f(i,e),o.include(v,e),o.include(P,e),o.include(z,e),o.include(x,e),o.include(C,e),t&&a.uniforms.add(new g("tex",R=>R.texture)),n===p.ScreenDerivative&&o.varyings.add("vPositionView","vec3");let d=n===p.Attribute||n===p.Compressed;i.main.add(r`
          vpos = getVertexInLocalOriginSpace();
          ${d?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),o.include(u,e),o.include(M,e),a.main.add(r`
          discardBySlice(vpos);
          ${m(t,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${n===p.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case s.Highlight:f(i,e),o.include(v,e),o.include(x,e),o.include(C,e),t&&a.uniforms.add(new g("tex",d=>d.texture)),i.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(u,e),o.include(M,e),o.include(B,e),a.main.add(r`
          discardBySlice(vpos);
          ${m(t,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}export{Y as a,mo as b,Mo as c,jo as d};
