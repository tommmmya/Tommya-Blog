---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - 状态管理
  - pinia
  - vuex
---
# **pinia 和 vuex 的区别**

（1）[pinia](https://so.csdn.net/so/search?q=pinia&spm=1001.2101.3001.7020) 它没有 mutation, 他只有 state，getters，action【同步、异步】使用他来修改 state 数据  
 （2）pinia 他默认也是存入内存中，如果需要使用本地存储，在配置上比 vuex 麻烦一点

 （3）pinia 语法上比 vuex 更容易理解和使用，灵活。  
 （4）pinia 没有 modules 配置，没一个独立的仓库都是 definStore 生成出来的

 （5）pinia state 是一个对象返回一个对象和组件的 data 是一样的语法

#### Vuex 和 Pinia 的优缺点

Pinia 的优点

*   完整的 TypeScript 支持：与在 Vuex 中添加 TypeScript 相比，添加 TypeScript 更容易
*   极其轻巧 (体积约 1KB)
*   store 的 action 被调度为常规的函数调用，而不是使用 dispatch 方法或 MapAction 辅助函数，这在 Vuex 中很常见
*   支持多个 Store
*   支持 Vue devtools、SSR 和 webpack 代码拆分

Pinia 的缺点

*   不支持时间旅行和编辑等调试功能

Vuex 的优点

*   支持调试功能，如时间旅行和编辑
*   适用于大型、高复杂度的 Vue.js 项目

Vuex 的缺点

*   从 Vue 3 开始，