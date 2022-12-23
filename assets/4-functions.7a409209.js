import{_ as d,a as m,b as _}from"./BaseWarningTitle.f5a386c9.js";import{_ as h,a as y,b as f}from"./BaseDisclaimerTitle.631caf82.js";import{q as b,o as P,c as w,b as n,f as s,t as c,B as x,s as a,e as l}from"./app.e6b4b7b5.js";const q={class:"markdown-body"},v=l("a",{target:"_blank",href:"https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions"},"Programming Functions",-1),F=c(`<h2 id="function-arguments" tabindex="-1">Function arguments</h2><p>A function can take <code>arguments</code> and <code>return values</code>:</p><p>In the following example, the function <strong>say_hello</strong> receives the argument \u201Cname\u201D and prints a greeting:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">say_hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_hello<span class="token punctuation">(</span><span class="token string">&#39;Carlos&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello Carlos</span>

<span class="token operator">&gt;&gt;</span> say_hello<span class="token punctuation">(</span><span class="token string">&#39;Wanda&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello Wanda</span>

<span class="token operator">&gt;&gt;</span> say_hello<span class="token punctuation">(</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \u4F60\u597D\uFF0C\u7F57\u65AF</span>
</code></pre><h2 id="" tabindex="-1">\u5173\u952E\u5B57\u53C2\u6570</h2><p>\u4E3A\u4E86\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7684\u660E\u786E\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 &quot;\u5173\u952E\u5B57\u53C2\u6570 &quot;\u5728\u6211\u4EEC\u7684\u51FD\u6570\u4E2D\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> greeting<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>\u95EE\u5019<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>\u540D\u5B57<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span> <span class="token comment"># \u6CA1\u6709\u5173\u952E\u5B57\u53C2\u6570</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_hi<span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello John</span>

<span class="token operator">&gt;&gt;</span> <span class="token comment"># \u6709\u5173\u952E\u5B57\u53C2\u6570</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_hi<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;Anna&#39;</span><span class="token punctuation">,</span> greeting<span class="token operator">=</span><span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \u4F60\u597D\uFF0C\u5B89\u5A1C</span>
</code></pre><h2 id="-1" tabindex="-1">\u8FD4\u56DE\u503C</h2><p>\u5F53\u4F7F\u7528<code>def</code>\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u65F6, \u4F60\u53EF\u4EE5\u7528<code>return</code>\u8BED\u53E5\u6307\u5B9A\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48\u3002\u4E00\u4E2A\u8FD4\u56DE\u8BED\u53E5\u7531\u4EE5\u4E0B\u5185\u5BB9\u7EC4\u6210\u3002</p><ul><li><p><code>return</code>\u5173\u952E\u5B57\u3002</p></li><li><p>\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u7684\u503C\u6216\u8868\u8FBE\u5F0F\u3002</p></li></ul><p>\`\`python</p><blockquote><blockquote><blockquote><p>def sum_two_numbers(number_1, number_2): \u2026 \u8FD4\u56DE number_1 + number_2 \u2026 result = sum_two_numbers(7, 8) print(result)</p></blockquote></blockquote></blockquote><h1 id="15" tabindex="-1">15</h1><pre><code>
## \u672C\u5730\u548C\u5168\u5C40\u8303\u56F4

- \u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u4EE3\u7801\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u5C40\u90E8\u53D8\u91CF\u3002

- \u7136\u800C\uFF0C\u5C40\u90E8\u4F5C\u7528\u57DF\u53EF\u4EE5\u8BBF\u95EE\u5168\u5C40\u53D8\u91CF\u3002

- \u4E00\u4E2A\u51FD\u6570\u7684\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u7684\u4EE3\u7801\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u5176\u4ED6\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u3002

- \u5982\u679C\u4E0D\u540C\u7684\u53D8\u91CF\u5728\u4E0D\u540C\u7684\u4F5C\u7528\u57DF\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u5B83\u4EEC\u4F7F\u7528\u76F8\u540C\u7684\u540D\u5B57\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EF\u4EE5\u6709\u4E00\u4E2A\u540D\u4E3Aspam\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u4E00\u4E2A\u540C\u6837\u540D\u4E3Aspam\u7684\u5168\u5C40\u53D8\u91CF\u3002

\`\`python
global_variable = &#39;I am available everywhere&#39;.

&gt;&gt;&gt; def some_function():
... print(global_variable) # \u56E0\u4E3A\u662F\u5168\u5C40\u7684
... local_variable = &quot;\u53EA\u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\u53EF\u7528&quot;
... print(local_variable)
...
&gt;&gt; # \u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u51FA\u9519\uFF0C\u56E0\u4E3A
&gt;&gt; # &#39;local_variable&#39;\u53EA\u5B58\u5728\u4E8E&#39;some_function&#39;\u5185\u90E8
&gt;&gt;&gt; print(local_variable)
\u56DE\u6EAF\uFF08\u6700\u8FD1\u4E00\u6B21\u8C03\u7528\uFF09\u3002
  \u6587\u4EF6&quot;&lt;stdin&gt;&quot;\uFF0C\u7B2C10\u884C\uFF0C\u5728&lt;module&gt;\u4E2D
NameError: name &#39;local_variable&#39; \u6CA1\u6709\u5B9A\u4E49
</code></pre><h2 id="-2" tabindex="-1">\u5168\u5C40\u58F0\u660E</h2><p>\u5982\u679C\u4F60\u9700\u8981\u4ECE\u4E00\u4E2A\u51FD\u6570\u4E2D\u4FEE\u6539\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF, \u53EF\u4EE5\u4F7F\u7528global\u8BED\u53E5:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">spam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">global</span> eggs
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> eggs <span class="token operator">=</span> &#39;spam
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> eggs <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>eggs<span class="token punctuation">)</span>
</code></pre><p>\u6709\u56DB\u6761\u89C4\u5219\u53EF\u4EE5\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u662F\u5728\u5C40\u90E8\u8303\u56F4\u8FD8\u662F\u5168\u5C40\u8303\u56F4\u3002</p><ol><li><p>\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u5728\u5168\u5C40\u8303\u56F4\u5185\u4F7F\u7528\uFF08\u4E5F\u5C31\u662F\u5728\u6240\u6709\u51FD\u6570\u4E4B\u5916\uFF09\uFF0C\u90A3\u4E48\u5B83\u603B\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002</p></li><li><p>\u5982\u679C\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\u4E3A\u8BE5\u53D8\u91CF\u6709\u4E00\u4E2A\u5168\u5C40\u58F0\u660E\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002</p></li><li><p>\u5426\u5219\uFF0C\u5982\u679C\u8BE5\u53D8\u91CF\u5728\u51FD\u6570\u4E2D\u7684\u8D4B\u503C\u8BED\u53E5\u4E2D\u88AB\u4F7F\u7528\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u3002</p></li><li><p>\u4F46\u5982\u679C\u8BE5\u53D8\u91CF\u6CA1\u6709\u5728\u8D4B\u503C\u8BED\u53E5\u4E2D\u4F7F\u7528\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002</p></li></ol><h2 id="lambda" tabindex="-1">Lambda\u51FD\u6570</h2><p>\u5728Python\u4E2D\uFF0Clambda\u51FD\u6570\u662F\u4E00\u4E2A\u5355\u884C\u7684\u533F\u540D\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u6709\u4EFB\u610F\u6570\u91CF\u7684\u53C2\u6570\uFF0C\u4F46\u53EA\u80FD\u6709\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002</p>`,21),A=l("a",{target:"_blank",href:"https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions"},"Python 3 Tutorial",-1),I=c(`<p>This function:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> add<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 8</span>
</code></pre><p>\u76F8\u5F53\u4E8E_lambda_\u51FD\u6570:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span> add <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">+</span> y
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> add<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 8</span>
</code></pre><p>\u50CF\u666E\u901A\u7684\u5D4C\u5957\u51FD\u6570\u4E00\u6837\uFF0Clambdas\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u8BCD\u6CD5\u95ED\u5305\u5DE5\u4F5C\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">make_adder</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">return</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">+</span> n
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> plus_3 <span class="token operator">=</span> make_adder<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span> plus_5 <span class="token operator">=</span> make_adder<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> plus_3<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment"># 7</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> plus_5<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment"># 9</span>
</code></pre>`,6),E="Python Functions - Python Cheatsheet",J="In Python, A function is a block of organized code that is used to perform a single task.",L=[{property:"og:title",content:"Python Functions - Python Cheatsheet"},{property:"og:description",content:"In Python, A function is a block of organized code that is used to perform a single task."},{name:"description",content:"In Python, A function is a block of organized code that is used to perform a single task."}],S={__name:"4-functions",setup(z,{expose:i}){const t={title:"Python Functions - Python Cheatsheet",description:"In Python, A function is a block of organized code that is used to perform a single task.",meta:[{property:"og:title",content:"Python Functions - Python Cheatsheet"},{property:"og:description",content:"In Python, A function is a block of organized code that is used to perform a single task."},{name:"description",content:"In Python, A function is a block of organized code that is used to perform a single task."}]};return i({frontmatter:t}),b({title:"Python Functions - Python Cheatsheet",meta:[{property:"og:title",content:"Python Functions - Python Cheatsheet"},{property:"og:description",content:"In Python, A function is a block of organized code that is used to perform a single task."},{name:"description",content:"In Python, A function is a block of organized code that is used to perform a single task."}]}),(H,N)=>{const u=x,o=y,p=f,e=h,r=m,k=_,g=d;return P(),w("div",q,[n(u,{title:t.title,description:t.description},{default:s(()=>[a(" Python Functions ")]),_:1},8,["title","description"]),n(e,null,{default:s(()=>[n(o,null,{default:s(()=>[v]),_:1}),n(p,null,{default:s(()=>[a(" A function is a block of organized code that is used to perform a single task. They provide better modularity for your application and reuse-ability. ")]),_:1})]),_:1}),F,n(e,null,{default:s(()=>[n(o,null,{default:s(()=>[a(" From the "),A]),_:1}),n(p,null,{default:s(()=>[a(" lambda is a minimal function definition that can be used inside an expression. Unlike FunctionDef, body holds a single node. ")]),_:1})]),_:1}),n(g,null,{default:s(()=>[n(r,null,{default:s(()=>[a(" Single line expression ")]),_:1}),n(k,null,{default:s(()=>[a(" Lambda functions can only evaluate an expression, like a single line of code. ")]),_:1})]),_:1}),I])}}};export{S as default,J as description,L as meta,E as title};