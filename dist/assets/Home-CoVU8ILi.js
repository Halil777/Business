import{g as L,c as R,s as W,r as l,d as _,_ as U,e as S,j as t,f as $,h as M,L as E,S as r,G as j,k as w}from"./index-Cu5uBsKd.js";import{L as A}from"./LanguageModal-DLKb-MDL.js";import{S as H}from"./Social-B4T_2mBY.js";import{u as f,d as D}from"./ArrowRightAlt-B4LNrW1l.js";import{a as C}from"./api-DK9zN5wi.js";import{T as o,B as g}from"./createSvgIcon-CL0ovARR.js";import{C as v,a as z}from"./CardActionArea-BkNueZ9O.js";import{I as y}from"./IconButton-FoCxKwjf.js";import"./mergeSlotProps-FMItIsD1.js";import"./Paper-BWT6Lbvu.js";function F(e){return L("MuiCardContent",e)}R("MuiCardContent",["root"]);const P=["className","component"],T=e=>{const{classes:a}=e;return M({root:["root"]},F,a)},N=W("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),G=l.forwardRef(function(a,i){const n=_({props:a,name:"MuiCardContent"}),{className:d,component:x="div"}=n,u=U(n,P),c=S({},n,{component:x}),p=T(c);return t.jsx(N,S({as:x,className:$(p.root,d),ownerState:c,ref:i},u))}),B=G,K=()=>{const[e,a]=l.useState("");l.useEffect(()=>{(async()=>{try{const h=(await C.get("/api/banners?populate=*")).data.data.find(k=>k.attributes.type==="home_banner");h&&h.attributes.image.data.attributes.url&&a(`http://95.85.121.153:1337${h.attributes.image.data.attributes.url}`)}catch(m){console.error("Error fetching background image:",m)}})()},[]);const{data:i,isLoading:n,isError:d}=f("homeData",async()=>(await C.get("/api/title-texts")).data),{data:x,isLoading:u,isError:c}=f("imageData",async()=>(await C.get("/api/banners?populate=image")).data);return t.jsxs(t.Fragment,{children:[(n||u)&&t.jsx(E,{}),(d||c)&&t.jsx("div",{children:"Error fetching data"}),i&&x&&t.jsxs(t.Fragment,{children:[t.jsx(o,{sx:{color:"#222222",fontSize:"24px",lineHeight:"30px",textAlign:"center",fontWeight:700},children:i.data[0].attributes.title}),t.jsx(o,{sx:{color:"#6B6B6B",fontSize:"16px",lineHeight:"20px",textAlign:"center",fontWeight:600,mt:3},children:i.data[0].attributes.short_description}),t.jsx(r,{direction:"row",justifyContent:"center",mt:2,children:t.jsx(H,{})}),t.jsx(g,{sx:{width:"100%",height:"470px",background:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end",mt:3},children:t.jsx(v,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(z,{children:t.jsx(B,{children:t.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(o,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(o,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(y,{children:t.jsx(D,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})]})]})},st=()=>{const[e,a]=l.useState(window.innerHeight),[i,n]=l.useState("");l.useEffect(()=>{(async()=>{try{const b=(await w.get("http://95.85.121.153:1337/api/banners?populate=*")).data.data.find(I=>I.attributes.type==="home_banner");b&&b.attributes.image.data.attributes.url&&n(`http://95.85.121.153:1337${b.attributes.image.data.attributes.url}`)}catch(h){console.error("Error fetching background image:",h)}})()},[]),l.useEffect(()=>{const s=()=>{a(window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const{data:d,isLoading:x,isError:u}=f("homeData",async()=>(await w.get("http://95.85.121.153:1337/api/title-texts")).data),{data:c,isLoading:p,isError:m}=f("imageData",async()=>(await w.get("http://95.85.121.153:1337/api/banners?populate=image")).data);return t.jsxs(t.Fragment,{children:[(x||p)&&t.jsx(E,{}),(u||m)&&t.jsx("div",{children:"Error fetching data"}),d&&c&&t.jsxs(t.Fragment,{children:[t.jsx(r,{width:"100%",height:"85vh",sx:{display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsxs(g,{children:[t.jsx(g,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:t.jsx(A,{})}),t.jsxs(j,{container:!0,spacing:10,pt:2,alignItems:"center",children:[t.jsx(j,{item:!0,lg:7,md:7,sm:12,xs:12,children:t.jsxs(r,{spacing:2,children:[t.jsx(o,{sx:{color:"#222222",fontSize:e>=900?"48px":"43px",fontWeight:700},children:d.data[0].attributes.title}),t.jsx(o,{sx:{color:"#6B6B6B",fontSize:"16px",fontWeight:600,lineHeight:"20px",width:e>=900?"60%":"100%"},children:d.data[0].attributes.short_description}),t.jsx(H,{})]})}),t.jsx(j,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:t.jsx(g,{sx:{width:"100%",height:"85vh",backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end"},children:t.jsx(v,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(z,{children:t.jsx(B,{children:t.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(o,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(o,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(y,{children:t.jsx(D,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})})]})]})}),t.jsx(r,{width:"auto",p:1,sx:{position:"absolute",bottom:0,left:e>=900?-40:-17,background:"#222222",borderTopRightRadius:"8px",display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsx(r,{direction:"row",spacing:1,children:c.data.slice(1).map(s=>t.jsx(g,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:e>=900?"450px":"330px"},children:t.jsxs(r,{direction:"row",spacing:1,children:[s.attributes.image.data.attributes.formats.thumbnail.url&&t.jsx("img",{style:{width:"120px",height:e>=900?"110px":"60px",borderRadius:"4px"},src:`http://95.85.121.153:1337${s.attributes.image.data.attributes.formats.thumbnail.url}`}),t.jsxs(r,{sx:{position:"relative",width:"100%"},children:[t.jsx(y,{sx:{width:e>=900?"40px":"30px",height:e>=900?"40px":"30px",position:"absolute",top:0,right:0},children:t.jsx(D,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:e>=900?"40px":"34px",width:e>=900?"30px":"20px"}})}),t.jsx(o,{sx:{color:"#222222",fontSize:e>=900?"18px":"12px",lineHeight:"20px",position:"absolute",bottom:e>=900?5:0},children:s.attributes.title})]})]})},s.id))})})]}),t.jsx(g,{sx:{display:{md:"none",lg:"none",sm:"flex",xs:"flex"},flexDirection:"column",p:3},children:t.jsx(K,{})})]})};export{st as default};
