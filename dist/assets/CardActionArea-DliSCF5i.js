import{g as f,c as A,s as h,r as g,d as m,_ as v,e as u,j as p,f as C,h as y}from"./index-BONix25s.js";import{P as b}from"./Paper-Dg6-URc4.js";import{k as x}from"./createSvgIcon-DuhfTYnG.js";function R(s){return f("MuiCard",s)}A("MuiCard",["root"]);const N=["className","raised"],H=s=>{const{classes:o}=s;return y({root:["root"]},R,o)},M=h(b,{name:"MuiCard",slot:"Root",overridesResolver:(s,o)=>o.root})(()=>({overflow:"hidden"})),$=g.forwardRef(function(o,r){const t=m({props:o,name:"MuiCard"}),{className:c,raised:a=!1}=t,n=v(t,N),i=u({},t,{raised:a}),e=H(i);return p.jsx(M,u({className:C(e.root,c),elevation:a?8:void 0,ref:r,ownerState:i},n))}),O=$;function w(s){return f("MuiCardActionArea",s)}const j=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),d=j,U=["children","className","focusVisibleClassName"],V=s=>{const{classes:o}=s;return y({root:["root"],focusHighlight:["focusHighlight"]},w,o)},_=h(x,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${d.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${d.focusVisible} .${d.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),P=h("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),k=g.forwardRef(function(o,r){const t=m({props:o,name:"MuiCardActionArea"}),{children:c,className:a,focusVisibleClassName:n}=t,i=v(t,U),e=t,l=V(e);return p.jsxs(_,u({className:C(l.root,a),focusVisibleClassName:C(n,l.focusVisible),ref:r,ownerState:e},i,{children:[c,p.jsx(P,{className:l.focusHighlight,ownerState:e})]}))}),S=k;export{O as C,S as a};