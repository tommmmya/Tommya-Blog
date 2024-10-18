---
icon: pen-to-square
date: 2022-01-11
category:
  - Vue
tag:
  - vue
  - 动态组件
---
# 动态组件详解
##### 1、 什么是动态组件

动态组件是指：在一个挂载点使用多个组件，并进行动态切换。可能对于新手来说，这句话有些难理解，什么是挂载点? 可以简单的理解为页面的一个位置。  
最常见的就是：tab 的切换功能。

在 vue 要实现这个功能通常用两种方式。一是使用`<component>`元素的 **is** 的特性，二是使用 **v-if** 。

#### 方式一：

```
<template>
  <div class="hello">
    <h3>使用component 的 is特性</h3>
    <ul>
      <li 
      v-for="(item,index) in tabList" 
      :key="index" 
      style="cursor:pointer" 
      @click="changeView(index)">
      {{item}}</li>
    </ul>
    <component :is="currentView"></component>
  </div>
</template>

<script>
// 相关的组件代码在这里不展示
import shouji from "./shouji";
import pc from "./pc";
import shuma from "./shuma";
export default {
  name: "HelloWorld",
  components: {
    shouji,
    pc,
    shuma,
  },
  data() {
    return {
      index: 0,
      arr: ["shuma", "shouji", "pc"],
      tabList: ["数码", "手机", "电脑"],
    };
  },
  computed: {
    currentView() {
      return this.arr[this.index];
    }
  },
  methods: {
    changeView(index) {
      this.index = index;
    }
  },
};
</script>
```

#### 方式二

```
<template>
  <div class="hello">
    <h3>使用v-if实现</h3>
    <ul>
      <li v-for="(item,index) in tabList" :key="index" style="cursor:pointer" @click="change(index)">{{item}}</li>
    </ul>
    <div>
        <shuma v-if="index===0"></shuma>
        <shouji v-else-if="index===1"></shouji>
        <pc v-else></pc>
    </div>
  </div>
</template>

<script>
// 相关的组件代码在这里不展示
import shouji from "./shouji";
import pc from "./pc";
import shuma from "./shuma";
export default {
  name: "HelloWorld",
  components: {
    shouji,
    pc,
    shuma,
  },
  data() {
    return {
      index: 0,
      keppIndex:0,
      arr: ["shuma", "shouji", "pc"],
      tabList: ["数码", "手机", "电脑"],
    };
  },
  computed: {
  },
  methods: {
    change(index) {
      this.index = index;
    }
  },
};
</script>
```

#### 缓存

上述讲到的方法虽然能够实现了动态组件的切换，但是每次切换都会把上一个组件销毁，然后渲染下一个组件，对于多次切换而言，显然每次的销毁和重新渲染，很大消耗了我们的性能。所以我们可以通过 keep-alive 对组件进行缓存，对于不显示的组件不是去销毁他，而是使他处理不激活的状态，当需要显示时再去激活。

```
<template>
  <div class="hello">
    <h3>使用component 的 is特性 有缓存的组件</h3>
    <ul>
      <li 
      v-for="(item,index) in tabList" 
      :key="index" 
      style="cursor:pointer" 
      @click="changeView(index)">
      {{item}}</li>
      <keep-alive>
		<component :is="currentView"></component>
	  </keep-alive>
    </ul>
  </div>
</template>

<script>
// 相关的组件代码在这里不展示
import shouji from "./shouji";
import pc from "./pc";
import shuma from "./shuma";
export default {
  name: "HelloWorld",
  components: {
    shouji,
    pc,
    shuma,
  },
  data() {
    return {
      index: 0,
      arr: ["shuma", "shouji", "pc"],
      tabList: ["数码", "手机", "电脑"],
    };
  },
  computed: {
    currentView() {
      return this.arr[this.index];
    }
  },
  methods: {
    changeView(index) {
      this.index = index;
    }
  },
};
</script>
```

#### 和 keep-alive 相关的两个生命周期

```
activated() {
     console.log("shouji 手机页面被添加");// 被缓存的组件激活时触发
 },
 deactivated() {
     console.log("shouji 手机页面被移除"); // 被切换到其他组件时触发
 }
```

#### keep-alive 的两个属性

include 和 exclude

**include 表示只能允许匹配到的组件生效  
exclude 则相反，除了匹配到的组件之外有效**

使用方法：

```
<!-- 字符串 逗号分隔字符串， a，b 分别为组件名 -->
<keep-alive include="a,b">
  <component :is="currentView"></component>
</keep-alive>
<!-- 正则表达式 -->
<keep-alive :include="/a|b/">
  <component :is="currentView"></component>
</keep-alive>
<!-- 数组 -->
<keep-alive :include="['a', 'b']">
  <component :is="currentView"></component>
</keep-alive>
```