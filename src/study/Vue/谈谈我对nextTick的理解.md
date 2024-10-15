---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - nextTick
---
# nextTick

### 一、 为什么用 [nextTick](https://so.csdn.net/so/search?q=nextTick&spm=1001.2101.3001.7020)

> vue 中的 Dom 更新是异步的，是异步的意味着当被处理数据是动态变化时，此时对应的 Dom 未能及时更新（同步更新）就会导致数据已经更新（model 层已经更新）而视力层未更新（Dom 未更新）此时就需要使用 nextTick 了。  
> 当你想要拿到更新后的 Dom，一定要在 nextTic 的回调函数中去获取更新后的 Dom 的值。

结构：

```
this.$nextTick(()=>{
 在这里获取dom更新后的值
})
```

注意：在下次 Dom 更新循环之后去执行回调函数，修改 model 层数据之后，立即在这个回调中获取更新后的 dom。  
**回调的调用时机：需要在视图更新之后，基于新的视图上进行操作。**

**比如：**

```
data(){
msg:"aaa"
}
<div ref="ipt" @click="btn">{{msg}}</div>
btn(){
 this.msg = "bbb";
 console.log("获取dom",this.$refs.ipt.innerHTML)
 console.log("获取数据",this.msg);
 this.$nextTick(()=>{
  console.log("nextTick回调中",this.$refs.ipt.innerHTML);
 })
}
```

经上可知，修改数据后 Model 层会立即同步更新了，而 Dom 并没有及时更新，而在回调函数中的 Dom 的值是更新后的，那么回调函数到底做了什么 呢，在数据变化之后立即使用 this.$nextTick(callback),callback 又称延迟回调，而此回调在 dom 更新完成后就会自动调用（它会等待 Dom 更新完成）。

### 二 、使用场景

>   
> 1、在 created 生命同期里，想操作（渲染后的视图）—不存在。  
> 因在 created 执行时，Dom 并未进行任何渲染，因此拿不到。  
> 如非要等，可以在 nextTick 的回调函数中去操作。  
> 2、在 mounted 生命同期表示所有的 dom 都 已挂载并渲染完成，在此[钩子函数](https://so.csdn.net/so/search?q=%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020)操作 dom 几乎没有问题，但 mounted 可并没有承诺所有的子组件都一起被挂载，如果等所有整个视图全部渲染完毕也可以考虑使用 nextTick 代替 mounted 比较保险。

```
mounted(){
 this.$nextTick(()=>{
  在此操作子组件更新后的dom
 })
}
```

3、在使用第三方插件时，希望在 vue 生成 的某些 dom 动态变化时去重新调用该插件也可以使用。  
 

```
mounted(){
 this.$nextTick(()=>{
  this.Toast("xxx")c
 })
}
```

### 三、使用场景

需要在视图更新之后，基于新的视图进行操作。

>         在 created() 和 mounted() 生命周期函数中，如果要操作渲染后的视图，也要使用 nextTick 方法，或者放入异步函数 setTimeout 中。
> 
>         mounted() 函数中，也不能保证所有的子组件已经更新， 不会承诺所有的子组件也都一起被挂载，因此也是需要放入 nextTick 方法。

例子：

>         之前一个项目里的 echarts 图标，点击按钮需要需要刷新 echarts 图表，点击刷新按钮提示报错，Can't get dom width or height，不难看出来，是因为获取不到 echarts 的宽和高，刚开始使用 this.$refs 获取元素的宽和高，获取不到，我觉得是 dom 渲染的问题。
> 
>         这时候我想到这个 this.$nextTick 方法，我从上面的使用结果可以知道，this.$nextTick() 方法主要是用在随数据改变而改变的 dom 应用场景中，vue 中数据和 dom 渲染由于是异步的，所以，要让 dom 结构随数据改变这样的操作都应该放进 this.$nextTick() 的回调函数中。created() 中使用的方法时，dom 还没有渲染，如果此时在该钩子函数中进行 dom 赋值数据（或者其它 dom 操作）时无异于徒劳，所以，此时 this.$nextTick() 就会被大量使用，而与 created() 对应的是 mounted() 的钩子函数则是在 dom 完全渲染后才开始渲染数据，所以在 mounted() 中操作 dom 基本不会存在渲染问题。

### 四、原理

> Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是异步执行 DOM 更新的。

异步执行的运行机制是什么样的？

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个 "任务队列"（task queue）。只要异步任务有了运行结果，就在 "任务队列" 之中放置一个事件。

（3）一旦 "执行栈" 中的所有同步任务执行完毕，系统就会读取 "任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。  
**主线程不断执行任务、获取任务、执行任务…… 的过程叫做事件循环**

### 五、vue 异步更新队列：

**vue 是依靠数据驱动视图更新的，该更新的过程是异步的。**即：当侦听到你的数据发生变化时， Vue 将开启一个队列（该队列被 Vue 官方称为异步更新队列）。视图需要等队列中所有数据变化完成之后，再统一进行更新。