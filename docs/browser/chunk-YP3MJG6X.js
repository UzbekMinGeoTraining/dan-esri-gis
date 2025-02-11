import{a as y}from"./chunk-I6ETUG5Q.js";import{a as h}from"./chunk-XC4LDHG5.js";import{b as O}from"./chunk-GKUBZAEG.js";import{a as R}from"./chunk-X7WNJQZZ.js";import{a as P}from"./chunk-7DCEI345.js";import{a as b}from"./chunk-ZG3FCPXY.js";import{a as V}from"./chunk-RIUAG34V.js";import{c as C}from"./chunk-B72PB7U4.js";import{a as S,b as x}from"./chunk-644SLL4Y.js";import{a as T}from"./chunk-OO4IIGVK.js";import{a as D}from"./chunk-CQUOQXLP.js";import{a as f}from"./chunk-NPIYHDQ7.js";import{a as m}from"./chunk-2HN33SWB.js";import{b as o}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-7W6RATG7.js";var r;(function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e[e.Cross=2]="Cross",e[e.ForwardDiagonal=3]="ForwardDiagonal",e[e.BackwardDiagonal=4]="BackwardDiagonal",e[e.DiagonalCross=5]="DiagonalCross",e[e.COUNT=6]="COUNT"})(r||(r={}));var g=.70710678118,$=g,A=.08715574274,u=10,z=1;function N(e){let t=new D,{vertex:a,fragment:i,attributes:c,varyings:d}=t,s=e.terrainDepthTest&&e.output===f.Color,w=e.output===f.Highlight;x(a,e),t.include(h,e),t.include(y,e),t.include(R,e),t.include(P,e),t.include(C,e),t.include(O,e),e.draped?a.uniforms.add(new m("worldToScreenRatio",(p,n)=>1/n.screenToPCSRatio)):c.add(l.BOUNDINGRECT,"mat3"),c.add(l.POSITION,"vec3"),c.add(l.UVMAPSPACE,"vec4"),e.vvColor&&c.add(l.COLORFEATUREATTRIBUTE,"float"),d.add("vColor","vec4"),d.add("vpos","vec3"),d.add("vuv","vec2"),s&&d.add("depth","float"),a.uniforms.add(new T("uColor",p=>p.color));let v=e.style===r.ForwardDiagonal||e.style===r.BackwardDiagonal||e.style===r.DiagonalCross;return v&&a.code.add(o`
      const mat2 rotate45 = mat2(${o.float(g)}, ${o.float(-$)},
                                 ${o.float($)}, ${o.float(g)});
    `),e.draped||(S(a,e),a.uniforms.add(new m("worldToScreenPerDistanceRatio",(p,n)=>1/n.camera.perScreenPixelRatio)),a.code.add(o`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),a.code.add(o`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),a.code.add(o`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${o.float(A)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),a.code.add(o`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${v?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${v?" * rotate45":""};

      ${e.draped?"":o`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${o.float(u)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),a.main.add(o`
    vuv = scaledUV();
    vpos = position;
    ${s?"depth = (view * vec4(vpos, 1.0)).z;":""}
    forwardNormalizedVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?"vColor *= uColor;":e.vvColor?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `),i.include(V),e.draped&&i.uniforms.add(new m("texelSize",(p,n)=>1/n.camera.pixelRatio)),s&&t.include(b,e),w||(i.code.add(o`
      const float lineWidth = ${o.float(z)};
      const float spacing = ${o.float(u)};
      const float spacingINV = ${o.float(1/u)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||i.code.add(o`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),i.main.add(o`
    discardBySlice(vpos);
    ${s?"terrainDepthTest(depth);":""}
    vec4 color = vColor;
    ${w?"":o`color.a *= ${U(e)};`}
    outputColorHighlightOID(color, vpos);
  `),t}function U(e){function t(a){return e.draped?o`coverage(vuv.${a}, texelSize)`:o`sampleAA(vuv.${a})`}switch(e.style){case r.ForwardDiagonal:case r.Horizontal:return t("y");case r.BackwardDiagonal:case r.Vertical:return t("x");case r.DiagonalCross:case r.Cross:return o`1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})`;default:return"0.0"}}var Y=Object.freeze(Object.defineProperty({__proto__:null,build:N},Symbol.toStringTag,{value:"Module"}));export{r as a,N as b,Y as c};
