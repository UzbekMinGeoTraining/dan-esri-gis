import{m as W}from"./chunk-3TP25Q6W.js";import{b as g}from"./chunk-UZVBE57Y.js";import{k as L}from"./chunk-3KFX3FFC.js";import{b as q}from"./chunk-6ISQQD7M.js";import{a as G,b as k}from"./chunk-N3AGC3JB.js";import{e as H}from"./chunk-IGNHVSQC.js";import{b as F,j}from"./chunk-OFGHVREP.js";import{H as w,a as b,e as I,u as U,z as h}from"./chunk-X7XJWAFC.js";import{v as P}from"./chunk-FW33MEBA.js";import{a as N}from"./chunk-HWN5REN7.js";import{a as x,b as M,d as O,e as y,n as A,v as D,w as v}from"./chunk-2HUIJUS4.js";import{f as T,i as S}from"./chunk-YFBPRKIN.js";import{a as i}from"./chunk-PYQRTZNZ.js";import{l as R}from"./chunk-N27U3N2T.js";import{a as m,b as f}from"./chunk-JEGVIFEP.js";function z(e,t){return X(e,()=>t)}function Te(e){return X(e,t=>t.plane)}function X(e,t){let r=i(),o=i(),a=!1;return n=>{let l=t(n);if(n.action==="start"){let u=S(n.screenStart,I.get()),c=g(e.state.camera,u,C);c!=null&&(a=w(l,c,r))}if(!a)return null;let s=S(n.screenEnd,I.get()),d=g(e.state.camera,s,C);return d==null?null:w(l,d,o)?f(m({},n),{renderStart:r,renderEnd:o,plane:l,ray:d}):null}}function B(e,t,r=0,o=null,a=null){let n=null;return l=>{if(l.action==="start"&&(n=e.sceneIntersectionHelper.intersectElevationFromScreen(T(l.screenStart.x,l.screenStart.y),t,r,a),n!=null&&o!=null&&!P(n,n,o))||n==null)return null;let s=e.sceneIntersectionHelper.intersectElevationFromScreen(T(l.screenEnd.x,l.screenEnd.y),t,r,a);return s!=null&&(o==null||P(s,s,o))?f(m({},l),{mapStart:n,mapEnd:s}):null}}function J(e,t,r,o=null,a=null){return B(e,r,L(t,e,r),o,a)}function ye(e,t,r,o){let a=r.toMap(e.screenStart);return a!=null?J(t,a,r.elevationInfo,o):null}function K(e,t){let r=Y,o=Z,a=U();e.renderCoordsHelper.worldUpAtPosition(t,r);let n=v(a,r,y(o,t,e.state.camera.eye));return v(n,n,r),h(t,n,a)}function ge(e,t,r){let o=null,a=new W;return a.next(z(e,K(e,t))).next(Q(e,t)).next(V(e,r)).next(n=>{n.mapEnd.x=n.mapStart.x,n.mapEnd.y=n.mapStart.y,o=n}),n=>(o=null,a.execute(n),o)}function Q(e,t){let r=i(),o=x(t);e.renderCoordsHelper.worldUpAtPosition(t,r);let a=i(),n=i(),l=s=>(y(s,s,t),b(r,s,s),e.viewingMode==="global"&&x(s)*Math.sign(D(r,s))<.001-o&&y(s,A(s,r,.001),t),O(s,s,t),s);return s=>(s.renderStart=l(M(a,s.renderStart)),s.renderEnd=l(M(n,s.renderEnd)),s)}function Pe(e,t){let r=o=>{let a=S(o,_),n=g(e.state.camera,a,C);return n==null?null:j(t,n,Y,Z)?.[0]};return o=>{let a=r(o.screenStart);if(a==null)return null;let n=r(o.screenEnd);return n==null?null:f(m({},o),{renderStart:a,renderEnd:n})}}function V(e,t){let r=e.renderCoordsHelper;return o=>{let a=r.fromRenderCoords(o.renderStart,new R({spatialReference:t})),n=r.fromRenderCoords(o.renderEnd,new R({spatialReference:t}));return a!=null&&n!=null?f(m({},o),{mapStart:a,mapEnd:n}):null}}var E;function xe(e){let t=null;return r=>{switch(r.action){case"start":t=e.disableDisplay();break;case"end":case"cancel":t!=null&&(t.remove(),t=null)}return r}}function Me(e,t=null){let r=q(e.state.viewingMode);r.options.selectionMode=!0,r.options.store=k.MIN,r.options.hud=!1;let o=T(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},n=i(),l=t??e.spatialReference,s=u=>{e.map.ground&&e.map.ground.opacity<1?a.exclude.add(H):a.exclude.delete(H),e.sceneIntersectionHelper.intersectIntersectorScreen(S(u,o),r,a);let c=r.results.min,p;if(c.getIntersectionPoint(n))p=c.intersector===G.TERRAIN?E.GROUND:E.OTHER;else{if(!r.results.ground.getIntersectionPoint(n))return null;p=E.GROUND}return{location:e.renderCoordsHelper.fromRenderCoords(n,new R({spatialReference:l})),surfaceType:p}},d;return u=>{if(u.action==="start"){let p=s(u.screenStart);d=p!=null?p.location:null}if(d==null)return null;let c=s(u.screenEnd);return c?.location!=null?f(m({},u),{mapStart:d,mapEnd:c.location,surfaceType:c.surfaceType}):null}}(function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER"})(E||(E={}));var _=N(),Y=i(),Z=i(),C=F();export{z as a,Te as b,J as c,ye as d,ge as e,Pe as f,V as g,xe as h,Me as i};
