---
title: Python Basics - Python Cheatsheet
description: python的基础知识。我们都需要从某个地方开始，那么就在这里做吧。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Basics
</base-title>

python的基础知识。我们都需要从某个地方开始，那么就在这里做吧。

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://docs.python.org/3/tutorial/index.html">Python 3 tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python是一种易于学习、功能强大的编程语言[......]Python的优雅语法和动态类型，以及它的解释性质，使它成为脚本和快速应用开发的理想语言
  </base-disclaimer-content>
</base-disclaimer>

<!-- For a more complete list of resources, check the article [Who to Follow, What to Read and Where to Ask](https://www.pythoncheatsheet.org/blog/python-follow-read-and-ask/). -->

## Math Operators

From **Highest** to **Lowest** precedence:

| Operators | Operation         | Example         |
| --------- | ----------------- | --------------- |
| \*\*      | Exponent          | `2 ** 3 = 8`    |
| %         | Modulus/Remainder | `22 % 8 = 6`    |
| //        | Integer division  | `22 // 8 = 2`   |
| /         | Division          | `22 / 8 = 2.75` |
| \*        | Multiplication    | `3 * 3 = 9`     |
| -         | Subtraction       | `5 - 2 = 3`     |
| +         | Addition          | `2 + 2 = 4`     |

Examples of expressions:

```python
>>> 2 + 3 * 6
# 20

>>> (2 + 3) * 6
# 30

>>> 2 ** 8
#256

>>> 23 // 7
# 3

>>> 23 % 7
# 2

>>> (5 - 1) * ((7 + 1) / (3 - 1))
# 16.0
```

## 增强的赋值运算符

| Operator   | Equivalent      |
| ---------- | --------------- |
| `var += 1` | `var = var + 1` |
| `var -= 1` | `var = var - 1` |
| `var *= 1` | `var = var * 1` |
| `var /= 1` | `var = var / 1` |
| `var %= 1` | `var = var % 1` |

Examples:

```python
>>> greeting = 'Hello'
>>> greeting += ' world!'
>>> greeting
# 'Hello world!'

>>> number = 1
>>> number += 1
>>> number
# 2

>>> my_list = ['item']
>>> my_list *= 3
>>> my_list
# ['item', 'item', 'item']
```

## 数据类型

| Data Type              | Examples                                  |
| ---------------------- | ----------------------------------------- |
| Integers               | `-2, -1, 0, 1, 2, 3, 4, 5`                |
| Floating-point numbers | `-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25` |
| Strings                | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`   |

## 串联和复制

String 串联:

```python
>>> 'Alice' 'Bob'
# 'AliceBob'
```

String 复制:

```python
>>> 'Alice' * 5
# 'AliceAliceAliceAliceAlice'
```

## 变量

你可以给变量起任何名字，遵守以下规则:

1. It can be only one word.

```python
>>> # bad
>>> my variable = 'Hello'

>>> # good
>>> var = 'Hello'
```

2. It can use only letters, numbers, and the underscore (`_`) character.

```python
>>> # bad
>>> %$@variable = 'Hello'

>>> # good
>>> my_var = 'Hello'

>>> # good
>>> my_var_2 = 'Hello'
```

3. It can’t begin with a number.

```python
>>> # this wont work
>>> 23_var = 'hello'
```

4. Variable name starting with an underscore (`_`) are considered as "unuseful".

```python
>>> # _spam should not be used again in the code
>>> _spam = 'Hello'
```

## Comments

Inline comment:

```python
# This is a comment
```

Multiline comment:

```python
# This is a
# multiline comment
```

Code with a comment:

```python
a = 1  # initialization
```

Please note the two spaces in front of the comment.

Function docstring:

```python
def foo():
    """
    This is a function docstring
    You can also use:
    ''' Function Docstring '''
    """
```

## The print() Function
`print()`函数写出它所给的参数的值。[......]它可以处理多个参数、浮点数量和字符串。字符串打印时不加引号，项目之间插入一个空格，所以你可以很好地格式化它们:

```python
>>> print('Hello world!')
# Hello world!

>>> a = 1
>>> print('Hello world!', a)
# Hello world! 1
```

### The end keyword

关键字参数`end`可以用来避免输出后的换行，或者用一个不同的字符串来结束输出:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
>>> for word in phrase:
...     print(word, end='-')
...
# printed-with-a-dash-in-between-
```
### 关键字 sep

关键字 `sep` 指定如何分离对象，如果有多个对象的话。

``python
print('cats', 'dogs', 'mice', sep=',' )
# cats,dogs,mice
```

## The input() Function

这个函数接收来自用户的输入，并将其转换为一个字符串。

```python
>> print('What is your name?') # 询问他们的名字
>>> my_name = input()
>> print('Hi, {}'.format(my_name))
# 你的名字是什么？
# Martha
# 你好, 玛莎
```

`input()`也可以不使用`print()`而设置一个默认信息。

```python
>> my_name = input('What is your name? ') # 默认信息
>> print('Hi, {}'.format(my_name))
# 你的名字是什么？玛莎
# 你好，玛莎
```

## The len() Function

评估为字符串, 列表, 字典等的字符数的整数值:

``python
>>> len('hello')
# 5

>>> len(['cat', 3, 'dog'])
# 3
```

<base-warning>
  <base-warning-title>Test of emptiness</base-warning-title>
  <base-warning-content>
    Test of emptiness of strings, lists, dictionaries, etc., should not use
    <code>len</code>, but prefer direct boolean evaluation.
  </base-warning-content>
</base-warning>

Test of emptiness example:

```python
>>> a = [1, 2, 3]

# bad
>>> if len(a) > 0: # evaluates to True
... print("the list is not empty!")
...
# the list is not empty!

# good
>>> if a: # evaluates to True
... print("the list is not empty!")
...
# the list is not empty!
```

## The str(), int(), and float() Functions

These functions allow you to change the type of variable. For example, you can transform from an `integer` or `float` to a `string`:

```python
>>> str(29)
# '29'

>>> str(-3.14)
# '-3.14'
```

或者从一个 "字符串 "到一个 "整数 "或 "浮点"。

``python
>>> int('11')
# 11

>>> float('3.14')
# 3.14
```