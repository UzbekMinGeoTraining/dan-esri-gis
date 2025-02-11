import{e as g}from"./chunk-VHVYC3RW.js";import{a as C}from"./chunk-NNNTRPDR.js";import{b as o}from"./chunk-J7UK2QPE.js";import{a as x}from"./chunk-GKUBZAEG.js";import{a as O}from"./chunk-UW734WOQ.js";import{a as z}from"./chunk-X7WNJQZZ.js";import{a as u}from"./chunk-QPPQKNYU.js";import{d as T}from"./chunk-644SLL4Y.js";import{a as d}from"./chunk-VI4TDFI5.js";import{a as l}from"./chunk-2HN33SWB.js";import{b as s}from"./chunk-BXR2KKYP.js";import{b as S,d as y}from"./chunk-OC7V2CEX.js";import{a as p}from"./chunk-7W6RATG7.js";import{l as f,n as h}from"./chunk-BDF7KEUQ.js";import{a}from"./chunk-BMVJCP2M.js";var c,m;(function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"})(c||(c={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(m||(m={}));var i=class extends C{constructor(){super(...arguments),this.space=c.Screen,this.anchor=m.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=O.None,this.emissionSource=x.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===c.Draped}};a([o({count:c.COUNT})],i.prototype,"space",void 0),a([o({count:m.COUNT})],i.prototype,"anchor",void 0),a([o()],i.prototype,"occluder",void 0),a([o()],i.prototype,"hasSlicePlane",void 0),a([o()],i.prototype,"writeDepth",void 0),a([o()],i.prototype,"hideOnShortSegments",void 0),a([o()],i.prototype,"hasCap",void 0),a([o()],i.prototype,"hasTip",void 0),a([o()],i.prototype,"vvSize",void 0),a([o()],i.prototype,"vvColor",void 0),a([o()],i.prototype,"vvOpacity",void 0),a([o()],i.prototype,"hasOccludees",void 0),a([o()],i.prototype,"terrainDepthTest",void 0),a([o()],i.prototype,"cullAboveTerrain",void 0);var k=8;function _(e,n){let t=e.vertex;t.uniforms.add(new l("intrinsicWidth",r=>r.width)),n.vvSize?(e.attributes.add(p.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new d("vvSizeMinSize",r=>r.vvSize.minSize),new d("vvSizeMaxSize",r=>r.vvSize.maxSize),new d("vvSizeOffset",r=>r.vvSize.offset),new d("vvSizeFactor",r=>r.vvSize.factor)),t.code.add(s`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(p.SIZE,"float"),t.code.add(s`float getSize(){
return intrinsicWidth * size;
}`)),n.vvOpacity?(e.attributes.add(p.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new u("vvOpacityValues",r=>r.vvOpacity.values,k),new u("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,k)),t.code.add(s`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(s`vec4 applyOpacity( vec4 color ){
return color;
}`),n.vvColor?(e.include(z,n),e.attributes.add(p.COLORFEATUREATTRIBUTE,"float"),t.code.add(s`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(p.COLOR,"vec4"),t.code.add(s`vec4 getColor(){
return applyOpacity(color);
}`))}var v=64,R=v/2,P=R/5,b=v/P,Y=.25;function J(e,n){let t=g(e,v,R,P),r=new S;return r.internalFormat=h.RGBA,r.width=v,r.height=v,r.wrapMode=f.CLAMP_TO_EDGE,new y(n,r,t)}function re(e,n){let t=e.vertex;T(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",b).code.add(s`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),n.space===c.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new l("perRenderPixelRatio",(r,M)=>M.camera.perRenderPixelRatio)),t.code.add(s`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}export{c as a,m as b,i as c,_ as d,v as e,R as f,b as g,Y as h,J as i,re as j};
