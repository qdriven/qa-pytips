import{q as r,o as i,c as u,b as s,f as a,e as o,s as n,t as e,B as k,r as g}from"./app.e6b4b7b5.js";const d={class:"markdown-body"},m=e(`<h2 id="escape-characters" tabindex="-1">Escape characters</h2><p>An escape character is created by typing a backslash <code>\\</code> followed by the character you want to insert.</p><table><thead><tr><th>Escape character</th><th>Prints as</th></tr></thead><tbody><tr><td><code>\\&#39;</code></td><td>Single quote</td></tr><tr><td><code>\\&quot;</code></td><td>Double quote</td></tr><tr><td><code>\\t</code></td><td>Tab</td></tr><tr><td><code>\\n</code></td><td>Newline (line break)</td></tr><tr><td><code>\\\\</code></td><td>Backslash</td></tr><tr><td><code>\\b</code></td><td>Backspace</td></tr><tr><td><code>\\ooo</code></td><td>Octal value</td></tr><tr><td><code>\\r</code></td><td>Carriage Return</td></tr></tbody></table><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello there!\\nHow are you?\\nI\\&#39;m doing fine.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello there!</span>
<span class="token comment"># How are you?</span>
<span class="token comment"># I&#39;m doing fine.</span>
</code></pre><h2 id="raw-strings" tabindex="-1">Raw strings</h2><p>A raw string entirely ignores all escape characters and prints any backslash that appears in the string.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&quot;Hello there!\\nHow are you?\\nI\\&#39;m doing fine.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Hello there!\\nHow are you?\\nI\\&#39;m doing fine.</span>
</code></pre>`,7),h=e(`<h2 id="multiline-strings" tabindex="-1">Multiline Strings</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Dear Alice,
...
... Eve&#39;s cat has been arrested for catnapping,
... cat burglary, and extortion.
...
... Sincerely,
... Bob&quot;&quot;&quot;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">)</span>

<span class="token comment"># Dear Alice,</span>

<span class="token comment"># Eve&#39;s cat has been arrested for catnapping,</span>
<span class="token comment"># cat burglary, and extortion.</span>

<span class="token comment"># Sincerely,</span>
<span class="token comment"># Bob</span>
</code></pre><h2 id="indexing-and-slicing-strings" tabindex="-1">Indexing and Slicing strings</h2><pre><code>H   e   l   l   o       w   o   r   l   d    !
0   1   2   3   4   5   6   7   8   9   10   11
</code></pre><h3 id="indexing" tabindex="-1">Indexing</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;H&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;o&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;!&#39;</span>
</code></pre><h3 id="slicing" tabindex="-1">Slicing</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;world!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;world&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;Hello world&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># &#39;!dlrow olleH&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fizz <span class="token operator">=</span> spam<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fizz
<span class="token comment"># &#39;Hello&#39;</span>
</code></pre><h2 id="the-in-and-not-in-operators" tabindex="-1">The in and not in operators</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;Hello&#39;</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;HELLO&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;spam&#39;</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;cats&#39;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token string">&#39;cats and dogs&#39;</span>
<span class="token comment"># False</span>
</code></pre><h2 id="upper-lower-and-title" tabindex="-1">upper(), lower() and title()</h2><p>Transforms a string to upper, lower and title case:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;HELLO WORLD!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;hello world!&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Hello World!&#39;</span>
</code></pre><h2 id="isupper-and-islower-methods" tabindex="-1">isupper() and islower() methods</h2><p>Returns <code>True</code> or <code>False</code> after evaluating if a string is in upper or lower case:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;HELLO&#39;</span><span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;abc12345&#39;</span><span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h2 id="the-isx-string-methods" tabindex="-1">The isX string methods</h2><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>isalpha()</td><td>returns <code>True</code> if the string consists only of letters.</td></tr><tr><td>isalnum()</td><td>returns <code>True</code> if the string consists only of letters and numbers.</td></tr><tr><td>isdecimal()</td><td>returns <code>True</code> if the string consists only of numbers.</td></tr><tr><td>isspace()</td><td>returns <code>True</code> if the string consists only of spaces, tabs, and new-lines.</td></tr><tr><td>istitle()</td><td>returns <code>True</code> if the string consists only of words that begin with an uppercase letter followed by only lowercase characters.</td></tr></tbody></table><h2 id="startswith-and-endswith" tabindex="-1">startswith() and endswith()</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;world!&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;abcdef&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>
</code></pre><h2 id="join-and-split" tabindex="-1">join() and split()</h2><h3 id="join" tabindex="-1">join()</h3>`,22),y=o("code",null,"join()",-1),b=e(`<pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;My&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Simon&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token string">&#39;MynameisSimon&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;, &#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;cats&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rats&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bats&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;cats, rats, bats&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;My&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Simon&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;My name is Simon&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABC&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;My&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Simon&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;MyABCnameABCisABCSimon&#39;</span>
</code></pre><h3 id="split" tabindex="-1">split()</h3><p>The <code>split()</code> method splits a <code>string</code> into a <code>list</code>. By default, it will use whitespace to separate the items, but you can also set another character of choice:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;My name is Simon&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;My&#39;, &#39;name&#39;, &#39;is&#39;, &#39;Simon&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;MyABCnameABCisABCSimon&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;My&#39;, &#39;name&#39;, &#39;is&#39;, &#39;Simon&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;My name is Simon&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;My na&#39;, &#39;e is Si&#39;, &#39;on&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39; My  name is  Simon&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;My&#39;, &#39;name&#39;, &#39;is&#39;, &#39;Simon&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39; My  name is  Simon&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;&#39;, &#39;My&#39;, &#39;&#39;, &#39;name&#39;, &#39;is&#39;, &#39;&#39;, &#39;Simon&#39;]</span>
</code></pre><h2 id="justifying-text-with-rjust-ljust-and-center" tabindex="-1">Justifying text with rjust(), ljust() and center()</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>rjust<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;     Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>rjust<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;               Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">.</span>rjust<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;         Hello World&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>ljust<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Hello     &#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;       Hello       &#39;</span>
</code></pre><p>An optional second argument to <code>rjust()</code> and <code>ljust()</code> will specify a fill character apart from a space character:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>rjust<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;***************Hello&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>ljust<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Hello---------------&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;=======Hello========&#39;</span>
</code></pre><h2 id="removing-whitespace-with-strip-rstrip-and-lstrip" tabindex="-1">Removing whitespace with strip(), rstrip(), and lstrip()</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam <span class="token operator">=</span> <span class="token string">&#39;    Hello World     &#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Hello World&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;Hello World     &#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;    Hello World&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam <span class="token operator">=</span> <span class="token string">&#39;SpamSpamBaconSpamEggsSpamSpam&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;ampS&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;BaconSpamEggs&#39;</span>
</code></pre>`,10),S="Manipulating strings - Python Cheatsheet",M="An escape character is created by typing a backslash \\ followed by the character you want to insert.",j=[{property:"og:title",content:"Manipulating strings - Python Cheatsheet"},{property:"og:description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."},{name:"description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."}],T={__name:"23-manipulating-strings",setup(w,{expose:c}){const p={title:"Manipulating strings - Python Cheatsheet",description:"An escape character is created by typing a backslash \\ followed by the character you want to insert.",meta:[{property:"og:title",content:"Manipulating strings - Python Cheatsheet"},{property:"og:description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."},{name:"description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."}]};return c({frontmatter:p}),r({title:"Manipulating strings - Python Cheatsheet",meta:[{property:"og:title",content:"Manipulating strings - Python Cheatsheet"},{property:"og:description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."},{name:"description",content:"An escape character is created by typing a backslash \\ followed by the character you want to insert."}]}),(f,_)=>{const l=k,t=g("router-link");return i(),u("div",d,[s(l,{title:p.title,description:p.description},{default:a(()=>[n(" Manipulating Strings ")]),_:1},8,["title","description"]),m,o("p",null,[n("Raw strings are mostly used for "),s(t,{to:"/cheatsheet/regular-expressions"},{default:a(()=>[n("regular expression")]),_:1}),n(" definition.")]),h,o("p",null,[n("The "),y,n(" method takes all the items in an iterable, like a "),s(t,{to:"/cheatsheet/lists-and-tuples"},{default:a(()=>[n("list")]),_:1}),n(", "),s(t,{to:"/cheatsheet/dictionaries"},{default:a(()=>[n("dictionary")]),_:1}),n(", "),s(t,{to:"/cheatsheet/lists-and-tuples#the-tuple-data-type"},{default:a(()=>[n("tuple")]),_:1}),n(" or "),s(t,{to:"/cheatsheet/sets"},{default:a(()=>[n("set")]),_:1}),n(", and joins them into a string. You can also specify a separator.")]),b])}}};export{T as default,M as description,j as meta,S as title};
