---
title: Python Json 和 YAML - Python Cheatsheet
decription: JSON是JavaScript Object Notation的缩写，是一种用于存储和传输数据的轻型格式。当数据从服务器发送至网页时，Json经常被使用。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON和YAML
</base-title>

## JSON

JSON是JavaScript Object Notation的缩写，是一种用于存储和传输数据的轻量级格式。当数据从服务器发送至网页时，Json经常被使用。

```python
>>>导入json
>> with open("filename.json", "r") as f:
... content = json.load(f)
```

用以下方法写一个JSON文件。

```python
>>>导入json

>>> content = {"name": "Joe", "age": 20}
>> with open("filename.json", "w") as f:
... json.dump(content, f, indent=2)
```

## YAML

与JSON相比，YAML的可维护性要好得多，并且可以添加注释。对于人类必须编辑的配置文件来说，它是一个方便的选择。

有两个主要的库可以访问YAML文件。

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

在你的虚拟环境中使用`pip install`来安装它们。

第一个更容易使用，但第二个，Ruamel，更好的实现了YAML
规范，并允许在不改变注释的情况下修改YAML内容。

用以下方法打开一个YAML文件

``python
>>> from ruamel.yaml import YAML

>> with open("filename.yaml") as f:
... yaml=YAML()
... yaml.load(f)
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig)是一个非常方便的包，可以完全抽象出底层的配置文件格式。它允许从JSON、YAML、TOML等加载一个Python字典。

用以下方式安装它。

``bash
pip install anyconfig
```

使用方法。

```python
>> 输入 anyconfig
>> conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")
```


通过www.DeepL.com/Translator（免费版）翻译