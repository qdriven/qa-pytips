---
title: Python Comprehensions - Python Cheatsheet
description: List comprehensions provide a concise way to create lists
---

<base-title :title="frontmatter.title" :description="frontmatter.description">。
Python的理解力
</base-title>

列表理解是一种特殊的语法，它让我们从其他列表中创建列表，在处理数字和一两层嵌套for循环时非常有用。

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    List comprehensions provide a concise way to create lists. [...] or to create a subsequence of those elements that satisfy a certain condition.
  </base-disclaimer-content>
</base-disclaimer>

Read <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> for a more in-deep or introduction.

## List comprehension

This is how we create a new list from an existing collection with a For Loop:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = []
>>> for n in names:
... new_list.append(n)
...
>>> new_list
# ['查尔斯', '苏珊', '帕特里克', '乔治']
```

这就是我们如何用List Comprehension做同样的事情。

``python
>> names = ['Charles', 'Susan', 'Patrick', 'George'] 。

>> new_list = [n for n in names]
>> new_list
# ['查尔斯', '苏珊', '帕特里克', '乔治']
```

我们可以用数字做同样的事情。

``python
>> n = [(a, b) for a in range(1, 3) for b in range(1, 3)]。
>>> n
# [(1, 1), (1, 2), (2, 1), (2, 2)]
```

## 添加条件语句

如果我们想让`new_list`只有以C开头的名字，用一个for循环，我们会这样做。

``python
>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol'].

>> new_list = []
>> for n in names:
... if n.startedwith('C'):
... new_list.append(n)
...
>> print(new_list)
# ['Charles', 'Carol']
```

In a List Comprehension, we add the `if` statement at the end:

```python
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

<base-disclaimer>
  <base-disclaimer-title>
    Set and Dict comprehensions
  </base-disclaimer-title>
  <base-disclaimer-content>
    The basics of `list` comprehensions also apply to <b>sets</b> and <b>dictionaries</b>.
  </base-disclaimer-content>
</base-disclaimer>

## Set comprehension

```python
>>> b = {"abc", "def"}
>>> {s.upper() for s in b}
{"ABC", "DEF"}
```

## Dict comprehension

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> {v: k for k, v in c.items()}
{'Pooka': 'name', 5: 'age'}
```

A List comprehension can be generated from a dictionary:

```python
>> c = {'name': 'Pooka', 'first_name': ' Oooka'}
>> ["{}:{}".format(k.upper(), v.upper()) for k, v in c.items() ]
['name:pooka', 'first_name:ouooka']
```
