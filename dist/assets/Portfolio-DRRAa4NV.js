import{g as M,c as E,s as I,e as p,r as g,d as P,_ as T,j as e,f as A,h as R,u as w,S as c,a as _,L as z}from"./index-cy95ObCo.js";import{d as x,a as O}from"./api-ImPcT899.js";import{S as v,A as b,a as S,b as F,c as W,d as H,e as N}from"./ExpandMore-D81uqK5I.js";import{T as h,B as $,u as B}from"./createSvgIcon-C9qp5p7j.js";import{B as f}from"./Button-DDD_kAlR.js";import{D as L}from"./Divider-D0Ecm_Lw.js";import{C as q,a as Y}from"./CardActionArea-CU2bfK9m.js";import"./mergeSlotProps-CeJQNsJ3.js";import"./Paper-BA2oY67v.js";function D(o){return M("MuiCardMedia",o)}E("MuiCardMedia",["root","media","img"]);const U=["children","className","component","image","src","style"],V=o=>{const{classes:r,isMediaComponent:n,isImageComponent:a}=o;return R({root:["root",n&&"media",a&&"img"]},D,r)},G=I("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:n}=o,{isMediaComponent:a,isImageComponent:s}=n;return[r.root,a&&r.media,s&&r.img]}})(({ownerState:o})=>p({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),Q=["video","audio","picture","iframe","img"],J=["picture","img"],K=g.forwardRef(function(r,n){const a=P({props:r,name:"MuiCardMedia"}),{children:s,className:i,component:d="div",image:u,src:j,style:m}=a,y=T(a,U),t=Q.indexOf(d)!==-1,l=!t&&u?p({backgroundImage:`url("${u}")`},m):m,C=p({},a,{component:d,isMediaComponent:t,isImageComponent:J.indexOf(d)!==-1}),k=V(C);return e.jsx(G,p({className:A(k.root,i),as:d,role:!t&&u?"img":void 0,ref:n,style:l,ownerState:C,src:t?u||j:void 0},y,{children:s}))}),X=K,Z=[{title:"Your Online Coaching Platform.",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.",image:"/images/321467.jpg"},{title:"Your Online Coaching Platform. 2",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.",image:"/images/Rectangle 17.png"},{title:"Your Online Coaching Platform. 3",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.",image:"/images/321467.jpg"},{title:"Your Online Coaching Platform. 4",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.",image:"/images/Rectangle 17.png"},{title:"Your Online Coaching Platform. 5",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7.",image:"/images/321467.jpg"}],ee=()=>{const[o,r]=g.useState(null),n=w(),a=s=>{r(o===s?null:s)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{direction:"row",alignItems:"center",justifyContent:"center",sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(h,{sx:{textAlign:"center",color:"#222222",fontSize:"24px",fontWeight:700,width:"70%"},children:"Prominent works of my business coaching"})}),e.jsx(c,{p:5,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(v,{modules:[b],spaceBetween:10,slidesPerView:1,autoplay:{delay:3e3,pauseOnMouseEnter:!0},onSwiper:s=>console.log(s),onSlideChange:()=>console.log("slide change"),style:{width:"100%"},speed:5e3,loop:!0,children:Z.map((s,i)=>e.jsx(S,{children:e.jsxs($,{sx:{background:o===i?"#222222":"#828282",borderRadius:"8px",p:3,width:"80%",mr:5},children:[e.jsx("img",{src:s.image,style:{width:"100%",height:"260px",borderRadius:"8px"},alt:"321467.jpg"}),e.jsxs(F,{expanded:o===i,onChange:()=>a(i),sx:{background:o===i?"#222222":"#828282"},children:[e.jsx(W,{expandIcon:e.jsx(H,{sx:{color:o===i?"#FFF083":"#e9e9e9",fontSize:"40px"}}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsx(h,{sx:{color:o===i?"#FFF083":"#e9e9e9",fontSize:"24px",fontWeight:700},children:s.title})}),e.jsx(N,{children:e.jsx(h,{sx:{color:"#E9E9E9",fontSize:"20px",fontWeight:600,lineHeight:"30px"},children:s.description})})]})]})},`portfolio_items_mini_key${i}`))})}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:[e.jsx(f,{onClick:()=>n("/about"),startIcon:e.jsx(x,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx(L,{orientation:"vertical"}),e.jsx(f,{onClick:()=>n("/services"),endIcon:e.jsx(x,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]})},de=()=>{const[o,r]=g.useState(null),[n,a]=g.useState(window.innerHeight),s=w(),{i18n:i}=_();g.useEffect(()=>{const t=()=>{a(window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const{refetch:d,data:u,isLoading:j,isError:m}=B("portfolioItems",async()=>(await O.get(`/api/portfolios?populate=image&locale=${i.language}`)).data.data),y=t=>{r(t===o?null:t)};return g.useEffect(()=>{d()},[i.language]),j?e.jsx("div",{style:{width:"100%"},children:e.jsx(z,{})}):m?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsxs(c,{width:"80%",sx:{display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},children:[e.jsx(c,{pt:5,mb:-7,children:e.jsx(h,{sx:{color:"#222222",fontSize:"36px",fontWeight:700,textAlign:"center"},children:"Prominent works of my business coaching"})}),e.jsx(c,{width:"100%",height:"100%",justifyContent:"center",children:e.jsx(v,{modules:[b],spaceBetween:20,slidesPerView:3,autoplay:{delay:3e3,pauseOnMouseEnter:!0},onSwiper:t=>console.log(t),onSlideChange:()=>console.log("slide change"),style:{width:"100%"},speed:5e3,loop:!0,children:u.map((t,l)=>e.jsx(S,{children:e.jsx(q,{sx:{background:o===l?"#222222":"#828282",borderRadius:"8px",height:"100%"},onClick:()=>y(l),children:e.jsxs(Y,{children:[e.jsx(c,{p:3,children:e.jsx(X,{component:"img",height:n>=900?"350px":"160px",image:`http://95.85.121.153:1337${t.attributes.image.data.attributes.formats.thumbnail.url}`,alt:"green iguana"})}),e.jsxs(c,{p:3,children:[e.jsx(h,{sx:{color:o===l?"#FFF083":"#E9E9E9",fontSize:n>=900?"40px":"24px",lineHeight:n>=900?"50px":"33px",fontWeight:700,width:"90%"},children:t.attributes.title}),o===l&&e.jsx(h,{sx:{color:"#E9E9E9",fontSize:n>=900?"30px":"20px",lineHeight:n>=900?"40px":"26px",fontWeight:600},children:t.attributes.short_description})]})]})})},`portfolio_items_key${l}`))})}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"center",sx:{position:"absolute",bottom:"5%",width:"85%"},children:[e.jsx(f,{onClick:()=>s("/about"),startIcon:e.jsx(x,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx("div",{style:{height:"35px",width:"1.5px",background:"gray"}}),e.jsx(f,{onClick:()=>s("/services"),endIcon:e.jsx(x,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]}),e.jsx(ee,{})]})};export{de as default};
