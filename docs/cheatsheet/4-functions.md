---
title: Python Functions - Python Cheatsheet
description: In Python, A function is a block of organized code that is used to perform a single task.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functions
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A function is a block of organized code that is used to perform a single task. They provide better modularity for your application and reuse-ability.
  </base-disclaimer-content>
</base-disclaimer>

## Function arguments

A function can take `arguments` and `return values`:

In the following example, the function **say_hello** receives the argument "name" and prints a greeting:

```python
>>> def say_hello(name):
... print(f'Hello {name}')
...
>>> say_hello('Carlos')
# Hello Carlos

>> say_hello('Wanda')
# Hello Wanda

>> say_hello('Rose')
# 你好，罗斯
```

## 关键字参数

为了提高代码的可读性，我们应该尽可能的明确。我们可以通过使用 "关键字参数 "在我们的函数中实现这一点。

```python
>>> def say_hi(name, greeting):
... print(f"{问候}{名字}")
...
>> # 没有关键字参数
>>> say_hi('John', 'Hello')
# Hello John

>> # 有关键字参数
>>> say_hi(name='Anna', greeting='Hi')
# 你好，安娜
```

## 返回值

当使用`def`语句创建一个函数时, 你可以用`return`语句指定返回值是什么。一个返回语句由以下内容组成。

- `return`关键字。

- 函数应该返回的值或表达式。

``python
>>> def sum_two_numbers(number_1, number_2):
... 返回 number_1 + number_2
...
>> result = sum_two_numbers(7, 8)
>> print(result)
# 15
```

## 本地和全局范围

- 全局作用域中的代码不能使用任何局部变量。

- 然而，局部作用域可以访问全局变量。

- 一个函数的局部作用域中的代码不能使用任何其他局部作用域中的变量。

- 如果不同的变量在不同的作用域中，你可以为它们使用相同的名字。也就是说，可以有一个名为spam的局部变量和一个同样名为spam的全局变量。

``python
global_variable = 'I am available everywhere'.

>>> def some_function():
... print(global_variable) # 因为是全局的
... local_variable = "只在这个函数中可用"
... print(local_variable)
...
>> # 下面的代码会出错，因为
>> # 'local_variable'只存在于'some_function'内部
>>> print(local_variable)
回溯（最近一次调用）。
  文件"<stdin>"，第10行，在<module>中
NameError: name 'local_variable' 没有定义
```

## 全局声明

如果你需要从一个函数中修改一个全局变量, 可以使用global语句:

```python
>>> def spam():
...global eggs
... eggs = 'spam
...
>>> eggs = 'global'
>>> spam()
>> print(eggs)
```

有四条规则可以判断一个变量是在局部范围还是全局范围。

1. 如果一个变量在全局范围内使用（也就是在所有函数之外），那么它总是一个全局变量。

1. 如果在一个函数中为该变量有一个全局声明，那么它就是一个全局变量。

1. 否则，如果该变量在函数中的赋值语句中被使用，它就是一个局部变量。

1. 但如果该变量没有在赋值语句中使用，它就是一个全局变量。

## Lambda函数

在Python中，lambda函数是一个单行的匿名函数，它可以有任意数量的参数，但只能有一个表达式。

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 Tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda is a minimal function definition that can be used inside an expression. Unlike FunctionDef, body holds a single node.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Single line expression
  </base-warning-title>
  <base-warning-content>
    Lambda functions can only evaluate an expression, like a single line of code.
  </base-warning-content>
</base-warning>

This function:

```python
>>> def add(x, y):
... return x + y
...
>>> add(5, 3)
# 8
```

相当于_lambda_函数:

```python
>> add = lambda x, y: x + y
>>> add(5, 3)
# 8
```

像普通的嵌套函数一样，lambdas也可以作为词法闭包工作。

```python
>>> def make_adder(n):
... return lambda x: x + n
...
>>> plus_3 = make_adder(3)
>> plus_5 = make_adder(5)

>>> plus_3(4)
# 7
>>> plus_5(4)
# 9
```


