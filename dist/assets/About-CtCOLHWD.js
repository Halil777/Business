import{a as j,r as u,j as e,n as b,S as d,R as S,b as F,G as g}from"./index-aeuvGg6v.js";import{d as p}from"./ArrowRightAlt-Dp7cVa7s.js";import{u as y}from"./index-qFwAXvcD.js";import{T as o}from"./createSvgIcon-NyeLpFIl.js";import{B as f}from"./Box-N_hFu2NE.js";import{B as m,D as T}from"./Divider-P4JZVmZT.js";const I=t=>fetch(t).then(r=>r.json()),M=()=>{const{i18n:t}=j(),{data:r,error:x,isLoading:c,mutate:h}=y("http://95.85.121.153:6856/data",I);if(u.useEffect(()=>{h()},[t.language,h]),c)return e.jsx("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{})});if(x)return e.jsxs("div",{children:["An error occurred: ",x.message]});const i=(s,a)=>{const n=t.language==="tm"?"_tm":t.language==="ru"?"_ru":"_en",l=`${a}${n}`;return s[l]};return e.jsx(e.Fragment,{children:e.jsxs(d,{sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"},height:"100%",overflow:"auto"},children:[e.jsx(o,{sx:{textAlign:"center",color:"#fff",fontSize:"24px",fontWeight:700,fontFamily:"Trebuchet MS, sans-serif",textTransform:"uppercase"},children:"who we are"}),r==null?void 0:r.map(s=>{var a,n;return e.jsxs(S.Fragment,{children:[s.type==="about_title"&&e.jsx(d,{direction:"row",width:"100%",justifyContent:"flex-end",children:e.jsxs(f,{sx:{background:"rgba(10, 10, 14, 0.7)",p:1,width:"92%",borderRadius:"8px 0px 0px 8px",color:"#E7EAFF"},children:[((a=s.asset)==null?void 0:a.url)&&e.jsx("img",{className:"aboutImage",style:{width:"140px",height:"160px",borderRadius:"8px",marginRight:10},src:s.asset.url,alt:"Image"}),e.jsx(o,{sx:{color:"#fff",fontSize:"20px",fontWeight:700,lineHeight:"30px",width:"80%",fontFamily:"Trebuchet MS, sans-serif"},children:i(s,"title")}),e.jsx(o,{sx:{color:"#fff",fontSize:"16px",fontWeight:600,lineHeight:"25px",fontFamily:"Trebuchet MS, sans-serif"},children:i(s,"description")})]})},`about_mini-${s.id}`),s.type==="about_description"&&e.jsx(d,{p:2,children:e.jsxs(f,{sx:{p:1,width:"92%",height:"auto"},children:[((n=s.asset)==null?void 0:n.url)&&e.jsx("img",{className:"aboutImageRight",style:{width:"140px",height:"160px",borderRadius:"8px",marginLeft:10},src:s.asset.url,alt:"Image"}),e.jsx(o,{sx:{color:"#fff",fontSize:"20px",fontWeight:700,lineHeight:"30px",fontFamily:"Trebuchet MS, sans-serif",width:"50%"},children:i(s,"title")}),e.jsx(o,{sx:{color:"#fff",fontSize:"16px",fontWeight:600,lineHeight:"25px",fontFamily:"Trebuchet MS, sans-serif"},children:i(s,"short")})]})})]},s.id)})]})})},v=t=>fetch(t).then(r=>r.json()),A=()=>{const[t,r]=u.useState(window.innerHeight),x=F(),{t:c,i18n:h}=j(),{data:i,error:s}=y("http://95.85.121.153:6856/data",v);if(u.useEffect(()=>{const n=()=>{r(window.innerHeight)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),!i)return e.jsx("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{})});if(s)return e.jsxs("div",{children:["An error occurred: ",s.message]});const a=(n,l)=>{const w=h.language;return{__html:n[`${l}_${w}`]}};return e.jsxs(e.Fragment,{children:[e.jsxs(d,{sx:{width:"300%",height:"auto",display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:[e.jsx(f,{sx:{display:"flex",justifyContent:"center",width:"100%",mt:t>=900?7:2},children:e.jsx(o,{"data-aos":"fade-down","data-aos-delay":"400",sx:{textTransform:"uppercase",fontSize:t>=900?"36px":"30px",fontWeight:700,fontFamily:"Trebuchet MS, sans-serif",color:"orange"},children:c("about.title")})}),e.jsx(e.Fragment,{children:i==null?void 0:i.map(n=>{var l;return e.jsx(e.Fragment,{children:n.type==="about_title"&&e.jsx(f,{"data-aos":"fade-left","data-aos-delay":"500",sx:{background:"rgba(10, 10, 14, 0.7)",p:t>=900?4:2,width:"90%",height:"auto",borderRadius:"8px 0px 0px 8px",mt:t>=900?5:2},children:e.jsxs(g,{container:!0,spacing:1,children:[e.jsx(g,{item:!0,lg:2,md:4,sm:6,xs:12,children:(l=n.asset)!=null&&l.url?e.jsx("img",{style:{width:"90%",borderRadius:"8px",height:t>=900?"260px":"180px"},src:n.asset.url,alt:"Image"}):null}),e.jsxs(g,{item:!0,lg:9,md:8,sm:6,xs:12,children:[e.jsx(o,{sx:{fontSize:t>=900?"32px":"24px",fontWeight:700,lineHeight:t>=900?"39px":"30px",fontFamily:"Trebuchet MS, sans-serif",color:"#E7EAFF",width:{lg:"30%",md:"30%",sm:"100%",xs:"100%"},textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}},dangerouslySetInnerHTML:a(n,"title")}),e.jsx(o,{sx:{fontSize:t>=900?"20px":"16px",fontWeight:600,lineHeight:t>=900?"25px":"20px",fontFamily:"Trebuchet MS, sans-serif",color:"#E7EAFF",width:{lg:"70%",md:"70%",sm:"100%",xs:"100%"},textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}},dangerouslySetInnerHTML:a(n,"description")})]})]})},`about_data-${n.id}`)})})})]}),e.jsxs(d,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%"},spacing:2,children:[e.jsx(m,{onClick:()=>x("/"),startIcon:e.jsx(p,{sx:{color:"orange",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:c("sidebar.home")}),e.jsx(T,{orientation:"vertical",flexItem:!0}),e.jsx(m,{onClick:()=>x("/portfolio"),endIcon:e.jsx(p,{sx:{color:"orange"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:c("sidebar.portfolio")})]}),e.jsx(M,{})]})};export{A as default};
