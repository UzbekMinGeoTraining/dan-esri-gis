import{a as l}from"./chunk-6EZNY6L4.js";import{b as s}from"./chunk-2R4SNL6O.js";function a(n){if(!n)return n;let{start:e,end:t}=n;return new l({start:e!=null?s(e,-e.getTimezoneOffset(),"minutes"):e,end:t!=null?s(t,-t.getTimezoneOffset(),"minutes"):t})}function u(n){if(!n)return n;let{start:e,end:t}=n;return new l({start:e!=null?s(e,e.getTimezoneOffset(),"minutes"):e,end:t!=null?s(t,t.getTimezoneOffset(),"minutes"):t})}function M(n,e,t){if(n?.timeInfo==null)return null;let{datesInUnknownTimezone:m=!1,timeOffset:o,useViewTime:c}=n,r=n.timeExtent;m&&(r=u(r));let i=c?e&&r?e.intersection(r):e||r:r;return!i||i.isEmpty||i.isAllTime?i:(o&&(i=i.offset(-o.value,o.unit)),m&&(i=a(i)),i.equals(t)?t:i)}export{M as a};
