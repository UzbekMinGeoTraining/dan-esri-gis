import{a as i}from"./chunk-2DN2BYDF.js";import{a as o}from"./chunk-KCNSUZFF.js";var c=class{constructor(r){this._rctx=r,this._store=new i}dispose(){this._store.forAll(r=>r.dispose()),this._store.clear()}acquire(r,t,a,h){let s=this._store.get(r,t);if(s!=null)return s.ref(),s;let e=new o(this._rctx,r,t,a,h);return e.ref(),this._store.set(r,t,e),e}get test(){}};export{c as a};
