(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6846],{92189:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-property",function(){return a(9088)}])},9088:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(85893),e=a(11151),o=a(72788),i=a(36336),r=a(3536),p=a(10757),l=a(832);let c=o.L,u=i.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:o,Editor:i}=s;return i||k("Editor",!0),o||k("Example",!0),a||k("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"controlling-transitioned-properties",children:"Controlling transitioned properties"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"transition-{properties}"})," utilities to specify which properties should transition when they change."]}),"\n",(0,t.jsx)(o,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex justify-around text-white text-sm font-bold leading-6">\n  <button class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300">\n    Save Changes\n  </button>\n</div>'},{hint:"Hover the button to see the expected behaviour"})),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transition</span> ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Save Changes\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"prefers-reduced-motion",children:"Prefers-reduced-motion"}),"\n",(0,t.jsxs)(s.p,{children:["For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the ",(0,t.jsx)(s.code,{children:"motion-safe"})," and ",(0,t.jsx)(s.code,{children:"motion-reduce"})," variants:"]}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition transform hover:-translate-y-1 <span class="code-highlight bg-code-highlight">motion-reduce:transition-none motion-reduce:hover:transform-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(l.k,{featuredClass:"transition-all"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(p.p,{featuredClass:"transition-all"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides transition-property utilities for seven common property combinations. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.transitionProperty"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.transitionProperty"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">transitionProperty</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'height\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'height\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'spacing\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'margin, padding\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(r.k,{property:"transition-property",featuredClass:"transition-[height]"})]})}function h(n={}){return(0,t.jsx)(u,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var g=h;function k(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}h.layoutProps={Layout:c,classes:{utilities:{".transition-none":{"transition-property":"none"},".transition-all":{"transition-property":"all","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition":{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-colors":{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-opacity":{"transition-property":"opacity","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-shadow":{"transition-property":"box-shadow","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-transform":{"transition-property":"transform","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"}}},meta:{title:"Transition Property",description:"Utilities for controlling which CSS properties transition."},slug:"transition-property",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Controlling transitioned properties",slug:"controlling-transitioned-properties",children:[]},{title:"Prefers-reduced-motion",slug:"prefers-reduced-motion",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return r},ah:function(){return o}});var t=a(67294);let e=t.createContext({});function o(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let i={};function r({components:n,children:s,disableParentContext:a}){let r;return r=a?"function"==typeof n?n({}):n||i:o(n),t.createElement(e.Provider,{value:r},s)}}},function(n){n.O(0,[3430,9786,9495,224,7308,5265,9774,2888,179],function(){return n(n.s=92189)}),_N_E=n.O()}]);