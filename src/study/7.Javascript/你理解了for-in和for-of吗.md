---
icon: pen-to-square
date: 2022-01-11
category:
  - JavaScript
tag:
  - JavaScript
  - for in
  - for of
---
# 你理解了for-in和for-of吗
【前言】

在 JavaScript 中，for 循环语句是编写复杂程序时经常使用的一种工具。其中，for-in 和 for-of 是两个最常用的变体。尽管这两者非常相似，但它们在迭代对象方面有所不同。在本文中，我们将探讨 for-in 和 for-of 的不同之处，以及如何正确使用它们。

【正文】

### 一、for-in 循环

for-in 循环是一种迭代对象属性的方法。它可以用于[遍历对象](https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1&spm=1001.2101.3001.7020)中的所有可枚举属性，包括从原型链继承的属性。通常，我们使用 for-in 循环来遍历对象的键名。

下面是一个简单的例子：

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
 
for (const key in person) {
  console.log(key, person[key]);
}
```

在这个例子中，我们使用 for-in 循环遍历了 person 对象的所有键名。输出结果如下：

```
name John
age 30
gender male
```

需要注意的是，for-in 循环并不是按照对象属性在对象中的顺序迭代的。这是因为 JavaScript 中的对象属性没有固定的顺序。因此，我们在使用 for-in 循环迭代对象时，不能保证它们的顺序。

另外，由于 for-in 循环会遍历对象的[原型链](https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1001.2101.3001.7020)，因此可能会迭代到不是自身属性的属性。为了避免这种情况，我们可以使用 hasOwnProperty 方法来检查属性是否为对象自身的属性。

下面是一个使用 hasOwnProperty 的例子：

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
 
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}
```

在这个例子中，我们使用 hasOwnProperty 方法来检查属性是否为 person 对象自身的属性。输出结果与之前相同。

### 二、for-of 循环

for-of 循环是一种迭代可迭代对象的方法。它可以用于遍历数组、字符串、Map、Set、TypedArray 等可迭代对象。通常，我们使用 for-of 循环来遍历数组或字符串的值。

下面是一个简单的例子：

```
const arr = [1, 2, 3];
 
for (const value of arr) {
  console.log(value);
}
```

在这个例子中，我们使用 for-of 循环遍历了数组 arr 的所有值。输出结果如下：

需要注意的是，for-of 循环不适用于迭代对象属性。如果我们尝试使用 for-of 循环迭代对象，将会抛出 TypeError 异常。

下面是一个尝试使用 for-of 循环迭代对象的例子：

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
 
for (const value of person) {
  console.log(value);
}
```

  
在这个例子中，我们尝试使用 for-of 循环迭代对象 person，但会抛出 TypeError 异常。

### 三、for-in 和 for-of 的区别

for-in 循环和 for-of 循环虽然都是用于迭代对象的方法，但它们有一些不同之处。

1. 迭代对象的内容不同

for-in 循环迭代对象的是键名，而 for-of 循环迭代对象的是值。因此，for-in 循环适用于迭代对象的键名，而 for-of 循环适用于迭代对象的值。

2. 迭代对象的类型不同

for-in 循环适用于遍历对象，包括普通对象、数组、函数等，而 for-of 循环适用于遍历可迭代对象，包括数组、字符串、Map、Set、TypedArray 等。

3. 迭代对象的顺序不同

for-in 循环的迭代顺序是不确定的，因为对象的属性没有固定的顺序。而 for-of 循环的迭代顺序是确定的，因为可迭代对象的值是按照一定顺序排列的。

4. 迭代对象的原理不同

for-in 循环遍历对象时，会遍历对象的原型链，并且会包含从[原型链继承](https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF&spm=1001.2101.3001.7020)的属性。而 for-of 循环遍历的对象是可迭代对象，它们的值是可枚举的。

### 四、如何选择合适的循环方法

在选择使用 for-in 循环还是 for-of 循环时，我们需要考虑对象的类型以及我们需要迭代的内容。通常，如果我们需要迭代对象的键名，我们可以使用 for-in 循环；如果我们需要迭代对象的值，我们可以使用 for-of 循环。

另外，当我们需要遍历数组或字符串时，我们可以使用 for-of 循环，因为它可以提供更好的性能和可读性。相比之下，for-in 循环会遍历对象的原型链，会导致性能下降。

如果我们需要遍历一个对象，同时又需要过滤掉从原型链继承的属性，我们可以使用 hasOwnProperty 方法进行过滤。例如：

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
 
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}
```

  
### 五、总结

for-in 循环和 for-of 循环是 JavaScript 中用于迭代对象的两种方法。它们的区别在于迭代对象的内容、类型、顺序和原理。通常，我们应该根据需要选择合适的循环方法，以提高效的迭代对象。

同时，我们也需要注意到 for-in 循环的一些缺陷。由于它会遍历对象的原型链，导致性能下降，而且不能保证迭代顺序，所以我们应该避免在数组和字符串上使用 for-in 循环。

最后，我们还可以使用其他一些方法来迭代对象，例如 forEach 方法、map 方法、reduce 方法等。这些方法不仅可以提供更好的性能和可读性，还可以通过回调函数来实现更加灵活的操作。

总的来说，for-in 循环和 for-of 循环都是 JavaScript 中用于迭代对象的重要方法。我们需要根据对象的类型和需要迭代的内容来选择合适的循环方法，以提高代码的性能和可读性。同时，我们也需要注意 for-in 循环的缺陷，并且学会使用其他方法来迭代对象，以实现更加灵活和高效的操作。