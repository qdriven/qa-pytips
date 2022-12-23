---
title: Python Json 模块 - Python Cheatsheet
Description: Python有内置的json模块，它允许我们处理JSON（JavaScript对象符号）数据。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">。
Python Json 模块
</base-title>

JSON是JavaScript Object Notation的缩写，是一种用于存储和传输数据的轻量级格式。当数据从服务器发送到网页时，JSON经常被使用。

Python有内置模块`json`，它允许我们处理JSON数据。

``python
输入json
```

## JSON数据类型

一个JSON对象类似于Python字典，但有以下区别。

- JSON键总是字符串。
- 字符串总是用双引号括起来。
- 一个JSON布尔值以小写字母开始。
- `null`是相当于Python的`None`的JSON。

JSON支持的数据类型有。

- 字符串
- 数字
- 布尔型
- 空
- 对象
- 阵列

例子。

````json
{
  "name": "Charles",
  "年龄": 33,
  "有头发": false,
  "爱好": ["摄影", "跑步"],
  "外观": {
    "眼睛": "棕色",
    "头发颜色": null
  }
}
```

## JSON loads()方法

使用`json.load`方法, 你可以解析一个JSON对象并将其转换为Python字典。

```python
>>>导入json

>>> json_person = '{"name": "Charles", "age": 33, "have_hair": false, "hobbies": ["摄影", "跑步"]}'
>> python_person = json.load(json_person)
>>> python_person
# {'name': 'Charles', 'age': 33, 'have_hair': False, 'hobbies': ['photography', 'running']}

>> type(python_person)
# <类 'dict'>

>> python_person.get("name")
# 'Charles'.
```

## JSON dumps()方法

另一种方式。`dumps()`方法将Python对象转换为JSON字符串。

```python
>>>导入json

>>> python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
>> json_person = json.dumps(python_person)

>>> json_person
# '{"姓名": "Charles", "age": 33, "has_hair": false, "hobbies": ["摄影", "跑步"]}'

>>> type(json_person)
# <class 'str'>
```

## 读取和写入Json文件

### 读取一个Json文件

```python
>>>导入json
>> with open("filename.json", "r") as f:
... json_content = json.load(f.read() )
...
>>> json.load(json_content)
# {'name': 'Charles', 'age': 33, 'has_hair': False}
```

### 写入一个Json文件

```python
>> 导入json

>>> person = {'name': 'Charles', 'age': 33}

>> with open("filename.json", "w") as f:
... f.write(json.dumps(person))
```


