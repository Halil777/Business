import{r as g,R as me,a as Ze,j as l,L as xt,S as ie,c as yt,G as _e}from"./index-BB7KoYWS.js";import{L as Et}from"./LanguageModal-BAA_dQRD.js";import{S as et,a as vt,h as bt,d as wt,t as Rt,b as St,c as _t}from"./commonStyle-B5ezO9qb.js";import{d as tt}from"./ArrowRightAlt-BIGZ0dXr.js";import{a as Te}from"./api-BvNA4v62.js";import{u as Ge}from"./createSvgIcon-9dLyG7Dh.js";import{B as ae}from"./Box-CEu2FmwZ.js";import{T as pe}from"./Typography-69fkFGnD.js";import{C as Tt,a as Dt,b as Ct}from"./CardContent-lKWmUb2O.js";import{I as nt}from"./IconButton-BbdhSFFg.js";/* empty css             */function be(e,n,r,s){return new(r||(r=Promise))(function(t,o){function i(p){try{f(s.next(p))}catch(a){o(a)}}function c(p){try{f(s.throw(p))}catch(a){o(a)}}function f(p){var a;p.done?t(p.value):(a=p.value,a instanceof r?a:new r(function(u){u(a)})).then(i,c)}f((s=s.apply(e,n||[])).next())})}function ne(e,n){var r,s,t,o,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(f){return function(p){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,s&&(t=2&a[0]?s.return:a[0]?s.throw||((t=s.return)&&t.call(s),0):s.next)&&!(t=t.call(s,a[1])).done)return t;switch(s=0,t&&(a=[2&a[0],t.value]),a[0]){case 0:case 1:t=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,s=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(t=i.trys,!((t=t.length>0&&t[t.length-1])||a[0]!==6&&a[0]!==2)){i=0;continue}if(a[0]===3&&(!t||a[1]>t[0]&&a[1]<t[3])){i.label=a[1];break}if(a[0]===6&&i.label<t[1]){i.label=t[1],t=a;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(a);break}t[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(u){a=[6,u],s=0}finally{r=t=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([f,p])}}}function Le(e){var n=typeof Symbol=="function"&&Symbol.iterator,r=n&&e[n],s=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function z(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var s,t,o=r.call(e),i=[];try{for(;(n===void 0||n-- >0)&&!(s=o.next()).done;)i.push(s.value)}catch(c){t={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return i}function K(e,n,r){if(r||arguments.length===2)for(var s,t=0,o=n.length;t<o;t++)!s&&t in n||(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}function Ke(e,n,r,s,t){for(var o=[],i=5;i<arguments.length;i++)o[i-5]=arguments[i];return be(this,void 0,void 0,function(){var c,f,p,a,u,m;return ne(this,function(h){switch(h.label){case 0:h.trys.push([0,12,13,14]),c=Le(o),f=c.next(),h.label=1;case 1:if(f.done)return[3,11];switch(p=f.value,typeof p){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Ot(e,n,p,r,s,t)];case 3:return h.sent(),[3,10];case 4:return[4,rt(p)];case 5:return h.sent(),[3,10];case 6:return[4,p.apply(void 0,K([e,n,r,s,t],z(o),!1))];case 7:return h.sent(),[3,10];case 8:return[4,p];case 9:h.sent(),h.label=10;case 10:return f=c.next(),[3,1];case 11:return[3,14];case 12:return a=h.sent(),u={error:a},[3,14];case 13:try{f&&!f.done&&(m=c.return)&&m.call(c)}finally{if(u)throw u.error}return[7];case 14:return[2]}})})}function Ot(e,n,r,s,t,o){return be(this,void 0,void 0,function(){var i,c;return ne(this,function(f){switch(f.label){case 0:return i=e.textContent||"",c=function(p,a){var u=z(a).slice(0);return K(K([],z(p),!1),[NaN],!1).findIndex(function(m,h){return u[h]!==m})}(i,r),[4,It(e,K(K([],z(At(i,n,c)),!1),z(jt(r,n,c)),!1),s,t,o)];case 1:return f.sent(),[2]}})})}function rt(e){return be(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return[4,new Promise(function(r){return setTimeout(r,e)})];case 1:return n.sent(),[2]}})})}function It(e,n,r,s,t){return be(this,void 0,void 0,function(){var o,i,c,f,p,a,u,m,h,j,E,q,d;return ne(this,function(M){switch(M.label){case 0:if(o=n,t){for(i=0,c=1;c<n.length;c++)if(f=z([n[c-1],n[c]],2),p=f[0],(a=f[1]).length>p.length||a===""){i=c;break}o=n.slice(i,n.length)}M.label=1;case 1:M.trys.push([1,6,7,8]),u=Le(function(B){var V,R,S,P,v,H,C;return ne(this,function(D){switch(D.label){case 0:V=function(F){return ne(this,function(A){switch(A.label){case 0:return[4,{op:function(U){return requestAnimationFrame(function(){return U.textContent=F})},opCode:function(U){var ue=U.textContent||"";return F===""||ue.length>F.length?"DELETE":"WRITING"}}];case 1:return A.sent(),[2]}})},D.label=1;case 1:D.trys.push([1,6,7,8]),R=Le(B),S=R.next(),D.label=2;case 2:return S.done?[3,5]:(P=S.value,[5,V(P)]);case 3:D.sent(),D.label=4;case 4:return S=R.next(),[3,2];case 5:return[3,8];case 6:return v=D.sent(),H={error:v},[3,8];case 7:try{S&&!S.done&&(C=R.return)&&C.call(R)}finally{if(H)throw H.error}return[7];case 8:return[2]}})}(o)),m=u.next(),M.label=2;case 2:return m.done?[3,5]:(h=m.value,j=h.opCode(e)==="WRITING"?r+r*(Math.random()-.5):s+s*(Math.random()-.5),h.op(e),[4,rt(j)]);case 3:M.sent(),M.label=4;case 4:return m=u.next(),[3,2];case 5:return[3,8];case 6:return E=M.sent(),q={error:E},[3,8];case 7:try{m&&!m.done&&(d=u.return)&&d.call(u)}finally{if(q)throw q.error}return[7];case 8:return[2]}})})}function jt(e,n,r){var s,t;return r===void 0&&(r=0),ne(this,function(o){switch(o.label){case 0:s=n(e),t=s.length,o.label=1;case 1:return r<t?[4,s.slice(0,++r).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function At(e,n,r){var s,t;return r===void 0&&(r=0),ne(this,function(o){switch(o.label){case 0:s=n(e),t=s.length,o.label=1;case 1:return t>r?[4,s.slice(0,--t).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var Lt="index-module_type__E-SaG";(function(e,n){n===void 0&&(n={});var r=n.insertAt;if(e&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var st=g.memo(g.forwardRef(function(e,n){var r=e.sequence,s=e.repeat,t=e.className,o=e.speed,i=o===void 0?40:o,c=e.deletionSpeed,f=e.omitDeletionAnimation,p=f!==void 0&&f,a=e.preRenderFirstString,u=a!==void 0&&a,m=e.wrapper,h=m===void 0?"span":m,j=e.splitter,E=j===void 0?function(y){return K([],z(y),!1)}:j,q=e.cursor,d=q===void 0||q,M=e.style,B=function(y,T){var O={};for(var I in y)Object.prototype.hasOwnProperty.call(y,I)&&T.indexOf(I)<0&&(O[I]=y[I]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function"){var J=0;for(I=Object.getOwnPropertySymbols(y);J<I.length;J++)T.indexOf(I[J])<0&&Object.prototype.propertyIsEnumerable.call(y,I[J])&&(O[I[J]]=y[I[J]])}return O}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),V=B["aria-label"],R=B["aria-hidden"],S=B.role;c||(c=i);var P=new Array(2).fill(40);[i,c].forEach(function(y,T){switch(typeof y){case"number":P[T]=Math.abs(y-100);break;case"object":var O=y.type,I=y.value;if(typeof I!="number")break;O==="keyStrokeDelayInMs"&&(P[T]=I)}});var v,H,C,D,F,A,U=P[0],ue=P[1],se=function(y,T){T===void 0&&(T=null);var O=g.useRef(T);return g.useEffect(function(){y&&(typeof y=="function"?y(O.current):y.current=O.current)},[y]),O}(n),le=Lt;v=t?"".concat(d?le+" ":"").concat(t):d?le:"",H=g.useRef(function(){var y,T=r;s===1/0?y=Ke:typeof s=="number"&&(T=Array(1+s).fill(r).flat());var O=y?K(K([],z(T),!1),[y],!1):K([],z(T),!1);return Ke.apply(void 0,K([se.current,E,U,ue,p],z(O),!1)),function(){se.current}}),C=g.useRef(),D=g.useRef(!1),F=g.useRef(!1),A=z(g.useState(0),2)[1],D.current&&(F.current=!0),g.useEffect(function(){return D.current||(C.current=H.current(),D.current=!0),A(function(y){return y+1}),function(){F.current&&C.current&&C.current()}},[]);var ee=h,fe=u?r.find(function(y){return typeof y=="string"})||"":null;return me.createElement(ee,{"aria-hidden":R,"aria-label":V,role:S,style:M,className:v,children:V?me.createElement("span",{"aria-hidden":"true",ref:se,children:fe}):fe,ref:V?void 0:se})}),function(e,n){return!0});const Nt=()=>{const{i18n:e}=Ze(),[n,r]=g.useState(0),[s,t]=g.useState("");g.useEffect(()=>{(async()=>{try{const E=(await Te.get(`/api/banners?populate=*&locale=${e.language}`)).data.data.find(q=>q.attributes.type==="home_banner");E&&E.attributes.image.data.attributes.url&&t(`http://95.85.121.153:1337${E.attributes.image.data.attributes.url}`)}catch(h){console.error("Error fetching background image:",h)}})()},[e.language]),g.useEffect(()=>{const m=setInterval(()=>{r(h=>h+1)},5e3);return()=>clearInterval(m)},[]);const{refetch:o,data:i,isLoading:c,isError:f}=Ge("homeData",async()=>(await Te.get("/api/title-texts")).data),{data:p,isLoading:a,isError:u}=Ge("imageData",async()=>(await Te.get(`/api/banners?populate=image&locale=${e.language}`)).data);return g.useEffect(()=>{o()},[e.language]),l.jsx(l.Fragment,{children:l.jsxs(ae,{sx:{display:{md:"none",lg:"none",sm:"flex",xs:"flex"},flexDirection:"column",p:3},children:[(c||a)&&l.jsx(xt,{}),(f||u)&&l.jsx("div",{children:"Error fetching data"}),i&&p&&l.jsxs(l.Fragment,{children:[l.jsx(st,{sequence:[`${i.data[0].attributes.title}`],wrapper:"span",speed:30,style:{color:"#fff",fontSize:"1.4em",fontWeight:900,lineHeight:"2em",width:"100%",fontFamily:"Trebuchet MS, sans-serif"}},n),l.jsx(pe,{sx:{color:"#fff",fontSize:"16px",lineHeight:"20px",textAlign:"center",fontWeight:600,mt:3},children:i.data[0].attributes.short_description}),l.jsx(ie,{direction:"row",justifyContent:"center",mt:2,children:l.jsx(et,{})}),l.jsx(ae,{sx:{width:"100%",height:"470px",background:`url(${s})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end",mt:3},children:l.jsx(Tt,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:l.jsx(Dt,{children:l.jsx(Ct,{children:l.jsxs(ie,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[l.jsxs(pe,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",l.jsx("br",{})," Kerimov"]}),l.jsxs(pe,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",l.jsx("br",{})," with 7 years of experience"]}),l.jsx(nt,{children:l.jsx(tt,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})]})]})})},Vt=()=>l.jsx(nt,{sx:{...vt,width:"40px",height:"40px",top:0,right:0},children:l.jsx(tt,{})}),Ft=({text:e})=>l.jsx(pe,{sx:bt,children:e});var ot={exports:{}},it={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=g;function kt(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mt=typeof Object.is=="function"?Object.is:kt,Pt=ce.useState,Wt=ce.useEffect,Ht=ce.useLayoutEffect,qt=ce.useDebugValue;function Ut(e,n){var r=n(),s=Pt({inst:{value:r,getSnapshot:n}}),t=s[0].inst,o=s[1];return Ht(function(){t.value=r,t.getSnapshot=n,De(t)&&o({inst:t})},[e,r,n]),Wt(function(){return De(t)&&o({inst:t}),e(function(){De(t)&&o({inst:t})})},[e]),qt(r),r}function De(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Mt(e,r)}catch{return!0}}function $t(e,n){return n()}var Bt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$t:Ut;it.useSyncExternalStore=ce.useSyncExternalStore!==void 0?ce.useSyncExternalStore:Bt;ot.exports=it;var zt=ot.exports;const te=()=>{},W=te(),Ce=Object,x=e=>e===W,Q=e=>typeof e=="function",re=(e,n)=>({...e,...n}),Gt=e=>Q(e.then),Ee=new WeakMap;let Kt=0;const ge=e=>{const n=typeof e,r=e&&e.constructor,s=r==Date;let t,o;if(Ce(e)===e&&!s&&r!=RegExp){if(t=Ee.get(e),t)return t;if(t=++Kt+"~",Ee.set(e,t),r==Array){for(t="@",o=0;o<e.length;o++)t+=ge(e[o])+",";Ee.set(e,t)}if(r==Ce){t="#";const i=Ce.keys(e).sort();for(;!x(o=i.pop());)x(e[o])||(t+=o+":"+ge(e[o])+",");Ee.set(e,t)}}else t=s?e.toJSON():n=="symbol"?e.toString():n=="string"?JSON.stringify(e):""+e;return t},Z=new WeakMap,Oe={},ve={},Pe="undefined",we=typeof window!=Pe,Ne=typeof document!=Pe,Qt=()=>we&&typeof window.requestAnimationFrame!=Pe,at=(e,n)=>{const r=Z.get(e);return[()=>!x(n)&&e.get(n)||Oe,s=>{if(!x(n)){const t=e.get(n);n in ve||(ve[n]=t),r[5](n,re(t,s),t||Oe)}},r[6],()=>!x(n)&&n in ve?ve[n]:!x(n)&&e.get(n)||Oe]};let Ve=!0;const Jt=()=>Ve,[Fe,ke]=we&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[te,te],Xt=()=>{const e=Ne&&document.visibilityState;return x(e)||e!=="hidden"},Yt=e=>(Ne&&document.addEventListener("visibilitychange",e),Fe("focus",e),()=>{Ne&&document.removeEventListener("visibilitychange",e),ke("focus",e)}),Zt=e=>{const n=()=>{Ve=!0,e()},r=()=>{Ve=!1};return Fe("online",n),Fe("offline",r),()=>{ke("online",n),ke("offline",r)}},en={isOnline:Jt,isVisible:Xt},tn={initFocus:Yt,initReconnect:Zt},Qe=!me.useId,xe=!we||"Deno"in window,nn=e=>Qt()?window.requestAnimationFrame(e):setTimeout(e,1),Ie=xe?g.useEffect:g.useLayoutEffect,je=typeof navigator<"u"&&navigator.connection,Je=!xe&&je&&(["slow-2g","2g"].includes(je.effectiveType)||je.saveData),We=e=>{if(Q(e))try{e=e()}catch{e=""}const n=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?ge(e):"",[e,n]};let rn=0;const Me=()=>++rn,ct=0,ut=1,lt=2,sn=3;var he={__proto__:null,ERROR_REVALIDATE_EVENT:sn,FOCUS_EVENT:ct,MUTATE_EVENT:lt,RECONNECT_EVENT:ut};async function ft(...e){const[n,r,s,t]=e,o=re({populateCache:!0,throwOnError:!0},typeof t=="boolean"?{revalidate:t}:t||{});let i=o.populateCache;const c=o.rollbackOnError;let f=o.optimisticData;const p=m=>typeof c=="function"?c(m):c!==!1,a=o.throwOnError;if(Q(r)){const m=r,h=[],j=n.keys();for(const E of j)!/^\$(inf|sub)\$/.test(E)&&m(n.get(E)._k)&&h.push(E);return Promise.all(h.map(u))}return u(r);async function u(m){const[h]=We(m);if(!h)return;const[j,E]=at(n,h),[q,d,M,B]=Z.get(n),V=()=>{const A=q[h];return(Q(o.revalidate)?o.revalidate(j().data,m):o.revalidate!==!1)&&(delete M[h],delete B[h],A&&A[0])?A[0](lt).then(()=>j().data):j().data};if(e.length<3)return V();let R=s,S;const P=Me();d[h]=[P,0];const v=!x(f),H=j(),C=H.data,D=H._c,F=x(D)?C:D;if(v&&(f=Q(f)?f(F,C):f,E({data:f,_c:F})),Q(R))try{R=R(F)}catch(A){S=A}if(R&&Gt(R))if(R=await R.catch(A=>{S=A}),P!==d[h][0]){if(S)throw S;return R}else S&&v&&p(S)&&(i=!0,E({data:F,_c:W}));if(i&&!S)if(Q(i)){const A=i(R,F);E({data:A,error:W,_c:W})}else E({data:R,error:W,_c:W});if(d[h][1]=Me(),Promise.resolve(V()).then(()=>{E({_c:W})}),S){if(a)throw S;return}return R}}const Xe=(e,n)=>{for(const r in e)e[r][0]&&e[r][0](n)},on=(e,n)=>{if(!Z.has(e)){const r=re(tn,n),s={},t=ft.bind(W,e);let o=te;const i={},c=(a,u)=>{const m=i[a]||[];return i[a]=m,m.push(u),()=>m.splice(m.indexOf(u),1)},f=(a,u,m)=>{e.set(a,u);const h=i[a];if(h)for(const j of h)j(u,m)},p=()=>{if(!Z.has(e)&&(Z.set(e,[s,{},{},{},t,f,c]),!xe)){const a=r.initFocus(setTimeout.bind(W,Xe.bind(W,s,ct))),u=r.initReconnect(setTimeout.bind(W,Xe.bind(W,s,ut)));o=()=>{a&&a(),u&&u(),Z.delete(e)}}};return p(),[e,t,p,o]}return[e,Z.get(e)[4]]},an=(e,n,r,s,t)=>{const o=r.errorRetryCount,i=t.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*r.errorRetryInterval;!x(o)&&i>o||setTimeout(s,c,t)},cn=(e,n)=>ge(e)==ge(n),[dt,un]=on(new Map),ln=re({onLoadingSlow:te,onSuccess:te,onError:te,onErrorRetry:an,onDiscarded:te,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Je?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Je?5e3:3e3,compare:cn,isPaused:()=>!1,cache:dt,mutate:un,fallback:{}},en),fn=(e,n)=>{const r=re(e,n);if(n){const{use:s,fallback:t}=e,{use:o,fallback:i}=n;s&&o&&(r.use=s.concat(o)),t&&i&&(r.fallback=re(t,i))}return r},dn=g.createContext({}),hn="$inf$",ht=we&&window.__SWR_DEVTOOLS_USE__,pn=ht?window.__SWR_DEVTOOLS_USE__:[],mn=()=>{ht&&(window.__SWR_DEVTOOLS_REACT__=me)},gn=e=>Q(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],xn=()=>re(ln,g.useContext(dn)),yn=e=>(n,r,s)=>e(n,r&&((...o)=>{const[i]=We(n),[,,,c]=Z.get(dt);if(i.startsWith(hn))return r(...o);const f=c[i];return x(f)?r(...o):(delete c[i],f)}),s),En=pn.concat(yn),vn=e=>function(...r){const s=xn(),[t,o,i]=gn(r),c=fn(s,i);let f=e;const{use:p}=c,a=(p||[]).concat(En);for(let u=a.length;u--;)f=a[u](f);return f(t,o||c.fetcher||null,c)},bn=(e,n,r)=>{const s=n[e]||(n[e]=[]);return s.push(r),()=>{const t=s.indexOf(r);t>=0&&(s[t]=s[s.length-1],s.pop())}};mn();const Ye=me.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(n=>{e.status="fulfilled",e.value=n},n=>{e.status="rejected",e.reason=n}),e)}),Ae={dedupe:!0},wn=(e,n,r)=>{const{cache:s,compare:t,suspense:o,fallbackData:i,revalidateOnMount:c,revalidateIfStale:f,refreshInterval:p,refreshWhenHidden:a,refreshWhenOffline:u,keepPreviousData:m}=r,[h,j,E,q]=Z.get(s),[d,M]=We(e),B=g.useRef(!1),V=g.useRef(!1),R=g.useRef(d),S=g.useRef(n),P=g.useRef(r),v=()=>P.current,H=()=>v().isVisible()&&v().isOnline(),[C,D,F,A]=at(s,d),U=g.useRef({}).current,ue=x(i)?r.fallback[d]:i,se=(b,w)=>{for(const N in U){const _=N;if(_==="data"){if(!t(b[_],w[_])&&(!x(b[_])||!t(ye,w[_])))return!1}else if(w[_]!==b[_])return!1}return!0},le=g.useMemo(()=>{const b=!d||!n?!1:x(c)?v().isPaused()||o?!1:x(f)?!0:f:c,w=k=>{const X=re(k);return delete X._k,b?{isValidating:!0,isLoading:!0,...X}:X},N=C(),_=A(),G=w(N),oe=N===_?G:w(_);let L=G;return[()=>{const k=w(C());return se(k,L)?(L.data=k.data,L.isLoading=k.isLoading,L.isValidating=k.isValidating,L.error=k.error,L):(L=k,k)},()=>oe]},[s,d]),ee=zt.useSyncExternalStore(g.useCallback(b=>F(d,(w,N)=>{se(N,w)||b()}),[s,d]),le[0],le[1]),fe=!B.current,y=h[d]&&h[d].length>0,T=ee.data,O=x(T)?ue:T,I=ee.error,J=g.useRef(O),ye=m?x(T)?J.current:T:O,He=y&&!x(I)?!1:fe&&!x(c)?c:v().isPaused()?!1:o?x(O)?!1:f:x(O)||f,qe=!!(d&&n&&fe&&He),pt=x(ee.isValidating)?qe:ee.isValidating,mt=x(ee.isLoading)?qe:ee.isLoading,de=g.useCallback(async b=>{const w=S.current;if(!d||!w||V.current||v().isPaused())return!1;let N,_,G=!0;const oe=b||{},L=!E[d]||!oe.dedupe,k=()=>Qe?!V.current&&d===R.current&&B.current:d===R.current,X={isValidating:!1,isLoading:!1},$e=()=>{D(X)},Be=()=>{const $=E[d];$&&$[1]===_&&delete E[d]},ze={isValidating:!0};x(C().data)&&(ze.isLoading=!0);try{if(L&&(D(ze),r.loadingTimeout&&x(C().data)&&setTimeout(()=>{G&&k()&&v().onLoadingSlow(d,r)},r.loadingTimeout),E[d]=[w(M),Me()]),[N,_]=E[d],N=await N,L&&setTimeout(Be,r.dedupingInterval),!E[d]||E[d][1]!==_)return L&&k()&&v().onDiscarded(d),!1;X.error=W;const $=j[d];if(!x($)&&(_<=$[0]||_<=$[1]||$[1]===0))return $e(),L&&k()&&v().onDiscarded(d),!1;const Y=C().data;X.data=t(Y,N)?Y:N,L&&k()&&v().onSuccess(N,d,r)}catch($){Be();const Y=v(),{shouldRetryOnError:Re}=Y;Y.isPaused()||(X.error=$,L&&k()&&(Y.onError($,d,Y),(Re===!0||Q(Re)&&Re($))&&(!v().revalidateOnFocus||!v().revalidateOnReconnect||H())&&Y.onErrorRetry($,d,Y,gt=>{const Se=h[d];Se&&Se[0]&&Se[0](he.ERROR_REVALIDATE_EVENT,gt)},{retryCount:(oe.retryCount||0)+1,dedupe:!0})))}return G=!1,$e(),!0},[d,s]),Ue=g.useCallback((...b)=>ft(s,R.current,...b),[]);if(Ie(()=>{S.current=n,P.current=r,x(T)||(J.current=T)}),Ie(()=>{if(!d)return;const b=de.bind(W,Ae);let w=0;const _=bn(d,h,(G,oe={})=>{if(G==he.FOCUS_EVENT){const L=Date.now();v().revalidateOnFocus&&L>w&&H()&&(w=L+v().focusThrottleInterval,b())}else if(G==he.RECONNECT_EVENT)v().revalidateOnReconnect&&H()&&b();else{if(G==he.MUTATE_EVENT)return de();if(G==he.ERROR_REVALIDATE_EVENT)return de(oe)}});return V.current=!1,R.current=d,B.current=!0,D({_k:M}),He&&(x(O)||xe?b():nn(b)),()=>{V.current=!0,_()}},[d]),Ie(()=>{let b;function w(){const _=Q(p)?p(C().data):p;_&&b!==-1&&(b=setTimeout(N,_))}function N(){!C().error&&(a||v().isVisible())&&(u||v().isOnline())?de(Ae).then(w):w()}return w(),()=>{b&&(clearTimeout(b),b=-1)}},[p,a,u,d]),g.useDebugValue(ye),o&&x(O)&&d){if(!Qe&&xe)throw new Error("Fallback data is required when using suspense in SSR.");S.current=n,P.current=r,V.current=!1;const b=q[d];if(!x(b)){const w=Ue(b);Ye(w)}if(x(I)){const w=de(Ae);x(ye)||(w.status="fulfilled",w.value=!0),Ye(w)}else throw I}return{mutate:Ue,get data(){return U.data=!0,ye},get error(){return U.error=!0,I},get isValidating(){return U.isValidating=!0,pt},get isLoading(){return U.isLoading=!0,mt}}},Rn=vn(wn),Vn=()=>{const{i18n:e}=Ze(),[n,r]=g.useState(0),s=yt(u=>u.screenHeight.height),[t,o]=g.useState(!1);g.useEffect(()=>{const u=setInterval(()=>{r(m=>m+1)},5e3);return()=>clearInterval(u)},[]);const i=async u=>{const m=await fetch(u);if(!m.ok)throw new Error("Failed to fetch data");return m.json()},{data:c,error:f}=Rn("http://95.85.121.153:6856/data",i),p=c==null?void 0:c.filter(u=>u.type==="home_title");if(!p&&!f)return l.jsx("div",{children:"Loading..."});if(f)return l.jsxs("div",{children:["Error: ",f.message]});const a=(u,m)=>{const h=e.language;return u[`${m}_${h}`]};return l.jsxs(l.Fragment,{children:[p==null?void 0:p.map(u=>l.jsxs(l.Fragment,{children:[l.jsx(ie,{width:"300%",height:"100vh",sx:{display:wt},children:l.jsxs(ae,{children:[l.jsx(ae,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:l.jsx(Et,{})}),l.jsxs(_e,{container:!0,spacing:10,pt:2,alignItems:"center",children:[l.jsx(_e,{item:!0,lg:7,md:7,sm:12,xs:12,children:l.jsxs(ie,{spacing:2,children:[l.jsx(st,{sequence:[a(u,"title")],wrapper:"span",speed:30,style:Rt},n),l.jsx(Ft,{text:a(u,"description")}),l.jsx(et,{})]})}),l.jsx(_e,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:l.jsx(ae,{className:"bounce",sx:{...St,backgroundImage:`url(${u.asset.url})`}})})]})]})}),l.jsx(ie,{direction:"row",spacing:1,sx:{..._t,left:s>=900?60:50,display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},children:l.jsx(ae,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),sx:{background:"#D9D9D9",p:1,borderRadius:"8px"},children:l.jsxs(ie,{direction:"row",spacing:3,children:[l.jsx("img",{style:{width:"120px",height:s>=900?"110px":"60px",borderRadius:"4px"},src:u.asset.url}),l.jsxs(pe,{sx:{color:"#222222",fontSize:s>=900?"18px":"12px",lineHeight:s>=900?2:1.5,bottom:s>=900?5:0,width:s>=900?"250px":"150px",fontFamily:"Trebuchet MS, sans-serif"},children:[a(u,"short").slice(0,61),"..."]}),t&&l.jsx(Vt,{})]})},u.id)})]})),l.jsx(Nt,{})]})};export{Vn as default};