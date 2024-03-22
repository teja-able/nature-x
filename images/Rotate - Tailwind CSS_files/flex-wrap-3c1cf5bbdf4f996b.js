(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2981],{45534:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-wrap",function(){return a(92188)}])},92188:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(85893),e=a(11151),l=a(72788),p=a(36336),o=a(10757),c=a(832);let i=l.L,r=p.X_;function u(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr"},(0,e.ah)(),n.components),{Heading:a,Example:l}=s;return l||k("Example",!0),a||k("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"dont-wrap",children:"Don’t wrap"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"flex-nowrap"})," to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:"]}),"\n",(0,t.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-nowrap gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-sky rounded-lg">\n  <div class="w-2/5 flex-none last:pr-8">\n    <div class="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">01</div>\n  </div>\n  <div class="w-2/5 flex-none last:pr-8">\n    <div class="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">02</div>\n  </div>\n  <div class="w-2/5 flex-none last:pr-8">\n    <div class="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">03</div>\n  </div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-nowrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"wrap-normally",children:"Wrap normally"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"flex-wrap"})," to allow flex items to wrap:"]}),"\n",(0,t.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-wrap gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-indigo rounded-lg">\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">01</div>\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">02</div>\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">03</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"wrap-reversed",children:"Wrap reversed"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"flex-wrap-reverse"})," to wrap flex items in the reverse direction:"]}),"\n",(0,t.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-wrap-reverse gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg">\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>\n  <div class="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap-reverse</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"flex flex-wrap",featuredClass:"flex-wrap-reverse"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(o.p,{defaultClass:"flex flex-wrap",featuredClass:"flex-wrap-reverse"})]})}function d(n={}){return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(u,n)}))}var g=d;function k(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}d.layoutProps={Layout:i,classes:{utilities:{".flex-wrap":{"flex-wrap":"wrap"},".flex-wrap-reverse":{"flex-wrap":"wrap-reverse"},".flex-nowrap":{"flex-wrap":"nowrap"}}},meta:{title:"Flex Wrap",description:"Utilities for controlling how flex items wrap."},slug:"flex-wrap",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Don't wrap",slug:"dont-wrap",children:[]},{title:"Wrap normally",slug:"wrap-normally",children:[]},{title:"Wrap reversed",slug:"wrap-reversed",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},10757:function(n,s,a){"use strict";a.d(s,{p:function(){return e}});var t=a(85893);function e({defaultClass:n,featuredClass:s,element:a="div",children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,t.jsxs)("code",{children:["md:",s]})," to apply the ",(0,t.jsx)("code",{children:s})," utility at only medium screen sizes and above."]}),e||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,a).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",s)}})}),(0,t.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,t.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,t.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},832:function(n,s,a){"use strict";a.d(s,{k:function(){return e}});var t=a(85893);function e({property:n,utility:s,variant:a="hover",defaultClass:e,featuredClass:l,element:p="div",children:o}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,t.jsxs)("code",{children:[a,":",l]})," ","to only apply the ",(0,t.jsx)("code",{children:l})," utility on ",a,"."]}),o||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,p).replace("{defaultClass} ",e?`${e} `:"").replace("{variant}",a).replace("{featuredClass}",l)}})}),(0,t.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,s,a){"use strict";a.d(s,{L:function(){return o}});var t=a(85893),e=a(97903),l=a(77929),p=a(87308);function o(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,t.jsx)(e.C,{nav:p.u,...n})]})}o.nav=p.u},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return o},ah:function(){return l}});var t=a(67294);let e=t.createContext({});function l(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let p={};function o({components:n,children:s,disableParentContext:a}){let o;return o=a?"function"==typeof n?n({}):n||p:l(n),t.createElement(e.Provider,{value:o},s)}}},function(n){n.O(0,[3430,9786,9495,224,7308,9774,2888,179],function(){return n(n.s=45534)}),_N_E=n.O()}]);