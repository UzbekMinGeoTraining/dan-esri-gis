import{a as xt,b as At,c as bt,d as Et,e as Ct,f as Ft,g as $t,h as Ot}from"./chunk-SEKMXZL5.js";import{a as dt,c as vt,d as yt,e as wt}from"./chunk-P2YRCTWM.js";import{t as A}from"./chunk-3IBUFXWY.js";function Le(r,o){function i(){this.constructor=r}i.prototype=o.prototype,r.prototype=new i}function k(r,o,i,e){var g=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(g,k.prototype),g.expected=o,g.found=i,g.location=e,g.name="SyntaxError",g}function H(r,o,i){return i=i||" ",r.length>o?r:(o-=r.length,r+(i+=i.repeat(o)).slice(0,o))}function Ue(r,o){var i,e={},g=(o=o!==void 0?o:{}).grammarSource,C={start:mt},z=mt,I="none",R=")",p=",",d="(",F="%",y="px",V="cm",W="mm",X="in",Y="pt",Z="pc",_="deg",tt="rad",et="grad",rt="turn",qt="#",zt=".",It="e",nt=/^[ \t\n\r]/,ut=/^[a-z\-]/,at=/^[0-9a-fA-F]/,ot=/^[+\-]/,P=/^[0-9]/,Rt=j("none"),St=w("none",!1),kt=w(")",!1),ct=w(",",!1),Mt=j("whitespace"),it=N([" ","	",`
`,"\r"],!1,!1),Nt=j("function"),Bt=w("(",!1),Dt=j("identifier"),lt=N([["a","z"],"-"],!1,!1),Tt=j("percentage"),Lt=w("%",!1),Ut=j("length"),Gt=w("px",!1),Ht=w("cm",!1),Jt=w("mm",!1),Kt=w("in",!1),Qt=w("pt",!1),Vt=w("pc",!1),Wt=j("angle"),Xt=w("deg",!1),Yt=w("rad",!1),Zt=w("grad",!1),_t=w("turn",!1),te=j("number"),ee=j("color"),re=w("#",!1),ft=N([["0","9"],["a","f"],["A","F"]],!1,!1),st=N(["+","-"],!1,!1),q=N([["0","9"]],!1,!1),ne=w(".",!1),ue=w("e",!1),ae=function(){return[]},oe=function(t,u){return{type:"function",name:t,parameters:u||[]}},ce=function(t,u){return u.length>0?Te(t,u,3):[t]},ie=function(t){return{type:"quantity",value:t.value,unit:t.unit}},le=function(t){return{type:"color",colorType:t.type,value:t.value}},fe=function(t){return t},se=function(){return T()},pe=function(t){return{value:t,unit:"%"}},he=function(t){return{value:t,unit:"px"}},me=function(t){return{value:t,unit:"cm"}},ge=function(t){return{value:t,unit:"mm"}},de=function(t){return{value:t,unit:"in"}},ve=function(t){return{value:t,unit:"pt"}},ye=function(t){return{value:t,unit:"pc"}},we=function(t){return{value:t,unit:"deg"}},xe=function(t){return{value:t,unit:"rad"}},Ae=function(t){return{value:t,unit:"grad"}},be=function(t){return{value:t,unit:"turn"}},Ee=function(t){return{value:t,unit:null}},Ce=function(){return{type:"hex",value:T()}},Fe=function(t){return{type:"function",value:t}},$e=function(){return{type:"named",value:T()}},Oe=function(){return parseFloat(T())},n=0|o.peg$currPos,h=n,S=[{line:1,column:1}],$=n,D=o.peg$maxFailExpected||[],c=0|o.peg$silentFails;if(o.startRule){if(!(o.startRule in C))throw new Error(`Can't start parsing from rule "`+o.startRule+'".');z=C[o.startRule]}function T(){return r.substring(h,n)}function w(t,u){return{type:"literal",text:t,ignoreCase:u}}function N(t,u,a){return{type:"class",parts:t,inverted:u,ignoreCase:a}}function je(){return{type:"end"}}function j(t){return{type:"other",description:t}}function pt(t){var u,a=S[t];if(a)return a;if(t>=S.length)u=S.length-1;else for(u=t;!S[--u];);for(a={line:(a=S[u]).line,column:a.column};u<t;)r.charCodeAt(u)===10?(a.line++,a.column=1):a.column++,u++;return S[t]=a,a}function ht(t,u,a){var l=pt(t),s=pt(u);return{source:g,start:{offset:t,line:l.line,column:l.column},end:{offset:u,line:s.line,column:s.column}}}function f(t){n<$||(n>$&&($=n,D=[]),D.push(t))}function Pe(t,u,a){return new k(k.buildMessage(t,u),t,u,a)}function mt(){var t;return(t=qe())===e&&(t=ze()),t}function qe(){var t,u;return c++,t=n,x(),r.substr(n,4)===I?(u=I,n+=4):(u=e,c===0&&f(St)),u!==e?(x(),h=t,t=ae()):(n=t,t=e),c--,t===e&&c===0&&f(Rt),t}function ze(){var t,u;if(t=[],(u=U())!==e)for(;u!==e;)t.push(u),u=U();else t=e;return t}function U(){var t,u,a,l;return t=n,x(),(u=Re())!==e?(x(),(a=Ie())===e&&(a=null),x(),r.charCodeAt(n)===41?(l=R,n++):(l=e,c===0&&f(kt)),l!==e?(x(),h=t,t=oe(u,a)):(n=t,t=e)):(n=t,t=e),t}function Ie(){var t,u,a,l,s,m,v,b;if(t=n,(u=G())!==e){for(a=[],l=n,s=x(),r.charCodeAt(n)===44?(m=p,n++):(m=e,c===0&&f(ct)),m===e&&(m=null),v=x(),(b=G())!==e?l=s=[s,m,v,b]:(n=l,l=e);l!==e;)a.push(l),l=n,s=x(),r.charCodeAt(n)===44?(m=p,n++):(m=e,c===0&&f(ct)),m===e&&(m=null),v=x(),(b=G())!==e?l=s=[s,m,v,b]:(n=l,l=e);h=t,t=ce(u,a)}else n=t,t=e;return t}function G(){var t,u;return t=n,(u=Se())===e&&(u=ke())===e&&(u=Me())===e&&(u=Ne()),u!==e&&(h=t,u=ie(u)),(t=u)===e&&(t=n,(u=Be())!==e&&(h=t,u=le(u)),t=u),t}function x(){var t,u;for(c++,t=[],u=r.charAt(n),nt.test(u)?n++:(u=e,c===0&&f(it));u!==e;)t.push(u),u=r.charAt(n),nt.test(u)?n++:(u=e,c===0&&f(it));return c--,u=e,c===0&&f(Mt),t}function Re(){var t,u,a;return c++,t=n,(u=gt())!==e?(r.charCodeAt(n)===40?(a=d,n++):(a=e,c===0&&f(Bt)),a!==e?(h=t,t=fe(u)):(n=t,t=e)):(n=t,t=e),c--,t===e&&(u=e,c===0&&f(Nt)),t}function gt(){var t,u,a;if(c++,t=n,u=[],a=r.charAt(n),ut.test(a)?n++:(a=e,c===0&&f(lt)),a!==e)for(;a!==e;)u.push(a),a=r.charAt(n),ut.test(a)?n++:(a=e,c===0&&f(lt));else u=e;return u!==e&&(h=t,u=se()),c--,(t=u)===e&&(u=e,c===0&&f(Dt)),t}function Se(){var t,u,a;return c++,t=n,x(),(u=E())!==e?(r.charCodeAt(n)===37?(a=F,n++):(a=e,c===0&&f(Lt)),a!==e?(h=t,t=pe(u)):(n=t,t=e)):(n=t,t=e),c--,t===e&&c===0&&f(Tt),t}function ke(){var t,u,a;return c++,t=n,x(),(u=E())!==e?(r.substr(n,2)===y?(a=y,n+=2):(a=e,c===0&&f(Gt)),a!==e?(h=t,t=he(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,x(),(u=E())!==e?(r.substr(n,2)===V?(a=V,n+=2):(a=e,c===0&&f(Ht)),a!==e?(h=t,t=me(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,x(),(u=E())!==e?(r.substr(n,2)===W?(a=W,n+=2):(a=e,c===0&&f(Jt)),a!==e?(h=t,t=ge(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,x(),(u=E())!==e?(r.substr(n,2)===X?(a=X,n+=2):(a=e,c===0&&f(Kt)),a!==e?(h=t,t=de(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,x(),(u=E())!==e?(r.substr(n,2)===Y?(a=Y,n+=2):(a=e,c===0&&f(Qt)),a!==e?(h=t,t=ve(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,x(),(u=E())!==e?(r.substr(n,2)===Z?(a=Z,n+=2):(a=e,c===0&&f(Vt)),a!==e?(h=t,t=ye(u)):(n=t,t=e)):(n=t,t=e)))))),c--,t===e&&c===0&&f(Ut),t}function Me(){var t,u,a;return c++,t=n,(u=E())!==e?(r.substr(n,3)===_?(a=_,n+=3):(a=e,c===0&&f(Xt)),a!==e?(h=t,t=we(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,(u=E())!==e?(r.substr(n,3)===tt?(a=tt,n+=3):(a=e,c===0&&f(Yt)),a!==e?(h=t,t=xe(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,(u=E())!==e?(r.substr(n,4)===et?(a=et,n+=4):(a=e,c===0&&f(Zt)),a!==e?(h=t,t=Ae(u)):(n=t,t=e)):(n=t,t=e),t===e&&(t=n,(u=E())!==e?(r.substr(n,4)===rt?(a=rt,n+=4):(a=e,c===0&&f(_t)),a!==e?(h=t,t=be(u)):(n=t,t=e)):(n=t,t=e)))),c--,t===e&&(u=e,c===0&&f(Wt)),t}function Ne(){var t,u;return c++,t=n,x(),(u=E())!==e?(h=t,t=Ee(u)):(n=t,t=e),c--,t===e&&c===0&&f(te),t}function Be(){var t,u,a,l;if(c++,t=n,r.charCodeAt(n)===35?(u=qt,n++):(u=e,c===0&&f(re)),u!==e){if(a=[],l=r.charAt(n),at.test(l)?n++:(l=e,c===0&&f(ft)),l!==e)for(;l!==e;)a.push(l),l=r.charAt(n),at.test(l)?n++:(l=e,c===0&&f(ft));else a=e;a!==e?(h=t,t=Ce()):(n=t,t=e)}else n=t,t=e;return t===e&&(t=n,(u=U())!==e&&(h=t,u=Fe(u)),(t=u)===e&&(t=n,(u=gt())!==e&&(h=t,u=$e()),t=u)),c--,t===e&&(u=e,c===0&&f(ee)),t}function E(){var t,u,a,l,s,m,v,b;for(t=n,u=r.charAt(n),ot.test(u)?n++:(u=e,c===0&&f(st)),u===e&&(u=null),a=n,l=[],s=r.charAt(n),P.test(s)?n++:(s=e,c===0&&f(q));s!==e;)l.push(s),s=r.charAt(n),P.test(s)?n++:(s=e,c===0&&f(q));if(r.charCodeAt(n)===46?(s=zt,n++):(s=e,c===0&&f(ne)),s!==e){if(m=[],v=r.charAt(n),P.test(v)?n++:(v=e,c===0&&f(q)),v!==e)for(;v!==e;)m.push(v),v=r.charAt(n),P.test(v)?n++:(v=e,c===0&&f(q));else m=e;m!==e?a=l=[l,s,m]:(n=a,a=e)}else n=a,a=e;if(a===e)if(a=[],l=r.charAt(n),P.test(l)?n++:(l=e,c===0&&f(q)),l!==e)for(;l!==e;)a.push(l),l=r.charAt(n),P.test(l)?n++:(l=e,c===0&&f(q));else a=e;if(a!==e){if(l=n,r.charCodeAt(n)===101?(s=It,n++):(s=e,c===0&&f(ue)),s!==e){if(m=r.charAt(n),ot.test(m)?n++:(m=e,c===0&&f(st)),m===e&&(m=null),v=[],b=r.charAt(n),P.test(b)?n++:(b=e,c===0&&f(q)),b!==e)for(;b!==e;)v.push(b),b=r.charAt(n),P.test(b)?n++:(b=e,c===0&&f(q));else v=e;v!==e?l=s=[s,m,v]:(n=l,l=e)}else n=l,l=e;l===e&&(l=null),h=t,t=Oe()}else n=t,t=e;return t}function De(t,u){return t.map(function(a){return a[u]})}function Te(t,u,a){return[t].concat(De(u,a))}if(i=z(),o.peg$library)return{peg$result:i,peg$currPos:n,peg$FAILED:e,peg$maxFailExpected:D,peg$maxFailPos:$};if(i!==e&&n===r.length)return i;throw i!==e&&n<r.length&&f(je()),Pe(D,$<r.length?r.charAt($):null,$<r.length?ht($,$+1):ht($,$))}function fr(r){if(!r||r.length===0)return null;if(typeof r=="string"){let i=jt(r);return i&&i.length!==0?i:null}let o=r.map(i=>{if(!Number.isFinite(i.scale)||i.scale<=0)throw new A("effect:invalid-scale","scale must be finite and greater than 0",{stop:i});return{scale:i.scale,effects:jt(i.value)}});o.sort((i,e)=>e.effects.length-i.effects.length);for(let i=0;i<o.length-1;i++){if(!$t(o[i].effects,o[i+1].effects))throw new A("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:o[i].effects,b:o[i+1].effects});Ot(o[i].effects,o[i+1].effects)}return o.sort((i,e)=>e.scale-i.scale),o}function jt(r){let o;if(!r)return[];try{o=Ue(r)}catch(i){throw new A("effect:invalid-syntax","Invalid effect syntax",{value:r,error:i})}return o.map(i=>Ge(i))}function Ge(r){try{switch(r.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return He(r);case"opacity":return Je(r);case"hue-rotate":return Ke(r);case"blur":return Qe(r);case"drop-shadow":return Ve(r);case"bloom":return We(r)}}catch(o){throw o.details.filter=r,o}throw new A("effect:unknown-effect",`Effect '${r.name}' is not supported`,{effect:r})}function He(r){let o=1;return M(r.parameters,1),r.parameters.length===1&&(o=O(r.parameters[0])),new bt(r.name,o)}function Je(r){let o=1;return M(r.parameters,1),r.parameters.length===1&&(o=O(r.parameters[0])),new Ft(o)}function Ke(r){let o=0;return M(r.parameters,1),r.parameters.length===1&&(o=er(r.parameters[0])),new Ct(o)}function Qe(r){let o=0;return M(r.parameters,1),r.parameters.length===1&&(o=Q(r.parameters[0]),B(o,r.parameters[0])),new At(o)}function Ve(r){let o=[],i=null;for(let e of r.parameters)if(e.type==="color"){if(o.length&&Object.freeze(o),i)throw new A("effect:type-error","Accepts only one color",{});i=rr(e)}else{let g=Q(e);if(Object.isFrozen(o))throw new A("effect:type-error","<length> parameters not consecutive",{lengths:o});o.push(g),o.length===3&&B(g,e)}if(o.length<2||o.length>3)throw new A("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${o.length}}`,{lengths:o});return new Et(o[0],o[1],o[2]||0,i||Pt("black"))}function We(r){let o=1,i=0,e=0;return M(r.parameters,3),r.parameters[0]&&(o=O(r.parameters[0])),r.parameters[1]&&(i=Q(r.parameters[1]),B(i,r.parameters[1])),r.parameters[2]&&(e=O(r.parameters[2])),new xt(o,i,e)}function M(r,o){if(r.length>o)throw new A("effect:type-error",`Function supports up to ${o} parameters, Actual: ${r.length}`,{parameters:r})}function L(r){if(r.type==="color")return"<color>";if(r.unit){if(r.unit in K)return"<length>";if(r.unit in J)return"<angle>";if(r.unit==="%")return"<percentage>"}return"<double>"}function B(r,o){if(r<0)throw new A("effect:type-error",`Negative values are not allowed, Actual: ${r}`,{term:o})}function Xe(r){if(r.type!=="quantity"||r.unit!==null)throw new A("effect:type-error",`Expected <double>, Actual: ${L(r)}`,{term:r})}function Ye(r){if(r.type!=="quantity"||r.unit!==null&&r.unit!=="%")throw new A("effect:type-error",`Expected <double> or <percentage>, Actual: ${L(r)}`,{term:r})}Le(k,Error),k.prototype.format=function(r){var o="Error: "+this.message;if(this.location){var i,e=null;for(i=0;i<r.length;i++)if(r[i].source===this.location.source){e=r[i].text.split(/\r\n|\n|\r/g);break}var g=this.location.start,C=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(g):g,z=this.location.source+":"+C.line+":"+C.column;if(e){var I=this.location.end,R=H("",C.line.toString().length," "),p=e[g.line-1],d=(g.line===I.line?I.column:p.length+1)-g.column||1;o+=`
 --> `+z+`
`+R+` |
`+C.line+" | "+p+`
`+R+" | "+H("",g.column-1," ")+H("",d,"^")}else o+=`
 at `+z}return o},k.buildMessage=function(r,o){var i={literal:function(p){return'"'+g(p.text)+'"'},class:function(p){var d=p.parts.map(function(F){return Array.isArray(F)?C(F[0])+"-"+C(F[1]):C(F)});return"["+(p.inverted?"^":"")+d.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(p){return p.description}};function e(p){return p.charCodeAt(0).toString(16).toUpperCase()}function g(p){return p.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function C(p){return p.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function z(p){return i[p.type](p)}function I(p){var d,F,y=p.map(z);if(y.sort(),y.length>0){for(d=1,F=1;d<y.length;d++)y[d-1]!==y[d]&&(y[F]=y[d],F++);y.length=F}switch(y.length){case 1:return y[0];case 2:return y[0]+" or "+y[1];default:return y.slice(0,-1).join(", ")+", or "+y[y.length-1]}}function R(p){return p?'"'+g(p)+'"':"end of input"}return"Expected "+I(r)+" but "+R(o)+" found."};var J={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Ze(r){if(r.type!=="quantity"||!(r.value===0&&r.unit===null||r.unit&&J[r.unit]!=null))throw new A("effect:type-error",`Expected <angle>, Actual: ${L(r)}`,{term:r})}var K={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function _e(r){if(r.type!=="quantity"||!(r.value===0&&r.unit===null||r.unit&&K[r.unit]!=null))throw new A("effect:type-error",`Expected <length>, Actual: ${L(r)}`,{term:r})}function O(r){Ye(r);let o=r.value;return B(o,r),r.unit==="%"?.01*o:o}function tr(r){return Xe(r),B(r.value,r),r.value}function er(r){return Ze(r),r.value*J[r.unit]||0}function Q(r){return _e(r),r.value*K[r.unit]||0}function rr(r){switch(r.colorType){case"hex":return wt(r.value);case"named":return Pt(r.value);case"function":return ar(r.value)}}function Pt(r){if(!dt(r))throw new A("effect:unknown-color",`color '${r}' isn't valid`,{namedColor:r});return vt(r)}var nr=/^rgba?/i,ur=/^hsla?/i;function ar(r){if(M(r.parameters,4),nr.test(r.name))return[O(r.parameters[0]),O(r.parameters[1]),O(r.parameters[2]),r.parameters[3]?O(r.parameters[3]):1];if(ur.test(r.name))return yt(tr(r.parameters[0]),O(r.parameters[1]),O(r.parameters[2]),r.parameters[3]?O(r.parameters[3]):1);throw new A("effect:syntax-error",`Invalid color function '${r.name}'`,{colorFunction:r})}export{fr as a};
