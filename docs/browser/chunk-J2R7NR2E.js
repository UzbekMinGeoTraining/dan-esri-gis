import{a}from"./chunk-VPH54J3G.js";import{b as I}from"./chunk-GKUDWGVQ.js";import{a as k}from"./chunk-63EK7JRZ.js";import{d as L}from"./chunk-3M7VXIQH.js";import{y as x}from"./chunk-N27U3N2T.js";import{a as j}from"./chunk-4R5NBZMW.js";import{a as P}from"./chunk-NDYVXEZ5.js";import{a as T}from"./chunk-CMMPCPP5.js";import{a as g}from"./chunk-GZXWFBZI.js";import{h as v}from"./chunk-2JF6YUJG.js";import{Q as o}from"./chunk-GGZQ5GCM.js";import{I as _,U as s}from"./chunk-TFUPB3ZG.js";import{a as r}from"./chunk-BMVJCP2M.js";import{b as h}from"./chunk-3IBUFXWY.js";import{a as b,b as w}from"./chunk-JEGVIFEP.js";var u=class extends v{constructor(e){super(e),this.description=null,this.label=null,this.type=null}};r([o({type:String,json:{write:!0}})],u.prototype,"description",void 0),r([o({type:String,json:{write:!0}})],u.prototype,"label",void 0),r([o()],u.prototype,"type",void 0),u=r([s("esri.tables.elements.AttributeTableElement")],u);var n=u;var J,d=J=class extends n{constructor(e){super(e),this.displayType="auto",this.type="attachment"}clone(){return new J({description:this.description,displayType:this.displayType,label:this.label})}};r([o({type:["auto"],json:{write:!0}})],d.prototype,"displayType",void 0),r([o({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=J=r([s("esri.tables.elements.AttributeTableAttachmentElement")],d);var D=d;var M,c=M=class extends n{constructor(e){super(e),this.fieldName=null,this.type="field"}clone(){return new M({description:this.description,fieldName:this.fieldName,label:this.label})}};r([o({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),r([o({type:String,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=M=r([s("esri.tables.elements.AttributeTableFieldElement")],c);var C=c;var G,f=G=class extends n{constructor(e){super(e),this.relationshipId=null,this.type="relationship"}clone(){return new G({description:this.description,label:this.label,relationshipId:this.relationshipId})}};r([o({type:Number,json:{write:!0}})],f.prototype,"relationshipId",void 0),r([o({type:["relationship"],json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=G=r([s("esri.tables.elements.AttributeTableRelationshipElement")],f);var B=f;function S(e){return{typesWithGroup:{base:n,key:"type",typeMap:{attachment:D,field:C,group:e,relationship:B}},typesWithoutGroup:{base:n,key:"type",typeMap:{attachment:D,field:C,relationship:B}}}}function E(e,t,i=!0){if(!e)return null;let y=i?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(l=>y[l.type]).map(l=>y[l.type].fromJSON(l))}function N(e,t,i=!0){if(!e)return null;let y=i?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(l=>y[l.type]).map(l=>l.toJSON())}function O(e,t,i=!0){return e?e.map(y=>_(i?t.typesWithGroup:t.typesWithoutGroup,y)):null}var A,p=A=class extends n{constructor(e){super(e),this.elements=null,this.type="group"}castElements(e){return O(e,W,!1)}readElements(e,t){return E(t.attributeTableElements,W,!1)}writeElements(e,t){t.attributeTableElements=N(e,W,!1)}clone(){return new A({description:this.description,elements:h(this.elements),label:this.label})}};r([o({json:{write:!0}})],p.prototype,"elements",void 0),r([g("elements")],p.prototype,"castElements",null),r([j("elements",["attributeTableElements"])],p.prototype,"readElements",null),r([T("elements")],p.prototype,"writeElements",null),r([o({type:String,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=A=r([s("esri.tables.elements.AttributeTableGroupElement")],p);var W=S(p),z=p;var F,R=S(z),m=F=class extends v{constructor(e){super(e),this.elements=null,this.orderByFields=null}castElements(e){return O(e,R)}readElements(e,t){return E(t.attributeTableElements,R)}writeElements(e,t){t.attributeTableElements=N(e,R)}clone(){return new F({elements:h(this.elements),orderByFields:this.orderByFields})}};r([o({json:{write:!0}})],m.prototype,"elements",void 0),r([g("elements")],m.prototype,"castElements",null),r([j("elements",["attributeTableElements"])],m.prototype,"readElements",null),r([T("elements")],m.prototype,"writeElements",null),r([o({type:[Object],json:{write:!0}})],m.prototype,"orderByFields",void 0),m=F=r([s("esri.tables.AttributeTableTemplate")],m);var q=m;var pt={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:a}}},lt={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,i){t[i]=!e}}}},mt={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:a}}},yt={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:L}}},ut={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:a}}},dt={value:null,type:k,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:a}}};function ct(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}var H={write:{enabled:!0,layerContainerTypes:a},read:!0},V={type:Number,json:{origins:{"web-document":H,"portal-item":{write:!0}}}},ft=w(b({},V),{json:w(b({},V.json),{origins:{"web-document":w(b({},H),{write:{enabled:!0,layerContainerTypes:a,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,i)=>i&&i.origin!=="service"||!t.drawingInfo||t.drawingInfo.transparency===void 0?t.layerDefinition?.drawingInfo&&t.layerDefinition.drawingInfo.transparency!==void 0?I(t.layerDefinition.drawingInfo.transparency):void 0:I(t.drawingInfo.transparency)}})}),bt={type:x,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{let i=x.fromJSON(e);return t.spatialReference!=null&&typeof t.spatialReference=="object"&&(i.spatialReference=P.fromJSON(t.spatialReference)),i}}}},read:!1}},wt={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},ht={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:a}}},name:"layerDefinition.minScale",write:!0}},vt={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:a}}},name:"layerDefinition.maxScale",write:!0}},gt={json:{write:{ignoreOrigin:!0,layerContainerTypes:a},origins:{"web-map":{read:!1,write:!1}}}},Tt={type:q,json:{name:"attributeTableInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}};export{q as a,pt as b,lt as c,mt as d,yt as e,ut as f,dt as g,ct as h,V as i,ft as j,bt as k,wt as l,ht as m,vt as n,gt as o,Tt as p};
