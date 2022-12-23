import{_ as h,a as g,b as m}from"./BaseWarningTitle.f5a386c9.js";import{_ as y,a as f,b}from"./BaseDisclaimerTitle.631caf82.js";import{q as w,o as _,c as P,b as s,f as a,e as t,s as n,t as p,B as x}from"./app.e6b4b7b5.js";const v={class:"markdown-body"},T=t("p",null,[n("The "),t("code",null,"pathlib"),n(" module was added in Python 3.4, offering an object-oriented way to handle file system paths.")],-1),j=t("code",null,"pathlib",-1),C=t("code",null,"os",-1),F=t("a",{target:"_blank",href:"https://docs.python.org/3/library/pathlib.html"},"official documentation",-1),z=p(`<h2 id="linux-and-windows-paths" tabindex="-1">Linux and Windows Paths</h2><p>On Windows, paths are written using backslashes (<code>\\</code>) as the separator between folder names. On Unix based operating system such as macOS, Linux, and BSDs, the forward slash (<code>/</code>) is used as the path separator. Joining paths can be a headache if your code needs to work on different platforms.</p><p>Fortunately, Python provides us with <code>pathlib.Path.joinpath</code> to easily handle this.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;usr&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&#39;bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&#39;spam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># usr/bin/spam</span>
</code></pre><p><code>pathlib</code> also provides a shortcut to joinpath using the <code>/</code> operator:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;usr&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&#39;bin&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;spam&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># usr/bin/spam</span>
</code></pre><p>Joining paths is helpful if you need to create different file paths under the same directory.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;accounts.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;details.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;invite.docx&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> home <span class="token operator">=</span> Path<span class="token punctuation">.</span>home<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> filename <span class="token keyword">in</span> my_files<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>home <span class="token operator">/</span> filename<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment"># /home/docs/accounts.txt</span>
<span class="token comment"># /home/docs/details.csv</span>
<span class="token comment"># /home/docs/invite.docx</span>
</code></pre><h2 id="the-current-working-directory" tabindex="-1">The current working directory</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> os <span class="token keyword">import</span> chdir

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home/docs</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> chdir<span class="token punctuation">(</span><span class="token string">&#39;/usr/lib/python3.10&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /usr/lib/python3.10</span>
</code></pre><h2 id="creating-new-folders" tabindex="-1">Creating new folders</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> cwd <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>cwd <span class="token operator">/</span> <span class="token string">&#39;delicious&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;walnut&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;waffles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment">#   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">#   File &quot;/usr/lib/python3.10/pathlib.py&quot;, line 1226, in mkdir</span>
<span class="token comment">#     self._accessor.mkdir(self, mode)</span>
<span class="token comment">#   File &quot;/usr/lib/python3.10/pathlib.py&quot;, line 387, in wrapped</span>
<span class="token comment">#     return strfunc(str(pathobj), *args)</span>
<span class="token comment"># FileNotFoundError: [Errno 2] No such file or directory: &#39;/home/docs/delicious/walnut/waffles&#39;</span>
</code></pre><p>The reason of this error is that the \u2018delicious\u2019 directory does not exist, so we cannot make the \u2018walnut\u2019 and the \u2018waffles\u2019 directories under it. To fix this, do:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> cwd <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>cwd <span class="token operator">/</span> <span class="token string">&#39;delicious&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;walnut&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;waffles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>parents<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><h2 id="absolute-vs-relative-paths" tabindex="-1">Absolute vs. Relative paths</h2><p>There are two ways to specify a file path.</p><ul><li>An <strong>absolute path</strong>, which always begins with the root folder</li><li>A <strong>relative path</strong>, which is relative to the program\u2019s current working directory</li></ul><p>There are also the dot (<code>.</code>) and dot-dot (<code>..</code>) folders. These are not real folders, but special names that can be used in a path. A single period (\u201Cdot\u201D) for a folder name is shorthand for \u201Cthis directory.\u201D Two periods (\u201Cdot-dot\u201D) means \u201Cthe parent folder.\u201D</p><h3 id="handling-absolute-paths" tabindex="-1">Handling Absolute paths</h3><p>To see if a path is an absolute path:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_absolute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_absolute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><p>You can also extract an absolute path:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home/docs</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># /home</span>
</code></pre><h3 id="handling-relative-paths" tabindex="-1">Handling Relative paths</h3><p>You can get a relative path from a starting path to another path.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;/etc/passwd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>relative_to<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># etc/passwd</span>
</code></pre><h2 id="path-and-file-validity" tabindex="-1">Path and File validity</h2><h3 id="checking-if-a-filedirectory-exists" tabindex="-1">Checking if a file/directory exists</h3><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/etc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h3 id="checking-if-a-path-is-a-file" tabindex="-1">Checking if a path is a file</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;nonexistentfile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h3 id="checking-if-a-path-is-a-directory" tabindex="-1">Checking if a path is a directory</h3><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># True</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;setup.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/spam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>
</code></pre><h2 id="getting-a-files-size-in-bytes" tabindex="-1">Getting a file\u2019s size in bytes</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> stat <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/bin/python3.10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>stat<span class="token punctuation">)</span> <span class="token comment"># stat contains some other information about the file as well</span>
<span class="token comment"># os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,</span>
<span class="token comment"># --snip--</span>
<span class="token comment"># st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>stat<span class="token punctuation">.</span>st_size<span class="token punctuation">)</span> <span class="token comment"># size in bytes</span>
<span class="token comment"># 10024</span>
</code></pre><h2 id="listing-directories" tabindex="-1">Listing directories</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

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
</code></pre><h2 id="directory-file-sizes" tabindex="-1">Directory file sizes</h2>`,38),M=p(`<pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> total_size <span class="token operator">=</span> <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> sub_path <span class="token keyword">in</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/usr/bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     total_size <span class="token operator">+=</span> sub_path<span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>st_size
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>total_size<span class="token punctuation">)</span>
<span class="token comment"># 1903178911</span>
</code></pre><h2 id="deleting-files-and-folders" tabindex="-1">Deleting files and folders</h2><ul><li><p>Calling <code>Path.unlink()</code> will delete the file at path.</p></li><li><p>Calling <code>Path.rmdir()</code> will delete the folder at path. This folder must be empty of any files or folders.</p></li></ul>`,3),V="Python Pathlib Module - Python Cheatsheet",E="The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths.",H=[{property:"og:title",content:"Python Pathlib Module - Python Cheatsheet"},{property:"og:description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."},{name:"description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."}],L={__name:"32-pathlib-module",setup(N,{expose:e}){const o={title:"Python Pathlib Module - Python Cheatsheet",description:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths.",meta:[{property:"og:title",content:"Python Pathlib Module - Python Cheatsheet"},{property:"og:description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."},{name:"description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."}]};return e({frontmatter:o}),w({title:"Python Pathlib Module - Python Cheatsheet",meta:[{property:"og:title",content:"Python Pathlib Module - Python Cheatsheet"},{property:"og:description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."},{name:"description",content:"The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths."}]}),(A,B)=>{const c=x,l=f,i=b,r=y,u=g,k=m,d=h;return _(),P("div",v,[s(c,{title:o.title,description:o.description},{default:a(()=>[n(" Python Pathlib Module ")]),_:1},8,["title","description"]),T,s(r,null,{default:a(()=>[s(l,null,{default:a(()=>[n(" Pathlib vs Os Module ")]),_:1}),s(i,null,{default:a(()=>[j,n(" provides a lot more functionality than the ones from "),C,n(" and listed here, like getting file name, getting file extension, reading/writing a file without manually opening it, etc. See the "),F,n(" if you intend to know more. ")]),_:1})]),_:1}),z,s(d,null,{default:a(()=>[s(u,null,{default:a(()=>[n(" WARNING ")]),_:1}),s(k,null,{default:a(()=>[n(" Directories themselves also have a size! So, you might want to check for whether a path is a file or directory using the methods in the methods discussed in the above section. ")]),_:1})]),_:1}),M])}}};export{L as default,E as description,H as meta,V as title};