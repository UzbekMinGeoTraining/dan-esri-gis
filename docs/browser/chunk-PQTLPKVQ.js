import{d as Pe,e as O,f as He,g as Te,h as Xe}from"./chunk-NYICRTUU.js";import{a as Be}from"./chunk-S2GMHWM5.js";import{a as Fe}from"./chunk-R6KT66ZT.js";import{Aa as C,Ba as F,Ca as we,Da as De,Ea as Oe,Na as ce,Pa as Ie,Qa as ke,W as B,Xa as de,Ya as Re,Za as Ae,_a as Me,a as $,b as je,c as le,d as x,j as E,la as oe,p as R,ua as ue,va as he}from"./chunk-3YHRV3RS.js";import{c as Z}from"./chunk-BMVJCP2M.js";import"./chunk-JEGVIFEP.js";var U=class extends Re{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*he,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}};Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Re.classNames.concat([U.className])});var Q=class extends Ae{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(U.new(this._root,{}))}baseRadius(){let t=this.getPrivate("radius",0),e=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return e+B(i,t-e)}radius(){let t=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(t?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){let t=this.get("textType","adjusted"),e=this.get("inside",!1),i=this.get("orientation"),s=we(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",e);let r=C(s),l=F(s),a=this.baseRadius(),y=this.radius();if(this._display.angle=0,t=="circular")this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this.setRaw("x",void 0),this.setRaw("y",void 0),this._text.set("orientation",i),this._text.set("radius",y);else{a==0&&(s=0,y=0);let o=y*l,n=y*r;t=="radial"?(this.setRaw("x",o),this.setRaw("y",n),s<90||s>270||i!="auto"?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):t=="adjusted"?(this.setRaw("centerX",x),this.setRaw("centerY",x),this.setRaw("x",o),this.setRaw("y",n)):t=="regular"&&(this.setRaw("x",o),this.setRaw("y",n))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){let t=this.get("textType","regular"),e=this.get("inside",!1),i=0,s=0,r=this.get("labelAngle",0),l=this.localBounds(),a=l.right-l.left,y=l.bottom-l.top;if(t=="radial"){if(this._flipped){let o=this.get("centerX");o instanceof $&&(a*=1-2*o.value),i=a*F(r),s=a*C(r)}}else e||t!="adjusted"||(i=a/2*F(r),s=y/2*C(r));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}};Object.defineProperty(Q,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(Q,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Ae.classNames.concat([Q.className])});var Ye=Math.abs,_=Math.atan2,H=Math.cos,Ve=Math.max,Le=Math.min,S=Math.sin,J=Math.sqrt,v=1e-12,ie=Math.PI,pe=ie/2,We=2*ie;function Ke(d){return d>1?0:d<-1?ie:Math.acos(d)}function ze(d){return d>=1?pe:d<=-1?-pe:Math.asin(d)}function qe(d){return d.innerRadius}function Je(d){return d.outerRadius}function Ue(d){return d.startAngle}function Qe(d){return d.endAngle}function Ge(d){return d&&d.padAngle}function Ze(d,t,e,i,s,r,l,a){var y=e-d,o=i-t,n=l-s,g=a-r,h=g*y-n*o;if(!(h*h<v))return[d+(h=(n*(t-r)-g*(d-s))/h)*y,t+h*o]}function ge(d,t,e,i,s,r,l){var a=d-e,y=t-i,o=(l?r:-r)/J(a*a+y*y),n=o*y,g=-o*a,h=d+n,c=t+g,b=e+n,f=i+g,P=(h+b)/2,m=(c+f)/2,u=b-h,p=f-c,A=u*u+p*p,T=s-r,w=h*f-b*c,L=(p<0?-1:1)*J(Ve(0,T*T*A-w*w)),I=(w*p-u*L)/A,M=(-w*u-p*L)/A,z=(w*p+u*L)/A,V=(-w*u+p*L)/A,N=I-P,D=M-m,k=z-P,W=V-m;return N*N+D*D>k*k+W*W&&(I=z,M=V),{cx:I,cy:M,x01:-n,y01:-g,x11:I*(s/T-1),y11:M*(s/T-1)}}function $e(){var d=qe,t=Je,e=O(0),i=null,s=Ue,r=Qe,l=Ge,a=null,y=He(o);function o(){var n,g,h=+d.apply(this,arguments),c=+t.apply(this,arguments),b=s.apply(this,arguments)-pe,f=r.apply(this,arguments)-pe,P=Ye(f-b),m=f>b;if(a||(a=n=y()),c<h&&(g=c,c=h,h=g),c>v)if(P>We-v)a.moveTo(c*H(b),c*S(b)),a.arc(0,0,c,b,f,!m),h>v&&(a.moveTo(h*H(f),h*S(f)),a.arc(0,0,h,f,b,m));else{var u,p,A=b,T=f,w=b,L=f,I=P,M=P,z=l.apply(this,arguments)/2,V=z>v&&(i?+i.apply(this,arguments):J(h*h+c*c)),N=Le(Ye(c-h)/2,+e.apply(this,arguments)),D=N,k=N;if(V>v){var W=ze(V/h*S(z)),ye=ze(V/c*S(z));(I-=2*W)>v?(w+=W*=m?1:-1,L-=W):(I=0,w=L=(b+f)/2),(M-=2*ye)>v?(A+=ye*=m?1:-1,T-=ye):(M=0,A=T=(b+f)/2)}var K=c*H(A),q=c*S(A),se=h*H(L),ae=h*S(L);if(N>v){var j,re=c*H(T),ne=c*S(T),be=h*H(w),me=h*S(w);if(P<ie)if(j=Ze(K,q,be,me,re,ne,se,ae)){var fe=K-j[0],_e=q-j[1],xe=re-j[0],ve=ne-j[1],Ce=1/S(Ke((fe*xe+_e*ve)/(J(fe*fe+_e*_e)*J(xe*xe+ve*ve)))/2),Se=J(j[0]*j[0]+j[1]*j[1]);D=Le(N,(h-Se)/(Ce-1)),k=Le(N,(c-Se)/(Ce+1))}else D=k=0}M>v?k>v?(u=ge(be,me,K,q,c,k,m),p=ge(re,ne,se,ae,c,k,m),a.moveTo(u.cx+u.x01,u.cy+u.y01),k<N?a.arc(u.cx,u.cy,k,_(u.y01,u.x01),_(p.y01,p.x01),!m):(a.arc(u.cx,u.cy,k,_(u.y01,u.x01),_(u.y11,u.x11),!m),a.arc(0,0,c,_(u.cy+u.y11,u.cx+u.x11),_(p.cy+p.y11,p.cx+p.x11),!m),a.arc(p.cx,p.cy,k,_(p.y11,p.x11),_(p.y01,p.x01),!m))):(a.moveTo(K,q),a.arc(0,0,c,A,T,!m)):a.moveTo(K,q),h>v&&I>v?D>v?(u=ge(se,ae,re,ne,h,-D,m),p=ge(K,q,be,me,h,-D,m),a.lineTo(u.cx+u.x01,u.cy+u.y01),D<N?a.arc(u.cx,u.cy,D,_(u.y01,u.x01),_(p.y01,p.x01),!m):(a.arc(u.cx,u.cy,D,_(u.y01,u.x01),_(u.y11,u.x11),!m),a.arc(0,0,h,_(u.cy+u.y11,u.cx+u.x11),_(p.cy+p.y11,p.cx+p.x11),m),a.arc(p.cx,p.cy,D,_(p.y11,p.x11),_(p.y01,p.x01),!m))):a.arc(0,0,h,L,w,m):a.lineTo(se,ae)}else a.moveTo(0,0);if(a.closePath(),n)return a=null,n+""||null}return o.centroid=function(){var n=(+d.apply(this,arguments)+ +t.apply(this,arguments))/2,g=(+s.apply(this,arguments)+ +r.apply(this,arguments))/2-ie/2;return[H(g)*n,S(g)*n]},o.innerRadius=function(n){return arguments.length?(d=typeof n=="function"?n:O(+n),o):d},o.outerRadius=function(n){return arguments.length?(t=typeof n=="function"?n:O(+n),o):t},o.cornerRadius=function(n){return arguments.length?(e=typeof n=="function"?n:O(+n),o):e},o.padRadius=function(n){return arguments.length?(i=n==null?null:typeof n=="function"?n:O(+n),o):i},o.startAngle=function(n){return arguments.length?(s=typeof n=="function"?n:O(+n),o):s},o.endAngle=function(n){return arguments.length?(r=typeof n=="function"?n:O(+n),o):r},o.padAngle=function(n){return arguments.length?(l=typeof n=="function"?n:O(+n),o):l},o.context=function(n){return arguments.length?(a=n??null,o):a},o}var G=class extends ke{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:$e()})}_getTooltipPoint(){let t=this.get("tooltipX"),e=this.get("tooltipY"),i=0,s=0;E(t)&&(i=t),E(e)&&(s=e);let r=this.get("radius",0),l=this.get("innerRadius",0);return r+=this.get("dRadius",0),l+=this.get("dInnerRadius",0),l<0&&(l=r+l),t instanceof $&&(i=this.ix*(l+(r-l)*t.value)),e instanceof $&&(s=this.iy*(l+(r-l)*e.value)),this.get("arc")>=360&&l==0&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let t=this.get("startAngle",0),e=this.get("arc",0),i=this._generator;e<0&&(t+=e,e*=-1),e>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),r=this.get("innerRadius",0);s+=this.get("dRadius",0),r+=this.get("dInnerRadius",0),r<0&&(r=s+r),i({innerRadius:r,outerRadius:s,startAngle:(t+90)*he,endAngle:(t+e+90)*he});let l=t+e/2;this.ix=F(l),this.iy=C(l);let a=this.get("shiftRadius",0);this.setRaw("dx",this.ix*a),this.setRaw("dy",this.iy*a),this.markDirtyPosition()}}};Object.defineProperty(G,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty(G,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ke.classNames.concat([G.className])});var Ne=class extends Me{setupDefaultRules(){super.setupDefaultRules();let t=this._root.interfaceColors,e=this.rule.bind(this);e("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:Fe.new(this._root,{}),width:le,height:le}),e("PieChart").setAll({radius:je(80),startAngle:-90,endAngle:270}),e("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),e("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),e("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),e("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),e("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),e("Slice",["pie"]).states.create("hover",{scale:1.04}),e("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),e("Tick",["pie"]).setAll({location:1}),e("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),e("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),e("FunnelSlice").setAll({interactive:!0,expandDistance:0}),e("FunnelSlice").states.create("hover",{expandDistance:.15}),e("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:x}),e("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:x,rotation:-90}),e("Label",["funnel","vertical"]).setAll({centerY:x,centerX:0}),e("Tick",["funnel"]).setAll({location:1}),e("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),e("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),e("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),e("PyramidSeries").setAll({valueIs:"area"}),e("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),e("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),e("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),e("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),e("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),e("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:x}),e("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:x,rotation:-90}),e("Label",["pyramid","vertical"]).setAll({centerY:x,centerX:0}),e("Tick",["pyramid"]).setAll({location:1}),e("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),e("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:x}),e("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:x,rotation:-90}),e("Label",["pictorial","vertical"]).setAll({centerY:x,centerX:0}),e("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),e("Tick",["pictorial"]).setAll({location:.5});{let i=e("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),Be(i,"fill",t,"alternativeBackground")}}},X=class extends Te{_afterNew(){this._defaultThemes.push(Ne.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(t){super._processSeries(t),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}};Object.defineProperty(X,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(X,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Te.classNames.concat([X.className])});var Y=class extends Pe{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(de.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(de.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(de.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeSlices())}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeLabels())}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeTicks())})}makeSlice(t){let e=this.slicesContainer.children.push(this.slices.make());return e.on("fill",()=>{this.updateLegendMarker(t)}),e.on("fillPattern",()=>{this.updateLegendMarker(t)}),e.on("stroke",()=>{this.updateLegendMarker(t)}),e._setDataItem(t),t.set("slice",e),this.slices.push(e),e}makeLabel(t){let e=this.labelsContainer.children.push(this.labels.make());return e._setDataItem(t),t.set("label",e),this.labels.push(e),e}_shouldMakeBullet(t){return t.get("value")!=null}makeTick(t){let e=this.ticksContainer.children.push(this.ticks.make());return e._setDataItem(t),t.set("tick",e),this.ticks.push(e),e}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){let t=this.get("colors");t&&t.reset();let e=this.get("patterns");e&&e.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let t=0,e=0,i=0,s=1/0,r=0;R(this._dataItems,l=>{let a=l.get("valueWorking",0);t+=a,e+=Math.abs(a)}),R(this._dataItems,l=>{let a=l.get("valueWorking",0);a>i&&(i=a),a<s&&(s=a),r++;let y=a/e;e==0&&(y=0),l.setRaw("valuePercentTotal",100*y)}),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",t),this.setPrivateRaw("valueAverage",t/r),this.setPrivateRaw("valueAbsoluteSum",e)}}show(t){let e=Object.create(null,{show:{get:()=>super.show}});return Z(this,void 0,void 0,function*(){let i=[];i.push(e.show.call(this,t)),i.push(this._sequencedShowHide(!0,t)),yield Promise.all(i)})}hide(t){let e=Object.create(null,{hide:{get:()=>super.hide}});return Z(this,void 0,void 0,function*(){let i=[];i.push(e.hide.call(this,t)),i.push(this._sequencedShowHide(!1,t)),yield Promise.all(i)})}_updateChildren(){super._updateChildren(),this._valuesDirty&&R(this._dataItems,t=>{t.get("label").text.markDirtyText()}),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&R(this._dataItems,t=>{this.updateLegendValue(t)}),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),R(this.dataItems,t=>{this._updateTick(t)})}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(t){if(super.processDataItem(t),t.get("fill")==null){let e=this.get("colors");e&&t.setRaw("fill",e.next())}if(t.get("fillPattern")==null){let e=this.get("patterns");e&&t.setRaw("fillPattern",e.next())}}showDataItem(t,e){let i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return Z(this,void 0,void 0,function*(){let s=[i.showDataItem.call(this,t,e)];E(e)||(e=this.get("stateAnimationDuration",0));let r=this.get("stateAnimationEasing"),l=t.get("value"),a=t.animate({key:"valueWorking",to:l,duration:e,easing:r});a&&s.push(a.waitForStop());let y=t.get("tick");y&&s.push(y.show(e));let o=t.get("label");o&&s.push(o.show(e));let n=t.get("slice");n&&s.push(n.show(e)),n.get("active")&&n.states.applyAnimate("active"),yield Promise.all(s)})}hideDataItem(t,e){let i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return Z(this,void 0,void 0,function*(){let s=[i.hideDataItem.call(this,t,e)],r=this.states.create("hidden",{});E(e)||(e=r.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));let l=r.get("stateAnimationEasing",this.get("stateAnimationEasing")),a=t.animate({key:"valueWorking",to:0,duration:e,easing:l});a&&s.push(a.waitForStop());let y=t.get("tick");y&&s.push(y.hide(e));let o=t.get("label");o&&s.push(o.hide(e));let n=t.get("slice");n.hideTooltip(),n&&s.push(n.hide(e)),yield Promise.all(s)})}disposeDataItem(t){super.disposeDataItem(t);let e=t.get("label");e&&(this.labels.removeValue(e),e.dispose());let i=t.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=t.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(t){let e=t.get("slice");e&&!e.isHidden()&&e.hover()}unhoverDataItem(t){let e=t.get("slice");e&&e.unhover()}updateLegendMarker(t){if(t){let e=t.get("slice");if(e){let i=t.get("legendDataItem");if(i){let s=i.get("markerRectangle");R(Ie,r=>{e.get(r)!=null&&s.set(r,e.get(r))})}}}}_arrangeDown(t){if(t){let e=this._getNextDown();t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),R(t,i=>{let s=i.label.adjustedLocalBounds(),r=s.top;i.y+r<e&&(i.y=e-r),i.label.set("y",i.y),e=i.y+s.bottom})}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(t){if(t){let e=this._getNextUp();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),R(t,i=>{let s=i.label.adjustedLocalBounds(),r=s.bottom;i.y+r>e&&(i.y=e-r),i.label.set("y",i.y),e=i.y+s.top})}}_arrangeRight(t){if(t){let e=0;t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),R(t,i=>{let s=i.label.adjustedLocalBounds(),r=s.left;i.y+r<e&&(i.y=e-r),i.label.set("x",i.y),e=i.y+s.right})}}_arrangeLeft(t){if(t){let e=this.labelsContainer.maxWidth();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),R(t,i=>{let s=i.label.adjustedLocalBounds(),r=s.right;i.y+r>e&&(i.y=e-r),i.label.set("x",i.y),e=i.y+s.left})}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(t){}_dispose(){super._dispose();let t=this.chart;t&&t.series.removeValue(this)}};Object.defineProperty(Y,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(Y,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Pe.classNames.concat([Y.className])});var ee=class extends X{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x,y:x})}_prepareChildren(){super._prepareChildren();let t=this.chartContainer,e=t.innerWidth(),i=t.innerHeight(),s=this.get("startAngle",0),r=this.get("endAngle",0),l=this.get("innerRadius"),a=De(0,0,s,r,1),y=e/(a.right-a.left),o=i/(a.bottom-a.top),n={left:0,right:0,top:0,bottom:0};if(l instanceof $){let c=l.value,b=Math.min(y,o);c=Math.max(b*c,b-Math.min(i,e))/b,n=De(0,0,s,r,c),this.setPrivateRaw("irModifyer",c/l.value)}a=Oe([a,n]);let g=this._maxRadius;this._maxRadius=Math.min(y,o);let h=B(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-h*(a.bottom+a.top)/2,dx:-h*(a.right+a.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||g!=this._maxRadius)&&this.series.each(c=>{c._markDirtyKey("startAngle")}),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each(c=>{c._markDirtyKey("innerRadius")})}radius(t){let e=B(this.get("radius",0),this._maxRadius),i=B(this.get("innerRadius",0),e);if(t){let s=this.series.indexOf(t),r=this.series.length,l=t.get("radius");return l!=null?i+B(l,e-i):i+(e-i)/r*(s+1)}return e}innerRadius(t){let e=this.radius(),i=B(this.get("innerRadius",0),e);if(i<0&&(i=e+i),t){let s=this.series.indexOf(t),r=this.series.length,l=t.get("innerRadius");return l!=null?i+B(l,e-i):i+(e-i)/r*s}return i}_updateSize(){super._updateSize(),this.markDirtyKey("radius")}};Object.defineProperty(ee,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(ee,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:X.classNames.concat([ee.className])});var te=class extends Y{_makeSlices(){return new ue(ce.new({}),()=>G._new(this._root,{themeTags:oe(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template]))}_makeLabels(){return new ue(ce.new({}),()=>Q._new(this._root,{themeTags:oe(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template]))}_makeTicks(){return new ue(ce.new({}),()=>Xe._new(this._root,{themeTags:oe(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template]))}processDataItem(t){super.processDataItem(t);let e=this.makeSlice(t);e.on("scale",()=>{this._updateTick(t)}),e.on("shiftRadius",()=>{this._updateTick(t)}),e.events.on("positionchanged",()=>{this._updateTick(t)});let i=this.makeLabel(t);i.events.on("positionchanged",()=>{this._updateTick(t)}),this.makeTick(t),e.events.on("positionchanged",()=>{i.markDirty()})}_getNextUp(){let t=this.chart;return t?t._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){let t=this.chart;return t?-t._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();let t=this.chart;if(t){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let i=e.get("textType");i!=null&&i!="aligned"||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();let e=this.get("startAngle",t.get("startAngle",-90)),i=this.get("endAngle",t.get("endAngle",270))-e,s=e,r=t.radius(this);this.setPrivateRaw("radius",r);let l=t.innerRadius(this)*t.getPrivate("irModifyer",1);l<0&&(l=r+l),R(this._dataItems,a=>{this.updateLegendValue(a);let y=i*a.get("valuePercentTotal")/100,o=a.get("slice");if(o){o.set("radius",r),o.set("innerRadius",l),o.set("startAngle",s),o.set("arc",y);let h=a.get("fill");o._setDefault("fill",h),o._setDefault("stroke",h);let c=a.get("fillPattern");o._setDefault("fillPattern",c)}let n=we(s+y/2),g=a.get("label");if(g&&(g.setPrivate("radius",r),g.setPrivate("innerRadius",l),g.set("labelAngle",n),g.get("textType")=="aligned")){let h=r+g.get("radius",0),c=r*C(n);n>90&&n<=270?(g.isHidden()||g.isHiding()||this._lLabels.push({label:g,y:c}),h*=-1,h-=this.labelsContainer.get("paddingLeft",0),g.set("centerX",le),g.setPrivateRaw("left",!0)):(g.isHidden()||g.isHiding()||this._rLabels.push({label:g,y:c}),h+=this.labelsContainer.get("paddingRight",0),g.set("centerX",0),g.setPrivateRaw("left",!1)),g.set("x",h),g.set("y",r*C(n))}s+=y,this._updateTick(a)})}}}_updateTick(t){let e=t.get("tick"),i=t.get("label"),s=t.get("slice"),r=e.get("location",1);if(e&&i&&s){let l=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*r,a=i.get("labelAngle",0),y=F(a),o=C(a),n=this.labelsContainer,g=n.get("paddingLeft",0),h=n.get("paddingRight",0),c=0,b=0;c=i.x(),b=i.y();let f=[];if(c!=0||b!=0){if(i.get("textType")=="circular"){let m=i.radius()-i.get("paddingBottom",0),u=i.get("labelAngle",0);c=m*F(u),b=m*C(u)}let P=-h;i.getPrivate("left")&&(P=g),f=[{x:s.x()+l*y,y:s.y()+l*o},{x:c+P,y:b},{x:c,y:b}]}e.set("points",f)}}_positionBullet(t){let e=t.get("sprite");if(e){let i=e.dataItem.get("slice");if(i){let s=i.get("innerRadius",0),r=i.get("radius",0),l=i.get("startAngle",0)+i.get("arc",0)*t.get("locationX",.5),a=s+(r-s)*t.get("locationY",.5);e.setAll({x:F(l)*a,y:C(l)*a})}}}};Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Y.classNames.concat([te.className])});export{ee as PieChartAm5,te as PieSeriesAm5};
