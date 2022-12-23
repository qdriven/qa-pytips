import{_ as c,a as u,b as l}from"./BaseDisclaimerTitle.631caf82.js";import{q as h,o as d,c as m,b as t,f as n,t as g,B as k,s as e,e as _}from"./app.e6b4b7b5.js";const f={class:"markdown-body"},w=_("a",{target:"_blank",href:"https://docs.python.org/3/library/functions.html#input"},"Python 3 documentation",-1),y=g(`<h2 id="examples" tabindex="-1">Examples</h2><p>This function takes the input from the user and converts it into a string:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;What is your name?&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># ask for their name</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>my_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># What is your name?</span>
<span class="token comment"># Martha</span>
<span class="token comment"># Hi, Martha</span>
</code></pre><p><code>input()</code> can also set a default message without using <code>print()</code>:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;What is your name? &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># default message</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>my_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># What is your name? Martha</span>
<span class="token comment"># Hi, Martha</span>
</code></pre>`,5),v="Python input() built-in function - Python Cheatsheet",T="If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised.",I=[{property:"og:title",content:"Python input() built-in function - Python Cheatsheet"},{property:"og:description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."},{name:"description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."}],x={__name:"35-input",setup(E,{expose:s}){const a={title:"Python input() built-in function - Python Cheatsheet",description:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised.",meta:[{property:"og:title",content:"Python input() built-in function - Python Cheatsheet"},{property:"og:description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."},{name:"description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."}]};return s({frontmatter:a}),h({title:"Python input() built-in function - Python Cheatsheet",meta:[{property:"og:title",content:"Python input() built-in function - Python Cheatsheet"},{property:"og:description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."},{name:"description",content:"If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised."}]}),(F,O)=>{const i=k,o=u,r=l,p=c;return d(),m("div",f,[t(i,{title:a.title,description:a.description},{default:n(()=>[e(" Python input() built-in function ")]),_:1},8,["title","description"]),t(p,null,{default:n(()=>[t(o,null,{default:n(()=>[e(" From the "),w]),_:1}),t(r,null,{default:n(()=>[e(" If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised. ")]),_:1})]),_:1}),y])}}};export{x as default,T as description,I as meta,v as title};