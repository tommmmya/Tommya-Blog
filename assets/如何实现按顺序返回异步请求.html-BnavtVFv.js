import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-jr09F59J.js";const e={},l=i(`<h1 id="如何实现按顺序返回异步请求" tabindex="-1"><a class="header-anchor" href="#如何实现按顺序返回异步请求"><span>如何实现按顺序返回异步请求</span></a></h1><blockquote><p>最近我在面试字节飞书出了一道手写题，是一道顺序返回异步请求的题，当时情况我采用了 async 与 await 和 Promise.all 两种方法来进行实现，事后想来这两种都不完全符合题意，我搜索网上的文章都没有符合我心意的答案，于是自己便写出来总结一下</p></blockquote><h2 id="一、题干" tabindex="-1"><a class="header-anchor" href="#一、题干"><span>一、题干</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function test(i){</span></span>
<span class="line"><span>    return new Promise((res)=&gt;{</span></span>
<span class="line"><span>        setTimeout(()=&gt;{</span></span>
<span class="line"><span>          res(i)</span></span>
<span class="line"><span>        },Math.random()*1000)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main(){</span></span>
<span class="line"><span>    for(let i=0;i&lt;10;i++){</span></span>
<span class="line"><span>        test(i).then((res)=&gt;{</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>要求</strong>：要求按顺序打印 0 到 9。</p><p><strong>实质</strong>：该问题实质是模拟多个异步请求，并确保这些请求的结果按顺序返回和输出</p><h2 id="二、采用-async-和-await" tabindex="-1"><a class="header-anchor" href="#二、采用-async-和-await"><span>二、采用 async 和 await</span></a></h2><p><strong>分析</strong>： 首先我们很容易就想到了采用 async 和 await 来实现，通过对每一个请求的等待，在它完成响应后再进行下一个请求的发送，这样就实现了结果按照 0 到 9 顺序打印</p><p><strong>代码实现</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//通过添加async和await实现</span></span>
<span class="line"><span>async function main(){</span></span>
<span class="line"><span>    for(let i=0;i&lt;10;i++){</span></span>
<span class="line"><span>       await test(i).then((res)=&gt;{</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong>：这样我们就实现了题目要求，但是我们仔细分析就知道，它这其实是按顺序进行请求，而不是按顺序接受响应结果，这样每个请求都得等待前一个请求完成，大大降低了时间效率，所以这种方法其实并不可取</p><h2 id="三、采用-promise-all" tabindex="-1"><a class="header-anchor" href="#三、采用-promise-all"><span>三、采用 Promise.all</span></a></h2><p><strong>分析</strong>： 分析 Promise.all 的源码实现我们知道，Promise.all 的内部实现是维护一个 arr 数组，每个请求发送后，通过发送时的 index 序号，将它的结果保存 arr[index] 中，在所有请求都 resovle 之后，统一返回一个 Promise.resolve 来接受这个 arr 值 ( 这里只考虑所有请求都成功 )，所以，使用在这道题目上也适合</p><p><strong>代码实现</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function main(){</span></span>
<span class="line"><span>     let arr=[]</span></span>
<span class="line"><span>     let key=0</span></span>
<span class="line"><span>    const promise=new Promise((resovle)=&gt;{</span></span>
<span class="line"><span>        for(let i=0;i&lt;10;i++){</span></span>
<span class="line"><span>            test(i).then((result)=&gt;{</span></span>
<span class="line"><span>                arr[i]=result</span></span>
<span class="line"><span>                key++</span></span>
<span class="line"><span>                //当所有的值都返回后，统一resolve返回arr结果</span></span>
<span class="line"><span>                if(key===10){</span></span>
<span class="line"><span>                    resovle(arr)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    //遍历数组，打印结果</span></span>
<span class="line"><span>    promise.then((res)=&gt;{</span></span>
<span class="line"><span>        res.forEach(item =&gt; {</span></span>
<span class="line"><span>             console.log(item)</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong>：如此我们也实现了按顺序打印的要求，但是这个是在所有请求都响应完毕后，再统一遍历来打印出来，这并不满足 返回了结果符合的，就立即响应的需求，所以只能作为备选项</p><h2 id="四、指针锁调度" tabindex="-1"><a class="header-anchor" href="#四、指针锁调度"><span>四、指针锁调度</span></a></h2><p><strong>分析</strong>： 根据题意，它想要的是根据顺序来打印结果，但是由于返回的时间不同，导致后面的数据可能先返回，而前面的数据后返回的问题，那么其实我们可以根据一个指针 key，来维护异步调度的数组执行。每当有值返回我们给它存在 arr 数组中，根据 key 和 index 的对比，来判断是否打印值和后续值</p><p><strong>代码实现</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function main(){</span></span>
<span class="line"><span>    //指针key</span></span>
<span class="line"><span>    let key = 0</span></span>
<span class="line"><span>    const arr=[]</span></span>
<span class="line"><span>    for(let i=0;i&lt;10;i++){</span></span>
<span class="line"><span>        test(i).then((res)=&gt;{</span></span>
<span class="line"><span>        //返回结果后就存进arr数组中</span></span>
<span class="line"><span>           arr[res]=()=&gt;console.log(res)</span></span>
<span class="line"><span>           //判断指针key的指向以及它后续指向来进行函数执行打印</span></span>
<span class="line"><span>           if(key===res){</span></span>
<span class="line"><span>             while(arr[key]){</span></span>
<span class="line"><span>                arr[key]()</span></span>
<span class="line"><span>                key++</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong>： 这种方法可以被称为 “有序回调执行” 或者“基于索引的有序输出”。它通过维护一个数组来存储回调函数，并使用一个指针来确保按顺序执行这些回调函数，即使这些回调函数是异步完成的。该方法的核心思想是延迟执行，直到所有前面的回调都准备好，从而保证输出的顺序，完全符合题意。</p><h2 id="五、优化" tabindex="-1"><a class="header-anchor" href="#五、优化"><span>五、优化</span></a></h2><p><strong>优化原因</strong>： 我们知道通过方法四指针锁调度可以完美实现题目要求，但是这里毕竟是模拟请求，既然是请求，就难免会遇到请求失败，错误处理的问题，所以，这里拓展模拟一下部分失败时，我们该怎么处理</p><p><strong>代码实现</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function test(i) {</span></span>
<span class="line"><span>    return new Promise((res, rej) =&gt; {</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            if (Math.random() &gt; 0.8) { // 20% 的概率失败</span></span>
<span class="line"><span>                rej(\`Request \${i} failed\`);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                res(i);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }, Math.random() * 1000);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span>    let key = 0;</span></span>
<span class="line"><span>    const arr = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>        test(i)</span></span>
<span class="line"><span>            .then((res) =&gt; {</span></span>
<span class="line"><span>                arr[res] = () =&gt; console.log(res, +new Date());</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .catch((err) =&gt; {</span></span>
<span class="line"><span>                arr[i] = () =&gt; console.log(\`Request \${i} failed\`);</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .finally(() =&gt; {</span></span>
<span class="line"><span>                // 检查并按顺序输出</span></span>
<span class="line"><span>                if (key === i) {</span></span>
<span class="line"><span>                    while (arr[key]) {</span></span>
<span class="line"><span>                        arr[key]();</span></span>
<span class="line"><span>                        key++;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong>：这样，一个完整逻辑的指针锁调度代码就实现啦！</p><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结"><span>六、总结</span></a></h2><p>现在我们知道要实现题干要求，我们有三种方法可以实现，但指针锁调度无疑是最适合该题目的解决方法，这种思想，其实在很多场景都有使用，比如：</p><ol><li><strong>网络请求</strong>： 向多个 API 端点发送请求，并确保按特定顺序处理和显示结果。例如，获取多个用户的详细信息，并按用户 ID 顺序显示。</li><li><strong>文件处理</strong>： 读取多个文件的内容并按顺序处理，而不管读取操作的完成顺序。例如，读取多个日志文件，并按时间顺序处理日志条目。</li><li><strong>数据流处理</strong>： 在数据流处理中，确保数据块按顺序处理和输出。例如，处理视频流或音频流数据，确保帧按正确顺序播放。</li><li><strong>任务调度</strong>： 在任务调度系统中，确保任务按特定顺序执行和完成。例如，处理一系列依赖关系的任务，每个任务完成后按顺序执行下一个任务。</li></ol><p>但其他两种方法也有各种适合的场景，这里就不展开叙述了</p><p>这里是 Tommya，一位在求职的大四前端开发者，希望我的解答能给你带来一些帮助</p>`,31),p=[l];function r(d,t){return a(),n("div",null,p)}const o=s(e,[["render",r],["__file","如何实现按顺序返回异步请求.html.vue"]]),m=JSON.parse('{"path":"/study/1.%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E5%AE%9E%E5%BD%95/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%8C%89%E9%A1%BA%E5%BA%8F%E8%BF%94%E5%9B%9E%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82.html","title":"如何实现按顺序返回异步请求","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-10-20T00:00:00.000Z","category":["面试实录"],"tag":["异步调度","面试笔试题"],"description":"如何实现按顺序返回异步请求 最近我在面试字节飞书出了一道手写题，是一道顺序返回异步请求的题，当时情况我采用了 async 与 await 和 Promise.all 两种方法来进行实现，事后想来这两种都不完全符合题意，我搜索网上的文章都没有符合我心意的答案，于是自己便写出来总结一下 一、题干 要求：要求按顺序打印 0 到 9。 实质：该问题实质是模拟多...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/1.%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E5%AE%9E%E5%BD%95/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%8C%89%E9%A1%BA%E5%BA%8F%E8%BF%94%E5%9B%9E%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"如何实现按顺序返回异步请求"}],["meta",{"property":"og:description","content":"如何实现按顺序返回异步请求 最近我在面试字节飞书出了一道手写题，是一道顺序返回异步请求的题，当时情况我采用了 async 与 await 和 Promise.all 两种方法来进行实现，事后想来这两种都不完全符合题意，我搜索网上的文章都没有符合我心意的答案，于是自己便写出来总结一下 一、题干 要求：要求按顺序打印 0 到 9。 实质：该问题实质是模拟多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:58:22.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"异步调度"}],["meta",{"property":"article:tag","content":"面试笔试题"}],["meta",{"property":"article:published_time","content":"2024-10-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:58:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何实现按顺序返回异步请求\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T10:58:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[{"level":2,"title":"一、题干","slug":"一、题干","link":"#一、题干","children":[]},{"level":2,"title":"二、采用 async 和 await","slug":"二、采用-async-和-await","link":"#二、采用-async-和-await","children":[]},{"level":2,"title":"三、采用 Promise.all","slug":"三、采用-promise-all","link":"#三、采用-promise-all","children":[]},{"level":2,"title":"四、指针锁调度","slug":"四、指针锁调度","link":"#四、指针锁调度","children":[]},{"level":2,"title":"五、优化","slug":"五、优化","link":"#五、优化","children":[]},{"level":2,"title":"六、总结","slug":"六、总结","link":"#六、总结","children":[]}],"git":{"createdTime":1729578170000,"updatedTime":1730717902000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":1}]},"readingTime":{"minutes":5,"words":1501},"filePathRelative":"study/1.秋招面试实录/如何实现按顺序返回异步请求.md","localizedDate":"2024年10月20日","excerpt":"\\n<blockquote>\\n<p>最近我在面试字节飞书出了一道手写题，是一道顺序返回异步请求的题，当时情况我采用了 async 与 await 和 Promise.all 两种方法来进行实现，事后想来这两种都不完全符合题意，我搜索网上的文章都没有符合我心意的答案，于是自己便写出来总结一下</p>\\n</blockquote>\\n<h2>一、题干</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>function test(i){</span></span>\\n<span class=\\"line\\"><span>    return new Promise((res)=&gt;{</span></span>\\n<span class=\\"line\\"><span>        setTimeout(()=&gt;{</span></span>\\n<span class=\\"line\\"><span>          res(i)</span></span>\\n<span class=\\"line\\"><span>        },Math.random()*1000)</span></span>\\n<span class=\\"line\\"><span>    })</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>function main(){</span></span>\\n<span class=\\"line\\"><span>    for(let i=0;i&lt;10;i++){</span></span>\\n<span class=\\"line\\"><span>        test(i).then((res)=&gt;{</span></span>\\n<span class=\\"line\\"><span>            console.log(res)</span></span>\\n<span class=\\"line\\"><span>        })</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span>main()</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{o as comp,m as data};
