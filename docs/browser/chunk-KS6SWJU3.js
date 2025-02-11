import{a as m,b as R,c as ot}from"./chunk-E3LKQDEM.js";import{a as tt,b as at}from"./chunk-WAPQB6I3.js";import{a as M}from"./chunk-NH7OOX2I.js";import{a as L}from"./chunk-AOTWUAUY.js";import{a as T}from"./chunk-VI4TDFI5.js";import{a as b}from"./chunk-2HN33SWB.js";import{a as Z}from"./chunk-523X5JOP.js";import{b as n}from"./chunk-BXR2KKYP.js";import{a as Q}from"./chunk-B7GIKKEW.js";import{a as X,c as I}from"./chunk-IZRBPB5G.js";import{a as K,d as E}from"./chunk-XXOIKNT6.js";import{a as D}from"./chunk-6GGK7PRJ.js";import{a as z,b as h,e as $,n as J,r as V,u as Y}from"./chunk-2HUIJUS4.js";import{j as A}from"./chunk-5MNDZ6BX.js";import{a as u}from"./chunk-DPZGANVI.js";import{a as F,c as x}from"./chunk-PYQRTZNZ.js";import{b as G}from"./chunk-5PTS4JDF.js";import{a as v}from"./chunk-VPXBKZQM.js";import{h as l}from"./chunk-2JF6YUJG.js";import{Q as s}from"./chunk-GGZQ5GCM.js";import{U as d}from"./chunk-TFUPB3ZG.js";import{a as e}from"./chunk-BMVJCP2M.js";var H,g=H=class extends l{constructor(o){super(o),this.type="cloudy",this.cloudCover=.5}clone(){return new H({cloudCover:this.cloudCover})}};e([u({cloudy:"cloudy"})],g.prototype,"type",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],g.prototype,"cloudCover",void 0),g=H=e([d("esri.views.3d.environment.CloudyWeather")],g);var et=g;var W,_=W=class extends l{constructor(o){super(o),this.type="foggy",this.fogStrength=.5}clone(){return new W({fogStrength:this.fogStrength})}};e([u({foggy:"foggy"})],_.prototype,"type",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],_.prototype,"fogStrength",void 0),_=W=e([d("esri.views.3d.environment.FoggyWeather")],_);var rt=_;var U,y=U=class extends l{constructor(o){super(o),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new U({cloudCover:this.cloudCover,precipitation:this.precipitation})}};e([u({rainy:"rainy"})],y.prototype,"type",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],y.prototype,"cloudCover",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],y.prototype,"precipitation",void 0),y=U=e([d("esri.views.3d.environment.RainyWeather")],y);var it=y;var k,f=k=class extends l{constructor(o){super(o),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new k({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};e([u({snowy:"snowy"})],f.prototype,"type",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"cloudCover",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"precipitation",void 0),e([s({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],f.prototype,"snowCover",void 0),f=k=e([d("esri.views.3d.environment.SnowyWeather")],f);var st=f;var j,P=j=class extends l{constructor(o){super(o),this.type="sunny",this.cloudCover=.5}clone(){return new j({cloudCover:this.cloudCover})}};e([u({sunny:"sunny"})],P.prototype,"type",void 0),e([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],P.prototype,"cloudCover",void 0),P=j=e([d("esri.views.3d.environment.SunnyWeather")],P);var q=P;var ut={key:"type",base:q,typeMap:{sunny:q,cloudy:et,rainy:it,snowy:st,foggy:rt}},pt=Object.keys(ut.typeMap);function ga(o,a){return!!pt.includes(o)||(a.error(`"${o}" is not a valid weather type`),!1)}var S=1e4,nt=1e5;var ct=class{constructor(){this.startTime=0,this._data=D(null),this._readChannels=R.RG,this.parallax=new N,this.parallaxNew=new N,this._anchorPoint=F(),this._fadeState=D(t.HIDE),this._fadeFactor=D(1)}get data(){return this._data.value}set data(a){this._data.value=a}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case t.HIDE:return 0;case t.FADE_OUT:return 1-this.fadeFactor;case t.FADE_IN:return this.fadeFactor;case t.SHOW:case t.CROSS_FADE:return 1}}fade(a,i,c){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=c?G((i-this.startTime)/(mt*c),0,1):1,this.fadeFactor===1&&this._endFade()),this._evaluateState(a,i),this._updateParallax(a)}_evaluateState(a,i){let c=a.relativeElevation,w=this._updateAnchorPoint(a);(c>1.7*S||c<-S||w>lt)&&this.opacity>0?this._startFade(t.HIDE,i):this.isFading||(c>S||c<-.35*S||w>ft*lt?this.opacity>0&&this._startFade(t.FADE_OUT,i):ot(this.data)&&(this.opacity===0?this._startFade(t.FADE_IN,i):this.data.state===m.Ready&&(this.fadeState===t.SHOW?this._startFade(t.CROSS_FADE,i):this._startFade(t.SHOW,i))))}_updateParallax(a){let i=V(a.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(i-v.radius*v.radius,0))/Math.sqrt(i),I(dt,this.parallax.anchorPoint,C),A(this.parallax.transform,E,C[3],C),I(dt,this.parallaxNew.anchorPoint,C),A(this.parallaxNew.transform,E,C[3],C)}_updateAnchorPoint(a){return Y(this._anchorPoint,a.eye),J(this._anchorPoint,this._anchorPoint,v.radius),this.fadeState===t.HIDE&&this.data?.state===m.Ready?(h(this.parallax.anchorPoint,this._anchorPoint),0):z($(ht,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(a,i){switch(this._fadeState.value=a,this.startTime=i,a){case t.CROSS_FADE:this.requestFade(),this._switchReadChannels(),h(this.parallaxNew.anchorPoint,this._anchorPoint);break;case t.FADE_IN:this.requestFade(),this._switchReadChannels(),h(this.parallax.anchorPoint,this._anchorPoint),h(this.parallaxNew.anchorPoint,this._anchorPoint);break;case t.FADE_OUT:this.requestFade();break;case t.SHOW:this._switchReadChannels(),h(this.parallax.anchorPoint,this._anchorPoint),h(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case t.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==m.Ready&&(this.data.state=m.Idle),this.fadeState){case t.CROSS_FADE:h(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=t.SHOW;break;case t.FADE_IN:this._fadeState.value=t.SHOW;break;case t.FADE_OUT:this._fadeState.value=t.HIDE;break;case t.SHOW:case t.HIDE:break;default:this.fadeState}}_switchReadChannels(){this.data?.state===m.Ready&&(this._readChannels=1-this._readChannels,this.data.state=m.Fading)}get isFading(){return this.fadeState===t.FADE_OUT||this.fadeState===t.FADE_IN||this.fadeState===t.CROSS_FADE}},t;(function(o){o[o.HIDE=0]="HIDE",o[o.FADE_IN=1]="FADE_IN",o[o.SHOW=2]="SHOW",o[o.CROSS_FADE=3]="CROSS_FADE",o[o.FADE_OUT=4]="FADE_OUT"})(t||(t={}));var N=class{constructor(){this.anchorPoint=F(),this.radiusCurvatureCorrection=0,this.transform=K()}},dt=x(0,0,1),C=X(),ht=F(),mt=1.25,ft=.5,lt=2e5;var O=class extends Z{constructor(a,i){super(a,"samplerCube",Q.Pass,(c,w,B)=>c.bindTexture(a,i(w,B)))}};function Qa(o){let a=o.fragment;a.constants.add("radiusCloudsSquared","float",vt).code.add(n`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),a.uniforms.add(new b("radiusCurvatureCorrection",(p,r)=>r.clouds.parallax.radiusCurvatureCorrection)).code.add(n`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),a.code.add(n`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),tt(a),at(a);let i=x(.28,.175,.035);a.constants.add("RIM_COLOR","vec3",i),a.code.add(n`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${n.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${n.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${n.float(.2)} * pow(dirDotLight, ${n.float(10)}) * (1. - pow(sunsetTransition, ${n.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),a.uniforms.add(new M("readChannelsRG",(p,r)=>r.clouds.readChannels===R.RG),new O("cubeMap",(p,r)=>r.clouds.data?.cubeMap?.colorTexture??null)).code.add(n`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),a.uniforms.add(new T("anchorPoint",(p,r)=>r.clouds.parallax.anchorPoint),new T("anchorPointNew",(p,r)=>r.clouds.parallaxNew.anchorPoint),new L("rotationClouds",(p,r)=>r.clouds.parallax.transform),new L("rotationCloudsNew",(p,r)=>r.clouds.parallaxNew.transform),new b("cloudsOpacity",(p,r)=>r.clouds.opacity),new b("fadeFactor",(p,r)=>r.clouds.fadeFactor),new M("crossFade",(p,r)=>r.clouds.fadeState===t.CROSS_FADE)).code.add(n`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}var vt=(v.radius+nt)**2;export{q as a,ut as b,ga as c,S as d,ct as e,Qa as f};
