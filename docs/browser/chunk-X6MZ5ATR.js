function e(n,r,t){if(!t||r==null)return null;if(!n)return u(r,t);let o=n.get(t);return o?r[o.name]:null}function u(n,r){let t=r.toLowerCase();for(let o in n)if(o.toLowerCase()===t)return n[o];return null}export{e as a};
