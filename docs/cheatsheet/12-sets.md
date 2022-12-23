---
title: Python Sets - Python Cheatsheet
description: Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sets
</base-title>

Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and **sets**.

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries.
  </base-disclaimer-content>
</base-disclaimer>

Read <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> for a more in-deep reference.

## Initializing a set

There are two ways to create sets: using curly braces `{}` and the built-in function `set()`

<base-warning>
  <base-warning-title>
    Empty Sets
  </base-warning-title>
  <base-warning-content>
    When creating set, be sure to not use empty curly braces <code>{}</code> or you will get an empty dictionary instead.
  </base-warning-content>
</base-warning>

```python
>>> s = {1, 2, 3}
>>> s = set([1, 2, 3])

>>> s = {}  # this will create a dictionary instead of a set
>>> type(s)
# <class 'dict'>
```

## Unordered collections of unique elements

A set automatically remove all the duplicate values.

```python
>>> s = {1, 2, 3, 2, 3, 4}
>>> s
# {1, 2, 3, 4}
```

And as an unordered data type, they can't be indexed.

```python
>>> s = {1, 2, 3}
>>> s[0]
# Traceback (most recent call last):
# File "<stdin>", line 1, in <module>
# TypeError: 'set' object does not support indexing
```

## set add() and update()

Using the `add()` method we can add a single element to the set.

```python
>>> s = {1, 2, 3}
>> s.add(4)
>>> s
# {1, 2, 3, 4}
```

而用`update()`，则有多个。

``python
>>> s = {1, 2, 3}
>> s.update([2, 3, 4, 5, 6])
>>> s
# {1, 2, 3, 4, 5, 6}
```

## 设置 remove() 和 discard()

这两个方法都会从集合中删除一个元素，但是`remove()`如果值不存在，会引发一个`key error'。

``python
>>> s = {1, 2, 3}
>> s.remove(3)
>>> s
# {1, 2}

>> s.remove(3)
# 回溯（最近一次调用）。
# 文件"<stdin>"，第1行，在<module>中
# KeyError: 3
```

`discard()'不会引发任何错误.

``python
>>> s = {1, 2, 3}
>> s.discard(3)
>>> s
# {1, 2}
>> s.丢弃(3)
```

## set union()

`union()`或`|`将创建一个新的集合，其中包含所提供集合的所有元素。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>> s1.union(s2) # 或 's1 | s2' 。
# {1, 2, 3, 4, 5}
```

## 设置交叉点

`intersection`或`&`将返回一个只包含所有共同元素的集合。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>> s1.intersection(s2, s3) # 或 's1 & s2 & s3' 。
# {3}
```

## 设置差异

`difference`或`-`将只返回第一个集合(被调用的集合)所特有的元素.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}

>> s1.difference(s2) # 或's1 - s2
# {1}

>> s2.difference(s1) # 或 's2 - s1' # {1}。
# {4}
```

## Set symetric_difference

`symetric_difference`或`^`将返回它们之间不共同的所有元素.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>> s1.symmetric_difference(s2) # 或 's1 ^ s2' 。
# {1, 4}
```
