import{a as k,b as h}from"./chunk-R6S6A5GA.js";import{a as V}from"./chunk-RRDM7P6F.js";import{a as p}from"./chunk-DPZGANVI.js";import{a as g,b as K}from"./chunk-B7IARA3F.js";import{h as s}from"./chunk-2JF6YUJG.js";import{Q as e}from"./chunk-GGZQ5GCM.js";import{J as S,U as r}from"./chunk-TFUPB3ZG.js";import{a as o}from"./chunk-BMVJCP2M.js";import{b as t}from"./chunk-3IBUFXWY.js";import{a as c,b as y}from"./chunk-JEGVIFEP.js";var j,b=j=class extends s{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new j({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};o([e({type:String,json:{write:!0}})],b.prototype,"field",void 0),o([e({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"minValue",void 0),o([e({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"maxValue",void 0),b=j=o([r("esri.renderers.support.pointCloud.ColorModulation")],b);var B=b;var C=new g({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),x=class extends s{};o([e({type:C.apiValues,readOnly:!0,nonNullable:!0,json:{type:C.jsonValues,read:!1,write:C.write}})],x.prototype,"type",void 0),x=o([r("esri.renderers.support.pointCloud.PointSizeAlgorithm")],x);var v=x;var z,T=z=class extends v{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new z({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};o([p({pointCloudFixedSizeAlgorithm:"fixed-size"})],T.prototype,"type",void 0),o([e({type:Number,nonNullable:!0,json:{write:!0}})],T.prototype,"size",void 0),o([e({type:Boolean,json:{write:!0}})],T.prototype,"useRealWorldSymbolSizes",void 0),T=z=o([r("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],T);var M=T;var N,w=N=class extends v{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new N({scaleFactor:this.scaleFactor})}};o([p({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),o([e({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=N=o([r("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);var q=w;var _={key:"type",base:v,typeMap:{"fixed-size":M,splat:q}};var O=K()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),n=class extends s{constructor(l){super(l),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:t(this.pointSizeAlgorithm),colorModulation:t(this.colorModulation),pointsPerInch:t(this.pointsPerInch)}}};o([e({type:O.apiValues,readOnly:!0,nonNullable:!0,json:{type:O.jsonValues,read:!1,write:O.write}})],n.prototype,"type",void 0),o([e({types:_,json:{write:!0}})],n.prototype,"pointSizeAlgorithm",void 0),o([e({type:B,json:{write:!0}})],n.prototype,"colorModulation",void 0),o([e({json:{write:!0},nonNullable:!0,type:Number})],n.prototype,"pointsPerInch",void 0),n=o([r("esri.renderers.PointCloudRenderer")],n),function(l){l.fieldTransformTypeKebabDict=new g({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(n||(n={}));var i=n;var I,a=I=class extends s{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new I({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:t(this.color)})}};o([e({type:String,json:{write:!0}})],a.prototype,"description",void 0),o([e({type:String,json:{write:!0}})],a.prototype,"label",void 0),o([e({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0),o([e({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0),o([e({type:V,json:{type:[S],write:!0}})],a.prototype,"color",void 0),a=I=o([r("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a);var F=a;var R,m=R=class extends i{constructor(l){super(l),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new R(y(c({},this.cloneProperties()),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:t(this.colorClassBreakInfos),legendOptions:t(this.legendOptions)}))}};o([p({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),o([e({json:{write:!0},type:String})],m.prototype,"field",void 0),o([e({type:h,json:{write:!0}})],m.prototype,"legendOptions",void 0),o([e({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),o([e({type:[F],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=R=o([r("esri.renderers.PointCloudClassBreaksRenderer")],m);var me=m;var P,u=P=class extends i{constructor(l){super(l),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new P(y(c({},this.cloneProperties()),{field:t(this.field),fieldTransformType:t(this.fieldTransformType),stops:t(this.stops),legendOptions:t(this.legendOptions)}))}};o([p({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),o([e({json:{write:!0},type:String})],u.prototype,"field",void 0),o([e({type:h,json:{write:!0}})],u.prototype,"legendOptions",void 0),o([e({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),o([e({type:[k],json:{write:!0}})],u.prototype,"stops",void 0),u=P=o([r("esri.renderers.PointCloudStretchRenderer")],u);var xe=u;var A,f=A=class extends s{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new A({description:this.description,label:this.label,values:t(this.values),color:t(this.color)})}};o([e({type:String,json:{write:!0}})],f.prototype,"description",void 0),o([e({type:String,json:{write:!0}})],f.prototype,"label",void 0),o([e({type:[String],json:{write:!0}})],f.prototype,"values",void 0),o([e({type:V,json:{type:[S],write:!0}})],f.prototype,"color",void 0),f=A=o([r("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],f);var U=f;var D,d=D=class extends i{constructor(l){super(l),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new D(y(c({},this.cloneProperties()),{field:t(this.field),fieldTransformType:t(this.fieldTransformType),colorUniqueValueInfos:t(this.colorUniqueValueInfos),legendOptions:t(this.legendOptions)}))}};o([p({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],d.prototype,"type",void 0),o([e({json:{write:!0},type:String})],d.prototype,"field",void 0),o([e({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),o([e({type:[U],json:{write:!0}})],d.prototype,"colorUniqueValueInfos",void 0),o([e({type:h,json:{write:!0}})],d.prototype,"legendOptions",void 0),d=D=o([r("esri.renderers.PointCloudUniqueValueRenderer")],d);var He=d;export{i as a,me as b,xe as c,He as d};
