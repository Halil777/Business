import{r,j as e}from"./index-2A5l3SeN.js";import{d}from"./ArrowRightAlt-DTQaqCCw.js";import{S as a,B as c,T as h}from"./createSvgIcon-CXjczIyO.js";import{G as u}from"./Grid-vJ5Nb8Oe.js";import{B as g}from"./Button-D9InEiJf.js";import{D as f}from"./Divider-CoxxNUjr.js";const C=()=>{const[n,x]=r.useState(window.innerHeight),[o,l]=r.useState(0),i=[{image:"./images/321467.jpg",title:"Your Online Coaching Platform.",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7."},{image:"./images/321467.jpg",title:"Your Online Coaching Platform.2",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7."},{image:"./images/321467.jpg",title:"Your Online Coaching Platform.3",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7."},{image:"./images/321467.jpg",title:"Your Online Coaching Platform.4",description:"The reason a coaching business is such a great business model if you're in your 9-5 is that it doesn't require huge investments and you don't have to work 24/7."}],m=()=>{l(t=>t===0?i.length-1:t-1)},p=()=>{l(t=>t===i.length-1?0:t+1)};return r.useEffect(()=>{const t=()=>{x(window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsx(e.Fragment,{children:e.jsxs(a,{width:"100%",height:"auto",children:[e.jsx(c,{sx:{display:"flex",justifyContent:"center",width:"100%",mt:n>=900?7:2},children:e.jsx(h,{sx:{textTransform:"uppercase",fontSize:n>=900?"36px":"30px",fontWeight:700},children:"Prominent works of my business coaching"})}),e.jsx(c,{sx:{mt:n>=900?5:2,height:n>=900?"72vh":"85vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:e.jsx(u,{container:!0,spacing:2,children:i.map((t,s)=>e.jsx(u,{item:!0,lg:4,md:4,sm:6,xs:12,children:e.jsx(c,{sx:{background:"#222222",borderRadius:"8px",p:3,width:"290px",display:s===o||s===(o+1)%i.length||s===(o+2)%i.length?"block":"none"},children:e.jsxs(a,{spacing:3,children:[e.jsx("img",{src:t.image,style:{width:"284px",height:"260px",borderRadius:"8px"},alt:""}),e.jsx(h,{sx:{color:"#FFF083",fontSize:"24px",fontWeight:700,lineHeight:"30px"},children:t.title}),e.jsx(h,{sx:{color:"#E9E9E9",fontSize:"20px",fontWeight:600,lineHeight:"30px",width:"75%"},children:t.description})]})})},s))})}),e.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[e.jsx(g,{startIcon:e.jsx(d,{onClick:m,sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx(f,{orientation:"vertical"}),e.jsx(g,{onClick:p,endIcon:e.jsx(d,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Next"})]})]})})};export{C as default};
