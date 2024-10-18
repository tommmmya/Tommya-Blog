import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-hlFOVmMU.js";const i={},l=e(`<h1 id="大文件上传优化切片断点续传秒传前后端demo" tabindex="-1"><a class="header-anchor" href="#大文件上传优化切片断点续传秒传前后端demo"><span>大文件上传优化切片断点续传秒传前后端demo</span></a></h1><h3 id="大文件上传-具体代码在最后" tabindex="-1"><a class="header-anchor" href="#大文件上传-具体代码在最后"><span>大文件上传（具体代码在最后）</span></a></h3><h4 id="前景提要" tabindex="-1"><a class="header-anchor" href="#前景提要"><span>前景提要</span></a></h4><p>在工作中，经常会遇到上传文件的功能，但是当文件体积大时，如果使用把该文件直接在一个请求体中提交，会出现一些问题，以 nginx 为例：</p><ul><li>其默认允许 1MB 以内的文件</li><li>超过 1MB 的文件，需要设置<code>client_max_body_size</code>放开体积限制</li></ul><p>但是这样会存在一个问题，就是如果上传的文件体积很大，就会出现一些问题，最明显的问题是：</p><blockquote><p>服务器的存储和网络带宽压力都会非常大</p></blockquote><figure><img src="data:image/webp;base64,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" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当服务器、产品、用户忍不了时，就需要对大文件上传进行优化。</p><h4 id="_1、大文件切片上传" tabindex="-1"><a class="header-anchor" href="#_1、大文件切片上传"><span>1、大文件切片上传</span></a></h4><h5 id="逻辑梗概" tabindex="-1"><a class="header-anchor" href="#逻辑梗概"><span>逻辑梗概</span></a></h5><ul><li>将大文件分割成多个文件块</li><li>逐个上传文件块</li><li>服务端将文件块顺序合并成完整文件</li></ul><h5 id="优势分析" tabindex="-1"><a class="header-anchor" href="#优势分析"><span>优势分析</span></a></h5><ol><li>减轻服务器压力：如果一次性上传大文件，服务器的存储和网络带宽压力都会非常大，而通过切片，可以将这些压力分散到多个小文件中，减轻服务器的压力。</li><li>断点续传、错误重试：因为大文件被肢解了，如果因为一些原因中断、错误了，已经上传的部分就不用再重新上传了，只需要把后续的传上就好了。</li></ol><h5 id="前端部分" tabindex="-1"><a class="header-anchor" href="#前端部分"><span>前端部分</span></a></h5><h6 id="_1-1-切文件-前端" tabindex="-1"><a class="header-anchor" href="#_1-1-切文件-前端"><span>1.1 切文件（前端）</span></a></h6><h6 id="_1-2-判定切片是否完成上传完成-前端" tabindex="-1"><a class="header-anchor" href="#_1-2-判定切片是否完成上传完成-前端"><span>1.2 判定切片是否完成上传完成（前端）</span></a></h6><ul><li>客户端记录切片的上传状态，只需要上传未成功的切片</li></ul><h6 id="_1-3-断点、错误续传-前端" tabindex="-1"><a class="header-anchor" href="#_1-3-断点、错误续传-前端"><span>1.3 断点、错误续传（前端）</span></a></h6><ul><li>客户端上传文件时，记录已上传的切片位置</li><li>下次上传时，根据记录的位置，继续上传</li></ul><h5 id="后端部分" tabindex="-1"><a class="header-anchor" href="#后端部分"><span>后端部分</span></a></h5><h6 id="_1-1-收切片、存切片" tabindex="-1"><a class="header-anchor" href="#_1-1-收切片、存切片"><span>1.1 收切片、存切片</span></a></h6><ul><li>将相关切片保存在目标文件夹</li></ul><h6 id="_1-2-合并切片" tabindex="-1"><a class="header-anchor" href="#_1-2-合并切片"><span>1.2 合并切片</span></a></h6><ul><li>服务端根据切片的顺序，将切片合并成完整文件</li></ul><h6 id="_1-3-文件是否存在校验" tabindex="-1"><a class="header-anchor" href="#_1-3-文件是否存在校验"><span>1.3 文件是否存在校验</span></a></h6><ul><li>服务端根据文件 Hash 值、文件名，校验该文件是否已经上传</li></ul><h5 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h5><h6 id="_1、搭建基础项目" tabindex="-1"><a class="header-anchor" href="#_1、搭建基础项目"><span>1、搭建基础项目</span></a></h6><h6 id="服务器-基于-express" tabindex="-1"><a class="header-anchor" href="#服务器-基于-express"><span>服务器（基于 express）</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const express = require(&#39;express&#39;)</span></span>
<span class="line"><span>const app = express()</span></span>
<span class="line"><span>app.listen(3000, () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;服务已运行：http://localhost:3000&#39;);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h6><blockquote><p>基础页面</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta &gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        input{</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            margin: 10px 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;file&quot; id=&quot;file&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;button&quot; id=&quot;upload&quot; value=&quot;上传&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;button&quot; id=&quot;continue&quot; value=&quot;继续上传&quot;&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>引入资源</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot; src=&quot;./spark-md5.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;module&quot; src=&quot;./operate.js&quot;&gt;&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>operate.js</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 获取文件域</span></span>
<span class="line"><span>const fileEle = document.querySelector(&quot;#file&quot;);</span></span>
<span class="line"><span>const uploadButton = document.querySelector(&quot;#upload&quot;);</span></span>
<span class="line"><span>const continueButton = document.querySelector(&quot;#continue&quot;);</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async () =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;点击了上传按钮&quot;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>continueButton.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;点击了继续上传按钮&quot;)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、静态资源托管-server" tabindex="-1"><a class="header-anchor" href="#_3、静态资源托管-server"><span>3、静态资源托管（server）</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.use(express.static(&#39;static&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h6 id="_4、上传接口" tabindex="-1"><a class="header-anchor" href="#_4、上传接口"><span>4、上传接口</span></a></h6><h6 id="搭建上传接口-server" tabindex="-1"><a class="header-anchor" href="#搭建上传接口-server"><span>搭建上传接口（server）</span></a></h6><blockquote><p>使用 body-parser 中间价解析请求体</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 导入中间件</span></span>
<span class="line"><span>const bodyParser = require(&#39;body-parser&#39;)</span></span>
<span class="line"><span>// 使用中间件</span></span>
<span class="line"><span>// 处理URL编码格式的数据</span></span>
<span class="line"><span>app.use(bodyParser.urlencoded({ extended: false })); </span></span>
<span class="line"><span>// 处理JSON格式的数据</span></span>
<span class="line"><span>app.use(bodyParser.json());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上传接口</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.post(&#39;/upload&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &#39;上传成功&#39;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="测试接口-前端" tabindex="-1"><a class="header-anchor" href="#测试接口-前端"><span>测试接口（前端）</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 单个文件上传</span></span>
<span class="line"><span>const uploadHandler = async (file) =&gt; {</span></span>
<span class="line"><span>    fetch(&#39;http://localhost:3000/upload&#39;, {</span></span>
<span class="line"><span>        method: &quot;POST&quot;,</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        body: JSON.stringify({</span></span>
<span class="line"><span>            fileName: &#39;大文件&#39;,</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async (e) =&gt; {</span></span>
<span class="line"><span>    uploadHandler()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5、文件上传接口存储文件-server" tabindex="-1"><a class="header-anchor" href="#_5、文件上传接口存储文件-server"><span>5、文件上传接口存储文件（server）</span></a></h6><blockquote><p>使用 multer 中间件处理上传文件</p><blockquote><p>设置 <strong>uploadFiles</strong> 文件夹为文件存储路径</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const multer = require(&#39;multer&#39;)</span></span>
<span class="line"><span>const storage = multer.diskStorage({</span></span>
<span class="line"><span>    destination: function (req, file, cb) {</span></span>
<span class="line"><span>        cb(null, &#39;./uploadFiles&#39;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const upload = multer({</span></span>
<span class="line"><span>    storage</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.post(&#39;/upload&#39;, upload.single(&#39;file&#39;), (req, res) =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 单个文件上传</span></span>
<span class="line"><span>const uploadHandler = async (file) =&gt; {</span></span>
<span class="line"><span>    let fd = new FormData();</span></span>
<span class="line"><span>    fd.append(&#39;file&#39;, file);</span></span>
<span class="line"><span>    fetch(&#39;http://localhost:3000/upload&#39;, {</span></span>
<span class="line"><span>        method: &quot;POST&quot;,</span></span>
<span class="line"><span>        body: fd</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async () =&gt; {</span></span>
<span class="line"><span>    let file = fileEle.files[0];</span></span>
<span class="line"><span>    uploadHandler(file)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_6、文件切片" tabindex="-1"><a class="header-anchor" href="#_6、文件切片"><span>6、文件切片</span></a></h6><blockquote><p>注意</p><blockquote><p>假设切片大小为 1M 保存切片顺序（为了合成大文件时正确性） 上传状态（为了断点续传、前端显示进度条）</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 使用单独常量保存预设切片大小 1MB</span></span>
<span class="line"><span>const chunkSize = 1024 * 1024 * 1; </span></span>
<span class="line"><span>// 文件切片</span></span>
<span class="line"><span>const createChunks = (file) =&gt; {</span></span>
<span class="line"><span>    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组</span></span>
<span class="line"><span>    const chunks = [];</span></span>
<span class="line"><span>    // 文件大小.slice(开始位置,结束位置)</span></span>
<span class="line"><span>    let start = 0;</span></span>
<span class="line"><span>    let index = 0;</span></span>
<span class="line"><span>    while (start &lt; file.size) {</span></span>
<span class="line"><span>        let curChunk = file.slice(start, start + chunkSize);</span></span>
<span class="line"><span>        chunks.push({</span></span>
<span class="line"><span>            file: curChunk,</span></span>
<span class="line"><span>            uploaded: false,</span></span>
<span class="line"><span>            chunkIndex: index,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        index++;</span></span>
<span class="line"><span>        start += chunkSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return chunks;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试文件切片函数</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 存储当前文件所有切片</span></span>
<span class="line"><span>let chunks = [];</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async () =&gt; {</span></span>
<span class="line"><span>    let file = fileEle.files[0];</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    console.log(chunks);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：将来要把这些切片全部都上传到服务器，并且最后需要把这些切片合并成一个文件，且要做出文件秒传功能，需要保留当前文件的 hash 值和文件名，以辨别文件和合并文件。</p></blockquote><p>在页面中引入 spark-md5.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot; src=&quot;./spark-md5.js&quot;&gt;&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>获取文件 Hash 值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const getHash = (file) =&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>        const fileReader = new FileReader();</span></span>
<span class="line"><span>        fileReader.readAsArrayBuffer(file);</span></span>
<span class="line"><span>        fileReader.onload = function (e) {</span></span>
<span class="line"><span>            let fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);</span></span>
<span class="line"><span>            resolve(fileMd5);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把文件的 hash 值保存在切片信息中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 文件hash值</span></span>
<span class="line"><span>let fileHash = &quot;&quot;;</span></span>
<span class="line"><span>// 文件名</span></span>
<span class="line"><span>let fileName = &quot;&quot;;</span></span>
<span class="line"><span>// 创建切片数组</span></span>
<span class="line"><span>const createChunks = (file) =&gt; {</span></span>
<span class="line"><span>    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组</span></span>
<span class="line"><span>    const chunks = [];</span></span>
<span class="line"><span>    // 文件大小.slice(开始位置,结束位置)</span></span>
<span class="line"><span>    let start = 0;</span></span>
<span class="line"><span>    let index = 0;</span></span>
<span class="line"><span>    while (start &lt; file.size) {</span></span>
<span class="line"><span>        let curChunk = file.slice(start, start + chunkSize);</span></span>
<span class="line"><span>        chunks.push({</span></span>
<span class="line"><span>            file: curChunk,</span></span>
<span class="line"><span>            uploaded: false,</span></span>
<span class="line"><span>            fileHash: fileHash,</span></span>
<span class="line"><span>            chunkIndex: index,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        index++;</span></span>
<span class="line"><span>        start += chunkSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return chunks;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 上传执行函数</span></span>
<span class="line"><span>const uploadFile = async(file) =&gt; {</span></span>
<span class="line"><span>    // 设置文件名</span></span>
<span class="line"><span>    fileName = file.name;</span></span>
<span class="line"><span>    // 获取文件hash值</span></span>
<span class="line"><span>    fileHash = await getHash(file);</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    console.log(chunks);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7、上传逻辑修改" tabindex="-1"><a class="header-anchor" href="#_7、上传逻辑修改"><span>7、上传逻辑修改</span></a></h6><p>前端部分</p><blockquote><p>单个文件上传函数修改：</p><blockquote><p>插入文件名、文件 Hash 值、切片索引</p><p>上传成功之后修改状态标识（可用于断点续传、上传进度回显）</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 单个文件上传</span></span>
<span class="line"><span>const uploadHandler = (chunk) =&gt; {</span></span>
<span class="line"><span>    return new Promise(async (resolve, reject) =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            let fd = new FormData();</span></span>
<span class="line"><span>            fd.append(&#39;file&#39;, chunk.file);</span></span>
<span class="line"><span>            fd.append(&#39;fileHash&#39;, chunk.fileHash);</span></span>
<span class="line"><span>            fd.append(&#39;chunkIndex&#39;, chunk.chunkIndex);</span></span>
<span class="line"><span>            let result = await fetch(&#39;http://localhost:3000/upload&#39;, {</span></span>
<span class="line"><span>                method: &#39;POST&#39;,</span></span>
<span class="line"><span>                body: fd</span></span>
<span class="line"><span>            }).then(res =&gt; res.json());</span></span>
<span class="line"><span>            chunk.uploaded = true;</span></span>
<span class="line"><span>            resolve(result)</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            reject(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>批量上传切片</p><blockquote><p>限制并发数量（减轻服务器压力）</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 批量上传切片</span></span>
<span class="line"><span>const uploadChunks = (chunks, maxRequest = 6) =&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        if (chunks.length == 0) {</span></span>
<span class="line"><span>            resolve([]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let requestSliceArr = []</span></span>
<span class="line"><span>        let start = 0;</span></span>
<span class="line"><span>        while (start &lt; chunks.length) {</span></span>
<span class="line"><span>            requestSliceArr.push(chunks.slice(start, start + maxRequest))</span></span>
<span class="line"><span>            start += maxRequest;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let index = 0;</span></span>
<span class="line"><span>        let requestReaults = [];</span></span>
<span class="line"><span>        let requestErrReaults = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const request = async () =&gt; {</span></span>
<span class="line"><span>            if (index &gt; requestSliceArr.length - 1) {</span></span>
<span class="line"><span>                resolve(requestReaults)</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            let sliceChunks = requestSliceArr[index];</span></span>
<span class="line"><span>            Promise.all(</span></span>
<span class="line"><span>                sliceChunks.map(chunk =&gt; uploadHandler(chunk))</span></span>
<span class="line"><span>            ).then((res) =&gt; {</span></span>
<span class="line"><span>                requestReaults.push(...(Array.isArray(res) ? res : []))</span></span>
<span class="line"><span>                index++;</span></span>
<span class="line"><span>                request()</span></span>
<span class="line"><span>            }).catch((err) =&gt; {</span></span>
<span class="line"><span>                requestErrReaults.push(...(Array.isArray(err) ? err : []))</span></span>
<span class="line"><span>                reject(requestErrReaults)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        request()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>抽离上传操作</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 文件上传</span></span>
<span class="line"><span>const uploadFile = async (file) =&gt; {</span></span>
<span class="line"><span>    // 设置文件名</span></span>
<span class="line"><span>    fileName = file.name;</span></span>
<span class="line"><span>    // 获取文件hash值</span></span>
<span class="line"><span>    fileHash = await getHash(file);</span></span>
<span class="line"><span>    // 获取切片</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端部分</p><blockquote><p>修改上传接口，增加功能</p><blockquote><p>使用一个文件 Hash 值同名的文件夹保存所有切片</p><p>这里使用了 node 内置模块 path 处理路径</p><p>使用 fs-extra 第三方模块处理文件操作</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const fse = require(&#39;fs-extra&#39;)</span></span>
<span class="line"><span>app.post(&#39;/upload&#39;, upload.single(&#39;file&#39;), (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, chunkIndex } = req.body;</span></span>
<span class="line"><span>    // 上传文件临时目录文件夹</span></span>
<span class="line"><span>    let tempFileDir = path.resolve(&#39;uploadFiles&#39;, fileHash);</span></span>
<span class="line"><span>    // 如果当前文件的临时文件夹不存在，则创建该文件夹</span></span>
<span class="line"><span>    if (!fse.pathExistsSync(tempFileDir)) {</span></span>
<span class="line"><span>        fse.mkdirSync(tempFileDir)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 如果无临时文件夹或不存在该切片，则将用户上传的切片移到临时文件夹里</span></span>
<span class="line"><span>    // 如果有临时文件夹并存在该切片，则删除用户上传的切片（因为用不到了）</span></span>
<span class="line"><span>    // 目标切片位置</span></span>
<span class="line"><span>    const tempChunkPath = path.resolve(tempFileDir, chunkIndex);</span></span>
<span class="line"><span>    // 当前切片位置（multer默认保存的位置）</span></span>
<span class="line"><span>    let currentChunkPath = path.resolve(req.file.path);</span></span>
<span class="line"><span>    if (!fse.existsSync(tempChunkPath)) {</span></span>
<span class="line"><span>        fse.moveSync(currentChunkPath, tempChunkPath)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        fse.removeSync(currentChunkPath)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &#39;上传成功&#39;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_8、合并文件" tabindex="-1"><a class="header-anchor" href="#_8、合并文件"><span>8、合并文件</span></a></h6><p>编写合并接口（server）</p><blockquote><p>合并成的文件名为 <code>文件哈希值.文件扩展名</code></p><blockquote><p>所以需要传入文件 Hash 值、文件名</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.get(&#39;/merge&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: \`Hash：\${fileHash},文件名：\${fileName}\`,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求合并接口（前端）</p><blockquote><p>封装合并请求函数</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 合并分片请求</span></span>
<span class="line"><span>const mergeRequest = (fileHash, fileName) =&gt; {</span></span>
<span class="line"><span>    return fetch(\`http://localhost:3000/merge?fileHash=\${fileHash}&amp;fileName=\${fileName}\`, {</span></span>
<span class="line"><span>        method: &quot;GET&quot;,</span></span>
<span class="line"><span>    }).then(res =&gt; res.json());</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在切片上传完成后，调用合并接口</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 文件上传</span></span>
<span class="line"><span>const uploadFile = async (file) =&gt; {</span></span>
<span class="line"><span>    // 设置文件名</span></span>
<span class="line"><span>    fileName = file.name;</span></span>
<span class="line"><span>    // 获取文件hash值</span></span>
<span class="line"><span>    fileHash = await getHash(file);</span></span>
<span class="line"><span>    // 获取切片</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks)</span></span>
<span class="line"><span>        await mergeRequest(fileHash, fileName)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>合并接口逻辑</p><blockquote><p>1、根据文件 Hash 值，找到所有切片</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.get(&#39;/merge&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    // 最终合并的文件路径</span></span>
<span class="line"><span>    const filePath = path.resolve(&#39;uploadFiles&#39;, fileHash + path.extname(fileName));</span></span>
<span class="line"><span>    // 临时文件夹路径</span></span>
<span class="line"><span>    let tempFileDir = path.resolve(&#39;uploadFiles&#39;, fileHash);</span></span>
<span class="line"><span>    // 读取临时文件夹，获取所有切片</span></span>
<span class="line"><span>    const chunkPaths = fse.readdirSync(tempFileDir);</span></span>
<span class="line"><span>    console.log(&#39;chunkPaths：&#39;, chunkPaths);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &quot;合并成功&quot;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>合并接口逻辑</p><blockquote><p>2、遍历获取所有切片路径数组，根据路径找到切片，合并成一个文件，删除原有文件夹</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.get(&#39;/merge&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    // 最终合并的文件路径</span></span>
<span class="line"><span>    const filePath = path.resolve(&#39;uploadFiles&#39;, fileHash + path.extname(fileName));</span></span>
<span class="line"><span>    // 临时文件夹路径</span></span>
<span class="line"><span>    let tempFileDir = path.resolve(&#39;uploadFiles&#39;, fileHash);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 读取临时文件夹，获取所有切片</span></span>
<span class="line"><span>    const chunkPaths = fse.readdirSync(tempFileDir);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;chunkPaths：&#39;, chunkPaths);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将切片追加到文件中</span></span>
<span class="line"><span>    let mergeTasks = [];</span></span>
<span class="line"><span>    for (let index = 0; index &lt; chunkPaths.length; index++) {</span></span>
<span class="line"><span>        mergeTasks.push(new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>            // 当前遍历的切片路径</span></span>
<span class="line"><span>            const chunkPath = path.resolve(tempFileDir, index + &#39;&#39;);</span></span>
<span class="line"><span>            // 将当前遍历的切片切片追加到文件中</span></span>
<span class="line"><span>            fse.appendFileSync(filePath, fse.readFileSync(chunkPath));</span></span>
<span class="line"><span>            // 删除当前遍历的切片</span></span>
<span class="line"><span>            fse.unlinkSync(chunkPath);</span></span>
<span class="line"><span>            resolve();</span></span>
<span class="line"><span>        }))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    await Promise.all(mergeTasks);</span></span>
<span class="line"><span>    // 等待所有切片追加到文件后，删除临时文件夹</span></span>
<span class="line"><span>    fse.removeSync(tempFileDir);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &quot;合并成功&quot;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_10、断点续传" tabindex="-1"><a class="header-anchor" href="#_10、断点续传"><span>10、断点续传</span></a></h6><blockquote><p>封装<code>continueUpload</code>方法</p><blockquote><p>在<code>continueUpload</code>方法中，只上传 <code>uploaded</code> 为 false 的切片</p><p>修改后此功能对用户来说即是黑盒，用户只需要重复调用<code>continueUpload</code>方法即可</p></blockquote></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 文件上传</span></span>
<span class="line"><span>const continueUpload = async (file) =&gt; {</span></span>
<span class="line"><span>    if(chunks.length == 0 || !fileHash || !fileName){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks.filter(chunk =&gt; !chunk.uploaded))</span></span>
<span class="line"><span>        await mergeRequest(fileHash, fileName)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、大文件秒传" tabindex="-1"><a class="header-anchor" href="#_2、大文件秒传"><span>2、大文件秒传</span></a></h4><h5 id="逻辑梗概-1" tabindex="-1"><a class="header-anchor" href="#逻辑梗概-1"><span>逻辑梗概</span></a></h5><ul><li>客户端上传文件时，先提交文件的哈希值，</li><li>服务端根据哈希值查询文件是否已经上传，如果已上传，则直接返回已上传状态</li><li>客户端收到已上传状态后，直接跳过上传过程</li></ul><h5 id="优势分析-1" tabindex="-1"><a class="header-anchor" href="#优势分析-1"><span>优势分析</span></a></h5><ul><li>提高上传效率：秒传可以提高上传效率，因为文件已经在上传过程中被上传过了，直接返回已上传状态，省要再次上传，提高效率。</li></ul><h5 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1"><span>代码实现</span></a></h5><h6 id="校验接口-校验是否已经存在目标文件" tabindex="-1"><a class="header-anchor" href="#校验接口-校验是否已经存在目标文件"><span>校验接口，校验是否已经存在目标文件</span></a></h6><blockquote><p>逻辑：根据文件 Hash 值和文件名组成 “文件 Hash. 文件扩展名” ，以保证文件名唯一</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.get(&#39;/verify&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    const filePath = path.resolve(&#39;uploadFiles&#39;, fileHash + path.extname(fileName));</span></span>
<span class="line"><span>    const exitFile = fse.pathExistsSync(filePath);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        exitFile</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>校验函数</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 校验文件、文件分片是否存在</span></span>
<span class="line"><span>const verify = (fileHash, fileName) =&gt; {</span></span>
<span class="line"><span>    return fetch(\`http://localhost:3000/verify?fileHash=\${fileHash}&amp;fileName=\${fileName}\`, {</span></span>
<span class="line"><span>        method: &quot;GET&quot;,</span></span>
<span class="line"><span>    }).then(res =&gt; res.json());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件上传</span></span>
<span class="line"><span>const uploadFile = async (file) =&gt; {</span></span>
<span class="line"><span>    // 设置文件名</span></span>
<span class="line"><span>    fileName = file.name;</span></span>
<span class="line"><span>    // 获取文件hash值</span></span>
<span class="line"><span>    fileHash = await getHash(file);</span></span>
<span class="line"><span>    // 校验是否已经上传该文件</span></span>
<span class="line"><span>    let { exitFile } = await verify(fileHash, fileName);</span></span>
<span class="line"><span>    if (exitFile) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件已上传&quot;,</span></span>
<span class="line"><span>            success: true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 获取切片</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks.filter(chunk =&gt; !chunk.uploaded))</span></span>
<span class="line"><span>        await mergeRequest(fileHash, fileName)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、提取为公共方法" tabindex="-1"><a class="header-anchor" href="#_3、提取为公共方法"><span>3、提取为公共方法</span></a></h4><p>封装</p><blockquote><p>编写 <strong>bigFileUpload.js</strong> 文件，暴露<code>uploadFile</code>和<code>continueUpload</code></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// bigFileUpload.js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    uploadFile,</span></span>
<span class="line"><span>    continueUpload</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><blockquote><p>导入资源并调用</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import bigUpload from &#39;./bigFileUpload.js&#39;</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async () =&gt; {</span></span>
<span class="line"><span>    let file = fileEle.files[0];</span></span>
<span class="line"><span>    bigUpload.uploadFile(file)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>continueButton.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    bigUpload.continueUpload()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、可优化" tabindex="-1"><a class="header-anchor" href="#_4、可优化"><span>4、可优化</span></a></h4><blockquote><p>前端：</p><blockquote><p>封装形式可优化，采用类的方式封装，以保证数据的独立性、可定制性</p><p>切片 Hash 的计算可以通过抽样切片的方式来进行</p><p>...</p></blockquote><p>后端：</p><blockquote><p>文件 Hash 校验可增加用户 ip 地址以保证文件唯一性</p><p>待合并项可定时删除</p><p>...</p></blockquote></blockquote><p>欢迎大家补充！</p><h4 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h4><p><a href="https://link.juejin.cn?target=http%3A%2F%2Fexpressjs.jser.us%2F" title="http://expressjs.jser.us/" target="_blank" rel="noopener noreferrer">express</a></p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fbody-parser" title="https://www.npmjs.com/package/body-parser" target="_blank" rel="noopener noreferrer">body-parser</a></p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmulter" title="https://www.npmjs.com/package/multer" target="_blank" rel="noopener noreferrer">multer</a></p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FBlob%2Fslice" title="https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/slice" target="_blank" rel="noopener noreferrer">Blob-slice</a></p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fsatazor%2Fjs-spark-md5%3Ftab%3Dreadme-ov-file%23readme" title="https://github.com/satazor/js-spark-md5?tab=readme-ov-file#readme" target="_blank" rel="noopener noreferrer">spark-md5</a></p><h4 id="代码放在最后" tabindex="-1"><a class="header-anchor" href="#代码放在最后"><span>代码放在最后</span></a></h4><blockquote><p>项目结构</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>- static</span></span>
<span class="line"><span>    -- js</span></span>
<span class="line"><span>        ---bigFileUpload.js</span></span>
<span class="line"><span>        ---operate.js</span></span>
<span class="line"><span>        ---spark-md5.js</span></span>
<span class="line"><span>    -- index.html</span></span>
<span class="line"><span>- uploadFiles</span></span>
<span class="line"><span>- app.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>后端服务</p></blockquote><ul><li>app.js</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const express = require(&#39;express&#39;)</span></span>
<span class="line"><span>const multer = require(&#39;multer&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const fse = require(&#39;fs-extra&#39;)</span></span>
<span class="line"><span>const app = express()</span></span>
<span class="line"><span>app.use(express.static(&#39;static&#39;))</span></span>
<span class="line"><span>// 导入中间件</span></span>
<span class="line"><span>const bodyParser = require(&#39;body-parser&#39;)</span></span>
<span class="line"><span>// 使用中间件</span></span>
<span class="line"><span>// 处理URL编码格式的数据</span></span>
<span class="line"><span>app.use(bodyParser.urlencoded({ extended: false })); </span></span>
<span class="line"><span>// 处理JSON格式的数据</span></span>
<span class="line"><span>app.use(bodyParser.json()); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>const storage = multer.diskStorage({</span></span>
<span class="line"><span>    destination: function (req, file, cb) {</span></span>
<span class="line"><span>        cb(null, &#39;./uploadFiles&#39;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const upload = multer({</span></span>
<span class="line"><span>    storage</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.post(&#39;/upload&#39;, upload.single(&#39;file&#39;), (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, chunkIndex } = req.body;</span></span>
<span class="line"><span>    // 上传文件临时目录文件夹</span></span>
<span class="line"><span>    let tempFileDir = path.resolve(&#39;uploadFiles&#39;, fileHash);</span></span>
<span class="line"><span>    // 如果当前文件的临时文件夹不存在，则创建该文件夹</span></span>
<span class="line"><span>    if (!fse.pathExistsSync(tempFileDir)) {</span></span>
<span class="line"><span>        fse.mkdirSync(tempFileDir)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 如果无临时文件夹或不存在该切片，则将用户上传的切片移到临时文件夹里</span></span>
<span class="line"><span>    // 如果有临时文件夹并存在该切片，则删除用户上传的切片（因为用不到了）</span></span>
<span class="line"><span>    // 目标切片位置</span></span>
<span class="line"><span>    const tempChunkPath = path.resolve(tempFileDir, chunkIndex);</span></span>
<span class="line"><span>    // 当前切片位置（multer默认保存的位置）</span></span>
<span class="line"><span>    let currentChunkPath = path.resolve(req.file.path);</span></span>
<span class="line"><span>    if (!fse.existsSync(tempChunkPath)) {</span></span>
<span class="line"><span>        fse.moveSync(currentChunkPath, tempChunkPath)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        fse.removeSync(currentChunkPath)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &#39;上传成功&#39;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&#39;/merge&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    // 最终合并的文件路径</span></span>
<span class="line"><span>    const filePath = path.resolve(&#39;uploadFiles&#39;, fileHash + path.extname(fileName));</span></span>
<span class="line"><span>    // 临时文件夹路径</span></span>
<span class="line"><span>    let tempFileDir = path.resolve(&#39;uploadFiles&#39;, fileHash);</span></span>
<span class="line"><span>    // 读取临时文件夹，获取所有切片</span></span>
<span class="line"><span>    const chunkPaths = fse.readdirSync(tempFileDir);</span></span>
<span class="line"><span>    // 将切片追加到文件中</span></span>
<span class="line"><span>    let mergeTasks = [];</span></span>
<span class="line"><span>    for (let index = 0; index &lt; chunkPaths.length; index++) {</span></span>
<span class="line"><span>        mergeTasks.push(new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>            // 当前遍历的切片路径</span></span>
<span class="line"><span>            const chunkPath = path.resolve(tempFileDir, index + &#39;&#39;);</span></span>
<span class="line"><span>            // 将当前遍历的切片切片追加到文件中</span></span>
<span class="line"><span>            fse.appendFileSync(filePath, fse.readFileSync(chunkPath));</span></span>
<span class="line"><span>            // 删除当前遍历的切片</span></span>
<span class="line"><span>            fse.unlinkSync(chunkPath);</span></span>
<span class="line"><span>            resolve();</span></span>
<span class="line"><span>        }))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    await Promise.all(mergeTasks);</span></span>
<span class="line"><span>    // 等待所有切片追加到文件后，删除临时文件夹</span></span>
<span class="line"><span>    fse.removeSync(tempFileDir);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        msg: &quot;合并成功&quot;,</span></span>
<span class="line"><span>        success: true</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>app.get(&#39;/verify&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    const { fileHash, fileName } = req.query;</span></span>
<span class="line"><span>    const filePath = path.resolve(&#39;uploadFiles&#39;, fileHash + path.extname(fileName));</span></span>
<span class="line"><span>    const exitFile = fse.pathExistsSync(filePath);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        exitFile</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>app.listen(3000, () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;服务已运行：http://localhost:3000&#39;);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>前端业务</p></blockquote><ul><li>页面 index.html</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta &gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        input{</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            margin: 10px 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;module&quot; src=&quot;./js/spark-md5.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;module&quot; src=&quot;./js/operate.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;file&quot; id=&quot;file&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;button&quot; id=&quot;upload&quot; value=&quot;上传&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;button&quot; id=&quot;continue&quot; value=&quot;继续上传&quot;&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>bigFileUpload.js</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 存储当前文件所有切片</span></span>
<span class="line"><span>let chunks = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件hash值</span></span>
<span class="line"><span>let fileHash = &quot;&quot;;</span></span>
<span class="line"><span>// 文件名</span></span>
<span class="line"><span>let fileName = &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用单独常量保存预设切片大小 1MB</span></span>
<span class="line"><span>const chunkSize = 1024 * 10;</span></span>
<span class="line"><span>// 创建切片数组</span></span>
<span class="line"><span>const createChunks = (file) =&gt; {</span></span>
<span class="line"><span>    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组</span></span>
<span class="line"><span>    const chunks = [];</span></span>
<span class="line"><span>    // 文件大小.slice(开始位置,结束位置)</span></span>
<span class="line"><span>    let start = 0;</span></span>
<span class="line"><span>    let index = 0;</span></span>
<span class="line"><span>    while (start &lt; file.size) {</span></span>
<span class="line"><span>        let curChunk = file.slice(start, start + chunkSize);</span></span>
<span class="line"><span>        chunks.push({</span></span>
<span class="line"><span>            file: curChunk,</span></span>
<span class="line"><span>            uploaded: false,</span></span>
<span class="line"><span>            fileHash: fileHash,</span></span>
<span class="line"><span>            chunkIndex: index,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        index++;</span></span>
<span class="line"><span>        start += chunkSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return chunks;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 获取Hash值</span></span>
<span class="line"><span>const getHash = (file) =&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>        const fileReader = new FileReader();</span></span>
<span class="line"><span>        fileReader.readAsArrayBuffer(file);</span></span>
<span class="line"><span>        fileReader.onload = function (e) {</span></span>
<span class="line"><span>            let fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);</span></span>
<span class="line"><span>            resolve(fileMd5);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 校验文件、文件分片是否存在</span></span>
<span class="line"><span>const verify = (fileHash, fileName) =&gt; {</span></span>
<span class="line"><span>    return fetch(\`http://localhost:3000/verify?fileHash=\${fileHash}&amp;fileName=\${fileName}\`, {</span></span>
<span class="line"><span>        method: &quot;GET&quot;,</span></span>
<span class="line"><span>    }).then(res =&gt; res.json());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 单个文件上传</span></span>
<span class="line"><span>const uploadHandler = (chunk) =&gt; {</span></span>
<span class="line"><span>    return new Promise(async (resolve, reject) =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            let fd = new FormData();</span></span>
<span class="line"><span>            fd.append(&#39;file&#39;, chunk.file);</span></span>
<span class="line"><span>            fd.append(&#39;fileHash&#39;, chunk.fileHash);</span></span>
<span class="line"><span>            fd.append(&#39;chunkIndex&#39;, chunk.chunkIndex);</span></span>
<span class="line"><span>            let result = await fetch(&#39;http://localhost:3000/upload&#39;, {</span></span>
<span class="line"><span>                method: &#39;POST&#39;,</span></span>
<span class="line"><span>                body: fd</span></span>
<span class="line"><span>            }).then(res =&gt; res.json());</span></span>
<span class="line"><span>            chunk.uploaded = true;</span></span>
<span class="line"><span>            resolve(result)</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            reject(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 批量上传切片</span></span>
<span class="line"><span>const uploadChunks = (chunks, maxRequest = 6) =&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        if (chunks.length == 0) {</span></span>
<span class="line"><span>            resolve([]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let requestSliceArr = []</span></span>
<span class="line"><span>        let start = 0;</span></span>
<span class="line"><span>        while (start &lt; chunks.length) {</span></span>
<span class="line"><span>            requestSliceArr.push(chunks.slice(start, start + maxRequest))</span></span>
<span class="line"><span>            start += maxRequest;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let index = 0;</span></span>
<span class="line"><span>        let requestReaults = [];</span></span>
<span class="line"><span>        let requestErrReaults = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const request = async () =&gt; {</span></span>
<span class="line"><span>            if (index &gt; requestSliceArr.length - 1) {</span></span>
<span class="line"><span>                resolve(requestReaults)</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            let sliceChunks = requestSliceArr[index];</span></span>
<span class="line"><span>            Promise.all(</span></span>
<span class="line"><span>                sliceChunks.map(chunk =&gt; uploadHandler(chunk))</span></span>
<span class="line"><span>            ).then((res) =&gt; {</span></span>
<span class="line"><span>                requestReaults.push(...(Array.isArray(res) ? res : []))</span></span>
<span class="line"><span>                index++;</span></span>
<span class="line"><span>                request()</span></span>
<span class="line"><span>            }).catch((err) =&gt; {</span></span>
<span class="line"><span>                requestErrReaults.push(...(Array.isArray(err) ? err : []))</span></span>
<span class="line"><span>                reject(requestErrReaults)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        request()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 上传文件</span></span>
<span class="line"><span>const uploadFile = async (file) =&gt; {</span></span>
<span class="line"><span>    // 设置文件名</span></span>
<span class="line"><span>    fileName = file.name;</span></span>
<span class="line"><span>    // 获取文件hash值</span></span>
<span class="line"><span>    fileHash = await getHash(file);</span></span>
<span class="line"><span>    // 校验是否已经上传该文件</span></span>
<span class="line"><span>    let { exitFile } = await verify(fileHash, fileName);</span></span>
<span class="line"><span>    if (exitFile) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件已上传&quot;,</span></span>
<span class="line"><span>            success: true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 获取切片</span></span>
<span class="line"><span>    chunks = createChunks(file);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks.filter(chunk =&gt; !chunk.uploaded))</span></span>
<span class="line"><span>        await mergeRequest(fileHash, fileName)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 文件续传</span></span>
<span class="line"><span>const continueUpload = async (file) =&gt; {</span></span>
<span class="line"><span>    if (chunks.length == 0 || !fileHash || !fileName) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        await uploadChunks(chunks.filter(chunk =&gt; !chunk.uploaded))</span></span>
<span class="line"><span>        await mergeRequest(fileHash, fileName)</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mag: &quot;文件上传错误&quot;,</span></span>
<span class="line"><span>            success: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 合并分片请求</span></span>
<span class="line"><span>const mergeRequest = (fileHash, fileName) =&gt; {</span></span>
<span class="line"><span>    return fetch(\`http://localhost:3000/merge?fileHash=\${fileHash}&amp;fileName=\${fileName}\`, {</span></span>
<span class="line"><span>        method: &quot;GET&quot;,</span></span>
<span class="line"><span>    }).then(res =&gt; res.json());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// bigFileUpload.js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    uploadFile,</span></span>
<span class="line"><span>    continueUpload</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>operate.js</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 获取文件域</span></span>
<span class="line"><span>const fileEle = document.querySelector(&quot;#file&quot;);</span></span>
<span class="line"><span>const uploadButton = document.querySelector(&quot;#upload&quot;);</span></span>
<span class="line"><span>const continueButton = document.querySelector(&quot;#continue&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import bigUpload from &#39;./bigFileUpload.js&#39;</span></span>
<span class="line"><span>uploadButton.addEventListener(&quot;click&quot;, async () =&gt; {</span></span>
<span class="line"><span>    let file = fileEle.files[0];</span></span>
<span class="line"><span>    bigUpload.uploadFile(file)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>continueButton.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    bigUpload.continueUpload()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,132),p=[l];function d(c,r){return a(),n("div",null,p)}const u=s(i,[["render",d],["__file","大文件上传优化切片断点续传秒传前后端demo.html.vue"]]),o=JSON.parse('{"path":"/study/4.%E7%AC%94%E8%AE%B0/%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%BC%98%E5%8C%96%E5%88%87%E7%89%87%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E7%A7%92%E4%BC%A0%E5%89%8D%E5%90%8E%E7%AB%AFdemo.html","title":"大文件上传优化切片断点续传秒传前后端demo","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-02-11T00:00:00.000Z","category":["Node.js"],"tag":["Node.js","Express","大文件文件上传"],"description":"大文件上传优化切片断点续传秒传前后端demo 大文件上传（具体代码在最后） 前景提要 在工作中，经常会遇到上传文件的功能，但是当文件体积大时，如果使用把该文件直接在一个请求体中提交，会出现一些问题，以 nginx 为例： 其默认允许 1MB 以内的文件 超过 1MB 的文件，需要设置client_max_body_size放开体积限制 但是这样会存在一...","head":[["meta",{"property":"og:url","content":"https://github.com/tommmmya/Tommya-Blog/study/4.%E7%AC%94%E8%AE%B0/%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%BC%98%E5%8C%96%E5%88%87%E7%89%87%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E7%A7%92%E4%BC%A0%E5%89%8D%E5%90%8E%E7%AB%AFdemo.html"}],["meta",{"property":"og:site_name","content":"Tommya 个人博客"}],["meta",{"property":"og:title","content":"大文件上传优化切片断点续传秒传前后端demo"}],["meta",{"property":"og:description","content":"大文件上传优化切片断点续传秒传前后端demo 大文件上传（具体代码在最后） 前景提要 在工作中，经常会遇到上传文件的功能，但是当文件体积大时，如果使用把该文件直接在一个请求体中提交，会出现一些问题，以 nginx 为例： 其默认允许 1MB 以内的文件 超过 1MB 的文件，需要设置client_max_body_size放开体积限制 但是这样会存在一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T02:23:55.000Z"}],["meta",{"property":"article:author","content":"Mr.Tommya"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"Express"}],["meta",{"property":"article:tag","content":"大文件文件上传"}],["meta",{"property":"article:published_time","content":"2024-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T02:23:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大文件上传优化切片断点续传秒传前后端demo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T02:23:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Tommya\\",\\"url\\":\\"https://github.com/tommmmya\\"}]}"]]},"headers":[{"level":3,"title":"大文件上传（具体代码在最后）","slug":"大文件上传-具体代码在最后","link":"#大文件上传-具体代码在最后","children":[]}],"git":{"createdTime":1728989573000,"updatedTime":1729218235000,"contributors":[{"name":"tangmao02","email":"tangmao02@meituan.com","commits":1}]},"readingTime":{"minutes":14.02,"words":4205},"filePathRelative":"study/4.笔记/大文件上传优化切片断点续传秒传前后端demo.md","localizedDate":"2024年2月11日","excerpt":"\\n<h3>大文件上传（具体代码在最后）</h3>\\n<h4>前景提要</h4>\\n<p>在工作中，经常会遇到上传文件的功能，但是当文件体积大时，如果使用把该文件直接在一个请求体中提交，会出现一些问题，以 nginx 为例：</p>\\n<ul>\\n<li>其默认允许 1MB 以内的文件</li>\\n<li>超过 1MB 的文件，需要设置<code>client_max_body_size</code>放开体积限制</li>\\n</ul>\\n<p>但是这样会存在一个问题，就是如果上传的文件体积很大，就会出现一些问题，最明显的问题是：</p>\\n<blockquote>\\n<p>服务器的存储和网络带宽压力都会非常大</p>\\n</blockquote>","autoDesc":true}');export{u as comp,o as data};
