import{a as p}from"./chunk-Q6ZVH4MK.js";import{a as m}from"./chunk-EN6CTWVM.js";import{f as l}from"./chunk-2JF6YUJG.js";import{Q as s,S as n}from"./chunk-GGZQ5GCM.js";import{U as a}from"./chunk-TFUPB3ZG.js";import{a as e}from"./chunk-BMVJCP2M.js";import{u as o}from"./chunk-BP73DJTS.js";var c=0,t=class extends l(m(p(n))){constructor(r){super(r),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(r){let i=this.parent;if(i!=null)switch(i.type){case"line-of-sight":case"dimension":case"viewshed":i.releaseAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",r)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};e([s({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([s({type:String})],t.prototype,"title",void 0),e([s({clonable:!1,value:null})],t.prototype,"parent",null),e([s({readOnly:!0})],t.prototype,"isEditable",null),t=e([a("esri.analysis.Analysis")],t);var w=t;export{w as a};
