import{c as s}from"./chunk-3DR4YGRI.js";import{a as c}from"./chunk-UGAMS6PU.js";import{a as o}from"./chunk-4IVMQ5PX.js";import{b as t}from"./chunk-BXR2KKYP.js";function h(i){let{vertex:l}=i;l.uniforms.add(new o("coverageTexture",e=>e.coverageTexture),new c("highlightRenderCellCount",e=>[e.horizontalCellCount,e.verticalCellCount]),new c("highlightTextureResolution",e=>[e.highlightTexture.descriptor.width,e.highlightTexture.descriptor.height])),l.constants.add("cellSize","int",s),i.varyings.add("sUV","vec2"),i.varyings.add("vOutlinePossible","float"),l.code.add(t`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),l.main.add(t`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
vec4 cov = texelFetch(coverageTexture, cellPos, 0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = cov.g;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}export{h as a};
