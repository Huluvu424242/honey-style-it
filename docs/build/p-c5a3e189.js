let e=!1;const t="undefined"!=typeof window?window:{},n=t.document||{head:{}},l={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),o=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),s=new WeakMap,c=e=>"sc-"+e.o,a=e=>"object"==(e=typeof e)||"function"===e,i=(e,t,...n)=>{let l=null,r=!1,o=!1,s=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!a(l))&&(l+=""),r&&o?s[s.length-1].i+=l:s.push(r?u(null,l):l),o=r)};if(c(n),"function"==typeof e)return e(null===t?{}:t,s,y);const i=u(e,null);return i.u=t,s.length>0&&(i.$=s),i},u=(e,t)=>({t:0,h:e,i:t,m:null,$:null}),f={},y={forEach:(e,t)=>e.map($).forEach(t),map:(e,t)=>e.map($).map(t).map(d)},$=e=>({vattrs:e.u,vchildren:e.$,vkey:e.p,vname:e.v,vtag:e.h,vtext:e.i}),d=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),i(e.vtag,t,...e.vchildren||[])}const t=u(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.p=e.vkey,t.v=e.vname,t},h=(e,t,l)=>{let r,o,s=t.$[l],c=0;if(r=s.m=n.createElement(s.h),s.$)for(c=0;c<s.$.length;++c)o=h(e,s,c),o&&r.appendChild(o);return r},m=(e,t,n,l,r,o)=>{let s,c=e;for(;r<=o;++r)l[r]&&(s=h(null,n,r),s&&(l[r].m=s,c.insertBefore(s,t)))},p=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},w=(e,t)=>e.h===t.h,b=(e,t)=>{const n=t.m=e.m,l=e.$,r=t.$;null!==l&&null!==r?((e,t,n,l)=>{let r,o=0,s=0,c=t.length-1,a=t[0],i=t[c],u=l.length-1,f=l[0],y=l[u];for(;o<=c&&s<=u;)null==a?a=t[++o]:null==i?i=t[--c]:null==f?f=l[++s]:null==y?y=l[--u]:w(a,f)?(b(a,f),a=t[++o],f=l[++s]):w(i,y)?(b(i,y),i=t[--c],y=l[--u]):w(a,y)?(b(a,y),e.insertBefore(a.m,i.m.nextSibling),a=t[++o],y=l[--u]):w(i,f)?(b(i,f),e.insertBefore(i.m,a.m),i=t[--c],f=l[++s]):(r=h(t&&t[s],n,s),f=l[++s],r&&a.m.parentNode.insertBefore(r,a.m));o>c?m(e,null==l[u+1]?null:l[u+1].m,n,l,s,u):s>u&&p(t,o,c)})(n,l,t,r):null!==r?m(n,null,t,r,0,r.length-1):null!==l&&p(l,0,l.length-1)},v=e=>A(e).S,S=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return S(e,e.j),I((()=>j(e,t)));e.t|=512},j=(e,t)=>{const n=e.k;let l;return t&&(l=P(n,"componentWillLoad")),x(l,(()=>k(e,n,t)))},k=async(e,t,l)=>{const r=e.S,o=r["s-rc"];l&&(e=>{const t=e.C;((e,t)=>{let l=c(t),r=N.get(l);if(e=11===e.nodeType?e:n,r)if("string"==typeof r){let t,o=s.get(e=e.head||e);o||s.set(e,o=new Set),o.has(l)||(t=n.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r])})(e.S.getRootNode(),t)})(e);C(e,t),o&&(o.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>M(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},C=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2,((e,t)=>{const n=e.S,l=e.M||u(null,null),r=(e=>e&&e.h===f)(t)?t:i(null,null,t);r.h=null,r.t|=4,e.M=r,r.m=l.m=n,b(l,r)})(e,t)}catch(t){U(t,e.S)}return null},M=e=>{const t=e.S,n=e.j;64&e.t||(e.t|=64,E(t),e.O(t),n||O()),e.P(t),e.g&&(e.g(),e.g=void 0),512&e.t&&G((()=>g(e,!1))),e.t&=-517},O=()=>{E(n.documentElement),G((()=>(e=>{const t=l.ce("appload",{detail:{namespace:"honey-style-it"}});return e.dispatchEvent(t),t})(t)))},P=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){U(e)}},x=(e,t)=>e&&e.then?e.then(t):t(),E=e=>e.classList.add("hydrated"),L=(e,t,n)=>{if(t.L){const l=Object.entries(t.L),r=e.prototype;l.map((([e,[t]])=>{31&t||2&n&&32&t?Object.defineProperty(r,e,{get(){return((e,t)=>A(this).T.get(t))(0,e)},set(t){((e,t,n)=>{const l=A(e),r=l.T.get(t),o=l.t,s=l.k;n=(e=>(null==e||a(e),e))(n),8&o&&void 0!==r||n===r||(l.T.set(t,n),s&&2==(18&o)&&g(l,!1))})(this,e,t)},configurable:!0,enumerable:!0}):1&n&&64&t&&Object.defineProperty(r,e,{value(...t){const n=A(this);return n.W.then((()=>n.k[e](...t)))}})}))}return e},T=(e,r={})=>{const s=[],a=r.exclude||[],i=t.customElements,u=n.head,f=u.querySelector("meta[charset]"),y=n.createElement("style"),$=[];let d,h=!0;Object.assign(l,r),l.l=new URL(r.resourcesUrl||"./",n.baseURI).href,e.map((e=>e[1].map((t=>{const n={t:t[0],o:t[1],L:t[2],A:t[3]};n.L=t[2];const r=n.o,u=class extends HTMLElement{constructor(e){super(e),R(e=this,n)}connectedCallback(){d&&(clearTimeout(d),d=null),h?$.push(this):l.jmp((()=>(e=>{if(0==(1&l.t)){const t=A(e),n=t.C,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){S(t,t.j=n);break}}(async(e,t,n,l,r)=>{if(0==(32&t.t)){{if(t.t|=32,(r=F(n)).then){const e=()=>{};r=await r,e()}r.isProxied||(L(r,n,2),r.isProxied=!0);const e=()=>{};t.t|=8;try{new r(t)}catch(e){U(e)}t.t&=-9,e()}if(r.style){let e=r.style;const t=c(n);if(!N.has(t)){const l=()=>{};((e,t,n)=>{let l=N.get(e);o&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,N.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.j,a=()=>g(t,!0);s&&s["s-rc"]?s["s-rc"].push(a):a()})(0,t,n)}l()}})(this)))}disconnectedCallback(){l.jmp((()=>(()=>{0==(1&l.t)&&P(A(this).k,"disconnectedCallback")})()))}componentOnReady(){return A(this).H}};n.R=e[0],a.includes(r)||i.get(r)||(s.push(r),i.define(r,L(u,n,1)))})))),y.innerHTML=s+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),u.insertBefore(y,f?f.nextSibling:u.firstChild),h=!1,$.length?$.map((e=>e.connectedCallback())):l.jmp((()=>d=setTimeout(O,30)))},W=new WeakMap,A=e=>W.get(e),H=(e,t)=>W.set(t.k=e,t),R=(e,t)=>{const n={t:0,S:e,C:t,T:new Map};return n.W=new Promise((e=>n.P=e)),n.H=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],W.set(e,n)},U=(e,t)=>(0,console.error)(e,t),q=new Map,F=e=>{const t=e.o.replace(/-/g,"_"),n=e.R,l=q.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(q.set(n,e),e[t])),U)},N=new Map,V=[],_=[],z=(t,n)=>r=>{t.push(r),e||(e=!0,n&&4&l.t?G(D):l.raf(D))},B=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){U(e)}e.length=0},D=()=>{B(V),B(_),(e=V.length>0)&&l.raf(D)},G=e=>r().then(e),I=z(_,!0);export{f as H,T as b,v as g,i as h,r as p,H as r}