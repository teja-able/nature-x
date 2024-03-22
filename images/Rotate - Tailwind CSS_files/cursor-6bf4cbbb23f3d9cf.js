(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8678],{90449:function(s,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/cursor",function(){return a(95237)}])},95237:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return h}});var e=a(85893),t=a(11151),o=a(72788),r=a(36336),c=a(3536),l=a(10757),p=a(832);let i=o.L,u=r.X_;function d(s){let n=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,t.ah)(),s.components),{Heading:a,Example:o,Editor:r}=n;return r||k("Editor",!0),o||k("Example",!0),a||k("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(a,{level:3,id:"setting-the-cursor-style",children:"Setting the cursor style"}),"\n",(0,e.jsxs)(n.p,{children:["Use the ",(0,e.jsx)(n.code,{children:"cursor-{style}"})," to control which cursor is displayed when hovering over an element."]}),"\n",(0,e.jsx)(o,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-around">\n  <button type="button" class="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer" tabindex="-1">\n    Submit\n  </button>\n  <button type="button" class="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress" tabindex="-1">\n    Saving...\n  </button>\n  <button type="button" class="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed" tabindex="-1" disabled>\n    Confirm\n  </button>\n</div>'},{hint:"Hover over each button to see the cursor change"})),"\n",(0,e.jsx)(n.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">cursor-pointer</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Submit\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">cursor-progress</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Saving...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">cursor-not-allowed</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Confirm\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(p.k,{defaultClass:"cursor-not-allowed",featuredClass:"cursor-auto",variant:"focus"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(l.p,{defaultClass:"cursor-not-allowed",featuredClass:"cursor-auto"}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(n.p,{children:["By default, Tailwind includes ",(0,e.jsx)(n.code,{children:"cursor"})," utilities for many built in options. You can customize these values by editing ",(0,e.jsx)(n.code,{children:"theme.cursor"})," or ",(0,e.jsx)(n.code,{children:"theme.extend.cursor"})," in your ",(0,e.jsx)(n.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(r,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">cursor</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'fancy\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'url(hand.cur), pointer\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(n.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(n.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(c.k,{property:"cursor",featuredClass:"cursor-[url(hand.cur),_pointer]"})]})}function g(s={}){return(0,e.jsx)(u,Object.assign({},s,{children:(0,e.jsx)(d,s)}))}var h=g;function k(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:i,classes:{utilities:{".cursor-auto":{cursor:"auto"},".cursor-default":{cursor:"default"},".cursor-pointer":{cursor:"pointer"},".cursor-wait":{cursor:"wait"},".cursor-text":{cursor:"text"},".cursor-move":{cursor:"move"},".cursor-help":{cursor:"help"},".cursor-not-allowed":{cursor:"not-allowed"},".cursor-none":{cursor:"none"},".cursor-context-menu":{cursor:"context-menu"},".cursor-progress":{cursor:"progress"},".cursor-cell":{cursor:"cell"},".cursor-crosshair":{cursor:"crosshair"},".cursor-vertical-text":{cursor:"vertical-text"},".cursor-alias":{cursor:"alias"},".cursor-copy":{cursor:"copy"},".cursor-no-drop":{cursor:"no-drop"},".cursor-grab":{cursor:"grab"},".cursor-grabbing":{cursor:"grabbing"},".cursor-all-scroll":{cursor:"all-scroll"},".cursor-col-resize":{cursor:"col-resize"},".cursor-row-resize":{cursor:"row-resize"},".cursor-n-resize":{cursor:"n-resize"},".cursor-e-resize":{cursor:"e-resize"},".cursor-s-resize":{cursor:"s-resize"},".cursor-w-resize":{cursor:"w-resize"},".cursor-ne-resize":{cursor:"ne-resize"},".cursor-nw-resize":{cursor:"nw-resize"},".cursor-se-resize":{cursor:"se-resize"},".cursor-sw-resize":{cursor:"sw-resize"},".cursor-ew-resize":{cursor:"ew-resize"},".cursor-ns-resize":{cursor:"ns-resize"},".cursor-nesw-resize":{cursor:"nesw-resize"},".cursor-nwse-resize":{cursor:"nwse-resize"},".cursor-zoom-in":{cursor:"zoom-in"},".cursor-zoom-out":{cursor:"zoom-out"}},rowStyle:({css:s})=>s,preview:(s,{className:n,utility:a})=>{let o=Object.assign({td:"td",img:"img"},(0,t.ah)());return(0,e.jsx)(o.td,{className:`align-middle ${n}`,children:".cursor-none"!==a&&(0,e.jsx)(o.img,{className:"w-6 h-6 mx-auto drop-shadow",src:`/img/cursors/${a.substr(1)}.svg`})})}},meta:{title:"Cursor",description:"Utilities for controlling the cursor style when hovering over an element."},slug:"cursor",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the cursor style",slug:"setting-the-cursor-style",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(s,n,a){"use strict";a.d(n,{Zo:function(){return c},ah:function(){return o}});var e=a(67294);let t=e.createContext({});function o(s){let n=e.useContext(t);return e.useMemo(()=>"function"==typeof s?s(n):{...n,...s},[n,s])}let r={};function c({components:s,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof s?s({}):s||r:o(s),e.createElement(t.Provider,{value:c},n)}}},function(s){s.O(0,[3430,9786,9495,224,7308,5265,9774,2888,179],function(){return s(s.s=90449)}),_N_E=s.O()}]);