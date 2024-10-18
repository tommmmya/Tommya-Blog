---
icon: pen-to-square
date: 2022-01-11
category:
  - 面试
tag:
  - eventloop
  - 事件循环
  - Javascript
---



# JS事件循环机制

> [1] 本文主要根据网上资源总结而来，如有不对，请斧正。 [2] 需要知道的专业名词术语：synchronous：同步任务、asynchronous：异步任务、task queue/callback queue：任务队列、execution context stack：执行栈、heap：堆、stack：栈、macro-task：宏任务、micro-task：微任务

### 首先我们要知道两点：

*   JavaScript 是单线程的语言
*   Event Loop 是 javascript 的执行机制

### javascript 事件循环

js 是单线程，就像学生排队上厕所，学生需要排队一个一个上厕所，同理 js 任务也要一个一个顺序执行。如果一个任务耗时过长，那么后一个任务也必须等着。那么问题来了，假如我们想浏览新闻，但是新闻包含的超清图片加载很慢，难道我们的网页要一直卡着直到图片完全显示出来？因此聪明的程序员将任务分为两类：

*   同步任务
*   异步任务

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/14/164974fa38dcffce~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

从图片可知，一个方法执行会向执行栈中加入这个方法的执行环境，在这个执行环境中还可以调用其他方法，甚至是自己，其结果不过是在执行栈中再添加一个执行环境。这个过程可以是无限进行下去的，除非发生了栈溢出，即超过了所能使用内存的最大值。

当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。关于这部分有严格的文字定义，但本文的目的是用最小的学习成本彻底弄懂执行机制

##### 先看一段代码：

```
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

打印顺序是什么？ 正确答案是：script start, script end, promise1, promise2, setTimeout 已蒙圈。。。

### 为什么会出现这样打印顺序呢？

*   如下导图（此图从网站下载）

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/14/164974fb89da87c5~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

解读：

*   同步和异步任务分别进入不同的执行 "场所"，同步的进入主线程，异步的进入 Event Table 并注册函数
*   当指定的事情完成时，Event Table 会将这个函数移入 Event Queue。
*   主线程内的任务执行完毕为空，会去 Event Queue 读取对应的函数，进入主线程执行。
*   上述过程会不断重复，也就是常说的 Event Loop(事件循环)。

我们不禁要问了，那怎么知道主线程执行栈为空呢？js 引擎存在 monitoring process 进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去 Event Queue 那里检查是否有等待被调用的函数。

看代码：

```
let data = [];
$.ajax({
    url:www.javascript.com,
    data:data,
    success:() => {
        console.log('发送成功!');
    }
})
console.log('代码执行结束');
```

上面是一段简易的 ajax 请求代码：

*   ajax 进入 Event Table，注册回调函数 success。
*   执行 console.log('代码执行结束')。
*   ajax 事件完成，回调函数 success 进入 Event Queue。
*   主线程从 Event Queue 读取回调函数 success 并执行。

相信通过上面的文字和代码，你已经对 js 的执行顺序有了初步了解。

### 微任务 (Microtasks)、宏任务 (task)？

##### 微任务和宏任务皆为异步任务，它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop 的走向和取值。那么他们之间到底有什么区别呢？

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/14/164974fa4b42e4af~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

> 一个掘金的老哥（ssssyoki）的文章摘要： 那么如此看来我给的答案还是对的。但是 js 异步有一个机制，就是遇到宏任务，先执行宏任务，将宏任务放入 eventqueue，然后在执行微任务，将微任务放入 eventqueue 最骚的是，这两个 queue 不是一个 queue。当你往外拿的时候先从微任务里拿这个回掉函数，然后再从宏任务的 queue 上拿宏任务的回掉函数。 我当时看到这我就服了还有这种骚操作。

*   而宏任务一般是：包括整体代码 script，setTimeout，setInterval、setImmediate。
*   微任务：原生 Promise(有些实现的 promise 将 then 方法放到了宏任务中)、process.nextTick、Object.observe(已废弃)、 MutationObserver 记住就行了。
*   [process 是什么？](https://link.juejin.cn?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fprocess.html "http://nodejs.cn/api/process.html")

不废话，看以下例子：

### setTimeout

大名鼎鼎的 setTimeout 无需再多言，大家对他的第一印象就是异步可以延时执行，我们经常这么实现延时 3 秒执行：

```
setTimeout(() => {
    console.log('延时3秒');
},3000)
```

渐渐的 setTimeout 用的地方多了，问题也出现了，有时候明明写的延时 3 秒，实际却 5，6 秒才执行函数，这又咋回事啊？

```
setTimeout(() => {
    task();
},3000)
console.log('执行console');
```

根据前面我们的结论，setTimeout 是异步的，应该先执行 console.log 这个同步任务，所以我们的结论是：

```
// 执行console
// task()
```

去验证一下，结果正确！ 然后我们修改一下前面的代码：

```
setTimeout(() => {
    task()
},3000)

sleep(10000000)
```

乍一看其实差不多嘛，但我们把这段代码在 chrome 执行一下，却发现控制台执行 task() 需要的时间远远超过 3 秒，说好的延时三秒，为啥现在需要这么长时间啊？ 这时候我们需要重新理解`setTimeout`的定义。我们先说上述代码是怎么执行的：

*   task() 进入 Event Table 并注册, 计时开始。
*   执行 sleep 函数，很慢，非常慢，计时仍在继续。
*   3 秒到了，计时事件 timeout 完成，task() 进入 Event Queue，但是 sleep 也太慢了吧，还没执行完，只好等着。
*   sleep 终于执行完了，task() 终于从 Event Queue 进入了主线程执行。

上述的流程走完，我们知道 setTimeout 这个函数，是经过指定时间后，把要执行的任务 (本例中为 task()) 加入到 Event Queue 中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间远远大于 3 秒。

我们还经常遇到`setTimeout(fn,0)`这样的代码，0 秒后执行又是什么意思呢？是不是可以立即执行呢？ 答案是不会的，`setTimeout(fn,0)`的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。举例说明：

```
//代码1
console.log('先执行这里');
setTimeout(() => {
    console.log('执行啦')
},0);

//代码2
console.log('先执行这里');
setTimeout(() => {
    console.log('执行啦')
},3000);
```

代码 1 的输出结果是：

```
先执行这里
执行啦
```

代码 2 的输出结果是：

```
//先执行这里
// ... 3s later
// 执行啦
```

关于 setTimeout 要补充的是，即便主线程为空，0 毫秒实际上也是达不到的。根据 HTML 的标准，最低是 4 毫秒。有兴趣的同学可以自行了解。

### setInterval

上面说完了`setTimeout`，当然不能错过它的孪生兄弟`setInterval`。他俩差不多，只不过后者是循环的执行。对于执行顺序来说，`setInterval`会每隔指定的时间将注册的函数置入 Event Queue，如果前面的任务耗时太久，那么同样需要等待。

唯一需要注意的一点是，`对于setInterval(fn,ms)`来说，我们已经知道不是每过 ms 秒会执行一次 fn，而是每过 ms 秒，会有 fn 进入 Event Queue。一旦 setInterval 的回调函数 fn 执行时间超过了延迟时间 ms，那么就完全看不出来有时间间隔了。这句话请读者仔细品味。

### Promise 与 process.nextTick(callback)

*   Promise 的定义和功能本文不再赘述，可以学习一下 [阮一峰老师的 Promise](https://link.juejin.cn?target=http%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fpromise "http://es6.ruanyifeng.com/#docs/promise")
*   而 process.nextTick(callback) 类似 node.js 版的 "setTimeout"，在事件循环的下一次循环中调用 callback 回调函数。

##### 不同类型的任务会进入对应的 Event Queue，比如`setTimeout`和`setInterval`会进入相同的 Event Queue。

看例子：

```
setTimeout(()=>{
  console.log('setTimeout1')
},0)
let p = new Promise((resolve,reject)=>{
  console.log('Promise1')
  resolve()
})
p.then(()=>{
  console.log('Promise2')    
})
```

##### 最后输出结果是 Promise1，Promise2，setTimeout1

Promise 参数中的 Promise1 是同步执行的 其次是因为 Promise 是 microtasks，会在同步任务执行完后会去清空 microtasks queues， 最后清空完微任务再去宏任务队列取值。

```
Promise.resolve().then(()=>{
  console.log('Promise1')  
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
})

setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')    
  })
},0)
```

##### 这回是嵌套，大家可以看看，最后输出结果是 Promise1，setTimeout1，Promise2，setTimeout2

*   一开始执行栈的同步任务执行完毕，会去 microtasks queues 找 清空 microtasks queues ，输出`Promise1`，同时会生成一个异步任务 setTimeout1
*   去宏任务队列查看此时队列是 setTimeout1 在 setTimeout2 之前，因为 setTimeout1 执行栈一开始的时候就开始异步执行, 所以输出 `setTimeout1`
*   在执行 setTimeout1 时会生成 Promise2 的一个 microtasks ，放入 microtasks queues 中，接着又是一个循环，去清空 microtasks queues ，输出 `Promise2`
*   清空完 microtasks queues ，就又会去宏任务队列取一个，这回取的是 `setTimeout2`

如下图：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/14/1649751a2eb3953f~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

最后我们来分析一段较复杂的代码，看看你是否真的掌握了 js 的执行机制：

```
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```

第一轮事件循环流程分析如下：

*   整体 script 作为第一个宏任务进入主线程，遇到 console.log，输出`1`。
*   遇到 setTimeout，其回调函数被分发到宏任务 Event Queue 中。我们暂且记为`setTimeout1`。
*   遇到 process.nextTick()，其回调函数被分发到微任务 Event Queue 中。我们记为`process1`。
*   遇到 Promise，new Promise 直接执行，输出 7。then 被分发到微任务 Event Queue 中。我们记为`then1`。
*   又遇到了 setTimeout，其回调函数被分发到宏任务 Event Queue 中，我们记为`setTimeout2`。

<table><thead><tr><th>宏任务 Event Queue</th><th>微任务 Event Queue</th></tr></thead><tbody><tr><td>setTimeout1</td><td>process1</td></tr><tr><td>setTimeout2</td><td>then1</td></tr></tbody></table>

*   上表是第一轮事件循环宏任务结束时各 Event Queue 的情况，此时已经输出了`1`和`7`。

我们发现了 process1 和 then1 两个微任务。

*   执行 process1, 输出`6`。
*   执行 then1，输出`8`。

好了，第一轮事件循环正式结束，这一轮的结果是输出`1，7，6，8`。那么第二轮时间循环从 setTimeout1 宏任务开始：

*   首先输出`2`。接下来遇到了 process.nextTick()，同样将其分发到微任务 Event Queue 中，记为 process2。
*   new Promise 立即执行输出`4`，then 也分发到微任务 Event Queue 中，记为 then2

<table><thead><tr><th>宏任务 Event Queue</th><th>微任务 Event Queue</th></tr></thead><tbody><tr><td>setTimeout2</td><td>process3</td></tr><tr><td></td><td>then3</td></tr></tbody></table>

*   第三轮事件循环宏任务执行结束，执行两个微任务 process3 和 then3。
    
*   输出`10`。
    
*   输出`12`。
    
*   第三轮事件循环结束，第三轮输出`9，11，10，12`。
    
*   整段代码，共进行了三次事件循环，完整的输出为`1，7，6，8，2，4，3，5，9，11，10，12`。(请注意，node 环境下的事件监听依赖 libuv 与前端环境不完全相同，输出顺序可能会有误差)
    

### 结尾

希望大家看了本篇文章都有收获 ...

#### 好了，最后希望大家世界杯都能够逢赌必赢，自己喜欢的球队也能够杀进决赛！