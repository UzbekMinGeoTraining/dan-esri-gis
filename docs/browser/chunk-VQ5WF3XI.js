import{b as g,f as y,g as b,h as N}from"./chunk-IZRBPB5G.js";import{a as f}from"./chunk-ILCAH2F6.js";import{a as A}from"./chunk-CYCLIMTY.js";import{a as i}from"./chunk-XXOIKNT6.js";import{D as x,f as c,w as h}from"./chunk-5MNDZ6BX.js";import{a as p,b as s,c as m,e as u}from"./chunk-PYQRTZNZ.js";import{h as l}from"./chunk-2JF6YUJG.js";import{Q as a}from"./chunk-GGZQ5GCM.js";import{U as n}from"./chunk-TFUPB3ZG.js";import{a as r}from"./chunk-BMVJCP2M.js";var e,o=e=class extends l{constructor(t){super(t),this.translation=p(),this.rotationAxis=u(N),this.rotationAngle=0,this.scale=m(1,1,1)}get rotation(){return g(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=s(t),this.rotationAngle=y(t)}get localMatrix(){let t=i();return f(d,this.rotation,b(this.rotation)),h(t,d,this.translation,this.scale),t}get localMatrixInverse(){return c(i(),this.localMatrix)}equals(t){return this===t||t!=null&&x(this.localMatrix,t.localMatrix)}clone(){let t={translation:s(this.translation),rotationAxis:s(this.rotationAxis),rotationAngle:this.rotationAngle,scale:s(this.scale)};return new e(t)}};r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"translation",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAxis",void 0),r([a({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAngle",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"scale",void 0),r([a()],o.prototype,"rotation",null),r([a()],o.prototype,"localMatrix",null),r([a()],o.prototype,"localMatrixInverse",null),o=e=r([n("esri.geometry.support.MeshTransform")],o);var d=A(),k=o;export{k as a};
