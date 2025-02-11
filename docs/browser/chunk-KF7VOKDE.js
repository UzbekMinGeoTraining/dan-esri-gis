import{j as p,k as v}from"./chunk-O2MTVLJU.js";import{f as C}from"./chunk-C73532AX.js";import{a as I}from"./chunk-JEGVIFEP.js";var V=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function L(e){return`${e.split("-").map((n,i)=>i===0?n:`${n[0].toUpperCase()}${n.slice(1)}`).join("")}${V.includes(e)?"Input":"Change"}`}var m="hidden-form-input";function E(e){return"checked"in e}var h=new WeakMap,g=new WeakSet;function R(e,t){if(v(t.parentElement,"[form]"))return!0;let n="calciteInternalFormComponentRegister",i=!1;return e.addEventListener(n,o=>{i=o.composedPath().some(l=>g.has(l)),o.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}function A(e,{status:t,message:a,icon:n}){"status"in e&&(e.status=t),"validationIcon"in e&&typeof e.validationIcon!="string"&&(e.validationIcon=n),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=a)}function k(e){return e.nodeName==="CALCITE-RADIO-BUTTON"?v(e,"calcite-radio-button-group"):e}var H=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function F(e){let t=e?.target,a=t?.validationMessage,n=k(t?.parentElement);if(!n)return;let i=n?.nodeName?.toLowerCase(),o=i?.split("-");if(o.length<2||o[0]!=="calcite")return;e?.preventDefault(),"validity"in n&&(n.validity=t?.validity),n.dispatchEvent(H),A(n,{message:a,icon:!0,status:"invalid"});let l=L(i);n.addEventListener(l,()=>{"status"in n&&(n.status="idle"),"validationIcon"in n&&!n.validationIcon&&(n.validationIcon=!1),"validationMessage"in n&&n.validationMessage===a&&(n.validationMessage=""),"validity"in n&&(n.validity=t?.validity)},{once:!0})}function D(e){let{formEl:t}=e;return t?(t.addEventListener("invalid",F,!0),t.requestSubmit(),t.removeEventListener("invalid",F,!0),requestAnimationFrame(()=>{let a=t.querySelectorAll("[status=invalid]");for(let n of a)if(n?.validationMessage){n?.setFocus();break}}),!0):!1}function W(e){e.formEl?.reset()}function $(e){let{el:t,value:a}=e,n=w(e);if(!n||R(n,t))return;e.formEl=n,e.defaultValue=a,E(e)&&(e.defaultChecked=e.checked);let i=(e.onFormReset||q).bind(e);n.addEventListener("reset",i),h.set(e.el,i),g.add(t)}function w(e){let{el:t,form:a}=e;return a?p(t,{id:a}):v(t,"form")}function q(){if("status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),E(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function O(e){let{el:t,formEl:a}=e;if(!a)return;let n=h.get(t);a.removeEventListener("reset",n),h.delete(t),e.formEl=null,g.delete(t)}var P="calciteInternalHiddenInputInput",M=e=>{e.target.dispatchEvent(new CustomEvent(P,{bubbles:!0}))},b=e=>e.removeEventListener("input",M);function N(e){let{el:t,formEl:a,name:n,value:i}=e,{ownerDocument:o}=t,l=t.querySelectorAll(`input[slot="${m}"]`);if(!a||!n){l.forEach(s=>{b(s),s.remove()});return}let f=Array.isArray(i)?i:[i],d=[],c=new Set;l.forEach(s=>{let r=f.find(S=>S==s.value);r!=null?(c.add(r),y(e,s,r)):d.push(s)});let u;f.forEach(s=>{if(c.has(s))return;let r=d.pop();r||(r=o.createElement("input"),r.slot=m),u||(u=o.createDocumentFragment()),u.append(r),r.addEventListener("input",M),y(e,r,s)}),u&&t.append(u),d.forEach(s=>{b(s),s.remove()})}function y(e,t,a){let{defaultValue:n,disabled:i,form:o,name:l,required:f}=e;t.defaultValue=n,t.disabled=i,t.name=l,t.required=f,t.tabIndex=-1,o?t.setAttribute("form",o):t.removeAttribute("form"),E(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?a||"on":""):t.value=a||"",e.syncHiddenFormInput?.(t);let d=k(e.el);if(d&&"validity"in d)for(let c in I({},t?.validity))d.validity[c]=t.validity[c]}var B=({component:e})=>(N(e),C("slot",{name:m}));export{D as a,W as b,$ as c,w as d,O as e,P as f,B as g};
