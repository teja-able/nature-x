"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{4493:function(e,t,s){s.d(t,{ML:function(){return o},RQ:function(){return i}});var r=s(85893),l=s(86010),a=s(54210);let n={sky:"from-sky-500 to-cyan-300",indigo:"from-indigo-500 to-blue-400",pink:"from-pink-500 to-fuchsia-400",fuchsia:"from-fuchsia-500 to-purple-400",purple:"from-violet-500 to-purple-500"};function i({className:e,color:t="sky",children:s}){return(0,r.jsx)("div",{className:(0,l.Z)(e,n[t],"relative -mx-4 pt-6 pl-4 bg-gradient-to-b sm:mx-0 sm:rounded-2xl sm:pt-12 sm:pl-12"),children:(0,r.jsx)("div",{className:"rounded-tl-xl overflow-hidden sm:rounded-br-xl",children:s})})}function d({filename:e,scroll:t=!1,code:s,children:n}){return(0,r.jsxs)("div",{className:"pt-2 bg-slate-800 shadow-lg group",children:[e&&(0,r.jsx)(a.n,{primary:{name:e},showTabMarkers:!1}),(0,r.jsx)("div",{className:(0,l.Z)("children:my-0 children:!shadow-none children:bg-transparent",t&&(0,l.Z)("overflow-y-auto max-h-96","scrollbar:w-4 scrollbar:h-4 scrollbar:transparent","scrollbar-thumb:border-4 scrollbar-thumb:border-solid scrollbar-thumb:border-slate-800 scrollbar-thumb:bg-slate-500/50 group-hover:scrollbar-thumb:bg-slate-500/60 scrollbar-thumb:rounded-full","scrollbar-track:rounded")),...s?{dangerouslySetInnerHTML:{__html:s}}:{children:n}})]})}function o({filename:e,scroll:t=!1,style:s="plain",color:l,children:a,code:n}){let o={scroll:t};return"framed"===s?(0,r.jsx)(i,{className:"mt-5 mb-8 first:mt-0 last:mb-0",color:l,children:(0,r.jsx)(d,{...o,filename:e,code:n,children:a})}):(0,r.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl",children:[(0,r.jsx)(d,{...o,filename:e,code:n,children:a}),(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset","aria-hidden":"true"})]})}},22869:function(e,t,s){s.d(t,{e:function(){return o}});var r=s(85893),l=s(86010),a=s(27994),n=s(67294);let i={none:"",md:"p-8"};function d({as:e="div",style:t,padding:s,p:a="md",className:n,containerClassName:d,html:o,children:c,hint:m,hintClassName:x,lightOnly:h=!1}){let u=s??a,g=i[u];if(void 0===g)throw Error(`Invalid padding value: ${JSON.stringify(u)}`);return(0,r.jsxs)("div",{className:d,children:[void 0!==m&&(0,r.jsx)("div",{className:(0,l.Z)(x,"not-prose mb-4"),children:(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,r.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,r.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,r.jsxs)(e,{style:t,className:(0,l.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,r.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,l.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,r.jsx)("div",{className:(0,l.Z)("relative rounded-xl overflow-auto",g,n),...o?{dangerouslySetInnerHTML:{__html:o}}:{children:c}}),(0,r.jsx)("div",{className:(0,l.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function o(e){return e.resizable?(0,r.jsx)(c,{...e}):(0,r.jsx)(d,{...e})}function c(e){let t=(0,n.useRef)(),s=(0,a.c$)(0),l=(0,n.useRef)(),i=(0,n.useRef)();return(0,n.useEffect)(()=>{let e=new window.ResizeObserver(()=>{s.set(0)});return e.observe(t.current),()=>{e.disconnect()}},[]),(0,n.useEffect)(()=>{i.current.onselectstart=()=>!1},[]),(0,r.jsxs)("div",{ref:t,className:"relative",children:[(0,r.jsx)(d,{as:a.ww.div,style:{marginRight:(0,a.Hm)(s,e=>-e)},...e}),(0,r.jsx)("div",{ref:l,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,r.jsx)(a.ww.div,{ref:i,drag:"x",_dragX:s,dragMomentum:!1,dragElastic:0,dragConstraints:l,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:s},onDragStart:()=>{document.documentElement.classList.add("dragging-ew")},onDragEnd:()=>{document.documentElement.classList.remove("dragging-ew")},children:(0,r.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},50224:function(e,t,s){s.d(t,{X:function(){return i}});var r=s(85893),l=s(67294),a=s(36336),n=s(86010);function i({level:e,id:t,children:s,className:i="",hidden:d=!1,ignore:o=!1,style:c={},nextElement:m,...x}){let h=`h${e}`,u=(0,l.useContext)(a.wc);return(0,l.useEffect)(()=>{if(u)return u.registerHeading(t),()=>{u.unregisterHeading(t)}},[t,null==u?void 0:u.registerHeading,null==u?void 0:u.unregisterHeading]),(0,r.jsx)(h,{className:(0,n.Z)("flex whitespace-pre-wrap not-prose",i,{"mb-2 text-sm leading-6 text-sky-500 font-semibold tracking-normal dark:text-sky-400":2===e&&(null==m?void 0:m.type)==="heading"&&(null==m?void 0:m.depth)===3}),id:t,style:{...d?{marginBottom:0}:{},...c},"data-docsearch-ignore":o?"":void 0,...x,children:(0,r.jsxs)("a",{className:(0,n.Z)("group relative border-none",d?"sr-only":"lg:-ml-2 lg:pl-2"),href:`#${t}`,children:[(0,r.jsxs)("span",{className:"absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex",children:["​",(0,r.jsx)("span",{className:(0,n.Z)("flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10","dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200"),children:(0,r.jsx)("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),s]})})}},54210:function(e,t,s){s.d(t,{n:function(){return a}});var r=s(85893),l=s(86010);function a({primary:e,secondary:t=[],showTabMarkers:s=!0,side:a,translucent:n=!1,children:i}){return(0,r.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,r.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,s&&(e.saved?(0,r.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,r.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,r.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,r.jsxs)("div",{className:(0,l.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===a?"rounded-tl lg:rounded-tr":"rounded-tl",n&&"dark:bg-slate-800/50"),children:[t.map(({name:e,open:t=!0,className:s})=>(0,r.jsx)("div",{className:(0,l.Z)("px-4 py-1 border-r border-slate-200/5",s,{italic:!t}),children:e},e)),i&&(0,r.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},36336:function(e,t,s){s.d(t,{wc:function(){return p},X_:function(){return v}});var r=s(85893),l=s(67294),a=s(86010),n=s(50224);let i=(0,l.memo)(({utilities:e={},filterRules:t=()=>!0,filterProperties:s,preview:i,rowStyle:d,sort:o=e=>e,transformSelector:c=e=>e.replace(/^\./g,"").replace(/\\/g,""),transformProperties:m=({properties:e})=>e,transformValue:x,custom:h,scroll:u})=>{let g=Object.keys(e=Object.fromEntries(Object.entries(e).filter(t))),p=u||g.length>12,b=g.length>10,[f,v]=(0,l.useState)(b),k=(0,l.useRef)(),j=(0,l.useRef)(!0);return(0,l.useEffect)(()=>{if(j.current){j.current=!1;return}f&&k.current.scrollIntoView(!0)},[f]),(0,r.jsxs)("div",{ref:k,className:"mt-10 relative",children:[(0,r.jsx)(n.X,{level:2,id:"class-reference",className:"relative scroll-mt-[var(--scroll-mt)]",children:(0,r.jsx)("span",{className:"sr-only",children:"Quick reference"})}),(0,r.jsx)("div",{className:"overflow-x-auto flex -mx-4 sm:-mx-6 md:mx-0",children:(0,r.jsxs)("div",{id:"class-table",className:(0,a.Z)("flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50",f&&"max-h-96",!p&&f&&"lg:max-h-[none]",p&&"lg:supports-scrollbars:pr-2 lg:max-h-96"),children:[h?h():(0,r.jsxs)("table",{className:"w-full text-left border-collapse",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300",children:(0,r.jsx)("div",{className:"py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20",children:"Class"})}),(0,r.jsx)("th",{className:(0,a.Z)("sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300",{"hidden sm:table-cell":i}),children:(0,r.jsx)("div",{className:(0,a.Z)("py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20",{"pr-2":i}),children:"Properties"})}),i&&(0,r.jsx)("th",{className:"sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300",children:(0,r.jsxs)("div",{className:"py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20",children:[(0,r.jsx)("span",{className:"sr-only",children:"Preview"}),"\xa0"]})})]})}),(0,r.jsx)("tbody",{className:"align-baseline",children:o(g).map((t,n)=>{let o={...e[t]};return(0,r.jsxs)("tr",{style:d?d({css:o}):void 0,children:[(0,r.jsx)("td",{translate:"no",className:(0,a.Z)("py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400",{"border-t border-slate-100 dark:border-slate-400/10":0!==n}),children:c(t)}),(0,r.jsx)("td",{translate:"no",className:(0,a.Z)("py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300",{"border-t border-slate-100 dark:border-slate-400/10":0!==n,"hidden sm:table-cell sm:pr-2":i}),children:function e(t,{filter:s=()=>!0,transformValue:a=e=>e,indent:n=0}={}){return Object.keys(t).map(i=>{var d,o;return(d=t[i],"[object Object]"===Object.prototype.toString.call(d))?[`${i} {`,e(t[i],{filter:s,transformValue:a,indent:n+1}),"}"].join("\n"):(Array.isArray(o=t[i])?o:[o]).filter(e=>s(i,e,t)).map((e,t)=>{let s=a(e),d=/^[\d.]+rem$/.test(s)?`${16*parseFloat(s)}px`:null;return(0,r.jsxs)(l.Fragment,{children:["  ".repeat(n),i,": ",s,";",d&&(0,r.jsxs)("span",{className:"text-indigo-400",children:[" ",`/* ${d} */`]}),"\n"]},t)})})}(m({selector:t,properties:o}),{filter:s,transformValue:x})}),i&&i(o,{utility:t,className:0===n?"":"border-t border-slate-100 dark:border-slate-400/10"})]},t)})})]}),(0,r.jsx)("div",{className:"sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20"})]})}),b&&(0,r.jsxs)("div",{className:(0,a.Z)("inset-x-0 flex justify-center pointer-events-none lg:hidden",f?"-mt-9 relative":"mt-4 sticky bottom-[calc(1rem+env(safe-area-inset-bottom,0))]"),children:[(0,r.jsx)("div",{className:(0,a.Z)("absolute inset-x-0 bg-gradient-to-t from-white dark:from-slate-900",f?"-top-8 bottom-0":"-top-4 bottom-[calc(-1*(1rem+env(safe-area-inset-bottom,0)))]")}),(0,r.jsx)("button",{type:"button",onClick:()=>v(!f),className:"pointer-events-auto relative text-sm font-semibold text-slate-900 bg-white py-2 px-4 rounded-full ring-1 ring-slate-900/10 shadow-sm dark:bg-slate-800 dark:text-slate-200 dark:highlight-white/5",children:f?"Show all classes":"Show fewer classes"})]})]})});var d=s(11163),o=s(97903),c=s(41664),m=s.n(c);function x({title:e,description:t,repo:s,badge:l={},section:a}){return e||t?(0,r.jsxs)("header",{id:"header",className:"relative z-20",children:[(0,r.jsxs)("div",{children:[a&&(0,r.jsx)("p",{className:"mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:a}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("h1",{className:"inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),s&&(0,r.jsxs)("a",{href:s,className:"ml-3 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 sm:mt-1 sm:ml-4",children:[(0,r.jsx)("span",{className:"sr-only",children:"View on GitHub"}),(0,r.jsx)("svg",{viewBox:"0 0 16 16",className:"w-5 h-5 sm:w-6 sm:h-6",fill:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})]})]}),l.key&&l.value&&(0,r.jsxs)("dl",{className:"ml-3 mt-1.5 align-top inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-cyan-100 text-cyan-900 tracking-tight",children:[(0,r.jsx)("dt",{className:"sr-only",children:l.key}),(0,r.jsx)("dd",{children:l.value})]})]}),t&&(0,r.jsx)("p",{className:"mt-2 text-lg text-slate-700 dark:text-slate-400",children:t})]}):null}var h=s(95021),u=s(11151),g=s(39566);let p=(0,l.createContext)();function b({tableOfContents:e,currentSection:t}){let s=(0,l.useContext)(o.l),n=!!s;function i(){n&&s.setNavIsOpen(!1)}function d(e){return e.slug===t||!!e.children&&e.children.findIndex(d)>-1}let c=e.some(e=>e.children.length>0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"px-8",children:[(0,r.jsx)("h5",{className:"text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100",children:"On this page"}),(0,r.jsx)("ul",{className:"text-slate-700 text-sm leading-6",children:e.map(e=>(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:`#${e.slug}`,onClick:i,className:(0,a.Z)("block py-1",c?"font-medium":"",d(e)?"font-medium text-sky-500 dark:text-sky-400":"hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"),children:e.title})}),e.children.map(e=>(0,r.jsx)("li",{className:"ml-4",children:(0,r.jsxs)("a",{href:`#${e.slug}`,onClick:i,className:(0,a.Z)("group flex items-start py-1",d(e)?"text-sky-500 dark:text-sky-400":"hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"),children:[(0,r.jsx)("svg",{width:"3",height:"24",viewBox:"0 -9 3 24",className:"mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500",children:(0,r.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),e.title]})},e.slug))]},e.slug))})]}),(0,r.jsx)("div",{className:"mt-8 overflow-hidden",children:(0,r.jsx)("div",{className:"p-8",children:(0,r.jsxs)("a",{href:"https://www.refactoringui.com/?ref=sidebar",className:"relative block pt-80 -m-6 p-6 rounded-lg focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800/25",children:[(0,r.jsx)("img",{className:"pointer-events-none h-[673px] w-[536px] max-w-none absolute -top-[112px] -right-6",src:"/img/refactoring-ui-sidebar.png",alt:"Refactoring UI by Adam Wathan and Steve Schoger",decoding:"async"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-[0.8125rem] font-semibold leading-5 text-sky-500 dark:text-sky-400",children:"From the creators of Tailwind CSS"}),(0,r.jsx)("p",{className:"mt-1 text-base font-bold tracking-tight leading-[1.375] text-slate-900 dark:text-slate-200",children:"Make your ideas look awesome, without relying on a designer."}),(0,r.jsxs)("figure",{className:"mt-6 pl-4 border-l border-slate-100 dark:border-slate-700",children:[(0,r.jsx)("blockquote",{className:"text-sm leading-5 text-slate-600 dark:text-slate-400",children:"“This is the survival kit I wish I had when I started building apps.”"}),(0,r.jsxs)("figcaption",{className:"mt-3 text-xs leading-5 text-slate-500",children:["Derrick Reimer, ",(0,r.jsx)("span",{className:"",children:"SavvyCal"})]})]})]})]})})})]})}function f(e){let t=document.getElementById(e);return t?t.getBoundingClientRect().top+window.scrollY:0}function v({children:e,meta:t,classes:s,tableOfContents:a,section:n}){let c=(0,d.useRouter)(),v=[...s?[{title:"Quick reference",slug:"class-reference",children:[]}]:[],...a],{currentSection:k,registerHeading:j,unregisterHeading:w}=function(e){var t;let[s,r]=(0,l.useState)(null===(t=e[0])||void 0===t?void 0:t.slug),[a,n]=(0,l.useState)([]),i=(0,l.useCallback)(e=>{n(t=>[...t.filter(t=>e!==t.id),{id:e,top:f(e)}])},[]),d=(0,l.useCallback)(e=>{n(t=>t.filter(t=>e!==t.id))},[]);return(0,l.useEffect)(()=>{if(0===e.length||0===a.length)return;function t(){var e,t;let s=window.getComputedStyle(document.documentElement),l=parseFloat((null===(e=s.getPropertyValue("--scroll-mt").match(/[\d.]+/))||void 0===e?void 0:e[0])??0);l*=parseFloat((null===(t=s.fontSize.match(/[\d.]+/))||void 0===t?void 0:t[0])??16);let n=a.concat([]).sort((e,t)=>e.top-t.top),i=window.pageYOffset+l+1,d=n[0].id;for(let e=0;e<n.length;e++)i>=n[e].top&&(d=n[e].id);r(d)}window.addEventListener("scroll",t,{capture:!0,passive:!0}),t();let s=new window.ResizeObserver(()=>{for(let e of a)e.top=f(e.id)});return s.observe(document.body),()=>{s.disconnect(),window.removeEventListener("scroll",t,{capture:!0,passive:!0})}},[a,e]),{currentSection:s,registerHeading:i,unregisterHeading:d}}(v),{prev:N,next:y}=function(){let e=(0,d.useRouter)(),{nav:t}=(0,l.useContext)(o.l),s=Object.keys(t).flatMap(e=>t[e]),r=s.findIndex(t=>t.href===e.pathname);return{prev:r>-1?s[r-1]:void 0,next:r>-1?s[r+1]:void 0}}();return(0,r.jsxs)("div",{className:"max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16",children:[(0,r.jsx)(x,{title:t.title,description:t.description,repo:t.repo,badge:{key:"Tailwind CSS version",value:t.featureVersion},section:n}),(0,r.jsx)(p.Provider,{value:{registerHeading:j,unregisterHeading:w},children:s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{...s}),(0,r.jsx)("div",{id:"content-wrapper",className:"relative z-20 prose prose-slate mt-12 dark:prose-dark",children:(0,r.jsx)(u.Zo,{components:g.d,children:e})})]}):(0,r.jsx)("div",{id:"content-wrapper",className:"relative z-20 prose prose-slate mt-8 dark:prose-dark",children:(0,r.jsx)(u.Zo,{components:g.d,children:e})})}),(0,r.jsx)(h.E,{previous:N,next:y,children:(0,r.jsx)(m(),{href:`https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages${c.pathname}.mdx`,className:"hover:text-slate-900 dark:hover:text-slate-400",children:"Edit this page on GitHub"})}),(0,r.jsx)("div",{className:"fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block",children:v.length>0&&(0,r.jsx)(b,{tableOfContents:v,currentSection:k})})]})}},39566:function(e,t,s){s.d(t,{d:function(){return c}});var r=s(85893),l=s(50224),a=s(22869),n=s(4493),i=s(41664),d=s.n(i);function o(e){return(0,r.jsxs)("div",{className:"relative not-prose [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 my-12 first:mt-0 last:mb-0 rounded-2xl overflow-hidden [figure>&]:my-0",children:[(0,r.jsx)("img",{...e,decoding:"async"}),(0,r.jsx)("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"})]})}let c={Heading:l.X,a:d(),img:o,Img:o,Example:a.e,Editor:n.ML}}}]);