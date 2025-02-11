import{e as ct,g as wt,h as yt}from"./chunk-PTVRFY4B.js";import{b as dt}from"./chunk-OFGHVREP.js";import{a as vt}from"./chunk-GB5RQL32.js";import{b as _t}from"./chunk-X7XJWAFC.js";import{a as v}from"./chunk-XXOIKNT6.js";import{c as lt}from"./chunk-HWN5REN7.js";import{a as nt,v as ht}from"./chunk-XTES2GPX.js";import{D as g,F as pt,G as W,I as ut,K as k,a as B,b as F,c as d,e as O,n as V,p as at,u as q,v as z,w as U}from"./chunk-2HUIJUS4.js";import{f as tt,h as it}from"./chunk-YFBPRKIN.js";import{B as st,E as ot,a as R,d as et,f as P,g as A,z as rt}from"./chunk-5MNDZ6BX.js";import{a as m,c as H}from"./chunk-YRTBL7EE.js";import{a as y,e as b,f as L,l as f,m as j,n as G}from"./chunk-3FPO2LOS.js";import{a as _}from"./chunk-PYQRTZNZ.js";import{f as w}from"./chunk-5PTS4JDF.js";import{Q as o,S as $}from"./chunk-GGZQ5GCM.js";import{U as Z}from"./chunk-TFUPB3ZG.js";import{a as s}from"./chunk-BMVJCP2M.js";import{a as D}from"./chunk-VEDIBGHD.js";import{r as Q}from"./chunk-3IBUFXWY.js";function ft(t,i,e){return 2*Math.atan(Math.sqrt(i*i+e*e)*Math.tan(.5*t)/i)}function mt(t,i,e){return 2*Math.atan(Math.sqrt(i*i+e*e)*Math.tan(.5*t)/e)}function gt(t,i,e){return 2*Math.atan(i*Math.tan(.5*t)/Math.sqrt(i*i+e*e))}function xt(t,i,e){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(i*i+e*e))}var Mt=class{constructor(){this.adds=new D,this.removes=new D,this.updates=new D({allocator:i=>i||new X,deallocator:i=>(i.renderGeometry=null,i)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}get empty(){return this.adds.length===0&&this.removes.length===0&&this.updates.length===0}},X=class{},S=class{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}};var Tt,a;function Ft(t){let i=new Map,e=h=>{let p=i.get(h);return p||(p=new S,i.set(h,p)),p};return t.removes.forAll(h=>{Y(h)&&e(h.material).removes.push(h)}),t.adds.forAll(h=>{Y(h)&&e(h.material).adds.push(h)}),t.updates.forAll(h=>{Y(h.renderGeometry)&&e(h.renderGeometry.material).updates.push(h)}),i}function Y(t){return t.geometry.indexCount>=1}(function(t){t[t.Default=0]="Default",t[t.Screenshot=1]="Screenshot",t[t.ObjectAndLayerID=2]="ObjectAndLayerID"})(Tt||(Tt={})),function(t){t[t.TOP=0]="TOP",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.LEFT=3]="LEFT"}(a||(a={}));var K,r=K=class extends ${constructor(t){super(t),this._ray=dt(),this._viewport=H(0,0,1,1),this._padding=H(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=lt(1,1e3),this._viewDirty=!0,this._viewMatrix=v(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=v(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=v(),this._frustumDirty=!0,this._frustum=ct(),this._fullViewport=m(),this._pixelRatio=1,this.row=0,this.column=0,this._rows=1,this._columns=1,this._center=_(),this._up=_(),this.relativeElevation=0}get pixelRatio(){return this._pixelRatio}set pixelRatio(t){this._pixelRatio=t>0?t:1}get rows(){return this._rows}set rows(t){this._rows=Math.max(1,t)}get columns(){return this._columns}set columns(t){this._columns=Math.max(1,t)}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center,"_center")}get ray(){return O(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up,"_up")}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){R(this._viewMatrix,t),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),d(_(),-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10])}get viewUp(){return this._ensureViewClean(),d(_(),this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9])}get viewRight(){return this._ensureViewClean(),d(_(),this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8])}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get screenViewport(){if(this.pixelRatio===1)return this._viewport;let t=b(m(),this._viewport,1/this.pixelRatio),i=this._get("screenViewport");return i&&G(t,i)?i:t}get screenPadding(){if(this.pixelRatio===1)return this._padding;let t=b(m(),this._padding,1/this.pixelRatio),i=this._get("screenPadding");return i&&G(t,i)?i:t}get x(){return this._viewport[0]}set x(t){t+=this._padding[a.LEFT],this._viewport[0]!==t&&(this._viewport[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get y(){return this._viewport[1]}set y(t){t+=this._padding[a.BOTTOM],this._viewport[1]!==t&&(this._viewport[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get fullWidth(){return this._viewport[2]+this._padding[a.RIGHT]+this._padding[a.LEFT]}set fullWidth(t){this.width=t-(this._padding[a.RIGHT]+this._padding[a.LEFT])}get fullHeight(){return this._viewport[3]+this._padding[a.TOP]+this._padding[a.BOTTOM]}set fullHeight(t){this.height=t-(this._padding[a.TOP]+this._padding[a.BOTTOM])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[a.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[a.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get _aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){j(this._padding,t)||(this._viewport[0]+=t[a.LEFT]-this._padding[a.LEFT],this._viewport[1]+=t[a.BOTTOM]-this._padding[a.BOTTOM],this._viewport[2]-=t[a.RIGHT]+t[a.LEFT]-(this._padding[a.RIGHT]+this._padding[a.LEFT]),this._viewport[3]-=t[a.TOP]+t[a.BOTTOM]-(this._padding[a.TOP]+this._padding[a.BOTTOM]),y(this._padding,t),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}get viewProjectionMatrix(){return this._viewProjectionDirty&&(A(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){return this._projectionMatrixInternal}get inverseProjectionMatrix(){return P(v(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||v()}get fov(){return this._fov}set fov(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return gt(this._fov,this.width,this.height)}set fovX(t){this._fov=ft(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return xt(this._fov,this.width,this.height)}set fovY(t){this._fov=mt(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return at(this.center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(P(this._viewInverseTransposeMatrix,this.viewMatrix),et(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){let i=2*t-1;return 2*this.near*this.far/(this.far+this.near-i*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation!=null&&this.relativeElevation>=0}get _projectionMatrixInternal(){let t=this.width,i=this.height,e=this.near*Math.tan(this.fovY/2)*2,h=e*this._aspect,p=e/this.rows,l=h/this.columns,x=-h/2+this.column*l,I=x+l,M=-e/2+this.row*p,E=M+p,T=rt(v(),x*(1+2*this._padding[a.LEFT]/t),I*(1+2*this._padding[a.RIGHT]/t),M*(1+2*this._padding[a.BOTTOM]/i),E*(1+2*this._padding[a.TOP]/i),this.near,this.far),c=this._get("projectionMatrix");return c&&ot(c,T)?c:T}copyFrom(t){F(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,y(this._viewport,t.viewport),this.notifyChange("_viewport"),y(this._padding,t.padding),this.notifyChange("_padding"),nt(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.row=t.row,this.column=t.column,this.rows=t.rows,this.columns=t.columns,this.relativeElevation=t.relativeElevation;let i=t;return this._viewDirty=i._viewDirty,this._viewDirty||(R(this._viewMatrix,t.viewMatrix),this.notifyChange("_viewMatrix")),this._viewProjectionDirty=!0,this._frustumDirty=i._frustumDirty,this._frustumDirty||(wt(this._frustum,t.frustum),this._frustumDirty=!1),i._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(R(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),y(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up,this.fov=t.fov}clone(){return new K().copyFrom(this)}equals(t){return g(this.eye,t.eye)&&g(this.center,t.center)&&g(this.up,t.up)&&j(this._viewport,t.viewport)&&j(this._padding,t.padding)&&ht(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation&&this.row===t.row&&this.column===t.column&&this.rows===t.rows&&this.columns===t.columns}almostEquals(t){let i=Math.max(1,1/this.pixelRatio,1/t.pixelRatio);if(Math.abs(t.fov-this._fov)>=.001||L(t.screenPadding,this.screenPadding)>=i||L(this.screenViewport,t.screenViewport)>=i||this.row!==t.row||this.column!==t.column||this.rows!==t.rows||this.columns!==t.columns)return!1;W(u,t.eye,t.center),W(N,this.eye,this.center);let e=z(u,N),h=k(u),p=k(N),l=5e-4;return e*e>=(1-1e-10)*h*p&&ut(t.eye,this.eye)<Math.max(h,p)*l*l}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))}_viewDirectionDistance(t){return Math.abs(_t(this.viewForward,O(u,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,i){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(i||1)))}getScreenCenter(t=tt()){return t[0]=(this.padding[a.LEFT]+this.width/2)/this.pixelRatio,t[1]=(this.padding[a.TOP]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,i=.5,e=.5){return t[0]=this.padding[a.LEFT]+this.width*i,t[1]=this.padding[a.BOTTOM]+this.height*e,t[2]=.5,t}setGLViewport(t){let i=this.viewport,e=this.padding;t.setViewport(i[0]-e[3],i[1]-e[2],i[2]+e[1]+e[3],i[3]+e[0]+e[2])}applyProjection(t,i){t!==n&&F(n,t),n[3]=1,f(n,n,this.projectionMatrix);let e=Math.abs(n[3]);V(n,n,1/e);let h=this.fullViewport;i[0]=w(0,h[0]+h[2],.5+.5*n[0]),i[1]=w(0,h[1]+h[3],.5+.5*n[1]),i[2]=.5*(n[2]+1),i[3]=e}unapplyProjection(t,i){let e=this.fullViewport;n[0]=(t[0]/(e[0]+e[2])*2-1)*t[3],n[1]=(t[1]/(e[1]+e[3])*2-1)*t[3],n[2]=(2*t[2]-1)*t[3],n[3]=t[3],this.inverseProjectionMatrix!=null&&(f(n,n,this.inverseProjectionMatrix),i[0]=n[0],i[1]=n[1],i[2]=n[2])}projectToScreen(t,i){return this.projectToRenderScreen(t,J),this.renderToScreen(J,i),i}projectToRenderScreen(t,i){if(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1,f(n,n,this.viewProjectionMatrix),n[3]===0)return null;let e=n;V(e,e,1/Math.abs(n[3]));let h=this.fullViewport,p=w(0,h[0]+h[2],.5+.5*e[0]),l=w(0,h[1]+h[3],.5+.5*e[1]);return"x"in i?(i.x=p,i.y=l):(i[0]=p,i[1]=l,i.length>2&&(i[2]=.5*(e[2]+1))),i}unprojectFromScreen(t,i){return this.unprojectFromRenderScreen(this.screenToRender(t,J),i)}unprojectFromRenderScreen(t,i){if(A(C,this.projectionMatrix,this.viewMatrix),!P(C,C))return null;let e=this.fullViewport;return n[0]=2*(t[0]-e[0])/e[2]-1,n[1]=2*(t[1]-e[1])/e[3]-1,n[2]=2*t[2]-1,n[3]=1,f(n,n,C),n[3]===0?null:(i[0]=n[0]/n[3],i[1]=n[1]/n[3],i[2]=n[2]/n[3],i)}constrainWindowSize(t,i,e,h){let p=t*this.pixelRatio,l=i*this.pixelRatio,x=Math.max(p-e/2,0),I=Math.max(this.fullHeight-l-h/2,0),M=-Math.min(p-e/2,0),E=-Math.min(this.fullHeight-l-h/2,0),T=e-M- -Math.min(this.fullWidth-p-e/2,0),c=h-E- -Math.min(l-h/2,0);return[Math.round(x),Math.round(I),Math.round(T),Math.round(c)]}computeUp(t){t===vt.Global?this._computeUpGlobal():this._computeUpLocal()}screenToRender(t,i){let e=t[0]*this.pixelRatio,h=this.fullHeight-t[1]*this.pixelRatio;return i[0]=e,i[1]=h,i}renderToScreen(t,i){let e=t[0]/this.pixelRatio,h=(this.fullHeight-t[1])/this.pixelRatio;i[0]=e,i[1]=h}_computeUpGlobal(){O(u,this.center,this.eye);let t=B(this.center);t<1?(d(this._up,0,0,1),this._markViewDirty(),this.notifyChange("_up")):Math.abs(z(u,this.center))>.9999*B(u)*t||(U(this._up,u,this.center),U(this._up,this._up,u),q(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_computeUpLocal(){pt(u,this.eye,this.center),Math.abs(u[2])<=.9999&&(V(u,u,u[2]),d(this._up,-u[0],-u[1],1-u[2]),q(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_compareAndSetView(t,i,e=""){typeof t[0]=="number"&&isFinite(t[0])&&typeof t[1]=="number"&&isFinite(t[1])&&typeof t[2]=="number"&&isFinite(t[2])?g(t,i)||(F(i,t),this._markViewDirty(),e.length&&this.notifyChange(e)):Q.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&(yt(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(st(this._viewMatrix,this.eye,this.center,this.up),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}};s([o()],r.prototype,"_viewport",void 0),s([o()],r.prototype,"_padding",void 0),s([o()],r.prototype,"_fov",void 0),s([o()],r.prototype,"_nearFar",void 0),s([o()],r.prototype,"_viewDirty",void 0),s([o()],r.prototype,"_viewMatrix",void 0),s([o()],r.prototype,"_pixelRatio",void 0),s([o()],r.prototype,"pixelRatio",null),s([o()],r.prototype,"row",void 0),s([o()],r.prototype,"column",void 0),s([o()],r.prototype,"_rows",void 0),s([o()],r.prototype,"rows",null),s([o()],r.prototype,"_columns",void 0),s([o()],r.prototype,"columns",null),s([o()],r.prototype,"eye",null),s([o()],r.prototype,"center",null),s([o()],r.prototype,"_center",void 0),s([o()],r.prototype,"up",null),s([o()],r.prototype,"_up",void 0),s([o()],r.prototype,"viewMatrix",null),s([o({readOnly:!0})],r.prototype,"viewForward",null),s([o({readOnly:!0})],r.prototype,"viewUp",null),s([o({readOnly:!0})],r.prototype,"viewRight",null),s([o({readOnly:!0})],r.prototype,"nearFar",null),s([o()],r.prototype,"near",null),s([o()],r.prototype,"far",null),s([o()],r.prototype,"viewport",null),s([o({readOnly:!0})],r.prototype,"screenViewport",null),s([o({readOnly:!0})],r.prototype,"screenPadding",null),s([o()],r.prototype,"x",null),s([o()],r.prototype,"y",null),s([o()],r.prototype,"width",null),s([o()],r.prototype,"height",null),s([o()],r.prototype,"fullWidth",null),s([o()],r.prototype,"fullHeight",null),s([o({readOnly:!0})],r.prototype,"_aspect",null),s([o()],r.prototype,"padding",null),s([o({readOnly:!0})],r.prototype,"projectionMatrix",null),s([o({readOnly:!0})],r.prototype,"inverseProjectionMatrix",null),s([o()],r.prototype,"fov",null),s([o()],r.prototype,"fovX",null),s([o()],r.prototype,"fovY",null),s([o()],r.prototype,"viewInverseTransposeMatrix",null),s([o({readOnly:!0})],r.prototype,"_projectionMatrixInternal",null),s([o()],r.prototype,"relativeElevation",void 0),r=K=s([Z("esri.views.3d.webgl.RenderCamera")],r);var $t=r,n=m(),C=v(),u=_(),N=_(),J=it();export{Mt as a,Tt as b,a as c,Ft as d,$t as e};
