(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{40425:function(e,t,n){"use strict";n.d(t,{f:function(){return u},F:function(){return a}});var r=n(67294),o=n(9008);const s=(0,r.createContext)({setTheme:e=>{},themes:[]}),a=()=>(0,r.useContext)(s),c=["light","dark"],i="(prefers-color-scheme: dark)",u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:a="theme",themes:u=["light","dark"],defaultTheme:h=(n?"system":"light"),attribute:y="data-theme",value:p,children:v})=>{const[b,g]=(0,r.useState)((()=>m(a,h))),[w,$]=(0,r.useState)((()=>m(a))),T=p?Object.values(p):u,E=(0,r.useCallback)((t=>{const n=f(t);$(n),"system"!==b||e||_(n,!1)}),[b,e]),S=(0,r.useRef)(E);S.current=E;const _=(0,r.useCallback)(((e,r=!0,o=!0)=>{let s=(null==p?void 0:p[e])||e;const c=t&&o?d():null;if(r)try{localStorage.setItem(a,e)}catch(e){}if("system"===e&&n){const e=f();s=(null==p?void 0:p[e])||e}if(o){const e=document.documentElement;"class"===y?(e.classList.remove(...T),e.classList.add(s)):e.setAttribute(y,s),null==c||c()}}),[]);(0,r.useEffect)((()=>{const e=function(){return S.current(...[].slice.call(arguments))},t=window.matchMedia(i);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const k=(0,r.useCallback)((t=>{e?_(t,!0,!1):_(t),g(t)}),[e]);return(0,r.useEffect)((()=>{const e=e=>{e.key===a&&k(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[k]),(0,r.useEffect)((()=>{if(!o)return;let t=e&&c.includes(e)?e:b&&c.includes(b)?b:"system"===b&&w||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,b,w,e]),r.createElement(s.Provider,{value:{theme:b,setTheme:k,forcedTheme:e,resolvedTheme:"system"===b?w:b,themes:n?[...u,"system"]:u,systemTheme:n?w:void 0}},r.createElement(l,{forcedTheme:e,storageKey:a,attribute:y,value:p,enableSystem:n,defaultTheme:h,attrs:T}),v)},l=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,defaultTheme:a,value:c,attrs:u})=>{const l="class"===n?`var d=document.documentElement.classList;d.remove(${u.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",m=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},d="system"===a;return r.createElement(o.default,null,r.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${l}${m(e)}}()`}}:s?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${l}var e=localStorage.getItem('${t}');${d?"":m(a)+";"}if("system"===e||(!e&&${d})){var t="${i}",m=window.matchMedia(t);m.media!==t||m.matches?${m("dark")}:${m("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}else{${m(a)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),m=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},d=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},f=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},81780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(78510)}])},78510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),o=n(40425);n(75457),n(58132),n(84783);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function c(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(o.f,{defaultTheme:"system",enableSystem:!0,attribute:"class",children:(0,r.jsx)(t,a({},n))})}},84783:function(){},58132:function(){},75457:function(){},9008:function(e,t,n){e.exports=n(5443)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(81780),t(90387)}));var n=e.O();_N_E=n}]);