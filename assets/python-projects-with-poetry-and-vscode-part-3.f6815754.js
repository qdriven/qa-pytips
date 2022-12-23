import{_ as c}from"./BlogTitleHeader.vue_vue_type_script_setup_true_lang.c6957e31.js";import{b as o}from"./route-block.6ee55eda.js";import{q as l,o as d,c as u,b as n,e as p,s as t,f as s,t as h,r as y}from"./app.e6b4b7b5.js";const k={class:"markdown-body"},m=p("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),g=h(`<p>And finally, in this third and last part we\u2019ll:</p><ul><li>Write a sample library.</li><li>Build our project with <em>Poetry</em>.</li><li>Publish it on <em>PyPI</em>.</li></ul><h2 id="poetry-commands" tabindex="-1">Poetry Commands</h2><p>Here is a table with the commands used in this series as well as their descriptions. For a full list, read the <a href="https://poetry.eustace.io/docs/cli/" target="_blank" rel="noopener">Poetry Documentation</a>.</p><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>poetry new [package-name]</code></td><td>Start a new Python Project.</td></tr><tr><td><code>poetry init</code></td><td>Create a <em>pyproject.toml</em> file interactively.</td></tr><tr><td><code>poetry install</code></td><td>Install the packages inside the <em>pyproject.toml</em> file.</td></tr><tr><td><code>poetry add [package-name]</code></td><td>Add a package to a Virtual Environment.</td></tr><tr><td><code>poetry add -D [package-name]</code></td><td>Add a dev package to a Virtual Environment.</td></tr><tr><td><code>poetry remove [package-name]</code></td><td>Remove a package from a Virtual Environment.</td></tr><tr><td><code>poetry remove -D [package-name]</code></td><td>Remove a dev package from a Virtual Environment.</td></tr><tr><td><code>poetry update</code></td><td>Get the latest versions of the dependencies</td></tr><tr><td><code>poetry shell</code></td><td>Spawns a shell within the virtual environment.</td></tr><tr><td><code>poetry build</code></td><td>builds the source and wheels archives.</td></tr><tr><td><code>poetry publish</code></td><td>Publish the package to Pypi.</td></tr><tr><td><code>poetry publish --build</code></td><td>Build and publish a package.</td></tr><tr><td><code>poetry self:update</code></td><td>Update poetry to the latest stable version.</td></tr></tbody></table><h2 id="the-project" tabindex="-1">The Project</h2><p>You can download the source code from <a href="https://github.com/wilfredinni/how-long" target="_blank" rel="noopener">GitHub</a> if you like, but as mentioned earlier, this will be a simple decorator that will print to the console how long it takes for a function to run.</p><p>It will work like this:</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> how_long <span class="token keyword">import</span> timer

<span class="token decorator annotation punctuation">@timer</span>
<span class="token keyword">def</span> <span class="token function">test_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># Execution Time: 955 ms.</span>
</code></pre><p>And the project directory will be as follows:</p><pre><code>how-long
\u251C\u2500\u2500 how_long
\u2502   \u251C\u2500\u2500 how_long.py
\u2502   \u2514\u2500\u2500 __init__.py
\u251C\u2500\u2500 how_long.egg-info
\u2502   \u251C\u2500\u2500 dependency_links.txt
\u2502   \u251C\u2500\u2500 PKG-INFO
\u2502   \u251C\u2500\u2500 requires.txt
\u2502   \u251C\u2500\u2500 SOURCES.txt
\u2502   \u2514\u2500\u2500 top_level.txt
\u251C\u2500\u2500 LICENSE
\u251C\u2500\u2500 poetry.lock
\u251C\u2500\u2500 pyproject.toml
\u251C\u2500\u2500 README.rst
\u2514\u2500\u2500 tests
    \u251C\u2500\u2500 __init__.py
    \u2514\u2500\u2500 test_how_long.py
</code></pre><p>Before we start, check for package updates with the <code>poetry update</code> command:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png" alt="poetry update"></p><p>Add a brief description for the project in the <code>README.rst</code>:</p><pre><code>how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
</code></pre><p>Navigate to <code>how_long/how_long.py</code>:</p><pre class="language-python"><code class="language-python"><span class="token comment"># how_long.py</span>
<span class="token keyword">from</span> functools <span class="token keyword">import</span> wraps

<span class="token keyword">import</span> pendulum


<span class="token keyword">def</span> <span class="token function">timer</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Simple Decorator to measure a function execution time.
    &quot;&quot;&quot;</span>

    <span class="token decorator annotation punctuation">@wraps</span><span class="token punctuation">(</span>function<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">function_wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        start <span class="token operator">=</span> pendulum<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
        function<span class="token punctuation">(</span><span class="token punctuation">)</span>
        elapsed_time <span class="token operator">=</span> pendulum<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Execution Time: </span><span class="token interpolation"><span class="token punctuation">{</span>elapsed_time<span class="token punctuation">.</span>microseconds<span class="token punctuation">}</span></span><span class="token string"> ms.&quot;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> function_wrapper
</code></pre><p>In <code>how_long/__init__.py</code>:</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> <span class="token punctuation">.</span>how_long <span class="token keyword">import</span> timer

__version__ <span class="token operator">=</span> <span class="token string">&quot;0.1.1&quot;</span>
</code></pre><p>And finally, the <code>tests/test_how_long.py</code> file:</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> how_long <span class="token keyword">import</span> __version__
<span class="token keyword">from</span> how_long <span class="token keyword">import</span> timer


<span class="token keyword">def</span> <span class="token function">test_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> __version__ <span class="token operator">==</span> <span class="token string">&quot;0.1.1&quot;</span>


<span class="token keyword">def</span> <span class="token function">test_wrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@timer</span>
    <span class="token keyword">def</span> <span class="token function">wrapped_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>

    <span class="token keyword">assert</span> wrapped_function<span class="token punctuation">.</span>__name__ <span class="token operator">==</span> <span class="token string">&quot;wrapped_function&quot;</span>
</code></pre><p>You can now use <code>poetry install</code> on your terminal to install and prove your package locally. Activate your virtual environment if you haven\u2019t and in the Python interactive shell:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> how_long <span class="token keyword">import</span> timer
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> @timer
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">def</span> <span class="token function">test_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
Execution Time<span class="token punctuation">:</span> <span class="token number">705</span> ms<span class="token punctuation">.</span>
</code></pre><p><a href="https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest" target="_blank" rel="noopener">Run the tests</a> and if everything is fine, move on.</p><h2 id="building-and-publishing" tabindex="-1">Building and Publishing</h2><p>Finally, the time to make this project available to the world has come! Make sure you have an account on <a href="https://pypi.org" target="_blank" rel="noopener">PyPI</a>. Remember that the package name must be unique, if unsure, use the <a href="https://pypi.org/search/?q=" target="_blank" rel="noopener">search</a> to check it out.</p><h3 id="build" tabindex="-1">Build</h3><p>The <code>poetry build</code> command builds the source and <a href="https://pythonwheels.com/" target="_blank" rel="noopener">wheels</a> archives that will later be uploaded as the source of the project:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png" alt="poetry build"></p><p>The <em>how_long.egg-info</em> directory will be created.</p><h3 id="publish" tabindex="-1">Publish</h3><p>This command publishes the package to <em>PyPI</em> and automatically register it before uploading if this is the first time it is submitted:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png" alt="poetry publish"></p><blockquote><p>You can also build and publish your project with <code>$ poetry publish --build</code>.</p></blockquote><p>Enter your credentials and if everything is ok, <a href="https://pypi.org/project/how-long/" target="_blank" rel="noopener">browse</a> your project, and you\u2019ll see something like this:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png" alt="pipy how-long"></p><p>We can now let others know that they can <code>pip install how-long</code> from any machine, anywhere!</p><h2 id="conclusion" tabindex="-1">Conclusion</h2><p>I remember the first time I tried to publish a package, and it was a nightmare. I was just starting in Python and I have to spend a \u201Cfew hours\u201D trying to understand what the <code>setup.py</code> file was and how to use it. In the end, I ended up with several files: a <code>Makefile</code>, a <code>MANIFEST.in</code>, a <code>requirements.txt</code> and a <code>test_requirements.txt</code>. That\u2019s why the words of <a href="https://github.com/sdispater" target="_blank" rel="noopener">S\xE9bastien Eustace</a>, the creator of <a href="https://github.com/sdispater/poetry" target="_blank" rel="noopener">Poetry</a>, made a lot of sense to me:</p><blockquote><p>Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> and the newly added <code>Pipfile</code>.</p><p>So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.</p><p>It takes inspiration in tools that exist in other languages, like <code>composer</code> (PHP) or <code>cargo</code> (Rust).</p><p>And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started <code>poetry</code> to bring an exhaustive dependency resolver to the Python community.</p></blockquote><p>Poetry is by <a href="https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry" target="_blank" rel="noopener">no means perfect</a> but, unlike other tools, it really does what promise.</p>`,41),q="Python projects with Poetry and VSCode Part 3 - Python Cheatsheet",C="Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi.",E="May 21, 2019",I="July 3, 2022",S="python, intermediate, vscode, packaging",V=[{property:"og:title",content:"Python projects with Poetry and VSCode Part 3 - Python Cheatsheet"},{property:"og:description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."},{name:"description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."}],w={__name:"python-projects-with-poetry-and-vscode-part-3",setup(b,{expose:r}){const e={title:"Python projects with Poetry and VSCode Part 3 - Python Cheatsheet",description:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi.",date:"May 21, 2019",updated:"July 3, 2022",tags:"python, intermediate, vscode, packaging",meta:[{property:"og:title",content:"Python projects with Poetry and VSCode Part 3 - Python Cheatsheet"},{property:"og:description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."},{name:"description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."}]};return r({frontmatter:e}),l({title:"Python projects with Poetry and VSCode Part 3 - Python Cheatsheet",meta:[{property:"og:title",content:"Python projects with Poetry and VSCode Part 3 - Python Cheatsheet"},{property:"og:description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."},{name:"description",content:"Finally, in this third part, we'll write a sample library, build our project with *Poetry* and publish it on Pypi."}]}),(_,P)=>{const i=c,a=y("router-link");return d(),u("div",k,[n(i,{frontmatter:e,title:"Python projects with Poetry and VSCode Part 3"}),p("p",null,[t("In the "),n(a,{to:"/blog/python-projects-with-poetry-and-vscode-part-1"},{default:s(()=>[t("first article")]),_:1}),t(" we started a new project, created a Virtual Environment and managed dependencies. In the "),n(a,{to:"/blog/python-projects-with-poetry-and-vscode-part-2"},{default:s(()=>[t("second part")]),_:1}),t(", added our virtual Environment to "),m,t(" and integrated our dev dependencies.")]),g])}}};typeof o=="function"&&o(w);export{E as date,w as default,C as description,V as meta,S as tags,q as title,I as updated};
