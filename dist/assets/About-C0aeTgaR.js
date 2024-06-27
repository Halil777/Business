import{a as p,r as f,j as e,m,S as d,R as b,b as w,G as h}from"./index-C_jvPh6c.js";import{d as g}from"./ArrowRightAlt-BaLCRiVX.js";import{u as j}from"./index-E5s-BIfU.js";import{T as i}from"./Typography-B1r66Qxv.js";import{B as c}from"./createSvgIcon-_N2zyTav.js";import{B as u,D as y}from"./Divider-D2_mduc4.js";const S=s=>fetch(s).then(r=>r.json()),F=()=>{const{i18n:s}=p(),{data:r,error:l,isLoading:a,mutate:o}=j("http://95.85.121.153:6856/data",S);return f.useEffect(()=>{o()},[s.language,o]),a?e.jsx("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(m,{})}):l?e.jsxs("div",{children:["An error occurred: ",l.message]}):e.jsx(e.Fragment,{children:e.jsxs(d,{sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"},height:"100%",overflow:"auto"},children:[e.jsx(i,{sx:{textAlign:"center",color:"#fff",fontSize:"24px",fontWeight:700,fontFamily:"Trebuchet MS, sans-serif",textTransform:"uppercase"},children:"who we are"}),r==null?void 0:r.map(n=>{var t,x;return e.jsxs(b.Fragment,{children:[n.type==="about_title"&&e.jsx(d,{direction:"row",width:"100%",justifyContent:"flex-end",children:e.jsxs(c,{sx:{background:"rgba(10, 10, 14, 0.7)",p:1,width:"92%",borderRadius:"8px 0px 0px 8px",color:"#E7EAFF"},children:[((t=n.asset)==null?void 0:t.url)&&e.jsx("img",{className:"aboutImage",style:{width:"140px",height:"160px",borderRadius:"8px",marginRight:10},src:n.asset.url,alt:"Image"}),e.jsx(i,{sx:{color:"#fff",fontSize:"20px",fontWeight:700,lineHeight:"30px",width:"80%",fontFamily:"Trebuchet MS, sans-serif"}}),e.jsx(i,{sx:{color:"#fff",fontSize:"16px",fontWeight:600,lineHeight:"25px",fontFamily:"Trebuchet MS, sans-serif"}})]})},`about_mini-${n.id}`),n.type==="about_description"&&e.jsx(d,{p:2,children:e.jsxs(c,{sx:{p:1,width:"92%",height:"auto"},children:[((x=n.asset)==null?void 0:x.url)&&e.jsx("img",{className:"aboutImageRight",style:{width:"140px",height:"160px",borderRadius:"8px",marginLeft:10},src:n.asset.url,alt:"Image"}),e.jsx(i,{sx:{color:"#fff",fontSize:"20px",fontWeight:700,lineHeight:"30px",fontFamily:"Trebuchet MS, sans-serif",width:"50%"}}),e.jsx(i,{sx:{color:"#fff",fontSize:"16px",fontWeight:600,lineHeight:"25px",fontFamily:"Trebuchet MS, sans-serif"}})]})})]},n.id)})]})})},T=s=>fetch(s).then(r=>r.json()),I=()=>{const[s,r]=f.useState(window.innerHeight),l=w(),{i18n:a}=p(),{data:o,error:n}=j("http://95.85.121.153:6856/data",T);return f.useEffect(()=>{const t=()=>{r(window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),o?n?e.jsxs("div",{children:["An error occurred: ",n.message]}):e.jsxs(e.Fragment,{children:[e.jsxs(d,{sx:{width:"300%",height:"auto",display:{lg:"block",md:"block",sm:"none",xs:"none"}},children:[e.jsx(c,{sx:{display:"flex",justifyContent:"center",width:"100%",mt:s>=900?7:2},children:e.jsx(i,{"data-aos":"fade-down","data-aos-delay":"400",sx:{textTransform:"uppercase",fontSize:s>=900?"36px":"30px",fontWeight:700,fontFamily:"Trebuchet MS, sans-serif",color:"orange"},children:"who we are"})}),e.jsx(e.Fragment,{children:o==null?void 0:o.map(t=>{var x;return e.jsx(e.Fragment,{children:t.type==="about_title"&&e.jsx(c,{"data-aos":"fade-left","data-aos-delay":"500",sx:{background:"rgba(10, 10, 14, 0.7)",p:s>=900?4:2,width:"90%",height:"auto",borderRadius:"8px 0px 0px 8px",mt:s>=900?5:2},children:e.jsxs(h,{container:!0,spacing:1,children:[e.jsx(h,{item:!0,lg:2,md:4,sm:6,xs:12,children:(x=t.asset)!=null&&x.url?e.jsx("img",{style:{width:"90%",borderRadius:"8px",height:s>=900?"260px":"180px"},src:t.asset.url,alt:"Image"}):null}),e.jsxs(h,{item:!0,lg:9,md:8,sm:6,xs:12,children:[e.jsx(i,{sx:{fontSize:s>=900?"32px":"24px",fontWeight:700,lineHeight:s>=900?"39px":"30px",fontFamily:"Trebuchet MS, sans-serif",color:"#E7EAFF",width:{lg:"30%",md:"30%",sm:"100%",xs:"100%"},textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}},children:a.language==="en"?t.title_en:a.language==="ru"?t.title_ru:t.title_tm}),e.jsx(i,{sx:{fontSize:s>=900?"20px":"16px",fontWeight:600,lineHeight:s>=900?"25px":"20px",fontFamily:"Trebuchet MS, sans-serif",color:"#E7EAFF",width:{lg:"70%",md:"70%",sm:"100%",xs:"100%"},textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}},children:a.language==="en"?t.description_en:a.language==="ru"?t.description_ru:t.description_tm})]})]})},`about_data-${t.id}`)})})})]}),e.jsxs(d,{direction:"row",justifyContent:"center",alignItems:"center",sx:{position:"absolute",bottom:"5%",width:"100%"},spacing:2,children:[e.jsx(u,{onClick:()=>l("/"),startIcon:e.jsx(g,{sx:{color:"orange",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Home"}),e.jsx(y,{orientation:"vertical",flexItem:!0}),e.jsx(u,{onClick:()=>l("/portfolio"),endIcon:e.jsx(g,{sx:{color:"orange"}}),sx:{textTransform:"none",color:"orange",fontWeight:600,fontFamily:"Trebuchet MS, sans-serif"},children:"Portfolio"})]}),e.jsx(F,{})]}):e.jsx("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(m,{})})};export{I as default};
