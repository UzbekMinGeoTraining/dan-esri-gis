import{a as b}from"./chunk-NNNTRPDR.js";import{b as V}from"./chunk-J7UK2QPE.js";import{a as T}from"./chunk-WAPQB6I3.js";import{a as F}from"./chunk-XC4LDHG5.js";import{a as w}from"./chunk-RNN6GAXL.js";import{a as S}from"./chunk-4IVMQ5PX.js";import{a as U}from"./chunk-CQUOQXLP.js";import{a as h}from"./chunk-AOTWUAUY.js";import{a as s}from"./chunk-VI4TDFI5.js";import{a as d}from"./chunk-2HN33SWB.js";import{a as P,b as t}from"./chunk-BXR2KKYP.js";import{a as u}from"./chunk-7W6RATG7.js";import{a as y}from"./chunk-HWN5REN7.js";import{a as m}from"./chunk-PYQRTZNZ.js";import{a as x}from"./chunk-BMVJCP2M.js";var n;(function(o){o[o.Cone=0]="Cone",o[o.Cylinder=1]="Cylinder",o[o.Underground=2]="Underground",o[o.COUNT=3]="COUNT"})(n||(n={}));var g=class extends b{constructor(){super(...arguments),this.geometry=n.Cone}};x([V({count:n.COUNT})],g.prototype,"geometry",void 0);var v=class extends P{constructor(){super(...arguments),this.texV=y(),this.altitudeFade=0,this.innerScale=0,this.undergroundFadeAlpha=0,this.silhouette=new c}},c=class{constructor(){this.center=m(),this.v1=m(),this.v2=m()}};function z(o){let i=new U,{vertex:r,fragment:l}=i;if(T(r),o.geometry===n.Underground)i.attributes.add(u.POSITION,"vec2"),i.varyings.add("color","vec4"),r.uniforms.add(new s("cameraPosition",(a,p)=>p.camera.eye),new d("undergroundFadeAlpha",a=>a.undergroundFadeAlpha)),r.main.add(t`float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);`),l.main.add(t`fragColor = color;`);else{i.include(F,o),i.attributes.add(u.POSITION,"vec3"),i.varyings.add("vtc","vec2"),i.varyings.add("falloff","float");let a=o.geometry===n.Cylinder;r.uniforms.add(new h("proj",(e,f)=>f.camera.projectionMatrix),new h("view",(e,f)=>f.camera.viewMatrix)),a||(i.varyings.add("innerFactor","float"),r.uniforms.add(new s("silCircleCenter",e=>e.silhouette.center)),r.uniforms.add(new s("silCircleV1",e=>e.silhouette.v1)),r.uniforms.add(new s("silCircleV2",e=>e.silhouette.v2)),r.uniforms.add(new w("texV",e=>e.texV)),r.uniforms.add(new d("innerScale",e=>e.innerScale)));let p=6.2831853,C=1/128;r.main.add(t`
      ${a?t`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:t`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${t.float(p*C)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${t.float(C)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
	  `),l.uniforms.add(new S("tex",e=>e.texture)),a||l.uniforms.add(new d("altitudeFade",e=>e.altitudeFade)),l.main.add(t`
			vec4 atmosphereColor = texture(tex, vtc) * falloff;
      ${a?t`fragColor = atmosphereColor;`:t`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			fragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));`}`)}return i}var K=Object.freeze(Object.defineProperty({__proto__:null,SilhouetteCircle:c,SimpleAtmospherePassParameters:v,build:z},Symbol.toStringTag,{value:"Module"}));export{n as a,g as b,v as c,c as d,z as e,K as f};
