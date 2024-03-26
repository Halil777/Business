import{_ as d,r as x,j as o}from"./index-2A5l3SeN.js";import{L as S}from"./LanguageModal-DIfG1hgg.js";import{S as z,I as R}from"./Social-g1C2OfMO.js";import{d as y}from"./ArrowRightAlt-DTQaqCCw.js";import{g as m,a as C,s as v,b as M,u as b,_ as j,c as g,d as w,e as B,S as c,B as f,T as u}from"./createSvgIcon-CXjczIyO.js";import{G as A}from"./Grid-vJ5Nb8Oe.js";import"./Portal-Ca57rXvG.js";const k=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function P(e){return m("MuiPaper",e)}C("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const _=["className","component","elevation","square","variant"],E=e=>{const{square:t,elevation:s,variant:i,classes:n}=e,r={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${s}`]};return w(r,P,n)},U=v("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],!s.square&&t.rounded,s.variant==="elevation"&&t[`elevation${s.elevation}`]]}})(({theme:e,ownerState:t})=>{var s;return d({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&d({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${M("#fff",k(t.elevation))}, ${M("#fff",k(t.elevation))})`},e.vars&&{backgroundImage:(s=e.vars.overlays)==null?void 0:s[t.elevation]}))}),D=x.forwardRef(function(t,s){const i=b({props:t,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:a=!1,variant:l="elevation"}=i,h=j(i,_),H=d({},i,{component:r,elevation:p,square:a,variant:l}),N=E(H);return o.jsx(U,d({as:r,ownerState:H,className:g(N.root,n),ref:s},h))}),I=D;function V(e){return m("MuiCard",e)}C("MuiCard",["root"]);const W=["className","raised"],q=e=>{const{classes:t}=e;return w({root:["root"]},V,t)},L=v(I,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),T=x.forwardRef(function(t,s){const i=b({props:t,name:"MuiCard"}),{className:n,raised:r=!1}=i,p=j(i,W),a=d({},i,{raised:r}),l=q(a);return o.jsx(L,d({className:g(l.root,n),elevation:r?8:void 0,ref:s,ownerState:a},p))}),F=T;function O(e){return m("MuiCardActionArea",e)}const G=C("MuiCardActionArea",["root","focusVisible","focusHighlight"]),$=G,K=["children","className","focusVisibleClassName"],J=e=>{const{classes:t}=e;return w({root:["root"],focusHighlight:["focusHighlight"]},O,t)},Q=v(B,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${$.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${$.focusVisible} .${$.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),X=v("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),Y=x.forwardRef(function(t,s){const i=b({props:t,name:"MuiCardActionArea"}),{children:n,className:r,focusVisibleClassName:p}=i,a=j(i,K),l=i,h=J(l);return o.jsxs(Q,d({className:g(h.root,r),focusVisibleClassName:g(p,h.focusVisible),ref:s,ownerState:l},a,{children:[n,o.jsx(X,{className:h.focusHighlight,ownerState:l})]}))}),Z=Y;function ee(e){return m("MuiCardContent",e)}C("MuiCardContent",["root"]);const oe=["className","component"],te=e=>{const{classes:t}=e;return w({root:["root"]},ee,t)},se=v("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),ie=x.forwardRef(function(t,s){const i=b({props:t,name:"MuiCardContent"}),{className:n,component:r="div"}=i,p=j(i,oe),a=d({},i,{component:r}),l=te(a);return o.jsx(se,d({as:r,className:g(l.root,n),ownerState:a,ref:s},p))}),re=ie,xe=()=>{const[e,t]=x.useState(window.innerHeight);return x.useEffect(()=>{const s=()=>{t(window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),o.jsxs(o.Fragment,{children:[o.jsxs(c,{width:"100%",height:"85vh",children:[o.jsx(f,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:o.jsx(S,{})}),o.jsxs(A,{container:!0,spacing:10,pt:2,alignItems:"center",children:[o.jsx(A,{item:!0,lg:7,md:7,sm:12,xs:12,children:o.jsxs(c,{spacing:2,children:[o.jsx(u,{sx:{color:"#222222",fontSize:e>=900?"48px":"43px",fontWeight:700},children:"Role of Corporate Trainer in Educating the Workface"}),o.jsx(u,{sx:{color:"#6B6B6B",fontSize:"16px",fontWeight:600,lineHeight:"20px",width:e>=900?"60%":"100%"},children:"Identify new business opportunities in order to improve profitability and help the business grow. Identify new business opportunities in order to improve profitability and help the business grow."}),o.jsx(z,{})]})}),o.jsx(A,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:o.jsx(f,{sx:{width:"100%",height:"85vh",background:"url(/images/321467.jpg)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end"},children:o.jsx(F,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:o.jsx(Z,{children:o.jsx(re,{children:o.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[o.jsxs(u,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",o.jsx("br",{})," Kerimov"]}),o.jsxs(u,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",o.jsx("br",{})," with 7 years of experience"]}),o.jsx(R,{children:o.jsx(y,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})})]})]}),o.jsx(c,{width:"auto",p:1,sx:{position:"absolute",bottom:0,left:e>=900?-40:-17,background:"#222222",borderTopRightRadius:"8px"},children:o.jsxs(c,{direction:"row",spacing:1,children:[o.jsx(f,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:e>=900?"450px":"330px"},children:o.jsxs(c,{direction:"row",spacing:1,children:[o.jsx("img",{style:{width:"120px",height:e>=900?"110px":"60px",borderRadius:"4px"},src:"/images/Rectangle 6.png",alt:"Rectangle 6.png  "}),o.jsxs(c,{sx:{position:"relative",width:"100%"},children:[o.jsx(R,{sx:{width:e>=900?"40px":"30px",height:e>=900?"40px":"30px",position:"absolute",top:0,right:0},children:o.jsx(y,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:e>=900?"40px":"34px",width:e>=900?"30px":"20px"}})}),o.jsx(u,{sx:{color:"#222222",fontSize:e>=900?"18px":"12px",lineHeight:"20px",position:"absolute",bottom:e>=900?5:0},children:"Business trainer provides administrative, clerical and word processing support"})]})]})}),o.jsx(f,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:e>=900?"450px":"330px"},children:o.jsxs(c,{direction:"row",spacing:1,children:[o.jsx("img",{style:{width:"120px",height:e>=900?"110px":"60px",borderRadius:"4px"},src:"/images/Rectangle 6.png",alt:"Rectangle 6.png  "}),o.jsxs(c,{sx:{position:"relative",width:"100%"},children:[o.jsx(R,{sx:{width:e>=900?"40px":"30px",height:e>=900?"40px":"30px",position:"absolute",top:0,right:0},children:o.jsx(y,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:e>=900?"40px":"34px",width:e>=900?"30px":"20px"}})}),o.jsx(u,{sx:{color:"#222222",fontSize:e>=900?"18px":"12px",lineHeight:"20px",position:"absolute",bottom:e>=900?5:0},children:"Business trainer provides administrative, clerical and word processing support"})]})]})})]})})]})};export{xe as default};
