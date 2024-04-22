import{g as _,c as P,s as z,e as f,r as h,d as R,_ as T,j as e,f as W,h as A,u as C,a as b,L as E,S as r}from"./index-BPqjEZIt.js";import{d as j,a as v}from"./api-DQdQ0m-d.js";import{S,A as I,a as M,d as $,b as H}from"./ExpandLess-wKDLYlmN.js";import{u as k,T as m,B as N}from"./createSvgIcon-CoE10ONv.js";import{I as O}from"./IconButton-CMZRCUch.js";import{B as w}from"./Button-BjO0gqz4.js";import{D as B}from"./Divider-DZEFM__-.js";import{C as L,a as D}from"./CardActionArea-LbwlxN5n.js";function U(s){return _("MuiCardMedia",s)}P("MuiCardMedia",["root","media","img"]);const V=["children","className","component","image","src","style"],G=s=>{const{classes:n,isMediaComponent:t,isImageComponent:a}=s;return A({root:["root",t&&"media",a&&"img"]},U,n)},Q=z("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(s,n)=>{const{ownerState:t}=s,{isMediaComponent:a,isImageComponent:c}=t;return[n.root,a&&n.media,c&&n.img]}})(({ownerState:s})=>f({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},s.isMediaComponent&&{width:"100%"},s.isImageComponent&&{objectFit:"cover"})),q=["video","audio","picture","iframe","img"],J=["picture","img"],K=h.forwardRef(function(n,t){const a=R({props:n,name:"MuiCardMedia"}),{children:c,className:u,component:d="div",image:x,src:g,style:i}=a,l=T(a,V),o=q.indexOf(d)!==-1,p=!o&&x?f({backgroundImage:`url("${x}")`},i):i,y=f({},a,{component:d,isMediaComponent:o,isImageComponent:J.indexOf(d)!==-1}),F=G(y);return e.jsx(Q,f({className:W(F.root,u),as:d,role:!o&&x?"img":void 0,ref:t,style:p,ownerState:y,src:o?x||g:void 0},l,{children:c}))}),X=K,Y=()=>{const s=C(),{i18n:n}=b(),[t,a]=h.useState(null),c=i=>{a(t===i?null:i)},{refetch:u,data:d,isLoading:x,isError:g}=k("portfolioItems",async()=>(await v.get(`/api/portfolios?populate=image&locale=${n.language}`)).data.data);return h.useEffect(()=>{u()},[n.language]),x?e.jsx("div",{style:{width:"100%"},children:e.jsx(E,{})}):g?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsx(r,{direction:"row",alignItems:"center",justifyContent:"center",sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(m,{sx:{textAlign:"center",color:"#222222",fontSize:"24px",fontWeight:700,width:"70%"},children:"Prominent works of my business coaching"})}),e.jsx(r,{p:5,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(S,{modules:[I],spaceBetween:10,slidesPerView:1,autoplay:{delay:3e3,pauseOnMouseEnter:!0},style:{width:"100%"},speed:5e3,loop:!0,children:d.map((i,l)=>e.jsx(M,{children:e.jsxs(N,{sx:{background:t===l?"#222222":"#828282",borderRadius:"8px",p:3,width:"80%",mr:5},children:[e.jsx("img",{src:`http://95.85.121.153:1337${i.attributes.image.data.attributes.formats.thumbnail.url}`,style:{width:"100%",height:"260px",borderRadius:"8px"},alt:"321467.jpg"}),e.jsx(r,{onClick:()=>c(l),direction:"row",justifyContent:"space-between",alignItems:"center",children:e.jsxs(r,{children:[e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(m,{sx:{color:t===l?"#FFF083":"#e9e9e9",fontSize:"20px",fontWeight:700},children:i.attributes.title}),e.jsx(O,{children:t===l?e.jsx($,{sx:{color:t?"#FFF083":"#E9E9E9"}}):e.jsx(H,{sx:{color:t?"#FFF083":"#E9E9E9"}})})]}),t&&e.jsx(e.Fragment,{children:e.jsx(m,{sx:{color:"#E9E9E9",fontSize:"20px",fontWeight:600,lineHeight:"30px"},children:i.attributes.short_description})})]})})]})},`portfolio_items_mini_key${l}`))})}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:[e.jsx(w,{onClick:()=>s("/about"),startIcon:e.jsx(j,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx(B,{orientation:"vertical"}),e.jsx(w,{onClick:()=>s("/services"),endIcon:e.jsx(j,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]})},ae=()=>{const[s,n]=h.useState(null),[t,a]=h.useState(window.innerHeight),c=C(),{i18n:u}=b();h.useEffect(()=>{const o=()=>{a(window.innerHeight)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const{refetch:d,data:x,isLoading:g,isError:i}=k("portfolioItems",async()=>(await v.get(`/api/portfolios?populate=image&locale=${u.language}`)).data.data),l=o=>{n(o===s?null:o)};return h.useEffect(()=>{d()},[u.language]),g?e.jsx("div",{style:{width:"100%"},children:e.jsx(E,{})}):i?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsxs(r,{width:"80%",sx:{display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},children:[e.jsx(r,{pt:5,mb:-7,children:e.jsx(m,{sx:{color:"#222222",fontSize:"36px",fontWeight:700,textAlign:"center"},children:"Prominent works of my business coaching"})}),e.jsx(r,{width:"100%",height:"100%",justifyContent:"center",children:e.jsx(S,{modules:[I],spaceBetween:20,slidesPerView:3,autoplay:{delay:3e3,pauseOnMouseEnter:!0},style:{width:"100%"},speed:5e3,loop:!0,children:x.map((o,p)=>e.jsx(M,{children:e.jsx(L,{sx:{background:s===p?"#222222":"#828282",borderRadius:"8px",height:"100%"},onClick:()=>l(p),children:e.jsxs(D,{children:[e.jsx(r,{p:3,children:e.jsx(X,{component:"img",height:t>=900?"350px":"160px",image:`http://95.85.121.153:1337${o.attributes.image.data.attributes.formats.thumbnail.url}`,alt:"green iguana"})}),e.jsxs(r,{p:3,children:[e.jsx(m,{sx:{color:s===p?"#FFF083":"#E9E9E9",fontSize:t>=900?"40px":"24px",lineHeight:t>=900?"50px":"33px",fontWeight:700,width:"90%"},children:o.attributes.title}),s===p&&e.jsx(m,{sx:{color:"#E9E9E9",fontSize:t>=900?"30px":"20px",lineHeight:t>=900?"40px":"26px",fontWeight:600},children:o.attributes.short_description})]})]})})},`portfolio_items_key${p}`))})}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"center",sx:{position:"absolute",bottom:"5%",width:"85%"},children:[e.jsx(w,{onClick:()=>c("/about"),startIcon:e.jsx(j,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx("div",{style:{height:"35px",width:"1.5px",background:"gray"}}),e.jsx(w,{onClick:()=>c("/services"),endIcon:e.jsx(j,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]}),e.jsx(Y,{})]})};export{ae as default};
