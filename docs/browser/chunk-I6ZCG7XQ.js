import{a as s}from"./chunk-URULUATZ.js";import{c as i}from"./chunk-WOTA3FFP.js";import{a as m}from"./chunk-RRDM7P6F.js";import{a}from"./chunk-YFBPRKIN.js";import{c as n,e as p}from"./chunk-YRTBL7EE.js";import{a as r,b as o}from"./chunk-JEGVIFEP.js";function f(e){return e.type==="fill"}function y(e){return e.type==="extrude"}function M(e){return e&&e.enabled&&(y(e)||f(e))&&e.edges!=null}function d(e){return e&&e.enabled&&e.edges||null}function U(e,t){return g(d(e),t)}function g(e,t){if(e==null)return null;let l=e.color!=null?p(m.toUnitRGBA(e.color)):n(0,0,0,0),c=a(e.size),u=a(e.extensionLength);switch(e.type){case"solid":return h(r({color:l,size:c,extensionLength:u},t));case"sketch":return x(r({color:l,size:c,extensionLength:u},t));default:return}}function h(e){return o(r(r({},L),e),{type:i.Solid})}function x(e){return o(r(r({},S),e),{type:i.Sketch})}var L={color:n(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:s.OPAQUE,hasSlicePlane:!1},S={color:n(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:s.OPAQUE,hasSlicePlane:!1};export{M as a,U as b,g as c,h as d};
