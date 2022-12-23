import{_ as d}from"./BlogTitleHeader.vue_vue_type_script_setup_true_lang.c6957e31.js";import{b as i}from"./route-block.6ee55eda.js";import{q as c,o as h,c as m,b as n,e as t,s as e,f as a,t as s,r as u}from"./app.e6b4b7b5.js";const y={class:"markdown-body"},g=t("code",null,"pyproject.toml",-1),w=t("a",{href:"https://poetry.eustace.io/",target:"_blank",rel:"noopener"},"Poetry",-1),f=s('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>poetry new [package-name]</code></td><td>Start a new Python Project.</td></tr><tr><td><code>poetry init</code></td><td>Create a <em>pyproject.toml</em> file interactively.</td></tr><tr><td><code>poetry install</code></td><td>Install the packages inside the <em>pyproject.toml</em> file.</td></tr><tr><td><code>poetry add [package-name]</code></td><td>Add a package to a Virtual Environment.</td></tr><tr><td><code>poetry add -D [package-name]</code></td><td>Add a dev package to a Virtual Environment.</td></tr><tr><td><code>poetry remove [package-name]</code></td><td>Remove a package from a Virtual Environment.</td></tr><tr><td><code>poetry remove -D [package-name]</code></td><td>Remove a dev package from a Virtual Environment.</td></tr></tbody></table><p>In this second part, we\u2019ll:</p><ul><li>Add our virtual Environment to <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>.</li><li>Update our dependencies.</li><li>Integrate our dev dependencies with the editor: <ul><li><em>Flake8</em></li><li><em>Black</em></li><li><em>Pytest</em></li></ul></li></ul>',3),k=t("em",null,"Poetry",-1),v=t("em",null,"PyPI",-1),_=t("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),b=t("a",{href:"https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python",target:"_blank",rel:"noopener"},"Python",-1),P=s(`<h2 id="setting-up-poetry-on-vscode" tabindex="-1">Setting up Poetry on VSCode</h2><p>A few days have passed since the first part, so it may be a good idea to check for new versions of our dependencies. Open your terminal, navigate inside your project directory and type the <code>poetry update</code> command:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png" alt="poetry update"></p><p>Until now, there are no new versions available.</p><p>When you create a Virtual Environment with the <em>venv</em> command, <em>VSCode</em> will automatically set it as the default Python Environment for that project. When working With <em>Poetry</em>, the first time we will need to type the following in the terminal and inside the project folder:</p><pre><code>$ poetry shell
$ code .
</code></pre><p>The first command, <code>poetry shell</code>, will spawn us inside our virtual environment, and <code>code .</code> will open the current folder inside <em>VSCode</em>.</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png" alt="vscode"></p><p>Open the <strong>how-long</strong> folder (or the one with your project name) using the left panel and alongside to <code>__init__.py</code>, create a <code>how-long.py</code> file. In the bottom-left corner, you\u2019ll see the current Python Environment:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png" alt="python version"></p><p>Click it and a list of available Environments will display. Choose the one that has the name of your project in it:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png" alt="choose python"></p><p>Now, let\u2019s integrate our dev dependencies, <em>Flake8</em>, <em>Black</em>, and <em>Pytest</em> into Visual Studio Code.</p><h2 id="flake8" tabindex="-1">Flake8</h2><p><a href="http://flake8.pycqa.org/en/latest/" target="_blank" rel="noopener">Flake8</a> will provide our projects with <em>linting</em> capabilities. In other words, warning of syntax and style errors, and thanks to VSCode, we will know them as we type.</p><p>By default, the Python extension comes with <em>Pylint</em> enabled, which is powerful but complex to configure. To switch to <em>Flake8</em> make a change to any Python file and save it, in the bottom-right corner a popup message will show:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png" alt="flake8"></p><p>Click on <strong>Select Linter</strong> and choose <strong>Flake8</strong> from the list. Now, <em>VSCode</em> will tell us our <em>syntax</em> and <em>style</em> problems, in green or red depending on its severity, always with a nice description of what is wrong:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png" alt="linting"></p><p>Seems like we have two problems: we are missing a blank line at the end of our file (style) and forgot to add quotes to our <em>Hello, World!</em> string (syntax). Fix them and see all warnings disappear.</p><h2 id="black" tabindex="-1">Black</h2><p><a href="https://github.com/ambv/black" target="_blank" rel="noopener">Black</a> is a code formatter, a tool that will look at our code and automatically format it in compliance with the <a href="https://www.python.org/dev/peps/pep-0008/" target="_blank" rel="noopener">PEP 8</a> style guide, the same <em>PEP</em> that uses <em>Flake8</em> to lint our style errors.</p><p>Hold <code>shift + cmd/ctrl + p</code> to open the Command Palette, type <strong>Format Document</strong>, and press enter. A new popup message will appear:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png" alt="black formatter popup"></p><p>Select <strong>Use Black</strong>. Now copy this poorly formatted code into your python file:</p><pre class="language-python"><code class="language-python"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>         <span class="token comment"># this comment has too many spaces</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment"># this line has 6 space indentation.</span>
</code></pre><p>What an ugly piece of s***\u2026 code. Try formatting it again and see how <em>Black</em> fixes all of them for you!</p><p>Another thing we can do is configure VSCode so that every time we save, <em>Black</em> will automatically format our code. Hold <code>cmd/ctrl + ,</code> to open the Settings. Make sure you are in the <strong>Workspace Settings</strong>, search for <strong>Format On Save</strong> and activate the checkbox:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png" alt="format on save"></p><p>Lastly, <em>Black</em> defaults to 88 characters per line in contrast with the 80 allowed by <em>Flake8</em>, so to avoid conflicts, open the <strong>.vscode</strong> folder and add the following at the end of the <strong>settings.json</strong> file:</p><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;python.linting.flake8Args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;--max-line-length=88&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/black-settings.png" alt="black-settings"></p><h2 id="pytest" tabindex="-1">Pytest</h2><p>If you are serious about programming, it is crucial for you to learn how to test your projects. It\u2019s an incredibly useful skill that allows you to write and deliver programs with confidence by reducing the possibility of catastrophic bugs appearing after shipping.</p><p><a href="https://docs.pytest.org/en/latest/" target="_blank" rel="noopener">Pytest</a> is a very popular and user-friendly framework for writing tests. We <a href="https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management" target="_blank" rel="noopener">already installed it</a>, so we will also integrate it with <em>VSCode</em>.</p><p>Open the <strong>tests</strong> folder and select the <code>test_how_long.py</code> file. <em>Poetry</em> already gives us our first test:</p><pre class="language-python"><code class="language-python"><span class="token comment"># test_how_long.py</span>
<span class="token keyword">from</span> how_long <span class="token keyword">import</span> __version__


<span class="token keyword">def</span> <span class="token function">test_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> __version__ <span class="token operator">==</span> <span class="token string">&#39;0.1.0&#39;</span>
</code></pre><p>In this test, we import the <code>__version__</code> variable from the <code>__init__.py</code> file that is inside the <strong>how_long</strong> folder and asserts that the current version is <em>0.1.0</em>. Open the integrated terminal by going to <strong>Terminal &gt; New Terminal</strong> and type:</p><pre><code>$ pytest
</code></pre><p>The Output will look like this:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png" alt="pytest"></p><p>Ok, everything is fine. Open your Command Palette with <code>shift + cmd/ctrl + p</code>:</p><ul><li>Write <strong>unit</strong> and select <strong>Python: Configure Unit Tests</strong>.</li><li>Select <strong>pytest</strong>.</li><li>Choose the directory in which you saved the tests, <strong>tests</strong> in our case.</li></ul><p>Three things happened:</p><ul><li><p>A new button appeared at the status bar: <strong>Run Tests</strong>. This is the same as typing <em>pytest</em> in the terminal. Press it and select <strong>Run All Unit Tests</strong>. When finished, it will inform you the number of tests that passed and the tests that not:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-statusbar.png" alt="test status bar"></p></li><li><p>A new icon at the left bar. If you click on it, a panel displaying all the test will appear. Here, you can run each one individually:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png" alt="test side panel"></p></li><li><p>Inside the test file, new options will be displayed before every test function: a check icon will appear if is ok, and an <em>x</em> otherwise. It also allows you to run specific tests:</p><p><img src="https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png" alt="test inline"></p></li></ul><h2 id="conclusion" tabindex="-1">Conclusion</h2><p>So far, we have:</p>`,47),C=s('<li>Added our <a href="#setting-up-poetry-on-vscode">Virtual Environment to VSCode</a>, <a href="#flake8">Configured <em>Flake8</em></a> to <em>lint</em> our code as we type, select <a href="#black"><em>Black</em></a> as the formatter and <a href="#pytest">included <em>Pytest</em></a> to run our tests visually.</li>',1),S=t("ul",null,[t("li",null,"Write a sample library."),t("li",null,[e("Build our project with "),t("em",null,"Poetry"),e(".")]),t("li",null,[e("Publish it on "),t("em",null,"PyPI"),e(".")])],-1),T="Python projects with Poetry and VSCode Part 2 - Python Cheatsheet",W="In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor.",N="April 23, 2019",O="July 3, 2022",q="python, intermediate, vscode, packaging",D=[{property:"og:title",content:"Python projects with Poetry and VSCode Part 2 - Python Cheatsheet"},{property:"og:description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."},{name:"description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."}],V={__name:"python-projects-with-poetry-and-vscode-part-2",setup(j,{expose:p}){const r={title:"Python projects with Poetry and VSCode Part 2 - Python Cheatsheet",description:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor.",date:"April 23, 2019",updated:"July 3, 2022",tags:"python, intermediate, vscode, packaging",meta:[{property:"og:title",content:"Python projects with Poetry and VSCode Part 2 - Python Cheatsheet"},{property:"og:description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."},{name:"description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."}]};return p({frontmatter:r}),c({title:"Python projects with Poetry and VSCode Part 2 - Python Cheatsheet",meta:[{property:"og:title",content:"Python projects with Poetry and VSCode Part 2 - Python Cheatsheet"},{property:"og:description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."},{name:"description",content:"In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor."}]}),(B,E)=>{const l=d,o=u("router-link");return h(),m("div",y,[n(l,{frontmatter:r,title:"Python projects with Poetry and VSCode Part 2"}),t("p",null,[e("In the "),n(o,{to:"/blog/python-projects-with-poetry-and-vscode-part-1"},{default:a(()=>[e("first article")]),_:1}),e(" we learned what the "),g,e(" file is and how to work with it, used "),w,e(" to start a new project, create a Virtual Environment and to add and remove dependencies. All of that with the following commands:")]),f,t("p",null,[e("And in a "),n(o,{to:"/blog/python-projects-with-poetry-and-vscode-part-3"},{default:a(()=>[e("third article")]),_:1}),e(" we will write a sample library, build our project with "),k,e(" and publish it on "),v,e(".")]),t("p",null,[e("Before we start, make sure you have installed "),_,e(", added the "),b,e(" extension and that you have followed and understood the "),n(o,{to:"/blog/python-projects-with-poetry-and-vscode-part-1"},{default:a(()=>[e("first article")]),_:1}),e(" of this series.")]),P,t("ul",null,[t("li",null,[n(o,{to:"/blog/python-projects-with-poetry-and-vscode-part-1"},{default:a(()=>[e("Started a new project")]),_:1}),e(", created a Virtual Environment, and added, deleted and updated dependencies.")]),C]),t("p",null,[e("Finally, in the "),n(o,{to:"/blog/python-projects-with-poetry-and-vscode-part-3"},{default:a(()=>[e("third and last article")]),_:1}),e(", we will:")]),S])}}};typeof i=="function"&&i(V);export{N as date,V as default,W as description,D as meta,q as tags,T as title,O as updated};