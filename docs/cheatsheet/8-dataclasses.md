---
title: Python Dataclasses - Python Cheatsheet
description: Dataclasses是Python类，但适合于存储数据对象。这个模块提供了一个装饰器和函数，用于自动为用户定义的类添加生成的特殊方法，如 __init__() 和 __repr__() 。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">。
Python数据类
</base-title>

`Dataclasses`是Python类，但适合于存储数据对象。
这个模块提供了一个装饰器和函数，用于自动添加生成的特殊方法，如`__init__()`和`__repr__()`到用户定义的类。

## 特点

1. 它们存储数据并代表某种数据类型。例如：一个数字。对于熟悉ORM的人来说，一个模型实例是一个数据对象。它代表一种特定的实体。它持有定义或代表该实体的属性。

2. 2.它们可以与同类型的其他对象进行比较。例如：一个数字可以大于、小于或等于另一个数字。

Python 3.7 提供了一个装饰器数据类，用来将一个类转换成一个数据类。

```python
>>>类Number。
... def __init__(self, val):
... self.val = val
...
>>> obj = Number(2)
>>> obj.val
# 2
```

用数据类

```python
>>> @dataclass
... 类Number。
... val: int
...
>> obj = Number(2)
>> obj.val
# 2
```

## 默认值

为你的数据类的字段添加默认值很容易。

```python
>>> @dataclass
... class Product:
...name: str
... count: int = 0
... 价格: float = 0.0
...
>> obj = Product("Python")
>>> obj.name
# Python

>>> obj.count
# 0

>>> obj.price
# 0.0
```

## 类型提示

在数据类中定义数据类型是强制性的。但是，如果你不想指定数据类型，可以使用`typing.Any`。

``python
>>> from dataclasses import dataclass
>>> from typing import Any

>> @dataclass
... class WithoutExplicitTypes:
... 名称：Any
...值。Any = 42
```