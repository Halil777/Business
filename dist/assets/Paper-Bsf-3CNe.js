import{g,a as x,s as b,t as l,u as P,_ as $,c as R,b as m}from"./createSvgIcon-aGUtUpqF.js";import{b as s,r as y,j as C}from"./index-BgmevOkl.js";const v=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)};function _(e){return g("MuiPaper",e)}x("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const k=["className","component","elevation","square","variant"],q=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return m(r,_,n)},M=b("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),j=y.forwardRef(function(a,o){const t=P({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:d=1,square:u=!1,variant:p="elevation"}=t,c=$(t,k),i=s({},t,{component:r,elevation:d,square:u,variant:p}),f=q(i);return C.jsx(M,s({as:r,ownerState:i,className:R(f.root,n),ref:o},c))}),E=j;export{E as P};
