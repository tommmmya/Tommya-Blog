import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-jr09F59J.js";const i={},l=a(`<h1 id="路由守卫详解" tabindex="-1"><a class="header-anchor" href="#路由守卫详解"><span>路由守卫详解</span></a></h1><p>在项目开发中每一次路由的切换或者页面的刷新都需要判断用户是否已经登录，前端可以判断，后端也会进行判断的，我们前端最好也进行判断。</p><p>vue-router 提供了导航钩子: 全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach 导航钩子中进行判断。<br><strong>导航钩子有 3 个参数：</strong><br> 1、to: 即将要进入的目标路由对象；</p><p>2、from: 当前导航即将要离开的路由对象；</p><p>3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>next()//直接进to 所指路由</span></span>
<span class="line"><span>        next(false) //中断当前路由</span></span>
<span class="line"><span>        next(&#39;route&#39;) //跳转指定路由</span></span>
<span class="line"><span>        next(&#39;error&#39;) //跳转错误路由</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>beforeEach：</p><p>路由配置文件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Router from &#39;vue-router&#39;</span></span>
<span class="line"><span>import HelloWorld from &#39;@/components/HelloWorld&#39;</span></span>
<span class="line"><span>import HomePage from &#39;@/pages/home.vue&#39;</span></span>
<span class="line"><span>Vue.use(Router)</span></span>
<span class="line"><span>const router=new Router({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;,</span></span>
<span class="line"><span>      name: &#39;HelloWorld&#39;,</span></span>
<span class="line"><span>      component: HelloWorld</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>     {</span></span>
<span class="line"><span>      path: &#39;/home&#39;,</span></span>
<span class="line"><span>      name: &#39;home&#39;,</span></span>
<span class="line"><span>      component: HomePage</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>     {</span></span>
<span class="line"><span>     	path:&#39;*&#39;,</span></span>
<span class="line"><span>     	redirect:&#39;/home&#39;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>  router.beforeEach((to,from,next)=&gt;{</span></span>
<span class="line"><span>  	console.log(to);</span></span>
<span class="line"><span>  	console.log(from);</span></span>
<span class="line"><span>  	next();</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span> export default router;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>afterEach:</strong><br> 和 beforeEach 不同的是 afterEach 不接收第三个参数 next 函数，也不会改变导航本身，一般 beforeEach 用的最多，afterEach 用的少.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>router.afterEach((to,from)=&gt;{ //这里不接收next</span></span>
<span class="line"><span>    console.log(to);</span></span>
<span class="line"><span>    console.log(from);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由守卫分类</strong><br> 一，<strong>全局守卫</strong></p><p><strong>全局前置守卫 beforeEach</strong>（to，from， next）在路由跳转前触发，这个钩子作用主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚</p><p><strong>全局解析守卫 beforeResolve</strong>（to，from， next）这个钩子和 beforeEach 类似，也是路由跳转前触发，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，即在 beforeEach 和 组件内 beforeRouteEnter 之后，afterEach 之前调用</p><p><strong>全局后置钩子 afterEach</strong>（to，from）和 beforeEach 相反，它是在路由跳转完成后触发，它发生在 beforeEach 和 beforeResolve 之后，beforeRouteEnter（组件内守卫）之前。这些钩子不会接受 next 函数也不会改变导航本身</p><p>二 <strong>独享守卫</strong>: 是指在单个路由配置的时候也可以设置的钩子函数<br><strong>路由独享守卫 beforeEnter</strong>（to，from， next）和 beforeEach 完全相同，如果两个都设置了，beforeEnter 则在 beforeEach 之后紧随执行。在路由配置上直接定义 beforeEnter 守卫</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/foo&#39;,</span></span>
<span class="line"><span>      component: Foo,</span></span>
<span class="line"><span>      beforeEnter: (to, from, next) =&gt; {</span></span>
<span class="line"><span>        // ...</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三 <strong>组件守卫</strong>: 是指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>  data(){</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteEnter (to, from, next) {</span></span>
<span class="line"><span>    // 在渲染该组件的对应路由被 confirm 前调用</span></span>
<span class="line"><span>    // 不！能！获取组件实例 \`this\`</span></span>
<span class="line"><span>    // 因为当守卫执行前，组件实例还没被创建</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteUpdate (to, from, next) {</span></span>
<span class="line"><span>    // 在当前路由改变，但是该组件被复用时调用</span></span>
<span class="line"><span>    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span></span>
<span class="line"><span>    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span></span>
<span class="line"><span>    // 可以访问组件实例 \`this\`</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteLeave (to, from, next) {</span></span>
<span class="line"><span>    // 导航离开该组件的对应路由时调用</span></span>
<span class="line"><span>    // 可以访问组件实例 \`this\`</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【3.1】<strong>组件前置守卫 beforeRouteEnter</strong>（to，from， next）<br> 该钩子在全局守卫 beforeEach 和独享守卫 beforeEnter 之后，全局 beforeResolve 和全局 afterEach 之前调用，要注意的是该守卫内访问不到组件的实例，也就是 this 为 undefined。因为它在组件生命周期 beforeCreate 阶段触发，此时的新组件还没有被创建。在这个钩子函数中，可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beforeRouteEnter (to, from, next) {</span></span>
<span class="line"><span>  next(vm =&gt; {</span></span>
<span class="line"><span>    // 通过 \`vm\` 访问组件实例</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【3.2】 <strong>组件更新守卫 beforeRouteUpdadte</strong>（to，from， next）<br> 在当前路由改变时，并且该组件被复用时调用，可以通过 this 访问实例</p><p>【3.3】 <strong>组件离开守卫 beforeRouteLeave</strong>（to，from， next）<br> 导航离开该组件的对应路由时调用，可以访问组件实例 this。这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消<br> 3</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beforeRouteLeave (to, from , next) {</span></span>
<span class="line"><span>  const answer = window.confirm(&#39;Do you really want to leave? you have unsaved changes!&#39;)</span></span>
<span class="line"><span>  if (answer) {</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    next(false)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由钩子在实际开发中的应用场景</strong></p><p>路由钩子在实际的开发过程中使用较少, 我在实际的项目中只在组件内使用过 beforeRouteLeave, 使用场景分别为一下三类情况</p><p><strong>清除当前组件中的定时器</strong><br> 当一个组件中有一个定时器时, 在路由进行切换的时候, 可使用 beforeRouteLeave 将定时器进行清楚, 以免占用内存</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beforeRouteLeave (to, from, next) {</span></span>
<span class="line"><span>  window.clearInterval(this.timer) //清楚定时器</span></span>
<span class="line"><span>  next()</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转</strong></p><p>如果页面内有重要的信息需要用户保存后才能进行跳转, 或者有弹出框的情况. 应该阻止用户跳转</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beforeRouteLeave (to, from, next) {</span></span>
<span class="line"><span> //判断是否弹出框的状态和保存信息与否</span></span>
<span class="line"><span> if (this.dialogVisibility === true) {</span></span>
<span class="line"><span>    this.dialogVisibility = false //关闭弹出框</span></span>
<span class="line"><span>    next(false) //回到当前页面, 阻止页面跳转</span></span>
<span class="line"><span>  }else if(this.saveMessage === false) {</span></span>
<span class="line"><span>    alert(&#39;请保存信息后退出!&#39;) //弹出警告</span></span>
<span class="line"><span>    next(false) //回到当前页面, 阻止页面跳转</span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>    next() //否则允许跳转</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>保存相关内容到 Vuex 中或 Session 中</strong><br> 当用户需要关闭页面时, 可以将公用的信息保存到 session 或 Vuex 中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beforeRouteLeave (to, from, next) {</span></span>
<span class="line"><span>    localStorage.setItem(name, content); //保存到localStorage中</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由守卫参数介绍</strong></p><p>to：即将要进入的目标路由对象；</p><p>from：即将要离开的路由对象；</p><p>next：涉及到 next 参数的钩子函数，必须调用 next() 方法来 resolve 这个钩子，否则路由会中断在这，不会继续往下执行</p><p>next()：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed(确认的)。<br> next(false) 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。<br> next(’ / ‘) 或者 next({ paht：’ / ’ })：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。可传递的参数可以是 router-link 标签中的 to 属性参数或 router.push 中的选项<br> next(error)：如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。</p><p><strong>完整的导航解析过程</strong></p><p>1 触发进入其它路由<br> 2 调用要离开路由的组件守卫 beforeRouteLeave<br> 3 调用全局的前置守卫 beforeEach<br> 4 在重用的组件里调用 beforeRouteUpdate<br> 5 在路由配置里调用 beforeEnter<br> 6 解析异步路由组件<br> 7 在将要进入的路由组件中调用 beforeRouteEnter<br> 8 调用全局的解析守卫 beforeResolve<br> 9 导航被确认<br> 10 调用全局的后置钩子 afterEach。<br> 11 触发 DOM 更新 mounted。<br> 12 执行 beforeRouteEnter 守卫中传给 next 的回调函数</p>`,40),p=[l];function r(t,d){return e(),n("div",null,p)}const v=s(i,[["render",r],["__file","vue中的路由守卫(导航守卫).html.vue"]]),m=JSON.parse('{"path":"/study/3.Vue/vue%E4%B8%AD%E7%9A%84%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB(%E5%AF%BC%E8%88%AA%E5%AE%88%E5%8D%AB).html","title":"路由守卫详解","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-07-21T00:00:00.000Z","category":["Vue"],"tag":["vue","路由守卫"],"description":"路由守卫详解 在项目开发中每一次路由的切换或者页面的刷新都需要判断用户是否已经登录，前端可以判断，后端也会进行判断的，我们前端最好也进行判断。 vue-router 提供了导航钩子: 全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach ...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/3.Vue/vue%E4%B8%AD%E7%9A%84%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB(%E5%AF%BC%E8%88%AA%E5%AE%88%E5%8D%AB).html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"路由守卫详解"}],["meta",{"property":"og:description","content":"路由守卫详解 在项目开发中每一次路由的切换或者页面的刷新都需要判断用户是否已经登录，前端可以判断，后端也会进行判断的，我们前端最好也进行判断。 vue-router 提供了导航钩子: 全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T07:56:04.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"路由守卫"}],["meta",{"property":"article:published_time","content":"2023-07-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T07:56:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"路由守卫详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-29T07:56:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[],"git":{"createdTime":1728989573000,"updatedTime":1730188564000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":2}]},"readingTime":{"minutes":6.43,"words":1930},"filePathRelative":"study/3.Vue/vue中的路由守卫(导航守卫).md","localizedDate":"2023年7月21日","excerpt":"\\n<p>在项目开发中每一次路由的切换或者页面的刷新都需要判断用户是否已经登录，前端可以判断，后端也会进行判断的，我们前端最好也进行判断。</p>\\n<p>vue-router 提供了导航钩子: 全局前置导航钩子 beforeEach 和全局后置导航钩子 afterEach，他们会在路由即将改变前和改变后进行触发。所以判断用户是否登录需要在 beforeEach 导航钩子中进行判断。<br>\\n<strong>导航钩子有 3 个参数：</strong><br>\\n1、to: 即将要进入的目标路由对象；</p>\\n<p>2、from: 当前导航即将要离开的路由对象；</p>\\n<p>3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。</p>","autoDesc":true}');export{v as comp,m as data};
