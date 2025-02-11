import{a as p}from"./chunk-RRDM7P6F.js";import{Q as h,S as m}from"./chunk-GGZQ5GCM.js";import{U as f}from"./chunk-TFUPB3ZG.js";import{a as n}from"./chunk-BMVJCP2M.js";var C=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),v=(t,e,o)=>{for(let s=0,r=e.length;s<r;s++){let i=e[s];Array.isArray(i)?v(t,i,o):i!=null&&i!==!1&&(typeof i=="string"&&(i=C(i)),o.push(i))}};function u(t,e,o){if(Array.isArray(e))o=e,e=void 0;else if(e&&(typeof e=="string"||e.hasOwnProperty("vnodeSelector"))||o&&(typeof o=="string"||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let s,r;return o&&o.length===1&&typeof o[0]=="string"?s=o[0]:o&&(r=[],v(t,o,r),r.length===0&&(r=void 0)),{vnodeSelector:t,properties:e,children:r,text:s===""?void 0:s,domNode:null}}var S={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"},l=class extends m{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){let{textColor:t,backgroundColor:e}=this,o=e.clone();return o.a*=t.a,o}get _textShadow(){let t=this._textShadowColor.toCss(!0);return`0 0 ${this._textShadowSize}px ${t}`}get padding(){return .5*this.fontSize}get borderRadius(){return this.padding}set borderRadius(t){this._overrideIfSome("borderRadius",t)}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new p([0,0,0,.6]),this.textColor=new p([255,255,255]),this._textShadowSize=1}render(){return u("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this.padding+"px",borderRadius:this.borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;let e=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${e}`;let{padding:o,borderRadius:s}=this,r=t.measureText(this.text).width,i=this.text!==""?this.fontSize:0,a=_[this.anchor];t.textAlign="center",t.textBaseline="middle";let d=r+2*o,x=i+2*o,b=this.x+a.x*d,w=this.y+a.y*x;this._roundedRect(t,b,w,d,x,s),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();let y=this.x+(a.x+.5)*d,g=this.y+(a.y+.5)*x;this._renderTextShadow(t,this.text,y,g),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,y,g)}_renderTextShadow(t,e,o,s){t.lineJoin="miter",t.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/c.length})`;let r=this._textShadowSize;for(let[i,a]of c)t.fillText(e,o+r*i,s+r*a)}_roundedRect(t,e,o,s,r,i){i=Math.min(i,r/2,s/2),t.beginPath(),t.moveTo(e,o+i),t.arcTo(e,o,e+i,o,i),t.lineTo(e+s-i,o),t.arcTo(e+s,o,e+s,o+i,i),t.lineTo(e+s,o+r-i),t.arcTo(e+s,o+r,e+s-i,o+r,i),t.lineTo(e+i,o+r),t.arcTo(e,o+r,e,o+r-i,i),t.closePath()}_cssClasses(){let t={"esri-text-overlay-item":!0},e;for(e in S)t[S[e]]=this.anchor===e;return t}};n([h()],l.prototype,"x",void 0),n([h()],l.prototype,"y",void 0),n([h()],l.prototype,"position",null),n([h()],l.prototype,"text",void 0),n([h()],l.prototype,"fontSize",void 0),n([h()],l.prototype,"anchor",void 0),n([h()],l.prototype,"visible",void 0),n([h()],l.prototype,"isDecoration",void 0),n([h()],l.prototype,"backgroundColor",void 0),n([h()],l.prototype,"textColor",void 0),n([h()],l.prototype,"_textShadowSize",void 0),n([h()],l.prototype,"_textShadowColor",null),n([h()],l.prototype,"_textShadow",null),n([h()],l.prototype,"padding",null),n([h()],l.prototype,"borderRadius",null),l=n([f("esri.views.overlay.TextOverlayItem")],l);var _={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},c=[];for(let e=0;e<360;e+=360/16)c.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);var N=l;export{u as a,N as b};
