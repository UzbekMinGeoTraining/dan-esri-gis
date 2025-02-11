import{b as x,c as A,d as y}from"./chunk-RBWI4VLW.js";import{c as h}from"./chunk-ECBUS54L.js";import{c as v}from"./chunk-B72PB7U4.js";import{a as s}from"./chunk-OO4IIGVK.js";import{a as z}from"./chunk-6I6DPRXI.js";import{a as d}from"./chunk-RNN6GAXL.js";import{a as u}from"./chunk-4IVMQ5PX.js";import{a as w}from"./chunk-CQUOQXLP.js";import{a as m}from"./chunk-2HN33SWB.js";import{b as t,c as n}from"./chunk-BXR2KKYP.js";import{a as S}from"./chunk-7W6RATG7.js";import{a as g}from"./chunk-HWN5REN7.js";import{b as f}from"./chunk-XTES2GPX.js";import{f as p}from"./chunk-YRTBL7EE.js";function P(e){e.include(z),e.uniforms.add(new u("geometryDepthTexture",(i,a)=>a.geometryDepth?.attachment)),e.code.add(t`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`)}function D(e){let i=new w,{vertex:a,fragment:l}=i,{terrainDepthTest:c}=e;return a.include(A),i.include(x,e),i.include(v,e),i.attributes.add(S.UV0,"vec2"),a.uniforms.add(new s("viewport",(r,o)=>o.camera.fullViewport),new m("lineSize",(r,o)=>r.size>0?Math.max(1,r.size)*o.camera.pixelRatio:0),new d("pixelToNDC",(r,o)=>f(b,2/o.camera.fullViewport[2],2/o.camera.fullViewport[3])),new m("borderSize",(r,o)=>r.borderColor?o.camera.pixelRatio:0),new d("screenOffset",(r,o)=>f(b,r.horizontalScreenOffset*o.camera.pixelRatio,0))),i.varyings.add("coverageSampling","vec4"),i.varyings.add("lineSizes","vec2"),c&&i.varyings.add("depth","float"),e.occlusionTestEnabled&&i.include(y),e.hasScreenSizePerspective&&h(a),a.main.add(t`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${n(e.occlusionTestEnabled,t`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${e.hasScreenSizePerspective?t`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:"vec2 screenOffsetScaled = screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${n(c,"depth = posView.z;")}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${n(e.hudDepth,e.hudDepthAlignStart?"endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);":"startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.hasScreenSizePerspective?t`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);`:t`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`),l.uniforms.add(new s("uColor",r=>r.color??p),new s("borderColor",r=>r.borderColor??p)),c&&(l.include(P,e),l.uniforms.add(new d("inverseViewport",(r,o)=>o.inverseViewport))),l.main.add(t`
    ${n(c,"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }")}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${n(!e.hudDepth,t`vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
           fragColor = vec4(finalRgb, finalAlpha);`)}`),i}var b=g(),Z=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}));export{D as a,Z as b};
