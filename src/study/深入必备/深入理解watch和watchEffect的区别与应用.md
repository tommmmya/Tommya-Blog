---
icon: pen-to-square
date: 2022-01-11
category:
  - 面试
tag:
  - watch
  - watchEffect
  - vue
---
# 深入理解watch和watchEffect的区别与应用.md


======

在 Vue.js 中，除了可以使用`watch`方法监视数据变化，其实还有一种名为`watchEffect`的方法同样可以帮助我们监视数据变化并执行相应操作。对于`watch`和`watchEffect`两种方法来说，虽然它们功能上有着相似之处，但是它们之间有一些重要的区别。理解它们的不同之处对于有效地使用 Vue 3 来管理应用程序状态至关重要。

`watch`
-------

对于`watch`方法，我们之前已经详细的介绍过了，这里不再过多赘述。

#### watch 的基本用法

当我们需要在数据变化时执行一些 “副作用”：如更改 DOM、执行异步操作，我们可以使用 `watch` 函数：

```
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count 值从 ${oldValue} 变为 ${newValue}`);
});

setTimeout(() => {
  count.value++;
}, 1000);
```

在这个例子中，我们使用 `watch` 监视 `count` 的变化，并在值变化时打印出旧值和新值。

`watchEffect`
-------------

### 定义

`watchEffect` 是 Vue 3 中的一个核心函数，用于创建响应式的副作用。它会自动追踪其内部回调函数中使用的任何响应式数据，并在这些数据变化时重新运行该回调函数。这使得 `watchEffect` 在处理响应式数据的副作用时非常方便，无需显示指定依赖项，Vue 会自动追踪依赖并在变化时执行回调。

#### 基本用法

```
import { watchEffect } from 'vue';

watchEffect(callback);
```

`callback`: 是一个函数，用于定义响应式的副作用。该函数会立即执行一次，并自动追踪其内部使用的响应式数据。

### 特性

*   **自动追踪依赖**：`watchEffect` 内部的回调函数会自动追踪其使用的响应式数据，无需手动指定依赖项。
*   **立即执行**：`watchEffect` 在创建时会立即执行一次其回调函数。
*   **动态更新**：当回调函数中使用的响应式数据发生变化时，`watchEffect` 会重新执行回调函数。
*   **清理函数**：`watchEffect` 返回一个函数，用于停止追踪并清理副作用。当组件销毁时，Vue 会自动调用该清理函数，以避免内存泄漏。

#### 示例

```
import { ref, watchEffect } from 'vue';

const count = ref(0);

const stop = watchEffect(() => {
  console.log(`count 的值为: ${count.value}`);
});

setTimeout(() => {
  count.value++;
}, 1000);

// 停止追踪副作用
stop();
```

在这个示例中，我们创建了一个响应式的 `count` 变量，并使用 `watchEffect` 来追踪其变化。回调函数中打印了 `count` 的当前值。当 `count` 变化时，会重新执行回调函数。最后，我们调用 `stop` 函数停止追踪副作用。

### 使用场景：

*   **数据侦听**：当需要在数据变化时执行一些逻辑时，`watchEffect` 是一个很好的选择，尤其是在不需要精确指定依赖项的情况下。
*   **副作用处理**：`watchEffect` 通常用于处理响应式数据的副作用，例如数据更新后的界面更新、发送网络请求等。
*   **调试和日志**：`watchEffect` 可以用于在开发过程中快速检查响应式数据的变化情况，帮助调试和排除问题。

### `watch` 和 `watchEffect` 的基本区别：

*   **`watch`**：
    
    *   是一个函数，接收两个参数：要监视的数据和回调函数。
    *   需要明确指定要监视的数据，并在回调函数中手动处理数据的变化。
    *   可以监视多个数据，并可以根据需要进行停止或重新启动监视。
*   **`watchEffect`**：
    
    *   是一个函数，接收一个回调函数作为参数。
    *   自动地追踪其依赖关系，并在依赖的任何数据发生变化时执行回调函数。
    *   通常用于处理响应式数据的副作用，无需显式指定依赖项。

结语


======

### `watch` 和 `watchEffect` 的比较：

*   **精确性**：
    
    *   `watch` 允许您精确地指定要监视的数据，并且只有当这些数据变化时才会执行回调函数，因此更适用于需要针对特定数据进行逻辑处理的情况。
    *   `watchEffect` 自动追踪其内部回调函数中使用的任何响应式数据，并在这些数据变化时执行该回调函数。这意味着它更适合于无需指定特定依赖项的副作用处理。
*   **语法简洁性**：
    
    *   `watchEffect` 的语法更加简洁，只需要传递一个回调函数即可，而不需要明确指定要监视的数据，这使得它更容易编写和维护。
    *   `watch` 需要显式指定要监视的数据，使得代码稍微冗长一些，但也更加明确。
*   **动态性**：
    
    *   `watch` 允许在运行时动态地添加或移除监视，这在某些情况下可能是必要的。
    *   `watchEffect` 则是一次性地设置，无法在运行时停止或重新启动，它会一直追踪其依赖项直到组件卸载。
###### 下面是一个示例代码，展示了如何使用 watch 进行监听、停止监听和重新开始监听：
```
import { ref, watch } from 'vue';

export default {
  setup() {
    const myValue = ref(0);
    let stopWatch;

    // 开始监听
    stopWatch = watch(
      myValue,
      (newValue, oldValue) => {
        console.log(`Value changed from ${oldValue} to ${newValue}`);
      },
      {
        immediate: true, // 立即执行一次
        deep: true // 监听对象内部属性的变化
      }
    );

    // 停止监听
    const stopListening = () => {
      if (stopWatch) {
        stopWatch();
      }
    };

    // 重新开始监听
    const restartListening = () => {
      if (stopWatch) {
        // 确保先停止之前的监听
        stopWatch();
      }
      // 重新设置监听
      stopWatch = watch(
        myValue,
        (newValue, oldValue) => {
          console.log(`Value changed from ${oldValue} to ${newValue}`);
        },
        {
          immediate: true,
          deep: true
        }
      );
    };

    // 返回需要在模板中使用的数据和函数
    return {
      myValue,
      stopListening,
      restartListening
    };
  }
};

```
总结
--

`watch` 和 `watchEffect` 是 Vue 3 提供的两种用于监视数据变化的重要工具。它们分别适用于不同的场景和需求。`watch` 更适合需要精确控制的情况，而 `watchEffect` 更适合处理响应式数据的副作用。通过合理选择和使用这两种方法，您可以更有效地管理 Vue 应用程序的状态和逻辑。