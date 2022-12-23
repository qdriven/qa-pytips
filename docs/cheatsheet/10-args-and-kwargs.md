---
title: Python Args and Kwargs - Python Cheatsheet
description: args和kwargs看起来很可怕，但事实是，它们并不难掌握，而且有能力赋予你的函数以灵活性和可读性。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Args and Kwargs
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> and <code>**kwargs</code> 可能看起来很可怕，但事实是，它们并不难掌握，而且有能力赋予你的功能以很大的灵活性
  </base-disclaimer-content>
</base-disclaimer>

Read the article <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link> for a more in deep introduction.

## Args and Kwargs

`*args`和`**kwargs`允许你在调用函数时传递未定义数量的参数和关键字。

```python
>>> def some_function(*args, **kwargs):
...     pass
...
>>> # call some_function with any number of arguments
>>> some_function(arg1, arg2, arg3)

>>> # call some_function with any number of keywords
>>> some_function(key1=arg1, key2=arg2, key3=arg3)

>>> # call both, arguments and keywords
>>> some_function(arg, key1=arg1)

>>> # or none
>>> some_function()
```

<base-warning>
  <base-warning-title>
    Python conventions
  </base-warning-title>
  <base-warning-content>
    The words <code>*args</code> and <code>**kwargs</code> 是惯例。它们不是由解释器强加的，而是被Python社区认为是好的做法。
  </base-warning-content>
</base-warning>

## args

You can access the _arguments_ through the `args` variable:

```python
>>> def some_function(*args):
...     print(f'Arguments passed: {args} as {type(args)}')
...
>>> some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

Keywords are accessed through the `kwargs` variable:

```python
>>> def some_function(**kwargs):
...     print(f'keywords: {kwargs} as {type(kwargs)}')
...
>>> some_function(key1='arg1', key2='arg2')
# keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```
