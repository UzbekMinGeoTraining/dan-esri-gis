import{b as o}from"./chunk-BXR2KKYP.js";function l(t){t.code.add(o`
    float lineFactorAtPosition(float value) {
      float pos = value * ${o.float(257)};
      if(pos < 0.5 || pos > ${o.float(257-.5)}) {
        return 1.0;
      }

      pos = pos + 0.5;
      float modulo = mod(pos, 16.0);
      return modulo <= 2.0 ?  1.0 - abs(modulo - 1.0) : 0.0;
    }

    float lineFactorAtUV(vec2 uv) {
      return max(lineFactorAtPosition(uv.x), lineFactorAtPosition(uv.y));
    }

    float lineFactor(vec2 uv) {
      vec2 offset = fwidth(uv) * 0.25;
      return (lineFactorAtUV(vec2(uv.x + offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x + offset.x, uv.y - offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y - offset.y))) / 4.0;
    }

    vec3 gridColor(vec2 uv) {
      float line = lineFactor(uv) * 0.1 + 0.9;
      return vec3(1.0, 0.972, 0.918) * line;
    }`)}export{l as a};
