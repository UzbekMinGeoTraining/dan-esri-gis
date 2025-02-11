import{a as o}from"./chunk-KQHYII76.js";import{a as l}from"./chunk-CQUOQXLP.js";import{a}from"./chunk-GXSLPADW.js";import{a as i,b as n}from"./chunk-BXR2KKYP.js";var r=class extends i{};function s(){let e=new l,{outputs:d,fragment:t}=e;return e.include(o),t.uniforms.add(new a("textureInput",m=>m.input)),t.constants.add("outlineWidth","int",Math.ceil(u)),t.constants.add("cellSize","int",c),d.add("fragGrid","vec2"),t.main.add(n`vec2 inputTextureSize = vec2(textureSize(textureInput, 0));
vec2 cellBottomLeftCornerInput = floor(gl_FragCoord.xy) * vec2(cellSize);
vec2 coordMid =  (cellBottomLeftCornerInput + 0.5 * vec2(cellSize)) / inputTextureSize;
vec2 commonValue = texture(textureInput, coordMid).rg;
int margin = outlineWidth;
float marginSquare = float(margin*margin);
for(int y = -margin; y <= cellSize + margin; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : margin;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
vec2 coord = (cellBottomLeftCornerInput + vec2(x, y)) / inputTextureSize;
vec2 value = texture(textureInput, coord).rg;
if (value != commonValue){
fragGrid = vec2(1.0, 1.0);
return;
}
}
}
bool hasAny = commonValue != vec2(0.0);
fragGrid = vec2(hasAny ? 1.0 : 0.0, 0.0);`),e}var c=32,u=9,g=.4,v=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:r,blurSize:g,build:s,gridCellPixelSize:c,outlineSize:u},Symbol.toStringTag,{value:"Module"}));export{r as a,s as b,c,u as d,g as e,v as f};
