import{g as K,d as Q,s as z,_ as A,e as ie,r as g,f as X,h as J,j as s,k as G,l as Y,m as ye,R as ce,a as fe,L as be,S as D,c as we,G as te}from"./index-BjNYtmh3.js";import{L as Ce}from"./LanguageModal-CkzPcwmA.js";import{u as le,S as pe,a as je,h as Ae,d as Re,t as Se,b as Ee,c as ke}from"./commonStyle-RDzlnqdz.js";import{d as he}from"./ArrowRightAlt-Ciz7Y2Ew.js";import{B as L}from"./Box-DQ-6QLQF.js";import{B as Ie,T as W}from"./createSvgIcon-XYUV_pHV.js";import{I as ve}from"./IconButton-DeDijJrp.js";/* empty css             */import{u as _e}from"./index-C0_UMWec.js";const ue=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Me(e){return K("MuiPaper",e)}Q("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $e=["className","component","elevation","square","variant"],Ne=e=>{const{square:t,elevation:o,variant:r,classes:n}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${o}`]};return Y(i,Me,n)},He=z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return A({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&A({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${ie("#fff",ue(t.elevation))}, ${ie("#fff",ue(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),Pe=g.forwardRef(function(t,o){const r=X({props:t,name:"MuiPaper"}),{className:n,component:i="div",elevation:c=1,square:l=!1,variant:u="elevation"}=r,f=J(r,$e),a=A({},r,{component:i,elevation:c,square:l,variant:u}),d=Ne(a);return s.jsx(He,A({as:i,ownerState:a,className:G(d.root,n),ref:o},f))}),Te=Pe;function De(e){return K("MuiCard",e)}Q("MuiCard",["root"]);const Le=["className","raised"],Fe=e=>{const{classes:t}=e;return Y({root:["root"]},De,t)},Oe=z(Te,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Ue=g.forwardRef(function(t,o){const r=X({props:t,name:"MuiCard"}),{className:n,raised:i=!1}=r,c=J(r,Le),l=A({},r,{raised:i}),u=Fe(l);return s.jsx(Oe,A({className:G(u.root,n),elevation:i?8:void 0,ref:o,ownerState:l},c))}),Be=Ue;function qe(e){return K("MuiCardActionArea",e)}const We=Q("MuiCardActionArea",["root","focusVisible","focusHighlight"]),re=We,Ge=["children","className","focusVisibleClassName"],ze=e=>{const{classes:t}=e;return Y({root:["root"],focusHighlight:["focusHighlight"]},qe,t)},Ve=z(Ie,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${re.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${re.focusVisible} .${re.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),Ke=z("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),Qe=g.forwardRef(function(t,o){const r=X({props:t,name:"MuiCardActionArea"}),{children:n,className:i,focusVisibleClassName:c}=r,l=J(r,Ge),u=r,f=ze(u);return s.jsxs(Ve,A({className:G(f.root,i),focusVisibleClassName:G(c,f.focusVisible),ref:o,ownerState:u},l,{children:[n,s.jsx(Ke,{className:f.focusHighlight,ownerState:u})]}))}),Xe=Qe;function Je(e){return K("MuiCardContent",e)}Q("MuiCardContent",["root"]);const Ye=["className","component"],Ze=e=>{const{classes:t}=e;return Y({root:["root"]},Je,t)},et=z("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),tt=g.forwardRef(function(t,o){const r=X({props:t,name:"MuiCardContent"}),{className:n,component:i="div"}=r,c=J(r,Ye),l=A({},r,{component:i}),u=Ze(l);return s.jsx(et,A({as:i,className:G(u.root,n),ownerState:l,ref:o},c))}),rt=tt,nt="http://95.85.121.153:1337",ne=ye.create({baseURL:nt});function Z(e,t,o,r){return new(o||(o=Promise))(function(n,i){function c(f){try{u(r.next(f))}catch(a){i(a)}}function l(f){try{u(r.throw(f))}catch(a){i(a)}}function u(f){var a;f.done?n(f.value):(a=f.value,a instanceof o?a:new o(function(d){d(a)})).then(c,l)}u((r=r.apply(e,t||[])).next())})}function k(e,t){var o,r,n,i,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(u){return function(f){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(n=c.trys,!((n=n.length>0&&n[n.length-1])||a[0]!==6&&a[0]!==2)){c=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){c.label=a[1];break}if(a[0]===6&&c.label<n[1]){c.label=n[1],n=a;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(a);break}n[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(d){a=[6,d],r=0}finally{o=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([u,f])}}}function oe(e){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var r,n,i=o.call(e),c=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(l){n={error:l}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return c}function C(e,t,o){if(o||arguments.length===2)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}function de(e,t,o,r,n){for(var i=[],c=5;c<arguments.length;c++)i[c-5]=arguments[c];return Z(this,void 0,void 0,function(){var l,u,f,a,d,h;return k(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),l=oe(i),u=l.next(),v.label=1;case 1:if(u.done)return[3,11];switch(f=u.value,typeof f){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,ot(e,t,f,o,r,n)];case 3:return v.sent(),[3,10];case 4:return[4,ge(f)];case 5:return v.sent(),[3,10];case 6:return[4,f.apply(void 0,C([e,t,o,r,n],w(i),!1))];case 7:return v.sent(),[3,10];case 8:return[4,f];case 9:v.sent(),v.label=10;case 10:return u=l.next(),[3,1];case 11:return[3,14];case 12:return a=v.sent(),d={error:a},[3,14];case 13:try{u&&!u.done&&(h=l.return)&&h.call(l)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function ot(e,t,o,r,n,i){return Z(this,void 0,void 0,function(){var c,l;return k(this,function(u){switch(u.label){case 0:return c=e.textContent||"",l=function(f,a){var d=w(a).slice(0);return C(C([],w(f),!1),[NaN],!1).findIndex(function(h,v){return d[v]!==h})}(c,o),[4,st(e,C(C([],w(it(c,t,l)),!1),w(at(o,t,l)),!1),r,n,i)];case 1:return u.sent(),[2]}})})}function ge(e){return Z(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return[4,new Promise(function(o){return setTimeout(o,e)})];case 1:return t.sent(),[2]}})})}function st(e,t,o,r,n){return Z(this,void 0,void 0,function(){var i,c,l,u,f,a,d,h,v,N,R,S,F;return k(this,function(j){switch(j.label){case 0:if(i=t,n){for(c=0,l=1;l<t.length;l++)if(u=w([t[l-1],t[l]],2),f=u[0],(a=u[1]).length>f.length||a===""){c=l;break}i=t.slice(c,t.length)}j.label=1;case 1:j.trys.push([1,6,7,8]),d=oe(function(O){var H,I,E,_,U,P,M;return k(this,function(y){switch(y.label){case 0:H=function($){return k(this,function(B){switch(B.label){case 0:return[4,{op:function(q){return requestAnimationFrame(function(){return q.textContent=$})},opCode:function(q){var ee=q.textContent||"";return $===""||ee.length>$.length?"DELETE":"WRITING"}}];case 1:return B.sent(),[2]}})},y.label=1;case 1:y.trys.push([1,6,7,8]),I=oe(O),E=I.next(),y.label=2;case 2:return E.done?[3,5]:(_=E.value,[5,H(_)]);case 3:y.sent(),y.label=4;case 4:return E=I.next(),[3,2];case 5:return[3,8];case 6:return U=y.sent(),P={error:U},[3,8];case 7:try{E&&!E.done&&(M=I.return)&&M.call(I)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(i)),h=d.next(),j.label=2;case 2:return h.done?[3,5]:(v=h.value,N=v.opCode(e)==="WRITING"?o+o*(Math.random()-.5):r+r*(Math.random()-.5),v.op(e),[4,ge(N)]);case 3:j.sent(),j.label=4;case 4:return h=d.next(),[3,2];case 5:return[3,8];case 6:return R=j.sent(),S={error:R},[3,8];case 7:try{h&&!h.done&&(F=d.return)&&F.call(d)}finally{if(S)throw S.error}return[7];case 8:return[2]}})})}function at(e,t,o){var r,n;return o===void 0&&(o=0),k(this,function(i){switch(i.label){case 0:r=t(e),n=r.length,i.label=1;case 1:return o<n?[4,r.slice(0,++o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function it(e,t,o){var r,n;return o===void 0&&(o=0),k(this,function(i){switch(i.label){case 0:r=t(e),n=r.length,i.label=1;case 1:return n>o?[4,r.slice(0,--n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var ct="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var o=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var xe=g.memo(g.forwardRef(function(e,t){var o=e.sequence,r=e.repeat,n=e.className,i=e.speed,c=i===void 0?40:i,l=e.deletionSpeed,u=e.omitDeletionAnimation,f=u!==void 0&&u,a=e.preRenderFirstString,d=a!==void 0&&a,h=e.wrapper,v=h===void 0?"span":h,N=e.splitter,R=N===void 0?function(p){return C([],w(p),!1)}:N,S=e.cursor,F=S===void 0||S,j=e.style,O=function(p,x){var b={};for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&x.indexOf(m)<0&&(b[m]=p[m]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(m=Object.getOwnPropertySymbols(p);T<m.length;T++)x.indexOf(m[T])<0&&Object.prototype.propertyIsEnumerable.call(p,m[T])&&(b[m[T]]=p[m[T]])}return b}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),H=O["aria-label"],I=O["aria-hidden"],E=O.role;l||(l=c);var _=new Array(2).fill(40);[c,l].forEach(function(p,x){switch(typeof p){case"number":_[x]=Math.abs(p-100);break;case"object":var b=p.type,m=p.value;if(typeof m!="number")break;b==="keyStrokeDelayInMs"&&(_[x]=m)}});var U,P,M,y,$,B,q=_[0],ee=_[1],V=function(p,x){x===void 0&&(x=null);var b=g.useRef(x);return g.useEffect(function(){p&&(typeof p=="function"?p(b.current):p.current=b.current)},[p]),b}(t),se=ct;U=n?"".concat(F?se+" ":"").concat(n):F?se:"",P=g.useRef(function(){var p,x=o;r===1/0?p=de:typeof r=="number"&&(x=Array(1+r).fill(o).flat());var b=p?C(C([],w(x),!1),[p],!1):C([],w(x),!1);return de.apply(void 0,C([V.current,R,q,ee,f],w(b),!1)),function(){V.current}}),M=g.useRef(),y=g.useRef(!1),$=g.useRef(!1),B=w(g.useState(0),2)[1],y.current&&($.current=!0),g.useEffect(function(){return y.current||(M.current=P.current(),y.current=!0),B(function(p){return p+1}),function(){$.current&&M.current&&M.current()}},[]);var me=v,ae=d?o.find(function(p){return typeof p=="string"})||"":null;return ce.createElement(me,{"aria-hidden":I,"aria-label":H,role:E,style:j,className:U,children:H?ce.createElement("span",{"aria-hidden":"true",ref:V,children:ae}):ae,ref:H?void 0:V})}),function(e,t){return!0});const lt=()=>{const{i18n:e}=fe(),[t,o]=g.useState(0),[r,n]=g.useState("");g.useEffect(()=>{(async()=>{try{const R=(await ne.get(`/api/banners?populate=*&locale=${e.language}`)).data.data.find(S=>S.attributes.type==="home_banner");R&&R.attributes.image.data.attributes.url&&n(`http://95.85.121.153:1337${R.attributes.image.data.attributes.url}`)}catch(v){console.error("Error fetching background image:",v)}})()},[e.language]),g.useEffect(()=>{const h=setInterval(()=>{o(v=>v+1)},5e3);return()=>clearInterval(h)},[]);const{refetch:i,data:c,isLoading:l,isError:u}=le("homeData",async()=>(await ne.get("/api/title-texts")).data),{data:f,isLoading:a,isError:d}=le("imageData",async()=>(await ne.get(`/api/banners?populate=image&locale=${e.language}`)).data);return g.useEffect(()=>{i()},[e.language]),s.jsx(s.Fragment,{children:s.jsxs(L,{sx:{display:{md:"none",lg:"none",sm:"flex",xs:"flex"},flexDirection:"column",p:3},children:[(l||a)&&s.jsx(be,{}),(u||d)&&s.jsx("div",{children:"Error fetching data"}),c&&f&&s.jsxs(s.Fragment,{children:[s.jsx(xe,{sequence:[`${c.data[0].attributes.title}`],wrapper:"span",speed:30,style:{color:"#fff",fontSize:"1.4em",fontWeight:900,lineHeight:"2em",width:"100%",fontFamily:"Trebuchet MS, sans-serif"}},t),s.jsx(W,{sx:{color:"#fff",fontSize:"16px",lineHeight:"20px",textAlign:"center",fontWeight:600,mt:3},children:c.data[0].attributes.short_description}),s.jsx(D,{direction:"row",justifyContent:"center",mt:2,children:s.jsx(pe,{})}),s.jsx(L,{sx:{width:"100%",height:"470px",background:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end",mt:3},children:s.jsx(Be,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:s.jsx(Xe,{children:s.jsx(rt,{children:s.jsxs(D,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[s.jsxs(W,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",s.jsx("br",{})," Kerimov"]}),s.jsxs(W,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",s.jsx("br",{})," with 7 years of experience"]}),s.jsx(ve,{children:s.jsx(he,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})]})]})})},ut=()=>s.jsx(ve,{sx:{...je,width:"40px",height:"40px",top:0,right:0},children:s.jsx(he,{})}),dt=({text:e})=>s.jsx(W,{sx:Ae,children:e}),wt=()=>{const{i18n:e}=fe(),[t,o]=g.useState(0),r=we(d=>d.screenHeight.height),[n,i]=g.useState(!1);g.useEffect(()=>{const d=setInterval(()=>{o(h=>h+1)},5e3);return()=>clearInterval(d)},[]);const c=async d=>{const h=await fetch(d);if(!h.ok)throw new Error("Failed to fetch data");return h.json()},{data:l,error:u}=_e("http://95.85.121.153:6856/data",c),f=l==null?void 0:l.filter(d=>d.type==="home_title");if(!f&&!u)return s.jsx("div",{children:"Loading..."});if(u)return s.jsxs("div",{children:["Error: ",u.message]});const a=(d,h)=>{const v=e.language;return{__html:d[`${h}_${v}`]}};return s.jsxs(s.Fragment,{children:[f==null?void 0:f.map(d=>s.jsxs(s.Fragment,{children:[s.jsx(D,{width:"300%",height:"100vh",sx:{display:Re},children:s.jsxs(L,{children:[s.jsx(L,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:s.jsx(Ce,{})}),s.jsxs(te,{container:!0,spacing:10,pt:2,alignItems:"center",children:[s.jsx(te,{item:!0,lg:7,md:7,sm:12,xs:12,children:s.jsxs(D,{spacing:2,children:[s.jsx(xe,{sequence:[a(d,"title").__html],wrapper:"span",speed:30,style:Se},t),s.jsx(dt,{text:s.jsx("span",{dangerouslySetInnerHTML:a(d,"description")})}),s.jsx(pe,{})]})}),s.jsx(te,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:s.jsx(L,{className:"bounce",sx:{...Ee,backgroundImage:`url(${d.asset.url})`}})})]})]})}),s.jsx(D,{direction:"row",spacing:1,sx:{...ke,left:r>=900?60:50,display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},children:s.jsx(L,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),sx:{background:"#D9D9D9",p:1,borderRadius:"8px"},children:s.jsxs(D,{direction:"row",spacing:3,children:[s.jsx("img",{style:{width:"120px",height:r>=900?"110px":"60px",borderRadius:"4px"},src:d.asset.url}),s.jsx(W,{sx:{color:"#222222",fontSize:r>=900?"18px":"12px",lineHeight:r>=900?2:1.5,bottom:r>=900?5:0,width:r>=900?"250px":"150px",fontFamily:"Trebuchet MS, sans-serif"},dangerouslySetInnerHTML:a(d,"short")}),n&&s.jsx(ut,{})]})},d.id)})]})),s.jsx(lt,{})]})};export{wt as default};
