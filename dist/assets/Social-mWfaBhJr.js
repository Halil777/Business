import{r as x,_ as Ae,e as R,o as Dr,j as k,p as Mr,h as Zt,q as Lr,s as at,d as er,n as tr,c as kr,g as Br,t as rr,v as or,f as Ze,S as Wr,m as Nr}from"./index-BONix25s.js";import{a as Ee,e as nt,s as Nt,o as _t,f as We,g as _r,h as Fr,c as Ft,i as Hr,j as Ir,u as Vr}from"./createSvgIcon-DuhfTYnG.js";import{a as Ur,m as qr,b as Ne,T as zr,r as Xr,g as Ht}from"./mergeSlotProps-BcIldVrE.js";import{I as Yr}from"./IconButton-zdTm1M2Z.js";const Gr={disableDefaultClasses:!1},Kr=x.createContext(Gr);function Qr(e){const{disableDefaultClasses:t}=x.useContext(Kr);return r=>t?"":e(r)}const Jr=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Zr(e){var t;const{elementType:r,externalSlotProps:o,ownerState:n,skipResolvingSlotProps:i=!1}=e,l=Ae(e,Jr),a=i?{}:Ur(o,n),{props:s,internalRef:c}=qr(R({},l,{externalSlotProps:a})),p=Ee(c,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Ne(r,R({},s,{ref:p}),n)}const nr="base";function eo(e){return`${nr}--${e}`}function to(e,t){return`${nr}-${e}-${t}`}function ir(e,t){const r=Dr[t];return r?eo(r):to(e,t)}function ro(e,t){const r={};return t.forEach(o=>{r[o]=ir(e,o)}),r}function oo(e){return typeof e=="function"?e():e}const no=x.forwardRef(function(t,r){const{children:o,container:n,disablePortal:i=!1}=t,[l,a]=x.useState(null),s=Ee(x.isValidElement(o)?o.ref:null,r);if(nt(()=>{i||a(oo(n)||document.body)},[n,i]),nt(()=>{if(l&&!i)return Nt(r,l),()=>{Nt(r,null)}},[r,l,i]),i){if(x.isValidElement(o)){const c={ref:s};return x.cloneElement(o,c)}return k.jsx(x.Fragment,{children:o})}return k.jsx(x.Fragment,{children:l&&Mr.createPortal(o,l)})});var F="top",X="bottom",Y="right",H="left",bt="auto",Ve=[F,X,Y,H],Te="start",He="end",io="clippingParents",ar="viewport",ke="popper",ao="reference",It=Ve.reduce(function(e,t){return e.concat([t+"-"+Te,t+"-"+He])},[]),sr=[].concat(Ve,[bt]).reduce(function(e,t){return e.concat([t,t+"-"+Te,t+"-"+He])},[]),so="beforeRead",lo="read",po="afterRead",co="beforeMain",uo="main",fo="afterMain",vo="beforeWrite",mo="write",ho="afterWrite",go=[so,lo,po,co,uo,fo,vo,mo,ho];function re(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=q(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=q(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function xt(e){if(typeof ShadowRoot>"u")return!1;var t=q(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function yo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!z(i)||!re(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var a=n[l];a===!1?i.removeAttribute(l):i.setAttribute(l,a===!0?"":a)}))})}function bo(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),a=l.reduce(function(s,c){return s[c]="",s},{});!z(n)||!re(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(s){n.removeAttribute(s)}))})}}const xo={name:"applyStyles",enabled:!0,phase:"write",fn:yo,effect:bo,requires:["computeStyles"]};function te(e){return e.split("-")[0]}var me=Math.max,it=Math.min,Re=Math.round;function mt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function lr(){return!/^((?!chrome|android).)*safari/i.test(mt())}function Ce(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&z(e)&&(n=e.offsetWidth>0&&Re(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Re(o.height)/e.offsetHeight||1);var l=he(e)?q(e):window,a=l.visualViewport,s=!lr()&&r,c=(o.left+(s&&a?a.offsetLeft:0))/n,p=(o.top+(s&&a?a.offsetTop:0))/i,v=o.width/n,w=o.height/i;return{width:v,height:w,top:p,right:c+v,bottom:p+w,left:c,x:c,y:p}}function wt(e){var t=Ce(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function pr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&xt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ie(e){return q(e).getComputedStyle(e)}function wo(e){return["table","td","th"].indexOf(re(e))>=0}function pe(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function st(e){return re(e)==="html"?e:e.assignedSlot||e.parentNode||(xt(e)?e.host:null)||pe(e)}function Vt(e){return!z(e)||ie(e).position==="fixed"?null:e.offsetParent}function Po(e){var t=/firefox/i.test(mt()),r=/Trident/i.test(mt());if(r&&z(e)){var o=ie(e);if(o.position==="fixed")return null}var n=st(e);for(xt(n)&&(n=n.host);z(n)&&["html","body"].indexOf(re(n))<0;){var i=ie(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ue(e){for(var t=q(e),r=Vt(e);r&&wo(r)&&ie(r).position==="static";)r=Vt(r);return r&&(re(r)==="html"||re(r)==="body"&&ie(r).position==="static")?t:r||Po(e)||t}function Pt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function _e(e,t,r){return me(e,it(t,r))}function Oo(e,t,r){var o=_e(e,t,r);return o>r?r:o}function cr(){return{top:0,right:0,bottom:0,left:0}}function ur(e){return Object.assign({},cr(),e)}function fr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Eo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ur(typeof t!="number"?t:fr(t,Ve))};function To(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,a=te(r.placement),s=Pt(a),c=[H,Y].indexOf(a)>=0,p=c?"height":"width";if(!(!i||!l)){var v=Eo(n.padding,r),w=wt(i),d=s==="y"?F:H,P=s==="y"?X:Y,f=r.rects.reference[p]+r.rects.reference[s]-l[s]-r.rects.popper[p],h=l[s]-r.rects.reference[s],O=Ue(i),C=O?s==="y"?O.clientHeight||0:O.clientWidth||0:0,y=f/2-h/2,u=v[d],m=C-w[p]-v[P],g=C/2-w[p]/2+y,b=_e(u,g,m),S=s;r.modifiersData[o]=(t={},t[S]=b,t.centerOffset=b-g,t)}}function Ro(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||pr(t.elements.popper,n)&&(t.elements.arrow=n))}const Co={name:"arrow",enabled:!0,phase:"main",fn:To,effect:Ro,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function $e(e){return e.split("-")[1]}var $o={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ao(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Re(r*n)/n||0,y:Re(o*n)/n||0}}function Ut(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,w=l.x,d=w===void 0?0:w,P=l.y,f=P===void 0?0:P,h=typeof p=="function"?p({x:d,y:f}):{x:d,y:f};d=h.x,f=h.y;var O=l.hasOwnProperty("x"),C=l.hasOwnProperty("y"),y=H,u=F,m=window;if(c){var g=Ue(r),b="clientHeight",S="clientWidth";if(g===q(r)&&(g=pe(r),ie(g).position!=="static"&&a==="absolute"&&(b="scrollHeight",S="scrollWidth")),g=g,n===F||(n===H||n===Y)&&i===He){u=X;var A=v&&g===m&&m.visualViewport?m.visualViewport.height:g[b];f-=A-o.height,f*=s?1:-1}if(n===H||(n===F||n===X)&&i===He){y=Y;var T=v&&g===m&&m.visualViewport?m.visualViewport.width:g[S];d-=T-o.width,d*=s?1:-1}}var M=Object.assign({position:a},c&&$o),W=p===!0?Ao({x:d,y:f},q(r)):{x:d,y:f};if(d=W.x,f=W.y,s){var L;return Object.assign({},M,(L={},L[u]=C?"0":"",L[y]=O?"0":"",L.transform=(m.devicePixelRatio||1)<=1?"translate("+d+"px, "+f+"px)":"translate3d("+d+"px, "+f+"px, 0)",L))}return Object.assign({},M,(t={},t[u]=C?f+"px":"",t[y]=O?d+"px":"",t.transform="",t))}function jo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,c={placement:te(t.placement),variation:$e(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ut(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ut(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const So={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jo,data:{}};var et={passive:!0};function Do(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,a=l===void 0?!0:l,s=q(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,et)}),a&&s.addEventListener("resize",r.update,et),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,et)}),a&&s.removeEventListener("resize",r.update,et)}}const Mo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Do,data:{}};var Lo={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,function(t){return Lo[t]})}var ko={start:"end",end:"start"};function qt(e){return e.replace(/start|end/g,function(t){return ko[t]})}function Ot(e){var t=q(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Et(e){return Ce(pe(e)).left+Ot(e).scrollLeft}function Bo(e,t){var r=q(e),o=pe(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(n){i=n.width,l=n.height;var c=lr();(c||!c&&t==="fixed")&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:l,x:a+Et(e),y:s}}function Wo(e){var t,r=pe(e),o=Ot(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=me(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=me(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-o.scrollLeft+Et(e),s=-o.scrollTop;return ie(n||r).direction==="rtl"&&(a+=me(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}function Tt(e){var t=ie(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function dr(e){return["html","body","#document"].indexOf(re(e))>=0?e.ownerDocument.body:z(e)&&Tt(e)?e:dr(st(e))}function Fe(e,t){var r;t===void 0&&(t=[]);var o=dr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=q(o),l=n?[i].concat(i.visualViewport||[],Tt(o)?o:[]):o,a=t.concat(l);return n?a:a.concat(Fe(st(l)))}function ht(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function No(e,t){var r=Ce(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function zt(e,t,r){return t===ar?ht(Bo(e,r)):he(t)?No(t,r):ht(Wo(pe(e)))}function _o(e){var t=Fe(st(e)),r=["absolute","fixed"].indexOf(ie(e).position)>=0,o=r&&z(e)?Ue(e):e;return he(o)?t.filter(function(n){return he(n)&&pr(n,o)&&re(n)!=="body"}):[]}function Fo(e,t,r,o){var n=t==="clippingParents"?_o(e):[].concat(t),i=[].concat(n,[r]),l=i[0],a=i.reduce(function(s,c){var p=zt(e,c,o);return s.top=me(p.top,s.top),s.right=it(p.right,s.right),s.bottom=it(p.bottom,s.bottom),s.left=me(p.left,s.left),s},zt(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function vr(e){var t=e.reference,r=e.element,o=e.placement,n=o?te(o):null,i=o?$e(o):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(n){case F:s={x:l,y:t.y-r.height};break;case X:s={x:l,y:t.y+t.height};break;case Y:s={x:t.x+t.width,y:a};break;case H:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var c=n?Pt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case Te:s[c]=s[c]-(t[p]/2-r[p]/2);break;case He:s[c]=s[c]+(t[p]/2-r[p]/2);break}}return s}function Ie(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?io:a,c=r.rootBoundary,p=c===void 0?ar:c,v=r.elementContext,w=v===void 0?ke:v,d=r.altBoundary,P=d===void 0?!1:d,f=r.padding,h=f===void 0?0:f,O=ur(typeof h!="number"?h:fr(h,Ve)),C=w===ke?ao:ke,y=e.rects.popper,u=e.elements[P?C:w],m=Fo(he(u)?u:u.contextElement||pe(e.elements.popper),s,p,l),g=Ce(e.elements.reference),b=vr({reference:g,element:y,strategy:"absolute",placement:n}),S=ht(Object.assign({},y,b)),A=w===ke?S:g,T={top:m.top-A.top+O.top,bottom:A.bottom-m.bottom+O.bottom,left:m.left-A.left+O.left,right:A.right-m.right+O.right},M=e.modifiersData.offset;if(w===ke&&M){var W=M[n];Object.keys(T).forEach(function(L){var I=[Y,X].indexOf(L)>=0?1:-1,$=[F,X].indexOf(L)>=0?"y":"x";T[L]+=W[$]*I})}return T}function Ho(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?sr:s,p=$e(o),v=p?a?It:It.filter(function(P){return $e(P)===p}):Ve,w=v.filter(function(P){return c.indexOf(P)>=0});w.length===0&&(w=v);var d=w.reduce(function(P,f){return P[f]=Ie(e,{placement:f,boundary:n,rootBoundary:i,padding:l})[te(f)],P},{});return Object.keys(d).sort(function(P,f){return d[P]-d[f]})}function Io(e){if(te(e)===bt)return[];var t=ot(e);return[qt(e),t,qt(t)]}function Vo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!0:l,s=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,w=r.altBoundary,d=r.flipVariations,P=d===void 0?!0:d,f=r.allowedAutoPlacements,h=t.options.placement,O=te(h),C=O===h,y=s||(C||!P?[ot(h)]:Io(h)),u=[h].concat(y).reduce(function(oe,J){return oe.concat(te(J)===bt?Ho(t,{placement:J,boundary:p,rootBoundary:v,padding:c,flipVariations:P,allowedAutoPlacements:f}):J)},[]),m=t.rects.reference,g=t.rects.popper,b=new Map,S=!0,A=u[0],T=0;T<u.length;T++){var M=u[T],W=te(M),L=$e(M)===Te,I=[F,X].indexOf(W)>=0,$=I?"width":"height",j=Ie(t,{placement:M,boundary:p,rootBoundary:v,altBoundary:w,padding:c}),D=I?L?Y:H:L?X:F;m[$]>g[$]&&(D=ot(D));var N=ot(D),B=[];if(i&&B.push(j[W]<=0),a&&B.push(j[D]<=0,j[N]<=0),B.every(function(oe){return oe})){A=M,S=!1;break}b.set(M,B)}if(S)for(var V=P?3:1,ge=function(J){var ae=u.find(function(se){var _=b.get(se);if(_)return _.slice(0,J).every(function(G){return G})});if(ae)return A=ae,"break"},ce=V;ce>0;ce--){var ue=ge(ce);if(ue==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const Uo={name:"flip",enabled:!0,phase:"main",fn:Vo,requiresIfExists:["offset"],data:{_skip:!1}};function Xt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Yt(e){return[F,Y,X,H].some(function(t){return e[t]>=0})}function qo(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ie(t,{elementContext:"reference"}),a=Ie(t,{altBoundary:!0}),s=Xt(l,o),c=Xt(a,n,i),p=Yt(s),v=Yt(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const zo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:qo};function Xo(e,t,r){var o=te(e),n=[H,F].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],a=i[1];return l=l||0,a=(a||0)*n,[H,Y].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function Yo(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=sr.reduce(function(p,v){return p[v]=Xo(v,t.rects,i),p},{}),a=l[t.placement],s=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Go={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yo};function Ko(e){var t=e.state,r=e.name;t.modifiersData[r]=vr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Qo={name:"popperOffsets",enabled:!0,phase:"read",fn:Ko,data:{}};function Jo(e){return e==="x"?"y":"x"}function Zo(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!1:l,s=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,w=r.tether,d=w===void 0?!0:w,P=r.tetherOffset,f=P===void 0?0:P,h=Ie(t,{boundary:s,rootBoundary:c,padding:v,altBoundary:p}),O=te(t.placement),C=$e(t.placement),y=!C,u=Pt(O),m=Jo(u),g=t.modifiersData.popperOffsets,b=t.rects.reference,S=t.rects.popper,A=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,T=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(g){if(i){var L,I=u==="y"?F:H,$=u==="y"?X:Y,j=u==="y"?"height":"width",D=g[u],N=D+h[I],B=D-h[$],V=d?-S[j]/2:0,ge=C===Te?b[j]:S[j],ce=C===Te?-S[j]:-b[j],ue=t.elements.arrow,oe=d&&ue?wt(ue):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:cr(),ae=J[I],se=J[$],_=_e(0,b[j],oe[j]),G=y?b[j]/2-V-_-ae-T.mainAxis:ge-_-ae-T.mainAxis,ye=y?-b[j]/2+V+_+se+T.mainAxis:ce+_+se+T.mainAxis,Z=t.elements.arrow&&Ue(t.elements.arrow),lt=Z?u==="y"?Z.clientTop||0:Z.clientLeft||0:0,qe=(L=M==null?void 0:M[u])!=null?L:0,ze=D+G-qe-lt,ee=D+ye-qe,be=_e(d?it(N,ze):N,D,d?me(B,ee):B);g[u]=be,W[u]=be-D}if(a){var Xe,fe=u==="x"?F:H,Ye=u==="x"?X:Y,K=g[m],xe=m==="y"?"height":"width",de=K+h[fe],we=K-h[Ye],Pe=[F,H].indexOf(O)!==-1,Oe=(Xe=M==null?void 0:M[m])!=null?Xe:0,ve=Pe?de:K-b[xe]-S[xe]-Oe+T.altAxis,je=Pe?K+b[xe]+S[xe]-Oe-T.altAxis:we,Ge=d&&Pe?Oo(ve,K,je):_e(d?ve:de,K,d?je:we);g[m]=Ge,W[m]=Ge-K}t.modifiersData[o]=W}}const en={name:"preventOverflow",enabled:!0,phase:"main",fn:Zo,requiresIfExists:["offset"]};function tn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function rn(e){return e===q(e)||!z(e)?Ot(e):tn(e)}function on(e){var t=e.getBoundingClientRect(),r=Re(t.width)/e.offsetWidth||1,o=Re(t.height)/e.offsetHeight||1;return r!==1||o!==1}function nn(e,t,r){r===void 0&&(r=!1);var o=z(t),n=z(t)&&on(t),i=pe(t),l=Ce(e,n,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((re(t)!=="body"||Tt(i))&&(a=rn(t)),z(t)?(s=Ce(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=Et(i))),{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function an(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&n(s)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function sn(e){var t=an(e);return go.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function ln(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function pn(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Gt={placement:"bottom",modifiers:[],strategy:"absolute"};function Kt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function cn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?Gt:n;return function(a,s,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gt,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},v=[],w=!1,d={state:p,setOptions:function(O){var C=typeof O=="function"?O(p.options):O;f(),p.options=Object.assign({},i,p.options,C),p.scrollParents={reference:he(a)?Fe(a):a.contextElement?Fe(a.contextElement):[],popper:Fe(s)};var y=sn(pn([].concat(o,p.options.modifiers)));return p.orderedModifiers=y.filter(function(u){return u.enabled}),P(),d.update()},forceUpdate:function(){if(!w){var O=p.elements,C=O.reference,y=O.popper;if(Kt(C,y)){p.rects={reference:nn(C,Ue(y),p.options.strategy==="fixed"),popper:wt(y)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(T){return p.modifiersData[T.name]=Object.assign({},T.data)});for(var u=0;u<p.orderedModifiers.length;u++){if(p.reset===!0){p.reset=!1,u=-1;continue}var m=p.orderedModifiers[u],g=m.fn,b=m.options,S=b===void 0?{}:b,A=m.name;typeof g=="function"&&(p=g({state:p,options:S,name:A,instance:d})||p)}}}},update:ln(function(){return new Promise(function(h){d.forceUpdate(),h(p)})}),destroy:function(){f(),w=!0}};if(!Kt(a,s))return d;d.setOptions(c).then(function(h){!w&&c.onFirstUpdate&&c.onFirstUpdate(h)});function P(){p.orderedModifiers.forEach(function(h){var O=h.name,C=h.options,y=C===void 0?{}:C,u=h.effect;if(typeof u=="function"){var m=u({state:p,name:O,instance:d,options:y}),g=function(){};v.push(m||g)}})}function f(){v.forEach(function(h){return h()}),v=[]}return d}}var un=[Mo,Qo,So,xo,Go,Uo,en,Co,zo],fn=cn({defaultModifiers:un});const mr="Popper";function dn(e){return ir(mr,e)}ro(mr,["root"]);const vn=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],mn=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function hn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function gt(e){return typeof e=="function"?e():e}function gn(e){return e.nodeType!==void 0}const yn=()=>Zt({root:["root"]},Qr(dn)),bn={},xn=x.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:l,disablePortal:a,modifiers:s,open:c,placement:p,popperOptions:v,popperRef:w,slotProps:d={},slots:P={},TransitionProps:f}=t,h=Ae(t,vn),O=x.useRef(null),C=Ee(O,r),y=x.useRef(null),u=Ee(y,w),m=x.useRef(u);nt(()=>{m.current=u},[u]),x.useImperativeHandle(w,()=>y.current,[]);const g=hn(p,l),[b,S]=x.useState(g),[A,T]=x.useState(gt(n));x.useEffect(()=>{y.current&&y.current.forceUpdate()}),x.useEffect(()=>{n&&T(gt(n))},[n]),nt(()=>{if(!A||!c)return;const $=N=>{S(N.placement)};let j=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:N})=>{$(N)}}];s!=null&&(j=j.concat(s)),v&&v.modifiers!=null&&(j=j.concat(v.modifiers));const D=fn(A,O.current,R({placement:g},v,{modifiers:j}));return m.current(D),()=>{D.destroy(),m.current(null)}},[A,a,s,c,v,g]);const M={placement:b};f!==null&&(M.TransitionProps=f);const W=yn(),L=(o=P.root)!=null?o:"div",I=Zr({elementType:L,externalSlotProps:d.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:C},ownerState:t,className:W.root});return k.jsx(L,R({},I,{children:typeof i=="function"?i(M):i}))}),wn=x.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:w=bn,popperRef:d,style:P,transition:f=!1,slotProps:h={},slots:O={}}=t,C=Ae(t,mn),[y,u]=x.useState(!0),m=()=>{u(!1)},g=()=>{u(!0)};if(!s&&!p&&(!f||y))return null;let b;if(i)b=i;else if(o){const T=gt(o);b=T&&gn(T)?_t(T).body:_t(null).body}const S=!p&&s&&(!f||y)?"none":void 0,A=f?{in:p,onEnter:m,onExited:g}:void 0;return k.jsx(no,{disablePortal:a,container:b,children:k.jsx(xn,R({anchorEl:o,direction:l,disablePortal:a,modifiers:c,ref:r,open:f?!y:p,placement:v,popperOptions:w,popperRef:d,slotProps:h,slots:O},C,{style:R({position:"fixed",top:0,left:0,display:S},P),TransitionProps:A,children:n}))})});var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});var hr=Rt.default=void 0,Pn=En(x),On=Lr;function gr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(gr=function(o){return o?r:t})(e)}function En(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=gr(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function Tn(e){return Object.keys(e).length===0}function Rn(e=null){const t=Pn.useContext(On.ThemeContext);return!t||Tn(t)?e:t}hr=Rt.default=Rn;const Cn=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],$n=at(wn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),An=x.forwardRef(function(t,r){var o;const n=hr(),i=er({props:t,name:"MuiPopper"}),{anchorEl:l,component:a,components:s,componentsProps:c,container:p,disablePortal:v,keepMounted:w,modifiers:d,open:P,placement:f,popperOptions:h,popperRef:O,transition:C,slots:y,slotProps:u}=i,m=Ae(i,Cn),g=(o=y==null?void 0:y.root)!=null?o:s==null?void 0:s.Root,b=R({anchorEl:l,container:p,disablePortal:v,keepMounted:w,modifiers:d,open:P,placement:f,popperOptions:h,popperRef:O,transition:C},m);return k.jsx($n,R({as:a,direction:n==null?void 0:n.direction,slots:{root:g},slotProps:u??c},b,{ref:r}))}),yr=An,jn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function yt(e){return`scale(${e}, ${e**2})`}const Sn={entering:{opacity:1,transform:yt(1)},entered:{opacity:1,transform:"none"}},vt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),br=x.forwardRef(function(t,r){const{addEndListener:o,appear:n=!0,children:i,easing:l,in:a,onEnter:s,onEntered:c,onEntering:p,onExit:v,onExited:w,onExiting:d,style:P,timeout:f="auto",TransitionComponent:h=zr}=t,O=Ae(t,jn),C=We(),y=x.useRef(),u=tr(),m=x.useRef(null),g=Ee(m,i.ref,r),b=$=>j=>{if($){const D=m.current;j===void 0?$(D):$(D,j)}},S=b(p),A=b(($,j)=>{Xr($);const{duration:D,delay:N,easing:B}=Ht({style:P,timeout:f,easing:l},{mode:"enter"});let V;f==="auto"?(V=u.transitions.getAutoHeightDuration($.clientHeight),y.current=V):V=D,$.style.transition=[u.transitions.create("opacity",{duration:V,delay:N}),u.transitions.create("transform",{duration:vt?V:V*.666,delay:N,easing:B})].join(","),s&&s($,j)}),T=b(c),M=b(d),W=b($=>{const{duration:j,delay:D,easing:N}=Ht({style:P,timeout:f,easing:l},{mode:"exit"});let B;f==="auto"?(B=u.transitions.getAutoHeightDuration($.clientHeight),y.current=B):B=j,$.style.transition=[u.transitions.create("opacity",{duration:B,delay:D}),u.transitions.create("transform",{duration:vt?B:B*.666,delay:vt?D:D||B*.333,easing:N})].join(","),$.style.opacity=0,$.style.transform=yt(.75),v&&v($)}),L=b(w),I=$=>{f==="auto"&&C.start(y.current||0,$),o&&o(m.current,$)};return k.jsx(h,R({appear:n,in:a,nodeRef:m,onEnter:A,onEntered:T,onEntering:S,onExit:W,onExited:L,onExiting:M,addEndListener:I,timeout:f==="auto"?null:f},O,{children:($,j)=>x.cloneElement(i,R({style:R({opacity:0,transform:yt(.75),visibility:$==="exited"&&!a?"hidden":void 0},Sn[$],P,i.props.style),ref:g},j))}))});br.muiSupportAuto=!0;const Qt=br;function Dn(e){return Br("MuiTooltip",e)}const Mn=kr("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),le=Mn,Ln=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function kn(e){return Math.round(e*1e5)/1e5}const Bn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${rr(i.split("-")[0])}`],arrow:["arrow"]};return Zt(l,Dn,t)},Wn=at(yr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>R({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${le.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${le.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${le.arrow}`]:R({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${le.arrow}`]:R({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Nn=at("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${rr(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>R({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:or(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${kn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${le.popper}[data-popper-placement*="left"] &`]:R({transformOrigin:"right center"},t.isRtl?R({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):R({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${le.popper}[data-popper-placement*="right"] &`]:R({transformOrigin:"left center"},t.isRtl?R({marginRight:"14px"},t.touch&&{marginRight:"24px"}):R({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${le.popper}[data-popper-placement*="top"] &`]:R({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${le.popper}[data-popper-placement*="bottom"] &`]:R({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),_n=at("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:or(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let tt=!1;const Jt=new Ir;let Be={x:0,y:0};function rt(e,t){return r=>{t&&t(r),e(r)}}const Fn=x.forwardRef(function(t,r){var o,n,i,l,a,s,c,p,v,w,d,P,f,h,O,C,y,u,m;const g=er({props:t,name:"MuiTooltip"}),{arrow:b=!1,children:S,components:A={},componentsProps:T={},describeChild:M=!1,disableFocusListener:W=!1,disableHoverListener:L=!1,disableInteractive:I=!1,disableTouchListener:$=!1,enterDelay:j=100,enterNextDelay:D=0,enterTouchDelay:N=700,followCursor:B=!1,id:V,leaveDelay:ge=0,leaveTouchDelay:ce=1500,onClose:ue,onOpen:oe,open:J,placement:ae="bottom",PopperComponent:se,PopperProps:_={},slotProps:G={},slots:ye={},title:Z,TransitionComponent:lt=Qt,TransitionProps:qe}=g,ze=Ae(g,Ln),ee=x.isValidElement(S)?S:k.jsx("span",{children:S}),be=tr(),Xe=be.direction==="rtl",[fe,Ye]=x.useState(),[K,xe]=x.useState(null),de=x.useRef(!1),we=I||B,Pe=We(),Oe=We(),ve=We(),je=We(),[Ge,Ct]=_r({controlled:J,default:!1,name:"Tooltip",state:"open"});let ne=Ge;const pt=Fr(V),Se=x.useRef(),Ke=Ft(()=>{Se.current!==void 0&&(document.body.style.WebkitUserSelect=Se.current,Se.current=void 0),je.clear()});x.useEffect(()=>Ke,[Ke]);const $t=E=>{Jt.clear(),tt=!0,Ct(!0),oe&&!ne&&oe(E)},Qe=Ft(E=>{Jt.start(800+ge,()=>{tt=!1}),Ct(!1),ue&&ne&&ue(E),Pe.start(be.transitions.duration.shortest,()=>{de.current=!1})}),Je=E=>{de.current&&E.type!=="touchstart"||(fe&&fe.removeAttribute("title"),Oe.clear(),ve.clear(),j||tt&&D?Oe.start(tt?D:j,()=>{$t(E)}):$t(E))},ct=E=>{Oe.clear(),ve.start(ge,()=>{Qe(E)})},{isFocusVisibleRef:At,onBlur:xr,onFocus:wr,ref:Pr}=Hr(),[,jt]=x.useState(!1),St=E=>{xr(E),At.current===!1&&(jt(!1),ct(E))},Dt=E=>{fe||Ye(E.currentTarget),wr(E),At.current===!0&&(jt(!0),Je(E))},Mt=E=>{de.current=!0;const U=ee.props;U.onTouchStart&&U.onTouchStart(E)},Or=E=>{Mt(E),ve.clear(),Pe.clear(),Ke(),Se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",je.start(N,()=>{document.body.style.WebkitUserSelect=Se.current,Je(E)})},Er=E=>{ee.props.onTouchEnd&&ee.props.onTouchEnd(E),Ke(),ve.start(ce,()=>{Qe(E)})};x.useEffect(()=>{if(!ne)return;function E(U){(U.key==="Escape"||U.key==="Esc")&&Qe(U)}return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[Qe,ne]);const Tr=Ee(ee.ref,Pr,Ye,r);!Z&&Z!==0&&(ne=!1);const ut=x.useRef(),Rr=E=>{const U=ee.props;U.onMouseMove&&U.onMouseMove(E),Be={x:E.clientX,y:E.clientY},ut.current&&ut.current.update()},De={},ft=typeof Z=="string";M?(De.title=!ne&&ft&&!L?Z:null,De["aria-describedby"]=ne?pt:null):(De["aria-label"]=ft?Z:null,De["aria-labelledby"]=ne&&!ft?pt:null);const Q=R({},De,ze,ee.props,{className:Ze(ze.className,ee.props.className),onTouchStart:Mt,ref:Tr},B?{onMouseMove:Rr}:{}),Me={};$||(Q.onTouchStart=Or,Q.onTouchEnd=Er),L||(Q.onMouseOver=rt(Je,Q.onMouseOver),Q.onMouseLeave=rt(ct,Q.onMouseLeave),we||(Me.onMouseOver=Je,Me.onMouseLeave=ct)),W||(Q.onFocus=rt(Dt,Q.onFocus),Q.onBlur=rt(St,Q.onBlur),we||(Me.onFocus=Dt,Me.onBlur=St));const Cr=x.useMemo(()=>{var E;let U=[{name:"arrow",enabled:!!K,options:{element:K,padding:4}}];return(E=_.popperOptions)!=null&&E.modifiers&&(U=U.concat(_.popperOptions.modifiers)),R({},_.popperOptions,{modifiers:U})},[K,_]),Le=R({},g,{isRtl:Xe,arrow:b,disableInteractive:we,placement:ae,PopperComponentProp:se,touch:de.current}),dt=Bn(Le),Lt=(o=(n=ye.popper)!=null?n:A.Popper)!=null?o:Wn,kt=(i=(l=(a=ye.transition)!=null?a:A.Transition)!=null?l:lt)!=null?i:Qt,Bt=(s=(c=ye.tooltip)!=null?c:A.Tooltip)!=null?s:Nn,Wt=(p=(v=ye.arrow)!=null?v:A.Arrow)!=null?p:_n,$r=Ne(Lt,R({},_,(w=G.popper)!=null?w:T.popper,{className:Ze(dt.popper,_==null?void 0:_.className,(d=(P=G.popper)!=null?P:T.popper)==null?void 0:d.className)}),Le),Ar=Ne(kt,R({},qe,(f=G.transition)!=null?f:T.transition),Le),jr=Ne(Bt,R({},(h=G.tooltip)!=null?h:T.tooltip,{className:Ze(dt.tooltip,(O=(C=G.tooltip)!=null?C:T.tooltip)==null?void 0:O.className)}),Le),Sr=Ne(Wt,R({},(y=G.arrow)!=null?y:T.arrow,{className:Ze(dt.arrow,(u=(m=G.arrow)!=null?m:T.arrow)==null?void 0:u.className)}),Le);return k.jsxs(x.Fragment,{children:[x.cloneElement(ee,Q),k.jsx(Lt,R({as:se??yr,placement:ae,anchorEl:B?{getBoundingClientRect:()=>({top:Be.y,left:Be.x,right:Be.x,bottom:Be.y,width:0,height:0})}:fe,popperRef:ut,open:fe?ne:!1,id:pt,transition:!0},Me,$r,{popperOptions:Cr,children:({TransitionProps:E})=>k.jsx(kt,R({timeout:be.transitions.duration.shorter},E,Ar,{children:k.jsxs(Bt,R({},jr,{children:[Z,b?k.jsx(Wt,R({},Sr,{ref:xe})):null]}))}))}))]})}),Hn=Fn,zn=()=>{const{data:e,isLoading:t,error:r}=Vr("socialMediaData",async()=>(await Nr.get("http://95.85.121.153:1337/api/social-medias?populate=icon")).data.data);return t?k.jsx("div",{children:"Loading..."}):r?k.jsxs("div",{children:["Error: ",(r==null?void 0:r.message)||"An error occurred."]}):Array.isArray(e)?k.jsx(k.Fragment,{children:k.jsx(Wr,{direction:"row",spacing:{lg:1,md:1,sm:4,xs:4},children:e.map(o=>{const{title:n,url:i,icon:l}=o.attributes,a=`http://95.85.121.153:1337${l==null?void 0:l.data.attributes.url}`;return n&&i&&(l!=null&&l.data.attributes.url)?k.jsx(Hn,{title:n,children:k.jsx(Yr,{href:i,target:"_blank",children:k.jsx("img",{src:a,alt:n,style:{width:32,height:32}})})},o.id):null})})}):k.jsx("div",{children:"Data is not in the expected format."})};export{no as P,zn as S,Zr as u};