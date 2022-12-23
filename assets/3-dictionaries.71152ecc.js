import{_ as i,a as r,b as k}from"./BaseDisclaimerTitle.631caf82.js";import{q as g,o as d,c as h,b as a,f as t,e as s,s as n,t as m,B as b}from"./app.e6b4b7b5.js";const _={class:"markdown-body"},y=s("p",null,[n("\u5728Python\u4E2D\uFF0C\u5B57\u5178\u662F\u4E00\u4E2A_\u6709\u5E8F\u7684_\uFF08\u6765\u81EAPython > 3.7\uFF09"),s("code",null,"key"),n(": "),s("code",null,"value"),n("\u5BF9\u7684\u96C6\u5408\u3002")],-1),f=s("a",{target:"_blank",href:"https://docs.python.org/3/tutorial/datastructures.html#dictionaries"},"documentation",-1),w=s("code",null,"del",-1),q=m(`<p>Example Dictionary:</p><pre class="language-python"><code class="language-python">my_cat <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;size&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;fat&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;color&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;gray&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;disposition&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;loud&#39;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="values" tabindex="-1">values()</h2><p><code>values()</code>\u65B9\u6CD5\u83B7\u5F97\u5B57\u5178\u7684**\u503C\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>pet = {\u2018color\u2019: \u2018red\u2019, \u2018age\u2019: 42} for value in pet.values(): \u2026 print(value) \u2026</p></blockquote></blockquote></blockquote><h1 id="" tabindex="-1">\u7EA2\u8272</h1><h1 id="42" tabindex="-1">42</h1><pre><code>
## keys()

\`keys()\`\u65B9\u6CD5\u83B7\u5F97\u5B57\u5178\u4E2D\u7684**keys**\u3002

\`\`python
&gt;&gt;&gt; pet = {&#39;color&#39;: &#39;red&#39;, &#39;age&#39;: 42}
&gt;&gt; for key in pet.keys():
... print(key)
...
# \u989C\u8272
#\u5E74\u9F84
</code></pre><p>\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528**.keys()**\uFF0C\u56E0\u4E3A\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5C06\u5FAA\u73AF\u6D4F\u89C8\u952E\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>pet = {\u2018color\u2019: \u2018red\u2019, \u2018age\u2019: 42} for key in pet: \u2026 print(key) \u2026</p></blockquote></blockquote></blockquote><h1 id="-1" tabindex="-1">\u989C\u8272</h1><p>#\u5E74\u9F84</p><pre><code>
## items()

\`items()\`\u65B9\u6CD5\u83B7\u53D6\u4E00\u4E2A\u5B57\u5178\u4E2D\u7684**\u9879\uFF0C\u5E76\u4EE5&lt;router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type&gt;Tuple&lt;/router-link&gt;\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002

\`\`\`python
&gt;&gt;&gt; pet = {&#39;color&#39;: &#39;red&#39;, &#39;age&#39;: 42}
&gt;&gt; for item in pet.items():
... print(item)
...
# (&#39;\u989C\u8272&#39;, &#39;\u7EA2\u8272&#39;)
# (&#39;\u5E74\u9F84&#39;, 42)
</code></pre><p>\u4F7F\u7528<code>keys()</code>, <code>values()</code>, \u548C<code>items()</code>\u65B9\u6CD5, \u4E00\u4E2Afor\u5FAA\u73AF\u53EF\u4EE5\u5206\u522B\u8FED\u4EE3\u5B57\u5178\u4E2D\u7684key, values, \u6216key-value\u5BF9\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>pet = {\u2018color\u2019: \u2018red\u2019, \u2018age\u2019: 42} for key, value in pet.items(): \u2026 print(f\u2019Key: {key} Value: {value}&#39;) \u2026</p></blockquote></blockquote></blockquote><h1 id="-2" tabindex="-1">\u5173\u952E\uFF1A\u989C\u8272 \u503C\uFF1A\u7EA2\u8272</h1><h1 id="key-age-value-42" tabindex="-1">Key: age Value: 42</h1><pre><code>
## get()

\`get()\`\u65B9\u6CD5\u901A\u8FC7\u4F7F\u7528\u952E\u6765\u8FD4\u56DE\u4E00\u4E2A\u9879\u76EE\u7684\u503C\u3002\u5982\u679C\u952E\u503C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\`None&#39;\u3002

\`\`python
&gt;&gt;&gt; wife = {&#39;name&#39;: &#39;Rose&#39;, &#39;age&#39;: 33}

&gt;&gt; f&#39;\u6211\u59BB\u5B50\u7684\u540D\u5B57\u662F {wife.get(&quot;name&quot;)}&#39;
# &#39;\u6211\u59BB\u5B50\u7684\u540D\u5B57\u662FRose&#39;

&gt;&gt; f&#39;\u5979\u662F {wife.get(&quot;age&quot;)}\u5C81\u3002
# &#39;\u5979\u4ECA\u5E7433\u5C81\u4E86\u3002

&gt;&gt; f&#39;\u5979\u6DF1\u7231\u7740{wife.get(&quot;\u4E08\u592B&quot;)}&#39;
# &#39;\u5979\u6DF1\u6DF1\u5730\u7231\u7740\u65E0&#39;
</code></pre><p>\u4F60\u4E5F\u53EF\u4EE5\u628A\u9ED8\u8BA4\u7684<code>None</code>\u503C\u6539\u4E3A\u4F60\u9009\u62E9\u7684\u5176\u4ED6\u503C\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">}</span>

<span class="token operator">&gt;&gt;</span> <span class="token string-interpolation"><span class="token string">f&#39;\u5979\u6DF1\u7231\u7740</span><span class="token interpolation"><span class="token punctuation">{</span>wife<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;husband&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lover&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
<span class="token comment"># &#39;\u5979\u6DF1\u6DF1\u5730\u7231\u7740\u7231\u4EBA&#39;</span>
</code></pre><h2 id="setdefault" tabindex="-1">\u7528setdefault()\u6DFB\u52A0\u9879\u76EE</h2><p>\u53EF\u4EE5\u7528\u8FD9\u79CD\u65B9\u5F0F\u5411\u5B57\u5178\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u9879\u76EE\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> \u5982\u679C<span class="token string">&#39;has_hair&#39;</span>\u4E0D\u5728\u59BB\u5B50\u4E2D\u3002
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> wife<span class="token punctuation">[</span><span class="token string">&#39;has_hair&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre><p>\u4F7F\u7528<code>setdefault</code>\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u540C\u6837\u7684\u4EE3\u7801\u66F4\u52A0\u7B80\u77ED\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> wife<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;has_hair&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> \u59BB\u5B50
<span class="token comment"># {&#39;name&#39;: &#39;Rose&#39;, &#39;age&#39;: 33, &#39;has_hair&#39;: True}</span>
</code></pre><h2 id="-3" tabindex="-1">\u79FB\u9664\u9879\u76EE</h2><h3 id="pop" tabindex="-1">pop()</h3><p><code>pop()</code>\u65B9\u6CD5\u6839\u636E\u7ED9\u5B9A\u7684\u952E\u6765\u5220\u9664\u5E76\u8FD4\u56DE\u4E00\u4E2A\u9879\u76EE\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5934\u53D1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;\u68D5\u8272&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 33</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> \u59BB\u5B50
<span class="token comment"># {&#39;name&#39;: &#39;Rose&#39;, &#39;hair&#39;: &#39;brown&#39;}</span>
</code></pre><h3 id="popitem" tabindex="-1">popitem()</h3><p><code>popitem()</code>\u65B9\u6CD5\u5220\u9664\u5B57\u5178\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u9879\u76EE\uFF0C\u5E76\u8FD4\u56DE\u5B83\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5934\u53D1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;\u68D5\u8272&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;&gt;</span><span class="token operator">&gt;</span> wife<span class="token punctuation">.</span>popitem<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># (&#39;\u5934\u53D1&#39;, &#39;\u68D5\u8272&#39;)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> \u59BB\u5B50
<span class="token comment"># {&#39;name&#39;: &#39;Rose&#39;, &#39;age&#39;: 33}</span>
</code></pre><h3 id="del" tabindex="-1">del()</h3><p><code>del()</code>\u65B9\u6CD5\u6839\u636E\u7ED9\u5B9A\u7684\u952E\u6765\u5220\u9664\u4E00\u4E2A\u9879\u76EE\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5934\u53D1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;\u68D5\u8272&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> <span class="token keyword">del</span> wife<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span> \u59BB\u5B50
<span class="token comment"># {&#39;name&#39;: &#39;Rose&#39;, &#39;hair&#39;: &#39;brown&#39;}</span>
</code></pre><h3 id="clear" tabindex="-1">clear()</h3><p><code>clear()</code>\u65B9\u6CD5\u4F1A\u5220\u9664\u5B57\u5178\u4E2D\u7684\u6240\u6709\u9879\u76EE\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>wife = {\u2018name\u2019: \u2018Rose\u2019, \u2018age\u2019: 33, \u2018\u5934\u53D1\u2019: \u2018\u68D5\u8272\u2019} wife.clear() \u59BB\u5B50</p></blockquote></blockquote></blockquote><h1 id="-4" tabindex="-1">{}</h1><pre><code>
## \u68C0\u67E5\u5B57\u5178\u4E2D\u7684\u952E

\`\`\`python
&gt;&gt;&gt; person = {&#39;name&#39;: &#39;Rose&#39;, &#39;age&#39;: 33}

&gt;&gt; &#39;name&#39; in person.key()
# \u771F\u5B9E

&gt;&gt;&gt; &#39;\u8EAB\u9AD8&#39; in person.key()
# False

&gt;&gt;&gt; &#39;\u76AE\u80A4&#39; in person # \u4F60\u53EF\u4EE5\u7701\u7565keys()
# False
</code></pre><h2 id="-5" tabindex="-1">\u68C0\u67E5\u5B57\u5178\u4E2D\u7684\u503C</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">}</span>

<span class="token operator">&gt;&gt;</span> <span class="token string">&#39;Rose&#39;</span> <span class="token keyword">in</span> person<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u771F\u5B9E</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">33</span> <span class="token keyword">in</span> person<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u771F\u5B9E</span>
</code></pre><h2 id="-6" tabindex="-1">\uFF03\uFF03\u6F02\u4EAE\u7684\u6253\u5370</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> \u8F93\u5165pprint

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> wife <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&#39;have_hair&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token string">&#39;hair_color&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;brown&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;height&#39;</span><span class="token punctuation">:</span> <span class="token number">1.6</span><span class="token punctuation">,</span> <span class="token string">&#39;eye_color&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;brown&#39;</span><span class="token punctuation">}</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pprint<span class="token punctuation">.</span>pprint<span class="token punctuation">(</span>wife<span class="token punctuation">)</span>
<span class="token comment"># {&#39;\u5E74\u9F84&#39;: 33,</span>
<span class="token comment"># &#39;eye_color&#39;: &#39;brown&#39;,</span>
<span class="token comment"># &#39;hair_color&#39;: &#39;brown&#39;,</span>
<span class="token comment"># &#39;has_hair&#39;: \u771F\u3002</span>
<span class="token comment"># &#39;\u9AD8\u5EA6&#39;: 1.6,</span>
<span class="token comment"># &#39;name&#39;: &#39;Rose&#39;}</span>
</code></pre><h2 id="-7" tabindex="-1">\u5408\u5E76\u4E24\u4E2A\u5B57\u5178</h2><p>\u5BF9\u4E8EPython 3.5\u4EE5\u4E0A\u7248\u672C\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span> dict_a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>\u3002
<span class="token operator">&gt;&gt;</span> dict_b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> dict_c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">**</span>dict_a<span class="token punctuation">,</span> <span class="token operator">**</span>dict_b<span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> dict_c
<span class="token comment"># {&#39;a&#39;: 1, &#39;b&#39;: 3, &#39;c&#39;: 4}</span>
</code></pre><p>\u901A\u8FC7www.DeepL.com/Translator\uFF08\u514D\u8D39\u7248\uFF09\u7FFB\u8BD1</p>`,52),P=[],B={__name:"3-dictionaries",setup(v,{expose:o}){const p={meta:[]};return o({frontmatter:p}),g({meta:[]}),(R,T)=>{const e=b,c=r,l=k,u=i;return d(),h("div",_,[a(e,{title:p.title,description:p.description},{default:t(()=>[n("\u3002 Python\u5B57\u5178 ")]),_:1},8,["title","description"]),y,a(u,null,{default:t(()=>[a(c,null,{default:t(()=>[n(" From the Python 3 "),f]),_:1}),a(l,null,{default:t(()=>[n(" The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key:value pair with "),w,n(". ")]),_:1})]),_:1}),q])}}};export{B as default,P as meta};
