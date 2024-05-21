import{b as w,r as d,j as e,L as y,S as s,T as a,B as h,u as k}from"./index-DA9wTcud.js";import{d as j}from"./ArrowRightAlt-DUB01t1t.js";import{S as b,A as S,a as E,d as C,b as F,N as M,c as H}from"./navigation-BwvSu-Ad.js";import{a as v}from"./api-Bn8vXeGr.js";import{u as T}from"./createSvgIcon-CfgGuNer.js";import{I as _}from"./IconButton-BwVOWUzI.js";import{B as m,D as z}from"./Divider-WayY1cE5.js";const $=()=>{const{i18n:o}=w(),[n,r]=d.useState(null),p=i=>{r(n===i?null:i)},{refetch:l,data:f,isLoading:u,isError:g}=T("portfolioItems",async()=>(await v.get(`/api/portfolios?populate=image&locale=${o.language}`)).data.data);return d.useEffect(()=>{l()},[o.language]),u?e.jsx("div",{style:{width:"100%"},children:e.jsx(y,{})}):g?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsx(s,{direction:"row",alignItems:"center",justifyContent:"center",sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(a,{sx:{textAlign:"center",color:"#fff",fontSize:"24px",fontWeight:700,width:"70%",fontFamily:"Trebuchet MS, sans-serif"},children:"Prominent works of my business coaching"})}),e.jsx(s,{p:5,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx(b,{modules:[S],spaceBetween:10,slidesPerView:1,autoplay:{delay:2e3,pauseOnMouseEnter:!0},style:{width:"100%"},speed:1e3,loop:!0,children:f.map((i,c)=>e.jsx(E,{children:e.jsxs(h,{sx:{background:"rgba(10, 10, 14, 0.7)",borderRadius:"8px",width:"100%",mr:5,minHeight:"400px"},children:[e.jsx("img",{src:`http://95.85.121.153:1337${i.attributes.image.data.attributes.formats.thumbnail.url}`,style:{width:"100%",height:"260px",borderRadius:"8px"},alt:"321467.jpg"}),e.jsx(s,{onClick:()=>p(c),direction:"row",justifyContent:"space-between",alignItems:"center",p:3,children:e.jsxs(s,{children:[e.jsxs(s,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(a,{sx:{color:n===c?"orange":"#e9e9e9",fontSize:"20px",fontWeight:700,fontFamily:"Trebuchet MS, sans-serif"},children:[i.attributes.title.slice(0,40),"..."]}),e.jsx(_,{children:n===c?e.jsx(C,{sx:{color:n?"orange":"#E9E9E9"}}):e.jsx(F,{sx:{color:n?"orange":"#E9E9E9"}})})]}),n&&e.jsx(e.Fragment,{children:e.jsx(a,{sx:{color:"#E9E9E9",fontSize:"20px",fontWeight:600,lineHeight:"30px"},children:i.attributes.short_description})})]})})]})},`portfolio_items_mini_key${c}`))})})]})},R=()=>{const[o,n]=d.useState(null),[r,p]=d.useState(window.innerHeight),l=k(),{i18n:f}=w();d.useEffect(()=>{const t=()=>{p(window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const{refetch:u,data:g,isLoading:i,isError:c}=T("portfolioItems",async()=>(await v.get(`/api/portfolios?populate=image&locale=${f.language}`)).data.data),I=t=>{n(o===t?null:t)};return d.useEffect(()=>{u()},[f.language]),i?e.jsx("div",{style:{width:"100%"},children:e.jsx(y,{})}):c?e.jsx("div",{children:"Error fetching data"}):e.jsxs(e.Fragment,{children:[e.jsxs(s,{width:"100%",sx:{display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},height:"100vh",children:[e.jsx(s,{pt:5,mb:-7,children:e.jsx(h,{sx:{position:"relative",width:"100%",display:"flex",justifyContent:"center"},children:e.jsx(a,{sx:{color:"#fff",fontSize:"36px",fontWeight:700,textAlign:"center",fontFamily:"Trebuchet MS, sans-serif",position:"absolute"},children:"Prominent works of my business coaching"})})}),e.jsx(h,{sx:{position:"relative",height:"100vh"},children:e.jsx(s,{width:"100%",height:"100%",sx:{position:"absolute",alignItems:"center",display:"flex"},justifyContent:"center",children:e.jsxs(b,{modules:[S,M],spaceBetween:10,slidesPerView:3,navigation:!0,autoplay:{delay:750,pauseOnMouseEnter:!0},style:{width:"92%",paddingLeft:"5%"},speed:750,loop:!0,children:[g.map((t,x)=>e.jsx(E,{children:e.jsx(s,{direction:"row",alignItems:"center",children:e.jsxs(h,{sx:{background:"rgba(10, 10, 14, 0.7)",minHeight:r>=900?"600px":"400px",width:"85%"},onClick:()=>I(x),children:[e.jsx("img",{style:{width:"100%",height:"250px"},src:`http://95.85.121.153:1337${t.attributes.image.data.attributes.formats.thumbnail.url}`}),e.jsxs(s,{p:3,children:[e.jsxs(a,{sx:{color:o===x?"orange":"#E9E9E9",fontSize:r>=900?"40px":"24px",lineHeight:r>=900?"50px":"33px",fontWeight:700,width:"90%",fontFamily:"Trebuchet MS, sans-serif"},children:[o?t.attributes.title:t.attributes.title.slice(0,45),"..."]}),o===x&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{sx:{color:"#E9E9E9",fontSize:r>=900?"30px":"20px",lineHeight:r>=900?"40px":"26px",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:[t.attributes.short_description.slice(0,50),"..."]}),e.jsx(s,{mt:2,direction:"row",justifyContent:"flex-end",children:e.jsx(m,{sx:{color:"#fff",textTransform:"none",fontFamily:"Trebuchet MS, sans-serif"},className:"moreButton",endIcon:e.jsx(H,{className:"leftArrow"}),onClick:()=>l(`/portfolio/${t.id}`,{state:{item:t}}),children:"Read More"})})]})]})]})})},`portfolio_items_key${x}`)),e.jsx("div",{className:"prev"}),e.jsx("div",{className:"next"})]})})})]}),e.jsxs(s,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%"},spacing:2,children:[e.jsx(m,{onClick:()=>l("/about"),startIcon:e.jsx(j,{sx:{color:"#fff",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#fff",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"About Us"}),e.jsx(z,{sx:{width:"100px"},children:e.jsx(a,{onClick:()=>l("/"),sx:{textTransform:"none",color:"#fff",fontWeight:600,cursor:"pointer",fontFamily:"Trebuchet MS, sans-serif"},children:"Home"})}),e.jsx(m,{onClick:()=>l("/services"),endIcon:e.jsx(j,{sx:{color:"#fff"}}),sx:{textTransform:"none",color:"#fff",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Our Service"})]}),e.jsx($,{})]})};export{R as default};