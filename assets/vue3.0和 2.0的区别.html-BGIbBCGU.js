import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-hlFOVmMU.js";const i={},l=e(`<h1 id="vue2-和-vue3区别" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3区别"><span>vue2 和 vue3区别</span></a></h1><h3 id="生命周期的变化" tabindex="-1"><a class="header-anchor" href="#生命周期的变化"><span>生命周期的变化</span></a></h3><p>整体来看，变化不大，只是名字大部分需要 + <code>on</code>，功能上类似。使用上 Vue3 组合式 API 需要先引入；Vue2 选项 API 则可直接调用，如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// vue3</span></span>
<span class="line"><span>&lt;script setup&gt;     </span></span>
<span class="line"><span>import { onMounted } from  vue </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 可将不同的逻辑拆开成多个onMounted，依然按顺序执行，不被覆盖</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// vue2</span></span>
<span class="line"><span>&lt;script&gt;     </span></span>
<span class="line"><span>   export default {         </span></span>
<span class="line"><span>      mounted() {             </span></span>
<span class="line"><span>        ...         </span></span>
<span class="line"><span>      },           </span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>&lt;/script&gt; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用生命周期表格如下所示。</p><table><thead><tr><th>Vue2.x</th><th>Vue3</th></tr></thead><tbody><tr><td>beforeCreate</td><td>Not needed*</td></tr><tr><td>created</td><td>Not needed*</td></tr><tr><td>beforeMount</td><td>onBeforeMount</td></tr><tr><td>mounted</td><td>onMounted</td></tr><tr><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td>updated</td><td>onUpdated</td></tr><tr><td>beforeDestroy</td><td>onBeforeUnmount</td></tr><tr><td>destroyed</td><td>onUnmounted</td></tr></tbody></table><p><strong>Tips：</strong> <code>setup</code>是围绕<code>beforeCreate</code>和<code>created</code>生命周期钩子运行的，所以不需要显式地去定义。</p><h3 id="多根节点" tabindex="-1"><a class="header-anchor" href="#多根节点"><span>多根节点</span></a></h3><p>Vue3 支持了多根节点组件，也就是<code>fragment</code>。</p><p>Vue2 中，编写页面的时候，我们需要去将组件包裹在<code>&lt;div&gt;</code>中，否则报错警告。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span>    &lt;main&gt;...&lt;/main&gt;</span></span>
<span class="line"><span>    &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3，我们可以组件包含多个根节点，可以少写一层，niceeee ！</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main&gt;...&lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件"><span>异步组件</span></a></h3><p>Vue3 提供 <code>Suspense</code>组件，允许程序在等待异步组件时渲染兜底的内容，如 loading ，使用户体验更平滑。使用它，需在模板中声明，并包括两个命名插槽：<code>default</code>和<code>fallback</code>。<code>Suspense</code>确保加载完异步内容时显示默认插槽，并将<code>fallback</code>插槽用作加载状态。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;tempalte&gt;</span></span>
<span class="line"><span>   &lt;suspense&gt;</span></span>
<span class="line"><span>     &lt;template #default&gt;</span></span>
<span class="line"><span>       &lt;todo-list /&gt;</span></span>
<span class="line"><span>     &lt;/template&gt;</span></span>
<span class="line"><span>     &lt;template #fallback&gt;</span></span>
<span class="line"><span>       &lt;div&gt;</span></span>
<span class="line"><span>         Loading...</span></span>
<span class="line"><span>       &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;/suspense&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实的项目中踩过坑，若想在 setup 中调用异步请求，需在 setup 前加<code>async</code>关键字。这时，会受到警告<code>async setup() is used without a suspense boundary</code>。</p><p>解决方案：在父页面调用当前组件外包裹一层<code>Suspense</code>组件。</p><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport"><span>Teleport</span></a></h3><p>Vue3 提供<code>Teleport</code>组件可将部分 DOM 移动到 Vue app 之外的位置。比如项目中常见的<code>Dialog</code>组件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click=dialogVisible = true&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>&lt;teleport to=body&gt;</span></span>
<span class="line"><span>   &lt;div class=dialog v-if=dialogVisible&gt;</span></span>
<span class="line"><span>   &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/teleport&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api"><span>组合式 API</span></a></h3><p>Vue2 是 <code>选项式API（Option API）</code>，一个逻辑会散乱在文件不同位置（data、props、computed、watch、生命周期函数等），导致代码的可读性变差，需要上下来回跳转文件位置。Vue3 <code>组合式API（Composition API）</code>则很好地解决了这个问题，可将同一逻辑的内容写到一起。</p><p>除了增强了代码的可读性、内聚性，组合式 API 还提供了较为完美的逻辑复用性方案，举个🌰，如下所示公用鼠标坐标案例。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.vue</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;span&gt;mouse position {{x}} {{y}}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from  vue </span></span>
<span class="line"><span>import useMousePosition from  ./useMousePosition </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>const {x, y} = useMousePosition()</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// useMousePosition.js</span></span>
<span class="line"><span>import { ref, onMounted, onUnmounted } from  vue </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>function useMousePosition() {</span></span>
<span class="line"><span>  let x = ref(0)</span></span>
<span class="line"><span>  let y = ref(0)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  function update(e) {</span></span>
<span class="line"><span>    x.value = e.pageX</span></span>
<span class="line"><span>    y.value = e.pageY</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  onMounted(() =&gt; {</span></span>
<span class="line"><span>    window.addEventListener( mousemove , update)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    window.removeEventListener( mousemove , update)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    x,</span></span>
<span class="line"><span>    y</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决了 Vue2 <code>Mixin</code>的存在的命名冲突隐患，依赖关系不明确，不同组件间配置化使用不够灵活。</p><h3 id="响应式原理" tabindex="-1"><a class="header-anchor" href="#响应式原理"><span><a href="https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">响应式</a>原理</span></a></h3><p>Vue2 响应式原理基础是<code>Object.defineProperty</code>；Vue3 响应式原理基础是<code>Proxy</code>。</p><p>Object.defineProperty</p><p>基本用法：直接在一个对象上定义新的属性或修改现有的属性，并返回对象。<br><strong>Tips：</strong> <code>writable</code> 和 <code>value</code> 与 <code>getter</code> 和 <code>setter</code> 不共存。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let obj = {}</span></span>
<span class="line"><span>let name =  瑾行 </span></span>
<span class="line"><span>Object.defineProperty(obj,  name , {</span></span>
<span class="line"><span>  enumerable: true, // 可枚举（是否可通过for...in 或 Object.keys()进行访问）</span></span>
<span class="line"><span>  configurable: true, // 可配置（是否可使用delete删除，是否可再次设置属性）</span></span>
<span class="line"><span>  // value:   , // 任意类型的值，默认undefined</span></span>
<span class="line"><span>  // writable: true, // 可重写</span></span>
<span class="line"><span>  get: function() {</span></span>
<span class="line"><span>    return name</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set: function(value) {</span></span>
<span class="line"><span>    name = value</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搬运 Vue2 核心源码，略删减。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function defineReactive(obj, key, val) {</span></span>
<span class="line"><span>  // 一 key 一个 dep</span></span>
<span class="line"><span>  const dep = new Dep()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 获取 key 的属性描述符，发现它是不可配置对象的话直接 return</span></span>
<span class="line"><span>  const property = Object.getOwnPropertyDescriptor(obj, key)</span></span>
<span class="line"><span>  if (property &amp;&amp; property.configurable === false) { return }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 获取 getter 和 setter，并获取 val 值</span></span>
<span class="line"><span>  const getter = property &amp;&amp; property.get</span></span>
<span class="line"><span>  const setter = property &amp;&amp; property.set</span></span>
<span class="line"><span>  if((!getter || setter) &amp;&amp; arguments.length === 2) { val = obj[key] }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 递归处理，保证对象中所有 key 被观察</span></span>
<span class="line"><span>  let childOb = observe(val)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  Object.defineProperty(obj, key, {</span></span>
<span class="line"><span>    enumerable: true,</span></span>
<span class="line"><span>    configurable: true,</span></span>
<span class="line"><span>    // get 劫持 obj[key] 的 进行依赖收集</span></span>
<span class="line"><span>    get: function reactiveGetter() {</span></span>
<span class="line"><span>      const value = getter ? getter.call(obj) : val</span></span>
<span class="line"><span>      if(Dep.target) {</span></span>
<span class="line"><span>        // 依赖收集</span></span>
<span class="line"><span>        dep.depend()</span></span>
<span class="line"><span>        if(childOb) {</span></span>
<span class="line"><span>          // 针对嵌套对象，依赖收集</span></span>
<span class="line"><span>          childOb.dep.depend()</span></span>
<span class="line"><span>          // 触发数组响应式</span></span>
<span class="line"><span>          if(Array.isArray(value)) {</span></span>
<span class="line"><span>            dependArray(value)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return value</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // set 派发更新 obj[key]</span></span>
<span class="line"><span>  set: function reactiveSetter(newVal) {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    if(setter) {</span></span>
<span class="line"><span>      setter.call(obj, newVal)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      val = newVal</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 新值设置响应式</span></span>
<span class="line"><span>    childOb = observe(val)</span></span>
<span class="line"><span>    // 依赖通知更新</span></span>
<span class="line"><span>    dep.notify()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那 Vue3 为何会抛弃它呢？那肯定是有一些缺陷的。</p><p>主要原因：无法监听对象或数组新增、删除的元素。<br> Vue2 方案：针对常用数组原型方法<code>push</code>、<code>pop</code>、<code>shift</code>、<code>unshift</code>、<code>splice</code>、<code>sort</code>、<code>reverse</code>进行了 hack 处理；提供<code>Vue.set</code>监听对象 / 数组新增属性。对象的新增 / 删除响应，还可以<code>new</code>个新对象，新增则合并新属性和旧对象；删除则将删除属性后的对象深拷贝给新对象。</p><p><strong>Tips：</strong> <code>Object.defineOProperty</code>是可以监听数组已有元素，但 Vue2 没有提供的原因是<code>性能</code>问题，具体可看见<strong>参考</strong>第二篇 ~。</p><p>Proxy</p><p><code>Proxy</code>是 ES6 新特性，通过第 2 个参数<code>handler</code>拦截目标对象的行为。相较于<code>Object.defineProperty</code>提供语言全范围的响应能力，消除了局限性。但在兼容性上放弃了（IE11 以下）</p><p><strong>局限性</strong></p><ol><li><p>对象 / 数组的新增、删除。</p></li><li><p>监测. length 修改。</p></li><li><p>Map、Set、WeakMap、WeakSet 的支持。</p></li></ol><p>基本用法：创建对象的代理，从而实现基本操作的拦截和自定义操作。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const handler = {</span></span>
<span class="line"><span>  get: function(obj, prop) {</span></span>
<span class="line"><span>    return prop in obj ? obj[prop] : </span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set: function() {},</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搬运 Vue3 的源码 reactive.ts 文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function createReactiveObject(target, isReadOnly, baseHandlers, collectionHandlers, proxyMap) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  // collectionHandlers: 处理Map、Set、WeakMap、WeakSet</span></span>
<span class="line"><span>  // baseHandlers: 处理数组、对象</span></span>
<span class="line"><span>  const proxy = new Proxy(</span></span>
<span class="line"><span>    target,</span></span>
<span class="line"><span>    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  proxyMap.set(target, proxy)</span></span>
<span class="line"><span>  return proxy</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 baseHandlers.ts 为例，使用 Reflect.get 而不是<code>target[key]</code>的原因是 receiver 参数可以把 this 指向 getter 调用时，而非 Proxy 构造时的对象。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 依赖收集</span></span>
<span class="line"><span>function createGetter(isReadonly = false, shallow = false) {</span></span>
<span class="line"><span>  return function get(target: Target, key: string | symbol, receiver: object) {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    // 数组类型</span></span>
<span class="line"><span>    const targetIsArray = isArray(target)</span></span>
<span class="line"><span>    if (!isReadonly &amp;&amp; targetIsArray &amp;&amp; hasOwn(arrayInstrumentations, key)) {</span></span>
<span class="line"><span>      return Reflect.get(arrayInstrumentations, key, receiver)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 非数组类型</span></span>
<span class="line"><span>    const res = Reflect.get(target, key, receiver);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 对象递归调用</span></span>
<span class="line"><span>    if (isObject(res)) {</span></span>
<span class="line"><span>      return isReadonly ? readonly(res) : reactive(res)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    return res</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 派发更新</span></span>
<span class="line"><span>function createSetter() {</span></span>
<span class="line"><span>  return function set(target: Target, key: string | symbol, value: unknown, receiver: Object) {</span></span>
<span class="line"><span>    value = toRaw(value)</span></span>
<span class="line"><span>    oldValue = target[key]</span></span>
<span class="line"><span>    // 因 ref 数据在 set value 时就已 trigger 依赖了，所以直接赋值 return 即可</span></span>
<span class="line"><span>    if (!isArray(target) &amp;&amp; isRef(oldValue) &amp;&amp; !isRef(value)) {</span></span>
<span class="line"><span>      oldValue.value = value</span></span>
<span class="line"><span>      return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    // 对象是否有 key 有 key set，无 key add</span></span>
<span class="line"><span>    const hadKey = hasOwn(target, key)</span></span>
<span class="line"><span>    const result = Reflect.set(target, key, value, receiver)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (target === toRaw(receiver)) {</span></span>
<span class="line"><span>      if (!hadKey) {</span></span>
<span class="line"><span>        trigger(target, TriggerOpTypes.ADD, key, value)</span></span>
<span class="line"><span>      } else if (hasChanged(value, oldValue)) {</span></span>
<span class="line"><span>        trigger(target, TriggerOpTypes.SET, key, value, oldValue)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟-dom" tabindex="-1"><a class="header-anchor" href="#虚拟-dom"><span><a href="https://so.csdn.net/so/search?q=%E8%99%9A%E6%8B%9FDOM&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">虚拟 DOM</a></span></a></h3><p>Vue3 相比于 Vue2 虚拟 DOM 上增加<code>patchFlag</code>字段。我们借助<code>Vue3 Template Explorer</code>来看。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id=app&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;技术摸鱼&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;p&gt;今天天气真不错&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{name}}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染函数如下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>const _withScopeId = n =&gt; (_pushScopeId(scope-id),n=n(),_popScopeId(),n)</span></span>
<span class="line"><span>const _hoisted_1 = { id: app }</span></span>
<span class="line"><span>const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =&gt; /*#__PURE__*/_createElementVNode(h1, null, 技术摸鱼, -1 /* HOISTED */))</span></span>
<span class="line"><span>const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =&gt; /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>export function render(_ctx, _cache, $props, $setup, $data, $options) {</span></span>
<span class="line"><span>  return (_openBlock(), _createElementBlock(div, _hoisted_1, [</span></span>
<span class="line"><span>    _hoisted_2,</span></span>
<span class="line"><span>    _hoisted_3,</span></span>
<span class="line"><span>    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */)</span></span>
<span class="line"><span>  ]))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意第 3 个<code>_createElementVNode</code>的第 4 个参数即<code>patchFlag</code>字段类型，字段类型情况如下所示。1 代表节点为动态文本节点，那在 diff 过程中，只需比对文本对容，无需关注 class、style 等。除此之外，发现所有的静态节点，都保存为一个变量进行<code>静态提升</code>，可在重新渲染时直接引用，无需重新创建。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>export const enum PatchFlags { </span></span>
<span class="line"><span>  TEXT = 1, // 动态文本内容</span></span>
<span class="line"><span>  CLASS = 1 &lt;&lt; 1, // 动态类名</span></span>
<span class="line"><span>  STYLE = 1 &lt;&lt; 2, // 动态样式</span></span>
<span class="line"><span>  PROPS = 1 &lt;&lt; 3, // 动态属性，不包含类名和样式</span></span>
<span class="line"><span>  FULL_PROPS = 1 &lt;&lt; 4, // 具有动态 key 属性，当 key 改变，需要进行完整的 diff 比较</span></span>
<span class="line"><span>  HYDRATE_EVENTS = 1 &lt;&lt; 5, // 带有监听事件的节点</span></span>
<span class="line"><span>  STABLE_FRAGMENT = 1 &lt;&lt; 6, // 不会改变子节点顺序的 fragment</span></span>
<span class="line"><span>  KEYED_FRAGMENT = 1 &lt;&lt; 7, // 带有 key 属性的 fragment 或部分子节点</span></span>
<span class="line"><span>  UNKEYED_FRAGMENT = 1 &lt;&lt; 8,  // 子节点没有 key 的fragment</span></span>
<span class="line"><span>  NEED_PATCH = 1 &lt;&lt; 9, // 只会进行非 props 的比较</span></span>
<span class="line"><span>  DYNAMIC_SLOTS = 1 &lt;&lt; 10, // 动态的插槽</span></span>
<span class="line"><span>  HOISTED = -1,  // 静态节点，diff阶段忽略其子节点</span></span>
<span class="line"><span>  BAIL = -2 // 代表 diff 应该结束</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件缓存" tabindex="-1"><a class="header-anchor" href="#事件缓存"><span>事件缓存</span></a></h3><p>Vue3 的 <code>cacheHandler</code>可在第一次渲染后缓存我们的事件。相比于 Vue2 无需每次渲染都传递一个新函数。加一个<code>click</code>事件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id=app&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;技术摸鱼&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;p&gt;今天天气真不错&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{name}}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;span onCLick=() =&gt; {}&gt;&lt;span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染函数如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>const _withScopeId = n =&gt; (_pushScopeId(scope-id),n=n(),_popScopeId(),n)</span></span>
<span class="line"><span>const _hoisted_1 = { id: app }</span></span>
<span class="line"><span>const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =&gt; /*#__PURE__*/_createElementVNode(h1, null, 技术摸鱼, -1 /* HOISTED */))</span></span>
<span class="line"><span>const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =&gt; /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))</span></span>
<span class="line"><span>const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =&gt; /*#__PURE__*/_createElementVNode(span, { onCLick: () =&gt; {} }, [</span></span>
<span class="line"><span>  /*#__PURE__*/_createElementVNode(span)</span></span>
<span class="line"><span>], -1 /* HOISTED */))</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>export function render(_ctx, _cache, $props, $setup, $data, $options) {</span></span>
<span class="line"><span>  return (_openBlock(), _createElementBlock(div, _hoisted_1, [</span></span>
<span class="line"><span>    _hoisted_2,</span></span>
<span class="line"><span>    _hoisted_3,</span></span>
<span class="line"><span>    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */),</span></span>
<span class="line"><span>    _hoisted_4</span></span>
<span class="line"><span>  ]))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff-优化" tabindex="-1"><a class="header-anchor" href="#diff-优化"><span>Diff 优化</span></a></h3><p>搬运 Vue3 patchChildren 源码。结合上文与源码，patchFlag 帮助 diff 时区分静态节点，以及不同类型的动态节点。一定程度地减少节点本身及其属性的比对。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function patchChildren(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {</span></span>
<span class="line"><span>  // 获取新老孩子节点</span></span>
<span class="line"><span>  const c1 = n1 &amp;&amp; n1.children</span></span>
<span class="line"><span>  const c2 = n2.children</span></span>
<span class="line"><span>  const prevShapeFlag = n1 ? n1.shapeFlag : 0</span></span>
<span class="line"><span>  const { patchFlag, shapeFlag } = n2</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 处理 patchFlag 大于 0 </span></span>
<span class="line"><span>  if(patchFlag &gt; 0) {</span></span>
<span class="line"><span>    if(patchFlag &amp;&amp; PatchFlags.KEYED_FRAGMENT) {</span></span>
<span class="line"><span>      // 存在 key</span></span>
<span class="line"><span>      patchKeyedChildren()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    } els if(patchFlag &amp;&amp; PatchFlags.UNKEYED_FRAGMENT) {</span></span>
<span class="line"><span>      // 不存在 key</span></span>
<span class="line"><span>      patchUnkeyedChildren()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 匹配是文本节点（静态）：移除老节点，设置文本节点</span></span>
<span class="line"><span>  if(shapeFlag &amp;&amp; ShapeFlags.TEXT_CHILDREN) {</span></span>
<span class="line"><span>    if (prevShapeFlag &amp; ShapeFlags.ARRAY_CHILDREN) {</span></span>
<span class="line"><span>      unmountChildren(c1 as VNode[], parentComponent, parentSuspense)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (c2 !== c1) {</span></span>
<span class="line"><span>      hostSetElementText(container, c2 as string)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 匹配新老 Vnode 是数组，则全量比较；否则移除当前所有的节点</span></span>
<span class="line"><span>    if (prevShapeFlag &amp; ShapeFlags.ARRAY_CHILDREN) {</span></span>
<span class="line"><span>      if (shapeFlag &amp; ShapeFlags.ARRAY_CHILDREN) {</span></span>
<span class="line"><span>        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense,...)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        unmountChildren(c1 as VNode[], parentComponent, parentSuspense, true)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      if(prevShapeFlag &amp; ShapeFlags.TEXT_CHILDREN) {</span></span>
<span class="line"><span>        hostSetElementText(container, )</span></span>
<span class="line"><span>      } </span></span>
<span class="line"><span>      if (shapeFlag &amp; ShapeFlags.ARRAY_CHILDREN) {</span></span>
<span class="line"><span>        mountChildren(c2 as VNodeArrayChildren, container,anchor,parentComponent,...)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>patchUnkeyedChildren 源码如下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function patchUnkeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {</span></span>
<span class="line"><span>  c1 = c1 || EMPTY_ARR</span></span>
<span class="line"><span>  c2 = c2 || EMPTY_ARR</span></span>
<span class="line"><span>  const oldLength = c1.length</span></span>
<span class="line"><span>  const newLength = c2.length</span></span>
<span class="line"><span>  const commonLength = Math.min(oldLength, newLength)</span></span>
<span class="line"><span>  let i</span></span>
<span class="line"><span>  for(i = 0; i &lt; commonLength; i++) {</span></span>
<span class="line"><span>    // 如果新 Vnode 已经挂载，则直接 clone 一份，否则新建一个节点</span></span>
<span class="line"><span>    const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i] as Vnode)) : normalizeVnode(c2[i])</span></span>
<span class="line"><span>    patch()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if(oldLength &gt; newLength) {</span></span>
<span class="line"><span>    // 移除多余的节点</span></span>
<span class="line"><span>    unmountedChildren()</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 创建新的节点</span></span>
<span class="line"><span>    mountChildren()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>patchKeyedChildren 源码如下，有运用最长递增序列的算法思想。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {</span></span>
<span class="line"><span>  let i = 0;</span></span>
<span class="line"><span>  const e1 = c1.length - 1</span></span>
<span class="line"><span>  const e2 = c2.length - 1</span></span>
<span class="line"><span>  const l2 = c2.length</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 从头开始遍历，若新老节点是同一节点，执行 patch 更新差异；否则，跳出循环 </span></span>
<span class="line"><span>  while(i &lt;= e1 &amp;&amp; i &lt;= e2) {</span></span>
<span class="line"><span>    const n1 = c1[i]</span></span>
<span class="line"><span>    const n2 = c2[i]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if(isSameVnodeType) {</span></span>
<span class="line"><span>      patch(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    i++</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 从尾开始遍历，若新老节点是同一节点，执行 patch 更新差异；否则，跳出循环 </span></span>
<span class="line"><span>  while(i &lt;= e1 &amp;&amp; i &lt;= e2) {</span></span>
<span class="line"><span>    const n1 = c1[e1]</span></span>
<span class="line"><span>    const n2 = c2[e2]</span></span>
<span class="line"><span>    if(isSameVnodeType) {</span></span>
<span class="line"><span>      patch(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    e1--</span></span>
<span class="line"><span>    e2--</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 仅存在需要新增的节点</span></span>
<span class="line"><span>  if(i &gt; e1) {    </span></span>
<span class="line"><span>    if(i &lt;= e2) {</span></span>
<span class="line"><span>      const nextPos = e2 + 1</span></span>
<span class="line"><span>      const anchor = nextPos &lt; l2 ? c2[nextPos] : parentAnchor</span></span>
<span class="line"><span>      while(i &lt;= e2) {</span></span>
<span class="line"><span>        patch(null, c2[i], container, parentAnchor, parentComponent, parentSuspense, isSvg, optimized)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 仅存在需要删除的节点</span></span>
<span class="line"><span>  else if(i &gt; e2) {</span></span>
<span class="line"><span>    while(i &lt;= e1) {</span></span>
<span class="line"><span>      unmount(c1[i], parentComponent, parentSuspense, true)    </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 新旧节点均未遍历完</span></span>
<span class="line"><span>  // [i ... e1 + 1]: a b [c d e] f g</span></span>
<span class="line"><span>  // [i ... e2 + 1]: a b [e d c h] f g</span></span>
<span class="line"><span>  // i = 2, e1 = 4, e2 = 5</span></span>
<span class="line"><span>  else {</span></span>
<span class="line"><span>    const s1 = i</span></span>
<span class="line"><span>    const s2 = i</span></span>
<span class="line"><span>    // 缓存新 Vnode 剩余节点 上例即{e: 2, d: 3, c: 4, h: 5}</span></span>
<span class="line"><span>    const keyToNewIndexMap = new Map()</span></span>
<span class="line"><span>    for (i = s2; i &lt;= e2; i++) {</span></span>
<span class="line"><span>      const nextChild = (c2[i] = optimized</span></span>
<span class="line"><span>          ? cloneIfMounted(c2[i] as VNode)</span></span>
<span class="line"><span>          : normalizeVNode(c2[i]))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      if (nextChild.key != null) {</span></span>
<span class="line"><span>        if (__DEV__ &amp;&amp; keyToNewIndexMap.has(nextChild.key)) {</span></span>
<span class="line"><span>          warn(</span></span>
<span class="line"><span>            \`Duplicate keys found during update:\`,</span></span>
<span class="line"><span>             JSON.stringify(nextChild.key),</span></span>
<span class="line"><span>            \`Make sure keys are unique.\`</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        keyToNewIndexMap.set(nextChild.key, i)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  let j = 0</span></span>
<span class="line"><span>  // 记录即将 patch 的 新 Vnode 数量</span></span>
<span class="line"><span>  let patched = 0</span></span>
<span class="line"><span>  // 新 Vnode 剩余节点长度</span></span>
<span class="line"><span>  const toBePatched = e2 - s2 + 1</span></span>
<span class="line"><span>  // 是否移动标识</span></span>
<span class="line"><span>  let moved = false</span></span>
<span class="line"><span>  let maxNewindexSoFar = 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 初始化 新老节点的对应关系（用于后续最大递增序列算法）</span></span>
<span class="line"><span>  const newIndexToOldIndexMap = new Array(toBePatched)</span></span>
<span class="line"><span>  for (i = 0; i &lt; toBePatched; i++) newIndexToOldIndexMap[i] = 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 遍历老 Vnode 剩余节点</span></span>
<span class="line"><span>  for (i = s1; i &lt;= e1; i++) {</span></span>
<span class="line"><span>    const prevChild = c1[i]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 代表当前新 Vnode 都已patch，剩余旧 Vnode 移除即可</span></span>
<span class="line"><span>    if (patched &gt;= toBePatched) {</span></span>
<span class="line"><span>      unmount(prevChild, parentComponent, parentSuspense, true)</span></span>
<span class="line"><span>      continue</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    let newIndex</span></span>
<span class="line"><span>    // 旧 Vnode 存在 key，则从 keyToNewIndexMap 获取</span></span>
<span class="line"><span>    if (prevChild.key != null) {</span></span>
<span class="line"><span>      newIndex = keyToNewIndexMap.get(prevChild.key)</span></span>
<span class="line"><span>    // 旧 Vnode 不存在 key，则遍历新 Vnode 获取</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      for (j = s2; j &lt;= e2; j++) {</span></span>
<span class="line"><span>        if (newIndexToOldIndexMap[j - s2] === 0 &amp;&amp; isSameVNodeType(prevChild, c2[j] as VNode)){</span></span>
<span class="line"><span>           newIndex = j</span></span>
<span class="line"><span>           break</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }           </span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   // 删除、更新节点</span></span>
<span class="line"><span>   // 新 Vnode 没有 当前节点，移除</span></span>
<span class="line"><span>   if (newIndex === undefined) {</span></span>
<span class="line"><span>     unmount(prevChild, parentComponent, parentSuspense, true)</span></span>
<span class="line"><span>   } else {</span></span>
<span class="line"><span>     // 旧 Vnode 的下标位置 + 1，存储到对应 新 Vnode 的 Map 中</span></span>
<span class="line"><span>     // + 1 处理是为了防止数组首位下标是 0 的情况，因为这里的 0 代表需创建新节点</span></span>
<span class="line"><span>     newIndexToOldIndexMap[newIndex - s2] = i + 1</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     // 若不是连续递增，则代表需要移动</span></span>
<span class="line"><span>     if (newIndex &gt;= maxNewIndexSoFar) {</span></span>
<span class="line"><span>       maxNewIndexSoFar = newIndex</span></span>
<span class="line"><span>     } else {</span></span>
<span class="line"><span>       moved = true</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     patch(prevChild,c2[newIndex],...)</span></span>
<span class="line"><span>     patched++</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 遍历结束，newIndexToOldIndexMap = {0:5, 1:4, 2:3, 3:0}</span></span>
<span class="line"><span>  // 新建、移动节点</span></span>
<span class="line"><span>  const increasingNewIndexSequence = moved</span></span>
<span class="line"><span>  // 获取最长递增序列</span></span>
<span class="line"><span>  ? getSequence(newIndexToOldIndexMap)</span></span>
<span class="line"><span>  : EMPTY_ARR</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  j = increasingNewIndexSequence.length - 1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  for (i = toBePatched - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>    const nextIndex = s2 + i</span></span>
<span class="line"><span>    const nextChild = c2[nextIndex] as VNode</span></span>
<span class="line"><span>    const anchor = extIndex + 1 &lt; l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor</span></span>
<span class="line"><span>    // 0 新建 Vnode</span></span>
<span class="line"><span>    if (newIndexToOldIndexMap[i] === 0) {</span></span>
<span class="line"><span>      patch(null,nextChild,...)</span></span>
<span class="line"><span>    } else if (moved) {</span></span>
<span class="line"><span>      // 移动节点</span></span>
<span class="line"><span>      if (j &lt; 0 || i !== increasingNewIndexSequence[j]) {</span></span>
<span class="line"><span>        move(nextChild, container, anchor, MoveType.REORDER)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        j--</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包优化" tabindex="-1"><a class="header-anchor" href="#打包优化"><span>打包优化</span></a></h3><blockquote><p>tree-shaking：模块打包<code>webpack</code>、<code>rollup</code>等中的概念。移除 JavaScript 上下文中未引用的代码。主要依赖于<code>import</code>和<code>export</code>语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。</p></blockquote><p>以<code>nextTick</code>为例子，在 Vue2 中，全局 API 暴露在 Vue 实例上，即使未使用，也无法通过<code>tree-shaking</code>进行消除。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import Vue from  vue </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Vue.nextTick(() =&gt; {</span></span>
<span class="line"><span>  // 一些和DOM有关的东西</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3 中针对全局 和内部的 API 进行了重构，并考虑到<code>tree-shaking</code>的支持。因此，全局 API 现在只能作为 ES 模块构建的命名导出进行访问。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { nextTick } from  vue </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>nextTick(() =&gt; {</span></span>
<span class="line"><span>  // 一些和DOM有关的东西</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这一更改，只要模块绑定器支持<code>tree-shaking</code>，则 Vue 应用程序中未使用的 api 将从最终的捆绑包中消除，获得最佳文件大小。受此更改影响的全局 API 有如下。</p><ul><li><p>Vue.nextTick</p></li><li><p>Vue.observable （用 Vue.reactive 替换）</p></li><li><p>Vue.version</p></li><li><p>Vue.compile （仅全构建）</p></li><li><p>Vue.set （仅兼容构建）</p></li><li><p>Vue.delete （仅兼容构建）</p></li></ul><p>内部 API 也有诸如 transition、v-model 等标签或者指令被命名导出。只有在程序真正使用才会被捆绑打包。</p><p>根据 尤大 直播可以知道如今 Vue3 将所有运行功能打包也只有<code>22.5kb</code>，比 Vue2 轻量很多。</p><h3 id="自定义渲染-api" tabindex="-1"><a class="header-anchor" href="#自定义渲染-api"><span>自定义渲染 API</span></a></h3><p>Vue3 提供的<code>createApp</code>默认是将 template 映射成 html。但若想生成<code>canvas</code>时，就需要使用<code>custom renderer api</code>自定义 render 生成函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 自定义runtime-render函数</span></span>
<span class="line"><span>import { createApp } from  ./runtime-render </span></span>
<span class="line"><span>import App from  ./src/App </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>createApp(App).mount( #app )</span></span>
<span class="line"><span>复制代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript-支持" tabindex="-1"><a class="header-anchor" href="#typescript-支持"><span><a href="https://so.csdn.net/so/search?q=TypeScript&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">TypeScript</a> 支持</span></a></h3><p>Vue3 由 TS 重写，相对于 Vue2 有更好地<code>TypeScript</code>支持。</p><ul><li><p>Vue2 <code>Option API</code>中 option 是个简单对象，而 TS 是一种类型系统，面向对象的语法，不是特别匹配。</p></li><li><p>Vue2 需要<code>vue-class-component</code>强化 vue 原生组件，也需要<code>vue-property-decorator</code>增加更多结合 Vue 特性的装饰器，写法比较繁琐。</p></li></ul>`,82),p=[l];function d(c,t){return a(),s("div",null,p)}const u=n(i,[["render",d],["__file","vue3.0和 2.0的区别.html.vue"]]),o=JSON.parse('{"path":"/study/3.Vue/vue3.0%E5%92%8C%202.0%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"vue2 和 vue3区别","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-11T00:00:00.000Z","category":["Vue"],"tag":["vue","vue2","vue3"],"description":"vue2 和 vue3区别 生命周期的变化 整体来看，变化不大，只是名字大部分需要 + on，功能上类似。使用上 Vue3 组合式 API 需要先引入；Vue2 选项 API 则可直接调用，如下所示。 常用生命周期表格如下所示。 Tips： setup是围绕beforeCreate和created生命周期钩子运行的，所以不需要显式地去定义。 多根节点 ...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/3.Vue/vue3.0%E5%92%8C%202.0%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"vue2 和 vue3区别"}],["meta",{"property":"og:description","content":"vue2 和 vue3区别 生命周期的变化 整体来看，变化不大，只是名字大部分需要 + on，功能上类似。使用上 Vue3 组合式 API 需要先引入；Vue2 选项 API 则可直接调用，如下所示。 常用生命周期表格如下所示。 Tips： setup是围绕beforeCreate和created生命周期钩子运行的，所以不需要显式地去定义。 多根节点 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T02:23:55.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"vue2"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:published_time","content":"2022-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T02:23:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue2 和 vue3区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T02:23:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[{"level":3,"title":"生命周期的变化","slug":"生命周期的变化","link":"#生命周期的变化","children":[]},{"level":3,"title":"多根节点","slug":"多根节点","link":"#多根节点","children":[]},{"level":3,"title":"异步组件","slug":"异步组件","link":"#异步组件","children":[]},{"level":3,"title":"Teleport","slug":"teleport","link":"#teleport","children":[]},{"level":3,"title":"组合式 API","slug":"组合式-api","link":"#组合式-api","children":[]},{"level":3,"title":"响应式原理","slug":"响应式原理","link":"#响应式原理","children":[]},{"level":3,"title":"虚拟 DOM","slug":"虚拟-dom","link":"#虚拟-dom","children":[]},{"level":3,"title":"事件缓存","slug":"事件缓存","link":"#事件缓存","children":[]},{"level":3,"title":"Diff 优化","slug":"diff-优化","link":"#diff-优化","children":[]},{"level":3,"title":"打包优化","slug":"打包优化","link":"#打包优化","children":[]},{"level":3,"title":"自定义渲染 API","slug":"自定义渲染-api","link":"#自定义渲染-api","children":[]},{"level":3,"title":"TypeScript 支持","slug":"typescript-支持","link":"#typescript-支持","children":[]}],"git":{"createdTime":1728989573000,"updatedTime":1729218235000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":1}]},"readingTime":{"minutes":13.38,"words":4014},"filePathRelative":"study/3.Vue/vue3.0和 2.0的区别.md","localizedDate":"2022年1月11日","excerpt":"\\n<h3>生命周期的变化</h3>\\n<p>整体来看，变化不大，只是名字大部分需要 +&nbsp;<code>on</code>，功能上类似。使用上 Vue3 组合式 API 需要先引入；Vue2 选项 API 则可直接调用，如下所示。</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>//&nbsp;vue3</span></span>\\n<span class=\\"line\\"><span>&lt;script&nbsp;setup&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>import&nbsp;{&nbsp;onMounted&nbsp;}&nbsp;from&nbsp; vue </span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span>onMounted(()&nbsp;=&gt;&nbsp;{</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;...</span></span>\\n<span class=\\"line\\"><span>})</span></span>\\n<span class=\\"line\\"><span>//&nbsp;可将不同的逻辑拆开成多个onMounted，依然按顺序执行，不被覆盖</span></span>\\n<span class=\\"line\\"><span>onMounted(()&nbsp;=&gt;&nbsp;{</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;...</span></span>\\n<span class=\\"line\\"><span>})</span></span>\\n<span class=\\"line\\"><span>&lt;/script&gt;</span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span>//&nbsp;vue2</span></span>\\n<span class=\\"line\\"><span>&lt;script&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;&nbsp;export&nbsp;default&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mounted()&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>\\n<span class=\\"line\\"><span>&nbsp;&nbsp;&nbsp;}</span></span>\\n<span class=\\"line\\"><span>&lt;/script&gt;&nbsp;</span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span>复制代码</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,o as data};
