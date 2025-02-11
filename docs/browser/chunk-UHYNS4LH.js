import{a as c}from"./chunk-Z3USGHSR.js";import{a as u}from"./chunk-KQHYII76.js";import{a as d}from"./chunk-6I6DPRXI.js";import{a as s}from"./chunk-4IVMQ5PX.js";import{a as p}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-GXSLPADW.js";import{a as i}from"./chunk-2HN33SWB.js";import{b as r}from"./chunk-BXR2KKYP.js";var a=4;function w(){let e=new p,o=e.fragment;e.include(u);let f=(a+1)/2,m=1/(2*f*f);return o.include(d),o.uniforms.add(new s("depthMap",t=>t.depthTexture),new n("tex",t=>t.colorTexture),new c("blurSize",t=>t.blurSize),new i("projScale",(t,b)=>{let l=b.camera.distance;return l>5e4?Math.max(0,t.projScale-(l-5e4)):t.projScale})),o.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),o.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(a)}; r <= ${r.int(a)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var j=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{w as a,j as b};
