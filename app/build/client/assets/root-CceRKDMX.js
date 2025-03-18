import{o as Xe,p as Ge,q as Je,t as Ue,r as c,_ as Qe,n as h,O as Ze,M as er,L as rr,S as tr}from"./components-B-8LArP1.js";import{w as or,s as sr,T as te,u as we,i as nr,h as ar,E as dr,c as cr,D as ir,a as F,b as Oe,d as lr,e as ur}from"./createTheme-CiHXImm8.js";/**
 * @remix-run/react v2.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let Ce="positions";function mr({getKey:e,...r}){let{isSpaMode:n}=Xe(),s=Ge(),i=Je();Ue({getKey:e,storageKey:Ce});let a=c.useMemo(()=>{if(!e)return null;let d=e(s,i);return d!==s.key?d:null},[]);if(n)return null;let o=((d,l)=>{if(!window.history.state||!window.history.state.key){let S=Math.random().toString(32).slice(2);window.history.replaceState({key:S},"")}try{let b=JSON.parse(sessionStorage.getItem(d)||"{}")[l||window.history.state.key];typeof b=="number"&&window.scrollTo(0,b)}catch(S){console.error(S),sessionStorage.removeItem(d)}}).toString();return c.createElement("script",Qe({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${o})(${JSON.stringify(Ce)}, ${JSON.stringify(a)})`}}))}var Z={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function fr(){if(Me)return g;Me=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,s=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,S=e?Symbol.for("react.concurrent_mode"):60111,b=e?Symbol.for("react.forward_ref"):60112,w=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,u=e?Symbol.for("react.lazy"):60116,C=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,P=e?Symbol.for("react.scope"):60119;function k(t){if(typeof t=="object"&&t!==null){var M=t.$$typeof;switch(M){case r:switch(t=t.type,t){case l:case S:case s:case a:case i:case w:return t;default:switch(t=t&&t.$$typeof,t){case d:case b:case u:case f:case o:return t;default:return M}}case n:return M}}}function L(t){return k(t)===S}return g.AsyncMode=l,g.ConcurrentMode=S,g.ContextConsumer=d,g.ContextProvider=o,g.Element=r,g.ForwardRef=b,g.Fragment=s,g.Lazy=u,g.Memo=f,g.Portal=n,g.Profiler=a,g.StrictMode=i,g.Suspense=w,g.isAsyncMode=function(t){return L(t)||k(t)===l},g.isConcurrentMode=L,g.isContextConsumer=function(t){return k(t)===d},g.isContextProvider=function(t){return k(t)===o},g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===r},g.isForwardRef=function(t){return k(t)===b},g.isFragment=function(t){return k(t)===s},g.isLazy=function(t){return k(t)===u},g.isMemo=function(t){return k(t)===f},g.isPortal=function(t){return k(t)===n},g.isProfiler=function(t){return k(t)===a},g.isStrictMode=function(t){return k(t)===i},g.isSuspense=function(t){return k(t)===w},g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===s||t===S||t===a||t===i||t===w||t===y||typeof t=="object"&&t!==null&&(t.$$typeof===u||t.$$typeof===f||t.$$typeof===o||t.$$typeof===d||t.$$typeof===b||t.$$typeof===_||t.$$typeof===E||t.$$typeof===P||t.$$typeof===C)},g.typeOf=k,g}var Te;function vr(){return Te||(Te=1,Z.exports=fr()),Z.exports}var ee,$e;function gr(){if($e)return ee;$e=1;var e=vr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[e.ForwardRef]=s,a[e.Memo]=i;function o(u){return e.isMemo(u)?i:a[u.$$typeof]||r}var d=Object.defineProperty,l=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,y=Object.prototype;function f(u,C,_){if(typeof C!="string"){if(y){var E=w(C);E&&E!==y&&f(u,E,_)}var P=l(C);S&&(P=P.concat(S(C)));for(var k=o(u),L=o(C),t=0;t<P.length;++t){var M=P[t];if(!n[M]&&!(_&&_[M])&&!(L&&L[M])&&!(k&&k[M])){var D=b(C,M);try{d(u,M,D)}catch{}}}}return u}return ee=f,ee}gr();var Ee=function(r,n){var s=arguments;if(n==null||!ar.call(n,"css"))return c.createElement.apply(void 0,s);var i=s.length,a=new Array(i);a[0]=dr,a[1]=cr(r,n);for(var o=2;o<i;o++)a[o]=s[o];return c.createElement.apply(null,a)};(function(e){var r;r||(r=e.JSX||(e.JSX={}))})(Ee||(Ee={}));var pr=or(function(e,r){var n=e.styles,s=sr([n],void 0,c.useContext(te)),i=c.useRef();return we(function(){var a=r.key+"-global",o=new r.sheet.constructor({key:a,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),d=!1,l=document.querySelector('style[data-emotion="'+a+" "+s.name+'"]');return r.sheet.tags.length&&(o.before=r.sheet.tags[0]),l!==null&&(d=!0,l.setAttribute("data-emotion",a),o.hydrate([l])),i.current=[o,d],function(){o.flush()}},[r]),we(function(){var a=i.current,o=a[0],d=a[1];if(d){a[1]=!1;return}if(s.next!==void 0&&nr(r,s.next,!0),o.tags.length){var l=o.tags[o.tags.length-1].nextElementSibling;o.before=l,o.flush()}r.insert("",s,o,!1)},[r,s.name]),null});function hr(e){return e==null||Object.keys(e).length===0}function br(e){const{styles:r,defaultTheme:n={}}=e,s=typeof r=="function"?i=>r(hr(i)?n:i):r;return h.jsx(pr,{styles:s})}function yr(e){return Object.keys(e).length===0}function Sr(e=null){const r=c.useContext(te);return!r||yr(r)?e:r}const kr=typeof window<"u"?c.useLayoutEffect:c.useEffect,Pe=c.createContext(null);function oe(){return c.useContext(Pe)}const xr=typeof Symbol=="function"&&Symbol.for,wr=xr?Symbol.for("mui.nested"):"__THEME_NESTED__";function Cr(e,r){return typeof r=="function"?r(e):{...e,...r}}function Mr(e){const{children:r,theme:n}=e,s=oe(),i=c.useMemo(()=>{const a=s===null?{...n}:Cr(s,n);return a!=null&&(a[wr]=s!==null),a},[n,s]);return h.jsx(Pe.Provider,{value:i,children:r})}const Tr=c.createContext();function $r({value:e,...r}){return h.jsx(Tr.Provider,{value:e??!0,...r})}const ze={};function _e(e,r,n,s=!1){return c.useMemo(()=>{const i=e&&r[e]||r;if(typeof n=="function"){const a=n(i),o=e?{...r,[e]:a}:a;return s?()=>o:o}return e?{...r,[e]:n}:{...r,...n}},[e,r,n,s])}function Re(e){const{children:r,theme:n,themeId:s}=e,i=Sr(ze),a=oe()||ze,o=_e(s,i,n),d=_e(s,a,n,!0),l=(s?o[s]:o).direction==="rtl";return h.jsx(Mr,{theme:d,children:h.jsx(te.Provider,{value:o,children:h.jsx($r,{value:l,children:h.jsx(ir,{value:s?o[s].components:o.components,children:r})})})})}const se="mode",ne="color-scheme",Er="data-color-scheme";function zr(e){const{defaultMode:r="system",defaultLightColorScheme:n="light",defaultDarkColorScheme:s="dark",modeStorageKey:i=se,colorSchemeStorageKey:a=ne,attribute:o=Er,colorSchemeNode:d="document.documentElement",nonce:l}=e||{};let S="",b=o;if(o==="class"&&(b=".%s"),o==="data"&&(b="[data-%s]"),b.startsWith(".")){const y=b.substring(1);S+=`${d}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${d}.classList.add('${y}'.replace('%s', colorScheme));`}const w=b.match(/\[([^\]]+)\]/);if(w){const[y,f]=w[1].split("=");f||(S+=`${d}.removeAttribute('${y}'.replace('%s', light));
      ${d}.removeAttribute('${y}'.replace('%s', dark));`),S+=`
      ${d}.setAttribute('${y}'.replace('%s', colorScheme), ${f?`${f}.replace('%s', colorScheme)`:'""'});`}else S+=`${d}.setAttribute('${b}', colorScheme);`;return h.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?l:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${r}';
  const dark = localStorage.getItem('${a}-dark') || '${s}';
  const light = localStorage.getItem('${a}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${S}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function _r(){}const qr=({key:e,storageWindow:r})=>(!r&&typeof window<"u"&&(r=window),{get(n){if(typeof window>"u")return;if(!r)return n;let s;try{s=r.localStorage.getItem(e)}catch{}return s||n},set:n=>{if(r)try{r.localStorage.setItem(e,n)}catch{}},subscribe:n=>{if(!r)return _r;const s=i=>{const a=i.newValue;i.key===e&&n(a)};return r.addEventListener("storage",s),()=>{r.removeEventListener("storage",s)}}});function re(){}function qe(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ie(e,r){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return r("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return r("dark")}function jr(e){return Ie(e,r=>{if(r==="light")return e.lightColorScheme;if(r==="dark")return e.darkColorScheme})}function Lr(e){const{defaultMode:r="light",defaultLightColorScheme:n,defaultDarkColorScheme:s,supportedColorSchemes:i=[],modeStorageKey:a=se,colorSchemeStorageKey:o=ne,storageWindow:d=typeof window>"u"?void 0:window,storageManager:l=qr,noSsr:S=!1}=e,b=i.join(","),w=i.length>1,y=c.useMemo(()=>l==null?void 0:l({key:a,storageWindow:d}),[l,a,d]),f=c.useMemo(()=>l==null?void 0:l({key:`${o}-light`,storageWindow:d}),[l,o,d]),u=c.useMemo(()=>l==null?void 0:l({key:`${o}-dark`,storageWindow:d}),[l,o,d]),[C,_]=c.useState(()=>{const m=(y==null?void 0:y.get(r))||r,v=(f==null?void 0:f.get(n))||n,p=(u==null?void 0:u.get(s))||s;return{mode:m,systemMode:qe(m),lightColorScheme:v,darkColorScheme:p}}),[E,P]=c.useState(S||!w);c.useEffect(()=>{P(!0)},[]);const k=jr(C),L=c.useCallback(m=>{_(v=>{if(m===v.mode)return v;const p=m??r;return y==null||y.set(p),{...v,mode:p,systemMode:qe(p)}})},[y,r]),t=c.useCallback(m=>{m?typeof m=="string"?m&&!b.includes(m)?console.error(`\`${m}\` does not exist in \`theme.colorSchemes\`.`):_(v=>{const p={...v};return Ie(v,x=>{x==="light"&&(f==null||f.set(m),p.lightColorScheme=m),x==="dark"&&(u==null||u.set(m),p.darkColorScheme=m)}),p}):_(v=>{const p={...v},x=m.light===null?n:m.light,A=m.dark===null?s:m.dark;return x&&(b.includes(x)?(p.lightColorScheme=x,f==null||f.set(x)):console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`)),A&&(b.includes(A)?(p.darkColorScheme=A,u==null||u.set(A)):console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)),p}):_(v=>(f==null||f.set(n),u==null||u.set(s),{...v,lightColorScheme:n,darkColorScheme:s}))},[b,f,u,n,s]),M=c.useCallback(m=>{C.mode==="system"&&_(v=>{const p=m!=null&&m.matches?"dark":"light";return v.systemMode===p?v:{...v,systemMode:p}})},[C.mode]),D=c.useRef(M);return D.current=M,c.useEffect(()=>{if(typeof window.matchMedia!="function"||!w)return;const m=(...p)=>D.current(...p),v=window.matchMedia("(prefers-color-scheme: dark)");return v.addListener(m),m(v),()=>{v.removeListener(m)}},[w]),c.useEffect(()=>{if(w){const m=(y==null?void 0:y.subscribe(x=>{(!x||["light","dark","system"].includes(x))&&L(x||r)}))||re,v=(f==null?void 0:f.subscribe(x=>{(!x||b.match(x))&&t({light:x})}))||re,p=(u==null?void 0:u.subscribe(x=>{(!x||b.match(x))&&t({dark:x})}))||re;return()=>{m(),v(),p()}}},[t,L,b,r,d,w,y,f,u]),{...C,mode:E?C.mode:void 0,systemMode:E?C.systemMode:void 0,colorScheme:E?k:void 0,setMode:L,setColorScheme:t}}const Or="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Pr(e){const{themeId:r,theme:n={},modeStorageKey:s=se,colorSchemeStorageKey:i=ne,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:d}=e,l={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},S=c.createContext(void 0),b=()=>c.useContext(S)||l,w={},y={};function f(E){var ye,Se,ke,xe;const{children:P,theme:k,modeStorageKey:L=s,colorSchemeStorageKey:t=i,disableTransitionOnChange:M=a,storageManager:D,storageWindow:m=typeof window>"u"?void 0:window,documentNode:v=typeof document>"u"?void 0:document,colorSchemeNode:p=typeof document>"u"?void 0:document.documentElement,disableNestedContext:x=!1,disableStyleSheetGeneration:A=!1,defaultMode:Be="system",noSsr:Ve}=E,Y=c.useRef(!1),X=oe(),G=c.useContext(S),J=!!G&&!x,ae=c.useMemo(()=>k||(typeof n=="function"?n():n),[k]),de=ae[r],q=de||ae,{colorSchemes:I=w,components:ce=y,cssVarPrefix:U}=q,ie=Object.keys(I).filter(T=>!!I[T]).join(","),N=c.useMemo(()=>ie.split(","),[ie]),le=typeof o=="string"?o:o.light,ue=typeof o=="string"?o:o.dark,Ke=I[le]&&I[ue]?Be:((Se=(ye=I[q.defaultColorScheme])==null?void 0:ye.palette)==null?void 0:Se.mode)||((ke=q.palette)==null?void 0:ke.mode),{mode:He,setMode:me,systemMode:fe,lightColorScheme:ve,darkColorScheme:ge,colorScheme:We,setColorScheme:pe}=Lr({supportedColorSchemes:N,defaultLightColorScheme:le,defaultDarkColorScheme:ue,modeStorageKey:L,colorSchemeStorageKey:t,defaultMode:Ke,storageManager:D,storageWindow:m,noSsr:Ve});let Q=He,j=We;J&&(Q=G.mode,j=G.colorScheme);const B=c.useMemo(()=>{var K;const T=j||q.defaultColorScheme,$=((K=q.generateThemeVars)==null?void 0:K.call(q))||q.vars,z={...q,components:ce,colorSchemes:I,cssVarPrefix:U,vars:$};if(typeof z.generateSpacing=="function"&&(z.spacing=z.generateSpacing()),T){const O=I[T];O&&typeof O=="object"&&Object.keys(O).forEach(R=>{O[R]&&typeof O[R]=="object"?z[R]={...z[R],...O[R]}:z[R]=O[R]})}return d?d(z):z},[q,j,ce,I,U]),V=q.colorSchemeSelector;kr(()=>{if(j&&p&&V&&V!=="media"){const T=V;let $=V;if(T==="class"&&($=".%s"),T==="data"&&($="[data-%s]"),T!=null&&T.startsWith("data-")&&!T.includes("%s")&&($=`[${T}="%s"]`),$.startsWith("."))p.classList.remove(...N.map(z=>$.substring(1).replace("%s",z))),p.classList.add($.substring(1).replace("%s",j));else{const z=$.replace("%s",j).match(/\[([^\]]+)\]/);if(z){const[K,O]=z[1].split("=");O||N.forEach(R=>{p.removeAttribute(K.replace(j,R))}),p.setAttribute(K,O?O.replace(/"|'/g,""):"")}else p.setAttribute($,j)}}},[j,V,p,N]),c.useEffect(()=>{let T;if(M&&Y.current&&v){const $=v.createElement("style");$.appendChild(v.createTextNode(Or)),v.head.appendChild($),window.getComputedStyle(v.body),T=setTimeout(()=>{v.head.removeChild($)},1)}return()=>{clearTimeout(T)}},[j,M,v]),c.useEffect(()=>(Y.current=!0,()=>{Y.current=!1}),[]);const Ye=c.useMemo(()=>({allColorSchemes:N,colorScheme:j,darkColorScheme:ge,lightColorScheme:ve,mode:Q,setColorScheme:pe,setMode:me,systemMode:fe}),[N,j,ge,ve,Q,pe,me,fe,B.colorSchemeSelector]);let he=!0;(A||q.cssVariables===!1||J&&(X==null?void 0:X.cssVarPrefix)===U)&&(he=!1);const be=h.jsxs(c.Fragment,{children:[h.jsx(Re,{themeId:de?r:void 0,theme:B,children:P}),he&&h.jsx(br,{styles:((xe=B.generateStyleSheets)==null?void 0:xe.call(B))||[]})]});return J?be:h.jsx(S.Provider,{value:Ye,children:be})}const u=typeof o=="string"?o:o.light,C=typeof o=="string"?o:o.dark;return{CssVarsProvider:f,useColorScheme:b,getInitColorSchemeScript:E=>zr({colorSchemeStorageKey:i,defaultLightColorScheme:u,defaultDarkColorScheme:C,modeStorageKey:s,...E})}}function je({theme:e,...r}){const n=F in e?e[F]:void 0;return h.jsx(Re,{...r,themeId:n?F:void 0,theme:n||e})}const W={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Rr}=Pr({themeId:F,theme:()=>Oe({cssVariables:!0}),colorSchemeStorageKey:W.colorSchemeStorageKey,modeStorageKey:W.modeStorageKey,defaultColorScheme:{light:W.defaultLightColorScheme,dark:W.defaultDarkColorScheme},resolveTheme:e=>{const r={...e,typography:lr(e.palette,e.typography)};return r.unstable_sx=function(s){return ur({sx:s,theme:this})},r}}),Ir=Rr;function Ar({theme:e,...r}){return typeof e=="function"?h.jsx(je,{theme:e,...r}):"colorSchemes"in(F in e?e[F]:e)?h.jsx(Ir,{theme:e,...r}):h.jsx(je,{theme:e,...r})}const Ae={lg:81,md:62,sm:36,xl:90,xs:0},Dr={step:6.25,unit:"rem"},De=16,Nr={values:{...Ae},...Dr},Fr={defaultProps:{variantMapping:{headingXl:"p",headingLg:"h1",headingMd:"h2",headingSm:"h3",subheadingLg:"h4",subheadingMd:"h5",subheadingSm:"h6",bodyLg:"p",bodyMd:"p",bodySm:"p",footnote:"p"}}},Br={MuiTypography:Fr},Vr={fab:"var(--rds-z-index-fab)",drawer:"var(--rds-z-index-drawer)",modal:"var(--rds-z-index-modal)",snackbar:"var(--rds-z-index-snackbar)",tooltip:"var(--rds-z-index-tooltip)"},Kr=Vr,Hr={0:"var(--rds-border-radius-0)",10:"var(--rds-border-radius-10)",25:"var(--rds-border-radius-25)",50:"var(--rds-border-radius-50)",100:"var(--rds-border-radius-100)",200:"var(--rds-border-radius-200)",circle:"var(--rds-border-radius-circle)"},Wr={5:"var(--rds-border-width-5)",10:"var(--rds-border-width-10)",25:"var(--rds-border-width-25)",50:"var(--rds-border-width-50)",75:"var(--rds-border-width-75)",100:"var(--rds-border-width-100)",200:"var(--rds-border-width-200)"},Yr=(e=25)=>Hr[e],Xr=(e=25)=>Wr[e],Gr={outline:"var(--rds-focus-outline)",outlineOffset:"var(--rds-outline-offset)",boxShadow:"var(--rds-focus-shadow)"},Jr={outline:"var(--rds-focus-outline)",outlineOffset:"var(--rds-outline-offset-inset)",boxShadow:"var(--rds-focus-shadow-inset)"},Ur={radius:Yr,borderWidth:Xr,focusRing:Gr,focusRingInset:Jr},Qr={0:"var(--rds-spacing-0)",10:"var(--rds-spacing-10)",25:"var(--rds-spacing-25)",50:"var(--rds-spacing-50)",75:"var(--rds-spacing-75)",100:"var(--rds-spacing-100)",150:"var(--rds-spacing-150)",200:"var(--rds-spacing-200)",300:"var(--rds-spacing-300)",400:"var(--rds-spacing-400)",500:"var(--rds-spacing-500)",600:"var(--rds-spacing-600)",700:"var(--rds-spacing-700)",800:"var(--rds-spacing-800)",900:"var(--rds-spacing-900)",1e3:"var(--rds-spacing-1000)",1200:"var(--rds-spacing-1200)",1300:"var(--rds-spacing-1300)",2e3:"var(--rds-spacing-2000)"},Zr=(...e)=>{if(e.length===0||e.length>4)throw new Error("Please provide between 1 and 4 arguments.");return e.map(r=>Qr[r]).join(" ")},H=`@media (min-width: ${Ae.md}rem)`,et="var(--rds-font-family)",Le=De,rt={fontWeightLight:"var(--rds-font-weight-light)",fontWeightRegular:"var(--rds-font-weight-regular)",fontWeightMedium:"var(--rds-font-weight-medium)",fontWeightSemibold:"var(--rds-font-weight-semibold)",fontWeightBold:"var(--rds-font-weight-bold)"},Ne={htmlFontSize:Le,fontSize:Le,fontFamily:et,...rt,bodyLg:{font:"var(--rds-font-body-lg)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)",[H]:{font:"var(--rds-font-body-lg-bp-md)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"}},bodyMd:{font:"var(--rds-font-body-md)",letterSpacing:"var(--rds-font-letter-spacing-default)"},bodySm:{font:"var(--rds-font-body-sm)",letterSpacing:"var(--rds-font-letter-spacing-default)"},footnote:{font:"var(--rds-font-footnote)",letterSpacing:"var(--rds-font-letter-spacing-default)"},headingXl:{font:"var(--rds-font-heading-xl)",letterSpacing:"var(--rds-font-letter-spacing-compressed)",[H]:{font:"var(--rds-font-heading-xl-bp-md)",letterSpacing:"var(--rds-font-letter-spacing-compressed)"}},headingLg:{font:"var(--rds-font-heading-lg)",letterSpacing:"var(--rds-font-letter-spacing-compressed)",[H]:{font:"var(--rds-font-heading-lg-bp-md)",letterSpacing:"var(--rds-font-letter-spacing-compressed)"}},headingMd:{font:"var(--rds-font-heading-md)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)",[H]:{font:"var(--rds-font-heading-md-bp-md)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"}},headingSm:{font:"var(--rds-font-heading-sm)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)",[H]:{font:"var(--rds-font-heading-sm-bp-md)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"}},subheadingLg:{font:"var(--rds-font-subheading-lg)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"},subheadingMd:{font:"var(--rds-font-subheading-md)",letterSpacing:"var(--rds-font-letter-spacing-default)"},subheadingSm:{font:"var(--rds-font-subheading-sm)",letterSpacing:"var(--rds-font-letter-spacing-default)"},buttonLg:{font:"var(--rds-button-font-lg)",letterSpacing:"var(--rds-font-letter-spacing-default)"},buttonMd:{font:"var(--rds-button-font-md)",letterSpacing:"var(--rds-font-letter-spacing-default)"},inputLabelMd:{font:"var(--rds-form-md-font-input-label)",letterSpacing:"var(--rds-font-letter-spacing-default)"},inputLabelLg:{font:"var(--rds-form-lg-font-input-label)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"},inputTextMd:{font:"var(--rds-form-md-font-input-text)",letterSpacing:"var(--rds-font-letter-spacing-default)"},inputTextLg:{font:"var(--rds-form-lg-font-input-text)",letterSpacing:"var(--rds-font-letter-spacing-semicompressed)"},helpTextMd:{font:"var(--rds-form-md-font-help-text)",letterSpacing:"var(--rds-font-letter-spacing-default)"},helpTextLg:{font:"var(--rds-form-lg-font-help-text)",letterSpacing:"var(--rds-font-letter-spacing-default)"}},tt={neutral:{background:{contrast:"var(--rds-color-neutral-background-contrast)",default:"var(--rds-color-neutral-background-default)",disabled:"var(--rds-color-neutral-background-disabled)",hover:"var(--rds-color-neutral-background-hover)","hover-opaque":"var(--rds-color-neutral-background-hover-opaque)",medium:"var(--rds-color-neutral-background-medium)",pressed:"var(--rds-color-neutral-background-pressed)","pressed-opaque":"var(--rds-color-neutral-background-pressed-opaque)",strong:"var(--rds-color-neutral-background-strong)",transparent:"var(--rds-color-neutral-background-transparent)",weak:"var(--rds-color-neutral-background-weak)","overlay-black":"var(--rds-color-neutral-background-overlay-black)","overlay-white":"var(--rds-color-neutral-background-overlay-white)"},text:{contrast:"var(--rds-color-neutral-text-contrast)",default:"var(--rds-color-neutral-text-default)",disabled:"var(--rds-color-neutral-text-disabled)",hover:"var(--rds-color-neutral-text-hover)",medium:"var(--rds-color-neutral-text-medium)",pressed:"var(--rds-color-neutral-text-pressed)",strong:"var(--rds-color-neutral-text-strong)",weak:"var(--rds-color-neutral-text-weak)"},border:{default:"var(--rds-color-neutral-border-default)",medium:"var(--rds-color-neutral-border-medium)",strong:"var(--rds-color-neutral-border-strong)",weak:"var(--rds-color-neutral-border-weak)"}},glue:{background:{default:"var(--rds-color-glue-background-default)",hover:"var(--rds-color-glue-background-hover)","hover-opaque":"var(--rds-color-glue-background-hover-opaque)",medium:"var(--rds-color-glue-background-medium)",pressed:"var(--rds-color-glue-background-pressed)","pressed-opaque":"var(--rds-color-glue-background-pressed-opaque)",strong:"var(--rds-color-glue-background-strong)",weak:"var(--rds-color-glue-background-weak)"},text:{contrast:"var(--rds-color-glue-text-contrast)",default:"var(--rds-color-glue-text-default)",hover:"var(--rds-color-glue-text-hover)",medium:"var(--rds-color-glue-text-medium)",pressed:"var(--rds-color-glue-text-pressed)",strong:"var(--rds-color-glue-text-strong)",weak:"var(--rds-color-glue-text-weak)"}},promote:{background:{default:"var(--rds-color-promote-background-default)",hover:"var(--rds-color-promote-background-hover)","hover-opaque":"var(--rds-color-promote-background-hover-opaque)",medium:"var(--rds-color-promote-background-medium)",pressed:"var(--rds-color-promote-background-pressed)","pressed-opaque":"var(--rds-color-promote-background-pressed-opaque)",strong:"var(--rds-color-promote-background-strong)",weak:"var(--rds-color-promote-background-weak)"},text:{contrast:"var(--rds-color-promote-text-contrast)",default:"var(--rds-color-promote-text-default)",hover:"var(--rds-color-promote-text-hover)",medium:"var(--rds-color-promote-text-medium)",pressed:"var(--rds-color-promote-text-pressed)",strong:"var(--rds-color-promote-text-strong)",weak:"var(--rds-color-promote-text-weak)"}},upsell:{background:{default:"var(--rds-color-upsell-background-default)",hover:"var(--rds-color-upsell-background-hover)","hover-opaque":"var(--rds-color-upsell-background-hover-opaque)",medium:"var(--rds-color-upsell-background-medium)",pressed:"var(--rds-color-upsell-background-pressed)","pressed-opaque":"var(--rds-color-upsell-background-pressed-opaque)",strong:"var(--rds-color-upsell-background-strong)",weak:"var(--rds-color-upsell-background-weak)"},text:{contrast:"var(--rds-color-upsell-text-contrast)",default:"var(--rds-color-upsell-text-default)",hover:"var(--rds-color-upsell-text-hover)",medium:"var(--rds-color-upsell-text-medium)",pressed:"var(--rds-color-upsell-text-pressed)",strong:"var(--rds-color-upsell-text-strong)",weak:"var(--rds-color-upsell-text-weak)"}},inverted:{background:{default:"var(--rds-color-inverted-background-default)",hover:"var(--rds-color-inverted-background-hover)","hover-opaque":"var(--rds-color-inverted-background-hover-opaque)",pressed:"var(--rds-color-inverted-background-pressed)","pressed-opaque":"var(--rds-color-inverted-background-pressed-opaque)",contrast:"var(--rds-color-inverted-background-contrast)"},text:{contrast:"var(--rds-color-inverted-text-contrast)",default:"var(--rds-color-inverted-text-default)",hover:"var(--rds-color-inverted-text-hover)",pressed:"var(--rds-color-inverted-text-pressed)",medium:"var(--rds-color-inverted-text-medium)",strong:"var(--rds-color-inverted-text-strong)",weak:"var(--rds-color-inverted-text-weak)"}},inform:{background:{default:"var(--rds-color-inform-background-default)",hover:"var(--rds-color-inform-background-hover)","hover-opaque":"var(--rds-color-inform-background-hover-opaque)",medium:"var(--rds-color-inform-background-medium)",pressed:"var(--rds-color-inform-background-pressed)","pressed-opaque":"var(--rds-color-inform-background-pressed-opaque)",strong:"var(--rds-color-inform-background-strong)",weak:"var(--rds-color-inform-background-weak)"},text:{contrast:"var(--rds-color-inform-text-contrast)",default:"var(--rds-color-inform-text-default)",hover:"var(--rds-color-inform-text-hover)",medium:"var(--rds-color-inform-text-medium)",pressed:"var(--rds-color-inform-text-pressed)",strong:"var(--rds-color-inform-text-strong)",weak:"var(--rds-color-inform-text-weak)"}},selected:{background:{default:"var(--rds-color-selected-background-default)",hover:"var(--rds-color-selected-background-hover)","hover-opaque":"var(--rds-color-selected-background-hover-opaque)",pressed:"var(--rds-color-selected-background-pressed)","pressed-opaque":"var(--rds-color-selected-background-pressed-opaque)"},text:{default:"var(--rds-color-selected-text-default)",hover:"var(--rds-color-selected-text-hover)",pressed:"var(--rds-color-selected-text-pressed)"}},success:{background:{default:"var(--rds-color-success-background-default)",hover:"var(--rds-color-success-background-hover)","hover-opaque":"var(--rds-color-success-background-hover-opaque)",medium:"var(--rds-color-success-background-medium)",pressed:"var(--rds-color-success-background-pressed)","pressed-opaque":"var(--rds-color-success-background-pressed-opaque)",strong:"var(--rds-color-success-background-strong)",weak:"var(--rds-color-success-background-weak)"},text:{contrast:"var(--rds-color-success-text-contrast)",default:"var(--rds-color-success-text-default)",hover:"var(--rds-color-success-text-hover)",medium:"var(--rds-color-success-text-medium)",pressed:"var(--rds-color-success-text-pressed)",strong:"var(--rds-color-success-text-strong)",weak:"var(--rds-color-success-text-weak)"}},danger:{background:{default:"var(--rds-color-danger-background-default)",hover:"var(--rds-color-danger-background-hover)","hover-opaque":"var(--rds-color-danger-background-hover-opaque)",medium:"var(--rds-color-danger-background-medium)",pressed:"var(--rds-color-danger-background-pressed)","pressed-opaque":"var(--rds-color-danger-background-pressed-opaque)",strong:"var(--rds-color-danger-background-strong)",weak:"var(--rds-color-danger-background-weak)"},text:{contrast:"var(--rds-color-danger-text-contrast)",default:"var(--rds-color-danger-text-default)",hover:"var(--rds-color-danger-text-hover)",medium:"var(--rds-color-danger-text-medium)",pressed:"var(--rds-color-danger-text-pressed)",strong:"var(--rds-color-danger-text-strong)",weak:"var(--rds-color-danger-text-weak)"}},warning:{background:{default:"var(--rds-color-warning-background-default)",hover:"var(--rds-color-warning-background-hover)","hover-opaque":"var(--rds-color-warning-background-hover-opaque)",medium:"var(--rds-color-warning-background-medium)",pressed:"var(--rds-color-warning-background-pressed)","pressed-opaque":"var(--rds-color-warning-background-pressed-opaque)",strong:"var(--rds-color-warning-background-strong)",weak:"var(--rds-color-warning-background-weak)"},text:{contrast:"var(--rds-color-warning-text-contrast)",default:"var(--rds-color-warning-text-default)",hover:"var(--rds-color-warning-text-hover)",medium:"var(--rds-color-warning-text-medium)",pressed:"var(--rds-color-warning-text-pressed)",strong:"var(--rds-color-warning-text-strong)",weak:"var(--rds-color-warning-text-weak)"}}},ot=tt,Fe={200:"var(--rds-size-200)",250:"var(--rds-size-250)",300:"var(--rds-size-300)",400:"var(--rds-size-400)",600:"var(--rds-size-600)",800:"var(--rds-size-800)",1e3:"var(--rds-size-1000)"},st={radio:{outerCircle:{medium:"var(--rds-radio-medium-size)",large:"var(--rds-radio-large-size)"},checkedCircle:{medium:"var(--rds-radio-medium-checked-size)",large:"var(--rds-radio-large-checked-size)"},md:{spacingTop:"var(--rds-spacing-150)"},lg:{spacingTop:"var(--rds-spacing-0)"}},checkbox:{touchArea:{large:"var(--rds-spacing-400)",medium:"var(--rds-spacing-300)"},fontSize:{medium:"var(--rds-checkbox-medium-font-size)",large:"var(--rds-checkbox-large-font-size)"},focusOutline:{medium:"var(--rds-checkbox-medium-focus-offset-size)",large:"var(--rds-checkbox-large-focus-offset-size)"}},form:{helpTextFontSize:{medium:"var(--rds-font-size-0875)",large:"var(--rds-font-size-1000)"},labelFontSize:{medium:"var(--rds-font-size-1000)",large:"var(--rds-font-size-1125)"}},formControl:{spacing:{top:"var(--rds-spacing-200)",bottom:"var(--rds-spacing-100)"}},formControlLabel:{md:{spacingTop:"var(--rds-spacing-50)"},lg:{spacingTop:"var(--rds-spacing-100)"}},formInput:{marginBottom:{normal:"var(--rds-input-margin-bottom-normal)",none:"var(--rds-input-margin-bottom-none)"},marginTop:{normal:"var(--rds-input-margin-top-normal)"},borderWidth:"var(--rds-input-border-width)",borderRadius:"var(--rds-input-border-radius)",inputHeight:{medium:"var(--rds-input-height-md)",large:"var(--rds-input-height-lg)"},adornmentWidth:{medium:"var(--rds-input-adornment-width-md)",large:"var(--rds-input-adornment-width-lg)"}},button:{medium:{gap:"var(--rds-button-medium-gap)",minWidth:"var(--rds-button-medium-min-width)",minHeight:"var(--rds-button-medium-min-height)",paddingX:"var(--rds-button-medium-padding-x)",paddingY:"var(--rds-button-medium-padding-y)"},large:{gap:"var(--rds-button-large-gap)",minWidth:"var(--rds-button-large-min-width)",minHeight:"var(--rds-button-large-min-height)",paddingX:"var(--rds-button-large-padding-x)",paddingY:"var(--rds-button-large-padding-y)"},borderRadius:"var(--rds-button-border-radius)"},icon:{system:{xsmall:"var(--rds-size-icon-system-xs)",small:"var(--rds-size-icon-system-sm)",medium:"var(--rds-size-icon-system-md)",large:"var(--rds-size-icon-system-lg)"},pictogram:{xsmall:"var(--rds-size-icon-pictogram-xs)",small:"var(--rds-size-icon-pictogram-sm)",medium:"var(--rds-size-icon-pictogram-md)",large:"var(--rds-size-icon-pictogram-lg)"}},iconSize:{...Fe,xsmall:"var(--rds-size-200)",small:"var(--rds-size-250)",medium:"var(--rds-size-300)",large:"var(--rds-size-400)"},iconButton:{small:{iconSize:"var(--rds-icon-button-icon-size-xs)",hoverArea:"var(--rds-icon-button-hover-area-sm)"},medium:{iconSize:"var(--rds-icon-button-icon-size-md)",hoverArea:"var(--rds-icon-button-hover-area-md)"},large:{iconSize:"var(--rds-icon-button-icon-size-lg)",hoverArea:"var(--rds-icon-button-hover-area-lg)"},borderRadius:"var(--rds-icon-button-border-radius)"},link:{underline:{offset:"var(--rds-link-underline-offset)",thickness:"var(--rds-link-underline-thickness)",hoverThickness:"var(--rds-link-underline-hover-thickness)"},color:{default:"var(--rds-color-link-default)",visited:"var(--rds-color-link-visited)",inverted:{default:"var(--rds-color-link-inverted-default)",visited:"var(--rds-color-link-inverted-visited)"}}},badge:{strong:{danger:{backgroundColor:"var(--rds-color-red-600)"},warning:{backgroundColor:"var(--rds-color-yellow-700)"},inform:{backgroundColor:"var(--rds-color-teal-500)"}}}},nt=st,at={0:"var(--rds-motion-duration-0)",50:"var(--rds-motion-duration-50)",100:"var(--rds-motion-duration-100)",150:"var(--rds-motion-duration-150)",200:"var(--rds-motion-duration-200)",250:"var(--rds-motion-duration-250)",300:"var(--rds-motion-duration-300)",400:"var(--rds-motion-duration-400)",800:"var(--rds-motion-duration-800)",1600:"var(--rds-motion-duration-1600)",2400:"var(--rds-motion-duration-2400)"},dt={linear:"var(--rds-motion-linear)",easeIn:"var(--rds-motion-ease-in)",easeOut:"var(--rds-motion-ease-out)",easeInOut:"var(--rds-motion-ease-in-out)",easeInBack:"var(--rds-motion-ease-in-back)",easeOutBack:"var(--rds-motion-ease-out-back)",easeInOutBack:"var(--rds-motion-ease-in-out-back)"},ct=(e=100)=>at[e],it={duration:ct,...dt},lt={breakpoints:Nr,typography:Ne,components:Br,rds:{palette:ot,componentToken:nt,zIndex:Kr,spacing:Zr,shape:Ur,motion:it,size:Fe}},ut={...Ne,h1:void 0,h2:void 0,h3:void 0,h4:void 0,h5:void 0,h6:void 0,subtitle1:void 0,subtitle2:void 0,body1:void 0,body2:void 0,caption:void 0},mt={...lt,typography:{...ut,pxToRem:e=>`${e/De}rem`}},ft=Oe(mt),pt=()=>[{title:"Very cool app | Remix"},{property:"og:title",content:"Very cool app"},{name:"description",content:"This app is the best"}],ht=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function bt({children:e}){return h.jsxs("html",{lang:"en",children:[h.jsxs("head",{children:[h.jsx("meta",{charSet:"utf-8"}),h.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),h.jsx(er,{}),h.jsx(rr,{}),typeof document>"u"?"__STYLES__":null]}),h.jsxs("body",{children:[h.jsx(Ar,{theme:ft,children:e}),h.jsx(mr,{}),h.jsx(tr,{}),!1]})]})}function yt(){return h.jsx(Ze,{})}export{bt as Layout,yt as default,ht as links,pt as meta};
