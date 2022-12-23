---
title: 读写文件 - Python Cheatsheet
descripiton: 要在Python中读/写一个文件，你要使用with语句，它将在你完成后为你关闭文件，为你管理可用资源。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
读取和写入文件
</base-title>

##文件的读/写过程

要在Python中读/写一个文件，你需要使用`with`语句。
语句，它将在你完成后为你关闭文件，为你管理可用资源。

## 打开和读取文件

`open`函数打开一个文件并返回一个相应的文件对象。

``python
>> with open('C:\\Users\your_home_folder\hi.txt') as hello_file:
... hello_content = hello_file.read()
...
>>> hello_content
'Hello World!
```

或者，你可以使用_readlines()_方法，从文件中获得一个字符串值的列表，每行文本一个字符串。

``python
>>> with open('sonnet29.txt') as sonnet_file:
... sonnet_file.readlines()
...
# [When, in disgrace with fortune and men's eyes,/n',
# 我独自哭泣着我被抛弃的状态，#。
# And trouble deaf heaven with my bootless cries,and
# look upon myself and curse my fate,' '。］
```

你也可以逐行遍历该文件。

``python
>> with open('sonnet29.txt') as sonnet_file:
... for line in sonnet_file:
... print(line, end='')
...

```

## 写入文件

```python
>> with open('bacon.txt', 'w') as bacon_file:
... bacon_file.write('Hello world!\n')
...
# 13

>> with open('bacon.txt', 'a') as bacon_file:
... bacon_file.write('Bacon is not a vegetable.' )
...
# 25

>> with open('bacon.txt') as bacon_file:
... content = bacon_file.read()
...
>> print(content)
# Hello world!
```


