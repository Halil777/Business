import{i as g,j as e,f as w,r as l,b as k,u as F,S as s,T as r,g as b,G as d,B as x,h as W}from"./index-B55tmI0r.js";import{L as I}from"./LanguageModal-DykdIxy5.js";import{r as u}from"./commonStyle-oU39ZcmE.js";import{r as h}from"./createSvgIcon-Ci3PVX8D.js";import{S as L}from"./Social-7VvOzkHs.js";import{d as y}from"./ArrowRightAlt-BtmBATXV.js";import{B as p,D as H}from"./Divider-_F2kAJc5.js";import"./IconButton-B_AArDoR.js";var m={},$=g;Object.defineProperty(m,"__esModule",{value:!0});var C=m.default=void 0,q=$(h()),S=e;C=m.default=(0,q.default)([(0,S.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},"0"),(0,S.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");var f={},T=g;Object.defineProperty(f,"__esModule",{value:!0});var _=f.default=void 0,B=T(h()),P=e;_=f.default=(0,B.default)((0,P.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutlineOutlined");var j={},G=g;Object.defineProperty(j,"__esModule",{value:!0});var D=j.default=void 0,V=G(h()),A=e;D=j.default=(0,V.default)((0,A.jsx)("path",{d:"M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1"}),"PhoneEnabledOutlined");function N(t){w.error(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}function J(t){w.success(t,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}const ne=()=>{const[t,O]=l.useState(window.innerHeight),{t:n}=k(),v=F();l.useEffect(()=>{const o=()=>{O(window.innerHeight)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const[i,E]=l.useState({username:"",email:"",text:""}),c=o=>{const{name:a,value:z}=o.target;E(M=>({...M,[a]:z}))},R=async o=>{o.preventDefault();try{const a=await W.post("http://95.85.121.153:6426/send-mail",{to_mail:"microsoft7779@gmail.com",...i});console.log("Message sent successfully:",a.data),J(n("contact.success")),E({username:"",email:"",text:""})}catch(a){console.error("Error sending message:",a),N(n("contact.error"))}};return e.jsxs(e.Fragment,{children:[e.jsxs(s,{pt:3,pr:5,width:{md:"100%",lg:"100%",sm:"100%",xs:"100%"},children:[e.jsx(s,{direction:"row",pt:t>=900?3:0,pb:t>=900?11:4,spacing:1,justifyContent:"center",children:e.jsxs(r,{sx:{color:"#222222",fontSize:{lg:b.language==="ru"?"33px":"36px",md:b.language==="ru"?"33px":"36px",sm:"30px",xs:"30px"},fontWeight:700,textAlign:"center"},"data-aos":"fade-right","data-aos-delay":"500",children:[n("contact.contact"),e.jsx("span",{"data-aos":"fade-left","data-aos-delay":"500",style:{color:"#828282",marginLeft:"10px"},children:n("contact.contactC")})]})}),e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,lg:6,md:6,sm:12,xs:12,mb:3,"data-aos":"fade-up","data-aos-delay":"500",children:e.jsx(s,{pl:{lg:5,md:5,sm:3,xs:3},pr:{lg:5,md:5,sm:3,xs:3},children:e.jsx("form",{onSubmit:R,children:e.jsxs(x,{sx:{background:"#828282",p:"35px 15px 35px 15px",borderRadius:u,display:"flex",justifyContent:"space-between",flexDirection:"column",height:t>=900?"55vh":"54.5vh"},children:[e.jsx("input",{type:"text",name:"username",value:i.username,onChange:c,placeholder:n("contact.name"),style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("input",{type:"email",name:"email",value:i.email,onChange:c,placeholder:n("contact.mail"),style:{background:"#DFDFDF",height:t>=900?"55px":"40px",borderRadius:"8px",paddingLeft:"15px",border:"none",outline:"none",fontWeight:600,color:"#222222"},required:!0}),e.jsx("textarea",{name:"text",value:i.text,onChange:c,style:{borderRadius:"8px",padding:"15px",backgroundColor:"#DFDFDF",outline:"none",fontWeight:600,color:"#222222"},id:"",cols:30,rows:t>=900?17:10,placeholder:n("contact.message"),required:!0}),e.jsx(p,{sx:{background:" #222222",color:"orange",fontSize:"20px",fontWeight:600,height:t>=900?"55px":"40px",borderRadius:u,textTransform:"none","&:hover":{background:" #222222"}},variant:"contained",type:"submit",children:n("contact.send")})]})})})}),e.jsx(d,{item:!0,lg:6,md:6,sm:12,xs:12,"data-aos":"fade-down","data-aos-delay":"500",children:e.jsxs(s,{spacing:2,pl:{lg:0,md:0,sm:3,xs:3},pr:{lg:0,md:0,sm:3,xs:3},sx:{height:t>=900?"62vh":"65vh"},children:[e.jsx(x,{sx:{background:"#828282",borderRadius:u,p:"15px 0px 15px 0px",alignItems:"center",display:"flex",justifyContent:"center",height:"60%"},children:e.jsxs(s,{spacing:t>=900?4:1,width:{lg:"60%",md:"60%",sm:"90%",xs:"90%"},children:[e.jsxs(s,{spacing:1,children:[e.jsxs(s,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(C,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.address")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:n("contact.addressC")})]}),e.jsxs(s,{spacing:1,children:[e.jsxs(s,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(_,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.mail")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"iskakerim@gmail.com"})]}),e.jsxs(s,{spacing:1,children:[e.jsxs(s,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(D,{sx:{color:"#E9E9E9"}}),e.jsx(r,{sx:{fontSize:t>=900?"18px":"16px",fontWeight:t>=900?700:600,color:"#E9E9E9"},children:n("contact.phone")})]}),e.jsx(r,{sx:{fontSize:"15px",fontWeight:500,color:"#E9E9E9"},children:"+993 62 531104"})]})]})}),e.jsx(x,{sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex",justifyContent:"center"}},children:e.jsx(L,{})}),e.jsx("img",{src:"./images/Rectangle 17.png",alt:"Rectangle 17.png",style:{width:"100%",height:"48%",borderRadius:"8px"}})]})})]})]}),e.jsxs(s,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%"},spacing:2,children:[e.jsx(p,{onClick:()=>v("/services"),startIcon:e.jsx(y,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Our Service"}),e.jsx(H,{orientation:"vertical",flexItem:!0}),e.jsx(p,{onClick:()=>v("/"),endIcon:e.jsx(y,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Home"})]}),e.jsx(I,{})]})};export{ne as default};
