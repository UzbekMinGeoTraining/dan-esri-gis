import{b as r}from"./chunk-KDLA3TQ2.js";var M="theme-style";function n(e,t){return Z(j(u(N(e),t)),t.size)}function u(e,{accentColor:t,contrastColor:o}){let c=t.toHex(),a=t.a,I=o.toHex(),l=o.a,m=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(M);return m&&(m.innerHTML=`
      .contrast-fill { fill: ${I}; fill-opacity: ${l}; }
      .contrast-stroke { stroke: ${I}; stroke-opacity: ${l};  }
      .accent-fill { fill: ${c}; fill-opacity: ${a}; }
      .accent-stroke { stroke: ${c}; stroke-opacity:  ${a}; }`),e}function N(e){let t=e.split(",")[1],o=atob(t);return new DOMParser().parseFromString(o,"image/svg+xml")}function j(e){let t=new XMLSerializer().serializeToString(e);return`data:image/svg+xml;base64,${btoa(t)}`}function Z(e,t){let o=new Image(t,t);return o.src=e,o}var g="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==";var s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";var i=64;function L(e,t){let{accentColor:o,contrastColor:c,preMultiplyAlpha:a}=t;return e.fromData(`heading-rotate:[accent:${o},contrast:${c},size:${i}]`,()=>new r(n(g,{accentColor:o,contrastColor:c,size:i}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}function S(e,t){let{accentColor:o,contrastColor:c,preMultiplyAlpha:a}=t;return e.fromData(`tilt-rotate:[accent:${o},contrast:${c},size:${i}]`,()=>new r(n(s,{accentColor:o,contrastColor:c,size:i}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}export{L as a,S as b};
