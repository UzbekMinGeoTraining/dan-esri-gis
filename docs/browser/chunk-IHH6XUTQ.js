import{a as l}from"./chunk-JLACL4RV.js";import{a as y}from"./chunk-IAUHHGQO.js";import{g as i,k as u}from"./chunk-TEY6TKJV.js";import{l as h}from"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import"./chunk-GGZQ5GCM.js";import"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import"./chunk-BMVJCP2M.js";import"./chunk-GMC3I5VG.js";import"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import"./chunk-3IBUFXWY.js";import"./chunk-BP73DJTS.js";import{a as s,b as d,g as f}from"./chunk-JEGVIFEP.js";function b(n){let t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function T(n,t){let e={};for(let o of t){let{parentObjectId:a,parentGlobalId:r,attachmentInfos:m}=o;for(let c of m){let{id:I}=c,j=h(i(`${n.path}/${a}/attachments/${I}`)),p=l.fromJSON(c);p.set({url:j,parentObjectId:a,parentGlobalId:r}),e[a]?e[a].push(p):e[a]=[p]}}return e}function g(n,t,e){let o={query:y(s(d(s({},n.query),{f:"json"}),b(t)))};return e&&(o=d(s(s({},e),o),{query:s(s({},e.query),o.query)})),u(n.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}function w(n,t,e){return f(this,null,function*(){let{objectIds:o}=t,a=[];for(let r of o)a.push(u(n.path+"/"+r+"/attachments",e));return Promise.all(a).then(r=>o.map((m,c)=>({parentObjectId:m,attachmentInfos:r[c].data.attachmentInfos})))})}export{g as executeAttachmentQuery,w as fetchAttachments,T as processAttachmentQueryResult};
