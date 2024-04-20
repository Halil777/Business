import{r as p,j as e,G as j,S as r,u as k,a as H,m as C}from"./index-sI1tW4vh.js";import{d as w,a as P}from"./api-RSpPtLig.js";import{B as x,T as l,u as z}from"./createSvgIcon-BFfWAPCF.js";import{b as R,c as B,d as D,e as T,S as V,A as q,a as U}from"./ExpandMore-BSgtjwtG.js";import{I as Z}from"./IconButton-DlY8q1Ys.js";import{B as S}from"./Button-C5dk-21l.js";import{D as E}from"./Divider-guuL5qfd.js";import"./mergeSlotProps-D6zxZtrS.js";import"./Paper-C2mFqMA3.js";const v={lg:{width:"60px"},md:{width:"60px"},sm:{width:"40px"},xs:{width:"30px"}},O=({data1:i,data2:u,data3:a,data4:d})=>{const[t,g]=p.useState(window.innerHeight),[n,f]=p.useState(!0),[s,o]=p.useState(!0),[c,h]=p.useState(!0),[m,I]=p.useState(!0);p.useEffect(()=>{const y=()=>{g(window.innerHeight)};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}},[]);let A;t>=900?A="lg":t>=600?A="md":t>=400?A="sm":A="xs";const b=y=>{switch(y){case"firstCard":o(!s);break;case"secondCard":f(!n);break;case"thirdCard":I(!m);break;case"fourthCard":h(!c);break}};return e.jsx(e.Fragment,{children:e.jsxs(j,{container:!0,spacing:2,children:[e.jsx(j,{item:!0,lg:6,md:6,sm:12,xs:12,children:e.jsxs(j,{container:!0,spacing:2,children:[n&&e.jsx(j,{sx:{zIndex:s?0:100},item:!0,lg:12,md:12,sm:12,xs:12,children:e.jsxs(x,{id:"firstCard",sx:{background:s?"#828282":"#3E3E3E",p:2,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"8px",cursor:"pointer",gap:3},onClick:()=>b("firstCard"),children:[e.jsxs(r,{width:"100%",spacing:5,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[e.jsx("img",{src:"images/Frame 81.png",style:{width:t>=900?"167px":"98px"},alt:"Frame 80.png"}),e.jsx(l,{sx:{color:s?"#E9E9E9":"#fff083",fontSize:"32px",fontWeight:700},children:i.attributes.title})]}),s?null:e.jsx(l,{sx:{color:"#FFF083",fontSize:t>=900?"28px":"18px",lineHeight:t>=900?"48px":"30px",fontWeight:500},children:i.attributes.short_description})]})}),u&&s&&e.jsx(j,{sx:{zIndex:n?0:100},item:!0,lg:12,md:12,sm:12,xs:12,children:e.jsxs(x,{id:"secondCard",sx:{background:n?"#828282":"#3E3E3E",p:2,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"8px",cursor:"pointer",gap:3,zIndex:n?0:1e3},onClick:()=>b("secondCard"),children:[e.jsxs(r,{width:"100%",spacing:5,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[e.jsx("img",{src:"/images/Frame 81.png",style:{width:t>=900?"167px":"98px"},alt:"Frame 80.png"}),e.jsx(l,{sx:{color:n?"#E9E9E9":"#fff083",fontSize:"32px",fontWeight:700},children:u.attributes.title})]}),n?null:e.jsx(l,{sx:{color:"#FFF083",fontSize:t>=900?"28px":"18px",lineHeight:t>=900?"48px":"30px",fontWeight:500},children:u.attributes.short_description})]})})]})}),e.jsx(r,{sx:{position:"absolute",width:"100%",display:"flex",mt:t>=900?24:15.3,alignItems:"center",ml:-.5,justifyContent:"center"},children:e.jsx("img",{src:"/images/Rectangle 14.png",style:{...v[A],zIndex:10},alt:"Rectangle 14"})}),e.jsx(j,{item:!0,lg:6,md:6,sm:12,xs:12,children:e.jsxs(j,{container:!0,spacing:2,children:[c&&a&&e.jsx(j,{sx:{zIndex:m?0:100},item:!0,lg:12,md:12,sm:12,xs:12,children:e.jsxs(x,{id:"thirdCard",sx:{background:m?"#828282":"#3E3E3E",p:2,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"8px",cursor:"pointer",gap:3,zIndex:m?0:1e3},onClick:()=>b("thirdCard"),children:[e.jsxs(r,{width:"100%",spacing:5,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[e.jsx("img",{src:"/images/Frame 81.png",style:{width:t>=900?"167px":"98px"},alt:"Frame 80.png"}),e.jsx(l,{sx:{color:m?"#E9E9E9":"#fff083",fontSize:"32px",fontWeight:700},children:a.attributes.title})]}),m?null:e.jsx(l,{sx:{color:"#FFF083",fontSize:t>=900?"28px":"18px",lineHeight:t>=900?"48px":"30px",fontWeight:500},children:a.attributes.short_description})]})}),m&&d&&e.jsx(j,{sx:{zIndex:c?0:100},item:!0,lg:12,md:12,sm:12,xs:12,children:e.jsxs(x,{id:"fourthCard",sx:{background:c?"#828282":"#3E3E3E",p:2,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"8px",cursor:"pointer",gap:3,zIndex:c?0:1e3},onClick:()=>b("fourthCard"),children:[e.jsxs(r,{width:"100%",spacing:5,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[e.jsx("img",{src:"/images/Frame 81.png",style:{width:t>=900?"167px":"98px"},alt:"Frame 80.png"}),e.jsx(l,{sx:{color:c?"#E9E9E9":"#fff083",fontSize:"32px",fontWeight:700},children:d.attributes.title})]}),c?null:e.jsx(l,{sx:{color:"#FFF083",fontSize:t>=900?"28px":"18px",lineHeight:t>=900?"48px":"30px",fontWeight:500},children:d.attributes.short_description})]})})]})})]})})},G=()=>{const[i,u]=p.useState(null),a=k(),{i18n:d}=H(),{refetch:t,data:g,isLoading:n,isError:f}=z("ourserviceItems",async()=>(await C.get(`http://95.85.121.153:1337/api/our-services?populate=icon&locale=${d.language}`)).data.data);if(p.useEffect(()=>{t()},[d.language]),n)return e.jsx("div",{children:"Loading..."});if(f)return e.jsx("div",{children:"Error fetching data"});const s=o=>{u(i===o?null:o)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{direction:"row",width:"100%",justifyContent:"center",children:e.jsxs(x,{sx:{width:"90%",height:"25vh",background:"url(data:image/jpeg;base64,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)",backgroundSize:"100% 100%",backgroundPosition:"cover",backgroundRepeat:"no-repeat",position:"relative",borderRadius:"8px"},children:[e.jsx(x,{sx:{position:"absolute",width:"50px",height:"50px",background:"#fff",right:0,bottom:0,clipPath:"polygon(0 100%, 100% 100%, 100% 0)",zIndex:1e3,border:"none",opacity:.9}}),e.jsx(x,{sx:{position:"absolute",width:"50px",height:"50px",background:"#fff",left:0,bottom:0,clipPath:"polygon(100% 0, 100% 100%, 0% 100%)",zIndex:1e3,border:"none",opacity:.9}})]})}),g.map((o,c)=>e.jsx(r,{width:"100%",direction:"row",pl:5,pr:5,pt:5,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:e.jsx("span",{style:{background:i?"#3E3E3E":"#828282"},className:`${i?"octagon active-color gray":"octagon o-color green"}`,children:e.jsxs(R,{expanded:i===c,onChange:()=>s(c),sx:{background:"#828282"},children:[e.jsx(B,{expandIcon:e.jsx(D,{sx:{color:"#e9e9e9",fontSize:"40px"}}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs(r,{direction:"row",alignItems:"center",spacing:6,children:[e.jsx(Z,{sx:{background:"#8E8E8E",borderRadius:"4px"},children:e.jsx(w,{})}),e.jsx(l,{sx:{color:"#e9e9e9",fontSize:"24px",fontWeight:700},children:o.attributes.title})]})}),e.jsx(T,{children:e.jsx(l,{sx:{color:"#E9E9E9",fontSize:"20px",fontWeight:600,lineHeight:"30px",textAlign:"center"},children:o.attributes.short_description})})]})})},`service_sx_key_${c}`)),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,mt:3,mb:3,sx:{display:{lg:"none",md:"none",sm:"flex",xs:"flex"}},children:[e.jsx(S,{onClick:()=>a("/portfolio"),startIcon:e.jsx(w,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx(E,{orientation:"vertical"}),e.jsx(S,{onClick:()=>a("/contact"),endIcon:e.jsx(w,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]})},M=()=>{const{i18n:i}=H();return z("services",async()=>(await P.get(`/api/our-services?populate=icon&locale=${i.language}`)).data)},N={lg:{width:"60px"},md:{width:"60px"},sm:{width:"40px"},xs:{width:"30px"}},Q={lg:{fontSize:"36px",lineHeight:"40px"},md:{fontSize:"24px",lineHeight:"28px"},sm:{fontSize:"16px",lineHeight:"20px"},xs:{fontSize:"14px",lineHeight:"14px"}},K={lg:{fontSize:"46px",lineHeight:"100px"},md:{fontSize:"36px",lineHeight:"70px"},sm:{fontSize:"22px",lineHeight:"40px"},xs:{fontSize:"14px",lineHeight:"14px"}},te=()=>{const[i,u]=p.useState(window.innerHeight),a=k(),{data:d}=M();p.useEffect(()=>{const s=()=>{u(window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);let t,g,n;i>=900?(t="lg",g="lg",n="lg"):i>=600?(t="md",g="md",n="md"):i>=400?(t="sm",g="sm",n="sm"):(t="xs",g="xs",n="xs");const f=s=>{const o=s!=null&&s.data?[...s.data,...s.data,s.data[0]]:[],c=[];for(let h=0;h<o.length;h=h+4)c.push(e.jsx(U,{children:e.jsx(x,{sx:{height:i>=900?"80vh":"83vh",width:"100%",pt:i>=900?7:4},children:e.jsxs(r,{sx:{height:"100%",pr:5},children:[e.jsxs(x,{sx:{width:"100%",height:"40%",position:"relative"},children:[e.jsx("img",{src:"/images/Group 73.png",style:{width:"100%",height:"100%"},alt:"screenHeight >= 900 ?"}),e.jsx(x,{sx:{position:"absolute",top:10,width:"100%"},children:e.jsxs(r,{alignItems:"center",width:"100%",justifyContent:"center",children:[e.jsx(l,{sx:{color:"#E9E9E9",...K[g]},children:"Our services"}),e.jsx(r,{sx:{pr:{lg:15,md:5,sm:2},pl:{lg:15,md:5,sm:2}},children:e.jsx(l,{sx:{textAlign:"start",color:"#E9E9E9",...Q[t]},children:'"Choose from either the Strategic Coach® Signature Program or the 10x Ambition Program™ with Dan Sullivan. Both offer the opportunity to strategize about what’s most important to your business at the moment and leave with concrete next steps and action plans to'})})]})}),e.jsx(r,{sx:{position:"absolute",width:"100%",display:"flex",mt:{lg:-4,md:-4,sm:-3,xs:-2},alignItems:"center"},children:e.jsx("img",{src:"/images/Rectangle 14.png",style:{...N[n],zIndex:110},alt:"Rectangle 14"})})]}),e.jsx(x,{sx:{height:"55%",mt:1},children:e.jsx(O,{data1:o[h],data2:o[h+1],data3:o[h+2],data4:o[h+3]})})]})})}));return c};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{width:"86%",mr:3,sx:{display:{lg:"flex",md:"flex",sm:"none",xs:"none"}},children:[e.jsx(V,{modules:[q],slidesPerView:1,autoplay:{delay:3e3,pauseOnMouseEnter:!0},onSwiper:s=>console.log(s),onSlideChange:()=>console.log("slide change"),style:{width:"100%"},speed:5e3,loop:!0,children:d&&f(d)}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,mt:i>=900?10:3,children:[e.jsx(S,{onClick:()=>a("/portfolio"),startIcon:e.jsx(w,{sx:{color:"#828282",transform:"rotate(180deg)",fontSize:"34px",width:"30px"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Previous"}),e.jsx(E,{orientation:"vertical"}),e.jsx(S,{onClick:()=>a("/contact"),endIcon:e.jsx(w,{sx:{color:"#828282"}}),sx:{textTransform:"none",color:"#828282",fontWeight:600},children:"Read more"})]})]}),e.jsx(G,{})]})};export{te as default};
