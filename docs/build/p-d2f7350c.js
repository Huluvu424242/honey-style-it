let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c={},i=e=>"object"==(e=typeof e)||"function"===e,u=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!i(l))&&(l+=""),s&&o?r[r.length-1].o+=l:r.push(s?a(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,r,$);const u=a(e,null);return u.i=t,r.length>0&&(u.u=r),u},a=(e,t)=>({t:0,$:e,o:t,h:null,u:null,i:null}),f={},$={forEach:(e,t)=>e.map(d).forEach(t),map:(e,t)=>e.map(d).map(t).map(h)},d=e=>({vattrs:e.i,vchildren:e.u,vkey:e.m,vname:e.p,vtag:e.$,vtext:e.o}),h=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),u(e.vtag,t,...e.vchildren||[])}const t=a(e.vtag,e.vtext);return t.i=e.vattrs,t.u=e.vchildren,t.m=e.vkey,t.p=e.vname,t},m=(e,t,n,s,r,c)=>{if(n!==s){let u=B(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=p(n),o=p(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===t)s&&s(e);else if(u||"o"!==t[0]||"n"!==t[1]){const l=i(s);if((u||l&&null!==s)&&!r)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?u=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!u||4&c||r)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):B(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},y=/\s/,p=e=>e?e.split(y):[],b=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.i||c,r=t.i||c;for(l in o)l in r||m(s,l,o[l],void 0,n,t.t);for(l in r)m(s,l,o[l],r[l],n,t.t)},w=(t,n,l)=>{let o,r,c=n.u[l],i=0;if(null!==c.o)o=c.h=s.createTextNode(c.o);else if(o=c.h=s.createElement(c.$),b(null,c,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.u)for(i=0;i<c.u.length;++i)r=w(t,c,i),r&&o.appendChild(r);return o},v=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=w(null,l,o),c&&(s[o].h=c,i.insertBefore(c,n)))},g=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.h,k(l),s.remove())},j=(e,t)=>e.$===t.$,O=(e,t)=>{const n=t.h=e.h,l=e.u,s=t.u,o=t.o;null===o?("slot"===t.$||b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:j(i,f)?(O(i,f),i=t[++o],f=l[++r]):j(u,$)?(O(u,$),u=t[--c],$=l[--a]):j(i,$)?(O(i,$),e.insertBefore(i.h,u.h.nextSibling),i=t[++o],$=l[--a]):j(u,f)?(O(u,f),e.insertBefore(u.h,i.h),u=t[--c],f=l[++r]):(s=w(t&&t[r],n,r),f=l[++r],s&&i.h.parentNode.insertBefore(s,i.h));o>c?v(e,null==l[a+1]?null:l[a+1].h,n,l,r,a):r>a&&g(t,o,c)})(n,l,t,s):null!==s?(null!==e.o&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.o!==o&&(n.data=o)},k=e=>{e.i&&e.i.ref&&e.i.ref(null),e.u&&e.u.map(k)},M=e=>V(e).v,C=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},P=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.j),Z((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.O;let l;return t&&(l=A(n,"componentWillLoad")),H(l,(()=>E(e,n)))},E=async(e,t)=>{const n=e.v,l=n["s-rc"];L(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>N(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},L=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.v,o=n.k||a(null,null),r=(e=>e&&e.$===f)(l)?l:u(null,null,l);t=s.tagName,r.$=null,r.t|=4,n.k=r,r.h=o.h=s.shadowRoot||s,e=s["s-sc"],O(o,r)})(n,l)}catch(e){D(e,n.v)}return null},N=e=>{const t=e.v,n=e.j;64&e.t||(e.t|=64,R(t),e.M(t),n||T()),e.C(t),e.g&&(e.g(),e.g=void 0),512&e.t&&Y((()=>P(e,!1))),e.t&=-517},T=()=>{R(s.documentElement),Y((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"honey-style-it"}});return e.dispatchEvent(t),t})(l)))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){D(e)}},H=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),U=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>V(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=V(e),o=s.L.get(t),r=s.t,c=s.O;n=((e,t)=>null==e||i(e)?e:1&t?e+"":e)(n,l.P[t][0]),8&r&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.L.set(t,n),c&&2==(18&r)&&P(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=V(this);return n.N.then((()=>n.O[e](...t)))}})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},W=e=>{A(e,"connectedCallback")},q=(e,t={})=>{const n=[],r=t.exclude||[],c=l.customElements,i=s.head,u=i.querySelector("meta[charset]"),a=s.createElement("style"),f=[];let $,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],T:t[1],P:t[2],A:t[3]};l.P=t[2];const s=l.T,i=class extends HTMLElement{constructor(e){super(e),z(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),d?f.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=V(e),n=t.H,l=()=>{};if(1&t.t)W(t.O);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.j=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){if(t.t|=32,(s=I(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){D(e)}t.t&=-9,e(),W(t.O)}const o=t.j,r=()=>P(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{0==(1&o.t)&&A(V(this).O,"disconnectedCallback")})()))}componentOnReady(){return V(this).R}};l.U=e[0],r.includes(s)||c.get(s)||(n.push(s),c.define(s,U(i,l,1)))}))})),a.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),i.insertBefore(a,u?u.nextSibling:i.firstChild),d=!1,f.length?f.map((e=>e.connectedCallback())):o.jmp((()=>$=setTimeout(T,30)))},F=new WeakMap,V=e=>F.get(e),_=(e,t)=>F.set(t.O=e,t),z=(e,t)=>{const n={t:0,v:e,H:t,L:new Map};return n.N=new Promise((e=>n.C=e)),n.R=new Promise((e=>n.M=e)),e["s-p"]=[],e["s-rc"]=[],F.set(e,n)},B=(e,t)=>t in e,D=(e,t)=>(0,console.error)(e,t),G=new Map,I=e=>{const t=e.T.replace(/-/g,"_"),n=e.U,l=G.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(G.set(n,e),e[t])),D)},J=[],K=[],Q=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?Y(X):o.raf(X))},S=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){D(e)}e.length=0},X=()=>{S(J),S(K),(n=J.length>0)&&o.raf(X)},Y=e=>r().then(e),Z=Q(K,!0);export{f as H,q as b,M as g,u as h,r as p,_ as r}