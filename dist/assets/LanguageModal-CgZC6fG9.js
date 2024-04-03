import{r as c,j as h,b as y,w as J,o as ue,q as Q,v as fe,x as X,y as pe,S as z}from"./index-BVjk5Dsr.js";import{a as se,P as ve,u as ye}from"./Social-DKpuZ-Ij.js";import{u as Z,o as D,a as ee,b as ie,c as ae,d as ke,g as he,B as Re,T as G}from"./createSvgIcon-BczHWlIB.js";import{e as Te,T as Pe,r as Se,g as le}from"./mergeSlotProps-BIliusv5.js";function we(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ce=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ie(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Me(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ne(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Me(e))}function Fe(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ce)).forEach((n,s)=>{const r=Ie(n);r===-1||!Ne(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Be(){return!0}function je(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Fe,isEnabled:i=Be,open:l}=e,u=c.useRef(!1),b=c.useRef(null),m=c.useRef(null),x=c.useRef(null),T=c.useRef(null),k=c.useRef(!1),d=c.useRef(null),F=Z(t.ref,d),S=c.useRef(null);c.useEffect(()=>{!l||!d.current||(k.current=!o)},[o,l]),c.useEffect(()=>{if(!l||!d.current)return;const a=D(d.current);return d.current.contains(a.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex","-1"),k.current&&d.current.focus()),()=>{s||(x.current&&x.current.focus&&(u.current=!0,x.current.focus()),x.current=null)}},[l]),c.useEffect(()=>{if(!l||!d.current)return;const a=D(d.current),E=R=>{S.current=R,!(n||!i()||R.key!=="Tab")&&a.activeElement===d.current&&R.shiftKey&&(u.current=!0,m.current&&m.current.focus())},v=()=>{const R=d.current;if(R===null)return;if(!a.hasFocus()||!i()||u.current){u.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==b.current&&a.activeElement!==m.current)return;if(a.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!k.current)return;let I=[];if((a.activeElement===b.current||a.activeElement===m.current)&&(I=r(d.current)),I.length>0){var A,M;const O=!!((A=S.current)!=null&&A.shiftKey&&((M=S.current)==null?void 0:M.key)==="Tab"),L=I[0],B=I[I.length-1];typeof L!="string"&&typeof B!="string"&&(O?B.focus():L.focus())}else R.focus()};a.addEventListener("focusin",v),a.addEventListener("keydown",E,!0);const P=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&v()},50);return()=>{clearInterval(P),a.removeEventListener("focusin",v),a.removeEventListener("keydown",E,!0)}},[o,n,s,i,l,r]);const w=a=>{x.current===null&&(x.current=a.relatedTarget),k.current=!0,T.current=a.target;const E=t.props.onFocus;E&&E(a)},C=a=>{x.current===null&&(x.current=a.relatedTarget),k.current=!0};return h.jsxs(c.Fragment,{children:[h.jsx("div",{tabIndex:l?0:-1,onFocus:C,ref:b,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:F,onFocus:w}),h.jsx("div",{tabIndex:l?0:-1,onFocus:C,ref:m,"data-testid":"sentinelEnd"})]})}function Ae(e){const t=D(e);return t.body===e?ee(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(ee(e).getComputedStyle(e).paddingRight,10)||0}function Le(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function de(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,u=!Le(i);l&&u&&U(i,s)})}function V(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Oe(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Ae(n)){const i=we(D(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+i}px`;const l=D(n).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ce(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=D(n).body;else{const i=n.parentElement,l=ee(n);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function De(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class $e{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const s=De(o);de(o,t.mount,t.modalRef,s,!0);const r=V(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=V(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Oe(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=V(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,o),de(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function He(e){return typeof e=="function"?e():e}function _e(e){return e?e.props.hasOwnProperty("in"):!1}const Ue=new $e;function Ke(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Ue,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:l,children:u,onClose:b,open:m,rootRef:x}=e,T=c.useRef({}),k=c.useRef(null),d=c.useRef(null),F=Z(d,x),[S,w]=c.useState(!m),C=_e(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const E=()=>D(k.current),v=()=>(T.current.modalRef=d.current,T.current.mount=k.current,T.current),P=()=>{s.mount(v(),{disableScrollLock:n}),d.current&&(d.current.scrollTop=0)},R=ie(()=>{const f=He(t)||E().body;s.add(v(),f),d.current&&P()}),I=c.useCallback(()=>s.isTopModal(v()),[s]),A=ie(f=>{k.current=f,f&&(m&&I()?P():d.current&&U(d.current,a))}),M=c.useCallback(()=>{s.remove(v(),a)},[a,s]);c.useEffect(()=>()=>{M()},[M]),c.useEffect(()=>{m?R():(!C||!r)&&M()},[m,M,C,r,R]);const O=f=>g=>{var j;(j=f.onKeyDown)==null||j.call(f,g),!(g.key!=="Escape"||g.which===229||!I())&&(o||(g.stopPropagation(),b&&b(g,"escapeKeyDown")))},L=f=>g=>{var j;(j=f.onClick)==null||j.call(f,g),g.target===g.currentTarget&&b&&b(g,"backdropClick")};return{getRootProps:(f={})=>{const g=Te(e);delete g.onTransitionEnter,delete g.onTransitionExited;const j=y({},g,f);return y({role:"presentation"},j,{onKeyDown:O(j),ref:F})},getBackdropProps:(f={})=>{const g=f;return y({"aria-hidden":!0},g,{onClick:L(g),open:m})},getTransitionProps:()=>{const f=()=>{w(!1),i&&i()},g=()=>{w(!0),l&&l(),r&&M()};return{onEnter:ae(f,u==null?void 0:u.props.onEnter),onExited:ae(g,u==null?void 0:u.props.onExited)}},rootRef:F,portalRef:A,isTopModal:I,exited:S,hasTransition:C}}const We=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ze={entering:{opacity:1},entered:{opacity:1}},qe=c.forwardRef(function(t,o){const n=ke(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:l,easing:u,in:b,onEnter:m,onEntered:x,onEntering:T,onExit:k,onExited:d,onExiting:F,style:S,timeout:w=s,TransitionComponent:C=Pe}=t,a=J(t,We),E=c.useRef(null),v=Z(E,l.ref,o),P=p=>N=>{if(p){const f=E.current;N===void 0?p(f):p(f,N)}},R=P(T),I=P((p,N)=>{Se(p);const f=le({style:S,timeout:w,easing:u},{mode:"enter"});p.style.webkitTransition=n.transitions.create("opacity",f),p.style.transition=n.transitions.create("opacity",f),m&&m(p,N)}),A=P(x),M=P(F),O=P(p=>{const N=le({style:S,timeout:w,easing:u},{mode:"exit"});p.style.webkitTransition=n.transitions.create("opacity",N),p.style.transition=n.transitions.create("opacity",N),k&&k(p)}),L=P(d),B=p=>{r&&r(E.current,p)};return h.jsx(C,y({appear:i,in:b,nodeRef:E,onEnter:I,onEntered:A,onEntering:R,onExit:O,onExited:L,onExiting:M,addEndListener:B,timeout:w},a,{children:(p,N)=>c.cloneElement(l,y({style:y({opacity:0,visibility:p==="exited"&&!b?"hidden":void 0},ze[p],S,l.props.style),ref:v},N))}))}),Ye=qe;function Ge(e){return ue("MuiBackdrop",e)}he("MuiBackdrop",["root","invisible"]);const Ve=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Xe=e=>{const{classes:t,invisible:o}=e;return pe({root:["root",o&&"invisible"]},Ge,t)},Je=Q("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Qe=c.forwardRef(function(t,o){var n,s,r;const i=fe({props:t,name:"MuiBackdrop"}),{children:l,className:u,component:b="div",components:m={},componentsProps:x={},invisible:T=!1,open:k,slotProps:d={},slots:F={},TransitionComponent:S=Ye,transitionDuration:w}=i,C=J(i,Ve),a=y({},i,{component:b,invisible:T}),E=Xe(a),v=(n=d.root)!=null?n:x.root;return h.jsx(S,y({in:k,timeout:w},C,{children:h.jsx(Je,y({"aria-hidden":!0},v,{as:(s=(r=F.root)!=null?r:m.Root)!=null?s:b,className:X(E.root,u,v==null?void 0:v.className),ownerState:y({},a,v==null?void 0:v.ownerState),classes:E,ref:o,children:l}))}))}),Ze=Qe;function et(e){return ue("MuiModal",e)}he("MuiModal",["root","hidden","backdrop"]);const tt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],nt=e=>{const{open:t,exited:o,classes:n}=e;return pe({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},et,n)},ot=Q("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>y({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),rt=Q(Ze,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),st=c.forwardRef(function(t,o){var n,s,r,i,l,u;const b=fe({name:"MuiModal",props:t}),{BackdropComponent:m=rt,BackdropProps:x,className:T,closeAfterTransition:k=!1,children:d,container:F,component:S,components:w={},componentsProps:C={},disableAutoFocus:a=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:v=!1,disablePortal:P=!1,disableRestoreFocus:R=!1,disableScrollLock:I=!1,hideBackdrop:A=!1,keepMounted:M=!1,onBackdropClick:O,open:L,slotProps:B,slots:p}=b,N=J(b,tt),f=y({},b,{closeAfterTransition:k,disableAutoFocus:a,disableEnforceFocus:E,disableEscapeKeyDown:v,disablePortal:P,disableRestoreFocus:R,disableScrollLock:I,hideBackdrop:A,keepMounted:M}),{getRootProps:g,getBackdropProps:j,getTransitionProps:ge,portalRef:me,isTopModal:be,exited:te,hasTransition:ne}=Ke(y({},f,{rootRef:o})),_=y({},f,{exited:te}),$=nt(_),K={};if(d.props.tabIndex===void 0&&(K.tabIndex="-1"),ne){const{onEnter:H,onExited:W}=ge();K.onEnter=H,K.onExited=W}const oe=(n=(s=p==null?void 0:p.root)!=null?s:w.Root)!=null?n:ot,re=(r=(i=p==null?void 0:p.backdrop)!=null?i:w.Backdrop)!=null?r:m,q=(l=B==null?void 0:B.root)!=null?l:C.root,Y=(u=B==null?void 0:B.backdrop)!=null?u:C.backdrop,xe=se({elementType:oe,externalSlotProps:q,externalForwardedProps:N,getSlotProps:g,additionalProps:{ref:o,as:S},ownerState:_,className:X(T,q==null?void 0:q.className,$==null?void 0:$.root,!_.open&&_.exited&&($==null?void 0:$.hidden))}),Ee=se({elementType:re,externalSlotProps:Y,additionalProps:x,getSlotProps:H=>j(y({},H,{onClick:W=>{O&&O(W),H!=null&&H.onClick&&H.onClick(W)}})),className:X(Y==null?void 0:Y.className,x==null?void 0:x.className,$==null?void 0:$.backdrop),ownerState:_});return!M&&!L&&(!ne||te)?null:h.jsx(ve,{ref:me,container:F,disablePortal:P,children:h.jsxs(oe,y({},xe,{children:[!A&&m?h.jsx(re,y({},Ee)):null,h.jsx(je,{disableEnforceFocus:E,disableAutoFocus:a,disableRestoreFocus:R,isEnabled:be,open:L,children:c.cloneElement(d,K)})]}))})}),it=st,at={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"6px"};function ft(){const[e,t]=c.useState(!1),{i18n:o}=ye(),n=()=>{t(!1),localStorage.setItem("languageModalShown","true")},s=r=>{o.changeLanguage(r),n()};return c.useEffect(()=>{localStorage.getItem("languageModalShown")||t(!0)},[]),h.jsx("div",{children:h.jsx(it,{open:e,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:h.jsx(Re,{sx:at,children:h.jsxs(z,{direction:"row",spacing:2,children:[h.jsxs(z,{onClick:()=>s("tm"),direction:"row",sx:{width:"auto",height:"auto",padding:2,borderRadius:"8px",cursor:"pointer","&:hover":{background:"#3e3e3e",color:"#FFF083"}},spacing:1,alignItems:"center",children:[h.jsx("img",{style:{width:"30px"},src:"./images/tm.png",alt:"tm flag"}),h.jsx(G,{children:"Turkmen"})]}),h.jsxs(z,{onClick:()=>s("en"),direction:"row",sx:{width:"auto",height:"auto",padding:2,borderRadius:"8px",cursor:"pointer","&:hover":{background:"#3e3e3e",color:"#FFF083"}},spacing:1,alignItems:"center",children:[h.jsx("img",{style:{width:"30px"},src:"./images/uk.svg",alt:"tm flag"}),h.jsx(G,{children:"English"})]}),h.jsxs(z,{onClick:()=>s("ru"),direction:"row",sx:{width:"auto",height:"auto",padding:2,borderRadius:"8px",cursor:"pointer","&:hover":{background:"#3e3e3e",color:"#FFF083"}},spacing:1,alignItems:"center",children:[h.jsx("img",{style:{width:"30px"},src:"./images/ru.svg",alt:"tm flag"}),h.jsx(G,{children:"Russian"})]})]})})})})}export{ft as L};
