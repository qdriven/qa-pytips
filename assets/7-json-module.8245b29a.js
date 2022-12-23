import{q as t,o,c as p,b as e,f as c,t as u,B as l,s as r}from"./app.e6b4b7b5.js";const i={class:"markdown-body"},k=u(`<p>JSON\u662FJavaScript Object Notation\u7684\u7F29\u5199\uFF0C\u662F\u4E00\u79CD\u7528\u4E8E\u5B58\u50A8\u548C\u4F20\u8F93\u6570\u636E\u7684\u8F7B\u91CF\u7EA7\u683C\u5F0F\u3002\u5F53\u6570\u636E\u4ECE\u670D\u52A1\u5668\u53D1\u9001\u5230\u7F51\u9875\u65F6\uFF0CJSON\u7ECF\u5E38\u88AB\u4F7F\u7528\u3002</p><p>Python\u6709\u5185\u7F6E\u6A21\u5757<code>json</code>\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u5904\u7406JSON\u6570\u636E\u3002</p><p>\`\`python \u8F93\u5165json</p><pre><code>
## JSON\u6570\u636E\u7C7B\u578B

\u4E00\u4E2AJSON\u5BF9\u8C61\u7C7B\u4F3C\u4E8EPython\u5B57\u5178\uFF0C\u4F46\u6709\u4EE5\u4E0B\u533A\u522B\u3002

- JSON\u952E\u603B\u662F\u5B57\u7B26\u4E32\u3002
- \u5B57\u7B26\u4E32\u603B\u662F\u7528\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u3002
- \u4E00\u4E2AJSON\u5E03\u5C14\u503C\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u59CB\u3002
- \`null\`\u662F\u76F8\u5F53\u4E8EPython\u7684\`None\`\u7684JSON\u3002

JSON\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u6709\u3002

- \u5B57\u7B26\u4E32
- \u6570\u5B57
- \u5E03\u5C14\u578B
- \u7A7A
- \u5BF9\u8C61
- \u9635\u5217

\u4F8B\u5B50\u3002

\`\`\`\`json
{
  &quot;name&quot;: &quot;Charles&quot;,
  &quot;\u5E74\u9F84&quot;: 33,
  &quot;\u6709\u5934\u53D1&quot;: false,
  &quot;\u7231\u597D&quot;: [&quot;\u6444\u5F71&quot;, &quot;\u8DD1\u6B65&quot;],
  &quot;\u5916\u89C2&quot;: {
    &quot;\u773C\u775B&quot;: &quot;\u68D5\u8272&quot;,
    &quot;\u5934\u53D1\u989C\u8272&quot;: null
  }
}
</code></pre><h2 id="json-loads" tabindex="-1">JSON loads()\u65B9\u6CD5</h2><p>\u4F7F\u7528<code>json.load</code>\u65B9\u6CD5, \u4F60\u53EF\u4EE5\u89E3\u6790\u4E00\u4E2AJSON\u5BF9\u8C61\u5E76\u5C06\u5176\u8F6C\u6362\u4E3APython\u5B57\u5178\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\u5BFC\u5165json

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> json_person <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;: &quot;Charles&quot;, &quot;age&quot;: 33, &quot;have_hair&quot;: false, &quot;hobbies&quot;: [&quot;\u6444\u5F71&quot;, &quot;\u8DD1\u6B65&quot;]}&#39;</span>
<span class="token operator">&gt;&gt;</span> python_person <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_person<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python_person
<span class="token comment"># {&#39;name&#39;: &#39;Charles&#39;, &#39;age&#39;: 33, &#39;have_hair&#39;: False, &#39;hobbies&#39;: [&#39;photography&#39;, &#39;running&#39;]}</span>

<span class="token operator">&gt;&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>python_person<span class="token punctuation">)</span>
<span class="token comment"># &lt;\u7C7B &#39;dict&#39;&gt;</span>

<span class="token operator">&gt;&gt;</span> python_person<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Charles&#39;.</span>
</code></pre><h2 id="json-dumps" tabindex="-1">JSON dumps()\u65B9\u6CD5</h2><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\u3002<code>dumps()</code>\u65B9\u6CD5\u5C06Python\u5BF9\u8C61\u8F6C\u6362\u4E3AJSON\u5B57\u7B26\u4E32\u3002</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\u5BFC\u5165json

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python_person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Charles&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&#39;has_hair&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&#39;hobbies&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;photography&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;running&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span> json_person <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>python_person<span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> json_person
<span class="token comment"># &#39;{&quot;\u59D3\u540D&quot;: &quot;Charles&quot;, &quot;age&quot;: 33, &quot;has_hair&quot;: false, &quot;hobbies&quot;: [&quot;\u6444\u5F71&quot;, &quot;\u8DD1\u6B65&quot;]}&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>json_person<span class="token punctuation">)</span>
<span class="token comment"># &lt;class &#39;str&#39;&gt;</span>
</code></pre><h2 id="json" tabindex="-1">\u8BFB\u53D6\u548C\u5199\u5165Json\u6587\u4EF6</h2><h3 id="json-1" tabindex="-1">\u8BFB\u53D6\u4E00\u4E2AJson\u6587\u4EF6</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\u5BFC\u5165json
<span class="token operator">&gt;&gt;</span> <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;filename.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> json_content <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_content<span class="token punctuation">)</span>
<span class="token comment"># {&#39;name&#39;: &#39;Charles&#39;, &#39;age&#39;: 33, &#39;has_hair&#39;: False}</span>
</code></pre><h3 id="json-2" tabindex="-1">\u5199\u5165\u4E00\u4E2AJson\u6587\u4EF6</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span> \u5BFC\u5165json

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Charles&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">}</span>

<span class="token operator">&gt;&gt;</span> <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;filename.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>`,15),m="Python Json \u6A21\u5757 - Python Cheatsheet",_="Python\u6709\u5185\u7F6E\u7684json\u6A21\u5757\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u5904\u7406JSON\uFF08JavaScript\u5BF9\u8C61\u7B26\u53F7\uFF09\u6570\u636E\u3002",j=[{property:"og:title",content:"Python Json \u6A21\u5757 - Python Cheatsheet"}],J={__name:"7-json-module",setup(g,{expose:s}){const n={title:"Python Json \u6A21\u5757 - Python Cheatsheet",Description:"Python\u6709\u5185\u7F6E\u7684json\u6A21\u5757\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u5904\u7406JSON\uFF08JavaScript\u5BF9\u8C61\u7B26\u53F7\uFF09\u6570\u636E\u3002",meta:[{property:"og:title",content:"Python Json \u6A21\u5757 - Python Cheatsheet"}]};return s({frontmatter:n}),t({title:"Python Json \u6A21\u5757 - Python Cheatsheet",meta:[{property:"og:title",content:"Python Json \u6A21\u5757 - Python Cheatsheet"}]}),(q,d)=>{const a=l;return o(),p("div",i,[e(a,{title:n.title,description:n.description},{default:c(()=>[r("\u3002 Python Json \u6A21\u5757 ")]),_:1},8,["title","description"]),k])}}};export{_ as Description,J as default,j as meta,m as title};
