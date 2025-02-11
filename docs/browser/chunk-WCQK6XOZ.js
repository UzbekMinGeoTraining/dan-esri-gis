import{a as me,d as fe,j as ve}from"./chunk-RCCESRES.js";import{a as ce}from"./chunk-NNNTRPDR.js";import{b as l}from"./chunk-J7UK2QPE.js";import{a as ae}from"./chunk-L3GHXHDP.js";import{a as le,b as de}from"./chunk-GKUBZAEG.js";import{a as ie}from"./chunk-UW734WOQ.js";import{a as oe}from"./chunk-7DCEI345.js";import{a as se}from"./chunk-ZG3FCPXY.js";import{a as pe}from"./chunk-RIUAG34V.js";import{c as Y}from"./chunk-B72PB7U4.js";import{a as ee,b as te,d as b}from"./chunk-644SLL4Y.js";import{a as L}from"./chunk-OO4IIGVK.js";import{a as Z}from"./chunk-RNN6GAXL.js";import{a as re}from"./chunk-4IVMQ5PX.js";import{a as ne}from"./chunk-CQUOQXLP.js";import{a as K}from"./chunk-GDB2EJGA.js";import{a as Q}from"./chunk-H6LJ2DCJ.js";import{a as F}from"./chunk-NPIYHDQ7.js";import{a as X}from"./chunk-AOTWUAUY.js";import{a as c}from"./chunk-2HN33SWB.js";import{b as t}from"./chunk-BXR2KKYP.js";import{a as T}from"./chunk-YJ3RZNO6.js";import{b as G,d as q}from"./chunk-OC7V2CEX.js";import{a as x}from"./chunk-7W6RATG7.js";import{l as J,n as H}from"./chunk-BDF7KEUQ.js";import{a as k,f as B}from"./chunk-YRTBL7EE.js";import{c as $}from"./chunk-3FPO2LOS.js";import{K as M}from"./chunk-GGZQ5GCM.js";import{a as p}from"./chunk-BMVJCP2M.js";var w=class{constructor(i,a,r){this._createTexture=i,this._parametersKey=a,this._repository=new Map,this._orphanCache=r.newCache(`procedural-texture-repository:${M()}`,o=>o.dispose())}destroy(){for(let{texture:i}of this._repository.values())i.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(i,a=null){let r=this._acquire(i);return this.release(a),r}release(i){if(i==null)return;let a=this._parametersKey(i),r=this._repository.get(a);if(r&&(r.refCount--,r.refCount===0)){this._repository.delete(a);let{texture:o}=r,n=o.usedMemory;this._orphanCache.put(a,o,n)}}_acquire(i){if(i==null)return null;let a=this._parametersKey(i),r=this._repository.get(a);if(r)return r.refCount++,r.texture;let o=this._orphanCache.pop(a)??this._createTexture(i),n=new z(o);return this._repository.set(a,n),o}},z=class{constructor(i){this.texture=i,this.refCount=1}};function Ee(e,i){return new w(a=>{let{encodedData:r,textureSize:o}=ge(a),n=new G;return n.internalFormat=H.RGBA,n.width=o,n.height=1,n.wrapMode=J.REPEAT,new q(e,n,r)},a=>`${a.pattern.join(",")}-r${a.pixelRatio}`,i)}function ge(e){let i=E(e),a=1/e.pixelRatio,r=O(e),o=_(e),n=(Math.floor(.5*(o-1))+.5)*a,u=[],v=1;for(let g of i){for(let h=0;h<g;h++){let A=v*(Math.min(h,g-1-h)+.5)*a/n*.5+.5;u.push(A)}v=-v}let C=Math.round(i[0]/2),P=[...u.slice(C),...u.slice(0,C)],m=new Uint8Array(4*r),y=0;for(let g of P)K(g,m,y),y+=4;return{encodedData:m,textureSize:r}}function E(e){return e.pattern.map(i=>Math.round(i*e.pixelRatio))}function O(e){if(e==null)return 1;let i=E(e);return Math.floor(i.reduce((a,r)=>a+r))}function _(e){return E(e).reduce((i,a)=>Math.max(i,a))}function ue(e){return e==null?B:e.length===4?e:$(De,e[0],e[1],e[2],1)}var De=k();function he(e,i){i.stippleEnabled?xe(e,i):Le(e)}function xe(e,i){let a=!(i.draped&&i.stipplePreferContinuous),{vertex:r,fragment:o}=e;o.include(Q),i.draped||(ee(r,i),r.uniforms.add(new c("worldToScreenPerDistanceRatio",(n,u)=>1/u.camera.perScreenPixelRatio)),r.code.add(t`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),r.code.add(t`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${ye};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(t`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(t`
    if (segmentLengthPseudoScreen >= ${a?"patternLength":"1e4"}) {
  `),b(r),r.code.add(t`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),o.uniforms.add(new re("stipplePatternTexture",n=>n.stippleTexture),new c("stipplePatternSDFNormalizer",n=>Ce(n.stipplePattern)),new c("stipplePatternPixelSizeInv",n=>1/W(n))),o.code.add(t`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),i.stippleOffColorEnabled?(o.uniforms.add(new L("stippleOffColor",n=>ue(n.stippleOffColor))),o.code.add(t`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):o.code.add(t`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Le(e){e.fragment.code.add(t`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function Ce(e){return e?(Math.floor(.5*(_(e)-1))+.5)/e.pixelRatio:1}function W(e){let i=e.stipplePattern;return i?O(e.stipplePattern)/i.pixelRatio:1}var ye=t.float(.4);var S;(function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"})(S||(S={}));var s=class extends ce{constructor(){super(...arguments),this.capType=S.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=ie.None,this.emissionSource=le.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};p([l({count:S.COUNT})],s.prototype,"capType",void 0),p([l()],s.prototype,"hasSlicePlane",void 0),p([l()],s.prototype,"hasPolygonOffset",void 0),p([l()],s.prototype,"writeDepth",void 0),p([l()],s.prototype,"draped",void 0),p([l()],s.prototype,"stippleEnabled",void 0),p([l()],s.prototype,"stippleOffColorEnabled",void 0),p([l()],s.prototype,"stipplePreferContinuous",void 0),p([l()],s.prototype,"roundJoins",void 0),p([l()],s.prototype,"applyMarkerOffset",void 0),p([l()],s.prototype,"vvSize",void 0),p([l()],s.prototype,"vvColor",void 0),p([l()],s.prototype,"vvOpacity",void 0),p([l()],s.prototype,"falloffEnabled",void 0),p([l()],s.prototype,"innerColorEnabled",void 0),p([l()],s.prototype,"hasOccludees",void 0),p([l()],s.prototype,"occluder",void 0),p([l()],s.prototype,"terrainDepthTest",void 0),p([l()],s.prototype,"cullAboveTerrain",void 0),p([l()],s.prototype,"wireframe",void 0),p([l()],s.prototype,"discardInvisibleFragments",void 0),p([l()],s.prototype,"objectAndLayerIdColorInstanced",void 0);var j=1;function Pe(e){let i=new ne,{attributes:a,varyings:r,vertex:o,fragment:n}=i,{applyMarkerOffset:u,draped:v,output:C,capType:P,stippleEnabled:m,falloffEnabled:y,roundJoins:g,wireframe:h,innerColorEnabled:A}=e;i.include(ae),i.include(fe,e),i.include(he,e),i.include(oe,e);let I=u&&!v;I&&(o.uniforms.add(new c("markerScale",d=>d.markerScale)),i.include(ve,{space:me.World})),te(o,e),o.uniforms.add(new X("inverseProjectionMatrix",(d,f)=>f.camera.inverseProjectionMatrix),new Z("nearFar",(d,f)=>f.camera.nearFar),new c("miterLimit",d=>d.join!=="miter"?0:d.miterLimit),new L("viewport",(d,f)=>f.camera.fullViewport)),o.constants.add("LARGE_HALF_FLOAT","float",65500),a.add(x.POSITION,"vec3"),a.add(x.PREVPOSITION,"vec3"),a.add(x.NEXTPOSITION,"vec3"),a.add(x.SUBDIVISIONFACTOR,"float"),a.add(x.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");let R=e.terrainDepthTest&&C===F.Color;R&&r.add("depth","float");let N=m;N&&r.add("vLineSizeInv","float");let D=P===S.ROUND,V=m&&D,U=y||V;U&&r.add("vLineDistanceNorm","float"),D&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),o.code.add(t`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),o.code.add(t`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(t`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${R?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),b(o),o.constants.add("aaWidth","float",m?0:1).main.add(t`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${N?t`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),I&&o.main.add(t`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),o.main.add(t`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(m||D)&&o.main.add(t`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${D?t`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),o.main.add(t`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),g?o.main.add(t`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${m?t`min(1.0, subdivisionFactor * ${t.float((j+2)/(j+1))})`:t`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):o.main.add(t`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);let Se=P!==S.BUTT;return o.main.add(t`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${Se?t`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),o.main.add(t`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${U?t`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),D&&o.main.add(t`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),m&&(v?o.uniforms.add(new c("worldToScreenRatio",(d,f)=>1/f.screenToPCSRatio)):o.main.add(t`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.main.add(t`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),v?o.main.add(t`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):o.main.add(t`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new c("stipplePatternPixelSize",d=>W(d))),o.main.add(t`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),o.main.add(t`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${h&&!v?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),R&&i.include(se,e),i.include(Y,e),i.include(de,e),n.include(pe),n.main.add(t`
    discardBySlice(vpos);
    ${R?"terrainDepthTest(depth);":""}
  `),h?n.main.add(t`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(D&&n.main.add(t`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${t.float(T)}) {
          discard;
        }
      `),V?n.main.add(t`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${t.float(T)}, stippleCoverage);
      `):n.main.add(t`float stippleAlpha = getStippleAlpha();`),C!==F.ObjectAndLayerIdColor&&n.main.add(t`discardByStippleAlpha(stippleAlpha, ${t.float(T)});`),n.uniforms.add(new L("intrinsicColor",d=>d.color)),n.main.add(t`vec4 color = intrinsicColor * vColor;`),A&&(n.uniforms.add(new L("innerColor",d=>d.innerColor??d.color),new c("innerWidth",(d,f)=>d.innerWidth*f.camera.pixelRatio)),n.main.add(t`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),n.main.add(t`vec4 finalColor = blendStipple(color, stippleAlpha);`),y&&(n.uniforms.add(new c("falloff",d=>d.falloff)),n.main.add(t`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),m||n.main.add(t`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),n.main.add(t`outputColorHighlightOID(finalColor, vpos);`),i}var Dt=Object.freeze(Object.defineProperty({__proto__:null,build:Pe,ribbonlineNumRoundJoinSubdivisions:j},Symbol.toStringTag,{value:"Module"}));export{w as a,Ee as b,S as c,s as d,j as e,Pe as f,Dt as g};
