---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - vue2
  - vue3
---
# vue2 和 vue3区别


### 生命周期的变化

整体来看，变化不大，只是名字大部分需要 + `on`，功能上类似。使用上 Vue3 组合式 API 需要先引入；Vue2 选项 API 则可直接调用，如下所示。

```
// vue3
<script setup>     
import { onMounted } from  vue 
 
onMounted(() => {
  ...
})
// 可将不同的逻辑拆开成多个onMounted，依然按顺序执行，不被覆盖
onMounted(() => {
  ...
})
</script>
 
// vue2
<script>     
   export default {         
      mounted() {             
        ...         
      },           
   }
</script> 
 
复制代码
```

常用生命周期表格如下所示。

<table><thead><tr><th>Vue2.x</th><th>Vue3</th></tr></thead><tbody><tr><td>beforeCreate</td><td>Not needed*</td></tr><tr><td>created</td><td>Not needed*</td></tr><tr><td>beforeMount</td><td>onBeforeMount</td></tr><tr><td>mounted</td><td>onMounted</td></tr><tr><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td>updated</td><td>onUpdated</td></tr><tr><td>beforeDestroy</td><td>onBeforeUnmount</td></tr><tr><td>destroyed</td><td>onUnmounted</td></tr></tbody></table>

**Tips：** `setup`是围绕`beforeCreate`和`created`生命周期钩子运行的，所以不需要显式地去定义。

### 多根节点

Vue3 支持了多根节点组件，也就是`fragment`。

Vue2 中，编写页面的时候，我们需要去将组件包裹在`<div>`中，否则报错警告。

```
<template>
  <div>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </div>
</template>
复制代码
```

Vue3，我们可以组件包含多个根节点，可以少写一层，niceeee ！

```
<template>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</template>
复制代码
```

### 异步组件

Vue3 提供 `Suspense`组件，允许程序在等待异步组件时渲染兜底的内容，如 loading ，使用户体验更平滑。使用它，需在模板中声明，并包括两个命名插槽：`default`和`fallback`。`Suspense`确保加载完异步内容时显示默认插槽，并将`fallback`插槽用作加载状态。

```
<tempalte>
   <suspense>
     <template #default>
       <todo-list />
     </template>
     <template #fallback>
       <div>
         Loading...
       </div>
     </template>
   </suspense>
</template>
复制代码
```

真实的项目中踩过坑，若想在 setup 中调用异步请求，需在 setup 前加`async`关键字。这时，会受到警告`async setup() is used without a suspense boundary`。

解决方案：在父页面调用当前组件外包裹一层`Suspense`组件。

### Teleport

Vue3 提供`Teleport`组件可将部分 DOM 移动到 Vue app 之外的位置。比如项目中常见的`Dialog`组件。

```
<button @click=dialogVisible = true>点击</button>
<teleport to=body>
   <div class=dialog v-if=dialogVisible>
   </div>
</teleport>
复制代码
```

### 组合式 API

Vue2 是 `选项式API（Option API）`，一个逻辑会散乱在文件不同位置（data、props、computed、watch、生命周期函数等），导致代码的可读性变差，需要上下来回跳转文件位置。Vue3 `组合式API（Composition API）`则很好地解决了这个问题，可将同一逻辑的内容写到一起。

除了增强了代码的可读性、内聚性，组合式 API 还提供了较为完美的逻辑复用性方案，举个🌰，如下所示公用鼠标坐标案例。

```
// main.vue
<template>
  <span>mouse position {{x}} {{y}}</span>
</template>
 
<script setup>
import { ref } from  vue 
import useMousePosition from  ./useMousePosition 
 
const {x, y} = useMousePosition()
 
}
</script>
复制代码
```

```
// useMousePosition.js
import { ref, onMounted, onUnmounted } from  vue 
 
function useMousePosition() {
  let x = ref(0)
  let y = ref(0)
  
  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }
  
  onMounted(() => {
    window.addEventListener( mousemove , update)
  })
  
  onUnmounted(() => {
    window.removeEventListener( mousemove , update)
  })
  
  return {
    x,
    y
  }
}
</script>
复制代码
```

解决了 Vue2 `Mixin`的存在的命名冲突隐患，依赖关系不明确，不同组件间配置化使用不够灵活。

### [响应式](https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&spm=1001.2101.3001.7020)原理

Vue2 响应式原理基础是`Object.defineProperty`；Vue3 响应式原理基础是`Proxy`。

Object.defineProperty

基本用法：直接在一个对象上定义新的属性或修改现有的属性，并返回对象。  
**Tips：** `writable` 和 `value` 与 `getter` 和 `setter` 不共存。

```
let obj = {}
let name =  瑾行 
Object.defineProperty(obj,  name , {
  enumerable: true, // 可枚举（是否可通过for...in 或 Object.keys()进行访问）
  configurable: true, // 可配置（是否可使用delete删除，是否可再次设置属性）
  // value:   , // 任意类型的值，默认undefined
  // writable: true, // 可重写
  get: function() {
    return name
  },
  set: function(value) {
    name = value
  }
})
复制代码
```

搬运 Vue2 核心源码，略删减。

```
function defineReactive(obj, key, val) {
  // 一 key 一个 dep
  const dep = new Dep()
  
  // 获取 key 的属性描述符，发现它是不可配置对象的话直接 return
  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) { return }
  
  // 获取 getter 和 setter，并获取 val 值
  const getter = property && property.get
  const setter = property && property.set
  if((!getter || setter) && arguments.length === 2) { val = obj[key] }
  
  // 递归处理，保证对象中所有 key 被观察
  let childOb = observe(val)
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    // get 劫持 obj[key] 的 进行依赖收集
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val
      if(Dep.target) {
        // 依赖收集
        dep.depend()
        if(childOb) {
          // 针对嵌套对象，依赖收集
          childOb.dep.depend()
          // 触发数组响应式
          if(Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
    }
    return value
  })
  // set 派发更新 obj[key]
  set: function reactiveSetter(newVal) {
    ...
    if(setter) {
      setter.call(obj, newVal)
    } else {
      val = newVal
    }
    // 新值设置响应式
    childOb = observe(val)
    // 依赖通知更新
    dep.notify()
  }
}
复制代码
```

那 Vue3 为何会抛弃它呢？那肯定是有一些缺陷的。

主要原因：无法监听对象或数组新增、删除的元素。  
Vue2 方案：针对常用数组原型方法`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`进行了 hack 处理；提供`Vue.set`监听对象 / 数组新增属性。对象的新增 / 删除响应，还可以`new`个新对象，新增则合并新属性和旧对象；删除则将删除属性后的对象深拷贝给新对象。

**Tips：** `Object.defineOProperty`是可以监听数组已有元素，但 Vue2 没有提供的原因是`性能`问题，具体可看见**参考**第二篇 ~。

Proxy

`Proxy`是 ES6 新特性，通过第 2 个参数`handler`拦截目标对象的行为。相较于`Object.defineProperty`提供语言全范围的响应能力，消除了局限性。但在兼容性上放弃了（IE11 以下）

**局限性**

1.  对象 / 数组的新增、删除。
    
2.  监测. length 修改。
    
3.  Map、Set、WeakMap、WeakSet 的支持。
    

基本用法：创建对象的代理，从而实现基本操作的拦截和自定义操作。

```
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 
  },
  set: function() {},
  ...
}
复制代码
```

搬运 Vue3 的源码 reactive.ts 文件

```
function createReactiveObject(target, isReadOnly, baseHandlers, collectionHandlers, proxyMap) {
  ...
  // collectionHandlers: 处理Map、Set、WeakMap、WeakSet
  // baseHandlers: 处理数组、对象
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
}
复制代码
```

以 baseHandlers.ts 为例，使用 Reflect.get 而不是`target[key]`的原因是 receiver 参数可以把 this 指向 getter 调用时，而非 Proxy 构造时的对象。

```
// 依赖收集
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    ...
    // 数组类型
    const targetIsArray = isArray(target)
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }
    // 非数组类型
    const res = Reflect.get(target, key, receiver);
    
    // 对象递归调用
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res)
    }
 
    return res
  }
}
// 派发更新
function createSetter() {
  return function set(target: Target, key: string | symbol, value: unknown, receiver: Object) {
    value = toRaw(value)
    oldValue = target[key]
    // 因 ref 数据在 set value 时就已 trigger 依赖了，所以直接赋值 return 即可
    if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
      oldValue.value = value
      return true
    }
 
    // 对象是否有 key 有 key set，无 key add
    const hadKey = hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
复制代码
```

### [虚拟 DOM](https://so.csdn.net/so/search?q=%E8%99%9A%E6%8B%9FDOM&spm=1001.2101.3001.7020)

Vue3 相比于 Vue2 虚拟 DOM 上增加`patchFlag`字段。我们借助`Vue3 Template Explorer`来看。

```
<div id=app>
  <h1>技术摸鱼</h1>
  <p>今天天气真不错</p>
  <div>{{name}}</div>
</div>
复制代码
```

渲染函数如下。

```
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue
 
const _withScopeId = n => (_pushScopeId(scope-id),n=n(),_popScopeId(),n)
const _hoisted_1 = { id: app }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(h1, null, 技术摸鱼, -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))
 
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(div, _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */)
  ]))
}
复制代码
```

注意第 3 个`_createElementVNode`的第 4 个参数即`patchFlag`字段类型，字段类型情况如下所示。1 代表节点为动态文本节点，那在 diff 过程中，只需比对文本对容，无需关注 class、style 等。除此之外，发现所有的静态节点，都保存为一个变量进行`静态提升`，可在重新渲染时直接引用，无需重新创建。

```
export const enum PatchFlags { 
  TEXT = 1, // 动态文本内容
  CLASS = 1 << 1, // 动态类名
  STYLE = 1 << 2, // 动态样式
  PROPS = 1 << 3, // 动态属性，不包含类名和样式
  FULL_PROPS = 1 << 4, // 具有动态 key 属性，当 key 改变，需要进行完整的 diff 比较
  HYDRATE_EVENTS = 1 << 5, // 带有监听事件的节点
  STABLE_FRAGMENT = 1 << 6, // 不会改变子节点顺序的 fragment
  KEYED_FRAGMENT = 1 << 7, // 带有 key 属性的 fragment 或部分子节点
  UNKEYED_FRAGMENT = 1 << 8,  // 子节点没有 key 的fragment
  NEED_PATCH = 1 << 9, // 只会进行非 props 的比较
  DYNAMIC_SLOTS = 1 << 10, // 动态的插槽
  HOISTED = -1,  // 静态节点，diff阶段忽略其子节点
  BAIL = -2 // 代表 diff 应该结束
}
复制代码
```

### 事件缓存

Vue3 的 `cacheHandler`可在第一次渲染后缓存我们的事件。相比于 Vue2 无需每次渲染都传递一个新函数。加一个`click`事件。

```
<div id=app>
  <h1>技术摸鱼</h1>
  <p>今天天气真不错</p>
  <div>{{name}}</div>
  <span onCLick=() => {}><span>
</div>
复制代码
```

渲染函数如下

```
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue
 
const _withScopeId = n => (_pushScopeId(scope-id),n=n(),_popScopeId(),n)
const _hoisted_1 = { id: app }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(h1, null, 技术摸鱼, -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(span, { onCLick: () => {} }, [
  /*#__PURE__*/_createElementVNode(span)
], -1 /* HOISTED */))
 
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(div, _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */),
    _hoisted_4
  ]))
}
复制代码
```

### Diff 优化

搬运 Vue3 patchChildren 源码。结合上文与源码，patchFlag 帮助 diff 时区分静态节点，以及不同类型的动态节点。一定程度地减少节点本身及其属性的比对。

```
function patchChildren(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
  // 获取新老孩子节点
  const c1 = n1 && n1.children
  const c2 = n2.children
  const prevShapeFlag = n1 ? n1.shapeFlag : 0
  const { patchFlag, shapeFlag } = n2
  
  // 处理 patchFlag 大于 0 
  if(patchFlag > 0) {
    if(patchFlag && PatchFlags.KEYED_FRAGMENT) {
      // 存在 key
      patchKeyedChildren()
      return
    } els if(patchFlag && PatchFlags.UNKEYED_FRAGMENT) {
      // 不存在 key
      patchUnkeyedChildren()
      return
    }
  }
  
  // 匹配是文本节点（静态）：移除老节点，设置文本节点
  if(shapeFlag && ShapeFlags.TEXT_CHILDREN) {
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      unmountChildren(c1 as VNode[], parentComponent, parentSuspense)
    }
    if (c2 !== c1) {
      hostSetElementText(container, c2 as string)
    }
  } else {
    // 匹配新老 Vnode 是数组，则全量比较；否则移除当前所有的节点
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense,...)
      } else {
        unmountChildren(c1 as VNode[], parentComponent, parentSuspense, true)
      }
    } else {
      
      if(prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
        hostSetElementText(container, )
      } 
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        mountChildren(c2 as VNodeArrayChildren, container,anchor,parentComponent,...)
      }
    }
  }
}
复制代码
```

patchUnkeyedChildren 源码如下。

```
function patchUnkeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
  c1 = c1 || EMPTY_ARR
  c2 = c2 || EMPTY_ARR
  const oldLength = c1.length
  const newLength = c2.length
  const commonLength = Math.min(oldLength, newLength)
  let i
  for(i = 0; i < commonLength; i++) {
    // 如果新 Vnode 已经挂载，则直接 clone 一份，否则新建一个节点
    const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i] as Vnode)) : normalizeVnode(c2[i])
    patch()
  }
  if(oldLength > newLength) {
    // 移除多余的节点
    unmountedChildren()
  } else {
    // 创建新的节点
    mountChildren()
  }
  
}
复制代码
```

patchKeyedChildren 源码如下，有运用最长递增序列的算法思想。

```
function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
  let i = 0;
  const e1 = c1.length - 1
  const e2 = c2.length - 1
  const l2 = c2.length
  
  // 从头开始遍历，若新老节点是同一节点，执行 patch 更新差异；否则，跳出循环 
  while(i <= e1 && i <= e2) {
    const n1 = c1[i]
    const n2 = c2[i]
    
    if(isSameVnodeType) {
      patch(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)
    } else {
      break
    }
    i++
  }
  
  // 从尾开始遍历，若新老节点是同一节点，执行 patch 更新差异；否则，跳出循环 
  while(i <= e1 && i <= e2) {
    const n1 = c1[e1]
    const n2 = c2[e2]
    if(isSameVnodeType) {
      patch(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)
    } else {
      break
    }
    e1--
    e2--
  }
  
  // 仅存在需要新增的节点
  if(i > e1) {    
    if(i <= e2) {
      const nextPos = e2 + 1
      const anchor = nextPos < l2 ? c2[nextPos] : parentAnchor
      while(i <= e2) {
        patch(null, c2[i], container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)
      }
    }
  }
  
  // 仅存在需要删除的节点
  else if(i > e2) {
    while(i <= e1) {
      unmount(c1[i], parentComponent, parentSuspense, true)    
    }
  }
  
  // 新旧节点均未遍历完
  // [i ... e1 + 1]: a b [c d e] f g
  // [i ... e2 + 1]: a b [e d c h] f g
  // i = 2, e1 = 4, e2 = 5
  else {
    const s1 = i
    const s2 = i
    // 缓存新 Vnode 剩余节点 上例即{e: 2, d: 3, c: 4, h: 5}
    const keyToNewIndexMap = new Map()
    for (i = s2; i <= e2; i++) {
      const nextChild = (c2[i] = optimized
          ? cloneIfMounted(c2[i] as VNode)
          : normalizeVNode(c2[i]))
      
      if (nextChild.key != null) {
        if (__DEV__ && keyToNewIndexMap.has(nextChild.key)) {
          warn(
            `Duplicate keys found during update:`,
             JSON.stringify(nextChild.key),
            `Make sure keys are unique.`
          )
        }
        keyToNewIndexMap.set(nextChild.key, i)
      }
    }
  }
  
  let j = 0
  // 记录即将 patch 的 新 Vnode 数量
  let patched = 0
  // 新 Vnode 剩余节点长度
  const toBePatched = e2 - s2 + 1
  // 是否移动标识
  let moved = false
  let maxNewindexSoFar = 0
  
  // 初始化 新老节点的对应关系（用于后续最大递增序列算法）
  const newIndexToOldIndexMap = new Array(toBePatched)
  for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0
  
  // 遍历老 Vnode 剩余节点
  for (i = s1; i <= e1; i++) {
    const prevChild = c1[i]
    
    // 代表当前新 Vnode 都已patch，剩余旧 Vnode 移除即可
    if (patched >= toBePatched) {
      unmount(prevChild, parentComponent, parentSuspense, true)
      continue
    }
    
    let newIndex
    // 旧 Vnode 存在 key，则从 keyToNewIndexMap 获取
    if (prevChild.key != null) {
      newIndex = keyToNewIndexMap.get(prevChild.key)
    // 旧 Vnode 不存在 key，则遍历新 Vnode 获取
    } else {
      for (j = s2; j <= e2; j++) {
        if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j] as VNode)){
           newIndex = j
           break
        }
      }           
   }
   
   // 删除、更新节点
   // 新 Vnode 没有 当前节点，移除
   if (newIndex === undefined) {
     unmount(prevChild, parentComponent, parentSuspense, true)
   } else {
     // 旧 Vnode 的下标位置 + 1，存储到对应 新 Vnode 的 Map 中
     // + 1 处理是为了防止数组首位下标是 0 的情况，因为这里的 0 代表需创建新节点
     newIndexToOldIndexMap[newIndex - s2] = i + 1
     
     // 若不是连续递增，则代表需要移动
     if (newIndex >= maxNewIndexSoFar) {
       maxNewIndexSoFar = newIndex
     } else {
       moved = true
     }
     
     patch(prevChild,c2[newIndex],...)
     patched++
   }
  }
  
  // 遍历结束，newIndexToOldIndexMap = {0:5, 1:4, 2:3, 3:0}
  // 新建、移动节点
  const increasingNewIndexSequence = moved
  // 获取最长递增序列
  ? getSequence(newIndexToOldIndexMap)
  : EMPTY_ARR
  
  j = increasingNewIndexSequence.length - 1
 
  for (i = toBePatched - 1; i >= 0; i--) {
    const nextIndex = s2 + i
    const nextChild = c2[nextIndex] as VNode
    const anchor = extIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
    // 0 新建 Vnode
    if (newIndexToOldIndexMap[i] === 0) {
      patch(null,nextChild,...)
    } else if (moved) {
      // 移动节点
      if (j < 0 || i !== increasingNewIndexSequence[j]) {
        move(nextChild, container, anchor, MoveType.REORDER)
      } else {
        j--
      }
    }
  }
}
复制代码
```

### 打包优化

> tree-shaking：模块打包`webpack`、`rollup`等中的概念。移除 JavaScript 上下文中未引用的代码。主要依赖于`import`和`export`语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

以`nextTick`为例子，在 Vue2 中，全局 API 暴露在 Vue 实例上，即使未使用，也无法通过`tree-shaking`进行消除。

```
import Vue from  vue 
 
Vue.nextTick(() => {
  // 一些和DOM有关的东西
})
复制代码
```

Vue3 中针对全局 和内部的 API 进行了重构，并考虑到`tree-shaking`的支持。因此，全局 API 现在只能作为 ES 模块构建的命名导出进行访问。

```
import { nextTick } from  vue 
 
nextTick(() => {
  // 一些和DOM有关的东西
})
复制代码
```

通过这一更改，只要模块绑定器支持`tree-shaking`，则 Vue 应用程序中未使用的 api 将从最终的捆绑包中消除，获得最佳文件大小。受此更改影响的全局 API 有如下。

*   Vue.nextTick
    
*   Vue.observable （用 Vue.reactive 替换）
    
*   Vue.version
    
*   Vue.compile （仅全构建）
    
*   Vue.set （仅兼容构建）
    
*   Vue.delete （仅兼容构建）
    

内部 API 也有诸如 transition、v-model 等标签或者指令被命名导出。只有在程序真正使用才会被捆绑打包。

根据 尤大 直播可以知道如今 Vue3 将所有运行功能打包也只有`22.5kb`，比 Vue2 轻量很多。

### 自定义渲染 API

Vue3 提供的`createApp`默认是将 template 映射成 html。但若想生成`canvas`时，就需要使用`custom renderer api`自定义 render 生成函数。

```
// 自定义runtime-render函数
import { createApp } from  ./runtime-render 
import App from  ./src/App 
 
createApp(App).mount( #app )
复制代码
```

### [TypeScript](https://so.csdn.net/so/search?q=TypeScript&spm=1001.2101.3001.7020) 支持

Vue3 由 TS 重写，相对于 Vue2 有更好地`TypeScript`支持。

*   Vue2 `Option API`中 option 是个简单对象，而 TS 是一种类型系统，面向对象的语法，不是特别匹配。
    
*   Vue2 需要`vue-class-component`强化 vue 原生组件，也需要`vue-property-decorator`增加更多结合 Vue 特性的装饰器，写法比较繁琐。