---
title: Python Control Flow - Python Cheatsheet
description: 控制流是单个语句、指令或函数调用被执行或评估的顺序。Python程序的控制流由条件语句、循环和函数调用来调节。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Control Flow
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Python control flow
  </base-disclaimer-title>
  <base-disclaimer-content>
 控制流是单个语句、指令或函数调用被执行或评估的顺序。Python程序的控制流由条件语句、循环和函数调用来调节。
  </base-disclaimer-content>
</base-disclaimer>

## Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `<`      | Less than                |
| `>`      | Greater Than             |
| `<=`     | Less than or Equal to    |
| `>=`     | Greater than or Equal to |

这些运算符根据你给它们的值，评估为真或假。

```python
>>> 42 == 42
True

>>> 40 == 42
False

>>> 'hello' == 'hello'
True

>>> 'hello' == 'Hello'
False

>>> 'dog' != 'cat'
True

>>> 42 == 42.0
True

>>> 42 == '42'
False
```

## Boolean Operators

有三个布尔运算符:`and', `or', 和`not'。

The `and` Operator’s _Truth_ Table:

| Expression        | Evaluates to |
| ----------------- | ------------ |
| `True and True`   | `True`       |
| `True and False`  | `False`      |
| `False and True`  | `False`      |
| `False and False` | `False`      |

The `or` Operator’s _Truth_ Table:

| Expression       | Evaluates to |
| ---------------- | ------------ |
| `True or True`   | `True`       |
| `True or False`  | `True`       |
| `False or True`  | `True`       |
| `False or False` | `False`      |

The `not` Operator’s _Truth_ Table:

| Expression  | Evaluates to |
| ----------- | ------------ |
| `not True`  | `False`      |
| `not False` | `True`       |

## Mixing Operators

你可以混合使用布尔运算符和比较运算符:

```python
>>> (4 < 5) and (5 < 6)
True

>>> (4 < 5) and (9 < 6)
False

>>> (1 == 2) or (2 == 2)
True
```

另外，你可以在一个表达式中混合使用多个布尔运算符，以及比较运算符:

```python
>>> 2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
True
```

## if Statements

if "语句评估一个表达式，如果该表达式为 "True"，则执行以下缩进代码:

```python
>>> name = 'Debora'

>>> if name == 'Debora':
...    print('Hi, Debora')
...
# Hi, Debora

>>> if name != 'George':
...    print('You are not George')
...
# You are not George
```

只有当 "if "和所有 "elif "表达式的评估结果为 "False "时，"else "语句才会执行:

```python
>>> name = 'Debora'

>>> if name == 'George':
...    print('Hi, George.')
... else:
...    print('You are not George')
...
# You are not George
```

只有在 "if "语句表达式为 "False "后，"elif "语句才被评估和执行。

```python
>>> name = 'George'

>>> if name == 'Debora':
...    print('Hi Debora!')
... elif name == 'George':
...    print('Hi George!')
...
# Hi George!
```

the `elif` and `else` parts are optional.

```python
>>> name = 'Antony'

>>> if name == 'Debora':
...    print('Hi Debora!')
... elif name == 'George':
...    print('Hi George!')
... else:
...    print('Who are you?')
...
# Who are you?
```


## 三元条件运算符

许多编程语言都有一个三元运算符，它定义了一个条件表达式。最常见的用法是做一个简洁的、简单的条件赋值语句。换句话说，它提供了单行代码，如果条件为真，就评估第一个表达式，否则就评估第二个表达式:

```
<expression1> if <condition> else <expression2>
```

Example:

```python
>>> age = 15

>>> # this if statement:
>>> if age < 18:
...    print('kid')
... else:
...    print('adult')
...
# output: kid

>>> # is equivalent to this ternary operator:
>>> print('kid' if age < 18 else 'adult')
# output: kid
```

Ternary operators can be chained:

```python
>>> age = 15

>>> # this ternary operator:
>>> print('kid' if age < 13 else 'teen' if age < 18 else 'adult')

>>> # is equivalent to this if statement:
>>> if age < 18:
...     if age < 13:
...         print('kid')
...     else:
...         print('teen')
... else:
...     print('adult')
...
# output: teen
```

## Switch-Case Statement

<base-disclaimer>
  <base-disclaimer-title>
    Switch-Case statements
  </base-disclaimer-title>
  <base-disclaimer-content>
    在计算机编程语言中，切换语句是一种选择控制机制，用于允许变量或表达式的值通过搜索和映射来改变程序执行的控制流。
  </base-disclaimer-content>
</base-disclaimer>

_Switch-Case语句_，即**结构模式匹配**，于2020年首次通过[PEP 622]（https://peps.python.org/pep-0622/）引入，然后于2022年9月随**Python 3.10**正式发布。

<base-disclaimer>
  <base-disclaimer-title>
    Official Tutorial
  </base-disclaimer-title>
  <base-disclaimer-content>
  The <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> provides an official tutorial for the Python Pattern matching or Switch-Case statements.
  </base-disclaimer-content>
</base-disclaimer>

### Matching single values

```python
>>> response_code = 201
>>> match response_code:
...     case 200:
...         print("OK")
...     case 201:
...         print("Created")
...     case 300:
...         print("Multiple Choices")
...     case 307:
...         print("Temporary Redirect")
...     case 404:
...         print("404 Not Found")
...     case 500:
...         print("Internal Server Error")
...     case 502:
...         print("502 Bad Gateway")
...
# Created
```

### 用 or 模式进行匹配

在这个例子中，管道字符(`|`或`or`)允许python对两种或多种情况返回相同的响应。

```python
>>> response_code = 502
>>> match response_code:
...     case 200 | 201:
...         print("OK")
...     case 300 | 307:
...         print("Redirect")
...     case 400 | 401:
...         print("Bad Request")
...     case 500 | 502:
...         print("Internal Server Error")
...
# Internal Server Error
```

### 通过Iterable的长度进行匹配


```python
>>> today_responses = [200, 300, 404, 500]
>>> match today_responses:
...     case [a]:
...             print(f"One response today: {a}")
...     case [a, b]:
...             print(f"Two responses today: {a} and {b}")
...     case [a, b, *rest]:
...             print(f"All responses: {a}, {b}, {rest}")
...
# All responses: 200, 300, [404, 500]
```

### 默认值

下划线符号(`_`)是用来定义默认情况的:

```python
>>> response_code = 800
>>> match response_code:
...     case 200 | 201:
...         print("OK")
...     case 300 | 307:
...         print("Redirect")
...     case 400 | 401:
...         print("Bad Request")
...     case 500 | 502:
...         print("Internal Server Error")
...     case _:
...         print("Invalid Code")
...
# Invalid Code
```

### 匹配的内置类

```python
>>> response_code = "300"
>>> match response_code:
...     case int():
...             print('Code is a number')
...     case str():
...             print('Code is a string')
...     case _:
...             print('Code is neither a string nor a number')
...
# Code is a string
```

### Guarding Match-Case Statements

```python
>>> response_code = 300
>>> match response_code:
...     case int():
...             if response_code > 99 and response_code < 500:
...                 print('Code is a valid number')
...     case _:
...             print('Code is an invalid number')
...
# Code is a valid number
```

## while 循环语句

while语句用于重复执行，只要一个表达式是`True':

```python
>>> spam = 0
>>> while spam < 5:
...     print('Hello, world.')
...     spam = spam + 1
...
# Hello, world.
# Hello, world.
# Hello, world.
# Hello, world.
# Hello, world.
```

## break Statements

如果执行到一个`break`语句, 就立即退出`while`循环的子句:

```python
>>> while True:
...     name = input('Please type your name: ')
...     if name == 'your name':
...         break
...
>>> print('Thank you!')
# Please type your name: your name
# Thank you!
```

## continue Statements

当程序执行到一个`continue`语句时, 程序的执行会立即跳回到循环的起点.

```python
>>> while True:
...     name = input('Who are you? ')
...     if name != 'Joe':
...         continue
...     password = input('Password? (It is a fish.): ')
...     if password == 'swordfish':
...         break
...
>>> print('Access granted.')
# Who are you? Charles
# Who are you? Debora
# Who are you? Joe
# Password? (It is a fish.): swordfish
# Access granted.
```

## For loop

`for`循环在一个`列表`, `元组`, dictionary`, `集合`或`字符串`上进行迭代:

```python
>>> pets = ['Bella', 'Milo', 'Loki']
>>> for pet in pets:
...     print(pet)
...
# Bella
# Milo
# Loki
```

## The range() function

`range()`函数返回一个数字序列. 它从0开始, 以1递增, 并在指定的数字前停止:

```python
>>> for i in range(5):
...     print(f'Will stop at 5! or 4? ({i})')
...
# Will stop at 5! or 4? (0)
# Will stop at 5! or 4? (1)
# Will stop at 5! or 4? (2)
# Will stop at 5! or 4? (3)
# Will stop at 5! or 4? (4)
```
`range()`函数也可以修改它的3个默认参数。前两个是`start'和`stop'值，第三个是`step'参数。步骤是变量在每次迭代后增加的数量。                                                                           

```python
# range(start, stop, step)
>>> for i in range(0, 10, 2):
...    print(i)
...
# 0
# 2
# 4
# 6
# 8
```

你甚至可以在步骤参数中使用一个负数，以使for循环向下而不是向上计数。

```python
>>> for i in range(5, -1, -1):
...     print(i)
...
# 5
# 4
# 3
# 2
# 1
# 0
```

## 对于else语句

这允许指定一个语句，在整个循环被执行的情况下执行。只在
当循环中可能出现 "break "条件时才有用:

```python
>>> for i in [1, 2, 3, 4, 5]:
...    if i == 3:
...        break
... else:
...    print("only executed when no item is equal to 3")
```

## Ending a Program with sys.exit()

`exit()` function allows exiting Python.

```python
>>> import sys

>>> while True:
...     feedback = input('Type exit to exit: ')
...     if feedback == 'exit':
...         print(f'You typed {feedback}.')
...         sys.exit()
...
# Type exit to exit: open
# Type exit to exit: close
# Type exit to exit: exit
# You typed exit
```
