(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3759],{65122:function(n,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-width",function(){return s(3778)}])},3778:function(n,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var e=s(85893),a=s(11151),o=s(72788),i=s(36336),l=s(3536),r=s(10757),p=s(832);let c=o.L,u=i.X_;function d(n){let t=Object.assign({p:"p",code:"code",pre:"pre",a:"a",hr:"hr"},(0,a.ah)(),n.components),{Heading:s,Example:o,Editor:i}=t;return i||h("Editor",!0),o||h("Example",!0),s||h("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(s,{level:3,id:"setting-the-ring-offset-width",children:"Setting the ring offset width"}),"\n",(0,e.jsxs)(t.p,{children:["Use the ",(0,e.jsx)(t.code,{children:"ring-offset-{width}"})," utilities to simulate an offset by adding solid white box-shadow and increasing the thickness of the accompanying outline ring to accommodate the offset."]}),"\n",(0,e.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-sm text-center font-bold leading-6">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-0</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-0 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button A</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-2</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-2 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button B</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-4</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-4 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button C</button>\n  </div>\n</div>'}),"\n",(0,e.jsx)(t.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring ring-pink-500 <span class="code-highlight bg-code-highlight">ring-offset-0</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring ring-pink-500 <span class="code-highlight bg-code-highlight">ring-offset-2</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring ring-pink-500 <span class="code-highlight bg-code-highlight">ring-offset-4</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s,{level:3,id:"changing-the-offset-color",children:"Changing the offset color"}),"\n",(0,e.jsxs)(t.p,{children:["You can’t actually offset a box-shadow in CSS, so we have to fake it using a solid color shadow that matches the parent background color. We use white by default, but if you are adding a ring offset over a different background color, you should use the ",(0,e.jsx)(t.code,{children:"ring-offset-{color}"})," utilities to match the parent background color:"]}),"\n",(0,e.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="grid place-content-center text-white text-sm text-center font-bold leading-6">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">\n      <span class="dark:hidden">ring-offset-slate-50</span>\n      <span class="hidden dark:inline">dark:ring-offset-slate-900</span>\n    </p>\n    <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-offset-slate-50 ring-pink-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Save Changes</button>\n  </div>\n</div>'}),"\n",(0,e.jsx)(t.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ring ring-pink-500 <span class="code-highlight bg-code-highlight">ring-offset-2</span> <span class="code-highlight bg-code-highlight">ring-offset-slate-50</span> <span class="code-highlight bg-code-highlight">dark:ring-offset-slate-900</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Save Changes\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(t.p,{children:["For more information, see the ",(0,e.jsx)(t.a,{href:"/docs/ring-offset-color",children:"ring offset color"})," documentation."]}),"\n",(0,e.jsx)(t.hr,{}),"\n",(0,e.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(p.k,{defaultClass:"ring-2 ring-offset-2",featuredClass:"ring-offset-4",element:"button"}),"\n",(0,e.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(r.p,{defaultClass:"ring-2 ring-offset-2",featuredClass:"ring-offset-4",element:"button"}),"\n",(0,e.jsx)(t.hr,{}),"\n",(0,e.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(t.p,{children:["To customize which ring offset width utilities are generated, add your custom values under ",(0,e.jsx)(t.code,{children:"ringOffsetWidth"})," key in the ",(0,e.jsx)(t.code,{children:"theme"})," section of your ",(0,e.jsx)(t.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">ringOffsetWidth</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">\'3\'</span><span class="token operator">:</span> <span class="token string">\'3px\'</span><span class="token punctuation">,</span>\n        <span class="token string-property property">\'6\'</span><span class="token operator">:</span> <span class="token string">\'6px\'</span><span class="token punctuation">,</span>\n        <span class="token string-property property">\'10\'</span><span class="token operator">:</span> <span class="token string">\'10px\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,e.jsxs)(t.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(t.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(l.k,{property:"ring-offset",featuredClass:"ring-offset-[3px]"})]})}function g(n={}){return(0,e.jsx)(u,Object.assign({},n,{children:(0,e.jsx)(d,n)}))}var f=g;function h(n,t){throw Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:c,classes:{utilities:{".ring-offset-0":{"--tw-ring-offset-width":"0px"},".ring-offset-1":{"--tw-ring-offset-width":"1px"},".ring-offset-2":{"--tw-ring-offset-width":"2px"},".ring-offset-4":{"--tw-ring-offset-width":"4px"},".ring-offset-8":{"--tw-ring-offset-width":"8px"}},transformProperties:({selector:n,properties:t})=>(t["box-shadow"]="0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow)",t)},meta:{title:"Ring Offset Width",description:"Utilities for simulating an offset when adding outline rings."},slug:"ring-offset-width",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the ring offset width",slug:"setting-the-ring-offset-width",children:[]},{title:"Changing the offset color",slug:"changing-the-offset-color",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,t,s){"use strict";s.d(t,{Zo:function(){return l},ah:function(){return o}});var e=s(67294);let a=e.createContext({});function o(n){let t=e.useContext(a);return e.useMemo(()=>"function"==typeof n?n(t):{...t,...n},[t,n])}let i={};function l({components:n,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||i:o(n),e.createElement(a.Provider,{value:l},t)}}},function(n){n.O(0,[3430,9786,9495,224,7308,5265,9774,2888,179],function(){return n(n.s=65122)}),_N_E=n.O()}]);