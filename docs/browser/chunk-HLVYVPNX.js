import{f as i}from"./chunk-C73532AX.js";function c(){let{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){e.target.disabled&&e.preventDefault()}var a=["mousedown","mouseup","click"];function o(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}var n={capture:!0};function b(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),s(e);return}d(e),e.el.removeAttribute("aria-disabled")}function s(e){e.el.click=c,l(e.el)}function l(e){e.addEventListener("pointerdown",r,n),a.forEach(t=>e.addEventListener(t,o,n))}function d(e){delete e.el.click,u(e.el)}function u(e){e.removeEventListener("pointerdown",r,n),a.forEach(t=>e.removeEventListener(t,o,n))}var f={container:"interaction-container"},E=({disabled:e},t)=>i("div",{class:f.container,inert:e},...t);export{b as a,E as b};
