import{b as Ze}from"./chunk-YRE2G4RX.js";import"./chunk-JEGVIFEP.js";var er,rr={exports:{}};function Bt(){return er||(er=1,me=rr,ae=typeof document<"u"?document.currentScript?.src:void 0,ve=function(tr={}){var pe,G,s=Object.assign({},tr),nr=new Promise((e,r)=>{pe=e,G=r}),ar=!0,ye=Object.assign({},s),ge="./this.program",D="";function or(e){return s.locateFile?s.locateFile(e,D):D+e}typeof document<"u"&&document.currentScript&&(D=document.currentScript.src),ae&&(D=ae),D=D.startsWith("blob:")?"":D.substr(0,D.replace(/[?#].*/,"").lastIndexOf("/")+1),s.print||console.log.bind(console);var V,J,U=s.printErr||console.error.bind(console);Object.assign(s,ye),ye=null,s.arguments&&s.arguments,s.thisProgram&&(ge=s.thisProgram),s.quit&&s.quit,s.wasmBinary&&(V=s.wasmBinary);var P,_,H,Y,g,v,we,_e,be=!1;function Ae(){var e=J.buffer;s.HEAP8=P=new Int8Array(e),s.HEAP16=H=new Int16Array(e),s.HEAPU8=_=new Uint8Array(e),s.HEAPU16=Y=new Uint16Array(e),s.HEAP32=g=new Int32Array(e),s.HEAPU32=v=new Uint32Array(e),s.HEAPF32=we=new Float32Array(e),s.HEAPF64=_e=new Float64Array(e)}var Te=[],Ce=[],Fe=[];function ir(){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)lr(s.preRun.shift());oe(Te)}function ur(){oe(Ce)}function sr(){if(s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;)fr(s.postRun.shift());oe(Fe)}function lr(e){Te.unshift(e)}function cr(e){Ce.unshift(e)}function fr(e){Fe.unshift(e)}var x=0,B=null;function dr(e){x++,s.monitorRunDependencies?.(x)}function hr(e){if(x--,s.monitorRunDependencies?.(x),x==0&&B){var r=B;B=null,r()}}function Pe(e){s.onAbort?.(e),U(e="Aborted("+e+")"),be=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw G(r),r}var z,mr="data:application/octet-stream;base64,",We=e=>e.startsWith(mr);function Ee(e){if(e==z&&V)return new Uint8Array(V);throw"both async and sync fetching of the wasm failed"}function vr(e){return!V&&ar&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()}).catch(()=>Ee(e)):Promise.resolve().then(()=>Ee(e))}function Se(e,r,t){return vr(e).then(n=>WebAssembly.instantiate(n,r)).then(t,n=>{U(`failed to asynchronously prepare wasm: ${n}`),Pe(n)})}function pr(e,r,t,n){return e||typeof WebAssembly.instantiateStreaming!="function"||We(r)||typeof fetch!="function"?Se(r,t,n):fetch(r,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,t).then(n,function(o){return U(`wasm streaming compile failed: ${o}`),U("falling back to ArrayBuffer instantiation"),Se(r,t,n)}))}function yr(){return{a:Ut}}function gr(){var e=yr();function r(n,a){return F=n.exports,J=F.M,Ae(),ke=F.P,cr(F.N),hr(),F}function t(n){r(n.instance)}if(dr(),s.instantiateWasm)try{return s.instantiateWasm(e,r)}catch(n){U(`Module.instantiateWasm callback failed with error: ${n}`),G(n)}return pr(V,z,e,t).catch(G),{}}We(z="lclayout.wasm")||(z=or(z));var oe=e=>{for(;e.length>0;)e.shift()(s)};s.noExitRuntime;class wr{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){v[this.ptr+4>>2]=r}get_type(){return v[this.ptr+4>>2]}set_destructor(r){v[this.ptr+8>>2]=r}get_destructor(){return v[this.ptr+8>>2]}set_caught(r){r=r?1:0,P[this.ptr+12]=r}get_caught(){return P[this.ptr+12]!=0}set_rethrown(r){r=r?1:0,P[this.ptr+13]=r}get_rethrown(){return P[this.ptr+13]!=0}init(r,t){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(t)}set_adjusted_ptr(r){v[this.ptr+16>>2]=r}get_adjusted_ptr(){return v[this.ptr+16>>2]}get_exception_ptr(){if(Ke(this.get_type()))return v[this.excPtr>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.excPtr}}var _r=(e,r,t)=>{throw new wr(e).init(r,t),e},L={},ie=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function X(e){return this.fromWireType(v[e>>2])}var Oe,$e,Me,I={},k={},K={},De=e=>{throw new Oe(e)},ue=(e,r,t)=>{function n(i){var c=t(i);c.length!==e.length&&De("Mismatched type converter count");for(var f=0;f<e.length;++f)E(e[f],c[f])}e.forEach(function(i){K[i]=r});var a=new Array(r.length),o=[],l=0;r.forEach((i,c)=>{k.hasOwnProperty(i)?a[c]=k[i]:(o.push(i),I.hasOwnProperty(i)||(I[i]=[]),I[i].push(()=>{a[c]=k[i],++l===o.length&&n(a)}))}),o.length===0&&n(a)},br=e=>{var r=L[e];delete L[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map(l=>l.getterReturnType).concat(a.map(l=>l.setterArgumentType));ue([e],o,l=>{var i={};return a.forEach((c,f)=>{var h=c.fieldName,p=l[f],m=c.getter,y=c.getterContext,S=l[f+a.length],R=c.setter,W=c.setterContext;i[h]={read:M=>p.fromWireType(m(y,M)),write:(M,u)=>{var d=[];R(W,M,S.toWireType(d,u)),ie(d)}}}),[{name:r.name,fromWireType:c=>{var f={};for(var h in i)f[h]=i[h].read(c);return n(c),f},toWireType:(c,f)=>{for(var h in i)if(!(h in f))throw new TypeError(`Missing field: "${h}"`);var p=t();for(h in i)i[h].write(p,f[h]);return c!==null&&c.push(n,p),p},argPackAdvance:O,readValueFromPointer:X,destructorFunction:n}]})},Ar=(e,r,t,n,a)=>{},Tr=()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);$e=e},w=e=>{for(var r="",t=e;_[t];)r+=$e[_[t++]];return r},C=e=>{throw new Me(e)};function Cr(e,r,t={}){var n=r.name;if(e||C(`type "${n}" must have a positive integer typeid pointer`),k.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;C(`Cannot register type '${n}' twice`)}if(k[e]=r,delete K[e],I.hasOwnProperty(e)){var a=I[e];delete I[e],a.forEach(o=>o())}}function E(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Cr(e,r,t)}var O=8,Fr=(e,r,t,n)=>{E(e,{name:r=w(r),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?t:n},argPackAdvance:O,readValueFromPointer:function(a){return this.fromWireType(_[a])},destructorFunction:null})},Pr=(e,r,t)=>{e=w(e),ue([],[r],n=>(n=n[0],s[e]=n.fromWireType(t),[]))},se=[],j=[],le=e=>{e>9&&--j[e+1]==0&&(j[e]=void 0,se.push(e))},Wr=()=>j.length/2-5-se.length,Er=()=>{j.push(0,1,void 0,1,null,1,!0,1,!1,1),s.count_emval_handles=Wr},b={toValue:e=>(e||C("Cannot use deleted val. handle = "+e),j[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let r=se.pop()||j.length;return j[r]=e,j[r+1]=1,r}}}},Sr={name:"emscripten::val",fromWireType:e=>{var r=b.toValue(e);return le(e),r},toWireType:(e,r)=>b.toHandle(r),argPackAdvance:O,readValueFromPointer:X,destructorFunction:null},je=e=>E(e,Sr),Or=(e,r,t)=>{if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(...a){return e[r].overloadTable.hasOwnProperty(a.length)||C(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[a.length].apply(this,a)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},Re=(e,r,t)=>{s.hasOwnProperty(e)?((t===void 0||s[e].overloadTable!==void 0&&s[e].overloadTable[t]!==void 0)&&C(`Cannot register public name '${e}' twice`),Or(s,e,e),s.hasOwnProperty(t)&&C(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),s[e].overloadTable[t]=r):(s[e]=r,t!==void 0&&(s[e].numArguments=t))},$r=(e,r,t)=>{switch(r){case 1:return t?function(n){return this.fromWireType(P[n])}:function(n){return this.fromWireType(_[n])};case 2:return t?function(n){return this.fromWireType(H[n>>1])}:function(n){return this.fromWireType(Y[n>>1])};case 4:return t?function(n){return this.fromWireType(g[n>>2])}:function(n){return this.fromWireType(v[n>>2])};default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Mr=(e,r,t,n)=>{function a(){}r=w(r),a.values={},E(e,{name:r,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,l)=>l.value,argPackAdvance:O,readValueFromPointer:$r(r,t,n),destructorFunction:null}),Re(r,a)},Q=(e,r)=>Object.defineProperty(r,"name",{value:e}),xe=e=>{var r=Xe(e),t=w(r);return $(r),t},Z=(e,r)=>{var t=k[e];return t===void 0&&C(`${r} has unknown type ${xe(e)}`),t},Dr=(e,r,t)=>{var n=Z(e,"enum");r=w(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Q(`${n.name}_${r}`,function(){})}});a.values[t]=o,a[r]=o},jr=(e,r)=>{switch(r){case 4:return function(t){return this.fromWireType(we[t>>2])};case 8:return function(t){return this.fromWireType(_e[t>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},Rr=(e,r,t)=>{E(e,{name:r=w(r),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:O,readValueFromPointer:jr(r,t),destructorFunction:null})};function xr(e){for(var r=1;r<e.length;++r)if(e[r]!==null&&e[r].destructorFunction===void 0)return!0;return!1}function kr(e,r,t,n,a,o){var l=r.length;l<2&&C("argTypes array size mismatch! Must at least get return value and 'this' types!");var i=r[1]!==null&&t!==null,c=xr(r),f=r[0].name!=="void",h=l-2,p=new Array(h),m=[],y=[];return Q(e,function(...S){var R;S.length!==h&&C(`function ${e} called with ${S.length} arguments, expected ${h}`),y.length=0,m.length=i?2:1,m[0]=a,i&&(R=r[1].toWireType(y,this),m[1]=R);for(var W=0;W<h;++W)p[W]=r[W+2].toWireType(y,S[W]),m.push(p[W]);function M(u){if(c)ie(y);else for(var d=i?1:2;d<r.length;d++){var A=d===1?R:p[d-2];r[d].destructorFunction!==null&&r[d].destructorFunction(A)}if(f)return r[0].fromWireType(u)}return M(n(...m))})}var ke,He,Ie,Hr=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(v[r+4*n>>2]);return t},Ir=(e,r,t)=>{s.hasOwnProperty(e)||De("Replacing nonexistent public symbol"),s[e].overloadTable!==void 0&&t!==void 0?s[e].overloadTable[t]=r:(s[e]=r,s[e].argCount=t)},Vr=(e,r,t)=>(e=e.replace(/p/g,"i"),(0,s["dynCall_"+e])(r,...t)),ee=[],Ve=e=>{var r=ee[e];return r||(e>=ee.length&&(ee.length=e+1),ee[e]=r=ke.get(e)),r},Ur=(e,r,t=[])=>e.includes("j")?Vr(e,r,t):Ve(r)(...t),Yr=(e,r)=>(...t)=>Ur(e,r,t),N=(e,r)=>{function t(){return e.includes("j")?Yr(e,r):Ve(r)}e=w(e);var n=t();return typeof n!="function"&&C(`unknown function pointer with signature ${e}: ${r}`),n},Br=(e,r)=>{var t=Q(r,function(n){this.name=r,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},zr=(e,r)=>{var t=[],n={};function a(o){n[o]||k[o]||(K[o]?K[o].forEach(a):(t.push(o),n[o]=!0))}throw r.forEach(a),new He(`${e}: `+t.map(xe).join([", "]))},Nr=e=>{let r=(e=e.trim()).indexOf("(");return r!==-1?e.substr(0,r):e},qr=(e,r,t,n,a,o,l)=>{var i=Hr(r,t);e=w(e),e=Nr(e),a=N(n,a),Re(e,function(){zr(`Cannot call ${e} due to unbound types`,i)},r-1),ue([],i,c=>{var f=[c[0],null].concat(c.slice(1));return Ir(e,kr(e,f,null,a,o),r-1),[]})},Gr=(e,r,t)=>{switch(r){case 1:return t?n=>P[n]:n=>_[n];case 2:return t?n=>H[n>>1]:n=>Y[n>>1];case 4:return t?n=>g[n>>2]:n=>v[n>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Jr=(e,r,t,n,a)=>{r=w(r);var o=f=>f;if(n===0){var l=32-8*t;o=f=>f<<l>>>l}var i=r.includes("unsigned"),c=(f,h)=>{};E(e,{name:r,fromWireType:o,toWireType:i?function(f,h){return c(h,this.name),h>>>0}:function(f,h){return c(h,this.name),h},argPackAdvance:O,readValueFromPointer:Gr(r,t,n!==0),destructorFunction:null})},Lr=(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(o){var l=v[o>>2],i=v[o+4>>2];return new n(P.buffer,i,l)}E(e,{name:t=w(t),fromWireType:a,argPackAdvance:O,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Xr=(e,r)=>{je(e)},Ue=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,l=0;l<e.length;++l){var i=e.charCodeAt(l);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++l)),i<=127){if(t>=o)break;r[t++]=i}else if(i<=2047){if(t+1>=o)break;r[t++]=192|i>>6,r[t++]=128|63&i}else if(i<=65535){if(t+2>=o)break;r[t++]=224|i>>12,r[t++]=128|i>>6&63,r[t++]=128|63&i}else{if(t+3>=o)break;r[t++]=240|i>>18,r[t++]=128|i>>12&63,r[t++]=128|i>>6&63,r[t++]=128|63&i}}return r[t]=0,t-a},Kr=(e,r,t)=>Ue(e,_,r,t),Ye=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},Be=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Qr=(e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&Be)return Be.decode(e.subarray(r,a));for(var o="";r<a;){var l=e[r++];if(128&l){var i=63&e[r++];if((224&l)!=192){var c=63&e[r++];if((l=(240&l)==224?(15&l)<<12|i<<6|c:(7&l)<<18|i<<12|c<<6|63&e[r++])<65536)o+=String.fromCharCode(l);else{var f=l-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&l)<<6|i)}else o+=String.fromCharCode(l)}return o},ce=(e,r)=>e?Qr(_,e,r):"",Zr=(e,r)=>{var t=(r=w(r))==="std::string";E(e,{name:r,fromWireType(n){var a,o=v[n>>2],l=n+4;if(t)for(var i=l,c=0;c<=o;++c){var f=l+c;if(c==o||_[f]==0){var h=ce(i,f-i);a===void 0?a=h:(a+="\0",a+=h),i=f+1}}else{var p=new Array(o);for(c=0;c<o;++c)p[c]=String.fromCharCode(_[l+c]);a=p.join("")}return $(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var l=typeof a=="string";l||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||C("Cannot pass non-string to std::string"),o=t&&l?Ye(a):a.length;var i=he(4+o+1),c=i+4;if(v[i>>2]=o,t&&l)Kr(a,c,o+1);else if(l)for(var f=0;f<o;++f){var h=a.charCodeAt(f);h>255&&($(c),C("String has UTF-16 code units that do not fit in 8 bits")),_[c+f]=h}else for(f=0;f<o;++f)_[c+f]=a[f];return n!==null&&n.push($,i),i},argPackAdvance:O,readValueFromPointer:X,destructorFunction(n){$(n)}})},ze=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,et=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&Y[n];)++n;if((t=n<<1)-e>32&&ze)return ze.decode(_.subarray(e,t));for(var o="",l=0;!(l>=r/2);++l){var i=H[e+2*l>>1];if(i==0)break;o+=String.fromCharCode(i)}return o},rt=(e,r,t)=>{if(t??=2147483647,t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var l=e.charCodeAt(o);H[r>>1]=l,r+=2}return H[r>>1]=0,r-n},tt=e=>2*e.length,nt=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=g[e+4*t>>2];if(a==0)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},at=(e,r,t)=>{if(t??=2147483647,t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var l=e.charCodeAt(o);if(l>=55296&&l<=57343&&(l=65536+((1023&l)<<10)|1023&e.charCodeAt(++o)),g[r>>2]=l,(r+=4)+4>a)break}return g[r>>2]=0,r-n},ot=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},it=(e,r,t)=>{var n,a,o,l;t=w(t),r===2?(n=et,a=rt,l=tt,o=i=>Y[i>>1]):r===4&&(n=nt,a=at,l=ot,o=i=>v[i>>2]),E(e,{name:t,fromWireType:i=>{for(var c,f=v[i>>2],h=i+4,p=0;p<=f;++p){var m=i+4+p*r;if(p==f||o(m)==0){var y=n(h,m-h);c===void 0?c=y:(c+="\0",c+=y),h=m+r}}return $(i),c},toWireType:(i,c)=>{typeof c!="string"&&C(`Cannot pass non-string to C++ string type ${t}`);var f=l(c),h=he(4+f+r);return v[h>>2]=f/r,a(c,h+4,f+r),i!==null&&i.push($,h),h},argPackAdvance:O,readValueFromPointer:X,destructorFunction(i){$(i)}})},ut=(e,r,t,n,a,o)=>{L[e]={name:w(r),rawConstructor:N(t,n),rawDestructor:N(a,o),fields:[]}},st=(e,r,t,n,a,o,l,i,c,f)=>{L[e].fields.push({fieldName:w(r),getterReturnType:t,getter:N(n,a),getterContext:o,setterArgumentType:l,setter:N(i,c),setterContext:f})},lt=(e,r)=>{E(e,{isVoid:!0,name:r=w(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},ct=1,ft=()=>ct,dt=(e,r,t)=>_.copyWithin(e,r,r+t),Ne=(e,r,t)=>{var n=[],a=e.toWireType(n,t);return n.length&&(v[r>>2]=b.toHandle(n)),a},ht=(e,r,t)=>(e=b.toValue(e),r=Z(r,"emval::as"),Ne(r,t,e)),mt={},qe=e=>{var r=mt[e];return r===void 0?w(e):r},fe=[],vt=(e,r,t,n,a)=>(e=fe[e])(r=b.toValue(r),r[t=qe(t)],n,a),pt=e=>{var r=fe.length;return fe.push(e),r},yt=(e,r)=>{for(var t=new Array(e),n=0;n<e;++n)t[n]=Z(v[r+4*n>>2],"parameter "+n);return t},gt=Reflect.construct,wt=(e,r,t)=>{var n=yt(e,r),a=n.shift();e--;var o=new Array(e),l=(c,f,h,p)=>{for(var m=0,y=0;y<e;++y)o[y]=n[y].readValueFromPointer(p+m),m+=n[y].argPackAdvance;var S=t===1?gt(f,o):f.apply(c,o);return Ne(a,h,S)},i=`methodCaller<(${n.map(c=>c.name).join(", ")}) => ${a.name}>`;return pt(Q(i,l))},_t=(e,r)=>(e=b.toValue(e),r=b.toValue(r),b.toHandle(e[r])),bt=()=>b.toHandle([]),At=e=>{e=b.toValue(e);for(var r=new Array(e.length),t=0;t<e.length;t++)r[t]=e[t];return b.toHandle(r)},Tt=e=>b.toHandle(qe(e)),Ct=e=>{var r=b.toValue(e);ie(r),le(e)},Ft=(e,r)=>{var t=(e=Z(e,"_emval_take_value")).readValueFromPointer(r);return b.toHandle(t)},Pt=()=>{Pe("")},Wt=()=>Date.now(),Ge=()=>2147483648,Et=()=>Ge();Ie=()=>performance.now();var St=e=>{var r=(e-J.buffer.byteLength+65535)/65536;try{return J.grow(r),Ae(),1}catch{}},Ot=e=>{var r=_.length;e>>>=0;var t=Ge();if(e>t)return!1;for(var n=(i,c)=>i+(c-i%c)%c,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var l=Math.min(t,n(Math.max(e,o),65536));if(St(l))return!0}return!1},de={},$t=()=>ge||"./this.program",q=()=>{if(!q.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:$t()};for(var r in de)de[r]===void 0?delete e[r]:e[r]=de[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);q.strings=t}return q.strings},Mt=(e,r)=>{for(var t=0;t<e.length;++t)P[r++]=e.charCodeAt(t);P[r]=0},Dt=(e,r)=>{var t=0;return q().forEach((n,a)=>{var o=r+t;v[e+4*a>>2]=o,Mt(n,o),t+=n.length+1}),0},jt=(e,r)=>{var t=q();v[e>>2]=t.length;var n=0;return t.forEach(a=>n+=a.length+1),v[r>>2]=n,0},re=e=>e%4==0&&(e%100!=0||e%400==0),Rt=(e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t},Je=[31,29,31,30,31,30,31,31,30,31,30,31],Le=[31,28,31,30,31,30,31,31,30,31,30,31],xt=(e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=re(t.getFullYear()),a=t.getMonth(),o=(n?Je:Le)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t};function kt(e,r,t){var n=Ye(e)+1,a=new Array(n);return Ue(e,a,0,a.length),a}var Ht=(e,r)=>{P.set(e,r)},It=(e,r,t,n)=>{var a=v[n+40>>2],o={tm_sec:g[n>>2],tm_min:g[n+4>>2],tm_hour:g[n+8>>2],tm_mday:g[n+12>>2],tm_mon:g[n+16>>2],tm_year:g[n+20>>2],tm_wday:g[n+24>>2],tm_yday:g[n+28>>2],tm_isdst:g[n+32>>2],tm_gmtoff:g[n+36>>2],tm_zone:a?ce(a):""},l=ce(t),i={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in i)l=l.replace(new RegExp(c,"g"),i[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"];function p(u,d,A){for(var T=typeof u=="number"?u.toString():u||"";T.length<d;)T=A[0]+T;return T}function m(u,d){return p(u,d,"0")}function y(u,d){function A(ne){return ne<0?-1:ne>0?1:0}var T;return(T=A(u.getFullYear()-d.getFullYear()))===0&&(T=A(u.getMonth()-d.getMonth()))===0&&(T=A(u.getDate()-d.getDate())),T}function S(u){switch(u.getDay()){case 0:return new Date(u.getFullYear()-1,11,29);case 1:return u;case 2:return new Date(u.getFullYear(),0,3);case 3:return new Date(u.getFullYear(),0,2);case 4:return new Date(u.getFullYear(),0,1);case 5:return new Date(u.getFullYear()-1,11,31);case 6:return new Date(u.getFullYear()-1,11,30)}}function R(u){var d=xt(new Date(u.tm_year+1900,0,1),u.tm_yday),A=new Date(d.getFullYear(),0,4),T=new Date(d.getFullYear()+1,0,4),ne=S(A),Yt=S(T);return y(ne,d)<=0?y(Yt,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var W={"%a":u=>f[u.tm_wday].substring(0,3),"%A":u=>f[u.tm_wday],"%b":u=>h[u.tm_mon].substring(0,3),"%B":u=>h[u.tm_mon],"%C":u=>m((u.tm_year+1900)/100|0,2),"%d":u=>m(u.tm_mday,2),"%e":u=>p(u.tm_mday,2," "),"%g":u=>R(u).toString().substring(2),"%G":R,"%H":u=>m(u.tm_hour,2),"%I":u=>{var d=u.tm_hour;return d==0?d=12:d>12&&(d-=12),m(d,2)},"%j":u=>m(u.tm_mday+Rt(re(u.tm_year+1900)?Je:Le,u.tm_mon-1),3),"%m":u=>m(u.tm_mon+1,2),"%M":u=>m(u.tm_min,2),"%n":()=>`
`,"%p":u=>u.tm_hour>=0&&u.tm_hour<12?"AM":"PM","%S":u=>m(u.tm_sec,2),"%t":()=>"	","%u":u=>u.tm_wday||7,"%U":u=>{var d=u.tm_yday+7-u.tm_wday;return m(Math.floor(d/7),2)},"%V":u=>{var d=Math.floor((u.tm_yday+7-(u.tm_wday+6)%7)/7);if((u.tm_wday+371-u.tm_yday-2)%7<=2&&d++,d){if(d==53){var A=(u.tm_wday+371-u.tm_yday)%7;A==4||A==3&&re(u.tm_year)||(d=1)}}else{d=52;var T=(u.tm_wday+7-u.tm_yday-1)%7;(T==4||T==5&&re(u.tm_year%400-1))&&d++}return m(d,2)},"%w":u=>u.tm_wday,"%W":u=>{var d=u.tm_yday+7-(u.tm_wday+6)%7;return m(Math.floor(d/7),2)},"%y":u=>(u.tm_year+1900).toString().substring(2),"%Y":u=>u.tm_year+1900,"%z":u=>{var d=u.tm_gmtoff,A=d>=0;return d=(d=Math.abs(d)/60)/60*100+d%60,(A?"+":"-")+("0000"+d).slice(-4)},"%Z":u=>u.tm_zone,"%%":()=>"%"};for(var c in l=l.replace(/%%/g,"\0\0"),W)l.includes(c)&&(l=l.replace(new RegExp(c,"g"),W[c](o)));var M=kt(l=l.replace(/\0\0/g,"%"));return M.length>r?0:(Ht(M,e),M.length-1)},Vt=(e,r,t,n,a)=>It(e,r,t,n);Oe=s.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Tr(),Me=s.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Er(),He=s.UnboundTypeError=Br(Error,"UnboundTypeError");var te,Ut={a:_r,j:br,x:Ar,F:Fr,u:Pr,w:je,v:Mr,q:Dr,t:Rr,e:qr,l:Jr,f:Lr,L:Xr,s:Zr,r:it,k:ut,b:st,K:lt,D:ft,I:dt,g:ht,n:vt,c:le,o:wt,h:_t,p:bt,J:At,m:Tt,d:Ct,i:Ft,C:Pt,E:Wt,y:Et,H:Ie,G:Ot,A:Dt,B:jt,z:Vt},F=gr(),Xe=e=>(Xe=F.O)(e),he=s._malloc=e=>(he=s._malloc=F.Q)(e),$=s._free=e=>($=s._free=F.R)(e),Ke=e=>(Ke=F.S)(e);function Qe(){function e(){te||(te=!0,s.calledRun=!0,be||(ur(),pe(s),s.onRuntimeInitialized&&s.onRuntimeInitialized(),sr()))}x>0||(ir(),x>0||(s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),e()},1)):e()))}if(s.dynCall_viijii=(e,r,t,n,a,o,l)=>(s.dynCall_viijii=F.T)(e,r,t,n,a,o,l),s.dynCall_iiiiij=(e,r,t,n,a,o,l)=>(s.dynCall_iiiiij=F.U)(e,r,t,n,a,o,l),s.dynCall_iiiiijj=(e,r,t,n,a,o,l,i,c)=>(s.dynCall_iiiiijj=F.V)(e,r,t,n,a,o,l,i,c),s.dynCall_iiiiiijj=(e,r,t,n,a,o,l,i,c,f)=>(s.dynCall_iiiiiijj=F.W)(e,r,t,n,a,o,l,i,c,f),B=function e(){te||Qe(),te||(B=e)},s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();return Qe(),nr},me.exports=ve),rr.exports;var me,ae,ve}var zt=Ze(Bt()),qt=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));export{qt as l};
