import{i as f,j as e,B as C,r as d,a as L,b as I,S as o,G as u,m as _}from"./index-D0uEmkpH.js";import{L as q}from"./LanguageModal-DEsrFEz0.js";import{r as w,S as H}from"./commonStyle-XsAVKk76.js";import{r as m,T as i}from"./createSvgIcon-CXQseLuC.js";import{d as S}from"./ArrowRightAlt-DgOCsCXq.js";import{B as g}from"./Box-DUgPR9Eh.js";import{B as h,D as $}from"./Divider-CxgTYw0z.js";import"./IconButton-D4iR7uww.js";var j={},B=f;Object.defineProperty(j,"__esModule",{value:!0});var R=j.default=void 0,P=B(m()),D=e;R=j.default=(0,P.default)([(0,D.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},"0"),(0,D.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");var v={},G=f;Object.defineProperty(v,"__esModule",{value:!0});var F=v.default=void 0,V=G(m()),A=e;F=v.default=(0,V.default)((0,A.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutlineOutlined");var b={},N=f;Object.defineProperty(b,"__esModule",{value:!0});var O=b.default=void 0,J=N(m()),K=e;O=b.default=(0,J.default)((0,K.jsx)("path",{d:"M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1"}),"PhoneEnabledOutlined");function Q(t){C.error(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}function U(t){C.success(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}const se=()=>{const[t,k]=d.useState(window.innerHeight),[z,M]=d.useState([]),{t:r,i18n:x}=L(),E=I();d.useEffect(()=>{const n=()=>{k(window.innerHeight)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),d.useEffect(()=>{(async()=>{try{const p=(await _.get("http://95.85.121.153:6856/data/")).data.filter(a=>a.type==="contact_theme").map(a=>({id:a.id,title_tm:a.title_tm,title_ru:a.title_ru,title_en:a.title_en}));M(p)}catch(s){console.error("Error fetching themes:",s)}})()},[x.language]);const[c,y]=d.useState({username:"",email:"",text:"",phone:"",theme:""}),l=n=>{const{name:s,value:p}=n.target;y(a=>({...a,[s]:p}))},W=async n=>{n.preventDefault();try{const s=await _.post("http://95.85.121.153:6426/send-mail",{to_mail:"microsoft7779@gmail.com",...c});console.log("Message sent successfully:",s.data),U(r("contact.success")),y({username:"",email:"",text:"",phone:"",theme:""})}catch(s){console.error("Error sending message:",s),Q(r("contact.error"))}},T=n=>{switch(x.language){case"tm":return n.title_tm||n.title_en;case"ru":return n.title_ru||n.title_en;case"en":default:return n.title_en||n.title_tm}};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{pt:3,pr:5,width:{md:"100%",lg:"100%",sm:"100%",xs:"100%"},children:[e.jsx(o,{direction:"row",pt:t>=900?3:0,pb:t>=900?11:4,spacing:1,justifyContent:"center",children:e.jsxs(i,{sx:{color:"#fff",fontSize:{lg:x.language==="ru"?"33px":"36px",md:x.language==="ru"?"33px":"36px",sm:"30px",xs:"30px"},fontWeight:700,textAlign:"center"},"data-aos":"fade-right","data-aos-delay":"500",children:[r("contact.contact"),e.jsx("span",{"data-aos":"fade-left","data-aos-delay":"500",style:{color:"#fff",marginLeft:"10px"},children:r("contact.contactC")})]})}),e.jsxs(u,{container:!0,children:[e.jsx(u,{item:!0,lg:6,md:6,sm:12,xs:12,mb:3,"data-aos":"fade-up","data-aos-delay":"500",children:e.jsx(o,{pl:{lg:5,md:5,sm:3,xs:3},pr:{lg:5,md:5,sm:3,xs:3},children:e.jsx("form",{onSubmit:W,children:e.jsxs(g,{sx:{background:"rgba(10, 10, 14, 0.7)",boxShadow:"-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",p:"35px 15px 35px 15px",borderRadius:w,display:"flex",justifyContent:"space-between",flexDirection:"column",height:t>=900?"55vh":"54.5vh"},children:[e.jsx("input",{type:"text",name:"username",value:c.username,onChange:l,placeholder:r("contact.name"),style:{background:"#DFDFDF",height:t>=900?"55px":t>=550?"40px":"30px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("input",{type:"email",name:"email",value:c.email,onChange:l,placeholder:r("contact.mail"),style:{background:"#DFDFDF",height:t>=900?"55px":t>=550?"40px":"30px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("input",{type:"text",name:"phone",value:c.phone,onChange:l,placeholder:r("contact.number"),style:{background:"#DFDFDF",height:t>=900?"55px":t>=550?"40px":"30px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsxs("select",{name:"theme",value:c.theme,onChange:l,style:{background:"#DFDFDF",height:t>=900?"55px":t>=550?"40px":"30px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Tema"}),z.map(n=>e.jsx("option",{value:n.id,children:T(n)},n.id)),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx("textarea",{name:"text",value:c.text,onChange:l,style:{borderRadius:"8px",padding:"15px",backgroundColor:"#DFDFDF",outline:"none",fontWeight:600,color:"#222222"},cols:30,rows:t>=900?10:4,placeholder:r("contact.message"),required:!0}),e.jsx(h,{type:"submit",sx:{background:"#222222",color:"#fff",fontWeight:600,borderRadius:"8px",padding:"10px 15px",cursor:"pointer","&:hover":{background:"#222222"}},children:r("contact.send")})]})})})}),e.jsx(u,{item:!0,lg:6,md:6,sm:12,xs:12,"data-aos":"fade-down","data-aos-delay":"500",children:e.jsxs(o,{spacing:2,pl:{lg:0,md:0,sm:3,xs:3},pr:{lg:0,md:0,sm:3,xs:3},sx:{height:t>=900?"62vh":"65vh"},children:[e.jsx(g,{sx:{background:"rgba(10, 10, 14, 0.7)",boxShadow:"-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",borderRadius:w,p:"15px 0px 15px 0px",alignItems:"center",display:"flex",justifyContent:"center",height:"60%"},children:e.jsxs(o,{spacing:t>=900?4:1,width:{lg:"60%",md:"60%",sm:"90%",xs:"90%"},children:[e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(R,{sx:{color:"#E9E9E9"}}),e.jsx(i,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:r("contact.address")})]}),e.jsx(i,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:r("contact.addressC")})]}),e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(F,{sx:{color:"#E9E9E9"}}),e.jsx(i,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:r("contact.mail")})]}),e.jsx(i,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"iskakerim@gmail.com"})]}),e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(O,{sx:{color:"#E9E9E9"}}),e.jsx(i,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:r("contact.phone")})]}),e.jsx(i,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"+993 62 531104"})]})]})}),e.jsx(g,{sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex",justifyContent:"center"}},children:e.jsx(H,{})}),e.jsx("img",{src:"./images/Rectangle 17.png",alt:"Rectangle 17.png",style:{width:"100%",height:"48%",borderRadius:"8px"}})]})})]})]}),e.jsxs(o,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%",display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},spacing:2,children:[e.jsx(h,{onClick:()=>E("/services"),startIcon:e.jsx(S,{sx:{color:"orange",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:r("sidebar.services")}),e.jsx($,{orientation:"vertical",flexItem:!0}),e.jsx(h,{onClick:()=>E("/"),endIcon:e.jsx(S,{sx:{color:"orange"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:r("sidebar.home")})]}),e.jsx(q,{})]})};export{se as default};
