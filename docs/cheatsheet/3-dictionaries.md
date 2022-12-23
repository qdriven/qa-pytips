

<base-title :title="frontmatter.title" :description="frontmatter.description">。
Python字典
</base-title>

在Python中，字典是一个_有序的_（来自Python > 3.7）`key`: `value`对的集合。

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key:value pair with <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Example Dictionary:

```python
my_cat = {
    'size': 'fat',
    'color': 'gray',
    'disposition': 'loud'
}
```

## values()

`values()`方法获得字典的**值。

``python
>>> pet = {'color': 'red', 'age': 42}
>> for value in pet.values():
... print(value)
...
# 红色
# 42
```

## keys()

`keys()`方法获得字典中的**keys**。

``python
>>> pet = {'color': 'red', 'age': 42}
>> for key in pet.keys():
... print(key)
...
# 颜色
#年龄
```

没有必要使用**.keys()**，因为在默认情况下，你将循环浏览键。

``python
>>> pet = {'color': 'red', 'age': 42}
>> for key in pet:
... print(key)
...
# 颜色
#年龄
```

## items()

`items()`方法获取一个字典中的**项，并以<router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tuple</router-link>的形式返回。

```python
>>> pet = {'color': 'red', 'age': 42}
>> for item in pet.items():
... print(item)
...
# ('颜色', '红色')
# ('年龄', 42)
```

使用`keys()`, `values()`, 和`items()`方法, 一个for循环可以分别迭代字典中的key, values, 或key-value对。

``python
>>> pet = {'color': 'red', 'age': 42}
>> for key, value in pet.items():
... print(f'Key: {key} Value: {value}')
...
# 关键：颜色 值：红色
# Key: age Value: 42
```

## get()

`get()`方法通过使用键来返回一个项目的值。如果键值不存在，则返回`None'。

``python
>>> wife = {'name': 'Rose', 'age': 33}

>> f'我妻子的名字是 {wife.get("name")}'
# '我妻子的名字是Rose'

>> f'她是 {wife.get("age")}岁。
# '她今年33岁了。

>> f'她深爱着{wife.get("丈夫")}'
# '她深深地爱着无'
```

你也可以把默认的`None`值改为你选择的其他值。

```python
>>> wife = {'name': 'Rose', 'age': 33}

>> f'她深爱着{wife.get("husband", "lover")}'
# '她深深地爱着爱人'
```

## 用setdefault()添加项目

可以用这种方式向字典中添加一个项目。

```python
>>> wife = {'name': 'Rose', 'age': 33}
>> 如果'has_hair'不在妻子中。
... wife['has_hair'] = True
```

使用`setdefault`方法，我们可以使同样的代码更加简短。

```python
>>> wife = {'name': 'Rose', 'age': 33}
>> wife.setdefault('has_hair', True)
>>> 妻子
# {'name': 'Rose', 'age': 33, 'has_hair': True}
```

## 移除项目

### pop()

`pop()`方法根据给定的键来删除并返回一个项目。

```python
>>> wife = {'name': 'Rose', 'age': 33, '头发': '棕色'}
>>> wife.pop('age')
# 33
>>> 妻子
# {'name': 'Rose', 'hair': 'brown'}
```

### popitem()

`popitem()`方法删除字典中的最后一个项目，并返回它。

```python
>>> wife = {'name': 'Rose', 'age': 33, '头发': '棕色'}
<>> wife.popitem()
# ('头发', '棕色')
>>> 妻子
# {'name': 'Rose', 'age': 33}
```

### del()

`del()`方法根据给定的键来删除一个项目。

```python
>>> wife = {'name': 'Rose', 'age': 33, '头发': '棕色'}
>> del wife['age']
>> 妻子
# {'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()`方法会删除字典中的所有项目。

``python
>>> wife = {'name': 'Rose', 'age': 33, '头发': '棕色'}
>> wife.clear()
>>> 妻子
# {}
```

## 检查字典中的键

```python
>>> person = {'name': 'Rose', 'age': 33}

>> 'name' in person.key()
# 真实

>>> '身高' in person.key()
# False

>>> '皮肤' in person # 你可以省略keys()
# False
```

## 检查字典中的值

```python
>>> person = {'name': 'Rose', 'age': 33}

>> 'Rose' in person.values()
# 真实

>>> 33 in person.values()
# 真实
```

## ＃＃漂亮的打印

```python
>>> 输入pprint

>>> wife = {'name': 'Rose', 'age': 33, 'have_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}.
>>> pprint.pprint(wife)
# {'年龄': 33,
# 'eye_color': 'brown',
# 'hair_color': 'brown',
# 'has_hair': 真。
# '高度': 1.6,
# 'name': 'Rose'}
```

## 合并两个字典

对于Python 3.5以上版本。

```python
>> dict_a = {'a': 1, 'b': 2}。
>> dict_b = {'b': 3, 'c': 4}
>> dict_c = {**dict_a, **dict_b}
>> dict_c
# {'a': 1, 'b': 3, 'c': 4}
```


通过www.DeepL.com/Translator（免费版）翻译