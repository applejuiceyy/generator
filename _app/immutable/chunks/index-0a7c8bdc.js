function E(){}const U=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function nt(){return Object.create(null)}function S(t){t.forEach(st)}function I(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(gt(e,n))}function It(t,e,n,i){if(t){const r=rt(t,e,n,i);return t[0](r)}}function rt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,l){if(r){const s=rt(e,n,i,l);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ut(t,e,n){return t.set(n),e}const ct=typeof window!="undefined";let V=ct?()=>window.performance.now():()=>Date.now(),X=ct?t=>requestAnimationFrame(t):E;const j=new Set;function lt(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&X(lt)}function Y(t){let e;return j.size===0&&X(lt),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let W=!1;function $t(){W=!0}function xt(){W=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=a?r+1:bt(1,r,u=>e[n[u]].claim_order,a))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,r=Math.max(f,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(s[c],_)}}function vt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=at("style");return Et(ot(t),e),e.sheet}function Et(t,e){vt(t.head||t,e)}function St(t,e){if(W){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){W&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function jt(t){t.parentNode.removeChild(t)}function at(t){return document.createElement(t)}function Z(t){return document.createTextNode(t)}function Xt(){return Z(" ")}function Yt(){return Z("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:At(t,i,e[i])}function Nt(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,r=!1){Ct(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Mt(t,e,n,i){return ut(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ee(t,e,n){return Mt(t,e,n,at)}function Dt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function ne(t){return Dt(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const B=new Map;let q=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:kt(e),rules:{}};return B.set(t,n),n}function F(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${s(g,1-g)}}
`}const _=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${o}`,u=ot(t),{stylesheet:d,rules:h}=B.get(u)||Pt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,q+=1,f}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Rt())}function Rt(){X(()=>{q||(B.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),B.clear())})}let D;function M(t){D=t}function O(){if(!D)throw new Error("Function called outside component initialization");return D}function le(t){O().$$.on_mount.push(t)}function oe(t){O().$$.after_update.push(t)}function ae(t){O().$$.on_destroy.push(t)}function ue(){const t=O();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ft(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function fe(t,e){return O().$$.context.set(t,e),e}const C=[],it=[],L=[],K=[],_t=Promise.resolve();let Q=!1;function dt(){Q||(Q=!0,_t.then(ht))}function _e(){return dt(),_t}function A(t){L.push(t)}function de(t){K.push(t)}const J=new Set;let T=0;function ht(){const t=D;do{for(;T<C.length;){const e=C[T];T++,M(e),Tt(e.$$)}for(M(null),C.length=0,T=0;it.length;)it.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];J.has(n)||(J.add(n),n())}L.length=0}while(C.length);for(;K.length;)K.pop()();Q=!1,J.clear(),M(t)}function Tt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let N;function tt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function k(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}const z=new Set;let v;function he(){v={r:0,c:[],p:v}}function me(){v.r||S(v.c),v=v.p}function mt(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),v.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const et={duration:0};function pe(t,e,n){let i=e(t,n),r=!1,l,s,o=0;function c(){l&&H(t,l)}function a(){const{delay:f=0,duration:u=300,easing:d=U,tick:h=E,css:y}=i||et;y&&(l=F(t,0,1,u,f,d,y,o++)),h(0,1);const m=V()+f,g=m+u;s&&s.abort(),r=!0,A(()=>k(t,!0,"start")),s=Y($=>{if(r){if($>=g)return h(1,0),k(t,!0,"end"),c(),r=!1;if($>=m){const x=d(($-m)/u);h(x,1-x)}}return r})}let _=!1;return{start(){_||(_=!0,H(t),I(i)?(i=i(),tt().then(a)):a())},invalidate(){_=!1},end(){r&&(c(),r=!1)}}}function ye(t,e,n){let i=e(t,n),r=!0,l;const s=v;s.r+=1;function o(){const{delay:c=0,duration:a=300,easing:_=U,tick:f=E,css:u}=i||et;u&&(l=F(t,1,0,a,c,_,u));const d=V()+c,h=d+a;A(()=>k(t,!1,"start")),Y(y=>{if(r){if(y>=h)return f(0,1),k(t,!1,"end"),--s.r||S(s.c),!1;if(y>=d){const m=_((y-d)/a);f(1-m,m)}}return r})}return I(i)?tt().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&H(t,l),r=!1)}}}function ge(t,e,n,i){let r=e(t,n),l=i?0:1,s=null,o=null,c=null;function a(){c&&H(t,c)}function _(u,d){const h=u.b-l;return d*=Math.abs(h),{a:l,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:y=U,tick:m=E,css:g}=r||et,$={start:V()+d,b:u};u||($.group=v,v.r+=1),s||o?o=$:(g&&(a(),c=F(t,l,u,h,d,y,g)),u&&m(0,1),s=_($,h),A(()=>k(t,u,"start")),Y(x=>{if(o&&x>o.start&&(s=_(o,h),o=null,k(t,s.b,"start"),g&&(a(),c=F(t,l,s.b,s.duration,0,y,r.css))),s){if(x>=s.end)m(l=s.b,1-l),k(t,s.b,"end"),o||(s.b?a():--s.group.r||S(s.group.c)),s=null;else if(x>=s.start){const P=x-s.start;l=s.a+s.d*y(P/s.duration),m(l,1-l)}}return!!(s||o)}))}return{run(u){I(r)?tt().then(()=>{r=r(),f(u)}):f(u)},end(){a(),s=o=null}}}function $e(t,e){t.d(1),e.delete(t.key)}function xe(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function be(t,e,n,i,r,l,s,o,c,a,_,f){let u=t.length,d=l.length,h=u;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,$=new Map;for(h=d;h--;){const p=f(r,l,h),b=n(p);let w=s.get(b);w?i&&w.p(p,e):(w=a(b,p),w.c()),g.set(b,m[h]=w),b in y&&$.set(b,Math.abs(h-y[b]))}const x=new Set,P=new Set;function G(p){mt(p,1),p.m(o,_),s.set(p.key,p),_=p.first,d--}for(;u&&d;){const p=m[d-1],b=t[u-1],w=p.key,R=b.key;p===b?(_=p.first,u--,d--):g.has(R)?!s.has(w)||x.has(w)?G(p):P.has(R)?u--:$.get(w)>$.get(R)?(P.add(w),G(p)):(x.add(R),u--):(c(b,s),u--)}for(;u--;){const p=t[u];g.has(p.key)||c(p,s)}for(;d;)G(m[d-1]);return m}function we(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function ke(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ee(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=l.map(st).filter(I);s?s.push(...c):S(c),t.$$.on_mount=[]}),o.forEach(A)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(C.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,r,l,s,o=[-1]){const c=D;M(t);const a=t.$$={fragment:null,ctx:null,props:l,update:E,not_equal:r,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:nt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&r(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&qt(t,f)),u}):[],a.update(),_=!0,S(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){$t();const f=Nt(e.target);a.fragment&&a.fragment.l(f),f.forEach(jt)}else a.fragment&&a.fragment.c();e.intro&&mt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),xt(),ht()}M(c)}class Ae{$destroy(){Bt(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$e as $,ve as A,Bt as B,pt as C,_e as D,E,It as F,Gt as G,Jt as H,Wt as I,St as J,Zt as K,S as L,ue as M,it as N,se as O,te as P,ce as Q,Qt as R,Ae as S,Kt as T,de as U,be as V,xe as W,ke as X,Ht as Y,ae as Z,Ut as _,Nt as a,A as a0,pe as a1,ye as a2,ge as a3,At as b,ee as c,jt as d,at as e,re as f,Vt as g,Dt as h,je as i,ie as j,Xt as k,Yt as l,ne as m,he as n,Lt as o,me as p,mt as q,fe as r,Ft as s,Z as t,oe as u,le as v,Ee as w,Se as x,zt as y,we as z};