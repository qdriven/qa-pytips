---
title: Python Zipfile Module - Python Cheatsheet
description: This module provides tools to create, read, write, append, and list a ZIP file.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile Module
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This module provides tools to create, read, write, append, and list a ZIP file.
  </base-disclaimer-content>
</base-disclaimer>

## 读取ZIP文件

```python
>> with zipfile.ZipFile('example.zip') as example_zip。
... print(example_zip.namelist()
... spam_info = example_zip.getinfo('spam.txt')
... print(spam_info.file_size)
... print(spam_info.compress_size)
... print('压缩后的文件小了 %sx！' % (round(spam_info.file_size / spam_info.compress_size, 2))
...
# ['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
# 13908
# 3828
# '压缩后的文件小了3.63倍!
```

## 从ZIP文件中提取

Zip文件对象的`extractall()`方法将ZIP文件中的所有文件和文件夹提取到当前工作目录中。

```python
>> with zipfile.ZipFile('example.zip') as example_zip:
... example_zip.extractall()
```

ZipFile对象的`extract()`方法将从ZIP文件中提取单个文件。

```python
>> with zipfile.ZipFile('example.zip') as example_zip:
... print(example_zip.extract('spam.txt'))
... print(example_zip.extract('spam.txt', 'C:\some\new\folders')
...
# 'C:\spam.txt')
# 'C:\some\new\folders\spam.txt'。
```

## 创建和添加到ZIP文件

```python
>>>导入zipfile
>>>
>> with zipfile.ZipFile('new.zip', 'w') as new_zip。
... new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

这段代码将创建一个新的ZIP文件，名为new.zip，其中有spam.txt的压缩内容。

## 读取ZIP文件的元数据

### 用namelist()获取文件名

```python
>>>导入zipfile
>>>
>> with zipfile.ZipFile('example.zip', 'r') as zf。
... print(zf.namelist())
...
# ['README.txt']
```

### 用infolist()获取所有元数据

```python
>>>导入datetime
>> 输入 zipfile
>>>
>> with zipfile.ZipFile(archive_name) as zf:
... for info in zf.infolist():
... system = 'Windows' if info.create_system == 0 else 'Unix' ...
... modified = datetime.datetime(*info.date_time)
... print(info.filename)
... print(f'Comment : {info.comment}')
... print(f'Modified : {modified}')
... print(f'System : {system}')
... print(f'ZIP version : {info.create_version}')
... print(f'Compressed : {info.compress_size} bytes')
... print(f'Uncompressed: {info.file_size} bytes')
...
# README.txt
# 评论 : b''
# 修改时间 : 2022-11-15 06:48:02
# System : Unix
# ZIP版本：30
# 压缩 : 65 bytes
# 未压缩的 76 bytes
```


