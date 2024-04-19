import{g as I,c as L,s as R,r as l,d as W,_,e as k,j as t,f as U,h as $,L as S,S as a,G as w}from"./index-BysYmAOV.js";import{L as M}from"./LanguageModal-Bkd7Az9n.js";import{S as E}from"./Social-29ApJ_-H.js";import{d as C}from"./ArrowRightAlt-DHXEODED.js";import{a as u}from"./api-DTAsQMr7.js";import{u as b,T as o,B as g}from"./createSvgIcon-C3aTHV9U.js";import{C as H,a as v}from"./CardActionArea-mwOLBH-l.js";import{I as D}from"./IconButton-Bzrq9SrA.js";import"./mergeSlotProps-BiiKsTJz.js";import"./Paper-C8NMgv1j.js";function A(e){return I("MuiCardContent",e)}L("MuiCardContent",["root"]);const F=["className","component"],P=e=>{const{classes:r}=e;return $({root:["root"]},A,r)},T=R("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),N=l.forwardRef(function(r,i){const n=W({props:r,name:"MuiCardContent"}),{className:d,component:x="div"}=n,m=_(n,F),c=k({},n,{component:x}),p=P(c);return t.jsx(T,k({as:x,className:U(p.root,d),ownerState:c,ref:i},m))}),z=N,G=()=>{const[e,r]=l.useState("");l.useEffect(()=>{(async()=>{try{const h=(await u.get("/api/banners?populate=*")).data.data.find(y=>y.attributes.type==="home_banner");h&&h.attributes.image.data.attributes.url&&r(`http://95.85.121.153:1337${h.attributes.image.data.attributes.url}`)}catch(f){console.error("Error fetching background image:",f)}})()},[]);const{data:i,isLoading:n,isError:d}=b("homeData",async()=>(await u.get("/api/title-texts")).data),{data:x,isLoading:m,isError:c}=b("imageData",async()=>(await u.get("/api/banners?populate=image")).data);return t.jsxs(t.Fragment,{children:[(n||m)&&t.jsx(S,{}),(d||c)&&t.jsx("div",{children:"Error fetching data"}),i&&x&&t.jsxs(t.Fragment,{children:[t.jsx(o,{sx:{color:"#222222",fontSize:"24px",lineHeight:"30px",textAlign:"center",fontWeight:700},children:i.data[0].attributes.title}),t.jsx(o,{sx:{color:"#6B6B6B",fontSize:"16px",lineHeight:"20px",textAlign:"center",fontWeight:600,mt:3},children:i.data[0].attributes.short_description}),t.jsx(a,{direction:"row",justifyContent:"center",mt:2,children:t.jsx(E,{})}),t.jsx(g,{sx:{width:"100%",height:"470px",background:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end",mt:3},children:t.jsx(H,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(v,{children:t.jsx(z,{children:t.jsxs(a,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(o,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(o,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(D,{children:t.jsx(C,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})]})]})},et=()=>{const[e,r]=l.useState(window.innerHeight),[i,n]=l.useState("");l.useEffect(()=>{(async()=>{try{const j=(await u.get("/api/banners?populate=*")).data.data.find(B=>B.attributes.type==="home_banner");j&&j.attributes.image.data.attributes.url&&n(`http://95.85.121.153:1337${j.attributes.image.data.attributes.url}`)}catch(h){console.error("Error fetching background image:",h)}})()},[]),l.useEffect(()=>{const s=()=>{r(window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const{data:d,isLoading:x,isError:m}=b("homeData",async()=>(await u.get("/api/title-texts")).data),{data:c,isLoading:p,isError:f}=b("imageData",async()=>(await u.get("/api/banners?populate=image")).data);return t.jsxs(t.Fragment,{children:[(x||p)&&t.jsx(S,{}),(m||f)&&t.jsx("div",{children:"Error fetching data"}),d&&c&&t.jsxs(t.Fragment,{children:[t.jsx(a,{width:"100%",height:"85vh",sx:{display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsxs(g,{children:[t.jsx(g,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:t.jsx(M,{})}),t.jsxs(w,{container:!0,spacing:10,pt:2,alignItems:"center",children:[t.jsx(w,{item:!0,lg:7,md:7,sm:12,xs:12,children:t.jsxs(a,{spacing:2,children:[t.jsx(o,{sx:{color:"#222222",fontSize:e>=900?"48px":"43px",fontWeight:700},children:d.data[0].attributes.title}),t.jsx(o,{sx:{color:"#6B6B6B",fontSize:"16px",fontWeight:600,lineHeight:"20px",width:e>=900?"60%":"100%"},children:d.data[0].attributes.short_description}),t.jsx(E,{})]})}),t.jsx(w,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:t.jsx(g,{sx:{width:"100%",height:"85vh",backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end"},children:t.jsx(H,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(v,{children:t.jsx(z,{children:t.jsxs(a,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(o,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(o,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(D,{children:t.jsx(C,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})})]})]})}),t.jsx(a,{width:"auto",p:1,sx:{position:"absolute",bottom:0,left:e>=900?-40:-17,background:"#222222",borderTopRightRadius:"8px",display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsx(a,{direction:"row",spacing:1,children:c.data.slice(1).map(s=>t.jsx(g,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:e>=900?"450px":"330px"},children:t.jsxs(a,{direction:"row",spacing:1,children:[s.attributes.image.data.attributes.formats.thumbnail.url&&t.jsx("img",{style:{width:"120px",height:e>=900?"110px":"60px",borderRadius:"4px"},src:`http://95.85.121.153:1337${s.attributes.image.data.attributes.formats.thumbnail.url}`}),t.jsxs(a,{sx:{position:"relative",width:"100%"},children:[t.jsx(D,{sx:{width:e>=900?"40px":"30px",height:e>=900?"40px":"30px",position:"absolute",top:0,right:0},children:t.jsx(C,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:e>=900?"40px":"34px",width:e>=900?"30px":"20px"}})}),t.jsx(o,{sx:{color:"#222222",fontSize:e>=900?"18px":"12px",lineHeight:"20px",position:"absolute",bottom:e>=900?5:0},children:s.attributes.title})]})]})},s.id))})})]}),t.jsx(g,{sx:{display:{md:"none",lg:"none",sm:"flex",xs:"flex"},flexDirection:"column",p:3},children:t.jsx(G,{})})]})};export{et as default};
