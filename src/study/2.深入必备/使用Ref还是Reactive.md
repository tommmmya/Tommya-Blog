---
icon: pen-to-square
date: 2022-01-11
category:
  - 面试
tag:
  - Ref
  - reactive
  - vue
---

# 使用Ref还是Reactive
我喜欢 Vue 3 的 Composition API，它提供了两种方法来为 Vue 组件添加响应式状态：`ref`和`reactive`。当你使用`ref`时到处使用`.value`是很麻烦的，但当你用`reactive`创建的响应式对象进行重构时，也很容易丢失响应性。 在这篇文章中，我将阐释你如何来选择`reactive`以及`ref`。

 一句话总结：默认情况下使用`ref`，当你需要对变量分组时使用`reactive`。

Vue3 的响应式
---------

在我解释`ref`和`reactive`之前，你应该了解 Vue3 响应式系统的基本知识。

 如果你已经掌握了 Vue3 响应式系统是如何工作的，你可以跳过本小节。

很不幸，JavaScript 默认情况下并不是响应式的。让我们看看下面代码示例：

```
let price = 10.0
const quantity = 2

const total = price * quantity
console.log(total) // 20

price = 20.0
console.log(total) // ⚠️ total is still 20
```

在响应式系统中，我们期望每当`price`或者`quantity`改变时，`total`就会被更新。但是 JavaScript 通常情况下并不会像预期的这样生效。

你也许会嘀咕，为什么 Vue 需要响应式系统？答案很简单：Vue 组件的状态由响应式 JavaScript 对象组成。当你修改这些对象时，视图或者依赖的响应式对象就会更新。

因此，Vue 框架必须实现另一种机制来跟踪局部变量的读和写，它是通过**拦截对象属性的读写**来实现的。这样一来，Vue 就可以跟踪一个响应式对象的属性访问以及更改。

由于浏览器的限制，Vue 2 专门使用 getters/setters 来拦截属性。Vue 3 对响应式对象使用 Proxy，对`ref`使用 getters/setters。下面的伪代码展示了属性拦截的基本原理；它解释了核心概念，并忽略了许多细节和边缘情况：

```
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
    },
  })
}
```

`proxy`的`get`和`set`方法通常被称为代理陷阱。

这里强烈建议阅读官方文档来查看有关 Vue 响应式系统的更多细节。

reactive()
----------

现在，让我们来分析下，你如何使用 Vue3 的`reactive()`函数来声明一个响应式状态：

```
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

该状态默认是深度响应式的。如果你修改了嵌套的数组或对象，这些更改都会被 vue 检测到：

```
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  nested: { count: 0 },
})

watch(state, () => console.log(state))
// "{ count: 0, nested: { count: 0 } }"

const incrementNestedCount = () => {
  state.nested.count += 1
  // Triggers watcher -> "{ count: 0, nested: { count: 1 } }"
}
```

### 限制

`reactive()`API 有两个限制：

第一个限制是，它只适用于对象类型，比如对象、数组和集合类型，如`Map`和`Set`。它不适用于原始类型，比如`string`、`number`或`boolean`。

第二个限制是，从`reactive()`返回的代理对象与原始对象是不一样的。用`===`操作符进行比较会返回`false`：

```
const plainJsObject = {}
const proxy = reactive(plainJsObject)

// proxy is NOT equal to the original plain JS object.
console.log(proxy === plainJsObject) // false
```

你必须始终保持对响应式对象的相同引用，否则，Vue 无法跟踪对象的属性。如果你试图将一个响应式对象的属性解构为局部变量，你可能会遇到这个问题：

```
const state = reactive({
  count: 0,
})

// ⚠️ count is now a local variable disconnected from state.count
let { count } = state

count += 1 // ⚠️ Does not affect original state
```

幸运的是，你可以首先使用`toRefs`将对象的所有属性转换为响应式的，然后你可以解构对象而不丢失响应：

```
let state = reactive({
  count: 0,
})

// count is a ref, maintaining reactivity
const { count } = toRefs(state)
```

如果你试图重新赋值`reactive`的值，也会发生类似的问题。如果你 "替换" 一个响应式对象，新的对象会覆盖对原始对象的引用，并且响应式连接会丢失：

```
const state = reactive({
  count: 0,
})

watch(state, () => console.log(state), { deep: true })
// "{ count: 0 }"

// ⚠️ The above reference ({ count: 0 }) is no longer being tracked (reactivity connection is lost!)
state = reactive({
  count: 10,
})
// ⚠️ The watcher doesn't fire
```

如果我们传递一个属性到函数中，响应式连接也会丢失：

```
const state = reactive({
  count: 0,
})

const useFoo = (count) => {
  // ⚠️ Here count is a plain number and the useFoo composable
  // cannot track changes to state.count
}

useFoo(state.count)
```

ref()
-----

Vue 提供了`ref()`函数来解决`reactive()`的限制。

`ref()`并不局限于对象类型，而是可以容纳任何值类型：

```
import { ref } from 'vue'

const count = ref(0)
const state = ref({ count: 0 })
```

为了读写通过`ref()`创建的响应式变量，你需要通过`.value`属性来访问：

```
const count = ref(0)
const state = ref({ count: 0 })

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

state.value.count = 1
console.log(state.value) // { count: 1 }
```

你可能会问自己，`ref()`如何能容纳原始类型，因为我们刚刚了解到 Vue 需要一个对象才能触发 get/set 代理陷阱。下面的伪代码展示了`ref()`背后的简化逻辑：

```
function ref(value) {
  const refObject = {
    get value() {
      track(refObject, 'value')
      return value
    },
    set value(newValue) {
      value = newValue
      trigger(refObject, 'value')
    },
  }
  return refObject
}
```

当拥有对象类型时，`ref`自动用`reactive()`转换其`.value`：

```
ref({}) ~= ref(reactive({}))
```

 如果你想深入了解，可以在源码中查看`ref()`的[实现](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fcore%2Fblob%2Fmain%2Fpackages%2Freactivity%2Fsrc%2Fref.ts "https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts")。

不幸的是，也不能对用`ref()`创建的响应式对象进行解构。这也会导致响应式丢失：

```
import { ref } from 'vue'

const count = ref(0)

const countValue = count.value // ⚠️ disconnects reactivity
const { value: countDestructured } = count // ⚠️ disconnects reactivity
```

但是，如果将`ref`分组在一个普通的 JavaScript 对象中，就不会丢失响应式：

```
const state = {
  count: ref(1),
  name: ref('Michael'),
}

const { count, name } = state // still reactive
```

`ref`也可以被传递到函数中而不丢失响应式。

```
const state = {
  count: ref(1),
  name: ref('Michael'),
}

const useFoo = (count) => {
  /**
   * The function receives a ref
   * It needs to access the value via .value but it
   * will retain the reactivity connection
   */
}

useFoo(state.count)
```

这种能力相当重要，因为它在将逻辑提取到组合式函数中时经常被使用。 一个包含对象值的`ref`可以响应式地替换整个对象：

```
const state = {
  count: 1,
  name: 'Michael',
}

// Still reactive
state.value = {
  count: 2,
  name: 'Chris',
}
```

### 解包 refs()

在使用`ref`时到处使用`.value`可能很麻烦，但我们可以使用一些辅助函数。

**unref 实用函数**

[unref()](https://link.juejin.cn?target=https%3A%2F%2Fvuejs.org%2Fapi%2Freactivity-utilities.html%23unref "https://vuejs.org/api/reactivity-utilities.html#unref") 是一个便捷的实用函数，在你的值可能是一个`ref`的情况下特别有用。在一个非`ref`上调用`.value`会抛出一个运行时错误，`unref()`在这种情况下就很有用：

```
import { ref, unref } from 'vue'

const count = ref(0)

const unwrappedCount = unref(count)
// same as isRef(count) ? count.value : count`
```

如果`unref()`的参数是一个`ref`，就会返回其内部值。否则就返回参数本身。这是的`val = isRef(val) ? val.value : val`语法糖。

**模板解包**

当你在模板上调用`ref`时，Vue 会自动使用`unref()`进行解包。这样，你永远不需要在模板中使用`.value`进行访问：

```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <span>
    <!-- no .value needed -->
    {{ count }}
  </span>
</template>
```

 只在`ref`是模板中的顶级属性时才生效。

**侦听器**

我们可以直接传递一个`ref`作为侦听器的依赖：

```
import { watch, ref } from 'vue'

const count = ref(0)

// Vue automatically unwraps this ref for us
watch(count, (newCount) => console.log(newCount))
```

**Volar**

如果你正在使用 VS Code，你可以通过配置[](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

[相应的 JSON 设置：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
["volar.autoCompleteRefs": true]
```

 
 
 为了减少 CPU 的使用，这个功能默认是禁用的。
 


[比较](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[让我们总结一下`reactive`和`ref`之间的区别：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

<table><thead><tr><th>reactive</th><th>ref</th></tr></thead><tbody><tr><td>👎&nbsp;只对对象类型起作用</td><td>👍对任何类型起作用</td></tr><tr><td>👍在<code>&lt;script&gt;</code>和<code>&lt;template&gt;</code>中访问值没有区别</td><td>👎访问<code>&lt;script&gt;</code>和<code>&lt;template&gt;</code>中的值的行为不同</td></tr><tr><td>👎重新赋值一个新的对象会 "断开" 响应式</td><td>👍对象引用可以被重新赋值</td></tr><tr><td>属性可以在没有<code>.value</code>的情况下被访问</td><td>需要使用<code>.value</code>来访问属性</td></tr><tr><td></td><td>👍引用可以通过函数进行传递</td></tr><tr><td>👎解构的值不是响应式的</td><td></td></tr><tr><td>👍与 Vue2 的 data 对象相似</td><td></td></tr></tbody></table>

[我的观点](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[我最喜欢`ref`的地方是，如果你看到它的属性是通过`.value`访问的，你就知道它是一个响应式的值。如果你使用一个用`reactive`创建的对象，就不那么清楚了：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
[anyObject.property = 'new' // anyObject could be a plain JS object or a reactive object

anyRef.value = 'new' // likely a ref](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
```

[这个假设只有在你对`ref`有基本的了解，并且知道你用`.value`来读取响应式变量时才有效。](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

[如果你在使用`ref`，你应该尽量避免使用具有`value`属性的非响应式对象：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
[const dataFromApi = { value: 'abc', name: 'Test' }

const reactiveData = ref(dataFromApi)

const valueFromApi = reactiveData.value.value // 🤮](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
```

[如果你刚开始使用 Composition API，`reactive`可能更直观，如果你试图将一个组件从 Options API 迁移到 Composition API，它是相当方便的。`reactive`的工作原理与`data`内的响应式属性非常相似：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
[<script>
export default {
  data() {
    count: 0,
    name: 'MyCounter'
  },
  methods: {
    increment() {
      this.count += 1;
    },
  }
};
</script>](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
```

[你可以简单地将`data`中的所有内容复制到`reactive`中，然后将这个组件迁移到 Composition API 中：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
[<script setup>
setup() {
  // Equivalent to "data" in Options API
  const state = reactive({
    count: 0,
    name: 'MyCounter'
  });
  const {count, name} = toRefs(statee)

  // Equivalent to "methods" in Options API
  increment(username) {
    state.count += 1;
  }
}
</script>](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
```

### [比较 ref 和 reactive](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

[一个推荐的模式是在一个`reactive`对象中对`ref`分组：](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

```
[const loading = ref(true)
const error = ref(null)

const state = reactive({
  loading,
  error,
})

// You can watch the reactive object...
watchEffect(() => console.log(state.loading))

// ...and the ref directly
watch(loading, () => console.log('loading has changed'))

setTimeout(() => {
  loading.value = false
  // Triggers both watchers
}, 500)](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
```

[如果你不需要`state`对象本身的响应式，你可以在一个普通的 JavaScript 对象中进行分组。 对 `refs` 进行分组的结果是一个单一的对象，它更容易处理，并使你的代码保持有序。你可以看到分组后的 `refs` 属于一起，并且是相关的。](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")

 [](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=")
 
 [这种模式也被用于像](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DVue.volar "https://marketplace.visualstudio.com/items?item>Volar</a> 扩展来自动地添加<code>.value</code>到<code>ref</code>上。你可以在<code>Volar: Auto Complete Refs</code>设置中开启：</p><p></p><p><img class=") [Vuelidate](https://link.juejin.cn?target=https%3A%2F%2Fvuelidate.js.org%2F "https://vuelidate.js.org/") 这样的库中，他们使用`reactive()`来设置验证的状态。

总结起来，社区中的最佳实践是默认使用`ref`，在需要分组的时候使用`reactive`。

总结
--

那么，你究竟该使用`ref`还是`reactive`？

我的建议是默认使用`ref`，当你需要分组时使用`reactive`。Vue 社区也有同样的观点，但如果你决定默认使用`reactive`，也完全没有问题。

`ref`和`reactive`都是在 Vue 3 中创建响应式变量的强大工具。你甚至可以在没有任何技术缺陷的情况下同时使用它们。只要你选择你喜欢的那一个，并尽量在写代码时保持一致就可以了！



以上就是本文的全部内容，如果对你有所帮助，欢迎点赞、收藏、转发~