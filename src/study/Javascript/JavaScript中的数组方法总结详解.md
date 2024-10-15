---
icon: pen-to-square
date: 2022-01-11
category:
  - JavaScript
tag:
  - JavaScript
  - Array
  - method
---
# JavaScript中的数组方法总结详解

在 JS 中, 数组方法是非常重要且常用的方法. 在此整理总结一番.

> JavaScript 数组的力量隐藏在数组方法中。

## 1. javaScript 常用数组方法

<table><thead><tr><th>顺序</th><th>方法名</th><th>功能</th><th>返回值</th><th>是否改变原数组</th><th>版本</th></tr></thead><tbody><tr><td>1</td><td>push()</td><td>(在结尾) 向数组添加一或多个元素</td><td>返回新数组长度</td><td>Y</td><td>ES5-</td></tr><tr><td>2</td><td>unshift()</td><td>（在开头) 向数组添加一或多个元素</td><td>返回新数组长度</td><td>Y</td><td>ES5-</td></tr><tr><td>3</td><td>pop()</td><td>删除数组的最后一位</td><td>返回被删除的数据</td><td>Y</td><td>ES5-</td></tr><tr><td>4</td><td>shift()</td><td>移除数组的第一项</td><td>返回被删除的数据</td><td>Y</td><td>ES5-</td></tr><tr><td>5</td><td>reverse()</td><td>反转数组中的元素</td><td>返回反转后数组</td><td>Y</td><td>ES5-</td></tr><tr><td>6</td><td>sort()</td><td>以字母顺序 (字符串 Unicode 码点) 对数组进行排序</td><td>返回新数组</td><td>Y</td><td>ES5-</td></tr><tr><td>7</td><td>splice()</td><td>在指定位置删除指定个数元素再增加任意个数元素 （实现数组任意位置的增删改)</td><td>返回删除的数据所组成的数组</td><td>Y</td><td>ES5-</td></tr><tr><td>8</td><td>concat()</td><td>通过合并（连接）现有数组来创建一个新数组</td><td>返回合并之后的数组</td><td>N</td><td>ES5-</td></tr><tr><td>9</td><td>join()</td><td>用特定的字符, 将数组拼接形成字符串 (默认 ",")</td><td>返回拼接后的新数组</td><td>N</td><td>ES5-</td></tr><tr><td>10</td><td>slice()</td><td>裁切指定位置的数组</td><td>被裁切的元素形成的新数组</td><td>N</td><td>ES5-</td></tr><tr><td>11</td><td>toString()</td><td>将数组转换为字符串</td><td>新数组</td><td>N</td><td>ES5-</td></tr><tr><td>12</td><td>valueOf()</td><td>查询数组原始值</td><td>数组的原始值</td><td>N</td><td>ES5-</td></tr><tr><td>13</td><td>indexOf()</td><td>查询某个元素在数组中第一次出现的位置</td><td>存在该元素, 返回下标, 不存在 返回 -1</td><td>N</td><td>ES5-</td></tr><tr><td>14</td><td>lastIndexOf()</td><td>反向查询数组某个元素在数组中第一次出现的位置</td><td>存在该元素, 返回下标, 不存在 返回 -1</td><td>N</td><td>ES5-</td></tr><tr><td>15</td><td>forEach()</td><td>(迭代) 遍历数组, 每次循环中执行传入的回调函数</td><td>无 /(undefined)</td><td>N</td><td>ES5-</td></tr><tr><td>16</td><td>map()</td><td>(迭代) 遍历数组, 每次循环时执行传入的回调函数, 根据回调函数的返回值, 生成一个新的数组</td><td>有 / 自定义</td><td>N</td><td>ES5-</td></tr><tr><td>17</td><td>filter()</td><td>(迭代) 遍历数组, 每次循环时执行传入的回调函数, 回调函数返回一个条件, 把满足条件的元素筛选出来放到新数组中</td><td>满足条件的元素组成的新数组</td><td>N</td><td>ES5-</td></tr><tr><td>18</td><td>every()</td><td>(迭代) 判断数组中所有的元素是否满足某个条件</td><td>全都满足返回 true 只要有一个不满足 返回 false</td><td>N</td><td>ES5-</td></tr><tr><td>19</td><td>some()</td><td>(迭代) 判断数组中是否存在, 满足某个条件的元素</td><td>只要有一个元素满足条件就返回 true, 都不满足返回 false</td><td>N</td><td>ES5-</td></tr><tr><td>20</td><td>reduce()</td><td>(归并) 遍历数组, 每次循环时执行传入的回调函数, 回调函数会返回一个值, 将该值作为初始值 prev, 传入到下一次函数中</td><td>最终操作的结果</td><td>N</td><td>ES5-</td></tr><tr><td>21</td><td>reduceRight()</td><td>(归并) 用法同 reduce, 只不过是从右向左</td><td>同 reduce</td><td>N</td><td>ES5-</td></tr><tr><td>22</td><td>includes()</td><td>判断一个数组是否包含一个指定的值.</td><td>是返回 true，否则 false</td><td>N</td><td>ES6</td></tr><tr><td>23</td><td>Array.from()</td><td>接收伪数组, 返回对应的真数组</td><td>对应的真数组</td><td>N</td><td>ES6</td></tr><tr><td>24</td><td>find()</td><td>遍历数组, 执行回调函数, 回调函数执行一个条件, 返回满足条件的第一个元素, 不存在返回 undefined</td><td>满足条件第一个元素 / 否则返回 undefined</td><td>N</td><td>ES6</td></tr><tr><td>25</td><td>findIndex()</td><td>遍历数组, 执行回调函数, 回调函数接受一个条件, 返回满足条件的第一个元素下标, 不存在返回 - 1</td><td>满足条件第一个元素下标, 不存在 =&gt;-1</td><td>N</td><td>ES6</td></tr><tr><td>26</td><td>fill()</td><td>用给定值填充一个数组</td><td>新数组</td><td>Y</td><td>ES6</td></tr><tr><td>27</td><td>flat()</td><td>用于将嵌套的数组 “拉平”，变成一维的数组。</td><td>返回一个新数组</td><td>N</td><td>ES6</td></tr><tr><td>28</td><td>flatMap()</td><td>flat() 和 map() 的组合版 , 先通过 map() 返回一个新数组, 再将数组拉平 ( 只能拉平一次 )</td><td>返回新数组</td><td>N</td><td>ES6</td></tr></tbody></table>

## 2. 方法详解

### 1.push();

功能: 在数组**最后一位**_添加_一个或多个元素, 并返回新数组的长度, 改变原数组.(添加多个元素用逗号隔开)

```
var arr = [1, 2, "c"];
    var rel = arr.push("A", "B");
    console.log(arr); // [1, 2, "c", "A", "B"]
    console.log(rel); //  5  (数组长度)
```

### 2.unshift();

功能: 在数组**第一位**_添加_一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)

```
var arr = [1, 2, "c"];
    var rel = arr.unshift("A", "B");
    console.log(arr); // [ "A", "B",1, 2, "c"]
    console.log(rel); //  5  (数组长度)
```

### 3.pop();

功能：删除数组的最后一位，并且**返回删除的数据**，会改变原来的数组。(该方法不接受参数, 且每次只能删除最后一个)

```
var arr = [1, 2, "c"];
    var rel = arr.pop();
    console.log(arr); // [1, 2]
    console.log(rel); // c
```

### 4.shift();

功能：删除数组的第一位数据，并且**返回被删除的数据**，会改变原来的数组。(该方法同 pop()；一样不接受参数, 且每次只能删除数组第一个)

```
var arr = ["a","b", "c"];
    var rel = arr.shift();
    console.log(arr); // ['b', "c"]
    console.log(rel); // a
```

### 5.reverse();

功能：将数组的数据进行反转，并且返回反转后的数组，会改变原数组

```
var arr = [1, 2, 3, "a", "b", "c"];
    var rel = arr.reverse();
    console.log(arr); //    ["c", "b", "a", 3, 2, 1]
    console.log(rel); //    ["c", "b", "a", 3, 2, 1]
```

### 6.sort();

```
sort() 方法是最强大的数组方法之一。
```

sort(); 方法用于对数组的元素进行排序, 并返回数组。默认排序顺序是根据[字符串](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020) Unicode 码点。  
例 1：

```
var arr1 = [10, 1, 5, 2, 3];
    arr1.sort();
    console.log(arr1);
```

打印结果：![][img-0]  
结果并不是我们想要的排序结果，因为它是根据 [unicode 编码](https://so.csdn.net/so/search?q=unicode%E7%BC%96%E7%A0%81&spm=1001.2101.3001.7020)来排序的, 这也显示了其不稳定性。

语法： arr.sort(function(a,b))  
参数： function 可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的诸个字符的 Unicode 位点进行排序。  
具体用法：

*   如果 function(a, b) {return: a - b;} ，=> a - b > 0 那么 a 会被排列到 b 之前; **(从小到大排序)**
*   如果 function(a, b) {return: b - a;} ，=> b - a > 0 那么 b 会被排列到 a 之前； **(从大到小排序)**

那么我们就可以运用以上所说的 function(a,b) 去完成对数字的排序:

```
var arr = [10, 1, 5, 2, 3];
    arr.sort(function (a, b) {
      return a - b;
    });
    console.log(arr);
```

打印结果：![][img-1]  
元素为对象时（可按其中某个属性来排序）：

```
var arr1 = [
      { name: "老八", age: "38" },
      { name: "赵日天", age: "28" },
      { name: "龙傲天", age: "48" },
    ];
    arr1.sort(function (a, b) {
      console.log(a, b);
      return b.age - a.age;
    });
    console.log(arr1);
```

打印结果：（按 age 排序（大到小））![][img-2]

### 7.splice();

功能：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除 / 替换的元素所组成的数组。可以实现数组的增删改；  
　  
　 语法： arrayObject.splice(index,howmany,item1,…,itemX)  
　 参数：

<table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>必需。整数，规定添加 / 删除项目的位置（元素下标），使用负数可从数组结尾处规定位置。</td></tr><tr><td>howmany</td><td>必需。要删除的项目数量。如果设置为 0，则不会删除项目。</td></tr><tr><td>item1, …, itemX</td><td>可选。向数组添加的新项目。</td></tr></tbody></table>

例，删除 arr() 中第三个元素并添加”add1“ "add2" 元素

```
var arr = ["a", "b", "c", 2, 3, 6];
    var rel = arr.splice(2, 1, "add1", "add2");
    console.log(arr);   //原数组
    console.log(rel);	//新数组
```

打印结果：![][img-3]

### 8.concat();

功能： 数组的拼接 (将多个数组或元素拼接形成一个新的数组), 不改变原数组  
如果拼接的是数组 则将数组展开, 之后将数组中的每一个元素放到新数组中.  
如果是其他类型, 直接放到新数组中  
另外，如果不给该方法任何参数，将返回一个和原数组一样的数组（复制数组）

```
var arr1 = [1, 2, 3];
    var arr2 = ["a", "b", "c"];
    var arr3 = ["A", "B", "C"];
    var rel = arr1.concat(arr2, arr3);
    console.log(arr1); //原数组
    console.log(rel); //新数组
```

打印结果：![][img-4]  
可以看到原数组 arr1() 并没有被改变，该方法不改变原数组，后续不改变原数组方法将不再打印原数组

### 9.join();

功能：用特定的字符, 将数组拼接形成字符串 (默认 ",")

```
var list = ["a", "b", "c", "d"]; // "a-b-c-d"
    var result = list.join("-");     //"a-b-c-d"
    var result = list.join("/");     //"a/b/c/d"
    var result = list.join("");      //"abcd"
    var result = list.join();        //  a,b,c,d
    console.log(result);
```

### 10.slice();

功能： 裁切指定位置的数组，返回值为被裁切的元素形成的新数组 ，不改变原数组  
同 concat() 方法 slice() 如果不传参数, 会使用默认值, 得到一个与原数组元素相同的新数组 (复制数组)

语法： arr[].slice(startIndex,endIndex)  
参数

<table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>startIndex</td><td>起始下标 默认值 0</td></tr><tr><td>endIndex</td><td>终止下标 默认值 length, 可以接收负数,(倒着数)</td></tr><tr><td><strong>注意！起始下标和终止下标的区间是 左闭右开 [a ，b) 能取到起始，取不到终止</strong></td><td></td></tr></tbody></table>

```
var list = ["a", "b", "c", "d"];
    var result = list.slice(1, 3);
    console.log(result);  // ["b", "c"]
```

### 11.toString();

功能: 直接将数组转换为字符串, 并且返回转换后的新数组, 不改变原数组, 与 join(); 方法不添加任何参数 相同.

```
var list = ["a", "b", "c", "d"];
    var rel = list.toString();
    console.log(rel);   // a,b,c,d   (字符串类型)
```

### 12.valueOf();

功能: 返回数组的原始值（一般情况下其实就是数组自身）

```
var list = [1, 2, 3, 4];
    var rel = list.valueOf();
    console.log(list); // [1, 2, 3, 4]
    console.log(rel); // [1, 2, 3, 4]
```

### 13.indexOf();

功能: 查询某个元素在数组中第一次出现的位置 存在该元素, 返回下标, 不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)

```
var list = [1, 2, 3, 4];
    var index = list.indexOf(4); //3
    var index = list.indexOf("4"); //-1
    console.log(index);
```

### 14.lastIndexOf();

功能: 查询某个元素在数组中**最后一次**出现的位置 (或者理解为反向查询第一次出现的位置) 存在该元素, 返回下标, 不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)

```
var list = [1, 2, 3, 4];
    var index = list.lastIndexOf(4); //3
    var index = list.lastIndexOf("4"); //-1
    console.log(index);
```

### 15.forEach();

功能: 遍历数组, 每次循环中执行传入的回调函数 。(注意: forEach() 对于空数组是不会执行回调函数的。) 没有返回值, 或理解为返回值为 undefined, 不改变原数组.  
语法:

arr[].forEach(function(value,index,array){  
　 　//do something  
})

参数: item: 每次循环的当前元素, index: 当前项的索引, array: 原始数组；

数组中有几项，那么传递进去的匿名回调函数就需要执行几次；

实例 1.:

```
var list = [32, 93, 77, 53, 38, 87];
    var res = list.forEach(function (item, index, array) {
      console.log(item, index, array);
    });
    console.log(res);
```

打印结果  
![][img-5]  
实例 2: 数组中元素的和

```
var list = [32, 93, 77, 53, 38, 87];
    var sum = 0;
    list.forEach(function (item) {
      console.log(item);
      sum += item;
    });
    console.log(sum);
```

打印结果  
![][img-6]

### 16.map();

功能: 遍历数组, 每次循环时执行传入的回调函数, 根据回调函数的返回值, 生成一个新的数组 ,  
同 forEach() 方法, 但是 map() 方法有返回值, 可以 return 出来;  
语法:

arr[].map(function(item,index,array){  
　　//do something  
　　return XXX  
})

参数： item: 每次循环的当前元素, index: 当前项的索引, array: 原始数组；

示例:

```
var list = [32, 93, 77, 53, 38, 87];
    var res = list.map(function (item, index, array) {
      return item + 5 * 2;
    });
    console.log("原数组", list);
    console.log("新数组", res);
```

打印结果:  
![][img-7]

### 17.filter();

功能: 遍历数组, 每次循环时执行传入的回调函数, 回调函数返回一个条件, 把满足条件的元素筛选出来放到新数组中.  
语法:

arr[].filter(function(item,index,array){  
　　//do something  
　　return XXX // 条件  
})

参数： item: 每次循环的当前元素, index: 当前项的索引, array: 原始数组；  
示例:

```
var list = [32, 93, 77, 53, 38, 87];
    var resList = list.filter(function (item, index, array) {
      return item >= 60; // true || false
    });
    console.log(resList);
```

打印结果:  
![][img-8]

### 18.every();

功能: 遍历数组, 每次循环时执行传入的回调函数, 回调函数返回一个条件, 全都满足返回 true 只要有一个不满足 返回 false => **判断数组中所有的元素是否满足某个条件**

```
var list = [32, 93, 77, 53, 38, 87];
    var result = list.every(function (item, index, array) {
      console.log(item, index, array);
      return item >= 50;
    });
    console.log(result);
```

打印结果: false

### 19.some();

功能: 遍历数组, 每次循环时执行传入的回调函数, 回调函数返回一个条件, 只要有一个元素满足条件就返回 true, 都不满足返回 false => **判断数组中是否存在, 满足某个条件的元素**  
示例:

```
var list = [32, 93, 77, 53, 38, 87];
    var result = list.some(function (item, index, array) {
      return item >= 50;
    });
    console.log(result);
```

打印结果 : true

### 20.reduce();

功能: 遍历数组, 每次循环时执行传入的回调函数, 回调函数会返回一个值, 将该值作为初始值 **prev**, 传入到下一次函数中, 返回最终操作的结果;  
语法: arr.reduce( function(**prev**,**item**,**index**,**array**){} , **initVal**)  
参数:  
reduce() 方法里边，有两部分，第一是个回调函数，第二个参数是设置的初始值。  
回调函数中可以有四个参数，  
**prev** 回调初始值 (类似求和是 sum=0) 可以设置初始值 ( 参数), 如果不设置初始值默认是数组中的第一个元素, 遍历时从第二个元素开始遍历  
**item** 每次循环的当前元素  
**index** 每次循环的当前下标  
**array** 原数组,

**initVal** 初始值

实例 1: [更多实例跳转](https://blog.csdn.net/m0_49159526/article/details/117300511?spm=1001.2014.3001.5501)  
不设置初始值的累加

```
var arr = [2, 3, 4, 5];
    var sum = arr.reduce(function (prev, item, index, array) {
      console.log(prev, item, index, array);
      return prev + item;
    });
    console.log(arr, sum);
```

打印结果  
![][img-9]  
解析:  
**第一次循环**: prev = 2 ; item(当前循环元素) = 3 ; index(当前循环元素下标) = 1; 原数组 =array;  
因为没有给 prev 设置初始值, 所以 prev 的值为数组中第一个元素, 遍历从第二个元素开始  
**第二次循环**:prev = 5; item(当前循环元素) = 4 ; index(当前循环元素下标) = 2; 原数组 =array;  
prev = 2+3(上次循环的元素) = 5 ;  
…  
最终 prev = 14 ; arr 中有四个元素 共循环三次;(因为没设置初始值跳过第一次循环 prev 默认等于第一个值)

实例 2 设置初始值的累加

```
var arr = [2, 3, 4, 5];
    var sum = arr.reduce(function (prev, item, index, array) {
      console.log(prev, item, index, array);
      return prev + item;
    }, 0);
    console.log(arr, sum);
```

打印结果  
![][img-10]  
解析: 可以看到与上一次设置初始值相比, 最终的结果相同, 但是多循环的一次, 因为设置了 prev 的初始值为 0, 所以循环遍历从第一个元素开始, 而不设置初始值, 循环从第一个元素开始.

### 21.reduceRight();

功能: 用法同 reduce, 只不过是从右向左

### 22.includes();

功能: 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。  
实例

```
let site = ['runoob', 'google', 'taobao'];
 
site.includes('runoob'); 
// true 
 
site.includes('baidu'); 
// false
```

### 23.Array.from();

功能: 将一个类数组对象或者可遍历对象转换成一个真正的数组

**注意** 将一个类数组对象转换为一个真正的数组，必须具备以下条件：

1、该 伪数组 / 类数组 对象必须具有 length 属性，用于指定数组的长度。如果没有 length 属性，那么转换后的数组是一个空数组。  
2、该 伪数组 / 类数组 对象的属性名必须为数值型或字符串型的数字

```
var all = {
      0: "张飞",
      1: "28",
      2: "男",
      3: ["率土", "鸿图", "三战"],
      length: 4,
    };
    var list = Array.from(all);
    console.log(all);
    console.log(list, Array.isArray(list));
```

打印结果  
![][img-11]

### 24.find();

功能: 遍历数组 每次循环 执行回调函数, 回调函数接受一个条件 返回满足条件的第一个元素, 不存在则返回 undefined  
参数  
item: 必须 , 循环当前元素  
index: 可选 , 循环当前下标  
array: 可选 , 当前元素所属的数组对象  
实例:

```
var list = [55, 66, 77, 88, 99, 100];
    var res= list.find(function (item, index, array) {
      return item > 60;
    });
    console.log(res); //66
```

打印结果为 66, 每次循环判断当前元素是否满足条件, 如果满足直接跳出循环, 返回第一个满足条件的元素

----- 更新 2022 年 7 月 20 日 15:17:34 ------  
该方法可快速查找对象数组满足条件的项

```
let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
      let res = arr.find(item => item.id == 1)
      console.log('res', res)  //res {id: 1, name: "coco"}
```

### 25.findIndex();

功能 遍历数组, 执行回调函数, 回调函数接受一个条件, 返回满足条件的第一个元素下标, 不存在则返回 - 1  
参数  
item: 必须 , 循环当前元素  
index: 可选 , 循环当前下标  
array: 可选 , 当前元素所属的数组对象  
注意  
**findIndex(); 和 indexOf(); 不同** (刚接触时乍一看和 indexOf() 怎么一模一样, 仔细看了下才发现大有不同)  
indexOf 是传入一个值. 找到了也是返回索引, 没有找到也是返回 - 1 , 属于 ES5  
findIndex 是传入一个测试条件, 也就是函数, 找到了返回当前项索引, 没有找到返回 - 1. 属于 ES6  
实例

```
var list = [55, 66, 77, 88, 99, 100];
    var index = list.findIndex(function (item, index, array) {
      console.log(item, index, array);
      return item > 60;
    });
    console.log(index); // 1
```

打印结果为 1, 循环步骤和 find() 方法一样, 但是它返回的是下标, find() 返回的是满足条件的元素

----- 更新 2022 年 7 月 20 日 15:17:34 ------  
该方法可快速查找对象数组满足条件的索引，indexOf 不支持

```
let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
      let res = arr.findIndex(item => item.id == 1)
      console.log('res', res)  //res 0
```

### 26.fill();

功能 用给定值填充一个数组  
参数  
value 必需。填充的值。  
start 可选。开始填充位置。  
end 可选。停止填充位置 (默认为 array.length)

实例

```
var result = ["a", "b", "c"].fill("填充", 1, 2);
```

打印结果  
![][img-12]

### 27.flat();

功能 用于将嵌套的数组 "拉平", 变成一维的数组。该方法返回一个新数组，对原数据没有影响。

注意 默认拉平一次 如果想自定义拉平此处 需要手动传参 , 如果想全都拉平 传 Infinity

```
var list = [1, 2, [3, 4, [5]]];
    var arr = list.flat(); // 默认拉平一次
    console.log("拉平一次", arr);

    var arr = list.flat(2); // 拉平2次
    console.log("拉平两次", arr);
```

打印结果:  
![][img-13]

### 28.flatMap();

功能 flat() 和 map() 的组合版 , 先通过 map() 返回一个新数组, 再将数组拉平 ( **只能拉平一次** )

```
var list = [55, 66, 77, 88, 99, 100];
    var newArr = list.map(function (item, index) {
      return [item, index];
    });
    console.log("Map方法:", newArr);

    var newArr = list.flatMap(function (item, index) {
      return [item, index];
    });
    console.log("flatMap方法:", newArr);
```

打印结果  
![][img-14]

[img-0]:data:image/png;base64,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

[img-1]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAAhCAYAAABOQ+6MAAAE7UlEQVR4Ae1ZPWuUQRC+H2KTX+AfSB3bpBOtUgk2gVSSpDJVOpu0qaxSiOVdmWARbEwZSAqxsTHHQeQURFaewCPDZHff/bwcxyy8vJ87H8/MM7N7N7q7u3N2GAaWA+1yYGRgtgPTsDQskQOjy8tLZ4dhYDnQLgdGzoYhYAg0RcBI1RROE2YIOGeksiwwBBojYKRqDKiJMwSMVJYDhkBjBIxUjQE1cYaAkcpywBBojICRqjGgJs4QMFJZDhgCjRF4dFJdX1+77e1tN51Os1w7Ojpyp6enWXP0x5CxtrZ2f2xtbWXboOXZ/fIicHFx8T/WiDnue40qUo3HYzeZTIptA6HW19cfOCiTnUmvCQRQMBcySsZ8Pnc7OzsPdEtZH95P3ZPRF7fx9MrdXP2Wr5pcUz504Pj86WcTuRQCm2E75ffwQ/sAXe/efqcJzc7UE/IBOunny2c3bvrjj1c3ijeKeGneeIWqh9Wk2t3ddcfHx+729laJjt+GCJWS7JQM8uEoGTFwmYwIJIIVC1KJbswBgd68+uZ+zf/ei4CuHnqkffBF6pTvSq8hE7b3GimxkH4BT/iIZ76BYtx7VdKEVCDW/v6+Oz8/9/nx4BmJo7sPPowluxZUA1DK3KEAaXtq7kGyUBWukSvnyuSTz0uviU/rDuuzh7o0WaBbFyPfM8pEzmGFghzsNZqRCsTCcXJyMmgwHAtVC3Sw1D0Wvt3c3Cxq5SngYgmBgPWsxAxs707Vg7TA5/Xzr12WxsSFZ18sSDQZH36niUY5WNn4ijnftzg3JxWIdXh4GLQt1qUwCR2E+yicQ+TDtzldTRuUAi6XHr0rMfXI5ND2ltwzwbDXCCVZiVzOod3cy/TstNQlY6FJjS4GPycfZ95lLnMPOdZzNCfVUKfK6S4EIdSuc2RJECl3CNwe1V3agWsmvl7W6O9q7+ELkl8mZa1MPZ9JDZ9aD18sQDR0Sr6jbyhOPjxrinCOP81Itbe3587OzgZ1p+xlpJDYMi1XFuWmgtt7SUZCte5Q9FOeF6ELSd2jI8IPXyygD4VC/vjiWxISh5ytBeeUnJuQKufXvxhJtAPsKKFf+PA89E7Lkvep4KLayYBJGbXXXM4sglCwFfpebNx03f/0xMsn20di3zPGKif3OKfkXE0q/FeVM1K7CwkV2lOBGL7/uFJsSQGXFc+3jIAO+IE9H2TlDlZYnGMDsqEDumoGu5T2ZQjjHJ2Q7dtTYVWAGIaW8Ck6QrGgXyxMLFQhXEuLcIqN8psqUklBqdexfRCTiD9UhLoQkyH0fsiWGLgIEDfe8szAUTZJlWsDE0HK5rVOBuKRS1wmF+XirGXDD+JY8ic65En5oY5OUoWKI/H0nVNioe3w+Sl9rS1QPjv1s4WTioHMTRRpOOaWBKkluDWdUvoSu0YClCR8TKZ+h6JQ00W0PH3PeOcWHy2n9j51H12rB/MXTioorUmWGkJBdwtwmSg9k5EVvmcystv2rN6IV+/CkEKE1H10iqyhbx6FVDAKyZLbrQDMwcHB4J/LMafZYbjEzE0o2Iy5PZMdsqEjF5+Y3/IdCdsz2Ylz6YpC2lt6zeLHWPcsgtLGRyOVNMKuDYFVQsBItUrRNF+WAgEj1VKEwYxYJQSMVKsUTfNlKRAYzWYzZ4dhYDnQLgesUy1FbTMjVgkBI9UqRdN8WQoE/gGCEyWWujCz1gAAAABJRU5ErkJggg==

[img-2]:data:image/png;base64,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

[img-3]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAA3CAYAAAAvz2xpAAAKMElEQVR4Ae2dPW8dRRSG/StSIJr8AiQKqtQJgsapkAKNK4JSWHKF7FRYFOlo3LoCIaWgjktbAUVQAAVSviQQDRTYcoEMAkWD3mte62Q0e+drZ3eu84602rmzM2fOPDN7zs7MvXfXnIIIiIAIiIAIjEhgbURZEiUCIiACIiACTo5Fg0AEREAERGBUAnIso+KUMBEQAREQATkWjQEREAEREIFRCcixjIpTwkRABERABLp2LM+ePXMbGxvu5OQkq6fu3bvn7t+/n1XGzwwZV69eXRw3b97M1sGXp88iIAIiQAKX3b40cywPHjxwBwcH5Jh9hlO5du2ae/To0UVZptHg84x8uMaAMn4ar6Wcz87O3Obm5kt123JnT5+679560/3+5RfOxm2eWPyXT3fdj+++7f45PnY2HiuXeh1yIR+ybZzlofdPH9xaXGOaf0b70E7ktXE/X81n23YbL5UJXX9458ZC55AMsjj95uuLy0x7+NqVBa+LC/9HbNtt3M9X89m23cZLZZZwQL1ggIP9buu3bbdxm6c2/tknv7nX175fHNffeOyeP/67VuRL5b/6/ORCPur5+MNf3V9nL17KM8YHyIRstgXtCgXYKtga2JzLFJo6lq2tLbe3t+eOj4+zmNGBWKcyJACeP9QxSMdREjBDwkzJOisrB0aJN56N2zzL4i/OztyTO7cXRszGl5XJvQbDAh2hn41TDgwDdED9QwGGhnlsfCh/brptu43nyrH50V46bJvOuG9wacTZj+DiB9t2G/fzlX62bbfxUnkol8sB7UbbGELttGk2zjK1Zxh9a4ARb2X4oevJH/+69288d6h3zPDtwz8XDgXnWKixUzHZc15v7ljgXHZ2dtzR0VFSOzlbSFnKWjYzwbXSJaxYWWuUbTypgc5dzCBw8/NpGfExgzUsNs46YBhwDAUaOLTPxofyl6Tbttt4iSyW8Q0k03kGCzpLpuGMdD4s2HTbdhu3eWrjtu02XiO3lAPrRHnroG3bbZz5W5xh8GH44QBahBaOBTMszLRSnEqOrWvR/pYyJ3EscC449vf3o1M+OJQUhxDrFMw21tfXB2cdy6BCh9AsaFkZe40zBC4rDC2x2DJTxq1hgHOhnjCuvQWrX2iJBjpTf55hFBlS+8I3pCzfy3kqDmwv6gs5YF6f4tx6xtJCPmTiSAmxlZEUGb3mmdSxwLns7g4/JcechYUYc0A1nYbpacqMyerDOA0djbQ14swz9xlPxdhfwV4E9YRhnduQWC7kZnWCrvYpGjrbWYb/tJ/TFz0YUtt+xqfmgHp9btRlynPOclKOXpSLvY9UB5AqnzOgj977+WJvBfUMLbXh4bfky0mp+syZb1LHEpuxpM4ykM/f2Pchpsryy9G5pezv+GVpBOwTs2/s/DJzfA4Zjt4ci+9EwMnqGOJq909y+oJ54Vx6C1NyQNs5w7NjeGomXE4aMshj6QPHMuZSW0hvOLKhLyHAxtSsjIzFoYWcSRzL9va2Ozw8jOof29uAABr+2MZ8iqyQQjUzHWvYKDtkGHhtrrM10NQhlMZrc5xh5K2hp/GnwQtxtW3I6Qs6Kcqeo71DdU7JgU4FbOcKNM4pexS1Oi4z+iWyIc93VGjPrevPg99uw6pIzI6V6NFDmeaOJedbYSl7G7ElMEIt/bZFzfTUN3Y0hnY5h/rNeYaxskaUetq0OfUL6QO22EOh0bNOBLrSOdAZ5fRFDwY1xHtKDj7fkD6t02CYsXQ0hVNBWzAjGvNbZyHHEkpD3XxALl1yb90XtfKbOhb8liUnxGYZXAKLdQbzQV5uSHFuQzLtUzKNAowhjd1QOT+dgy7lSwx+2dhn6kUDjfzQr8T5gRV+S1TCOaYndCI3Gj27n2IdB9tkWdu+YBtxPdROyLKyY7r511edA5x0TfvJo4YDjPzQkhHlj3lfDDkxrFjgvitZovJnW/wcWtJjPS3uHfKa89zMsZQ0atm+CAdVrMOZr3SKWTrTYXthDGHAcOCGxUEDyTyxM9tQ8yPPoTr4ZE8dcc7Vj7JpSHAeO3AWAf2wYX/27PwHnUhHsM4EeeAc0A7wZljWFyEOrAvXcsIqc7Cc0X4eJY6mlAMNMH9MyLPvaGruCxh3ysXZX7Jif9Pglz7U+fUMzb5qVkaoa8/nrhwLB06NoULZ0kHB+nt4ioCDiznRuQcWOLVwfnO3K7d+cTgnNgWH1vcFbUDpg2nq2AGr3u/v1LaE8nXlWKBgzeCscSqou2bjPgS3NA0MWi0xlerkl+OTXesb0K+3t8/icN4jU3CY4r6ADZniYQn1XOZ7pzvHgmEK4ACfEzC1vHv3bvQHmMtkcm+G/0GGgTxl4M05xcCuaRf6B4xy+6imzh7LisN5r7TmMMV9wXu/dLUjZXyyDtqXy3z/dOlYUjpJeURABERABPokIMfSZ79IKxEQARFYWQJyLCvbdVJcBERABPokIMfSZ79IKxEQARFYWQJyLCvbdVJcBERABPoksHZ6eup0iIHGgMaAxoDGwFhjQDOWPh2+tBIBERCBlSUgx7KyXSfFRUAERKBPAnIsffaLtBIBERCBlSUgx7KyXSfFRUAERKBPAnIsffaLtBIBERCBlSUgx7KyXSfFRUAERKBPAnIsffaLtBIBERCBlSUgx7KyXSfFRUAERKBPAl06Fv4NN/5euuXfWA91yav099ZDDJQuAiIgAqUEmjkWvO/+4OAgWy++wW3oXSh8lSpeQWvjORXhlbV43S1eQWvjvoyYLn5+fRYBERABEXCuqWPZ2tpye3t77jjjHeJ4qc/GxobDrCEU8G5zvo/bxkN5Q2l8Vzocio2H8kKH9fX1QV1CZZQmAiIgAq86geaOBc5lZ2fHHR0dJbHGTGXZ8hdmKk/u3F44BRtPEu7cYpaC2QqcEmYsjIfKx3QJlVGaCIiACLzqBCZxLHAuOPb396OvDsbrOjc3N6P5lnUcZiMPX7tyccABlQTogv0eBREQAREQgXQCkzoWOJfd3d2l2sGQl74LmktbnNEsrSjhYo0uCeKVRQREQAQuJYFJHUtsxlK7WV6yNDbUq7W6DMlVugiIgAhcdgKTOJbt7W13eHgYZRnbuF8mgLOV0mUvX3aNLr4sfRYBERCBV4lAc8eS860wfAsL3wiDUc8NsY34XHnauM8lpvwiIAIicE6gqWPBb1lyQs3GPWcsY+2v1OiS02blFQEREIHLRqCZYykBhc3ymm9hcdZivxGGrxWXBG3cl1BTGREQARFo+APJXLg9bZb3pEsuR+UXAREQgbkJdDNj6WmzvCdd5h4gql8EREAEcgl041j8P34c+q+w3Abm5MfyF/74cq4/v8zRVXlFQAREoFcC3TiWXgFJLxEQAREQgTwCcix5vJRbBERABEQgQkCOJQJIl0VABERABPIIyLHk8VJuERABERCBCIG109NTp0MMNAY0BjQGNAbGGgOasUQ8ry6LgAiIgAjkEZBjyeOl3CIgAiIgAhEC/wE8huk7/wD65AAAAABJRU5ErkJggg==

[img-4]:data:image/png;base64,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

[img-5]:data:image/png;base64,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

[img-6]:data:image/png;base64,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

[img-7]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAAA6CAYAAABGb2m/AAAPQ0lEQVR4Ae2dPYtdyRGG9UOcSH/Af0DxOpWiNXakyKwTgcBgpMwziTKnTibaSIFnQjl3ICZxoGRBgjUG42QZJjCywZhr3hkebU1R1afPR9+5V64Dl+ruqq6qfrv7PX3PfJwHu7oKgUKgECgEjhaBB0ebeSVeCBQChUAhsCsSr0VQCBQChcARI1AkfsSTV6kXAoVAIVAkXmugECgECoEjRqBI/Ignr1IvBAqBQqBIvNZAIVAIFAJHjMAQEn/06NGu95Nhp/7RlbVb2x4ba1/lQqAQKASOFYFhJB4BMkWuVt9TjmKozfalrjb/yfq32j99+tRSd+tev369e/PmTbe9DD98+LB79uzZ7urqalY/aywfjx8/3j18+PDmMzcH66vKhcAxIKA9+/z5889rXuWt9vEhjH9vJO6JNRs8dl5iTzt1L62eMtLaRm1Wn5Xfvn27u7i4WLUIRODZQnr37t3nxSayFelysRjVf+kl/1nsj9/9e/fVT7/b/eTBX24+KqvNXn/89uqzXnaXf/6nVW9StjF8Dlc//Gf3y599HJrD73/3jzv+wUPtumx+6CR/+6u/7f716b+bYODnQv41bo1f1z5w8Dn4uVAemv9RGACkx5t5kN7ryCWbCx1a1uwfcjokOZzERZbZxwOR2VnC9TaRD9roh6RdMmqz+qwsEn/x4sXu9PR09/79+8wsbc8IHILOCBaHIvUnT57cIXd0PXLOItZmsZtBG9bWtYEssfTEn7LxMadiTOmn4vXoIbPshgWhKpetLo/1lN994ODnRjlaYh+Bgx/Xmrlgj31p3z73QuLRAmyRqHR8bF/bx5axoQ/StlNGRv3RtSQkLiLX5+zsrPtUrlPw06dPw8chGbn7XNYsxLl9/ab1ufhN7PVz69qgv/jq453Tf9Rm/fpNbnVblHWy1o1LWGTXFE5Zv1a7xtWK6fuOxkHx/DhVtzluTeJgr7FxTZG4z5F+knoMqf2nffglXXshcUjVywhIyNVL2dLmyy0/2PrY1lfUP2vzJC4if/Xq1eSpnAUUnQLmnq5F+Eu+EpJDzyLuIeitiSM6fbZIfGpDZ3M4p105tb5ttPKbE8fbiowseXm9re8LB3vqVnzlCDYQLnWb39IyPvn2x02Cuvc7NRfaZ2t/puRjHkJ9LyQeDTQiUdvmy9S97PFNH2sbtVl9Vo5InFP55eVl1u3m7p+dwkXsekRif+CY2SrAnEciNqGpRcwm8c9frQ/KEEcv0dCvJaMbhyUK9WVjK0dPKi3fS3TgkY2RXJTjlhd+eb4r6XOwNqNwYPzZerA5yGZrHISpzSHCAdzJpZVD6+dB+DlGuRcSF2FGnwywFsGiQ3ofUXtvm/cV1SMSf/ny5eRJvHV6ls6SNo89stN2y1eUM21zFrEIVZtG0l9srNaG8X166/KpuHy++fr7O8/hrZ8RNxLrX7lkpz7ZiVi3PHna2LbcmgvZjcZBMaIcNH7NkzASDiNuJqyH09/8/cZ/hnfPXCw9/Ni5OMTycBK3g47I1Otl4z/eRvXIl++HDTLyY9t6yp7Ee56JQ8rRo5RMlxF1Zt+T+5xFDFH7E2DW3hN/rg2nK58DftCPuJmItFqkBHFGNzny20qCeRZrJA6MgRyYC0+aI3LwN1GfA7n1zoX2VLQH8XOscjiJWwLNyh68lh06pO8b1WUbfSLbqTZI/OTkZPL0ja/Ws+iIlKM2fM19fk4/yTmLWBsj+iGjiI2NbH2PKCtO6yTMps7IbWlO+M3GOYKwWrlO3VDId2scbE52PTB+j49Id6sbajSmKC5tU3Fbe9CO8xjL90biAisiYsgWMDMb9D1yCx/EEYmfn593/0aK+rVIWXqRq/3VQtXt4xViR7ZW1yrPWcRsILsxRBDZ4xUbVycd/SFRzw9PbT9bZmNmX51li01E8mtz0LhbsUVerVO68lubA3iAuydM9CNxIIZfD8TsWR9LcSCmHXeEe9RG3lauOfxYP4dY3pzELWHasgY/VbcAydbbo8/a0RMLO6TX23pvWYS85BIx6xNdECx/RWkJ3dqLGP0fAFl9q9xaxHwd5Tm0J2s2lNVT9qc/Nq3knMvHsJtXfrxe8b0N8ZbmoP6Qph8XvsEqi43d0hz8OP3NwutH4MAYmWNJj4e38XmuxcHOBXn4Gys5TM2FfM35eRC5H4scSuIehIhMvY3qssMWiR11JO22n9f5Ora27+iyFlF2uu6JDdHPJUd872sRr7nRkOtaWTncIlg4/LiStG+yQ9SPVsdZ2pTEI7IULGrn04Ips8EvEh++TruV+MyktR1Z5pHKkoW0lsA1rn0sYvJcMsatsK8cbpEsHO6uKK3JpQegu54Or7YpiR/e8A4ro6nf086y1QLUqWrNJR9Tj2u28H+fG4UxVg63c/3/joP2DGt+7c9p1uyN0X2LxEcjXP4LgUKgEBiIQJH4QHDLdSFQCBQCoxEoEh+NcPkvBAqBQmAgAkXiA8Et14VAIVAIjEagSHw0wuW/ECgECoGBCDy4vr7e1acwqDVQa6DWwHGugTqJD7xDlutCoBAoBEYjUCQ+GuHyXwgUAoXAQASKxAeCW64LgUKgEBiNQJH4aITLfyFQCBQCAxEoEh8IbrkuBAqBQmA0AkXioxEu/4VAIVAIDESgSHwguOW6ECgECoHRCAwh8Tn/IjYbYOYja7d+emysfZULgUKgEDhWBIaQuMCIiFRtfCLAbJ+ecuQjik1ML7P+rfalb/bxPpf8f+Ol/8rWxpYPvR2If9F5n/+u1OZV5ULgPhHg3xhrX6x5ect9jGFTEvckaesanOpTFzZe0o926l5aPWWktY3arD4r6x2bFxcXs96x6X1pwbRewQbB+lexrXmxBDnofyxnsbGR1PsT9Vos+x5FtetVWLwuK3ptl/WxtGxfQebjyyev5SIP/3ouckcf+ViaG/14jRsx7Ls+fX7YZK8ww+cS6WPZ16jtAwdyZl1YHKSzcykcRmDg58Ji4PGZmove/cG4D0FuSuIakCdHW7flaPDSZx/svZ52pI1BGYmNZNRm9VmZt92fnp52v+3e+soIHIKeItjWuzJtnKysk7dyaF3aBNpsetu9JUi1200qnX/vYctvj07EI5/kYOOrP5uSjYqd2qPL20c2c9t8TIjK52r9alwWO6tbWgYrxZ+6RuBATPnWWtFHOXFFuGyNg1+Dfm7IxcpWDtobU/vD+jqE8uYkrkFBkEgG6uu0eyk7PlZn+9syNvRB2nbKyKg/upaExF+8eLHT5+zsrPtUrrt89lUtI3efC2S/5DFIT182+58urj+Tqc+Bes+GwXaujHzzlnVLllGbjcV45G+rSyQwRVY2VjQWq19S9uQ15WMEDooJUX/7hx9ublJ2bjRuf5NvEejUGLye2HZuozbbrzUXPfvD+jqU8qYkDnlGUgPO2i0YkKuX9McWPXUvrV7l6OP79NQ9iYvIX716NXkq552HEfnOPV0vPS2Qg24m0WUJUZv+1z//680mjWzVNpdIMj9Re+Q7IgXZ6SuyJQ/8MR5LuOjWSPmDnIhB3ftFH+XnbXvrU0Tl/ZDD1jgojnzqo5y0XrRuuDRfmhtIlrmijt1SGa3RFjbgkM2F9sezZ8922o/HdG1K4lMD98Tq7TM9BCx7bJDeh7VBF9lGbdi3ZETinMovLy/Trq1TuIj9yZMnd37gmJ3YFaDnkUiUiBanFqkWa3RpcfOV35YjW0522YaI+sxpEzGQC/0UCyIiPidASwyy49nniPwgA2KQE3laqfgZwVu7OWWNlcdd5BA9ax6Ng/JgbLZsx2JzwNbq15RZA37uIywUZ2oupvbHmlxH9h1G4hFJ2jZb9gPs0WU2UXtvm88jqkck/vLly8mTeOv0LJ0lbb7WqT26Wr4ie9paP7Txm1DElJETp51MT7ylEpL0/lXXRpSE4KMTIHHxgy3tayXEJL8ipow0IpJZG1v9Fd/HtJj4GCNw0Nj0DFySnDzOjF8YSacbjnLf8mIuuJl98/X3n28sNg65WMK3epVb+8PbHlJ9UxIXWWYfDdqSqS0DSKuvtfG+rM77aNnSb470JN7zTBxSjh6lZLqMqDP7njFkJ3hImQXOpo82HLaRrieHHpsoBjlps5KnfPmbj/evPLc8AXp/5OVvOFm7z29JXbF8POXlSdT69nlb3dwyY5NPLp9TRJpb5kBcL30e0pOvx8z3zfaHtzu0+qYkbgeXkTQ2kT7SeTvqSPq0pGyjT6tPpoPET05OJk/f+Gg9i45IOWrD19zn5/ST1I0hupFoc3GS8dISIBvTbl7rf6sycSxZsxFt7KjN5xBtam/TW8/iRTFGElYUL2qz45rSW9upsubFrxPqfEPQ+P1NZeqGOxV3Sp/575mL1p6binvf+s1JHHL1UgOlzZctCJAtbbZPqw1dJLfwgV+R+Pn5efdvpKjf1AIRudpfLVTdPl4htqS3tbpWuXUj8f1EovarsvRsXMnWpZuEfs89++Fpqy86xYAMaJP0m1HE5InC20d+lJtyjG5otr8vQ+KKyxXhwk1I+WbX0hzkz+OgejROYmf6NTngW5JvTnZt+Byxsdip71Y5yG+EQc9c3Izh6upmzymfY7s2JXFLllE5assAk621t3ZZu7fBDun1tt5bFiEvuUS++kQXBMsf+VhCt/ZaYP4PgKy+VZ5zgtdmtCdwNiCnLSvtxlV8SHwuQWYxbB6QKPE9gWsjo5P0evCBOLL5wC6SkAJxPHGQYxYbn2tyIAY5WIzkfx84MA7J6Kbvc1SuInZ/LcXB+/c3B8XBZmouZHusP9RU7puSuJ0gT5xTdd8XeyR66kjaJdXGx7fbOra+bWRdizU7XffEhejnkiO+FT+7OWCzhVScpTeaLeL3+NCGVY7K9b6uyuEW+UPAQZnsa3+MWG+bkzgkaknWlhlE1pa1q5/X+Tq+rZRN62NtR5Z5pLLk9LeWwDUukf+S2HMwIc/Rcebk5G2Zh33c0Hxs6pXDLRKHgANzso/9Qayt5eYkvnWCX5K/pV/ZRIprT43yMfW4Zg3W+F/6TWFN7N6+yk0Y3OdNpnK4na1DwIFvAeyLQ167rTVeJN5Cp3SFQCFQCBw4AkXiBz5BlV4hUAgUAi0EisRb6JSuECgECoEDR6BI/MAnqNIrBAqBQqCFwIPr6+tdfQqDWgO1BmoNHOcaqJN46xZXukKgECgEDhyBIvEDn6BKrxAoBAqBFgJF4i10SlcIFAKFwIEj8D+UFRU4RNO54QAAAABJRU5ErkJggg==

[img-8]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAAnCAYAAACCJu0fAAAEz0lEQVR4Ae1ZPWscMRC9H5LGvyB/wLXT2m1SuUppMATC2VWcxl0at65SuUhtlzYpjjRxabCrQEgTHwaHSyAEhXdhjrHQx452td67PMGye9rRzOhp3oy0N7q/v3e8iAFjoF4MjAhuPXCJLbFFDJBkrOTcyVSOgdHl5aXjRQwYA/ViYOTYiAARqIoASVYVXionAs6RZIwCIlAZAZKsMsBUTwRIMsYAEaiMAElWGWCqJwIkGWOACFRGgCSrDDDVEwGSjDFABCojsBQkm81mbmdnx00mExMckMc4jC9t0LG2tra4rD6U2v3fxl1fX7v19fUFzicnJysDQXWSnZ6eurOzs2LAhGCHh4cPdGARdPCHyDSdTt3W1pZrs2AY69sWR37O/rjXL7+4J6PP8wvP6JN2c/XLbTy9WrzHM/q6atPvv92LZzcL/eIH7p8+/pibeffmW/A9+rtqPg7aPmxYfJD1XqVk1gvJdnd33dHRkbu9vTWtqwAeC3JRliITFgtEg0xJg+0QSSXAP7z/p1cCLRW8eOcTscSn1Bj4A+LBv1AT4gsJQzKWvtC82/iAira5uelwX5XWG8lAtL29PXdxcdEYOwR3qEL5ClIkk3clmTE1FoHkEybUp32tTbIcgUKE0P6VPMPm842bBxU6RbKcD22TYskcao/plWQgGq7j4+PsOUn26E3IgWoTI6NUw1A1yoGbyqogDIJJtxTJUDm63i5q23iGT7hiDT6kqlxsXKpfiC1YwAa2i/LbH5vzIbU993Uty+9HIRmIdnBwkMQoV8VAPjmT5baTsS1f0gHn5h9aYuT1q5JsH3WQSx+Cruvg9n3PkVh8iQW/r8/yW4iFeaYSSRMfStfK4m/fso9Cslwls1YfLEzs3GXVpRcglVUlYBBYElzYNsWCWAIR966b+BKzDXt+UujKB7ENcr199XWOhU402k7OB1mrJrsXrXfoz72SbDweu/Pz8ywmqbNQaDAWBZ9/Q4dlqy6t35JVQ2cTrUuCMUUELW95zgVvrspZbGnZ0JxitmL9D/RNp257ezu4jlpu2Z57I5nl62LqLBQCOLW1BAFjVS6kS/osWVUO8ykC5Ugodq33XPCGiGC1EZOHbX8bHJpnUx9K1yrm31D6eyEZ/iuzNEv1wcLgbIa734QoqEjW1pTocvCPbZFgV4LMlxH/SpJASq+eK2z6RNDv2/jgE1ySjf/VNeeD+JNKliKzjPfqJCsBRRYeoPsNffLBA/dUgEI29d7XrX+nsiqCS5/FQDTdhHgigzvG+E3mGdvq+vL+71zwip8h26KrCx/0PP1E0sQH8cWyPZcxy3AfJMkAXNushkqE4A1VuCYLA/slFbCJbi0DG7EvmFqu5vMQfBCyl65XTXza6h4syWTLiGC3trYEg70+sioCKrbVtc65VH4IPsB3rPcqfvTA3AZLMjiHALBmeWTE/f39Vl+oJKvKtrTriiYJpHSbWEooPW4IPsAfYCs4l27t9byG+Dxokg0RMPpEBKwIkGRWxChPBIwIkGRGwChOBKwIkGRWxChPBIwIjO7u7hwvYsAYqBcDrGTGrERxImBFgCSzIkZ5ImBEgCQzAkZxImBFgCSzIkZ5ImBEgCQzAkZxImBFgCSzIkZ5ImBEgCQzAkZxImBF4C/MJ4hTsds/JwAAAABJRU5ErkJggg==

[img-9]:data:image/png;base64,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

[img-10]:data:image/png;base64,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

[img-11]:data:image/png;base64,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

[img-12]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAAXCAYAAABTTj7/AAAD90lEQVR4Ae1ZscoTQRDOU1jY5RUsrNIr2iSt2KQTLAIpRJJ0YpEHSJtOfkgnPkFAJWCjBAv/WFj8hSAJqQ4RZOU7+I7Juns3e8ld7ie7sMzuzOzs7Oy3s5tLy8QSI3AhEWhdyDrjMmMETAR7BMHFRCCC/Uxb/f7uncKZNTqFRqJCFoHSYN/tdmYwGBjQohKiW2TrtsltwKLPirVIOfnkyT7bt239TfI3BftyuQzyCeDt9/tms9lk4xaLhWm322ntdDoHMihBPp1OM31NQ9pEm+XH61cGNbm+Np8fPUgpZT66//jBfHn80Py+uTHfnj8zP6/e+FRVfK0PBC6MErDkkbompK4t+5skmf9c05/t1lZT92UMuaaiwXk+ABu9Xi/FAZJhkiRF5mqTp2AfDodmNpuZrSJocH4ymfwHZukxQC3BCVmZ7A47q9VKmjYMNDYaFcAFr6gA3NhMAOPr0yeqA+KzGeKDBC3bpD77kLPYutJ/rom6ZShjCLuIJfpFReMDEiEw1aSSgR2AH4/HZr1e5/oHENtAlgNcWR9yzSGx7bieSdwUUGy2zNDYKIIDFOBmQRtyZLLvL1+oDgjH2jTPB6lrg9YnI5++o8+x5LEv/eeaOL4MZQzlmmgHMs6PWxE6KBofinDCOeqkB2AH4FHn87nz+vEBGQ4jA+MZ43rCcEGuTE2ZTZEZcINor0EAWW4IN9G2W2efAMWcBA15pC5/KCPleJduVTzET3trunwI2WvX+Cp4QWDXANB3IEIzOw4PAqYtMsvJZ4Z2/Kn1JFBhG31ZffPJcbLt06+C78ryIfOUebKG2C+rewD20WiU+4zRANAHds1BkYvANWi/16VctgFuPE1wvaKA4l3Oa1fq1tWWwPa1Xb4Q4KQunap58plSZq7QvS4zR5kxGdg1P1A1YAdIXb/CkaXz3vrS+dBbQIIdAMdzRj5ppG27jcOJrwda3+zxdp/AlnwtcKWebEtbeW2sAWvBmo4pxyYLDU6O8a/s2BTs2k+PruuJYOFnR9fTA4t3HQCf0655fLrk88fUp/v3zK93b9U/Qun/qcBOf0hdoLV56Lt4eTYok/RUYIdNxhN+aRMHfWniex2+pWCnkxoakqFhD1cavskDVNqCMXV9tsJc3W4391Oq1m9bzwYw5ZIv25SDgi+rlPna2BtXsvHpV8EPvZWr8MFnMxjsIVk3RFc6iAzFm0L7bpfjtW0AI+/rkdbOufVwYLGOcwIde80/k07xlKoipsFgr8KJaDNGoI4IRLDXEeU4RyMiEMHeiG2ITtQRgdZ+vzexxhhcAgZiZq8jpcQ5GhGBCPZGbEN0oo4IRLDXEeU4RyMiEMHeiG2ITtQRgX9U+uTmut2awQAAAABJRU5ErkJggg==

[img-13]:data:image/png;base64,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

[img-14]:data:image/png;base64,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