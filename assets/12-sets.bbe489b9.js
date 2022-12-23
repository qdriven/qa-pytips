import{_ as g,a as m,b as h}from"./BaseWarningTitle.f5a386c9.js";import{_ as b,a as _,b as y}from"./BaseDisclaimerTitle.631caf82.js";import{q as f,o as q,c as w,b as a,f as t,e as s,s as n,t as P,B as v,r as x}from"./app.e6b4b7b5.js";const T={class:"markdown-body"},z=s("p",null,[n("Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and "),s("strong",null,"sets"),n(".")],-1),S=s("a",{target:"_blank",href:"https://docs.python.org/3/tutorial/datastructures.html#sets"},"documentation",-1),C=s("h2",{id:"initializing-a-set",tabindex:"-1"},"Initializing a set",-1),B=s("p",null,[n("There are two ways to create sets: using curly braces "),s("code",null,"{}"),n(" and the built-in function "),s("code",null,"set()")],-1),E=s("code",null,"{}",-1),N=P(`<pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment"># this will create a dictionary instead of a set</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token comment"># &lt;class &#39;dict&#39;&gt;</span>
</code></pre><h2 id="unordered-collections-of-unique-elements" tabindex="-1">Unordered collections of unique elements</h2><p>A set automatically remove all the duplicate values.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s
<span class="token comment"># {1, 2, 3, 4}</span>
</code></pre><p>And as an unordered data type, they can\u2019t be indexed.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment"># File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment"># TypeError: &#39;set&#39; object does not support indexing</span>
</code></pre><h2 id="set-add-and-update" tabindex="-1">set add() and update()</h2><p>Using the <code>add()</code> method we can add a single element to the set.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s
<span class="token comment"># {1, 2, 3, 4}</span>
</code></pre><p>\u800C\u7528<code>update()</code>\uFF0C\u5219\u6709\u591A\u4E2A\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>s = {1, 2, 3} s.update([2, 3, 4, 5, 6]) s</p></blockquote></blockquote></blockquote><h1 id="1-2-3-4-5-6" tabindex="-1">{1, 2, 3, 4, 5, 6}</h1><pre><code>
## \u8BBE\u7F6E remove() \u548C discard()

\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u4ECE\u96C6\u5408\u4E2D\u5220\u9664\u4E00\u4E2A\u5143\u7D20\uFF0C\u4F46\u662F\`remove()\`\u5982\u679C\u503C\u4E0D\u5B58\u5728\uFF0C\u4F1A\u5F15\u53D1\u4E00\u4E2A\`key error&#39;\u3002

\`\`python
&gt;&gt;&gt; s = {1, 2, 3}
&gt;&gt; s.remove(3)
&gt;&gt;&gt; s
# {1, 2}

&gt;&gt; s.remove(3)
# \u56DE\u6EAF\uFF08\u6700\u8FD1\u4E00\u6B21\u8C03\u7528\uFF09\u3002
# \u6587\u4EF6&quot;&lt;stdin&gt;&quot;\uFF0C\u7B2C1\u884C\uFF0C\u5728&lt;module&gt;\u4E2D
# KeyError: 3
</code></pre><p>\`discard()&#39;\u4E0D\u4F1A\u5F15\u53D1\u4EFB\u4F55\u9519\u8BEF.</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>s = {1, 2, 3} s.discard(3) s</p></blockquote></blockquote></blockquote><h1 id="1-2" tabindex="-1">{1, 2}</h1><blockquote><blockquote><p>s.\u4E22\u5F03(3)</p></blockquote></blockquote><pre><code>
## set union()

\`union()\`\u6216\`|\`\u5C06\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\uFF0C\u5176\u4E2D\u5305\u542B\u6240\u63D0\u4F9B\u96C6\u5408\u7684\u6240\u6709\u5143\u7D20\u3002

\`\`\`python
&gt;&gt;&gt; s1 = {1, 2, 3}
&gt;&gt;&gt; s2 = {3, 4, 5}
&gt;&gt; s1.union(s2) # \u6216 &#39;s1 | s2&#39; \u3002
# {1, 2, 3, 4, 5}
</code></pre><h2 id="" tabindex="-1">\u8BBE\u7F6E\u4EA4\u53C9\u70B9</h2><p><code>intersection</code>\u6216<code>&amp;</code>\u5C06\u8FD4\u56DE\u4E00\u4E2A\u53EA\u5305\u542B\u6240\u6709\u5171\u540C\u5143\u7D20\u7684\u96C6\u5408\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> s1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span> <span class="token comment"># \u6216 &#39;s1 &amp; s2 &amp; s3&#39; \u3002</span>
<span class="token comment"># {3}</span>
</code></pre><h2 id="-1" tabindex="-1">\u8BBE\u7F6E\u5DEE\u5F02</h2><p><code>difference</code>\u6216<code>-</code>\u5C06\u53EA\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u96C6\u5408(\u88AB\u8C03\u7528\u7684\u96C6\u5408)\u6240\u7279\u6709\u7684\u5143\u7D20.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>

<span class="token operator">&gt;&gt;</span> s1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment"># \u6216&#39;s1 - s2</span>
<span class="token comment"># {1}</span>

<span class="token operator">&gt;&gt;</span> s2<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment"># \u6216 &#39;s2 - s1&#39; # {1}\u3002</span>
<span class="token comment"># {4}</span>
</code></pre><h2 id="set-symetric-difference" tabindex="-1">Set symetric_difference</h2><p><code>symetric_difference</code>\u6216<code>^</code>\u5C06\u8FD4\u56DE\u5B83\u4EEC\u4E4B\u95F4\u4E0D\u5171\u540C\u7684\u6240\u6709\u5143\u7D20.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> s1<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment"># \u6216 &#39;s1 ^ s2&#39; \u3002</span>
<span class="token comment"># {1, 4}</span>
</code></pre>`,29),I="Python Sets - Python Cheatsheet",K="Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets.",R=[{property:"og:title",content:"Python Sets - Python Cheatsheet"},{property:"og:description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."},{name:"description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."}],D={__name:"12-sets",setup(V,{expose:o}){const e={title:"Python Sets - Python Cheatsheet",description:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets.",meta:[{property:"og:title",content:"Python Sets - Python Cheatsheet"},{property:"og:description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."},{name:"description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."}]};return o({frontmatter:e}),f({title:"Python Sets - Python Cheatsheet",meta:[{property:"og:title",content:"Python Sets - Python Cheatsheet"},{property:"og:description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."},{name:"description",content:"Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets."}]}),(W,F)=>{const p=v,c=_,l=y,u=b,r=x("router-link"),i=m,d=h,k=g;return q(),w("div",T,[a(p,{title:e.title,description:e.description},{default:t(()=>[n(" Python Sets ")]),_:1},8,["title","description"]),z,a(u,null,{default:t(()=>[a(c,null,{default:t(()=>[n(" From the Python 3 "),S]),_:1}),a(l,null,{default:t(()=>[n(" A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. ")]),_:1})]),_:1}),s("p",null,[n("Read "),a(r,{to:"/blog/python-sets-what-why-how"},{default:t(()=>[n("Python Sets: What, Why and How")]),_:1}),n(" for a more in-deep reference.")]),C,B,a(k,null,{default:t(()=>[a(i,null,{default:t(()=>[n(" Empty Sets ")]),_:1}),a(d,null,{default:t(()=>[n(" When creating set, be sure to not use empty curly braces "),E,n(" or you will get an empty dictionary instead. ")]),_:1})]),_:1}),N])}}};export{D as default,K as description,R as meta,I as title};