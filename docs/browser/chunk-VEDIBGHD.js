import{m,n as c,p as v}from"./chunk-BP73DJTS.js";var f;(function(d){let t=(s,n,l,r)=>{let o=n,e=n,g=l>>>1,u=s[o-1];for(;e<=g;){e=o<<1,e<l&&r(s[e-1],s[e])<0&&++e;let p=s[e-1];if(r(p,u)<=0)break;s[o-1]=p,o=e}s[o-1]=u},i=(s,n)=>s<n?-1:s>n?1:0;function h(s,n,l,r){n===void 0&&(n=0),l===void 0&&(l=s.length),r===void 0&&(r=i);for(let e=l>>>1;e>n;e--)t(s,e,l,r);let o=n+1;for(let e=l-1;e>n;e--){let g=s[n];s[n]=s[e],s[e]=g,t(s,o,e,r)}}function*a(s,n,l,r){n===void 0&&(n=0),l===void 0&&(l=s.length),r===void 0&&(r=i);for(let e=l>>>1;e>n;e--)t(s,e,l,r),yield;let o=n+1;for(let e=l-1;e>n;e--){let g=s[n];s[n]=s[e],s[e]=g,t(s,o,e,r),yield}}d.sort=h,d.iterableSort=a})(f||(f={}));var _=f;var w=1.5,b=1.1,y=class{constructor(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new m,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),t.deallocator!==void 0&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>k(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){let i=new Array;for(let h=0;h<this._length;h++){let a=this.data[h];t(a)&&i.push(a)}return i}at(t){if((t=Math.trunc(t)||0)<0&&(t+=this._length),!(t<0||t>=this._length))return this.data[t]}includes(t,i){let h=this.data.indexOf(t,i);return h!==-1&&h<this.length}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let i=t;i<this._length;++i)this.data[i]=this._deallocator(this.data[i]);this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,i=t.length){for(let h=0;h<i;h++)this.data[this._length++]=t[h]}fill(t,i){for(let h=0;h<i;h++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));let t=this.data[this._length];return++this._length,t}unshift(t){this.data.unshift(t),this._length++,k(this)}pop(){if(this.length===0)return;let t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){let i=c(this.data,t,this.length,this._hint);if(i!==-1)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){return this.removeUnorderedIndex(c(this.data,t,this.length,this._hint))}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,i=t.length,h){this.length=v(this.data,t,this.length,i,this._hint,h),this._shrink()}front(){if(this.length!==0)return this.data[0]}back(){if(this.length!==0)return this.data[this.length-1]}swapElements(t,i){if(t>=this.length||i>=this.length||t===i)return;let h=this.data[t];this.data[t]=this.data[i],this.data[i]=h}sort(t){_.sort(this.data,0,this.length,t)}iterableSort(t){return _.iterableSort(this.data,0,this.length,t)}some(t,i){for(let h=0;h<this.length;++h)if(t.call(i,this.data[h],h,this.data))return!0;return!1}find(t,i){let{data:h,length:a}=this;for(let s=0;s<a;++s)if(t.call(i,h[s]))return h[s]}filterInPlace(t,i){let h=0;for(let a=0;a<this._length;++a){let s=this.data[a];t.call(i,s,a,this.data)&&(this.data[a]=this.data[h],this.data[h]=s,h++)}if(this._deallocator)for(let a=h;a<this._length;a++)this.data[a]=this._deallocator(this.data[a]);return this._length=h,this._shrink(),this}forAll(t,i){let{data:h,length:a}=this;for(let s=0;s<a;++s)t.call(i,h[s],s,h)}forEach(t,i){this.data.slice(0,this.length).forEach(t,i)}map(t,i){let h=new Array(this.length);for(let a=0;a<this.length;++a)h[a]=t.call(i,this.data[a],a,this.data);return h}reduce(t,i){let h=i;for(let a=0;a<this.length;++a)h=t(h,this.data[a],a,this.data);return h}has(t){let i=this.length,h=this.data;for(let a=0;a<i;++a)if(h[a]===t)return!0;return!1}*[Symbol.iterator](){for(let t=0;t<this.length;t++)yield this.data[t]}};function k(d){d.data.length>w*d.length&&(d.data.length=Math.floor(d.length*b))}export{y as a};
