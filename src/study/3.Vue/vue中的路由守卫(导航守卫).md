---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - 路由守卫
---
# 路由守卫详解
在项目开发中每一次路由的切换或者页面的刷新都需要判断用户是否已经登录，前端可以判断，后端也会进行判断的，我们前端最好也进行判断。

vue-router 提供了导航钩子: 全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach 导航钩子中进行判断。  
**导航钩子有 3 个参数：**  
1、to: 即将要进入的目标路由对象；

2、from: 当前导航即将要离开的路由对象；

3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。

```
next()//直接进to 所指路由
        next(false) //中断当前路由
        next('route') //跳转指定路由
        next('error') //跳转错误路由
```

beforeEach：

路由配置文件：

```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/pages/home.vue'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/home',
      name: 'home',
      component: HomePage
    },
     {
     	path:'*',
     	redirect:'/home'
     }
  ],
})
  router.beforeEach((to,from,next)=>{
  	console.log(to);
  	console.log(from);
  	next();
  })
 export default router;
```

**afterEach:**  
和 beforeEach 不同的是 afterEach 不接收第三个参数 next 函数，也不会改变导航本身，一般 beforeEach 用的最多，afterEach 用的少.

```
router.afterEach((to,from)=>{ //这里不接收next
    console.log(to);
    console.log(from);
})
```

**路由守卫分类**  
一，**全局守卫**

**全局前置守卫 beforeEach**（to，from， next）在路由跳转前触发，这个钩子作用主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚

**全局解析守卫 beforeResolve**（to，from， next）这个钩子和 beforeEach 类似，也是路由跳转前触发，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，即在 beforeEach 和 组件内 beforeRouteEnter 之后，afterEach 之前调用

**全局后置钩子 afterEach**（to，from）和 beforeEach 相反，它是在路由跳转完成后触发，它发生在 beforeEach 和 beforeResolve 之后，beforeRouteEnter（组件内守卫）之前。这些钩子不会接受 next 函数也不会改变导航本身

二 **独享守卫**: 是指在单个路由配置的时候也可以设置的钩子函数  
**路由独享守卫 beforeEnter**（to，from， next）和 beforeEach 完全相同，如果两个都设置了，beforeEnter 则在 beforeEach 之后紧随执行。在路由配置上直接定义 beforeEnter 守卫

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

三 **组件守卫**: 是指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数

```
<template>
  ...
</template>
<script>
export default{
  data(){
    //...
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
</script>
<style>
  ...
</style>
```

【3.1】**组件前置守卫 beforeRouteEnter**（to，from， next）  
该钩子在全局守卫 beforeEach 和独享守卫 beforeEnter 之后，全局 beforeResolve 和全局 afterEach 之前调用，要注意的是该守卫内访问不到组件的实例，也就是 this 为 undefined。因为它在组件生命周期 beforeCreate 阶段触发，此时的新组件还没有被创建。在这个钩子函数中，可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数

```
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

【3.2】 **组件更新守卫 beforeRouteUpdadte**（to，from， next）  
在当前路由改变时，并且该组件被复用时调用，可以通过 this 访问实例

【3.3】 **组件离开守卫 beforeRouteLeave**（to，from， next）  
导航离开该组件的对应路由时调用，可以访问组件实例 this。这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消  
3

```
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

**路由钩子在实际开发中的应用场景**

路由钩子在实际的开发过程中使用较少, 我在实际的项目中只在组件内使用过 beforeRouteLeave, 使用场景分别为一下三类情况

**清除当前组件中的定时器**  
当一个组件中有一个定时器时, 在路由进行切换的时候, 可使用 beforeRouteLeave 将定时器进行清楚, 以免占用内存

```
beforeRouteLeave (to, from, next) {
  window.clearInterval(this.timer) //清楚定时器
  next()
}
```

**当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转**

如果页面内有重要的信息需要用户保存后才能进行跳转, 或者有弹出框的情况. 应该阻止用户跳转

```
beforeRouteLeave (to, from, next) {
 //判断是否弹出框的状态和保存信息与否
 if (this.dialogVisibility === true) {
    this.dialogVisibility = false //关闭弹出框
    next(false) //回到当前页面, 阻止页面跳转
  }else if(this.saveMessage === false) {
    alert('请保存信息后退出!') //弹出警告
    next(false) //回到当前页面, 阻止页面跳转
  }else {
    next() //否则允许跳转
  }
}
```

**保存相关内容到 Vuex 中或 Session 中**  
当用户需要关闭页面时, 可以将公用的信息保存到 session 或 Vuex 中

```
beforeRouteLeave (to, from, next) {
    localStorage.setItem(name, content); //保存到localStorage中
    next()
}
```

**路由守卫参数介绍**

to：即将要进入的目标路由对象；

from：即将要离开的路由对象；

next：涉及到 next 参数的钩子函数，必须调用 next() 方法来 resolve 这个钩子，否则路由会中断在这，不会继续往下执行

next()：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed(确认的)。  
next(false) 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。  
next(’ / ‘) 或者 next({ paht：’ / ’ })：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。可传递的参数可以是 router-link 标签中的 to 属性参数或 router.push 中的选项  
next(error)：如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

**完整的导航解析过程**

1 触发进入其它路由  
2 调用要离开路由的组件守卫 beforeRouteLeave  
3 调用全局的前置守卫 beforeEach  
4 在重用的组件里调用 beforeRouteUpdate  
5 在路由配置里调用 beforeEnter  
6 解析异步路由组件  
7 在将要进入的路由组件中调用 beforeRouteEnter  
8 调用全局的解析守卫 beforeResolve  
9 导航被确认  
10 调用全局的后置钩子 afterEach。  
11 触发 DOM 更新 mounted。  
12 执行 beforeRouteEnter 守卫中传给 next 的回调函数