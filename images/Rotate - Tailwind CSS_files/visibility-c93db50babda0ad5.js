(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{66761:function(s,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/visibility",function(){return t(27295)}])},27295:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var n=t(85893),e=t(11151),l=t(72788),o=t(36336),r=t(10757),p=t(832);let c=l.L,d=o.X_;function i(s){let a=Object.assign({p:"p",code:"code",a:"a",pre:"pre",hr:"hr"},(0,e.ah)(),s.components),{Heading:t,Example:l}=a;return l||b("Example",!0),t||b("Heading",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,n.jsx)(t,{level:3,id:"making-elements-invisible",children:"Making elements invisible"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"invisible"})," to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with ",(0,n.jsx)(a.code,{children:"hidden"})," from the ",(0,n.jsx)(a.a,{href:"/docs/display#hidden",children:"display"})," documentation)."]}),"\n",(0,n.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">\n  <div class="p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">01</div>\n  <div class="invisible p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">02</div>\n  <div class="p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">03</div>\n</div>'}),"\n",(0,n.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">invisible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,n.jsx)(t,{level:3,id:"collapsing-elements",children:"Collapsing elements"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"collapse"})," to hide table rows, row groups, columns, and column groups as if they were set to ",(0,n.jsx)(a.code,{children:"display: none"}),", but without impacting the size of other rows and columns."]}),"\n",(0,n.jsx)(a.p,{children:"This makes it possible to dynamically toggle rows and columns without affecting the table layout."}),"\n",(0,n.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="py-8">\n  <div class="mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400">Showing all rows</div>\n  <table class="border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">\n    <thead class="bg-slate-50 dark:bg-slate-700">\n      <tr>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Invoice #</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Client</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right">Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#100</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Pendant Publishing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$2,000.00</td>\n      </tr>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#101</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Kruger Industrial Smoothing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$545.00</td>\n      </tr>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#102</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">J. Peterman</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$10,000.25</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="mt-10 mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400">Hiding a row using <code class="text-xs text-slate-700 dark:text-slate-300">`collapse`</code></div>\n  <table class="border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">\n    <thead class="bg-slate-50 dark:bg-slate-700">\n      <tr>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Invoice #</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Client</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right">Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#100</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Pendant Publishing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$2,000.00</td>\n      </tr>\n      <tr class="collapse">\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#101</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Kruger Industrial Smoothing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$545.00</td>\n      </tr>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#102</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">J. Peterman</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$10,000.25</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="mt-10 mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400">Hiding a row using <code class="text-xs text-slate-700 dark:text-slate-300">`hidden`</code></div>\n  <table class="border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">\n    <thead class="bg-slate-50 dark:bg-slate-700">\n      <tr>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Invoice #</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left">Client</th>\n        <th class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right">Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#100</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Pendant Publishing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$2,000.00</td>\n      </tr>\n      <tr class="hidden">\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#101</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">Kruger Industrial Smoothing</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$545.00</td>\n      </tr>\n      <tr>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">#102</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400">J. Peterman</td>\n        <td class="border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums">$10,000.25</td>\n      </tr>\n    </tbody>\n  </table>\n</div>'},{p:"none"})),"\n",(0,n.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Invoice #<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Amount<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>#100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Pendant Publishing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>$2,000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">collapse</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>#101<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Kruger Industrial Smoothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>$545.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>#102<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>J. Peterman<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>$10,000.25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,n.jsx)(t,{level:3,id:"making-elements-visible",children:"Making elements visible"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"visible"})," to make an element visible. This is mostly useful for undoing the ",(0,n.jsx)(a.code,{children:"invisible"})," utility at different screen sizes."]}),"\n",(0,n.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">\n  <div class="p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">01</div>\n  <div class="visible p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">02</div>\n  <div class="p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">03</div>\n</div>'}),"\n",(0,n.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">visible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(t,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,n.jsx)(t,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,n.jsx)(p.k,{defaultClass:"visible",featuredClass:"invisible"}),"\n",(0,n.jsx)(t,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,n.jsx)(r.p,{defaultClass:"visible",featuredClass:"invisible"})]})}function u(s={}){return(0,n.jsx)(d,Object.assign({},s,{children:(0,n.jsx)(i,s)}))}var k=u;function b(s,a){throw Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}u.layoutProps={Layout:c,classes:{utilities:{".visible":{visibility:"visible"},".invisible":{visibility:"hidden"},".collapse":{visibility:"collapse"}}},meta:{title:"Visibility",description:"Utilities for controlling the visibility of an element."},slug:"visibility",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Making elements invisible",slug:"making-elements-invisible",children:[]},{title:"Collapsing elements",slug:"collapsing-elements",children:[]},{title:"Making elements visible",slug:"making-elements-visible",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},10757:function(s,a,t){"use strict";t.d(a,{p:function(){return e}});var n=t(85893);function e({defaultClass:s,featuredClass:a,element:t="div",children:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",a]})," to apply the ",(0,n.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),e||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,t).replace("{defaultClass} ",s?`${s} `:"").replace("{featuredClass}",a)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},832:function(s,a,t){"use strict";t.d(a,{k:function(){return e}});var n=t(85893);function e({property:s,utility:a,variant:t="hover",defaultClass:e,featuredClass:l,element:o="div",children:r}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[t,":",l]})," ","to only apply the ",(0,n.jsx)("code",{children:l})," utility on ",t,"."]}),r||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,o).replace("{defaultClass} ",e?`${e} `:"").replace("{variant}",t).replace("{featuredClass}",l)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(s,a,t){"use strict";t.d(a,{L:function(){return r}});var n=t(85893),e=t(97903),l=t(77929),o=t(87308);function r(s){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Dx,{children:s.layoutProps.meta.metaTitle||s.layoutProps.meta.title}),(0,n.jsx)(e.C,{nav:o.u,...s})]})}r.nav=o.u},11151:function(s,a,t){"use strict";t.d(a,{Zo:function(){return r},ah:function(){return l}});var n=t(67294);let e=n.createContext({});function l(s){let a=n.useContext(e);return n.useMemo(()=>"function"==typeof s?s(a):{...a,...s},[a,s])}let o={};function r({components:s,children:a,disableParentContext:t}){let r;return r=t?"function"==typeof s?s({}):s||o:l(s),n.createElement(e.Provider,{value:r},a)}}},function(s){s.O(0,[3430,9786,9495,224,7308,9774,2888,179],function(){return s(s.s=66761)}),_N_E=s.O()}]);