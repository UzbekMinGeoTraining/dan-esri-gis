import{e as o,p as f}from"./chunk-7D4IYTAJ.js";import{g as n}from"./chunk-JEGVIFEP.js";function I(P){return n(this,arguments,function*(e,t=e.popupTemplate){if(t==null)return[];let a=yield t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=t,{objectIdField:u,typeIdField:s,globalIdField:d,relationships:i}=e;if(a.includes("*"))return["*"];let c=r?f(e):[],l=o(e.fieldsIndex,[...a,...c]);return s&&l.push(s),l&&u&&e.fieldsIndex?.has(u)&&!l.includes(u)&&l.push(u),l&&d&&e.fieldsIndex?.has(d)&&!l.includes(d)&&l.push(d),i&&i.forEach(h=>{let{keyField:p}=h;l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p)}),l})}function m(e,t){return e.popupTemplate?e.popupTemplate:t!=null&&t.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function T(e,t){return m(e,{defaultPopupTemplateEnabled:t})!=null}export{I as a,m as b,T as c};
