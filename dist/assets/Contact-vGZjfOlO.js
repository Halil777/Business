import{i as g,j as e,B as w,r as l,a as z,b as M,S as o,o as E,G as d,m as W}from"./index-CWWNi9gf.js";import{L}from"./LanguageModal-CxfYF5sd.js";import{r as x,S as I}from"./commonStyle-CVgh_mnA.js";import{r as h,T as r,B as p}from"./createSvgIcon-CB60awr8.js";import{d as y}from"./ArrowRightAlt-FKpmeAAn.js";import{B as u,D as q}from"./Divider-BQ2VLkkz.js";import"./IconButton-BzGFhQC5.js";var m={},H=g;Object.defineProperty(m,"__esModule",{value:!0});var D=m.default=void 0,$=H(h()),S=e;D=m.default=(0,$.default)([(0,S.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},"0"),(0,S.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");var f={},T=g;Object.defineProperty(f,"__esModule",{value:!0});var C=f.default=void 0,B=T(h()),P=e;C=f.default=(0,B.default)((0,P.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutlineOutlined");var j={},G=g;Object.defineProperty(j,"__esModule",{value:!0});var O=j.default=void 0,V=G(h()),A=e;O=j.default=(0,V.default)((0,A.jsx)("path",{d:"M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1"}),"PhoneEnabledOutlined");function N(t){w.error(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}function J(t){w.success(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}const te=()=>{const[t,R]=l.useState(window.innerHeight),{t:n}=z(),v=M();l.useEffect(()=>{const a=()=>{R(window.innerHeight)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const[s,b]=l.useState({username:"",email:"",text:""}),c=a=>{const{name:i,value:F}=a.target;b(k=>({...k,[i]:F}))},_=async a=>{a.preventDefault();try{const i=await W.post("http://95.85.121.153:6426/send-mail",{to_mail:"microsoft7779@gmail.com",...s});console.log("Message sent successfully:",i.data),J(n("contact.success")),b({username:"",email:"",text:""})}catch(i){console.error("Error sending message:",i),N(n("contact.error"))}};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{pt:3,pr:5,width:{md:"100%",lg:"100%",sm:"100%",xs:"100%"},children:[e.jsx(o,{direction:"row",pt:t>=900?3:0,pb:t>=900?11:4,spacing:1,justifyContent:"center",children:e.jsxs(r,{sx:{color:"#fff",fontSize:{lg:E.language==="ru"?"33px":"36px",md:E.language==="ru"?"33px":"36px",sm:"30px",xs:"30px"},fontWeight:700,textAlign:"center"},"data-aos":"fade-right","data-aos-delay":"500",children:[n("contact.contact"),e.jsx("span",{"data-aos":"fade-left","data-aos-delay":"500",style:{color:"#fff",marginLeft:"10px"},children:n("contact.contactC")})]})}),e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,lg:6,md:6,sm:12,xs:12,mb:3,"data-aos":"fade-up","data-aos-delay":"500",children:e.jsx(o,{pl:{lg:5,md:5,sm:3,xs:3},pr:{lg:5,md:5,sm:3,xs:3},children:e.jsx("form",{onSubmit:_,children:e.jsxs(p,{sx:{background:"rgba(10, 10, 14, 0.7)",boxShadow:"-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",p:"35px 15px 35px 15px",borderRadius:x,display:"flex",justifyContent:"space-between",flexDirection:"column",height:t>=900?"55vh":"54.5vh"},children:[e.jsx("input",{type:"text",name:"username",value:s.username,onChange:c,placeholder:n("contact.name"),style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:c,placeholder:n("contact.mail"),style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("input",{type:"text",name:"phone",value:s.email,onChange:c,placeholder:n("contact.number"),style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsxs("select",{name:"phone",style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:n("contact.number")}),e.jsx("option",{value:"option1",children:"Option 1"}),e.jsx("option",{value:"option2",children:"Option 2"}),e.jsx("option",{value:"option3",children:"Option 3"}),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx("textarea",{name:"text",value:s.text,onChange:c,style:{borderRadius:"8px",padding:"15px",backgroundColor:"#DFDFDF",outline:"none",fontWeight:600,color:"#222222"},id:"",cols:30,rows:t>=900?10:4,placeholder:n("contact.message"),required:!0}),e.jsx(u,{sx:{background:" #222222",color:"orange",fontSize:"20px",fontWeight:600,height:t>=900?"55px":"40px",borderRadius:x,textTransform:"none","&:hover":{background:" #222222"}},variant:"contained",type:"submit",children:n("contact.send")})]})})})}),e.jsx(d,{item:!0,lg:6,md:6,sm:12,xs:12,"data-aos":"fade-down","data-aos-delay":"500",children:e.jsxs(o,{spacing:2,pl:{lg:0,md:0,sm:3,xs:3},pr:{lg:0,md:0,sm:3,xs:3},sx:{height:t>=900?"62vh":"65vh"},children:[e.jsx(p,{sx:{background:"rgba(10, 10, 14, 0.7)",boxShadow:"-1px -1px 20px 10px rgba(197, 196, 196, 0.2), 6px 6px 12px 2px rgba(0, 0, 0, 0.7)",borderRadius:x,p:"15px 0px 15px 0px",alignItems:"center",display:"flex",justifyContent:"center",height:"60%"},children:e.jsxs(o,{spacing:t>=900?4:1,width:{lg:"60%",md:"60%",sm:"90%",xs:"90%"},children:[e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(D,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.address")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:n("contact.addressC")})]}),e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(C,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.mail")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"iskakerim@gmail.com"})]}),e.jsxs(o,{spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(O,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.phone")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"+993 62 531104"})]})]})}),e.jsx(p,{sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex",justifyContent:"center"}},children:e.jsx(I,{})}),e.jsx("img",{src:"./images/Rectangle 17.png",alt:"Rectangle 17.png",style:{width:"100%",height:"48%",borderRadius:"8px"}})]})})]})]}),e.jsxs(o,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%",display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},spacing:2,children:[e.jsx(u,{onClick:()=>v("/services"),startIcon:e.jsx(y,{sx:{color:"orange",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Our Service"}),e.jsx(q,{orientation:"vertical",flexItem:!0}),e.jsx(u,{onClick:()=>v("/"),endIcon:e.jsx(y,{sx:{color:"orange"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Home"})]}),e.jsx(L,{})]})};export{te as default};
