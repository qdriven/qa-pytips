---
title: Python Context Manager - Python Cheatsheet
description: 虽然Python的上下文管理器被广泛使用，但很少有人了解其使用背后的目的。这些语句通常用于读写文件，通过确保特定的资源只用于某些进程，协助应用程序节约系统内存，改善资源管理。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Context Manager
</base-title>

虽然Python的上下文管理器被广泛使用，但很少有人了解其背后的目的。这些语句通常用于读写文件，通过确保特定的资源只用于某些进程，协助应用程序节约系统内存，改善资源管理。

## with语句

上下文管理器是一个对象，当一个上下文（一个代码块）开始和结束时，它会被通知。你通常在 "with "语句中使用它。它负责通知的工作。

例如，文件对象是上下文管理器。当一个上下文结束时，文件对象会自动关闭。

``python
>>> with open(filename) as f:
... file_contents = f.read()
...
>> # open_file对象已被自动关闭。
```

任何结束区块执行的行为都会导致上下文管理器的退出方法被调用。这包括异常，当一个错误导致你过早地退出一个开放的文件或连接时，这可能很有用。在没有正确关闭文件/连接的情况下退出一个脚本是一个坏主意，这可能会导致数据丢失或其他问题。通过使用一个上下文管理器，你可以确保总是采取预防措施来防止这种方式的损害或损失。

## 编写你自己的上下文管理器

由于`contextlib.contextmanager`装饰器的存在，我们也可以使用生成器的语法来编写一个上下文管理器。

``python
>>>导入contextlib
>> @contextlib.contextmanager
... def context_manager(num):
... print('Enter')
... 产生num + 1
... print('Exit')
...
>> with context_manager(2) as cm:
...     # 以下指令在以下情况下运行
...     # 上下文管理器的 "产出 "点是
...     # 达到了。'cm'将具有被产生的值
... print('就在中间的cm = {}'.format(cm))
...
# 进入
# 在中间的位置，cm = 3
# 退出
```
