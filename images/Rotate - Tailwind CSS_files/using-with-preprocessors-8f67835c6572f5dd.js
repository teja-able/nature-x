(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4199],{79399:function(s,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/using-with-preprocessors",function(){return a(3471)}])},3471:function(s,n,a){"use strict";a.r(n);var e=a(85893),t=a(11151),o=a(72788),p=a(36336),c=a(30196);let l=o.L,i=p.X_;function r(s){let n=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",ul:"ul",li:"li",code:"code",pre:"pre"},(0,t.ah)(),s.components),{Heading:a}=n;return a||function(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.p,{children:["Since Tailwind is a PostCSS plugin, there’s nothing stopping you from using it with Sass, Less, Stylus, or other preprocessors, just like you can with other PostCSS plugins like ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",children:"Autoprefixer"}),"."]}),"\n",(0,e.jsxs)(n.p,{children:["It’s important to note that ",(0,e.jsx)(n.strong,{children:"you don’t need to use a preprocessor with Tailwind"})," — you typically write very little CSS on a Tailwind project anyway, so using a preprocessor just isn’t as beneficial as it would be in a project where you write a lot of custom CSS."]}),"\n",(0,e.jsx)(n.p,{children:"This guide only exists as a reference for people who need to integrate Tailwind with a preprocessor for reasons outside of their control, not because it is a recommended practice."}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-post-css-as-your-preprocessor",children:"Using PostCSS as your preprocessor"}),"\n",(0,e.jsx)(n.p,{children:"If you’re using Tailwind for a brand new project and don’t need to integrate it with any existing Sass/Less/Stylus stylesheets, you should highly consider relying on other PostCSS plugins to add the preprocessor features you use instead of using a separate preprocessor."}),"\n",(0,e.jsx)(n.p,{children:"This has a few benefits:"}),"\n",(0,e.jsxs)(n.ul,{role:"list",children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Your builds will be faster"}),". Since your CSS doesn’t have to be parsed and processed by multiple tools, your CSS will compile much quicker using only PostCSS."]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"No quirks or workarounds."})," Because Tailwind adds some new non-standard keywords to CSS (like ",(0,e.jsx)(n.code,{children:"@tailwind"}),", ",(0,e.jsx)(n.code,{children:"@apply"}),", ",(0,e.jsx)(n.code,{children:"theme()"}),", etc.), you often have to write your CSS in annoying, unintuitive ways to get a preprocessor to give you the expected output. Working exclusively with PostCSS avoids this."]}),"\n"]}),"\n",(0,e.jsxs)(n.p,{children:["For a fairly comprehensive list of available PostCSS plugins see the ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/postcss/blob/master/docs/plugins.md",children:"PostCSS GitHub repository"}),", but here are a few important ones we use on our own projects and can recommend."]}),"\n",(0,e.jsx)(a,{level:3,id:"build-time-imports",children:"Build-time imports"}),"\n",(0,e.jsxs)(n.p,{children:["One of the most useful features preprocessors offer is the ability to organize your CSS into multiple files and combine them at build time by processing ",(0,e.jsx)(n.code,{children:"@import"})," statements in advance, instead of in the browser."]}),"\n",(0,e.jsxs)(n.p,{children:["The canonical plugin for handling this with PostCSS is ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/postcss-import",children:"postcss-import"}),"."]}),"\n",(0,e.jsx)(n.p,{children:"To use it, install the plugin via npm:"}),"\n",(0,e.jsx)(n.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> postcss-import</code>'}}),"\n",(0,e.jsx)(n.p,{children:"Then add it as the very first plugin in your PostCSS configuration:"}),"\n",(0,e.jsx)(n.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token comment">// postcss.config.js</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">\'postcss-import\'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["One important thing to note about ",(0,e.jsx)(n.code,{children:"postcss-import"})," is that it strictly adheres to the CSS spec and disallows ",(0,e.jsx)(n.code,{children:"@import"})," statements anywhere except at the very top of a file."]}),"\n",(0,e.jsxs)(c.qm,{children:["Won’t work, ",(0,e.jsx)(n.code,{children:"@import"})," statements must come first"]}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token comment">/* components.css */</span>\n\n<span class="token selector"><span class="token class">.btn</span></span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.4\'</span><span class="token punctuation">)</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* Will not work */</span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./components/card"</span><span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsx)(n.p,{children:"The easiest solution to this problem is to never mix regular CSS and imports in the same file. Instead, create one main entry-point file for your imports, and keep all of your actual CSS in separate files."}),"\n",(0,e.jsx)(c.Vw,{children:"Use separate files for imports and actual CSS"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token comment">/* components.css */</span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./components/buttons.css"</span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./components/card.css"</span><span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token comment">/* components/buttons.css */</span>\n<span class="token selector"><span class="token class">.btn</span></span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.4\'</span><span class="token punctuation">)</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token comment">/* components/card.css */</span>\n<span class="token selector"><span class="token class">.card</span></span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["The place you are most likely to run into this situation is in your main CSS file that includes your ",(0,e.jsx)(n.code,{children:"@tailwind"})," declarations."]}),"\n",(0,e.jsxs)(c.qm,{children:["Won’t work, ",(0,e.jsx)(n.code,{children:"@import"})," statements must come first"]}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-base-styles.css"</span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-components.css"</span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-utilities.css"</span><span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["You can solve this by creating separate files for each ",(0,e.jsx)(n.code,{children:"@tailwind"})," declaration, and then importing those files in your main stylesheet. To make this easy, we provide separate files for each ",(0,e.jsx)(n.code,{children:"@tailwind"})," declaration out of the box that you can import directly from ",(0,e.jsx)(n.code,{children:"node_modules"}),"."]}),"\n",(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"postcss-import"})," plugin is smart enough to look for files in the ",(0,e.jsx)(n.code,{children:"node_modules"})," folder automatically, so you don’t need to provide the entire path — ",(0,e.jsx)(n.code,{children:'"tailwindcss/base"'})," for example is enough."]}),"\n",(0,e.jsx)(c.Vw,{children:"Import our provided CSS files"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"tailwindcss/base"</span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-base-styles.css"</span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"tailwindcss/components"</span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-components.css"</span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"tailwindcss/utilities"</span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./custom-utilities.css"</span><span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsx)(a,{level:3,id:"nesting",children:"Nesting"}),"\n",(0,e.jsxs)(n.p,{children:["To add support for nested declarations, we recommend our bundled ",(0,e.jsx)(n.code,{children:"tailwindcss/nesting"})," plugin, which is a PostCSS plugin that wraps ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/postcss-nested",children:"postcss-nested"})," or ",(0,e.jsx)(n.a,{href:"https://github.com/jonathantneal/postcss-nesting",children:"postcss-nesting"})," and acts as a compatibility layer to make sure your nesting plugin of choice properly understands Tailwind’s custom syntax."]}),"\n",(0,e.jsxs)(n.p,{children:["It’s included directly in the ",(0,e.jsx)(n.code,{children:"tailwindcss"})," package itself, so to use it all you need to do is add it to your PostCSS configuration, somewhere before Tailwind:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token comment">// postcss.config.js</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">\'postcss-import\'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string-property property">\'tailwindcss/nesting\'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["By default, it uses the ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/postcss-nested",children:"postcss-nested"})," plugin under the hood, which uses a Sass-like syntax and is the plugin that powers nesting support in the ",(0,e.jsx)(n.a,{href:"/docs/plugins#css-in-js-syntax",children:"Tailwind CSS plugin API"}),"."]}),"\n",(0,e.jsxs)(n.p,{children:["If you’d rather use ",(0,e.jsx)(n.a,{href:"https://github.com/jonathantneal/postcss-nesting",children:"postcss-nesting"})," (which is based on the work-in-progress ",(0,e.jsx)(n.a,{href:"https://drafts.csswg.org/css-nesting-1/",children:"CSS Nesting"})," specification), first install the plugin:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> postcss-nesting</code>'}}),"\n",(0,e.jsxs)(n.p,{children:["Then pass the plugin itself as an argument to ",(0,e.jsx)(n.code,{children:"tailwindcss/nesting"})," in your PostCSS configuration:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token comment">// postcss.config.js</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">\'postcss-import\'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string-property property">\'tailwindcss/nesting\'</span><span class="token operator">:</span> <span class="token string">\'postcss-nesting\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["This can also be helpful if for whatever reason you need to use a very specific version of ",(0,e.jsx)(n.code,{children:"postcss-nested"})," and want to override the version we bundle with ",(0,e.jsx)(n.code,{children:"tailwindcss/nesting"})," itself."]}),"\n",(0,e.jsxs)(n.p,{children:["Note that if you are using ",(0,e.jsx)(n.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env",children:(0,e.jsx)(n.code,{children:"postcss-preset-env"})})," in your project, you should make sure to disable nesting and let ",(0,e.jsx)(n.code,{children:"tailwindcss/nesting"})," handle it for you instead:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token comment">// postcss.config.js</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">\'postcss-import\'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string-property property">\'tailwindcss/nesting\'</span><span class="token operator">:</span> <span class="token string">\'postcss-nesting\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string-property property">\'postcss-preset-env\'</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">\'nesting-rules\'</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(a,{level:3,id:"variables",children:"Variables"}),"\n",(0,e.jsxs)(n.p,{children:["These days CSS variables (officially known as custom properties) have really good ",(0,e.jsx)(n.a,{href:"https://caniuse.com/#search=css%20custom%20properties",children:"browser support"}),", so you don’t need a preprocessor to use variables at all."]}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token pseudo-class">:root</span></span> <span class="token punctuation">{</span>\n  <span class="token variable">--theme-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#52b3d0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* ... */</span>\n\n<span class="token selector"><span class="token class">.btn</span></span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token variable">--theme-color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.p,{children:"We use CSS variables extensively within Tailwind itself, so if you can use Tailwind, you can use native CSS variables."}),"\n",(0,e.jsxs)(n.p,{children:["You may also find that most of the things you’ve used variables for in the past can be replaced with Tailwind’s ",(0,e.jsx)(n.code,{children:"theme()"})," function, which gives you access to all of your design tokens from your ",(0,e.jsx)(n.code,{children:"tailwind.config.js"})," file directly in your CSS:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.btn</span></span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'colors.blue.500\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.2\'</span><span class="token punctuation">)</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["Learn more about the ",(0,e.jsx)(n.code,{children:"theme()"})," function in our ",(0,e.jsx)(n.a,{href:"/docs/functions-and-directives#theme",children:"functions and directives documentation"}),";"]}),"\n",(0,e.jsx)(a,{level:3,id:"vendor-prefixes",children:"Vendor prefixes"}),"\n",(0,e.jsxs)(n.p,{children:["For automatically managing vendor prefixes in your CSS, you should use ",(0,e.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",children:"Autoprefixer"}),"."]}),"\n",(0,e.jsx)(n.p,{children:"To use it, install it via npm:"}),"\n",(0,e.jsx)(n.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> autoprefixer</code>'}}),"\n",(0,e.jsx)(n.p,{children:"Then add it to the very end of your plugin list in your PostCSS configuration:"}),"\n",(0,e.jsx)(n.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-sass-less-or-stylus",children:"Using Sass, Less, or Stylus"}),"\n",(0,e.jsxs)(n.p,{children:["For the best development experience, we highly recommend that you ",(0,e.jsx)(n.a,{href:"#using-post-css-as-your-preprocessor",children:"use PostCSS exclusively"}),", and that you don’t use preprocessors like Sass or Less in your Tailwind projects."]}),"\n",(0,e.jsx)(n.p,{children:"To use Tailwind with a preprocessing tool like Sass, Less, or Stylus, you’ll need to add an additional build step to your project that lets you run your preprocessed CSS through PostCSS. If you’re using Autoprefixer in your project, you already have something like this set up."}),"\n",(0,e.jsxs)(n.p,{children:["See our documentation on ",(0,e.jsx)(n.a,{href:"/docs/installation/using-postcss",children:"installing Tailwind as a PostCSS plugin"})," to learn more about integrating Tailwind into your existing build process."]}),"\n",(0,e.jsxs)(n.p,{children:["The most important thing to understand about using Tailwind with a preprocessor is that ",(0,e.jsx)(n.strong,{children:"preprocessors like Sass, Less, and Stylus run separately, before Tailwind"}),". This means that you can’t feed output from Tailwind’s ",(0,e.jsx)(n.code,{children:"theme()"})," function into a Sass color function for example, because the ",(0,e.jsx)(n.code,{children:"theme()"})," function isn’t actually evaluated until your Sass has been compiled to CSS and fed into PostCSS."]}),"\n",(0,e.jsx)(c.qm,{children:"Won’t work, Sass is processed first"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.alert</span></span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'colors.red.500\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token unit">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.p,{children:"Aside from that, some preprocessors have quirks when used with Tailwind, which are outlined with workarounds below."}),"\n",(0,e.jsx)(a,{level:3,id:"sass",children:"Sass"}),"\n",(0,e.jsxs)(n.p,{children:["When using Tailwind with Sass, using ",(0,e.jsx)(n.code,{children:"!important"})," with ",(0,e.jsx)(n.code,{children:"@apply"})," requires you to use interpolation to compile properly."]}),"\n",(0,e.jsx)(c.qm,{children:"Won’t work, Sass complains about !important"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.alert</span></span> <span class="token punctuation">{</span>\n  <span class="token atrule atapply"><span class="token rule">@apply</span> bg-red-500 <span class="token important">!important</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(c.Vw,{children:"Use interpolation as a workaround"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.alert</span></span> <span class="token punctuation">{</span>\n  <span class="token atrule atapply"><span class="token rule">@apply</span> bg-red-500 #</span><span class="token punctuation">{</span><span class="token important">!important</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["In addition to this, Sass has trouble with Tailwind’s ",(0,e.jsx)(n.code,{children:"screen()"})," function unless wrapped in parentheses."]}),"\n",(0,e.jsx)(c.qm,{children:"Won’t work, Sass will generate an error"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token function">screen</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.foo</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">blue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(c.Vw,{children:"Wrap the screen() function in parentheses"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token function">screen</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.foo</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">blue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.p,{children:"Technically this results in an extra set of parentheses around your media query, but it still works."}),"\n",(0,e.jsx)(a,{level:3,id:"stylus",children:"Stylus"}),"\n",(0,e.jsxs)(n.p,{children:["When using Tailwind with Stylus, you can’t use Tailwind’s ",(0,e.jsx)(n.code,{children:"@apply"})," feature without wrapping the entire CSS rule in ",(0,e.jsx)(n.code,{children:"@css"})," so that Stylus treats it as literal CSS."]}),"\n",(0,e.jsx)(c.qm,{children:"Won’t work, Stylus complains about @apply"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.card</span></span> <span class="token punctuation">{</span>\n  @apply rounded-lg bg-white p-4\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(c.Vw,{children:"Use @css to avoid processing as Stylus"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@css</span></span> <span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.card</span></span> <span class="token punctuation">{</span>\n    @apply rounded-lg bg-white p-4\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["This comes with a significant cost however, which is that ",(0,e.jsxs)(n.strong,{children:["you cannot use any Stylus features inside a ",(0,e.jsx)(n.code,{children:"@css"})," block"]}),"."]}),"\n",(0,e.jsxs)(n.p,{children:["Another option is to use the ",(0,e.jsx)(n.code,{children:"theme()"})," function instead of ",(0,e.jsx)(n.code,{children:"@apply"}),", and write out the actual CSS properties in long form:"]}),"\n",(0,e.jsx)(c.Vw,{children:"Use theme() instead of @apply"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.card</span></span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'borderRadius.lg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'colors.white\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'spacing.4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(n.p,{children:["In addition to this, Stylus has trouble with Tailwind’s ",(0,e.jsx)(n.code,{children:"screen()"})," function unless you use interpolation and wrap it in parentheses."]}),"\n",(0,e.jsx)(c.qm,{children:"Won’t work, Stylus will generate an error"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token function">screen</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.foo</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">blue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(c.Vw,{children:"Use interpolation and parentheses as a workaround"}),"\n",(0,e.jsx)(n.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span></span><span class="token punctuation">{</span><span class="token string">\'screen(md)\'</span><span class="token punctuation">}</span><span class="token selector"><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.foo</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">blue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(n.p,{children:"Technically this results in an extra set of parentheses around your media query, but it still works."})]})}function u(s={}){return(0,e.jsx)(i,Object.assign({},s,{children:(0,e.jsx)(r,s)}))}n.default=u,u.layoutProps={Layout:l,meta:{title:"Using with Preprocessors",description:"A guide to using Tailwind with common CSS preprocessors like Sass, Less, and Stylus."},slug:"using-with-preprocessors",tableOfContents:[{title:"Using PostCSS as your preprocessor",slug:"using-post-css-as-your-preprocessor",children:[{title:"Build-time imports",slug:"build-time-imports",children:[]},{title:"Nesting",slug:"nesting",children:[]},{title:"Variables",slug:"variables",children:[]},{title:"Vendor prefixes",slug:"vendor-prefixes",children:[]}]},{title:"Using Sass, Less, or Stylus",slug:"using-sass-less-or-stylus",children:[{title:"Sass",slug:"sass",children:[]},{title:"Stylus",slug:"stylus",children:[]}]}]}},30196:function(s,n,a){"use strict";a.d(n,{$o:function(){return p},Vw:function(){return t},qm:function(){return o}});var e=a(85893);function t({children:s}){return(0,e.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,e.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,e.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,e.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,e.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function o({children:s}){return(0,e.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,e.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,e.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,e.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,e.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function p({children:s}){return(0,e.jsxs)("div",{className:"mt-6 -mb-1 flex space-x-2",children:[(0,e.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,e.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,e.jsx)("p",{className:"m-0 text-slate-700 text-sm font-medium dark:text-slate-200",children:s})]})}},72788:function(s,n,a){"use strict";a.d(n,{L:function(){return c}});var e=a(85893),t=a(97903),o=a(77929),p=a(87308);function c(s){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.Dx,{children:s.layoutProps.meta.metaTitle||s.layoutProps.meta.title}),(0,e.jsx)(t.C,{nav:p.u,...s})]})}c.nav=p.u},11151:function(s,n,a){"use strict";a.d(n,{Zo:function(){return c},ah:function(){return o}});var e=a(67294);let t=e.createContext({});function o(s){let n=e.useContext(t);return e.useMemo(()=>"function"==typeof s?s(n):{...n,...s},[n,s])}let p={};function c({components:s,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof s?s({}):s||p:o(s),e.createElement(t.Provider,{value:c},n)}}},function(s){s.O(0,[3430,9786,9495,224,7308,9774,2888,179],function(){return s(s.s=79399)}),_N_E=s.O()}]);