import{h as u}from"./chunk-2JF6YUJG.js";import{Q as e}from"./chunk-GGZQ5GCM.js";import{J as l,U as d}from"./chunk-TFUPB3ZG.js";import{a as o}from"./chunk-BMVJCP2M.js";function f(r){let{exifInfo:i,exifName:n,tagName:s}=r;if(!i||!n||!s)return null;let a=i.find(m=>m.name===n);return a?y({tagName:s,tags:a.tags}):null}function y(r){let{tagName:i,tags:n}=r;return!n||!i?null:n.find(a=>a.name===i)?.value||null}var p,I={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}},t=p=class extends u{constructor(r){super(r),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){let{exifInfo:r}=this,i=f({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:r});return I[i]||null}clone(){return new p({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([e({type:String})],t.prototype,"contentType",void 0),o([e()],t.prototype,"exifInfo",void 0),o([e({readOnly:!0})],t.prototype,"orientationInfo",null),o([e({type:l})],t.prototype,"id",void 0),o([e({type:String})],t.prototype,"globalId",void 0),o([e({type:String})],t.prototype,"keywords",void 0),o([e({type:String})],t.prototype,"name",void 0),o([e({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),o([e({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([e({type:l})],t.prototype,"size",void 0),o([e({json:{read:!1}})],t.prototype,"url",void 0),t=p=o([d("esri.rest.query.support.AttachmentInfo")],t);var S=t;export{S as a};
