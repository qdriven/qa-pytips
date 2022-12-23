import{_ as d,a as h,b as m}from"./BaseWarningTitle.f5a386c9.js";import{_ as y,a as w,b as f}from"./BaseDisclaimerTitle.631caf82.js";import{q as b,o as _,c as x,b as s,f as a,e as t,s as n,t as l,B as P}from"./app.e6b4b7b5.js";const C={class:"markdown-body"},v=t("p",null,[n("There are two main modules in Python that deal with path manipulation. One is the "),t("code",null,"os.path"),n(" module and the other is the "),t("code",null,"pathlib"),n(" module.")],-1),T=l(`<h2 id="linux-and-windows-paths" tabindex="-1">Linux and Windows Paths</h2><p>On Windows, paths are written using backslashes (<code>\\</code>) as the separator between folder names. On Unix based operating system such as macOS, Linux, and BSDs, the forward slash (<code>/</code>) is used as the path separator. Joining paths can be a headache if your code needs to work on different platforms.</p><p>Fortunately, Python provides easy ways to handle this. We will showcase how to deal with both, <code>os.path.join</code> and <code>pathlib.Path.joinpath</code></p><p>Using <code>os.path.join</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;usr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;spam&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;usr\\\\bin\\\\spam&#39;</span>
</code></pre><p>And using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;usr&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&#39;bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&#39;spam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># usr/bin/spam</span>
</code></pre><p><code>pathlib</code> also provides a shortcut to joinpath using the <code>/</code> operator:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;usr&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&#39;bin&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;spam&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># usr/bin/spam</span>
</code></pre><p>Notice the path separator is different between Windows and Unix based operating system, that\u2019s why you want to use one of the above methods instead of adding strings together to join paths together.</p><p>Joining paths is helpful if you need to create different file paths under the same directory.</p><p>Using <code>os.path.join</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;accounts.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;details.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;invite.docx&#39;</span><span class="token punctuation">]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> my_files<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Users\\\\asweigart&#39;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># C:\\Users\\asweigart\\accounts.txt</span>
<span class="token comment"># C:\\Users\\asweigart\\details.csv</span>
<span class="token comment"># C:\\Users\\asweigart\\invite.docx</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;accounts.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;details.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;invite.docx&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> home <span class="token operator">=</span> Path<span class="token punctuation">.</span>home<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> my_files<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>home <span class="token operator">/</span> filename<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># /home/asweigart/accounts.txt</span>
<span class="token comment"># /home/asweigart/details.csv</span>
<span class="token comment"># /home/asweigart/invite.docx</span>
</code></pre><h2 id="the-current-working-directory" tabindex="-1">The current working directory</h2><p>Using <code>os</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\Python34&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Windows\\\\System32&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\Windows\\\\System32&#39;</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> os <span class="token keyword">import</span> chdir

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home/asweigart</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> chdir<span class="token punctuation">(</span><span class="token string">&#39;/usr/lib/python3.6&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /usr/lib/python3.6</span>
</code></pre><h2 id="creating-new-folders" tabindex="-1">Creating new folders</h2><p>Using <code>os</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\delicious\\\\walnut\\\\waffles&#39;</span><span class="token punctuation">)</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> cwd <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>cwd <span class="token operator">/</span> <span class="token string">&#39;delicious&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;walnut&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;waffles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment">#   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">#   File &quot;/usr/lib/python3.6/pathlib.py&quot;, line 1226, in mkdir</span>
<span class="token comment">#     self._accessor.mkdir(self, mode)</span>
<span class="token comment">#   File &quot;/usr/lib/python3.6/pathlib.py&quot;, line 387, in wrapped</span>
<span class="token comment">#     return strfunc(str(pathobj), *args)</span>
<span class="token comment"># FileNotFoundError: [Errno 2] No such file or directory: &#39;/home/asweigart/delicious/walnut/waffles&#39;</span>
</code></pre><p>Oh no, we got a nasty error! The reason is that the \u2018delicious\u2019 directory does not exist, so we cannot make the \u2018walnut\u2019 and the \u2018waffles\u2019 directories under it. To fix this, do:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> cwd <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>cwd <span class="token operator">/</span> <span class="token string">&#39;delicious&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;walnut&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;waffles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>parents<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><p>And all is good :)</p><h2 id="absolute-vs-relative-paths" tabindex="-1">Absolute vs. Relative paths</h2><p>There are two ways to specify a file path.</p><ul><li>An <strong>absolute path</strong>, which always begins with the root folder</li><li>A <strong>relative path</strong>, which is relative to the program\u2019s current working directory</li></ul><p>There are also the dot (<code>.</code>) and dot-dot (<code>..</code>) folders. These are not real folders, but special names that can be used in a path. A single period (\u201Cdot\u201D) for a folder name is shorthand for \u201Cthis directory.\u201D Two periods (\u201Cdot-dot\u201D) means \u201Cthe parent folder.\u201D</p><h3 id="handling-absolute-paths" tabindex="-1">Handling Absolute paths</h3><p>To see if a path is an absolute path:</p><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isabs<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isabs<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_absolute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_absolute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>You can extract an absolute path with both <code>os.path</code> and <code>pathlib</code></p><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&#39;/home/asweigart&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;/home&#39;</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home/asweigart</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home</span>
</code></pre><h3 id="handling-relative-paths" tabindex="-1">Handling Relative paths</h3><p>You can get a relative path from a starting path to another path.</p><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>relpath<span class="token punctuation">(</span><span class="token string">&#39;/etc/passwd&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;etc/passwd&#39;</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;/etc/passwd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>relative_to<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># etc/passwd</span>
</code></pre><h2 id="path-and-file-validity" tabindex="-1">Path and File validity</h2><h3 id="checking-if-a-filedirectory-exists" tabindex="-1">Checking if a file/directory exists</h3><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;/etc&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/etc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h3 id="checking-if-a-path-is-a-file" tabindex="-1">Checking if a path is a file</h3><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h3 id="checking-if-a-path-is-a-directory" tabindex="-1">Checking if a path is a directory</h3><p>Using <code>os.path</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span><span class="token string">&#39;/spam&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/spam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h2 id="getting-a-files-size-in-bytes" tabindex="-1">Getting a file\u2019s size in bytes</h2><p>Using <code>os.path</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Windows\\\\System32\\\\calc.exe&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 776192</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> stat <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/bin/python3.6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>stat<span class="token punctuation">)</span> <span class="token comment"># stat contains some other information about the file as well</span>
<span class="token comment"># os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,</span>
<span class="token comment"># --snip--</span>
<span class="token comment"># st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>stat<span class="token punctuation">.</span>st_size<span class="token punctuation">)</span> <span class="token comment"># size in bytes</span>
<span class="token comment"># 10024</span>
</code></pre><h2 id="listing-directories" tabindex="-1">Listing directories</h2><p>Listing directory contents using <code>os.listdir</code> on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Windows\\\\System32&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;0409&#39;, &#39;12520437.cpx&#39;, &#39;12520850.cpx&#39;, &#39;5U877.ax&#39;, &#39;aaclient.dll&#39;,</span>
<span class="token comment"># --snip--</span>
<span class="token comment"># &#39;xwtpdui.dll&#39;, &#39;xwtpw32.dll&#39;, &#39;zh-CN&#39;, &#39;zh-HK&#39;, &#39;zh-TW&#39;, &#39;zipfldr.dll&#39;]</span>
</code></pre><p>Listing directory contents using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> f <span class="token keyword">in</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/usr/bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># ...</span>
<span class="token comment"># /usr/bin/tiff2rgba</span>
<span class="token comment"># /usr/bin/iconv</span>
<span class="token comment"># /usr/bin/ldd</span>
<span class="token comment"># /usr/bin/cache_restore</span>
<span class="token comment"># /usr/bin/udiskie</span>
<span class="token comment"># /usr/bin/unix2dos</span>
<span class="token comment"># /usr/bin/t1reencode</span>
<span class="token comment"># /usr/bin/epstopdf</span>
<span class="token comment"># /usr/bin/idle3</span>
<span class="token comment"># ...</span>
</code></pre><h2 id="directory-file-sizes" tabindex="-1">Directory file sizes</h2>`,76),F=l(`<p>Using <code>os.path.getsize()</code> and <code>os.listdir()</code> together on Windows:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> total_size <span class="token operator">=</span> <span class="token number">0</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Windows\\\\System32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     total_size <span class="token operator">=</span> total_size <span class="token operator">+</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Windows\\\\System32&#39;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>total_size<span class="token punctuation">)</span>
<span class="token comment"># 1117846456</span>
</code></pre><p>Using <code>pathlib</code> on *nix:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> total_size <span class="token operator">=</span> <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> sub_path <span class="token keyword">in</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/usr/bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     total_size <span class="token operator">+=</span> sub_path<span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>st_size
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>total_size<span class="token punctuation">)</span>
<span class="token comment"># 1903178911</span>
</code></pre><h2 id="copying-files-and-folders" tabindex="-1">Copying files and folders</h2><p>The <code>shutil</code> module provides functions for copying files, as well as entire folders.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> shutil<span class="token punctuation">,</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\spam.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\delicious&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># C:\\\\delicious\\\\spam.txt&#39;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token string">&#39;eggs.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\delicious\\\\eggs2.txt&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\delicious\\\\eggs2.txt&#39;</span>
</code></pre><p>While <code>shutil.copy()</code> will copy a single file, <code>shutil.copytree()</code> will copy an entire folder and every folder and file contained in it:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> shutil<span class="token punctuation">,</span> os

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>copytree<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\bacon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\bacon_backup&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\bacon_backup&#39;</span>
</code></pre><h2 id="moving-and-renaming" tabindex="-1">Moving and Renaming</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> shutil

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\bacon.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\eggs&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\eggs\\\\bacon.txt&#39;</span>
</code></pre><p>The destination path can also specify a filename. In the following example, the source file is moved and renamed:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\bacon.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\eggs\\\\new_bacon.txt&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\eggs\\\\new_bacon.txt&#39;</span>
</code></pre><p>If there is no eggs folder, then <code>move()</code> will rename bacon.txt to a file named eggs:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\bacon.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\eggs&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># &#39;C:\\\\eggs&#39;</span>
</code></pre><h2 id="deleting-files-and-folders" tabindex="-1">Deleting files and folders</h2><ul><li><p>Calling <code>os.unlink(path)</code> or <code>Path.unlink()</code> will delete the file at path.</p></li><li><p>Calling <code>os.rmdir(path)</code> or <code>Path.rmdir()</code> will delete the folder at path. This folder must be empty of any files or folders.</p></li><li><p>Calling <code>shutil.rmtree(path)</code> will remove the folder at path, and all files and folders it contains will also be deleted.</p></li></ul><h2 id="walking-a-directory-tree" tabindex="-1">Walking a Directory Tree</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> folder_name<span class="token punctuation">,</span> subfolders<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">&#39;C:\\\\delicious&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;The current folder is </span><span class="token interpolation"><span class="token punctuation">{</span>folder_name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">for</span> subfolder <span class="token keyword">in</span> subfolders<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;SUBFOLDER OF {folder_name}: {subfolder}&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">for</span> filename <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;FILE INSIDE {folder_name}: filename{filename}&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># The current folder is C:\\delicious</span>
<span class="token comment"># SUBFOLDER OF C:\\delicious: cats</span>
<span class="token comment"># SUBFOLDER OF C:\\delicious: walnut</span>
<span class="token comment"># FILE INSIDE C:\\delicious: spam.txt</span>

<span class="token comment"># The current folder is C:\\delicious\\cats</span>
<span class="token comment"># FILE INSIDE C:\\delicious\\cats: catnames.txt</span>
<span class="token comment"># FILE INSIDE C:\\delicious\\cats: zophie.jpg</span>

<span class="token comment"># The current folder is C:\\delicious\\walnut</span>
<span class="token comment"># SUBFOLDER OF C:\\delicious\\walnut: waffles</span>

<span class="token comment"># The current folder is C:\\delicious\\walnut\\waffles</span>
<span class="token comment"># FILE INSIDE C:\\delicious\\walnut\\waffles: butter.txt</span>
</code></pre>`,19),U=t("a",{target:"_blank",href:"https://docs.python.org/3/library/pathlib.html"},"official documentation",-1),j="File and directory Paths - Python Cheatsheet",D="There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module.",L=[{property:"og:title",content:"File and directory Paths - Python Cheatsheet"},{property:"og:description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."},{name:"description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."}],B={__name:"20-file-directory-path",setup(z,{expose:i}){const p={title:"File and directory Paths - Python Cheatsheet",description:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module.",meta:[{property:"og:title",content:"File and directory Paths - Python Cheatsheet"},{property:"og:description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."},{name:"description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."}]};return i({frontmatter:p}),b({title:"File and directory Paths - Python Cheatsheet",meta:[{property:"og:title",content:"File and directory Paths - Python Cheatsheet"},{property:"og:description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."},{name:"description",content:"There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module."}]}),(S,W)=>{const r=P,o=w,e=f,c=y,u=h,k=m,g=d;return _(),x("div",C,[s(r,{title:p.title,description:p.description},{default:a(()=>[n(" Handling file and directory Paths ")]),_:1},8,["title","description"]),v,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[n(" os.path VS pathlib ")]),_:1}),s(e,null,{default:a(()=>[n(" The `pathlib` module was added in Python 3.4, offering an object-oriented way to handle file system paths. ")]),_:1})]),_:1}),T,s(g,null,{default:a(()=>[s(u,null,{default:a(()=>[n(" WARNING ")]),_:1}),s(k,null,{default:a(()=>[n(" Directories themselves also have a size! So, you might want to check for whether a path is a file or directory using the methods in the methods discussed in the above section. ")]),_:1})]),_:1}),F,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[n(" Pathlib vs Os Module ")]),_:1}),s(e,null,{default:a(()=>[n(" `pathlib` provides a lot more functionality than the ones listed above, like getting file name, getting file extension, reading/writing a file without manually opening it, etc. See the "),U,n(" if you intend to know more. ")]),_:1})]),_:1})])}}};export{B as default,D as description,L as meta,j as title};
