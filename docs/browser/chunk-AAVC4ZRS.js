import{M as c}from"./chunk-SVK2E2V5.js";import{a as n}from"./chunk-GNKF5TIB.js";import{k as m,n as f}from"./chunk-GMC3I5VG.js";import{r as a}from"./chunk-3IBUFXWY.js";import{g as i}from"./chunk-JEGVIFEP.js";function d(r,t,s){return i(this,null,function*(){let e=r.layer;if(c(e)){let l=yield e.fetchTile(t[0],t[1],t[2],s);if(f(s))throw a.getLogger(r).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),m();return l}let o=r.getTileUrl(t);n(e)&&e.refreshTimestamp&&(o+=`${o.includes("?")?"&":"?"}_ts=${e.refreshTimestamp}`);let h=r.hasMixedImageFormats?"image+type":"image";return s.requester.request(o,h,s)})}export{d as a};
