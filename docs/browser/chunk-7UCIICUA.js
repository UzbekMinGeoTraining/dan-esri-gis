import{a as D}from"./chunk-WW7S4V24.js";import{a as B,c as j}from"./chunk-B72PB7U4.js";import{a as C}from"./chunk-A54VD7GL.js";import{a as d}from"./chunk-Z3USGHSR.js";import{a as _}from"./chunk-RNN6GAXL.js";import{a as H}from"./chunk-CQUOQXLP.js";import{a as R}from"./chunk-H6LJ2DCJ.js";import{a as b}from"./chunk-NPIYHDQ7.js";import{a as f}from"./chunk-BL63T6AU.js";import{a as F}from"./chunk-AOTWUAUY.js";import{a as O,b as n}from"./chunk-BXR2KKYP.js";import{a as y}from"./chunk-XXOIKNT6.js";import{N as w,d as P}from"./chunk-EPTSNNZF.js";import{a as m}from"./chunk-7W6RATG7.js";import{a as M}from"./chunk-HWN5REN7.js";import{b as l}from"./chunk-XTES2GPX.js";import{c as p}from"./chunk-2HUIJUS4.js";import{g as h,n as v}from"./chunk-5MNDZ6BX.js";import{a as g}from"./chunk-PYQRTZNZ.js";import{s}from"./chunk-5PTS4JDF.js";var u=class extends O{constructor(){super(...arguments),this.clipBox=P(w),this.useFixedSizes=!1,this.useRealWorldSymbolSizes=!1,this.scaleFactor=1,this.minSizePx=0,this.size=0,this.sizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}},x=class extends B{constructor(a,c,r){super(a),this.origin=a,this.isLeaf=c,this.splatSize=r}};function T(t){let a=new H,c=t.output===b.Color,{vertex:r,fragment:z}=a;return a.include(j,t),a.attributes.add(m.POSITION,"vec3"),a.attributes.add(m.COLOR,"vec3"),r.uniforms.add(new C("modelView",(i,e)=>h(U,e.camera.viewMatrix,v(U,i.origin))),new F("proj",(i,e)=>e.camera.projectionMatrix),new d("screenMinMaxSize",(i,e,o)=>l(S,o.useFixedSizes?0:o.minSizePx*e.camera.pixelRatio,L(i.isLeaf)*e.camera.pixelRatio)),t.useFixedSizes?new _("pointScale",(i,e)=>l(S,i.fixedSize*e.camera.pixelRatio,e.camera.fullHeight)):new d("pointScale",(i,e,o)=>l(S,i.splatSize*o.scaleFactor*e.camera.pixelRatio,e.camera.fullHeight/e.camera.pixelRatio))),t.clippingEnabled?r.uniforms.add(new f("clipMin",(i,e,o)=>p(I,o.clipBox[0]-i.origin[0],o.clipBox[1]-i.origin[1],o.clipBox[2]-i.origin[2])),new f("clipMax",(i,e,o)=>p(I,o.clipBox[3]-i.origin[0],o.clipBox[4]-i.origin[1],o.clipBox[5]-i.origin[2]))):(r.constants.add("clipMin","vec3",[-s,-s,-s]),r.constants.add("clipMax","vec3",[s,s,s])),c&&a.varyings.add("vColor","vec3"),r.main.add(n`
    // Move clipped points outside of clipspace
    if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
      position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
      gl_Position = vec4(0.0,0.0,0.0,2.0);
      gl_PointSize = 0.0;
      return;
    }

    if (rejectBySlice(position)) {
      gl_Position = vec4(0.0, 0.0, 0.0, 2.0);
      gl_PointSize = 0.0;
      return;
    }

    // Position in camera space
    vec4 camera = modelView * vec4(position, 1.0);

    float pointSize = pointScale.x;
    vec4 position = proj * camera;
    ${t.drawScreenSize?n`float clampedScreenSize = pointSize;`:n`float pointRadius = 0.5 * pointSize;
           vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
           vec4 positionOffset = proj * cameraOffset;
           float radius = abs(positionOffset.y - position.y);
           float viewHeight = pointScale.y;
           // screen diameter = (2 * r / w) * (h / 2)
           float screenPointSize = (radius / position.w) * viewHeight;
           float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
           // Shift towards camera, to move rendered point out of terrain i.e. to
           // the camera-facing end of the virtual point when considering it as a
           // 3D sphere.
           camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
           position = proj * camera;`}

    gl_PointSize = clampedScreenSize;
    gl_Position = position;
    ${c?n`vColor = color;`:""}`),z.include(R,t),a.include(D,t),z.main.add(n`
    vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
    float r2 = dot(vOffset, vOffset);

    if (r2 > 0.25) {
      discard;
    }
    calculateOcclusionAndOutputHighlight();
    ${c?n`fragColor = vec4(vColor, 1.0);`:""}`),a}function L(t){return t?256:64}var U=y(),I=g(),S=M(),ri=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:x,PointRendererPassParameters:u,build:T,getMaxPointSizeScreenspace:L},Symbol.toStringTag,{value:"Module"}));export{u as a,x as b,T as c,L as d,ri as e};
