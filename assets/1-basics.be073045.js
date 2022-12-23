import{_ as i,a as d,b as k}from"./BaseDisclaimerTitle.631caf82.js";import{q as g,o as u,c as h,b as n,f as s,e as o,t as m,B as b,s as a}from"./app.e6b4b7b5.js";const y={class:"markdown-body"},_=o("p",null,"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002",-1),q=o("a",{href:"https://docs.python.org/3/tutorial/index.html"},"Python 3 tutorial",-1),f=m(`<h2 id="math-operators" tabindex="-1">Math Operators</h2><p>From <strong>Highest</strong> to <strong>Lowest</strong> precedence:</p><table><thead><tr><th>Operators</th><th>Operation</th><th>Example</th></tr></thead><tbody><tr><td>**</td><td>Exponent</td><td><code>2 ** 3 = 8</code></td></tr><tr><td>%</td><td>Modulus/Remainder</td><td><code>22 % 8 = 6</code></td></tr><tr><td>//</td><td>Integer division</td><td><code>22 // 8 = 2</code></td></tr><tr><td>/</td><td>Division</td><td><code>22 / 8 = 2.75</code></td></tr><tr><td>*</td><td>Multiplication</td><td><code>3 * 3 = 9</code></td></tr><tr><td>-</td><td>Subtraction</td><td><code>5 - 2 = 3</code></td></tr><tr><td>+</td><td>Addition</td><td><code>2 + 2 = 4</code></td></tr></tbody></table><p>Examples of expressions:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">6</span>
<span class="token comment"># 20</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span>
<span class="token comment"># 30</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">8</span>
<span class="token comment">#256</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">23</span> <span class="token operator">//</span> <span class="token number">7</span>
<span class="token comment"># 3</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">23</span> <span class="token operator">%</span> <span class="token number">7</span>
<span class="token comment"># 2</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 16.0</span>
</code></pre><h2 id="" tabindex="-1">\u589E\u5F3A\u7684\u8D4B\u503C\u8FD0\u7B97\u7B26</h2><table><thead><tr><th>Operator</th><th>Equivalent</th></tr></thead><tbody><tr><td><code>var += 1</code></td><td><code>var = var + 1</code></td></tr><tr><td><code>var -= 1</code></td><td><code>var = var - 1</code></td></tr><tr><td><code>var *= 1</code></td><td><code>var = var * 1</code></td></tr><tr><td><code>var /= 1</code></td><td><code>var = var / 1</code></td></tr><tr><td><code>var %= 1</code></td><td><code>var = var % 1</code></td></tr></tbody></table><p>Examples:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greeting <span class="token operator">+=</span> <span class="token string">&#39; world!&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greeting
<span class="token comment"># &#39;Hello world!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> number <span class="token operator">=</span> <span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> number <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> number
<span class="token comment"># 2</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list <span class="token operator">*=</span> <span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list
<span class="token comment"># [&#39;item&#39;, &#39;item&#39;, &#39;item&#39;]</span>
</code></pre><h2 id="-1" tabindex="-1">\u6570\u636E\u7C7B\u578B</h2><table><thead><tr><th>Data Type</th><th>Examples</th></tr></thead><tbody><tr><td>Integers</td><td><code>-2, -1, 0, 1, 2, 3, 4, 5</code></td></tr><tr><td>Floating-point numbers</td><td><code>-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25</code></td></tr><tr><td>Strings</td><td><code>&#39;a&#39;, &#39;aa&#39;, &#39;aaa&#39;, &#39;Hello!&#39;, &#39;11 cats&#39;</code></td></tr></tbody></table><h2 id="-2" tabindex="-1">\u4E32\u8054\u548C\u590D\u5236</h2><p>String \u4E32\u8054:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Alice&#39;</span> <span class="token string">&#39;Bob&#39;</span>
<span class="token comment"># &#39;AliceBob&#39;</span>
</code></pre><p>String \u590D\u5236:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Alice&#39;</span> <span class="token operator">*</span> <span class="token number">5</span>
<span class="token comment"># &#39;AliceAliceAliceAliceAlice&#39;</span>
</code></pre><h2 id="-3" tabindex="-1">\u53D8\u91CF</h2><p>\u4F60\u53EF\u4EE5\u7ED9\u53D8\u91CF\u8D77\u4EFB\u4F55\u540D\u5B57\uFF0C\u9075\u5B88\u4EE5\u4E0B\u89C4\u5219:</p><ol><li>It can be only one word.</li></ol><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># bad</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my variable <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># good</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> var <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
</code></pre><ol start="2"><li>It can use only letters, numbers, and the underscore (<code>_</code>) character.</li></ol><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># bad</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token operator">%</span>$@variable <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># good</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_var <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># good</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_var_2 <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
</code></pre><ol start="3"><li>It can\u2019t begin with a number.</li></ol><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># this wont work</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 23_var <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
</code></pre><ol start="4"><li>Variable name starting with an underscore (<code>_</code>) are considered as \u201Cunuseful\u201D.</li></ol><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token comment"># _spam should not be used again in the code</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> _spam <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
</code></pre><h2 id="comments" tabindex="-1">Comments</h2><p>Inline comment:</p><pre class="language-python"><code class="language-python"><span class="token comment"># This is a comment</span>
</code></pre><p>Multiline comment:</p><pre class="language-python"><code class="language-python"><span class="token comment"># This is a</span>
<span class="token comment"># multiline comment</span>
</code></pre><p>Code with a comment:</p><pre class="language-python"><code class="language-python">a <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># initialization</span>
</code></pre><p>Please note the two spaces in front of the comment.</p><p>Function docstring:</p><pre class="language-python"><code class="language-python"><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    This is a function docstring
    You can also use:
    &#39;&#39;&#39; Function Docstring &#39;&#39;&#39;
    &quot;&quot;&quot;</span>
</code></pre><h2 id="the-print-function" tabindex="-1">The print() Function</h2><p><code>print()</code>\u51FD\u6570\u5199\u51FA\u5B83\u6240\u7ED9\u7684\u53C2\u6570\u7684\u503C\u3002[\u2026]\u5B83\u53EF\u4EE5\u5904\u7406\u591A\u4E2A\u53C2\u6570\u3001\u6D6E\u70B9\u6570\u91CF\u548C\u5B57\u7B26\u4E32\u3002\u5B57\u7B26\u4E32\u6253\u5370\u65F6\u4E0D\u52A0\u5F15\u53F7\uFF0C\u9879\u76EE\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u7A7A\u683C\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5F88\u597D\u5730\u683C\u5F0F\u5316\u5B83\u4EEC:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello world!</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token comment"># Hello world! 1</span>
</code></pre><h3 id="the-end-keyword" tabindex="-1">The end keyword</h3><p>\u5173\u952E\u5B57\u53C2\u6570<code>end</code>\u53EF\u4EE5\u7528\u6765\u907F\u514D\u8F93\u51FA\u540E\u7684\u6362\u884C\uFF0C\u6216\u8005\u7528\u4E00\u4E2A\u4E0D\u540C\u7684\u5B57\u7B26\u4E32\u6765\u7ED3\u675F\u8F93\u51FA:</p><pre class="language-python"><code class="language-python">phrase <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;printed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;with&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dash&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;between&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> word <span class="token keyword">in</span> phrase<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># printed-with-a-dash-in-between-</span>
</code></pre><h3 id="sep" tabindex="-1">\u5173\u952E\u5B57 sep</h3><p>\u5173\u952E\u5B57 <code>sep</code> \u6307\u5B9A\u5982\u4F55\u5206\u79BB\u5BF9\u8C61\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u5BF9\u8C61\u7684\u8BDD\u3002</p><p>\`\`python print(\u2018cats\u2019, \u2018dogs\u2019, \u2018mice\u2019, sep=\u2018,\u2019 )</p><h1 id="catsdogsmice" tabindex="-1">cats,dogs,mice</h1><pre><code>
## The input() Function

\u8FD9\u4E2A\u51FD\u6570\u63A5\u6536\u6765\u81EA\u7528\u6237\u7684\u8F93\u5165\uFF0C\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002

\`\`\`python
&gt;&gt; print(&#39;What is your name?&#39;) # \u8BE2\u95EE\u4ED6\u4EEC\u7684\u540D\u5B57
&gt;&gt;&gt; my_name = input()
&gt;&gt; print(&#39;Hi, {}&#39;.format(my_name))
# \u4F60\u7684\u540D\u5B57\u662F\u4EC0\u4E48\uFF1F
# Martha
# \u4F60\u597D, \u739B\u838E
</code></pre><p><code>input()</code>\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528<code>print()</code>\u800C\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u4FE1\u606F\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span> my_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;What is your name? &#39;</span><span class="token punctuation">)</span> <span class="token comment"># \u9ED8\u8BA4\u4FE1\u606F</span>
<span class="token operator">&gt;&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>my_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># \u4F60\u7684\u540D\u5B57\u662F\u4EC0\u4E48\uFF1F\u739B\u838E</span>
<span class="token comment"># \u4F60\u597D\uFF0C\u739B\u838E</span>
</code></pre><h2 id="the-len-function" tabindex="-1">The len() Function</h2><p>\u8BC4\u4F30\u4E3A\u5B57\u7B26\u4E32, \u5217\u8868, \u5B57\u5178\u7B49\u7684\u5B57\u7B26\u6570\u7684\u6574\u6570\u503C:</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>len(\u2018hello\u2019)</p></blockquote></blockquote></blockquote><h1 id="5" tabindex="-1">5</h1><blockquote><blockquote><blockquote><p>len([\u2018cat\u2019, 3, \u2018dog\u2019])</p></blockquote></blockquote></blockquote><h1 id="3" tabindex="-1">3</h1><pre><code>
&lt;base-warning&gt;
  &lt;base-warning-title&gt;Test of emptiness&lt;/base-warning-title&gt;
  &lt;base-warning-content&gt;
    Test of emptiness of strings, lists, dictionaries, etc., should not use
    &lt;code&gt;len&lt;/code&gt;, but prefer direct boolean evaluation.
  &lt;/base-warning-content&gt;
&lt;/base-warning&gt;

Test of emptiness example:

\`\`\`python
&gt;&gt;&gt; a = [1, 2, 3]

# bad
&gt;&gt;&gt; if len(a) &gt; 0: # evaluates to True
... print(&quot;the list is not empty!&quot;)
...
# the list is not empty!

# good
&gt;&gt;&gt; if a: # evaluates to True
... print(&quot;the list is not empty!&quot;)
...
# the list is not empty!
</code></pre><h2 id="the-str-int-and-float-functions" tabindex="-1">The str(), int(), and float() Functions</h2><p>These functions allow you to change the type of variable. For example, you can transform from an <code>integer</code> or <code>float</code> to a <code>string</code>:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">29</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;29&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3.14</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;-3.14&#39;</span>
</code></pre><p>\u6216\u8005\u4ECE\u4E00\u4E2A &quot;\u5B57\u7B26\u4E32 &quot;\u5230\u4E00\u4E2A &quot;\u6574\u6570 &quot;\u6216 \u201C\u6D6E\u70B9\u201D\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>int(\u201811\u2019)</p></blockquote></blockquote></blockquote><h1 id="11" tabindex="-1">11</h1><blockquote><blockquote><blockquote><p>float(\u20183.14\u2019)</p></blockquote></blockquote></blockquote><h1 id="314" tabindex="-1">3.14</h1><pre><code></code></pre>`,67),B="Python Basics - Python Cheatsheet",F="python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002",A=[{property:"og:title",content:"Python Basics - Python Cheatsheet"},{property:"og:description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"},{name:"description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"}],C={__name:"1-basics",setup(w,{expose:e}){const t={title:"Python Basics - Python Cheatsheet",description:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002",meta:[{property:"og:title",content:"Python Basics - Python Cheatsheet"},{property:"og:description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"},{name:"description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"}]};return e({frontmatter:t}),g({title:"Python Basics - Python Cheatsheet",meta:[{property:"og:title",content:"Python Basics - Python Cheatsheet"},{property:"og:description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"},{name:"description",content:"python\u7684\u57FA\u7840\u77E5\u8BC6\u3002\u6211\u4EEC\u90FD\u9700\u8981\u4ECE\u67D0\u4E2A\u5730\u65B9\u5F00\u59CB\uFF0C\u90A3\u4E48\u5C31\u5728\u8FD9\u91CC\u505A\u5427\u3002"}]}),(x,H)=>{const p=b,c=d,r=k,l=i;return u(),h("div",y,[n(p,{title:t.title,description:t.description},{default:s(()=>[a(" Python Basics ")]),_:1},8,["title","description"]),_,n(l,null,{default:s(()=>[n(c,null,{default:s(()=>[a(" From the "),q]),_:1}),n(r,null,{default:s(()=>[a(" Python\u662F\u4E00\u79CD\u6613\u4E8E\u5B66\u4E60\u3001\u529F\u80FD\u5F3A\u5927\u7684\u7F16\u7A0B\u8BED\u8A00[......]Python\u7684\u4F18\u96C5\u8BED\u6CD5\u548C\u52A8\u6001\u7C7B\u578B\uFF0C\u4EE5\u53CA\u5B83\u7684\u89E3\u91CA\u6027\u8D28\uFF0C\u4F7F\u5B83\u6210\u4E3A\u811A\u672C\u548C\u5FEB\u901F\u5E94\u7528\u5F00\u53D1\u7684\u7406\u60F3\u8BED\u8A00 ")]),_:1})]),_:1}),f])}}};export{C as default,F as description,A as meta,B as title};
