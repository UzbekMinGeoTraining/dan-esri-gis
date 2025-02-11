import{a as R,b as q}from"./chunk-J7UK2QPE.js";import{a as A}from"./chunk-CQUOQXLP.js";import{a as v}from"./chunk-AOTWUAUY.js";import{a as c}from"./chunk-VI4TDFI5.js";import{a as d}from"./chunk-2HN33SWB.js";import{b as i}from"./chunk-BXR2KKYP.js";import{a as l}from"./chunk-7W6RATG7.js";import{G as b,c as g,h as w,n as f,u as x,v as P,x as T}from"./chunk-2HUIJUS4.js";import{a as p,c as m}from"./chunk-PYQRTZNZ.js";import{a as y}from"./chunk-BMVJCP2M.js";var r;(function(e){e[e.Rain=0]="Rain",e[e.Snow=1]="Snow",e[e.COUNT=2]="COUNT"})(r||(r={}));var u=class extends R{constructor(){super(...arguments),this.type=r.Rain}};y([q({count:r.COUNT})],u.prototype,"type",void 0);function U(e){let a=new A;return a.attributes.add(l.POSITION,"vec3"),a.attributes.add(l.INSTANCEFEATUREATTRIBUTE,"float"),a.vertex.uniforms.add(new c("cameraPosition",(t,o)=>o.camera.eye),new c("offset",(t,o)=>S(t,o)),new d("width",t=>t.width),new d("time",t=>t.time),new v("proj",(t,o)=>o.camera.projectionMatrix),new v("view",(t,o)=>o.camera.viewMatrix)),a.varyings.add("vUv","vec2"),a.vertex.code.add(i`vec3 hash31(float p){
vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
p3 += dot(p3, p3.yzx + 33.33);
return fract((p3.xxy + p3.yzz) * p3.zyx);
}
float hash11(float p){
p = fract(p * 0.1031);
p *= p + 33.33;
p *= p + p;
return fract(p);
}
vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
}`),a.vertex.main.add(i`
      vUv = position.xz;
      vec3 rand = hash31(instanceFeatureAttribute);

      // Set random position for all particles
      // The hash function space is not high resolution so offset particles by an additional random value
      // This creates grids of 1000 particles which are shifted by random hundredths of the tile width
      // overlaying multiple identical but offset grids
      vec3 randomPosition = 2.0 * (rand + (0.01 + 0.01 * rand) * floor(0.001 * instanceFeatureAttribute)) - 1.0;

      // Random orientation of rain drops
      float angle = 3.1415 * hash11(instanceFeatureAttribute);

      vec3 up = vec3(0, 0, 1);

      // Gravity and wind direction
      vec3 direction = normalize(cameraPosition);

      vec3 tangent = normalize(cross(direction, up));

      // Gravity
      vec3 animatedPos = randomPosition + direction * -time;

      // Rain particles fall straight down and are randomly oriented
      // Snow particles have random sinusoid trajectories and are rotated to face the camera
      ${e.type===r.Rain?i`
            // Random rotation for particle
            vec3 rotationAxis = up;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));
            vec3 transformedPos = rotateVectorByQuaternion(vec3(0.2, 0.2, 4.0) * (position - vec3(0.5, 0.0, 0.5)), quat);

            // Rotate particle to planetary position
            rotationAxis = tangent;
            angle = 0.5 * -acos(dot(direction, up));
            quat = vec4(rotationAxis * sin(angle), cos(angle));
            transformedPos = rotateVectorByQuaternion(transformedPos, quat);

            vec4 pos = mat4(mat3(view)) * vec4(transformedPos + (mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * pos;
      `:i`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
  `),a.fragment.uniforms.add(new d("opacity",t=>t.opacity),new c("particleColor",(t,o)=>C(o,e))),a.fragment.main.add(i`
    float d = length(vUv - vec2(0.5));

    ${e.type===r.Rain?i`d = 0.35 * smoothstep(0.5, 0.0, d);`:i`d = smoothstep(0.5, 0.1, d);`}
    fragColor = opacity * vec4(particleColor * d, d);
  `),a}function S(e,a){let t=a.camera.eye,o=.5*e.width,n=1/e.width,s=w(h,g(h,(t[0]+o)*n,(t[1]+o)*n,(t[2]+o)*n));return b(s,t,f(s,s,e.width))}function C(e,a){let t=a.type===r.Rain?O:j,o=f(h,t,_),n=e.camera.eye;x(z,n);let s=Math.max(0,P(z,e.lighting.mainLight.direction));return T(o,o,t,s)}var h=p(),z=p(),j=m(1,1,1),O=m(.85,.85,.85),_=.7,k=Object.freeze(Object.defineProperty({__proto__:null,build:U},Symbol.toStringTag,{value:"Module"}));export{r as a,u as b,U as c,k as d};
