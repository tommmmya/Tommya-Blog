---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - ref
  - reactive
---
# ref 和 reactive 的区别
**理解：**  
1.ref 是定义简单类型 和单一的对象  
2.reactive 定义复杂的类型

**梳理文档：**  
ref 和 reactive 都是 Vue.js 3.x 版本中新增的[响应式](https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&spm=1001.2101.3001.7020) API，用于实现组件的数据响应式更新。它们的主要区别如下：

1. 数据类型不同：ref 用于包装 JavaScript 基本类型的数据（如字符串、数字、布尔值等），而 reactive 可以用于包装 JavaScript 对象和数组等复杂类型的数据。  
2. 使用方式不同：ref 需要通过在模板中使用 ref 指令以及在 JavaScript 代码中使用 ref 函数进行创建和使用，而 reactive 则需要通过调用 Vue.js 提供的 reactive 函数进行包装和创建。  
3. 访问方式不同：对于通过 ref 函数创建的响应式数据，我们可以通过. value 属性来访问其实际值；而对于通过 reactive 函数创建的响应式对象，我们可以直接访问其属性或调用其方法。  
4. 设计理念不同：ref 主要是为了解决单一元素 / 数据的响应式问题，而 reactive 则是为了解决 JavaScript 对象和数组等复杂数据结构的响应式问题。

总的来说，ref 和 reactive 都是用于实现 Vue.js 组件的数据响应式更新，但是它们的使用方法、适用范围和设计理念等方面略有不同，需要根据具体的应用场景选择合适的 API 进行使用。