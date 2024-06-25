import{p as H,_ as Q,C as J,D as A,E as M,F as X,H as Y,I as k,J as z,K as Z,M as ee,N as C,P as te,R as S,Q as re,T as ne,r as R,U as se,k as ie,l as ue,s as oe,x as E,m as ae,h as le,j as x,n as ce,o as he,V as de,W as fe}from"./index-BB7KoYWS.js";import{s as pe,b as ve,a as me,u as ye,d as Re}from"./Box-CEu2FmwZ.js";var ge=function(r){H(s,r);function s(i,t){var e;return e=r.call(this)||this,e.client=i,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var n=s.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),L(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var o=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var l=this.hasListeners();l&&j(this.currentQuery,u,this.options,o)&&this.executeFetch(),this.updateResult(e),l&&(this.currentQuery!==u||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var a=this.computeRefetchInterval();l&&(this.currentQuery!==u||this.options.enabled!==o.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),o=this.client.getQueryCache().build(this.client,e);return this.createResult(o,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t,e){var o=this,u={},l=function(h){o.trackedProps.includes(h)||o.trackedProps.push(h)};return Object.keys(t).forEach(function(a){Object.defineProperty(u,a,{configurable:!1,enumerable:!0,get:function(){return l(a),t[a]}})}),(e.useErrorBoundary||e.suspense)&&l("error"),u},n.getNextResult=function(t){var e=this;return new Promise(function(o,u){var l=e.subscribe(function(a){a.isFetching||(l(),a.isError&&(t!=null&&t.throwOnError)?u(a.error):o(a))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(Q({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},n.fetchOptimistic=function(t){var e=this,o=this.client.defaultQueryObserverOptions(t),u=this.client.getQueryCache().build(this.client,o);return u.fetch().then(function(){return e.createResult(u,o)})},n.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(J)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(A||this.currentResult.isStale||!M(this.options.staleTime))){var e=X(this.currentResult.dataUpdatedAt,this.options.staleTime),o=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},o)}},n.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},n.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(A||this.options.enabled===!1||!M(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||Y.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(t,e){var o=this.currentQuery,u=this.options,l=this.currentResult,a=this.currentResultState,h=this.currentResultOptions,d=t!==o,f=d?t.state:this.currentQueryInitialState,v=d?this.currentResult:this.previousQueryResult,c=t.state,y=c.dataUpdatedAt,b=c.error,O=c.errorUpdatedAt,T=c.isFetching,p=c.status,$=!1,w=!1,m;if(e.optimisticResults){var N=this.hasListeners(),q=!N&&L(t,e),K=N&&j(t,o,e,u);(q||K)&&(T=!0,y||(p="loading"))}if(e.keepPreviousData&&!c.dataUpdateCount&&(v!=null&&v.isSuccess)&&p!=="error")m=v.data,y=v.dataUpdatedAt,p=v.status,$=!0;else if(e.select&&typeof c.data<"u")if(l&&c.data===(a==null?void 0:a.data)&&e.select===this.selectFn)m=this.selectResult;else try{this.selectFn=e.select,m=e.select(c.data),e.structuralSharing!==!1&&(m=k(l==null?void 0:l.data,m)),this.selectResult=m,this.selectError=null}catch(I){z().error(I),this.selectError=I}else m=c.data;if(typeof e.placeholderData<"u"&&typeof m>"u"&&(p==="loading"||p==="idle")){var g;if(l!=null&&l.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))g=l.data;else if(g=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof g<"u")try{g=e.select(g),e.structuralSharing!==!1&&(g=k(l==null?void 0:l.data,g)),this.selectError=null}catch(I){z().error(I),this.selectError=I}typeof g<"u"&&(p="success",m=g,w=!0)}this.selectError&&(b=this.selectError,m=this.selectResult,O=Date.now(),p="error");var G={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:m,dataUpdatedAt:y,error:b,errorUpdatedAt:O,failureCount:c.fetchFailureCount,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>f.dataUpdateCount||c.errorUpdateCount>f.errorUpdateCount,isFetching:T,isRefetching:T&&p!=="loading",isLoadingError:p==="error"&&c.dataUpdatedAt===0,isPlaceholderData:w,isPreviousData:$,isRefetchError:p==="error"&&c.dataUpdatedAt!==0,isStale:P(t,e),refetch:this.refetch,remove:this.remove};return G},n.shouldNotifyListeners=function(t,e){if(!e)return!0;var o=this.options,u=o.notifyOnChangeProps,l=o.notifyOnChangePropsExclusions;if(!u&&!l||u==="tracked"&&!this.trackedProps.length)return!0;var a=u==="tracked"?this.trackedProps:u;return Object.keys(t).some(function(h){var d=h,f=t[d]!==e[d],v=a==null?void 0:a.some(function(y){return y===h}),c=l==null?void 0:l.some(function(y){return y===h});return f&&!c&&(!a||v)})},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Z(this.currentResult,e)){var o={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(o.listeners=!0),this.notify(Q({},o,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!ee(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;C.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(o){o(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},s}(te);function Se(r,s){return s.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&s.retryOnMount===!1)}function L(r,s){return Se(r,s)||r.state.dataUpdatedAt>0&&F(r,s,s.refetchOnMount)}function F(r,s,n){if(s.enabled!==!1){var i=typeof n=="function"?n(r):n;return i==="always"||i!==!1&&P(r,s)}return!1}function j(r,s,n,i){return n.enabled!==!1&&(r!==s||i.enabled===!1)&&(!n.suspense||r.state.status!=="error")&&P(r,n)}function P(r,s){return r.isStaleByTime(s.staleTime)}function be(){var r=!1;return{clearReset:function(){r=!1},reset:function(){r=!0},isReset:function(){return r}}}var Ie=S.createContext(be()),Ce=function(){return S.useContext(Ie)};function Qe(r,s,n){return typeof s=="function"?s.apply(void 0,n):typeof s=="boolean"?s:!!r}function Ee(r,s){var n=S.useRef(!1),i=S.useState(0),t=i[1],e=re(),o=Ce(),u=e.defaultQueryObserverOptions(r);u.optimisticResults=!0,u.onError&&(u.onError=C.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=C.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=C.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(o.isReset()||(u.retryOnMount=!1));var l=S.useState(function(){return new s(e,u)}),a=l[0],h=a.getOptimisticResult(u);if(S.useEffect(function(){n.current=!0,o.clearReset();var d=a.subscribe(C.batchCalls(function(){n.current&&t(function(f){return f+1})}));return a.updateResult(),function(){n.current=!1,d()}},[o,a]),S.useEffect(function(){a.setOptions(u,{listeners:!1})},[u,a]),u.suspense&&h.isLoading)throw a.fetchOptimistic(u).then(function(d){var f=d.data;u.onSuccess==null||u.onSuccess(f),u.onSettled==null||u.onSettled(f,null)}).catch(function(d){o.clearReset(),u.onError==null||u.onError(d),u.onSettled==null||u.onSettled(void 0,d)});if(h.isError&&!o.isReset()&&!h.isFetching&&Qe(u.suspense,u.useErrorBoundary,[h.error,a.getCurrentQuery()]))throw h.error;return u.notifyOnChangeProps==="tracked"&&(h=a.trackResult(h,u)),h}function qe(r,s,n){var i=ne(r,s,n);return Ee(i,ge)}function Oe(...r){return r.reduce((s,n)=>n==null?s:function(...t){s.apply(this,t),n.apply(this,t)},()=>{})}function Te(r,s=166){let n;function i(...t){const e=()=>{r.apply(this,t)};clearTimeout(n),n=setTimeout(e,s)}return i.clear=()=>{clearTimeout(n)},i}function _e(r,s){return()=>null}function xe(r,s){var n,i;return R.isValidElement(r)&&s.indexOf((n=r.type.muiName)!=null?n:(i=r.type)==null||(i=i._payload)==null||(i=i.value)==null?void 0:i.muiName)!==-1}function W(r){return r&&r.ownerDocument||document}function Fe(r){return W(r).defaultView||window}function Ue(r,s){return()=>null}let B=0;function Pe(r){const[s,n]=R.useState(r),i=r||s;return R.useEffect(()=>{s==null&&(B+=1,n(`mui-${B}`))},[s]),i}const D=se.useId;function $e(r){if(D!==void 0){const s=D();return r??s}return Pe(r)}function we(r,s,n,i,t){return null}function Ne({controlled:r,default:s,name:n,state:i="value"}){const{current:t}=R.useRef(r!==void 0),[e,o]=R.useState(s),u=t?r:e,l=R.useCallback(a=>{t||o(a)},[]);return[u,l]}function Ae(r){return ie("MuiSvgIcon",r)}ue("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Me=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ke=r=>{const{color:s,fontSize:n,classes:i}=r,t={root:["root",s!=="inherit"&&`color${E(s)}`,`fontSize${E(n)}`]};return he(t,Ae,i)},ze=oe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:n}=r;return[s.root,n.color!=="inherit"&&s[`color${E(n.color)}`],s[`fontSize${E(n.fontSize)}`]]}})(({theme:r,ownerState:s})=>{var n,i,t,e,o,u,l,a,h,d,f,v,c;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:s.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=r.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(t=r.transitions)==null||(t=t.duration)==null?void 0:t.shorter}),fontSize:{inherit:"inherit",small:((e=r.typography)==null||(o=e.pxToRem)==null?void 0:o.call(e,20))||"1.25rem",medium:((u=r.typography)==null||(l=u.pxToRem)==null?void 0:l.call(u,24))||"1.5rem",large:((a=r.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,35))||"2.1875rem"}[s.fontSize],color:(d=(f=(r.vars||r).palette)==null||(f=f[s.color])==null?void 0:f.main)!=null?d:{action:(v=(r.vars||r).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(c=(r.vars||r).palette)==null||(c=c.action)==null?void 0:c.disabled,inherit:void 0}[s.color]}}),U=R.forwardRef(function(s,n){const i=ae({props:s,name:"MuiSvgIcon"}),{children:t,className:e,color:o="inherit",component:u="svg",fontSize:l="medium",htmlColor:a,inheritViewBox:h=!1,titleAccess:d,viewBox:f="0 0 24 24"}=i,v=le(i,Me),c=R.isValidElement(t)&&t.type==="svg",y=Q({},i,{color:o,component:u,fontSize:l,instanceFontSize:s.fontSize,inheritViewBox:h,viewBox:f,hasSvgAsChild:c}),b={};h||(b.viewBox=f);const O=ke(y);return x.jsxs(ze,Q({as:u,className:ce(O.root,e),focusable:"false",color:a,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n},b,v,c&&t.props,{ownerState:y,children:[c?t.props.children:t,d?x.jsx("title",{children:d}):null]}))});U.muiName="SvgIcon";function Le(r,s){function n(i,t){return x.jsx(U,Q({"data-testid":`${s}Icon`,ref:t},i,{children:r}))}return n.muiName=U.muiName,R.memo(R.forwardRef(n))}const je={configure:r=>{de.configure(r)}},Be=Object.freeze(Object.defineProperty({__proto__:null,capitalize:E,createChainedFunction:Oe,createSvgIcon:Le,debounce:Te,deprecatedPropType:_e,isMuiElement:xe,ownerDocument:W,ownerWindow:Fe,requirePropFactory:Ue,setRef:pe,unstable_ClassNameGenerator:je,unstable_useEnhancedEffect:ve,unstable_useId:$e,unsupportedProp:we,useControlled:Ne,useEventCallback:me,useForkRef:ye,useIsFocusVisible:Re},Symbol.toStringTag,{value:"Module"}));var _={};const De=fe(Be);var V;function Ke(){return V||(V=1,function(r){"use client";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s.createSvgIcon}});var s=De}(_)),_}export{Fe as a,Ne as b,Oe as c,$e as d,W as o,Ke as r,qe as u};
