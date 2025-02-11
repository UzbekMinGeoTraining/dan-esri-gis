import{a as l,b as C,d as D,e as v,f as T,h as M,j as O}from"./chunk-RCCESRES.js";import{b as N}from"./chunk-GKUBZAEG.js";import{a as k}from"./chunk-ZG3FCPXY.js";import{a as L}from"./chunk-RIUAG34V.js";import{a as w}from"./chunk-WW7S4V24.js";import{c as g}from"./chunk-B72PB7U4.js";import{b as P,c as x,d as y}from"./chunk-644SLL4Y.js";import{a as d}from"./chunk-OO4IIGVK.js";import{a as S}from"./chunk-RNN6GAXL.js";import{a as z}from"./chunk-4IVMQ5PX.js";import{a as b}from"./chunk-CQUOQXLP.js";import{a as f}from"./chunk-H6LJ2DCJ.js";import{a as m}from"./chunk-NPIYHDQ7.js";import{a as u}from"./chunk-AOTWUAUY.js";import{a as h}from"./chunk-2HN33SWB.js";import{b as a}from"./chunk-BXR2KKYP.js";import{a as c}from"./chunk-7W6RATG7.js";function W(e){let r=new b,p=e.terrainDepthTest&&e.output===m.Color,i=e.space===l.World;r.include(D,e),r.include(O,e);let{vertex:o,fragment:t}=r;return t.include(f),P(o,e),r.attributes.add(c.POSITION,"vec3"),r.attributes.add(c.PREVPOSITION,"vec3"),r.attributes.add(c.UV0,"vec2"),r.varyings.add("vColor","vec4"),r.varyings.add("vpos","vec3"),r.varyings.add("vUV","vec2"),r.varyings.add("vSize","float"),p&&r.varyings.add("depth","float"),e.hasTip&&r.varyings.add("vLineWidth","float"),o.uniforms.add(new S("nearFar",(n,s)=>s.camera.nearFar),new d("viewport",(n,s)=>s.camera.fullViewport)),o.code.add(a`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(a`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),i?(r.attributes.add(c.NORMAL,"vec3"),x(o),o.constants.add("tiltThreshold","float",.7),o.code.add(a`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):o.code.add(a`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),o.code.add(a`
      #define vecN ${i?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${i?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===C.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===l.Screen&&(o.uniforms.add(new u("inverseProjectionMatrix",(n,s)=>s.camera.inverseProjectionMatrix)),o.code.add(a`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),o.code.add(a`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),o.uniforms.add(new h("perScreenPixelRatio",(n,s)=>s.camera.perScreenPixelRatio)),o.code.add(a`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),y(o),o.main.add(a`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${i?a`${e.hideOnShortSegments?a`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:a`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${e.space===l.Screen?a`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${p?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${i?"":"vUV *= displacedPosScreen.w;"}
      ${e.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),p&&r.include(k,e),r.include(g,e),r.include(N,e),t.uniforms.add(new d("intrinsicColor",n=>n.color),new z("tex",n=>n.markerTexture)),t.include(L),t.constants.add("texelSize","float",1/v),t.code.add(a`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&t.constants.add("relativeMarkerSize","float",T/v).constants.add("relativeTipLineWidth","float",M).code.add(a`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${i?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),r.include(w,e),t.main.add(a`
    discardBySlice(vpos);
    ${p?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${i?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),r}var ee=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}));export{W as a,ee as b};
