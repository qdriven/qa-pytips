import{q as o,o as a,c,b as i,f as r,t as p,B as h,s}from"./app.e6b4b7b5.js";const d={class:"markdown-body"},y=p(`<p>\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002</p><h2 id="with" tabindex="-1">with\u8BED\u53E5</h2><p>\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5F53\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF08\u4E00\u4E2A\u4EE3\u7801\u5757\uFF09\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\uFF0C\u5B83\u4F1A\u88AB\u901A\u77E5\u3002\u4F60\u901A\u5E38\u5728 &quot;with &quot;\u8BED\u53E5\u4E2D\u4F7F\u7528\u5B83\u3002\u5B83\u8D1F\u8D23\u901A\u77E5\u7684\u5DE5\u4F5C\u3002</p><p>\u4F8B\u5982\uFF0C\u6587\u4EF6\u5BF9\u8C61\u662F\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u3002\u5F53\u4E00\u4E2A\u4E0A\u4E0B\u6587\u7ED3\u675F\u65F6\uFF0C\u6587\u4EF6\u5BF9\u8C61\u4F1A\u81EA\u52A8\u5173\u95ED\u3002</p><p>\`\`python</p><blockquote><blockquote><blockquote><p>with open(filename) as f: \u2026 file_contents = f.read() \u2026</p></blockquote><h1 id="open-file" tabindex="-1">open_file\u5BF9\u8C61\u5DF2\u88AB\u81EA\u52A8\u5173\u95ED\u3002</h1></blockquote></blockquote><pre><code>
\u4EFB\u4F55\u7ED3\u675F\u533A\u5757\u6267\u884C\u7684\u884C\u4E3A\u90FD\u4F1A\u5BFC\u81F4\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u7684\u9000\u51FA\u65B9\u6CD5\u88AB\u8C03\u7528\u3002\u8FD9\u5305\u62EC\u5F02\u5E38\uFF0C\u5F53\u4E00\u4E2A\u9519\u8BEF\u5BFC\u81F4\u4F60\u8FC7\u65E9\u5730\u9000\u51FA\u4E00\u4E2A\u5F00\u653E\u7684\u6587\u4EF6\u6216\u8FDE\u63A5\u65F6\uFF0C\u8FD9\u53EF\u80FD\u5F88\u6709\u7528\u3002\u5728\u6CA1\u6709\u6B63\u786E\u5173\u95ED\u6587\u4EF6/\u8FDE\u63A5\u7684\u60C5\u51B5\u4E0B\u9000\u51FA\u4E00\u4E2A\u811A\u672C\u662F\u4E00\u4E2A\u574F\u4E3B\u610F\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u6216\u5176\u4ED6\u95EE\u9898\u3002\u901A\u8FC7\u4F7F\u7528\u4E00\u4E2A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\uFF0C\u4F60\u53EF\u4EE5\u786E\u4FDD\u603B\u662F\u91C7\u53D6\u9884\u9632\u63AA\u65BD\u6765\u9632\u6B62\u8FD9\u79CD\u65B9\u5F0F\u7684\u635F\u5BB3\u6216\u635F\u5931\u3002

## \u7F16\u5199\u4F60\u81EA\u5DF1\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668

\u7531\u4E8E\`contextlib.contextmanager\`\u88C5\u9970\u5668\u7684\u5B58\u5728\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u751F\u6210\u5668\u7684\u8BED\u6CD5\u6765\u7F16\u5199\u4E00\u4E2A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u3002

\`\`python
&gt;&gt;&gt;\u5BFC\u5165contextlib
&gt;&gt; @contextlib.contextmanager
... def context_manager(num):
... print(&#39;Enter&#39;)
... \u4EA7\u751Fnum + 1
... print(&#39;Exit&#39;)
...
&gt;&gt; with context_manager(2) as cm:
...     # \u4EE5\u4E0B\u6307\u4EE4\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\u8FD0\u884C
...     # \u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u7684 &quot;\u4EA7\u51FA &quot;\u70B9\u662F
...     # \u8FBE\u5230\u4E86\u3002&#39;cm&#39;\u5C06\u5177\u6709\u88AB\u4EA7\u751F\u7684\u503C
... print(&#39;\u5C31\u5728\u4E2D\u95F4\u7684cm = {}&#39;.format(cm))
...
# \u8FDB\u5165
# \u5728\u4E2D\u95F4\u7684\u4F4D\u7F6E\uFF0Ccm = 3
# \u9000\u51FA
</code></pre>`,7),P="Python Context Manager - Python Cheatsheet",u="\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002",b=[{property:"og:title",content:"Python Context Manager - Python Cheatsheet"},{property:"og:description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"},{name:"description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"}],f={__name:"11-context-manager",setup(l,{expose:e}){const t={title:"Python Context Manager - Python Cheatsheet",description:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002",meta:[{property:"og:title",content:"Python Context Manager - Python Cheatsheet"},{property:"og:description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"},{name:"description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"}]};return e({frontmatter:t}),o({title:"Python Context Manager - Python Cheatsheet",meta:[{property:"og:title",content:"Python Context Manager - Python Cheatsheet"},{property:"og:description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"},{name:"description",content:"\u867D\u7136Python\u7684\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5F88\u5C11\u6709\u4EBA\u4E86\u89E3\u5176\u4F7F\u7528\u80CC\u540E\u7684\u76EE\u7684\u3002\u8FD9\u4E9B\u8BED\u53E5\u901A\u5E38\u7528\u4E8E\u8BFB\u5199\u6587\u4EF6\uFF0C\u901A\u8FC7\u786E\u4FDD\u7279\u5B9A\u7684\u8D44\u6E90\u53EA\u7528\u4E8E\u67D0\u4E9B\u8FDB\u7A0B\uFF0C\u534F\u52A9\u5E94\u7528\u7A0B\u5E8F\u8282\u7EA6\u7CFB\u7EDF\u5185\u5B58\uFF0C\u6539\u5584\u8D44\u6E90\u7BA1\u7406\u3002"}]}),(g,_)=>{const n=h;return a(),c("div",d,[i(n,{title:t.title,description:t.description},{default:r(()=>[s(" Python Context Manager ")]),_:1},8,["title","description"]),y])}}};export{f as default,u as description,b as meta,P as title};