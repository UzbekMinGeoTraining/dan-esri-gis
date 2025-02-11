import{b as M,c as x,d as q}from"./chunk-RBWI4VLW.js";import{a as V}from"./chunk-X7WNJQZZ.js";import{a as U}from"./chunk-7DCEI345.js";import{a as L}from"./chunk-ZG3FCPXY.js";import{a as I}from"./chunk-RIUAG34V.js";import{a as g}from"./chunk-G5SIQY64.js";import{a as E}from"./chunk-WW7S4V24.js";import{a as B,b as R,c as H}from"./chunk-ECBUS54L.js";import{c as $}from"./chunk-B72PB7U4.js";import{d as T}from"./chunk-644SLL4Y.js";import{a as f}from"./chunk-OO4IIGVK.js";import{a as S}from"./chunk-RNN6GAXL.js";import{a as z}from"./chunk-4IVMQ5PX.js";import{a as _}from"./chunk-CQUOQXLP.js";import{a as F}from"./chunk-C2ONI6UP.js";import{a as y}from"./chunk-H6LJ2DCJ.js";import{a as p}from"./chunk-NPIYHDQ7.js";import{a as v}from"./chunk-2HN33SWB.js";import{b as o,c as i}from"./chunk-BXR2KKYP.js";import{a as d}from"./chunk-YJ3RZNO6.js";import{a as c}from"./chunk-7W6RATG7.js";import{a as D}from"./chunk-HWN5REN7.js";import{a as O,b as m}from"./chunk-XTES2GPX.js";import{c as j,f as w}from"./chunk-YRTBL7EE.js";import{a as A}from"./chunk-VPXBKZQM.js";function k(e,t){let{vertex:l,fragment:a}=e;e.include(L,t),l.include(x),t.terrainDepthTest&&e.varyings.add("depth","float"),l.main.add(o`
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.terrainDepthTest?o`depth = projectAux.posView.z;`:""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  `),a.main.add(o`fragColor = vec4(1);
if(terrainDepthTest(depth)) {
fragColor.g = 0.5;
}`)}var G={occludedFadeFactor:.6};function W(e){let t=new _,l=e.signedDistanceFieldEnabled;if(t.include(M,e),t.include($,e),e.occlusionPass)return t.include(k,e),t;let{vertex:a,fragment:s}=t;t.include(B),t.include(V,e),t.include(U,e),t.include(q),s.include(y),s.include(I),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),t.varyings.add("voccluded","float"),a.uniforms.add(new f("viewport",(r,n)=>n.camera.fullViewport),new S("screenOffset",(r,n)=>m(J,2*r.screenOffset[0]*n.camera.pixelRatio,2*r.screenOffset[1]*n.camera.pixelRatio)),new S("anchorPosition",r=>N(r)),new f("materialColor",r=>r.color),new v("materialRotation",r=>r.rotation)),T(a),l&&(a.uniforms.add(new f("outlineColor",r=>r.outlineColor)),s.uniforms.add(new f("outlineColor",r=>Z(r)?r.outlineColor:w),new v("outlineSize",r=>Z(r)?r.outlineSize:0))),e.horizonCullingEnabled&&a.uniforms.add(new F("pointDistanceSphere",(r,n)=>{let h=n.camera.eye,b=r.origin;return j(b[0]-h[0],b[1]-h[1],b[2]-h[2],A.radius)})),e.pixelSnappingEnabled&&a.include(x),e.hasScreenSizePerspective&&(R(a),H(a)),e.debugDrawLabelBorder&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(c.UV0,"vec2"),t.attributes.add(c.COLOR,"vec4"),t.attributes.add(c.SIZE,"vec2"),t.attributes.add(c.ROTATION,"float"),t.attributes.add(c.FEATUREATTRIBUTE,"vec4"),a.code.add(e.horizonCullingEnabled?o`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:o`bool behindHorizon(vec3 posModel) { return false; }`),a.main.add(o`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${i(e.hasScreenSizePerspective,o`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,o`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${i(e.vvSize,o`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);let K=o`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${i(e.hasRotation,o`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,Q=e.pixelSnappingEnabled?l?o`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:o`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:o`posProj += quadOffset;`;a.main.add(o`
    ${i(e.occlusionTestEnabled,o`
      if (!visible) {
        vtc = vec2(0.0);
        ${i(e.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
    ${K}
    ${e.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${i(e.output===p.ObjectAndLayerIdColor,o`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${o.float(d)};
    ${i(l,`alphaDiscard = alphaDiscard && outlineColor.a < ${o.float(d)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${Q}
      gl_Position = posProj;
    }

    vtc = uv;

    ${i(e.debugDrawLabelBorder,o`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),s.uniforms.add(new z("tex",r=>r.texture)),e.occludedFragmentFade&&(s.uniforms.add(new z("depthMap",(r,n)=>n.mainDepth)),s.uniforms.add(new v("fadeFactor",()=>G.occludedFadeFactor)));let C=e.debugDrawLabelBorder?o`(isBorder > 0.0 ? 0.0 : ${o.float(d)})`:o.float(d),u=e.output===p.Highlight,P=o`
    ${i(e.debugDrawLabelBorder,o`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${i(e.sampleSignedDistanceFieldTexelCenter,o`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,o`vec2 samplePos = vtc;`)}

    ${l?o`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${C} ||
          fillPixelColor.a + outlinePixelColor.a < ${o.float(d)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${i(!u,o`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${C}) {
          discard;
        }

        ${i(!u,o`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:o`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${C}) {
            discard;
          }
          ${i(!u,o`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${i(e.occludedFragmentFade&&!u,o`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= fadeFactor;
        }
        `)}

    ${i(!u&&e.debugDrawLabelBorder,o`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(e.output){case p.Color:e.oitPass===g.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),s.main.add(o`
        ${P}
        ${i(e.oitPass===g.FrontFace,o`fragColor.rgb /= fragColor.a;`)}
        ${i(e.oitPass===g.ColorAlpha,o`fragAlpha = fragColor.a;`)}`);break;case p.ObjectAndLayerIdColor:s.main.add(o`
        ${P}
        outputObjectAndLayerIdColor();`);break;case p.Highlight:t.include(E,e),s.main.add(o`
        ${P}
        outputHighlight(voccluded == 1.0);`)}return t}function Z(e){return e.outlineColor[3]>0&&e.outlineSize>0}function N(e,t=J){return e.textureIsSignedDistanceField?X(e.anchorPosition,e.distanceFieldBoundingBox,t):O(t,e.anchorPosition),t}function X(e,t,l){t!=null?m(l,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1]):m(l,0,0)}var J=D(),Fe=Object.freeze(Object.defineProperty({__proto__:null,build:W,calculateAnchorPosForRendering:N,shaderSettings:G},Symbol.toStringTag,{value:"Module"}));export{G as a,W as b,N as c,Fe as d};
