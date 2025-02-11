import{a as A,b as U}from"./chunk-EDY6B353.js";import{a as p}from"./chunk-UGVZ3EW2.js";import{c as z}from"./chunk-4MZSW4Z6.js";import{a as E}from"./chunk-BERIM72F.js";import{f as T}from"./chunk-XZ52TEBV.js";import{a as M,b as F}from"./chunk-WAPQB6I3.js";import{a as D}from"./chunk-XC4LDHG5.js";import{d as P}from"./chunk-S3ASAZCA.js";import{b as L}from"./chunk-GKUBZAEG.js";import{a as b}from"./chunk-7DCEI345.js";import{a as I}from"./chunk-ZG3FCPXY.js";import{a as W}from"./chunk-RIUAG34V.js";import{a as S}from"./chunk-WW7S4V24.js";import{c as l}from"./chunk-B72PB7U4.js";import{a as y,b as N}from"./chunk-644SLL4Y.js";import{a as v}from"./chunk-OO4IIGVK.js";import{a as x}from"./chunk-RNN6GAXL.js";import{a as u}from"./chunk-4IVMQ5PX.js";import{a as C}from"./chunk-CQUOQXLP.js";import{a as i}from"./chunk-NPIYHDQ7.js";import{a as c}from"./chunk-2HN33SWB.js";import{b as a}from"./chunk-BXR2KKYP.js";import{a as n}from"./chunk-YJ3RZNO6.js";import{a as d}from"./chunk-7W6RATG7.js";import{a as _}from"./chunk-HWN5REN7.js";import{b as h}from"./chunk-XTES2GPX.js";import{a as w}from"./chunk-YRTBL7EE.js";import{c as g}from"./chunk-3FPO2LOS.js";function f(o){o.fragment.uniforms.add(new u("texWaveNormal",e=>e.waveNormal),new u("texWavePerturbation",e=>e.wavePerturbation),new v("waveParams",e=>g(j,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new x("waveDirection",e=>h(B,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),o.include(A),o.fragment.code.add(a`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var j=w(),B=_();function R(o){let e=new C,{vertex:t,fragment:r}=e;N(t,o),e.include(D,o),e.attributes.add(d.POSITION,"vec3"),e.attributes.add(d.UV0,"vec2");let s=new v("waterColor",m=>m.color);if(o.output===i.Color&&o.draped)return e.varyings.add("vpos","vec3"),t.uniforms.add(s),t.main.add(a`
      if (waterColor.a < ${a.float(n)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(s),r.main.add(a`fragColor = waterColor;`),e;switch(o.output===i.Color&&(e.include(p,o),e.include(P,o),e.varyings.add("vuv","vec2"),e.varyings.add("vpos","vec3"),e.varyings.add("vnormal","vec3"),e.varyings.add("vtbnMatrix","mat3"),o.terrainDepthTest&&e.varyings.add("depth","float"),t.uniforms.add(s),t.main.add(a`
      if (waterColor.a < ${a.float(n)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);

      ${o.terrainDepthTest?"depth = (view * vec4(vpos, 1.0)).z;":""}

      gl_Position = transformPosition(proj, view, vpos);
      ${o.output===i.Color?"forwardLinearDepth();":""}`)),e.include(I,o),o.output){case i.Color:e.include(E,{pbrMode:T.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(f),e.include(z,o),e.include(U,o),e.include(l,o),e.include(L,o),r.uniforms.add(s,new c("timeElapsed",m=>m.timeElapsed),t.uniforms.get("view"),t.uniforms.get("localOrigin")),y(r,o),r.include(W),M(r),F(r),r.main.add(a`
        discardBySlice(vpos);
        ${o.terrainDepthTest?"terrainDepthTest(depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${o.receiveShadows?a`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        outputColorHighlightOID(fragColor, vpos);`);break;case i.Normal:e.include(p,o),e.include(f,o),e.include(l,o),e.varyings.add("vpos","vec3"),e.varyings.add("vuv","vec2"),t.uniforms.add(s),t.main.add(a`
        if (waterColor.a < ${a.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(new c("timeElapsed",m=>m.timeElapsed)),r.main.add(a`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case i.Highlight:e.include(S,o),e.varyings.add("vpos","vec3"),t.uniforms.add(s),t.main.add(a`
        if (waterColor.a < ${a.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),e.include(l,o),r.main.add(a`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case i.ObjectAndLayerIdColor:e.include(b,o),e.varyings.add("vpos","vec3"),t.uniforms.add(s),t.main.add(a`
        if (waterColor.a < ${a.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),e.include(l,o),r.main.add(a`discardBySlice(vpos);
outputObjectAndLayerIdColor();`)}return e}var De=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}));export{R as a,De as b};
