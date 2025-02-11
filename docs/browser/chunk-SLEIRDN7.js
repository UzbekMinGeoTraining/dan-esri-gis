import{a as d}from"./chunk-W3OGU5I2.js";import{a as f}from"./chunk-KQHYII76.js";import{a as u}from"./chunk-6I6DPRXI.js";import{a as s}from"./chunk-RNN6GAXL.js";import{a as c}from"./chunk-4IVMQ5PX.js";import{a as m}from"./chunk-CQUOQXLP.js";import{a as n}from"./chunk-2HN33SWB.js";import{b as o}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-HWN5REN7.js";import{b as i}from"./chunk-XTES2GPX.js";var v=16;function x(){let t=new m,a=t.fragment;return t.include(f),t.include(d),a.include(u),a.uniforms.add(new n("radius",(e,r)=>h(r.camera))).code.add(o`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),a.code.add(o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),a.uniforms.add(new c("normalMap",e=>e.normalTexture),new c("depthMap",e=>e.depthTexture),new n("projScale",e=>e.projScale),new c("rnm",e=>e.noiseTexture),new s("rnmScale",(e,r)=>i(p,r.camera.fullWidth/e.noiseTexture.descriptor.width,r.camera.fullHeight/e.noiseTexture.descriptor.height)),new n("intensity",e=>e.intensity),new s("screenSize",(e,r)=>i(p,r.camera.fullWidth,r.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),a.main.add(o`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o.int(v)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o.int(v)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function h(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}var p=l(),O=Object.freeze(Object.defineProperty({__proto__:null,build:x,getRadius:h},Symbol.toStringTag,{value:"Module"}));export{x as a,h as b,O as c};
