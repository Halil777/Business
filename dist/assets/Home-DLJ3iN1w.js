import{g as E,b as R,s as B,r as l,c as I,_ as L,d as C,j as t,e as W,f as _,S as o,L as U,G as m}from"./index-B1M_DUMO.js";import{L as M}from"./LanguageModal-DIP3vAUM.js";import{S}from"./Social-DoXnocOJ.js";import{d as b}from"./ArrowRightAlt-P4otnPK0.js";import{T as i,B as n}from"./createSvgIcon-BsmOprY_.js";import{C as k,a as D}from"./CardActionArea-C7NTrp-G.js";import{I as j}from"./IconButton-CoDj80EL.js";import{u as y,a as f}from"./axios-DVebZChD.js";import"./mergeSlotProps-Bwydl1an.js";import"./Paper-Dm95oBW9.js";function T(e){return E("MuiCardContent",e)}R("MuiCardContent",["root"]);const A=["className","component"],P=e=>{const{classes:r}=e;return _({root:["root"]},T,r)},$=B("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),F=l.forwardRef(function(r,x){const a=I({props:r,name:"MuiCardContent"}),{className:d,component:p="div"}=a,h=L(a,A),c=C({},a,{component:p}),u=P(c);return t.jsx($,C({as:p,className:W(u.root,d),ownerState:c,ref:x},h))}),v=F,N=()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{sx:{color:"#222222",fontSize:"24px",lineHeight:"30px",textAlign:"center",fontWeight:700},children:"Role of Corporate Trainer in Educating the Workface"}),t.jsx(i,{sx:{color:"#6B6B6B",fontSize:"16px",lineHeight:"20px",textAlign:"center",fontWeight:600,mt:3},children:"Identify new business opportunities in order to improve profitability and help the business grow. Identify new business profitability and help the business grow."}),t.jsx(o,{direction:"row",justifyContent:"center",mt:2,children:t.jsx(S,{})}),t.jsx(n,{sx:{width:"100%",height:"470px",background:"url(/images/321467.jpg)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end",mt:3},children:t.jsx(k,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(D,{children:t.jsx(v,{children:t.jsxs(o,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(i,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(i,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(j,{children:t.jsx(b,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})]}),et=()=>{const[e,r]=l.useState(window.innerHeight),[x,a]=l.useState("");l.useEffect(()=>{(async()=>{try{const g=(await f.get("http://95.85.121.153:1337/api/banners?populate=*")).data.data.find(H=>H.attributes.type==="home_banner");g&&g.attributes.image.data.attributes.url&&a(`http://95.85.121.153:1337${g.attributes.image.data.attributes.url}`)}catch(w){console.error("Error fetching background image:",w)}})()},[]),l.useEffect(()=>{const s=()=>{r(window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const{data:d,isLoading:p,isError:h}=y("homeData",async()=>(await f.get("http://95.85.121.153:1337/api/title-texts")).data),{data:c,isLoading:u,isError:z}=y("imageData",async()=>(await f.get("http://95.85.121.153:1337/api/banners?populate=image")).data);return t.jsxs(t.Fragment,{children:[(p||u)&&t.jsx(U,{}),(h||z)&&t.jsx("div",{children:"Error fetching data"}),d&&c&&t.jsxs(t.Fragment,{children:[t.jsx(o,{width:"100%",height:"85vh",sx:{display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsxs(n,{children:[t.jsx(n,{sx:{background:"#E9E9E9",borderRadius:"8px"},children:t.jsx(M,{})}),t.jsxs(m,{container:!0,spacing:10,pt:2,alignItems:"center",children:[t.jsx(m,{item:!0,lg:7,md:7,sm:12,xs:12,children:t.jsxs(o,{spacing:2,children:[t.jsx(i,{sx:{color:"#222222",fontSize:e>=900?"48px":"43px",fontWeight:700},children:d.data[0].attributes.title}),t.jsx(i,{sx:{color:"#6B6B6B",fontSize:"16px",fontWeight:600,lineHeight:"20px",width:e>=900?"60%":"100%"},children:d.data[0].attributes.short_description}),t.jsx(S,{})]})}),t.jsx(m,{item:!0,lg:5,pr:"3%",md:5,sm:12,xs:12,children:t.jsx(n,{sx:{width:"100%",height:"85vh",backgroundImage:`url(${x})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",p:1,display:"flex",alignItems:"flex-end"},children:t.jsx(k,{sx:{width:"100%",height:"auto",p:1,borderRadius:"8px",background:"#D9D9D9"},children:t.jsx(D,{children:t.jsx(v,{children:t.jsxs(o,{direction:"row",justifyContent:"space-between",sx:{position:"relative"},children:[t.jsxs(i,{sx:{color:"#222222",fontSize:"20px",fontWeight:700,lineHeight:"30px"},children:["Iskander ",t.jsx("br",{})," Kerimov"]}),t.jsxs(i,{sx:{color:"#676767",fontSize:"15px",fontWeight:500,lineHeight:"18px",position:"absolute",pl:"40%",pt:"2%"},children:["Business Couch ",t.jsx("br",{})," with 7 years of experience"]}),t.jsx(j,{children:t.jsx(b,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:"34px",width:"30px",position:"absolute",top:0}})})]})})})})})})]})]})}),t.jsx(o,{width:"auto",p:1,sx:{position:"absolute",bottom:0,left:e>=900?-40:-17,background:"#222222",borderTopRightRadius:"8px",display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:t.jsx(o,{direction:"row",spacing:1,children:c.data.slice(1).map(s=>t.jsx(n,{sx:{background:"#D9D9D9",p:1,borderRadius:"8px",width:e>=900?"450px":"330px"},children:t.jsxs(o,{direction:"row",spacing:1,children:[s.attributes.image.data.attributes.formats.thumbnail.url&&t.jsx("img",{style:{width:"120px",height:e>=900?"110px":"60px",borderRadius:"4px"},src:`http://95.85.121.153:1337${s.attributes.image.data.attributes.formats.thumbnail.url}`}),t.jsxs(o,{sx:{position:"relative",width:"100%"},children:[t.jsx(j,{sx:{width:e>=900?"40px":"30px",height:e>=900?"40px":"30px",position:"absolute",top:0,right:0},children:t.jsx(b,{sx:{color:"#828282",transform:"rotate(320deg)",fontSize:e>=900?"40px":"34px",width:e>=900?"30px":"20px"}})}),t.jsx(i,{sx:{color:"#222222",fontSize:e>=900?"18px":"12px",lineHeight:"20px",position:"absolute",bottom:e>=900?5:0},children:s.attributes.title})]})]})},s.id))})})]}),t.jsx(n,{sx:{display:{md:"none",lg:"none",sm:"flex",xs:"flex"},flexDirection:"column",p:3},children:t.jsx(N,{})})]})};export{et as default};
