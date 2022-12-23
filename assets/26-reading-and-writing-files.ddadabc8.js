import{q as o,o as i,c as a,b as c,f as l,t as s,B as p,s as h}from"./app.e6b4b7b5.js";const r={class:"markdown-body"},d=s(`<p>##\u6587\u4EF6\u7684\u8BFB/\u5199\u8FC7\u7A0B</p><p>\u8981\u5728Python\u4E2D\u8BFB/\u5199\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u4F7F\u7528<code>with</code>\u8BED\u53E5\u3002 \u8BED\u53E5\uFF0C\u5B83\u5C06\u5728\u4F60\u5B8C\u6210\u540E\u4E3A\u4F60\u5173\u95ED\u6587\u4EF6\uFF0C\u4E3A\u4F60\u7BA1\u7406\u53EF\u7528\u8D44\u6E90\u3002</p><h2 id="" tabindex="-1">\u6253\u5F00\u548C\u8BFB\u53D6\u6587\u4EF6</h2><p><code>open</code>\u51FD\u6570\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u5E76\u8FD4\u56DE\u4E00\u4E2A\u76F8\u5E94\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p><p>\`\`python</p><blockquote><blockquote><p>with open(\u2018C:\\Users\\your_home_folder\\hi.txt\u2019) as hello_file: \u2026 hello_content = hello_file.read() \u2026</p><blockquote><p>hello_content &#39;Hello World!</p></blockquote></blockquote></blockquote><pre><code>
\u6216\u8005\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528_readlines()_\u65B9\u6CD5\uFF0C\u4ECE\u6587\u4EF6\u4E2D\u83B7\u5F97\u4E00\u4E2A\u5B57\u7B26\u4E32\u503C\u7684\u5217\u8868\uFF0C\u6BCF\u884C\u6587\u672C\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002

\`\`python
&gt;&gt;&gt; with open(&#39;sonnet29.txt&#39;) as sonnet_file:
... sonnet_file.readlines()
...
# [When, in disgrace with fortune and men&#39;s eyes,/n&#39;,
# \u6211\u72EC\u81EA\u54ED\u6CE3\u7740\u6211\u88AB\u629B\u5F03\u7684\u72B6\u6001\uFF0C#\u3002
# And trouble deaf heaven with my bootless cries,and
# look upon myself and curse my fate,&#39; &#39;\u3002\uFF3D
</code></pre><p>\u4F60\u4E5F\u53EF\u4EE5\u9010\u884C\u904D\u5386\u8BE5\u6587\u4EF6\u3002</p><p>\`\`python</p><blockquote><blockquote><p>with open(\u2018sonnet29.txt\u2019) as sonnet_file: \u2026 for line in sonnet_file: \u2026 print(line, end=\u2018\u2019) \u2026</p></blockquote></blockquote><pre><code>
## \u5199\u5165\u6587\u4EF6

\`\`\`python
&gt;&gt; with open(&#39;bacon.txt&#39;, &#39;w&#39;) as bacon_file:
... bacon_file.write(&#39;Hello world!\\n&#39;)
...
# 13

&gt;&gt; with open(&#39;bacon.txt&#39;, &#39;a&#39;) as bacon_file:
... bacon_file.write(&#39;Bacon is not a vegetable.&#39; )
...
# 25

&gt;&gt; with open(&#39;bacon.txt&#39;) as bacon_file:
... content = bacon_file.read()
...
&gt;&gt; print(content)
# Hello world!
</code></pre>`,11),g="\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet",w="\u8981\u5728Python\u4E2D\u8BFB/\u5199\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F60\u8981\u4F7F\u7528with\u8BED\u53E5\uFF0C\u5B83\u5C06\u5728\u4F60\u5B8C\u6210\u540E\u4E3A\u4F60\u5173\u95ED\u6587\u4EF6\uFF0C\u4E3A\u4F60\u7BA1\u7406\u53EF\u7528\u8D44\u6E90\u3002",m=[{property:"og:title",content:"\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet"}],k={__name:"26-reading-and-writing-files",setup(_,{expose:t}){const e={title:"\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet",descripiton:"\u8981\u5728Python\u4E2D\u8BFB/\u5199\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F60\u8981\u4F7F\u7528with\u8BED\u53E5\uFF0C\u5B83\u5C06\u5728\u4F60\u5B8C\u6210\u540E\u4E3A\u4F60\u5173\u95ED\u6587\u4EF6\uFF0C\u4E3A\u4F60\u7BA1\u7406\u53EF\u7528\u8D44\u6E90\u3002",meta:[{property:"og:title",content:"\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet"}]};return t({frontmatter:e}),o({title:"\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet",meta:[{property:"og:title",content:"\u8BFB\u5199\u6587\u4EF6 - Python Cheatsheet"}]}),(f,u)=>{const n=p;return i(),a("div",r,[c(n,{title:e.title,description:e.description},{default:l(()=>[h(" \u8BFB\u53D6\u548C\u5199\u5165\u6587\u4EF6 ")]),_:1},8,["title","description"]),d])}}};export{k as default,w as descripiton,m as meta,g as title};
