import{_ as d,r as f,j as e}from"./index-CpmsOlck.js";import{L as S}from"./LanguageModal-0gFpEM8Y.js";import{S as B,I as R}from"./Social-DVkXOW2Y.js";import{G as y,d as A}from"./ArrowRightAlt-DPureqwA.js";import{g as m,s as g,a as k,u as C,_ as b,c as h,b as j,S as c}from"./Stack-RcF4gpu6.js";import{g as w,B as v,T as u}from"./Box-B-LB-a5T.js";import{B as P}from"./createSvgIcon-Dq0Wha4w.js";import"./Portal-Cw8YJ-a8.js";const N=o=>{let t;return o<1?t=5.11916*o**2:t=4.5*Math.log(o+1)+2,(t/100).toFixed(2)};function _(o){return m("MuiPaper",o)}w("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const z=["className","component","elevation","square","variant"],U=o=>{const{square:t,elevation:s,variant:i,classes:a}=o,r={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${s}`]};return j(r,_,a)},D=g("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,t[s.variant],!s.square&&t.rounded,s.variant==="elevation"&&t[`elevation${s.elevation}`]]}})(({theme:o,ownerState:t})=>{var s;return d({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!t.square&&{borderRadius:o.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},t.variant==="elevation"&&d({boxShadow:(o.vars||o).shadows[t.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${k("#fff",N(t.elevation))}, ${k("#fff",N(t.elevation))})`},o.vars&&{backgroundImage:(s=o.vars.overlays)==null?void 0:s[t.elevation]}))}),I=f.forwardRef(function(t,s){const i=C({props:t,name:"MuiPaper"}),{className:a,component:r="div",elevation:p=1,square:n=!1,variant:l="elevation"}=i,x=b(i,z),M=d({},i,{component:r,elevation:p,square:n,variant:l}),H=U(M);return e.jsx(D,d({as:r,ownerState:M,className:h(H.root,a),ref:s},x))}),E=I;function V(o){return m("MuiCard",o)}w("MuiCard",["root"]);const W=["className","raised"],q=o=>{const{classes:t}=o;return j({root:["root"]},V,t)},F=g(E,{name:"MuiCard",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({overflow:"hidden"})),T=f.forwardRef(function(t,s){const i=C({props:t,name:"MuiCard"}),{className:a,raised:r=!1}=i,p=b(i,W),n=d({},i,{raised:r}),l=q(n);return e.jsx(F,d({className:h(l.root,a),elevation:r?8:void 0,ref:s,ownerState:n},p))}),L=T;function O(o){return m("MuiCardActionArea",o)}const G=w("MuiCardActionArea",["root","focusVisible","focusHighlight"]),$=G,K=["children","className","focusVisibleClassName"],J=o=>{const{classes:t}=o;return j({root:["root"],focusHighlight:["focusHighlight"]},O,t)},Q=g(P,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${$.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${$.focusVisible} .${$.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),X=g("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,t)=>t.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),Y=f.forwardRef(function(t,s){const i=C({props:t,name:"MuiCardActionArea"}),{children:a,className:r,focusVisibleClassName:p}=i,n=b(i,K),l=i,x=J(l);return e.jsxs(Q,d({className:h(x.root,r),focusVisibleClassName:h(p,x.focusVisible),ref:s,ownerState:l},n,{children:[a,e.jsx(X,{className:x.focusHighlight,ownerState:l})]}))}),Z=Y;function oo(o){return m("MuiCardContent",o)}w("MuiCardContent",["root"]);const eo=["className","component"],to=o=>{const{classes:t}=o;return j({root:["root"]},oo,t)},so=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),io=f.forwardRef(function(t,s){const i=C({props:t,name:"MuiCardContent"}),{className:a,component:r="div"}=i,p=b(i,eo),n=d({},i,{component:r}),l=to(n);return e.jsx(so,d({as:r,className:h(l.root,a),ownerState:n,ref:s},p))}),ro=io,go=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{width:"100%",height:"85vh",children:[e.jsx(v,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:e.jsx(S,{})}),e.jsxs(y,{container:!0,spacing:10,pt:2,alignItems:"center",children:[e.jsx(y,{item:!0,lg:6,md:6,sm:12,xs:12,children:e.jsxs(c,{spacing:2,children:[e.jsx(u,{sx:{color:"#222222",fontSize:"43px",fontWeight:700},children:"Role of Corporate Trainer in Educating the Workface"}),e.jsx(u,{sx:{color:"#6B6B6B",fontSize:"16px",fontWeight:600,lineHeight:"20px"},children:"Identify new business opportunities in order to improve profitability and help the business grow. Identify new business opportunities in order to improve profitability and help the business grow."}),e.jsx(B,{})]})}),e.jsx(y,{item:!0,lg:6,pr:"3%",md:6,sm:12,xs:12,children:e.jsx(v,{sx:{width:"100%",height:"85vh",background:"url(/images/321467.jpg)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end"},children:e.jsx(L,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:e.jsx(Z,{children:e.jsx(ro,{children:e.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[e.jsxs(u,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",e.jsx("br",{})," Kerimov"]}),e.jsxs(u,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",e.jsx("br",{})," with 7 years of experience"]}),e.jsx(R,{children:e.jsx(A,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})})]})]}),e.jsx(c,{width:"100%",sx:{position:"absolute",bottom:5,left:-10},children:e.jsxs(c,{direction:"row",spacing:1,children:[e.jsx(v,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:"330px"},children:e.jsxs(c,{direction:"row",spacing:1,children:[e.jsx("img",{style:{width:"120px",height:"60px",borderRadius:"4px"},src:"/images/Rectangle 6.png",alt:"Rectangle 6.png  "}),e.jsxs(c,{sx:{position:"relative",width:"100%"},children:[e.jsx(R,{sx:{width:"30px",height:"30px",position:"absolute",top:0,right:0},children:e.jsx(A,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"20px"}})}),e.jsx(u,{sx:{color:"#222222",fontSize:"12px",lineHeight:"15px",position:"absolute",bottom:0},children:"Business trainer provides administrative, clerical and word processing support"})]})]})}),e.jsx(v,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:"330px"},children:e.jsxs(c,{direction:"row",spacing:1,children:[e.jsx("img",{style:{width:"120px",height:"60px",borderRadius:"4px"},src:"/images/Rectangle 6.png",alt:"Rectangle 6.png  "}),e.jsxs(c,{sx:{position:"relative",width:"100%"},children:[e.jsx(R,{sx:{width:"30px",height:"30px",position:"absolute",top:0,right:0},children:e.jsx(A,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"20px"}})}),e.jsx(u,{sx:{color:"#222222",fontSize:"12px",lineHeight:"15px",position:"absolute",bottom:0},children:"Business trainer provides administrative, clerical and word processing support"})]})]})})]})})]});export{go as default};