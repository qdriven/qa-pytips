---
title: Python Main function - Python Cheatsheet
description: is the name of the scope in which top-level code executes. A module’s name is set equal to main when read from standard input, a script, or from an interactive prompt.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Main top-level script environment
</base-title>

## main 是什么？

`__main__`是顶层代码执行的范围的名称。
当从标准输入、脚本或交互式提示符中读取时，一个模块的**名称**被设置为等于`__main__`。

一个模块可以通过检查它自己的`__name__`来发现它是否在主范围内运行，这允许在一个模块中有条件地执行代码的常见习惯。当它作为脚本或用`python -m`运行时，但不是在导入时。

``python
>>> if __name__ == "__main__":
...     # 只在以脚本形式运行时执行
... main()
```

对于一个包来说，同样的效果可以通过包含一个**main**.py模块来实现，其中的内容将在用-m运行该模块时执行。

例如，我们正在开发一个旨在作为模块使用的脚本，我们应该这样做。

``python
>>> def add(a, b):
... 返回 a+b
...
>> 如果 __name__ == "__main__":
... add(3, 5)
```

##优势

1. 每个Python模块都有它的`__name__`定义，如果这是`__main__`，就意味着该模块是由用户独立运行的，我们可以做相应的动作。
2. 如果你在另一个脚本中把这个脚本作为模块导入，那么**name**会被设置为脚本/模块的名称。
3. Python文件既可以作为可重用的模块，也可以作为独立的程序。
4. 如果 `__name__ == "main":`是用来执行一些代码的，只有当文件直接运行，而没有被导入的时候。


