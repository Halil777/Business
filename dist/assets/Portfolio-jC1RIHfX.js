import{r,b as T,a as E,j as e,L as k,S as i}from"./index-BNGY74Dl.js";import{d as g}from"./ArrowRightAlt-jJ_dN9rp.js";import{S as C,A as I,N as F,a as M,d as H}from"./navigation-I5VPAkwn.js";import{u as _}from"./index-h_V7bk_z.js";import{B as f}from"./Box-Dbqo0YoD.js";import{T as c}from"./createSvgIcon-DjxDfmxm.js";import{B as p,D as z}from"./Divider-nyDolK3g.js";const $=()=>{const[d,u]=r.useState(2),[o,m]=r.useState(window.innerHeight),[j,w]=r.useState([]),a=T(),{t:n,i18n:h}=E(),x=r.useRef(null);r.useEffect(()=>{const t=()=>{m(window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const y=t=>fetch(t).then(s=>s.json()),{data:l,error:S}=_("http://95.85.121.153:6856/data",y);r.useEffect(()=>{l&&w(l)},[l,h.language]);const v=t=>{x.current.autoplay.stop(),u(t),setTimeout(()=>{x.current.autoplay.start(),u(-1)},1e4)};return l?S?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{width:"100%",height:"100vh",children:[e.jsx(i,{pt:5,mb:-7,children:e.jsx(f,{sx:{position:"relative",width:"100%",display:"flex",justifyContent:"center"},children:e.jsx(c,{sx:{color:"orange",fontSize:"36px",fontWeight:700,textAlign:"center",fontFamily:"Trebuchet MS, sans-serif",position:"absolute"},children:n("portfolio.title")})})}),e.jsx(f,{sx:{position:"relative",height:"100vh"},children:e.jsx(i,{width:"100%",height:"100%",sx:{position:"absolute",alignItems:"center",display:"flex"},justifyContent:"center",children:e.jsxs(C,{modules:[I,F],spaceBetween:10,slidesPerView:3,centeredSlides:!0,breakpoints:{320:{slidesPerView:1},600:{slidesPerView:2},900:{slidesPerView:3}},slideToClickedSlide:!0,navigation:!0,autoplay:{delay:5e3,pauseOnMouseEnter:!0},cssMode:!0,style:{width:"92%",paddingLeft:"5%"},speed:1e3,loop:!0,onSwiper:t=>x.current=t,children:[j.filter(t=>t.type=="portfolia_item").map((t,s)=>e.jsx(M,{children:e.jsx(i,{direction:"row",alignItems:"center",children:e.jsxs(f,{sx:{background:"rgba(10, 10, 14, 0.7)",minHeight:o>=900?"600px":"300px",width:"85%",cursor:"pointer"},onClick:()=>v(s),children:[e.jsx("img",{style:{width:"100%",height:"180px"},src:t.asset.url}),e.jsxs(i,{p:3,children:[e.jsxs(c,{sx:{color:d===s?"orange":"#E9E9E9",fontSize:o>=900?"30px":"24px",lineHeight:o>=900?"50px":"33px",fontWeight:700,width:"90%",fontFamily:"Trebuchet MS, sans-serif"},children:[t[`title_${h.language}`]," ",d,s]}),d===s&&e.jsxs(e.Fragment,{children:[e.jsxs(c,{sx:{color:"#E9E9E9",fontSize:o>=900?"30px":"20px",lineHeight:o>=900?"40px":"26px",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:[t[`short_${h.language}`].slice(0,50),"..."]}),e.jsx(i,{mt:2,direction:"row",justifyContent:"flex-end",children:e.jsx(p,{sx:{color:"#fff",textTransform:"none",fontFamily:"Trebuchet MS, sans-serif"},className:"moreButton",endIcon:e.jsx(H,{className:"leftArrow"}),onClick:b=>{b.stopPropagation(),a(`/portfolio/${t.id}`,{state:{item:t}})},children:n("common.read_more")})})]})]})]})})},`portfolio_items_key${s}`)),e.jsx("div",{className:"prev"}),e.jsx("div",{className:"next"})]})})})]}),e.jsxs(i,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%"},spacing:2,children:[e.jsx(p,{onClick:()=>a("/about"),startIcon:e.jsx(g,{sx:{color:"orange",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:n("sidebar.about")}),e.jsx(z,{sx:{width:"100px"},children:e.jsx(c,{onClick:()=>a("/"),sx:{textTransform:"none",color:"orange",fontWeight:600,cursor:"pointer",fontFamily:"Trebuchet MS, sans-serif"},children:n("sidebar.home")})}),e.jsx(p,{onClick:()=>a("/services"),endIcon:e.jsx(g,{sx:{color:"orange"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:n("sidebar.services")})]})]}):e.jsx("div",{style:{width:"100%"},children:e.jsx(k,{})})};export{$ as default};
