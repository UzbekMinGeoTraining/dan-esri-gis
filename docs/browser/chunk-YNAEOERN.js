import{a as T}from"./chunk-KYOBP2SZ.js";import{a as x,b as m}from"./chunk-J7UK2QPE.js";import{a as z}from"./chunk-W3OGU5I2.js";import{a as b}from"./chunk-OO4IIGVK.js";import{a as w}from"./chunk-KQHYII76.js";import{a as v}from"./chunk-4IVMQ5PX.js";import{a as g}from"./chunk-CQUOQXLP.js";import{a as r}from"./chunk-2HN33SWB.js";import{a as C,b as i}from"./chunk-BXR2KKYP.js";import{b as f,c as S}from"./chunk-YRTBL7EE.js";import{a as d}from"./chunk-BMVJCP2M.js";var o;(function(e){e[e.Gradient=0]="Gradient",e[e.Threshold=1]="Threshold",e[e.COUNT=2]="COUNT"})(o||(o={}));var n=class extends x{constructor(){super(...arguments),this.visualization=o.Gradient,this.bandsEnabled=!1}};d([m({count:o.COUNT})],n.prototype,"visualization",void 0),d([m()],n.prototype,"bandsEnabled",void 0);var p=class extends C{constructor(t){super(),this._data=t,this.sampleScale=0,this.opacityFromElevation=1,this.color=f(y),this.bandSize=.1,this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}},y=S(.01,0,.25,1);function P(e){let t=new g,s=t.fragment;t.include(z),t.include(w);let{visualization:u,bandsEnabled:c}=e;s.constants.add("inverseSampleValue","float",T),s.uniforms.add(new v("shadowCastMap",a=>a.shadowCastMap),new r("sampleScale",a=>a.sampleScale),new r("opacityFromElevation",a=>a.opacityFromElevation),new b("uColor",a=>a.color));let l=u===o.Gradient,h=u===o.Threshold;return l&&c?s.uniforms.add(new r("bandSize",a=>a.bandSize)):h&&s.uniforms.add(new r("threshold",a=>a.threshold)),s.main.add(i`
    float record = texture(shadowCastMap, uv).r;
    float pixelSamples = record * inverseSampleValue;

    fragColor = vec4(0.0);
    if (pixelSamples < 1.0) {
      return;
    }

    float strength = pixelSamples * sampleScale;
    ${h?i`if (strength <= threshold) return;`:""}
    ${l&&c?i`strength = ceil(strength / bandSize) * bandSize;`:""}
    fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${l?"* strength":""});
  `),t}var D=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:p,build:P},Symbol.toStringTag,{value:"Module"}));export{n as a,p as b,P as c,D as d};
