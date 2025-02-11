import{a as p}from"./chunk-4OZVVJHM.js";import{c as i,d as o,f as u,g as c}from"./chunk-BDF7KEUQ.js";import{a as r}from"./chunk-JEGVIFEP.js";function _(t,e,n=o.ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:n,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function A(t,e,n,s,d=o.ADD,w=o.ADD,h=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:n,dstAlpha:s,opRgb:d,opAlpha:w,color:{r:h[0],g:h[1],b:h[2],a:h[3]}}}var Y=_(i.ZERO,i.ONE_MINUS_SRC_ALPHA),$=_(i.ONE,i.ZERO),Q=_(i.ONE,i.ONE),tt=_(i.ONE,i.ONE_MINUS_SRC_ALPHA),et=A(i.SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),B={face:u.BACK,mode:c.CCW},C={face:u.FRONT,mode:c.CCW},it=t=>t===p.Back?B:t===p.Front?C:null,nt={zNear:0,zFar:1},st={r:!0,g:!0,b:!0,a:!0};function D(t){return M.intern(t)}function P(t){return H.intern(t)}function k(t){return L.intern(t)}function R(t){return U.intern(t)}function y(t){return K.intern(t)}function N(t){return Z.intern(t)}function E(t){return j.intern(t)}function F(t){return x.intern(t)}function z(t){return q.intern(t)}function lt(t){return G.intern(t)}var l=class{constructor(e,n){this._makeKey=e,this._makeRef=n,this._interns=new Map}intern(e){if(!e)return null;let n=this._makeKey(e),s=this._interns;return s.has(n)||s.set(n,this._makeRef(e)),s.get(n)??null}};function a(t){return"["+t.join(",")+"]"}var M=new l(g,t=>r({__tag:"Blending"},t));function g(t){return t?a([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}var H=new l(v,t=>r({__tag:"Culling"},t));function v(t){return t?a([t.face,t.mode]):null}var L=new l(S,t=>r({__tag:"PolygonOffset"},t));function S(t){return t?a([t.factor,t.units]):null}var U=new l(I,t=>r({__tag:"DepthTest"},t));function I(t){return t?a([t.func]):null}var K=new l(W,t=>r({__tag:"StencilTest"},t));function W(t){return t?a([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}var Z=new l(b,t=>r({__tag:"DepthWrite"},t));function b(t){return t?a([t.zNear,t.zFar]):null}var j=new l(T,t=>r({__tag:"ColorWrite"},t));function T(t){return t?a([t.r,t.g,t.b,t.a]):null}var x=new l(m,t=>r({__tag:"StencilWrite"},t));function m(t){return t?a([t.mask]):null}var q=new l(O,t=>r({__tag:"DrawBuffers"},t));function O(t){return t?a(t.buffers):null}var G=new l(J,t=>({blending:D(t.blending),culling:P(t.culling),polygonOffset:k(t.polygonOffset),depthTest:R(t.depthTest),stencilTest:y(t.stencilTest),depthWrite:N(t.depthWrite),colorWrite:E(t.colorWrite),stencilWrite:F(t.stencilWrite),drawBuffers:z(t.drawBuffers)}));function J(t){return t?a([g(t.blending),v(t.culling),S(t.polygonOffset),I(t.depthTest),W(t.stencilTest),b(t.depthWrite),T(t.colorWrite),m(t.stencilWrite),O(t.drawBuffers)]):null}var f=class{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,n,s,d){return(s||e!==n)&&(d(e),this._pipelineInvalid=!0),e}};export{_ as a,A as b,Y as c,$ as d,Q as e,tt as f,et as g,B as h,C as i,it as j,nt as k,st as l,lt as m,f as n};
