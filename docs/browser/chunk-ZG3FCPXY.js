import{a as n}from"./chunk-6I6DPRXI.js";import{a}from"./chunk-4IVMQ5PX.js";import{b as e}from"./chunk-BXR2KKYP.js";function m(t,{occlusionPass:r,terrainDepthTest:i,cullAboveTerrain:p}){i?(t.fragment.include(n),t.fragment.uniforms.add(new a("terrainDepthTexture",(h,o)=>o.terrainDepth?.attachment)).code.add(e`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?e`return fragmentDepth < linearDepth && depth < 1.0;`:e`if(fragmentDepth ${p?">":"<="} linearDepth) discard;`}
    }`)):r?t.fragment.code.add(e`#define terrainDepthTest(fragmentDepth) false`):t.fragment.code.add(e`#define terrainDepthTest(fragmentDepth) {}`)}export{m as a};
