import{e as u,f as a,h as A,i as h,j as F,k as O,m as E,n as c,p as e,q as p}from"./chunk-PTVRFY4B.js";import{F as R,b as r}from"./chunk-2HUIJUS4.js";import{a as n}from"./chunk-PYQRTZNZ.js";var _=class{get planes(){return this.frustum}get points(){return this._points}get mutablePoints(){return this._points}get direction(){return this._direction}get origin(){return this._origin}constructor(t){this.renderCoordsHelper=t,this.frustum=u(),this._points=a(),this.lines=new Array(12),this._origin=n(),this._direction=n(),this._altitude=null;for(let s=0;s<12;s++)this.lines[s]={origin:null,direction:n(),endpoint:null}}update(t){A(t.viewMatrix,t.projectionMatrix,this.frustum,this._points),r(this._origin,t.eye),r(this._direction,t.viewForward),this._altitude=this.renderCoordsHelper.getAltitude(this._origin),this._updateLines()}updatePoints(t){for(let s=0;s<this._points.length;s++)r(this._points[s],t[s]);h(this.frustum,this._points),this._updateLines()}get altitude(){return this._altitude}intersectsSphere(t){return F(this.frustum,t)}intersectsRay(t){return O(this.frustum,t)}intersectsLineSegment(t,s){return E(this.frustum,t,s)}intersectsPoint(t){return c(this.frustum,t)}_updateLines(){let t=this._points;for(let s=0;s<4;s++){let T=s+4;o(this.lines[s],t[s],t[T]),o(this.lines[s+4],t[s],s===3?t[0]:t[s+1]),o(this.lines[s+8],t[T],s===3?t[4]:t[T+1])}}},d;function o(i,t,s){i.origin=t,i.endpoint=s,R(i.direction,t,s)}_.planePointIndices=p,_.nearFarLineIndices=[[e.NEAR_BOTTOM_LEFT,e.FAR_BOTTOM_LEFT],[e.NEAR_BOTTOM_RIGHT,e.FAR_BOTTOM_RIGHT],[e.NEAR_TOP_RIGHT,e.FAR_TOP_RIGHT],[e.NEAR_TOP_LEFT,e.FAR_TOP_LEFT]],function(i){i[i.NEAR_FAR_BOTTOM_LEFT=0]="NEAR_FAR_BOTTOM_LEFT",i[i.NEAR_FAR_BOTTOM_RIGHT=1]="NEAR_FAR_BOTTOM_RIGHT",i[i.NEAR_FAR_TOP_RIGHT=2]="NEAR_FAR_TOP_RIGHT",i[i.NEAR_FAR_TOP_LEFT=3]="NEAR_FAR_TOP_LEFT",i[i.NEAR_BOTTOM=4]="NEAR_BOTTOM",i[i.NEAR_RIGHT=5]="NEAR_RIGHT",i[i.NEAR_TOP=6]="NEAR_TOP",i[i.NEAR_LEFT=7]="NEAR_LEFT",i[i.FAR_BOTTOM=8]="FAR_BOTTOM",i[i.FAR_RIGHT=9]="FAR_RIGHT",i[i.FAR_TOP=10]="FAR_TOP",i[i.FAR_LEFT=11]="FAR_LEFT"}(d||(d={}));export{_ as a,d as b};
