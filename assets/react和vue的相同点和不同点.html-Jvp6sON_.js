import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-jr09F59J.js";const i={},l=e(`<h1 id="react和vue的相同点和不同点" tabindex="-1"><a class="header-anchor" href="#react和vue的相同点和不同点"><span>react和vue的相同点和不同点</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>Vue 3 和 React 是市面上目前非常受欢迎的两个前端框架。它们都采用了组件化的开发模式，使得开发者可以将复杂的应用拆分为多个小组件进行开发，从而提高了代码的可维护性和重用性。然而，虽然 Vue 3 和 React 都拥有各自的优点，但它们也存在着一些不同之处，本文将通过比较两者的相同点和不同点来帮助读者更好地理解 Vue 3 和 React。</p><h2 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点"><span>相同点</span></a></h2><p><strong>1. 组件化开发</strong></p><p>Vue 3 和 React 都采用了组件化开发的方式，使得代码具有更好的可维护性和重用性。在 Vue 3 中，组件可以被定义为一个对象，并且包含一个 template、script 和 style 标签。在 React 中，组件可以被定义为一个类或者函数，并且采用 JSX 语法来描述组件的结构和行为。</p><p><strong>2. 响应式数据绑定</strong></p><p>Vue 3 和 React 都支持响应式数据绑定，这意味着当数据变化时，UI 界面会自动更新。在 Vue 3 中，数据变化会触发视图的重新渲染，而在 React 中则会调用组件的 render 方法重新生成虚拟 DOM 树。</p><p><strong>3. 虚拟 DOM 机制</strong></p><p>Vue 3 和 React 都采用了虚拟 DOM 机制来进行高效的页面更新。虚拟 DOM 是一个轻量级的 JavaScript 对象，它描述了 UI 界面的状态和结构，当数据发生变化时，框架会通过比较前后两个虚拟 DOM 树的差异来进行页面更新。</p><p><strong>4. 组件之间的通信</strong></p><p>Vue 3 和 React 都支持父子组件之间的通信。在 Vue 3 中，通过 props 和 $emit 方法可以实现父子组件之间的数据传递和事件监听；在 React 中，则通过 props 和回调函数来实现同样的功能。</p><h2 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点"><span>不同点</span></a></h2><p><strong>1. 响应式数据绑定的实现方式不同</strong></p><p>Vue 3 使用了 Proxy API 来实现响应式数据绑定，这使得代码更加简洁易懂，并且能够支持动态添加和删除属性。而 React 则需要使用 setState 方法来触发视图的重新渲染，这使得代码相对复杂一些。</p><p>Vue 3 的响应式 API 还允许开发者在模板中直接使用响应式数据，而 React 则需要手动将数据传递给组件。</p><p><strong>2. 组件状态管理的实现方式不同</strong></p><p>Vue 3 引入了 Composition API，使得组件状态管理更加灵活和可维护。开发者可以将逻辑相关的代码封装为单独的函数，从而实现更好的代码复用和组织。</p><p>React 则通过生命周期方法和 hooks 来管理组件状态，虽然也能够实现相同的功能，但是代码相对较为冗长。</p><p><strong>3. 组件渲染方式不同</strong></p><p>Vue 3 采用了 template 语法来描述组件的结构和行为，这使得代码可读性更高，并且能够更好地与设计师协作。在模板中可以使用 if、for 等语句来实现复杂的逻辑控制。</p><p>React 则采用 JSX 语法来描述组件的结构和行为，这使得代码更加灵活，并且能够更好地与 JavaScript 集成。但是，由于 JSX 需要手动添加标签，因此代码可读性相对较差。</p><p><strong>4. API 设计风格不同</strong></p><p>Vue 3 的 API 设计倾向于提供语法糖和便捷方法，使得开发者能够更加高效地编写代码。例如，Vue 3 中提供了 v-model 指令来实现双向数据绑定，在处理表单等情况下非常方便。</p><p>React 则倾向于提供一些基础 API，并且鼓励开发者自行封装复杂的功能。这样做可以让代码更加灵活和可扩展，但是需要花费更多的时间和精力。</p><h2 id="_1-1-编程风格" tabindex="-1"><a class="header-anchor" href="#_1-1-编程风格"><span>1.1 编程风格</span></a></h2><ol><li><code>React</code> 语法少、难度大；<code>Vue</code> 语法多，难度小</li></ol><p>例如指令：</p><p><strong>Vue</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;input v-model=&quot;username&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li v-for=&quot;(item,index) in list&quot; :key=&quot;index&quot;&gt;{{ item }}&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;input value={username} onChange={e =&gt; setUsername(e.target.value)}/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>{ list.map((item,index) =&gt; &lt;li key={index}&gt;{item}&lt;/li&gt;) }</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Vue</code> 给我们提供了很多的指令功能，而这些功能在 <code>React</code> 中基本都需要我们使用原生 <code>js</code> 来实现。</p><p>所以会有很多人说: &quot;使用 Vue 实际上你就是在操作 Vue，使用 React 实际上你是在操作 js&quot;。</p><ol start="2"><li>React 魔改少，手动实现；Vue 魔改多，自动完成。</li></ol><p>例如事件：</p><p><strong>Vue</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click=&quot;handleClick(&#39;hello&#39;)&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleClick = (msg) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;msg&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button onClick=&quot;handleClick(&#39;hello&#39;)&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleClick = (msg) =&gt; {</span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>        console.log(msg)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像在点击事件中传参数这种功能：</p><ol><li>我们知道 <code>dom</code> 的点击事件是需要我们传递一个函数过去的，就像在 <code>React</code> 中例子一样，你的 <code>handleClick</code> 肯定需要返回一个函数（或者在 <code>jsx</code> 中写箭头函数调用 <code>handleClick</code>）。</li><li>而在 <code>Vue</code> 中可以在 <code>@click</code> 中直接调用 <code>handleClick</code> 函数，而这个函数又没有返回一个新的函数，按道理这样调用 <code>handleClick</code> 是会返回 <code>undefined</code> 的，但是由于 <code>Vue</code> 底层做了魔改优化，使得我们不再需要在返回一个函数。</li></ol><p>上面两个例子中，我们说不上哪种好哪种不好，只能说你更喜欢哪一种。<code>React</code> 中的实现更符合 <code>js</code> 的逻辑但却稍显麻烦，<code>Vue</code> 中的实现简单但却没有遵循原生 <code>js</code> 的特点。</p><p>编程风格上的总结：就像我们前面讲的，<code>Vue</code> 写起来更像是写 <code>Vue</code> 代码，<code>React</code> 写起来更像是写 <code>JavaScript</code> 代码。</p><h2 id="_1-2-视图风格" tabindex="-1"><a class="header-anchor" href="#_1-2-视图风格"><span>1.2 视图风格</span></a></h2><ol><li><code>Vue</code> 采用 <code>&lt;template&gt;</code> 字符串模板。更贴近 <code>HTML</code>，学习成本低，但有时候不灵活。</li><li><code>React</code> 采用 <code>JSX</code> 语法，更类似于 <code>js</code> ，限制比较多，（像一些关键字 <code>class</code>、<code>for</code>，单标签要闭合、属性要驼峰、组件名要大写等等这些都要注意），但是可以跟模板语法很好的进行结合</li></ol><p>比如下面是一个通过 <code>level</code> 的值来渲染不同的标签在 <code>Vue</code> 和 <code>React</code> 中的不同实现</p><p><strong>Vue</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;h1 v-if=&quot;level === 1&quot;&gt;标题1&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;h2 v-if=&quot;level === 2&quot;&gt;标题2&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let App = () =&gt; {</span></span>
<span class="line"><span>    const level = 1</span></span>
<span class="line"><span>    const Tag = &#39;h&#39; + level</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            { &lt;Tag&gt;标题{level}&lt;/Tag&gt;}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以想象，如果当我们的条件判断很多时，使用 <code>JSX</code> 的方式会比使用模版字符串要灵活的多。</p><p><strong>注意</strong>: <code>Vue</code> 一开始并不直接支持 <code>JSX</code> ，在 <code>Vue 2.1.0</code> 版本中，<code>Vue</code> 引入了 <code>render</code> 函数来代替模板，这使得使用 <code>JSX</code> 作为组件渲染函数成为可能。在<code>Vue 2.1.0</code>版本后的 <code>create-vue</code> 和 <code>Vue CLI</code> 都有预置的 <code>JSX</code> 语法支持。所以说在 <code>Vue</code> 中如果你想写 <code>JSX</code> 这个它也是支持的，但是在 <code>React</code> 是没办法用字符串模板的方式写。</p><h2 id="_2-1-组件风格" tabindex="-1"><a class="header-anchor" href="#_2-1-组件风格"><span>2.1 组件风格</span></a></h2><ol><li><code>Vue2</code> 中采用 <strong>选项式 API</strong>，但是由于它<strong>不够灵活</strong>，而且 <code>this</code> 指向不够简单，<code>Vue3</code> 中给我们提供了 <strong>组合式 API</strong> 的写法，<strong>组合式 API</strong> 更偏向函数式编程的方式，它的复用能力和组合的能力更强，而且没有 <code>this</code> 指向问题，也是 <code>Vue</code> 比较推荐的写法。</li><li><code>React</code> 在 <code>16.8</code> 版本之前都是采用<strong>类组件</strong>的方式开发，<strong>类组件</strong>也会有 <code>this</code> 指向以及写起来很<strong>繁琐难度大</strong>的问题，在 <code>16.8</code> 之后 <code>React</code> 提供了<strong>函数组件</strong>的写法，其<strong>实函数组件</strong>和 <code>Vue</code> 的 <strong>组合式 API</strong> 是很像的，它的组合和复用的能力更强，而且也没有 <code>this</code> 指向问题，比类组件写起来简单很多，也是 <code>React</code> 比较推荐的写法</li></ol><p><strong>Vue 组件示意图：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;my-component&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- HTML模板 --&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // JavaScript代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.my-component {</span></span>
<span class="line"><span>  /* CSS样式 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React 组件示意图：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>import &#39;./MyComponent.css&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function MyComponent() {</span></span>
<span class="line"><span>  // JavaScript代码</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div class&gt;</span></span>
<span class="line"><span>      {/* HTML模板 */}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default MyComponent;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：这两种框架它们的最终趋势都是函数式编程，不管是 <code>Vue</code> 还是 <code>React</code> 都是推荐我们引入大量内置的函数或者是 use 函数来进行组合并且完成我们的开发需求。而简化使用面向对象或者是配置的写法，能简化我们使用 <code>this</code> 的场景从而提升代码的灵活度和简易度。</p><h2 id="_2-2-路由风格" tabindex="-1"><a class="header-anchor" href="#_2-2-路由风格"><span>2.2 路由风格</span></a></h2><p><code>Vue</code> 采用 <code>Vue-Router</code>；React 采用 <code>React-Router</code></p><p>相比而言 <code>vue</code> 语法更加简练（useRouter useRoute），而 <code>react</code> 的 use 函数太多，不够统一化（useLocation、useParams、useSearchParams、useNavigate......）</p><p>而像下面这些常规的功能它们都是大差不差的：</p><ol><li>路由表的配置</li><li>嵌套路由</li><li>动态路由</li><li>编程式路由</li><li>守卫路由</li></ol><p><strong>Vue-Router 示例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- index.html --&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.js</span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import { createRouter, createWebHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>import Home from &#39;./components/Home.vue&#39;</span></span>
<span class="line"><span>import About from &#39;./components/About.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHistory(),</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    { path: &#39;/&#39;, component: Home },</span></span>
<span class="line"><span>    { path: &#39;/about&#39;, component: About }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp({</span></span>
<span class="line"><span>  // 空的 \`setup\` 函数</span></span>
<span class="line"><span>  setup() {}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(router)</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- Home.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Home Page&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;goToAbout&quot;&gt;Go to About Page&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { useRouter } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = useRouter()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const goToAbout = () =&gt; {</span></span>
<span class="line"><span>  router.push(&#39;/about&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- About.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;About Page&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Param: {{ $route.params.id }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;router-link to=&quot;/&quot;&gt;Go to Home Page&lt;/router-link&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { useRoute } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const route = useRoute()</span></span>
<span class="line"><span>const id = route.params.id</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React-Router 示例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import Home from &#39;./components/Home&#39;</span></span>
<span class="line"><span>import About from &#39;./components/About&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const App = () =&gt; {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Router&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;&lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;hr/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;Switch&gt;</span></span>
<span class="line"><span>          &lt;Route exact path=&quot;/&quot;&gt;</span></span>
<span class="line"><span>            &lt;Home /&gt;</span></span>
<span class="line"><span>          &lt;/Route&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/about&quot;&gt;</span></span>
<span class="line"><span>            &lt;About /&gt;</span></span>
<span class="line"><span>          &lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;/Switch&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/Router&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Home = () =&gt; {</span></span>
<span class="line"><span>  const history = useHistory()</span></span>
<span class="line"><span>  const handleClick = () =&gt; {</span></span>
<span class="line"><span>    history.push(&#39;/about&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Home Page&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;button onClick={handleClick}&gt;Go to About Page&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const About = () =&gt; {</span></span>
<span class="line"><span>  const { id } = useParams()</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;About Page&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;p&gt;Param: {id}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;Link to=&quot;/&quot;&gt;Go to Home Page&lt;/Link&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-状态管理风格" tabindex="-1"><a class="header-anchor" href="#_2-3-状态管理风格"><span>2.3 状态管理风格</span></a></h2><p><code>Vue</code> 采用 <code>Vuex/Pinia</code> ；<code>React</code> 采用 <code>Redux/Mobx</code></p><p>区别：</p><ol><li><p>语法和 <code>API</code> 的不同：<code>Vuex</code> 和 <code>Pinia</code> 是专门为 <code>Vue.js</code> 设计的状态管理库，因此它们的语法和 API 都非常类似。而 <code>Redux</code> 和 <code>Mobx</code> 可以在任何 <code>JavaScript</code> 应用程序中使用，因此<strong>它们的语法和 API 与特定的框架无关</strong>。</p></li><li><p>数据流的不同：在 <code>Redux</code> 中，数据是通过单向数据流进行管理的，即 <code>action -&gt; reducer -&gt; store -&gt; view</code>。而在 <code>Vuex</code> 和 <code>Pinia</code> 中，数据是通过 <code>Vuex store</code> 或 <code>Pinia store</code> 直接管理的，不需要 <code>reducer</code>。而在 <code>Mobx</code> 中，数据则是通过响应式数据实现的。</p></li><li><p>异步处理的不同：在 <code>Redux</code> 中，异步处理通常需要使用中间件来处理异步操作。而在 <code>Vuex</code> 和 <code>Pinia</code> 中，异步操作可以通过 <code>actions</code> 处理。而在 <code>Mobx</code> 中，则可以使用 <code>async/await</code> 或 <code>reaction</code> 函数来处理异步操作。</p></li><li><p>开销和复杂性的不同：<code>Redux</code> 和 <code>Mobx</code> 都需要在应用程序中进行额外的设置和配置，并且在处理大量数据时可能会导致性能问题。而 <code>Vuex</code> 和 <code>Pinia</code> 的设置和配置相对简单，并且在大多数情况下可以处理大量数据。</p></li></ol><p>总的来说，<code>Vuex</code> 和 <code>Pinia</code> 适用于 <code>Vue.js</code> 应用程序，<strong>提供了一种简单和直接的状态管理方式</strong>，而 <code>Redux</code> 和 <code>Mobx</code> 则可以在多种应用程序中使用，<strong>提供了更灵活的状态管理方案</strong>。</p><p><strong>Pinia 示例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// store.js</span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCounterStore = defineStore({</span></span>
<span class="line"><span>  id: &#39;counter&#39;,</span></span>
<span class="line"><span>  state: () =&gt; ({</span></span>
<span class="line"><span>    count: 0,</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count++</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Count: {{ count }}&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;incrementCount&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span>import { useCounterStore } from &#39;./store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const counterStore = useCounterStore()</span></span>
<span class="line"><span>const count = counterStore.count</span></span>
<span class="line"><span>const incrementCount = () =&gt; {</span></span>
<span class="line"><span>  counterStore.increment()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 在根组件中注入 store --&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>const pinia = createPinia()</span></span>
<span class="line"><span>app.use(pinia)</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Redux Toolkit 示例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// store.js</span></span>
<span class="line"><span>import { configureStore, createSlice } from &#39;@reduxjs/toolkit&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const counterSlice = createSlice({</span></span>
<span class="line"><span>  name: &#39;counter&#39;,</span></span>
<span class="line"><span>  initialState: {</span></span>
<span class="line"><span>    count: 0</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  reducers: {</span></span>
<span class="line"><span>    increment(state) {</span></span>
<span class="line"><span>      state.count++</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const store = configureStore({</span></span>
<span class="line"><span>  reducer: {</span></span>
<span class="line"><span>    counter: counterSlice.reducer</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const { increment } = counterSlice.actions;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// App.js</span></span>
<span class="line"><span>import { useSelector, useDispatch } from &#39;react-redux&#39;</span></span>
<span class="line"><span>import { increment } from &#39;./store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  const count = useSelector(state =&gt; state.counter.count)</span></span>
<span class="line"><span>  const dispatch = useDispatch()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const incrementCount = () =&gt; {</span></span>
<span class="line"><span>    dispatch(increment())</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Count: {count}&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;button onClick={incrementCount}&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在根组件中注入 store</span></span>
<span class="line"><span>import { Provider } from &#39;react-redux&#39;</span></span>
<span class="line"><span>import { store } from &#39;./store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.render(</span></span>
<span class="line"><span>  &lt;Provider store={store}&gt;</span></span>
<span class="line"><span>    &lt;App /&gt;</span></span>
<span class="line"><span>  &lt;/Provider&gt;,</span></span>
<span class="line"><span>  document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-模板对比" tabindex="-1"><a class="header-anchor" href="#_3-1-模板对比"><span>3.1 模板对比</span></a></h2><p><code>Vue</code> 的视图变化主要通过：指令 + 模板的方式</p><p><code>React</code> 的视图变化主要通过：原生 JS + 模板的方式</p><p><code>React</code> 的模板比较强大，因为可以编写 <code>JSX</code> 结构，所以可以做出更加灵活的结构处理。</p><h2 id="_3-2-样式对比" tabindex="-1"><a class="header-anchor" href="#_3-2-样式对比"><span>3.2 样式对比</span></a></h2><p><code>Vue</code> 的 <code>class</code> 和 <code>style</code> 都有三种写法：字符串、数组、对象</p><p><code>React</code> 的 <code>style</code> 只能写对象，<code>class</code> 只能字符串，可借助 <code>classnames</code> 这个库</p><p>两个框架基本上都可以满足常见的样式需求。</p><h2 id="_3-3-事件对比" tabindex="-1"><a class="header-anchor" href="#_3-3-事件对比"><span>3.3 事件对比</span></a></h2><p><code>Vue</code> 事件功能丰富</p><p><code>React</code> 事件传参需要高阶处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- Vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li v-for=&quot;item,index in list&quot; @click=&quot;handleClick(index)&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>	handleClick(index){</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- React --&gt;</span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>    list.map((v, i)=&gt; &lt;li onClick={handleClick(i)}&gt;&lt;/li&gt;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>const handleClick = (index) =&gt; {</span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>        console.log(index)</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-表单对比" tabindex="-1"><a class="header-anchor" href="#_3-4-表单对比"><span>3.4 表单对比</span></a></h2><p><code>Vue</code> 表单双向绑定 <code>v-model</code></p><p><code>React</code> 表单受控与非受控</p><p>针对表单操作这一块来说，<code>Vue</code> 的表单指令 <code>v-model</code> 还是非常灵活的，总体对比要比 <code>React</code> 使用方便且灵活。</p><h2 id="_3-5-组件通信对比" tabindex="-1"><a class="header-anchor" href="#_3-5-组件通信对比"><span>3.5 组件通信对比</span></a></h2><p><code>Vue</code> 父子组件通过 <code>props</code>属性通信，子父组件通过 <code>emits</code> 方法通信</p><p><code>React</code> 父子组件也是通过 <code>props</code>属性通信，而子父组件则是通过回调函数通信的</p><p><code>emits</code> 自定义事件和回调函数，实际上是一样的思想。</p><p>跨组件的通信方案也很类似，都是一种依赖注入的方式来实现的。</p><h2 id="_3-6-逻辑复用" tabindex="-1"><a class="header-anchor" href="#_3-6-逻辑复用"><span>3.6 逻辑复用</span></a></h2><p><code>Vue</code> 选项式采用：<code>mixins混入</code>；组合式采用：<code>use函数</code></p><p><code>React</code> 类组件采用：<code>Render Props</code>、<code>HOC</code>；函数组件：<code>use函数</code></p><p>可以发现组合式 API 和函数组件都是采用 use 函数，所以基本复用是差不多的思想，这也是两个框架推荐的用法。</p><h2 id="_3-7-内容分发" tabindex="-1"><a class="header-anchor" href="#_3-7-内容分发"><span>3.7 内容分发</span></a></h2><p><code>Vue</code> 通过插槽，进行接收</p><p><code>React</code> 通过 <code>props.children</code>，进行接收</p><h2 id="_3-8-dom-操作" tabindex="-1"><a class="header-anchor" href="#_3-8-dom-操作"><span>3.8 DOM 操作</span></a></h2><p><code>Vue</code> 通过 <code>ref</code> 属性</p><p><code>React</code> 也通过 <code>ref</code> 属性处理</p><p>思路都是差不多的，就是给元素添加 <code>ref</code> 属性，在跟对象或字符串绑定在一起，这样就可以直接获取到 <code>DOM</code> 元素。</p><h2 id="_4-1-响应式数据对比" tabindex="-1"><a class="header-anchor" href="#_4-1-响应式数据对比"><span>4.1 响应式数据对比</span></a></h2><p>Vue 采用响应式数据，底层通过 new Proxy() 进行监控，灵活性更高</p><p>React 采用 state 状态，通过 setState() 方法进行内部 re-render，可控性更强</p><h2 id="_4-2-生命周期对比" tabindex="-1"><a class="header-anchor" href="#_4-2-生命周期对比"><span>4.2 生命周期对比</span></a></h2><p>Vue 生命周期钩子 (常见)</p><ol><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>beforeUnmount</li><li>unmounted</li></ol><p>React 生命周期钩子 (常见)</p><ol><li>constructor</li><li>componentDidMount</li><li>componentDidUpdate</li><li>componentWillUnmount</li><li>render 整体对比来看，<code>Vue</code> 的生命周期会更丰富一些，<code>React</code> 生命周期会更简约一些。</li></ol><h2 id="_4-3-副作用处理对比" tabindex="-1"><a class="header-anchor" href="#_4-3-副作用处理对比"><span>4.3 副作用处理对比</span></a></h2><p>vue 使用，watchEffect()</p><p>react 使用，useEffect()</p><p>都是处理副作用的方法，用法上还是有很大区别的。</p><p>watchEffect 会自动根据所依赖的值进行重渲染，而 useEffect 要明确指定对应的值才能进行重渲染，React 团队已经给出在未来的版本中可能会改成根据所依赖的值自动进行重渲染的操作，但暂时还不行。</p><p>watchEffect 在更新前和卸载前触发的方式是通过回调函数的参数被调用来实现的，而 useEffect 是通过 return 的返回值来指定的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// Vue</span></span>
<span class="line"><span>watchEffect((cb)=&gt;{</span></span>
<span class="line"><span>	cb(()=&gt;{</span></span>
<span class="line"><span>       //更新前的触发</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// React</span></span>
<span class="line"><span>useEffect(()=&gt;{</span></span>
<span class="line"><span>   return ()=&gt;{</span></span>
<span class="line"><span>      //更新前的触发</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,132),p=[l];function c(t,d){return a(),n("div",null,p)}const u=s(i,[["render",c],["__file","react和vue的相同点和不同点.html.vue"]]),v=JSON.parse('{"path":"/study/4.React/react%E5%92%8Cvue%E7%9A%84%E7%9B%B8%E5%90%8C%E7%82%B9%E5%92%8C%E4%B8%8D%E5%90%8C%E7%82%B9.html","title":"react和vue的相同点和不同点","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-10-01T00:00:00.000Z","category":["React","Vue"],"tag":["React","Vue","Vue和React"],"description":"react和vue的相同点和不同点 前言 Vue 3 和 React 是市面上目前非常受欢迎的两个前端框架。它们都采用了组件化的开发模式，使得开发者可以将复杂的应用拆分为多个小组件进行开发，从而提高了代码的可维护性和重用性。然而，虽然 Vue 3 和 React 都拥有各自的优点，但它们也存在着一些不同之处，本文将通过比较两者的相同点和不同点来帮助读者...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/4.React/react%E5%92%8Cvue%E7%9A%84%E7%9B%B8%E5%90%8C%E7%82%B9%E5%92%8C%E4%B8%8D%E5%90%8C%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"react和vue的相同点和不同点"}],["meta",{"property":"og:description","content":"react和vue的相同点和不同点 前言 Vue 3 和 React 是市面上目前非常受欢迎的两个前端框架。它们都采用了组件化的开发模式，使得开发者可以将复杂的应用拆分为多个小组件进行开发，从而提高了代码的可维护性和重用性。然而，虽然 Vue 3 和 React 都拥有各自的优点，但它们也存在着一些不同之处，本文将通过比较两者的相同点和不同点来帮助读者..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-12T11:18:34.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Vue和React"}],["meta",{"property":"article:published_time","content":"2024-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-12T11:18:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"react和vue的相同点和不同点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-12T11:18:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"相同点","slug":"相同点","link":"#相同点","children":[]},{"level":2,"title":"不同点","slug":"不同点","link":"#不同点","children":[]},{"level":2,"title":"1.1 编程风格","slug":"_1-1-编程风格","link":"#_1-1-编程风格","children":[]},{"level":2,"title":"1.2 视图风格","slug":"_1-2-视图风格","link":"#_1-2-视图风格","children":[]},{"level":2,"title":"2.1 组件风格","slug":"_2-1-组件风格","link":"#_2-1-组件风格","children":[]},{"level":2,"title":"2.2 路由风格","slug":"_2-2-路由风格","link":"#_2-2-路由风格","children":[]},{"level":2,"title":"2.3 状态管理风格","slug":"_2-3-状态管理风格","link":"#_2-3-状态管理风格","children":[]},{"level":2,"title":"3.1 模板对比","slug":"_3-1-模板对比","link":"#_3-1-模板对比","children":[]},{"level":2,"title":"3.2 样式对比","slug":"_3-2-样式对比","link":"#_3-2-样式对比","children":[]},{"level":2,"title":"3.3 事件对比","slug":"_3-3-事件对比","link":"#_3-3-事件对比","children":[]},{"level":2,"title":"3.4 表单对比","slug":"_3-4-表单对比","link":"#_3-4-表单对比","children":[]},{"level":2,"title":"3.5 组件通信对比","slug":"_3-5-组件通信对比","link":"#_3-5-组件通信对比","children":[]},{"level":2,"title":"3.6 逻辑复用","slug":"_3-6-逻辑复用","link":"#_3-6-逻辑复用","children":[]},{"level":2,"title":"3.7 内容分发","slug":"_3-7-内容分发","link":"#_3-7-内容分发","children":[]},{"level":2,"title":"3.8 DOM 操作","slug":"_3-8-dom-操作","link":"#_3-8-dom-操作","children":[]},{"level":2,"title":"4.1 响应式数据对比","slug":"_4-1-响应式数据对比","link":"#_4-1-响应式数据对比","children":[]},{"level":2,"title":"4.2 生命周期对比","slug":"_4-2-生命周期对比","link":"#_4-2-生命周期对比","children":[]},{"level":2,"title":"4.3 副作用处理对比","slug":"_4-3-副作用处理对比","link":"#_4-3-副作用处理对比","children":[]}],"git":{"createdTime":1731410314000,"updatedTime":1731410314000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":1}]},"readingTime":{"minutes":13.08,"words":3924},"filePathRelative":"study/4.React/react和vue的相同点和不同点.md","localizedDate":"2024年10月1日","excerpt":"\\n<h2>前言</h2>\\n<p>Vue 3 和 React 是市面上目前非常受欢迎的两个前端框架。它们都采用了组件化的开发模式，使得开发者可以将复杂的应用拆分为多个小组件进行开发，从而提高了代码的可维护性和重用性。然而，虽然 Vue 3 和 React 都拥有各自的优点，但它们也存在着一些不同之处，本文将通过比较两者的相同点和不同点来帮助读者更好地理解 Vue 3 和 React。</p>\\n<h2>相同点</h2>\\n<p><strong>1. 组件化开发</strong></p>\\n<p>Vue 3 和 React 都采用了组件化开发的方式，使得代码具有更好的可维护性和重用性。在 Vue 3 中，组件可以被定义为一个对象，并且包含一个 template、script 和 style 标签。在 React 中，组件可以被定义为一个类或者函数，并且采用 JSX 语法来描述组件的结构和行为。</p>","autoDesc":true}');export{u as comp,v as data};
