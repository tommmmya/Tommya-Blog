import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-jr09F59J.js";const i={},l=e(`<h1 id="深入理解-javascript-事件流机制-冒泡、捕获及事件代理" tabindex="-1"><a class="header-anchor" href="#深入理解-javascript-事件流机制-冒泡、捕获及事件代理"><span>深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理</span></a></h1><p>事件触发过程是 JavaScript 中非常重要的概念，理解它可以帮助我们更好地处理用户交互和网页响应。在 JavaScript 中，事件触发是通过事件流（Event Flow）来实现的。事件流描述了从事件发生到事件被处理的整个过程，其中包括<strong>捕获阶段、目标阶段和冒泡阶段</strong>。</p><h1 id="三大阶段-接新娘三个过程" tabindex="-1"><a class="header-anchor" href="#三大阶段-接新娘三个过程"><span>三大阶段（接新娘三个过程）</span></a></h1><h2 id="捕获阶段-去接新娘" tabindex="-1"><a class="header-anchor" href="#捕获阶段-去接新娘"><span>捕获阶段（去接新娘）</span></a></h2><p>事件触发的第一阶段是捕获阶段。在这个阶段中，事件从最外层的 <code>window</code> 对象开始向下传播，直到达到真正发生事件的元素。在这个过程中，会依次触发经过的每个元素上注册的捕获事件处理函数。捕获阶段的目的是为了能够在事件到达目标之前对其进行预处理。</p><h2 id="目标阶段-看到新娘" tabindex="-1"><a class="header-anchor" href="#目标阶段-看到新娘"><span>目标阶段（看到新娘）</span></a></h2><p>一旦事件到达目标元素，就进入了目标阶段。在这个阶段中，事件会触发目标元素上注册的事件处理函数。目标阶段是事件触发的核心阶段，通常我们在这里处理具体的业务逻辑。</p><h2 id="冒泡阶段-带回新娘" tabindex="-1"><a class="header-anchor" href="#冒泡阶段-带回新娘"><span>冒泡阶段（带回新娘）</span></a></h2><p>事件触发的最后阶段是冒泡阶段。在这个阶段中，事件从目标元素开始向上传播，直到达到最外层的 <code>window</code> 对象为止。在这个过程中，会依次触发经过的每个元素上注册的冒泡事件处理函数。冒泡阶段的目的是为了能够在事件到达最外层之前对其进行后续处理。</p><h2 id="需要注意的是-接亲注意事项" tabindex="-1"><a class="header-anchor" href="#需要注意的是-接亲注意事项"><span>需要注意的是（接亲注意事项）</span></a></h2><ul><li>捕获事件和冒泡事件是互斥的，即同一个事件只能在其中一个阶段触发，而不能同时触发。</li><li>默认情况下，事件是按照冒泡过程进行处理的。（新娘没在不显示）</li><li>我们也可以通过调用 <code>addEventListener</code> 方法的第三个参数来设置事件的处理方式。如果将第三个参数设置为 <code>true</code>，则表示事件在捕获阶段进行处理；如果将第三个参数设置为 <code>false</code> 或不传入该参数，则表示事件在冒泡阶段进行处理。</li></ul><h3 id="默认冒泡事件实例-带回新娘实战" tabindex="-1"><a class="header-anchor" href="#默认冒泡事件实例-带回新娘实战"><span>默认冒泡事件实例（带回新娘实战）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta &gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        #a {</span></span>
<span class="line"><span>            width: 400px;</span></span>
<span class="line"><span>            height: 400px;</span></span>
<span class="line"><span>            background-color: rgb(245, 56, 13);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #b {</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background-color: rgb(27, 140, 238);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #c {</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 100px;</span></span>
<span class="line"><span>            background: #000;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;a&quot;&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;b&quot;&gt;</span></span>
<span class="line"><span>            &lt;div id=&quot;c&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        let a = document.getElementById(&#39;a&#39;)</span></span>
<span class="line"><span>        let b = document.getElementById(&#39;b&#39;)</span></span>
<span class="line"><span>        let c = document.getElementById(&#39;c&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        a.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;a被点击&#39;);</span></span>
<span class="line"><span>        },)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        b.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;b被点击&#39;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        }, )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        c.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;c被点击2&#39;);</span></span>
<span class="line"><span>        },)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台会打印的顺序为 c,b,a</p><h3 id="调用第三个参数-考虑要不要阻止接亲" tabindex="-1"><a class="header-anchor" href="#调用第三个参数-考虑要不要阻止接亲"><span>调用第三个参数（考虑要不要阻止接亲）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>a.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;a被点击&#39;);</span></span>
<span class="line"><span>        },true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        b.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;b被点击&#39;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        }, true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        c.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;c被点击2&#39;);</span></span>
<span class="line"><span>        },true)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像这样调用第三个参数可以阻止默认冒泡行为，一般情况下，代码写在最后面的不需要传递第三个参数。</p><h2 id="阻止默认行为方法-阻止他们" tabindex="-1"><a class="header-anchor" href="#阻止默认行为方法-阻止他们"><span>阻止默认行为方法（阻止他们）</span></a></h2><p>有时候，在处理事件的过程中，我们可能需要阻止事件的默认行为，例如点击链接时阻止跳转页面。在 JavaScript 中，我们可以使用 <code>event.stopPropagation()</code> 方法来阻止事件流的传播。调用该方法后，事件将不再继续传播，不会触发其他元素上的事件处理函数。</p><p>在 b 内添加该方法可以阻止 b 之后的事件流传播：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>b.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;b被点击&#39;);</span></span>
<span class="line"><span>        event.stopPropagation()</span></span>
<span class="line"><span>        }, )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，还有一个类似的方法叫做 <code>event.stopImmediatePropagation()</code>。与 <code>event.stopPropagation()</code> 不同的是，调用 <code>event.stopImmediatePropagation()</code> 方法不仅会阻止事件传播，还会阻止同一个元素上绑定的其他相同类型事件的触发。</p><p>添加一个新的 c 事件，该方法会阻止 “c 被点击” 触发，不过该方法也同样有执行的先后顺序（如果写在 “c 被点击” 里面，他不会阻止 “c 被点击 2” 事件流发生）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>c.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;c被点击2&#39;);</span></span>
<span class="line"><span>            event.stopImmediatePropagation()</span></span>
<span class="line"><span>        },)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        c.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;c被点击&#39;);</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        }, )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件代理-事件委托" tabindex="-1"><a class="header-anchor" href="#事件代理-事件委托"><span>事件代理（事件委托）</span></a></h2><p>事件代理（也称为事件委托）是一种常用的优化技术，用于管理大量相似元素上的事件处理。它通过将事件处理程序绑定到它们共同的父元素上，利用事件冒泡机制来处理事件。这样做的好处是可以减少事件处理程序的数量，提高性能和代码的可维护性。</p><p>使用事件代理，我们可以将事件处理程序绑定到父元素上，并通过事件对象的 <code>target</code> 属性来判断具体触发事件的子元素。这样，无论子元素的数量如何变化，我们都只需要关心父元素上的事件处理逻辑，大大简化了代码。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;a&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;b&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;c&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;d&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;e&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        let ul = document.getElementsByTagName(&#39;ul&#39;)[0]</span></span>
<span class="line"><span>        ul.addEventListener(&#39;click&#39;, (event) =&gt; {</span></span>
<span class="line"><span>            // 此时事件流从哪里来到了ul上</span></span>
<span class="line"><span>            console.log(event.target.innerHTML);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，通过 <code>document.getElementsByTagName(&#39;ul&#39;)[0]</code> 获取到了页面上第一个 <code>&lt;ul&gt;</code> 元素，并给它添加了一个点击事件的监听器。当用户点击 <code>&lt;ul&gt;</code> 元素或其内部的任何子元素时，事件会触发该监听器。</p><p>在点击事件发生时，事件流从最具体的目标元素开始，逐级向上冒泡。因此，事件从触发点击事件的具体子元素上（例如 <code>&lt;li&gt;</code>）开始传播，然后经过父级元素 <code>&lt;ul&gt;</code>，直到达到最外层的 <code>window</code> 对象。</p><p>在这段代码中，我们通过事件对象 <code>event.target</code> 来获取到实际触发事件的元素。在事件处理函数中，输出了 <code>event.target.innerHTML</code> 的值，即触发事件的元素的内容。所以，当点击事件发生时，会打印出被点击的子元素的内容。</p><p>需要注意的是，事件代理是利用事件冒泡机制来管理事件处理程序的一种技术。通过将事件处理程序绑定到父元素上，可以减少事件处理程序的数量，并且不受子元素的变化影响。在这个例子中，我们将点击事件的监听器绑定到了 <code>&lt;ul&gt;</code> 元素上，而不是绑定到具体的子元素上，从而实现了事件代理的效果。</p><h2 id="记录一下复杂的实现方法" tabindex="-1"><a class="header-anchor" href="#记录一下复杂的实现方法"><span>记录一下复杂的实现方法</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 点哪一个li，就log出它的内容</span></span>
<span class="line"><span>    let lis = document.getElementsByTagName(&#39;li&#39;)</span></span>
<span class="line"><span>    lis.__proto__.forEach = Array.prototype.forEach</span></span>
<span class="line"><span>    Array.from(lis).forEach(li =&gt; {</span></span>
<span class="line"><span>      li.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>        console.log(li.innerHTML);</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),p=[l];function t(d,c){return a(),s("div",null,p)}const o=n(i,[["render",t],["__file","事件流机制冒泡捕获及事件代理.html.vue"]]),m=JSON.parse('{"path":"/study/2.%E6%B7%B1%E5%85%A5%E5%BF%85%E5%A4%87/%E4%BA%8B%E4%BB%B6%E6%B5%81%E6%9C%BA%E5%88%B6%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%8F%8A%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86.html","title":"深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-05-01T00:00:00.000Z","4ategory":["面试"],"tag":["事件冒泡","事件捕获","dom"],"description":"深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理 事件触发过程是 JavaScript 中非常重要的概念，理解它可以帮助我们更好地处理用户交互和网页响应。在 JavaScript 中，事件触发是通过事件流（Event Flow）来实现的。事件流描述了从事件发生到事件被处理的整个过程，其中包括捕获阶段、目标阶段和冒泡阶段。 三大阶段（接新...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/2.%E6%B7%B1%E5%85%A5%E5%BF%85%E5%A4%87/%E4%BA%8B%E4%BB%B6%E6%B5%81%E6%9C%BA%E5%88%B6%E5%86%92%E6%B3%A1%E6%8D%95%E8%8E%B7%E5%8F%8A%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理"}],["meta",{"property":"og:description","content":"深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理 事件触发过程是 JavaScript 中非常重要的概念，理解它可以帮助我们更好地处理用户交互和网页响应。在 JavaScript 中，事件触发是通过事件流（Event Flow）来实现的。事件流描述了从事件发生到事件被处理的整个过程，其中包括捕获阶段、目标阶段和冒泡阶段。 三大阶段（接新..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:58:22.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"事件冒泡"}],["meta",{"property":"article:tag","content":"事件捕获"}],["meta",{"property":"article:tag","content":"dom"}],["meta",{"property":"article:published_time","content":"2023-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:58:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 JavaScript 事件流机制：冒泡、捕获及事件代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:58:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[{"level":2,"title":"捕获阶段（去接新娘）","slug":"捕获阶段-去接新娘","link":"#捕获阶段-去接新娘","children":[]},{"level":2,"title":"目标阶段（看到新娘）","slug":"目标阶段-看到新娘","link":"#目标阶段-看到新娘","children":[]},{"level":2,"title":"冒泡阶段（带回新娘）","slug":"冒泡阶段-带回新娘","link":"#冒泡阶段-带回新娘","children":[]},{"level":2,"title":"需要注意的是（接亲注意事项）","slug":"需要注意的是-接亲注意事项","link":"#需要注意的是-接亲注意事项","children":[{"level":3,"title":"默认冒泡事件实例（带回新娘实战）","slug":"默认冒泡事件实例-带回新娘实战","link":"#默认冒泡事件实例-带回新娘实战","children":[]},{"level":3,"title":"调用第三个参数（考虑要不要阻止接亲）","slug":"调用第三个参数-考虑要不要阻止接亲","link":"#调用第三个参数-考虑要不要阻止接亲","children":[]}]},{"level":2,"title":"阻止默认行为方法（阻止他们）","slug":"阻止默认行为方法-阻止他们","link":"#阻止默认行为方法-阻止他们","children":[]},{"level":2,"title":"事件代理（事件委托）","slug":"事件代理-事件委托","link":"#事件代理-事件委托","children":[]},{"level":2,"title":"记录一下复杂的实现方法","slug":"记录一下复杂的实现方法","link":"#记录一下复杂的实现方法","children":[]}],"git":{"createdTime":1728989573000,"updatedTime":1730717902000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":3}]},"readingTime":{"minutes":5.76,"words":1729},"filePathRelative":"study/2.深入必备/事件流机制冒泡捕获及事件代理.md","localizedDate":"2023年5月1日","excerpt":"\\n<p>事件触发过程是 JavaScript 中非常重要的概念，理解它可以帮助我们更好地处理用户交互和网页响应。在 JavaScript 中，事件触发是通过事件流（Event Flow）来实现的。事件流描述了从事件发生到事件被处理的整个过程，其中包括<strong>捕获阶段、目标阶段和冒泡阶段</strong>。</p>\\n<h1>三大阶段（接新娘三个过程）</h1>\\n<h2>捕获阶段（去接新娘）</h2>\\n<p>事件触发的第一阶段是捕获阶段。在这个阶段中，事件从最外层的 <code>window</code> 对象开始向下传播，直到达到真正发生事件的元素。在这个过程中，会依次触发经过的每个元素上注册的捕获事件处理函数。捕获阶段的目的是为了能够在事件到达目标之前对其进行预处理。</p>","autoDesc":true}');export{o as comp,m as data};
