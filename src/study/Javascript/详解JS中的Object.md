---
icon: pen-to-square
date: 2022-01-11
category:
  - JavaScript
tag:
  - JavaScript
  - Object
---

# 详解 `JS` 中的 `Object`
-------------------

从本质上看，`Object` 是一个构造函数，用于创建对象。

### 一、`Object` 构造函数的属性

在 `Object` 中声明的属性只有两个：

*   `Object.length` —— 值为 1
*   `Object.prototype` —— 指向 `Object` 函数的原型对象

### 二、静态方法

静态方法就是直接定义在 `Object` 函数上的方法，注意与实例方法区分！！！调用的方式也不同，直接通过 `Object.xxx()` 的方式调用。

#### `Object.assign(target,...assign)`

作用：将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。  
简单来说，该方法可以接收多个参数，其中第一个参数作为目标对象，剩下的都是源对象。该方法将所有源对象的可枚举属性复制（浅复制）到目标对象中，结果返回目标对象。该方法会直接改变目标对象。

```
const target = {name:"jonas",age:18};
const source = {address:"Guangzhou",gender:"male"}
Object.assign(target,source);
console.log(target);//{name: "jonas", age: 18, address: "Guangzhou", gender: "male"}
```

如果使用 `ES6` 的语法来实现这种需求就很简洁了：

```
let target = {name:"jonas",age:18};
let source = {address:"Guangzhou",gender:"male"}
target = {...target,...source}
```

三点运算符也是通过浅复制来实现拷贝的。

注意：如果目标对象中的属性具有相同的键，则属性将被源对象的属性覆盖，后面的源对象的属性将类似地覆盖前面的源对象属性。

#### `Object.create(proto,propertiesObject)`

该方法用于创建新对象。第一个参数用于指定新建对象的原型对象；第二个参数是对象的属性描述对象。方法返回新建的对象。

在默认的情况下，我们通过对象字面量的方式 `{}` 创建的对象的原型对象就是 `Object` ，然而，通过该方法就可以指定一个新建对象的原型对象，从而改变原型链的结构。

```
function Person() {}
Person.prototype.hello = function (){
    console.log("hello")
}
let person = Object.create(Person.prototype,{
    name:{
        value:"jonas",
        writable:true,
        configurable:true,
    },
    age:{
        value:18,
        writable:true,
        configurable:true,
    }
})
console.log(person)//Person {name: "jonas", age: 18}
person.hello()//hello
```

#### `Object.defineProperty(obj,prop,desc)`

在对象 `obj` 上定义新的属性，或者修改对象 `obj` 中的属性，结果返回对象 `obj`。

该方法有三个参数，第一个参数 `obj` 是目标对象，第二个参数 `prop` 是属性键名，第三个参数是这个属性的描述符。

```
let person = {}
Object.defineProperty(person,"name",{
    value : "jonas",
    writable : true,
    enumerable : true,
    configurable : true
})
console.log(person)//{name: "jonas"}
```

> 害，也许你会感到疑惑，给对象定义属性或修改属性不是直接通过对象字面量的方法更加简洁吗？

是的，如果只是简单的添加或者修改属性，那么必然是对象字面量的方式更为直观。但是，这种方式并不是万能的，在某些场景下就需要使用到这个方法。

比如，在 `Vue` 的底层实现数据绑定中就使用到了这个方法。

扩展：属性描述符有两种：

*   数据描述符。具有值的属性。
*   存取描述符。由 `getter` 和 `setter` 函数对属性的描述。

一个属性只能是其中的一种描述符。

描述符通用属性：

*   `configurable` —— 布尔值，默认值为 `false` 。若值为 `true`，则表示这个属性描述符可以被改变，同时该属性也能从对象上删除。
*   `enumerable` —— 布尔值，默认值为 `false`。表示是否能枚举

数据描述符特有的属性：

*   `value` —— 该属性的值，默认值为 `undefined`
*   `writable` —— 布尔值，默认值为 `false`，表示是否能重写。

存取描述符特有的属性：

*   `get:function` —— 默认值为 `undefined`，当访问该属性时，该方法会被执行。
*   `set:function` —— 默认值为 `undefined`，当属性修改时，触发执行改方法，该方法接收一个参数，就是该属性新的值。

#### `Object.entries(obj)`

该方法返回对象 `obj` 自身的可枚举属性的键值对数组。结果是一个二维数组，数组中的元素是一个由两个元素 `key` ，`value` 组成的数组。

```
let person = {name:"jonas",age:18}
let arr = Object.entries(person)
console.log(arr)//[["name", "jonas"],["age", 18]]
```

该方法的使用场景是：将普通的对象转换为 `Map`：

```
let person = {name:"jonas",age:18}
let map = new Map(Object.entries(person))
console.log(map)//Map(2) {"name" => "jonas", "age" => 18}
```

相似的，还有两个方法可以取出对象的键名或键值：

*   `Object.keys(obj)` —— 返回一个对象中的可枚举属性组成的数组
*   `Object.values(obj)` —— 返回一个对象中的可枚举属性值组成的数组。

#### `Object.freeze(obj)`

该方法用于冻结对象，一个被冻结的对象不能被修改，不能添加新的属性，不能修改属性的描述符，该对象的原型对象也不能修改。返回值为被冻结的对象。

```
let person = {name:"jonas",age:18}
Object.freeze(person)
person.address = "Guangzhou"
person.age = 20
console.log(person)//{name: "jonas", age: 18}
```

#### `Object.getOwnPropertyDescriptor(obj,prop)`

该方法用于返回指定对象上自有属性对应的属性描述符。

```
let obj = {}
Object.defineProperty(obj,"name",{
    configurable:false,
    enumerable:true,
    writable:true,
    value:"Jonas"
})
let descriptor = Object.getOwnPropertyDescriptor(obj,"name")
console.log(descriptor)//{value: "Jonas", writable: true, enumerable: true, configurable: false}
```

#### `Object.getOwnPropertyNames(obj)`

该方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 `Symbol` 作为键名的属性）组成的数组。

该方法包含的范围比 `Object.keys()` 广。

```
let obj = {}
Object.defineProperty(obj,"name",{
    configurable:false,
    enumerable:false,
    writable:true,
    value:"Jonas"
})
Object.defineProperty(obj,Symbol(),{
    configurable:false,
    enumerable:false,
    writable:true,
    value: 18
})
let arr = Object.getOwnPropertyNames(obj)
console.log(arr)//["name"]
```

#### `Object.getOwnPropertySymbols(obj)`

该方法返回一个指定对象自身所有的 `Symbol` 键名的属性的数组。

```
let obj = {}
Object.defineProperty(obj,"name",{
    configurable:false,
    enumerable:false,
    writable:true,
    value:"Jonas"
})
Object.defineProperty(obj,Symbol(),{
    configurable:false,
    enumerable:false,
    writable:true,
    value: 18
})
let arr = Object.getOwnPropertySymbols(obj)
console.log(arr)//[Symbol()]
```

#### `Object.getPrototypeOf(obj)`

该方法返回指定对象的原型对象。

```
function Person() {}
Person.prototype.hello = function () {
    console.log("hello")
}
let person = new Person()
let proto = Object.getPrototypeOf(person)
proto.hello()//hello
```

#### `Object.is(obj1,obj2)`

该方法用于比较两个对象是否相同，返回布尔值。

比较规则如下：

*   如果两个值都是 `undefined` ，则返回 `true`
*   如果两个值都是 `null`，则返回 `true`
*   如果两个值都是 `true` 或 `false` ，则返回 `true`
*   如果两个值都是由相同个数的字符按照相同的顺序组成的字符串，则返回 `true`
*   如果两个值指向同一个对象，则返回 `true`
*   如果两个值都是 `+0` ,`-0`，`NaN`，则返回 `true`

注意：该方法不会做隐式类型转换。

#### `Object.isExtensible(obj)`

该方法用于判断一个对象是否可以扩展（是否可以添加属性），返回布尔值。

在默认的情况下，对象是允许扩展的（无论是通过对象构造函数还是对象字面量方式创建的对象）。封闭对象，冻结对象是不可扩展的！！！

```
let obj = {}
Object.freeze(obj)
console.log(Object.isExtensible(obj))//false
```

如果要将一个对象设置为禁止扩展的对象，那么可以使用 `Object.preventExtensions(obj)`。

#### `Object.isFrozen(obj)`

判断对象是否被冻结。返回布尔值。

#### `Object.seal(obj)`

封闭对象，阻止添加新属性并将所有的属性标记为不可配置！

### 三、实例方法

在 `JS` 中，所有的对象都是来自 `Object`，所有对象从 `Object.prototype` 中集成方法和属性，尽管它们可能被覆盖。`Object` 的原型对象中也定义着一些方法，但是有一部分已经遗弃了，下面展示几个还在使用的：

*   `Object.prototype.hasOwnProperty(prop)` —— 检测指定对象的自身中是否具有指定的属性，返回布尔值。
*   `Object.prototype.toString()` —— 返回对象的字符串形式。
*   `Object.prototype.valueOf()` —— 返回对象本身。
*   `Object.prototype.isPrototypeOf(obj)` —— 检测对象是否在另一个对象的原型链上，返回布尔值。