import{k as C,l as f,s as p,_ as l,y as x,r as g,m as h,h as m,j as u,n as v,o as A}from"./index-BB7KoYWS.js";import{f as M}from"./Box-CEu2FmwZ.js";const y=o=>{let t;return o<1?t=5.11916*o**2:t=4.5*Math.log(o+1)+2,(t/100).toFixed(2)};function N(o){return C("MuiPaper",o)}f("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const P=["className","component","elevation","square","variant"],U=o=>{const{square:t,elevation:s,variant:e,classes:r}=o,a={root:["root",e,!t&&"rounded",e==="elevation"&&`elevation${s}`]};return A(a,N,r)},w=p("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,t[s.variant],!s.square&&t.rounded,s.variant==="elevation"&&t[`elevation${s.elevation}`]]}})(({theme:o,ownerState:t})=>{var s;return l({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!t.square&&{borderRadius:o.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},t.variant==="elevation"&&l({boxShadow:(o.vars||o).shadows[t.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${x("#fff",y(t.elevation))}, ${x("#fff",y(t.elevation))})`},o.vars&&{backgroundImage:(s=o.vars.overlays)==null?void 0:s[t.elevation]}))}),H=g.forwardRef(function(t,s){const e=h({props:t,name:"MuiPaper"}),{className:r,component:a="div",elevation:c=1,square:n=!1,variant:i="elevation"}=e,d=m(e,P),R=l({},e,{component:a,elevation:c,square:n,variant:i}),$=U(R);return u.jsx(w,l({as:a,ownerState:R,className:v($.root,r),ref:s},d))}),_=H;function j(o){return C("MuiCard",o)}f("MuiCard",["root"]);const k=["className","raised"],V=o=>{const{classes:t}=o;return A({root:["root"]},j,t)},q=p(_,{name:"MuiCard",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({overflow:"hidden"})),B=g.forwardRef(function(t,s){const e=h({props:t,name:"MuiCard"}),{className:r,raised:a=!1}=e,c=m(e,k),n=l({},e,{raised:a}),i=V(n);return u.jsx(q,l({className:v(i.root,r),elevation:a?8:void 0,ref:s,ownerState:n},c))}),X=B;function E(o){return C("MuiCardActionArea",o)}const F=f("MuiCardActionArea",["root","focusVisible","focusHighlight"]),b=F,O=["children","className","focusVisibleClassName"],I=o=>{const{classes:t}=o;return A({root:["root"],focusHighlight:["focusHighlight"]},E,t)},L=p(M,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${b.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${b.focusVisible} .${b.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),T=p("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,t)=>t.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),W=g.forwardRef(function(t,s){const e=h({props:t,name:"MuiCardActionArea"}),{children:r,className:a,focusVisibleClassName:c}=e,n=m(e,O),i=e,d=I(i);return u.jsxs(L,l({className:v(d.root,a),focusVisibleClassName:v(c,d.focusVisible),ref:s,ownerState:i},n,{children:[r,u.jsx(T,{className:d.focusHighlight,ownerState:i})]}))}),Y=W;function z(o){return C("MuiCardContent",o)}f("MuiCardContent",["root"]);const D=["className","component"],G=o=>{const{classes:t}=o;return A({root:["root"]},z,t)},J=p("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),K=g.forwardRef(function(t,s){const e=h({props:t,name:"MuiCardContent"}),{className:r,component:a="div"}=e,c=m(e,D),n=l({},e,{component:a}),i=G(n);return u.jsx(J,l({as:a,className:v(i.root,r),ownerState:n,ref:s},c))}),Z=K;export{X as C,Y as a,Z as b};