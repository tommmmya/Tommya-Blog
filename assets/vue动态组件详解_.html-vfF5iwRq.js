import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-jr09F59J.js";const e={},l=i(`<h1 id="动态组件详解" tabindex="-1"><a class="header-anchor" href="#动态组件详解"><span>动态组件详解</span></a></h1><h5 id="_1、-什么是动态组件" tabindex="-1"><a class="header-anchor" href="#_1、-什么是动态组件"><span>1、 什么是动态组件</span></a></h5><p>动态组件是指：在一个挂载点使用多个组件，并进行动态切换。可能对于新手来说，这句话有些难理解，什么是挂载点? 可以简单的理解为页面的一个位置。<br> 最常见的就是：tab 的切换功能。</p><p>在 vue 要实现这个功能通常用两种方式。一是使用<code>&lt;component&gt;</code>元素的 <strong>is</strong> 的特性，二是使用 <strong>v-if</strong> 。</p><h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一"><span>方式一：</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;使用component 的 is特性&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li </span></span>
<span class="line"><span>      v-for=&quot;(item,index) in tabList&quot; </span></span>
<span class="line"><span>      :key=&quot;index&quot; </span></span>
<span class="line"><span>      style=&quot;cursor:pointer&quot; </span></span>
<span class="line"><span>      @click=&quot;changeView(index)&quot;&gt;</span></span>
<span class="line"><span>      {{item}}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 相关的组件代码在这里不展示</span></span>
<span class="line"><span>import shouji from &quot;./shouji&quot;;</span></span>
<span class="line"><span>import pc from &quot;./pc&quot;;</span></span>
<span class="line"><span>import shuma from &quot;./shuma&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;HelloWorld&quot;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    shouji,</span></span>
<span class="line"><span>    pc,</span></span>
<span class="line"><span>    shuma,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      index: 0,</span></span>
<span class="line"><span>      arr: [&quot;shuma&quot;, &quot;shouji&quot;, &quot;pc&quot;],</span></span>
<span class="line"><span>      tabList: [&quot;数码&quot;, &quot;手机&quot;, &quot;电脑&quot;],</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    currentView() {</span></span>
<span class="line"><span>      return this.arr[this.index];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    changeView(index) {</span></span>
<span class="line"><span>      this.index = index;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;使用v-if实现&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(item,index) in tabList&quot; :key=&quot;index&quot; style=&quot;cursor:pointer&quot; @click=&quot;change(index)&quot;&gt;{{item}}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;shuma v-if=&quot;index===0&quot;&gt;&lt;/shuma&gt;</span></span>
<span class="line"><span>        &lt;shouji v-else-if=&quot;index===1&quot;&gt;&lt;/shouji&gt;</span></span>
<span class="line"><span>        &lt;pc v-else&gt;&lt;/pc&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 相关的组件代码在这里不展示</span></span>
<span class="line"><span>import shouji from &quot;./shouji&quot;;</span></span>
<span class="line"><span>import pc from &quot;./pc&quot;;</span></span>
<span class="line"><span>import shuma from &quot;./shuma&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;HelloWorld&quot;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    shouji,</span></span>
<span class="line"><span>    pc,</span></span>
<span class="line"><span>    shuma,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      index: 0,</span></span>
<span class="line"><span>      keppIndex:0,</span></span>
<span class="line"><span>      arr: [&quot;shuma&quot;, &quot;shouji&quot;, &quot;pc&quot;],</span></span>
<span class="line"><span>      tabList: [&quot;数码&quot;, &quot;手机&quot;, &quot;电脑&quot;],</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    change(index) {</span></span>
<span class="line"><span>      this.index = index;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存"><span>缓存</span></a></h4><p>上述讲到的方法虽然能够实现了动态组件的切换，但是每次切换都会把上一个组件销毁，然后渲染下一个组件，对于多次切换而言，显然每次的销毁和重新渲染，很大消耗了我们的性能。所以我们可以通过 keep-alive 对组件进行缓存，对于不显示的组件不是去销毁他，而是使他处理不激活的状态，当需要显示时再去激活。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;使用component 的 is特性 有缓存的组件&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li </span></span>
<span class="line"><span>      v-for=&quot;(item,index) in tabList&quot; </span></span>
<span class="line"><span>      :key=&quot;index&quot; </span></span>
<span class="line"><span>      style=&quot;cursor:pointer&quot; </span></span>
<span class="line"><span>      @click=&quot;changeView(index)&quot;&gt;</span></span>
<span class="line"><span>      {{item}}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;keep-alive&gt;</span></span>
<span class="line"><span>		&lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>	  &lt;/keep-alive&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 相关的组件代码在这里不展示</span></span>
<span class="line"><span>import shouji from &quot;./shouji&quot;;</span></span>
<span class="line"><span>import pc from &quot;./pc&quot;;</span></span>
<span class="line"><span>import shuma from &quot;./shuma&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;HelloWorld&quot;,</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    shouji,</span></span>
<span class="line"><span>    pc,</span></span>
<span class="line"><span>    shuma,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      index: 0,</span></span>
<span class="line"><span>      arr: [&quot;shuma&quot;, &quot;shouji&quot;, &quot;pc&quot;],</span></span>
<span class="line"><span>      tabList: [&quot;数码&quot;, &quot;手机&quot;, &quot;电脑&quot;],</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    currentView() {</span></span>
<span class="line"><span>      return this.arr[this.index];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    changeView(index) {</span></span>
<span class="line"><span>      this.index = index;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和-keep-alive-相关的两个生命周期" tabindex="-1"><a class="header-anchor" href="#和-keep-alive-相关的两个生命周期"><span>和 keep-alive 相关的两个生命周期</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>activated() {</span></span>
<span class="line"><span>     console.log(&quot;shouji 手机页面被添加&quot;);// 被缓存的组件激活时触发</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> deactivated() {</span></span>
<span class="line"><span>     console.log(&quot;shouji 手机页面被移除&quot;); // 被切换到其他组件时触发</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="keep-alive-的两个属性" tabindex="-1"><a class="header-anchor" href="#keep-alive-的两个属性"><span>keep-alive 的两个属性</span></a></h4><p>include 和 exclude</p><p><strong>include 表示只能允许匹配到的组件生效<br> exclude 则相反，除了匹配到的组件之外有效</strong></p><p>使用方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 字符串 逗号分隔字符串， a，b 分别为组件名 --&gt;</span></span>
<span class="line"><span>&lt;keep-alive include=&quot;a,b&quot;&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span>
<span class="line"><span>&lt;!-- 正则表达式 --&gt;</span></span>
<span class="line"><span>&lt;keep-alive :include=&quot;/a|b/&quot;&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span>
<span class="line"><span>&lt;!-- 数组 --&gt;</span></span>
<span class="line"><span>&lt;keep-alive :include=&quot;[&#39;a&#39;, &#39;b&#39;]&quot;&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[l];function t(d,c){return a(),n("div",null,p)}const u=s(e,[["render",t],["__file","vue动态组件详解_.html.vue"]]),o=JSON.parse('{"path":"/study/3.Vue/vue%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E8%AF%A6%E8%A7%A3_.html","title":"动态组件详解","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-06-23T00:00:00.000Z","category":["Vue"],"tag":["vue","动态组件"],"description":"动态组件详解 1、 什么是动态组件 动态组件是指：在一个挂载点使用多个组件，并进行动态切换。可能对于新手来说，这句话有些难理解，什么是挂载点? 可以简单的理解为页面的一个位置。 最常见的就是：tab 的切换功能。 在 vue 要实现这个功能通常用两种方式。一是使用<component>元素的 is 的特性，二是使用 v-if 。 方式一： 方式二 缓存...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/3.Vue/vue%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E8%AF%A6%E8%A7%A3_.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"动态组件详解"}],["meta",{"property":"og:description","content":"动态组件详解 1、 什么是动态组件 动态组件是指：在一个挂载点使用多个组件，并进行动态切换。可能对于新手来说，这句话有些难理解，什么是挂载点? 可以简单的理解为页面的一个位置。 最常见的就是：tab 的切换功能。 在 vue 要实现这个功能通常用两种方式。一是使用<component>元素的 is 的特性，二是使用 v-if 。 方式一： 方式二 缓存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T07:56:04.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"动态组件"}],["meta",{"property":"article:published_time","content":"2023-06-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T07:56:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态组件详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-29T07:56:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[],"git":{"createdTime":1728989573000,"updatedTime":1730188564000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":2}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"study/3.Vue/vue动态组件详解_.md","localizedDate":"2023年6月23日","excerpt":"\\n<h5>1、 什么是动态组件</h5>\\n<p>动态组件是指：在一个挂载点使用多个组件，并进行动态切换。可能对于新手来说，这句话有些难理解，什么是挂载点? 可以简单的理解为页面的一个位置。<br>\\n最常见的就是：tab 的切换功能。</p>\\n<p>在 vue 要实现这个功能通常用两种方式。一是使用<code>&lt;component&gt;</code>元素的 <strong>is</strong> 的特性，二是使用 <strong>v-if</strong> 。</p>\\n<h4>方式一：</h4>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>&lt;template&gt;</span></span>\\n<span class=\\"line\\"><span>  &lt;div class=\\"hello\\"&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;h3&gt;使用component 的 is特性&lt;/h3&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;ul&gt;</span></span>\\n<span class=\\"line\\"><span>      &lt;li </span></span>\\n<span class=\\"line\\"><span>      v-for=\\"(item,index) in tabList\\" </span></span>\\n<span class=\\"line\\"><span>      :key=\\"index\\" </span></span>\\n<span class=\\"line\\"><span>      style=\\"cursor:pointer\\" </span></span>\\n<span class=\\"line\\"><span>      @click=\\"changeView(index)\\"&gt;</span></span>\\n<span class=\\"line\\"><span>      {{item}}&lt;/li&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;/ul&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;component :is=\\"currentView\\"&gt;&lt;/component&gt;</span></span>\\n<span class=\\"line\\"><span>  &lt;/div&gt;</span></span>\\n<span class=\\"line\\"><span>&lt;/template&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>&lt;script&gt;</span></span>\\n<span class=\\"line\\"><span>// 相关的组件代码在这里不展示</span></span>\\n<span class=\\"line\\"><span>import shouji from \\"./shouji\\";</span></span>\\n<span class=\\"line\\"><span>import pc from \\"./pc\\";</span></span>\\n<span class=\\"line\\"><span>import shuma from \\"./shuma\\";</span></span>\\n<span class=\\"line\\"><span>export default {</span></span>\\n<span class=\\"line\\"><span>  name: \\"HelloWorld\\",</span></span>\\n<span class=\\"line\\"><span>  components: {</span></span>\\n<span class=\\"line\\"><span>    shouji,</span></span>\\n<span class=\\"line\\"><span>    pc,</span></span>\\n<span class=\\"line\\"><span>    shuma,</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>  data() {</span></span>\\n<span class=\\"line\\"><span>    return {</span></span>\\n<span class=\\"line\\"><span>      index: 0,</span></span>\\n<span class=\\"line\\"><span>      arr: [\\"shuma\\", \\"shouji\\", \\"pc\\"],</span></span>\\n<span class=\\"line\\"><span>      tabList: [\\"数码\\", \\"手机\\", \\"电脑\\"],</span></span>\\n<span class=\\"line\\"><span>    };</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>  computed: {</span></span>\\n<span class=\\"line\\"><span>    currentView() {</span></span>\\n<span class=\\"line\\"><span>      return this.arr[this.index];</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>  methods: {</span></span>\\n<span class=\\"line\\"><span>    changeView(index) {</span></span>\\n<span class=\\"line\\"><span>      this.index = index;</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>};</span></span>\\n<span class=\\"line\\"><span>&lt;/script&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,o as data};
