function y(){}const mt=t=>t;function V(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function D(){return Object.create(null)}function b(t){t.forEach(P)}function W(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function yt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function X(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(Y(e,n))}function bt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function xt(t,e,n,i,r,u){if(r){const o=B(e,n,i,u);t.p(o,r)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t,e,n){return t.set(n),e}const H=typeof window<"u";let Et=H?()=>window.performance.now():()=>Date.now(),O=H?t=>requestAnimationFrame(t):y;const m=new Set;function F(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&O(F)}function At(t){let e;return m.size===0&&O(F),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let A=!1;function Z(){A=!0}function tt(){A=!1}function et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:et(1,r,w=>e[n[w]].claim_order,c))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<u.length&&o[s].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(o[s],f)}}function it(t,e){t.appendChild(e)}function rt(t,e){if(A){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){A&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function St(){return j(" ")}function Ct(){return j("")}function M(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){ct(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function J(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function zt(t,e,n){return J(t,e,n,R)}function Tt(t,e,n){return J(t,e,n,ot)}function ut(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function kt(t){return ut(t," ")}function Dt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Mt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let $;function lt(){if($===void 0){$=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{$=!0}}return $}function qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=R("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=lt();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=M(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{u=M(i.contentWindow,"resize",e)}),it(t,i),()=>{(r||u&&i.contentWindow)&&u(),I(i)}}function Lt(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Wt(t,e){return new t(e)}let g;function p(t){g=t}function z(){if(!g)throw new Error("Function called outside component initialization");return g}function Bt(t){z().$$.on_mount.push(t)}function Ht(t){z().$$.after_update.push(t)}function Ot(t){z().$$.on_destroy.push(t)}const h=[],q=[],v=[],L=[],K=Promise.resolve();let S=!1;function Q(){S||(S=!0,K.then(U))}function Ft(){return Q(),K}function C(t){v.push(t)}const N=new Set;let _=0;function U(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),at(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;q.length;)q.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];N.has(n)||(N.add(n),n())}v.length=0}while(h.length);for(;L.length;)L.pop()();S=!1,N.clear(),p(t)}function at(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const E=new Set;let d;function It(){d={r:0,c:[],p:d}}function Rt(){d.r||b(d.c),d=d.p}function ft(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||C(()=>{const o=t.$$.on_mount.map(P).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...o):b(o),t.$$.on_mount=[]}),u.forEach(C)}function _t(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(h.push(t),Q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,r,u,o,l=[-1]){const s=g;p(t);const c=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:D(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,w,...T)=>{const k=T.length?T[0]:w;return c.ctx&&r(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),f&&ht(t,a)),w}):[],c.update(),f=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Z();const a=st(e.target);c.fragment&&c.fragment.l(a),a.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&ft(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),tt(),U()}p(s)}class Ut{$destroy(){_t(this,1),this.$destroy=y}$on(e,n){if(!W(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ft as A,y as B,ot as C,Tt as D,rt as E,Lt as F,M as G,gt as H,b as I,C as J,Ot as K,q as L,bt as M,Pt as N,xt as O,$t as P,wt as Q,qt as R,Ut as S,V as T,Et as U,At as V,mt as W,vt as X,yt as Y,St as a,Nt as b,kt as c,Rt as d,Ct as e,ft as f,It as g,I as h,Qt as i,Ht as j,R as k,zt as l,st as m,jt as n,Bt as o,Mt as p,j as q,ut as r,pt as s,Gt as t,Dt as u,Wt as v,Jt as w,Kt as x,dt as y,_t as z};
