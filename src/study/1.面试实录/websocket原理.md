---
icon: pen-to-square
date: 2024-09-25
category:
  - 面试实录
tag:
  - http
  - websocket
---
# websocket原理


> 因为项目中使用到了 WebSocket ，面试官在深挖项目经验的时候提到了这方面的技术，所以就此整理下相关知识，以备后续面试使用。

* * *

一、前言
---------------

二、什么是 WebSocket
---------------

WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。

在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。（维基百科）

WebSocket 本质上一种`计算机网络应用层的协议`，用来弥补 http 协议在持久通信能力上的不足。

WebSocket 协议在 2008 年诞生，2011 年成为国际标准。现在最新版本浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于[服务器推送技术](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPush_technology "https://en.wikipedia.org/wiki/Push_technology")的一种。

WebSocket 的其他特点包括：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。

```
ws://example.com:80/some/path
```

![][img-0]

### 为什么需要 WebSocket？

我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？

因为 HTTP 协议有一个缺陷：通信只能由客户端发起，不具备服务器推送能力。

举例来说，我们想了解查询今天的实时数据，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。

![][img-1]

这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用 ["轮询"](https://link.juejin.cn/?target=https%3A%2F%2Fwww.pubnub.com%2Fblog%2F2014-12-01-http-long-polling%2F "https://www.pubnub.com/blog/2014-12-01-http-long-polling/")：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。

在 WebSocket 协议出现以前，创建一个和服务端进双通道通信的 web 应用，需要依赖 HTTP 协议，进行不停的轮询，这会导致一些问题：

*   服务端被迫维持来自每个客户端的大量不同的连接
*   大量的轮询请求会造成高开销，比如会带上多余的 header，造成了无用的数据传输。

http 协议本身是没有持久通信能力的，但是我们在实际的应用中，是很需要这种能力的，所以，为了解决这些问题，WebSocket 协议由此而生，于 2011 年被 IETF 定为标准 RFC6455，并被 RFC7936 所补充规范。

并且在 HTML5 标准中增加了有关 WebSocket 协议的相关 api，所以只要实现了 HTML5 标准的客户端，就可以与支持 WebSocket 协议的服务器进行全双工的持久通信了。

### WebSocket 与 HTTP 的区别

WebSocket 与 HTTP 的关系图：

![][img-2]

**相同点：** 都是一样基于 TCP 的，都是可靠性传输协议。都是应用层协议。

**联系：** WebSocket 在建立握手时，数据是通过 HTTP 传输的。但是建立之后，在真正传输时候是不需要 HTTP 协议的。

下面一张图说明了 HTTP 与 WebSocket 的主要区别：

![][img-3]

1、WebSocket 是双向通信协议，模拟 Socket 协议，可以双向发送或接受信息，而 HTTP 是单向的； 2、WebSocket 是需要浏览器和服务器握手进行建立连接的，而 http 是浏览器发起向服务器的连接。

注意：虽然 HTTP/2 也具备服务器推送功能，但 HTTP/2 只能推送静态资源，无法推送指定的信息。

三、WebSocket 协议的原理
-----------------

与 http 协议一样，WebSocket 协议也需要通过已建立的 TCP 连接来传输数据。具体实现上是通过 http 协议建立通道，然后在此基础上用真正的 WebSocket 协议进行通信，所以 WebSocket 协议和 http 协议是有一定的交叉关系的。

首先，WebSocket 是一个持久化的协议，相对于 HTTP 这种非持久的协议来说。简单的举个例子吧，用目前应用比较广泛的 PHP 生命周期来解释。

HTTP 的生命周期通过 Request 来界定，也就是一个 Request 一个 Response ，那么在 HTTP1.0 中，这次 HTTP 请求就结束了。

在 HTTP1.1 中进行了改进，使得有一个 keep-alive，也就是说，在一个 HTTP 连接中，可以发送多个 Request，接收多个 Response。但是请记住 Request = Response， 在 HTTP 中永远是这样，也就是说一个 Request 只能有一个 Response。而且这个 Response 也是被动的，不能主动发起。

首先 WebSocket 是基于 HTTP 协议的，或者说借用了 HTTP 协议来完成一部分握手。

首先我们来看个典型的 WebSocket 握手

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

熟悉 HTTP 的童鞋可能发现了，这段类似 HTTP 协议的握手请求中，多了这么几个东西。

```
Upgrade: websocket
Connection: Upgrade
```

这个就是 WebSocket 的核心了，告诉 Apache 、 Nginx 等服务器：注意啦，我发起的请求要用 WebSocket 协议，快点帮我找到对应的助理处理~ 而不是那个老土的 HTTP。

```
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

首先， Sec-WebSocket-Key 是一个 Base64 encode 的值，这个是浏览器随机生成的，告诉服务器：泥煤，不要忽悠我，我要验证你是不是真的是 WebSocket 助理。

然后， Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同 URL 下，不同的服务所需要的协议。简单理解：今晚我要服务 A，别搞错啦~

最后， Sec-WebSocket-Version 是告诉服务器所使用的 WebSocket Draft （协议版本），在最初的时候，WebSocket 协议还在 Draft 阶段，各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么 Firefox 和 Chrome 用的不是一个版本之类的，当初 WebSocket 协议太多可是一个大难题。。不过现在还好，已经定下来啦~ 大家都使用同一个版本： 服务员，我要的是 13 岁的噢→_→

然后服务器会返回下列东西，表示已经接受到请求， 成功建立 WebSocket 啦！

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

这里开始就是 HTTP 最后负责的区域了，告诉客户，我已经成功切换协议啦~

```
Upgrade: websocket
Connection: Upgrade
```

依然是固定的，告诉客户端即将升级的是 WebSocket 协议，而不是 mozillasocket，lurnarsocket 或者 shitsocket。

然后， Sec-WebSocket-Accept 这个则是经过服务器确认，并且加密过后的 Sec-WebSocket-Key 。 服务器：好啦好啦，知道啦，给你看我的 ID CARD 来证明行了吧。

后面的， Sec-WebSocket-Protocol 则是表示最终使用的协议。

至此，HTTP 已经完成它所有工作了，接下来就是完全按照 WebSocket 协议进行了。

总结，**WebSocket 连接的过程是：**

首先，客户端发起 http 请求，经过 3 次握手后，建立起 TCP 连接；http 请求里存放 WebSocket 支持的版本号等信息，如：Upgrade、Connection、WebSocket-Version 等；

然后，服务器收到客户端的握手请求后，同样采用 HTTP 协议回馈数据；

最后，客户端收到连接成功的消息后，开始借助于 TCP 传输信道进行全双工通信。

四、Websocket 的优缺点
----------------

**优点：**

*   WebSocket 协议一旦建议后，互相沟通所消耗的请求头是很小的
*   服务器可以向客户端推送消息了

**缺点：**

*   少部分浏览器不支持，浏览器支持的程度与方式有区别（IE10）

五、[WebSocket 应用场景](https://link.juejin.cn/?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fwww.qcloud.com%2Fcommunity%2Farticle%2F164816001481011826%253FfromSource%253Dgwzcw.93406.93406.93406 "https://link.zhihu.com/?target=https%3A//www.qcloud.com/community/article/164816001481011826%3FfromSource%3Dgwzcw.93406.93406.93406")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   即时聊天通信
*   多玩家游戏
*   在线协同编辑 / 编辑
*   实时数据流的拉取与推送
*   体育 / 游戏实况
*   实时地图位置
*   即时`Web`应用程序：即时`Web`应用程序使用一个`Web`套接字在客户端显示数据，这些数据由后端服务器连续发送。在`WebSocke`t 中，数据被连续推送 / 传输到已经打开的同一连接中，这就是为什么`WebSocket`更快并提高了应用程序性能的原因。 例如在交易网站或比特币交易中，这是最不稳定的事情，它用于显示价格波动，数据被后端服务器使用 Web 套接字通道连续推送到客户端。
*   游戏应用程序：在游戏应用程序中，你可能会注意到，服务器会持续接收数据，而不会刷新用户界面。屏幕上的用户界面会自动刷新，而且不需要建立新的连接，因此在`WebSocket`游戏应用程序中非常有帮助。
*   聊天应用程序：聊天应用程序仅使用`WebSocket`建立一次连接，便能在订阅户之间交换，发布和广播消息。它重复使用相同的`WebSocket`连接，用于发送和接收消息以及一对一的消息传输。

### 不能使用 WebSocket 的场景

如果我们需要通过网络传输的任何实时更新或连续数据流，则可以使用`WebSocket`。如果我们要获取旧数据，或者只想获取一次数据供应用程序使用，则应该使用`HTTP`协议，不需要很频繁或仅获取一次的数据可以通过简单的`HTTP`请求查询，因此在这种情况下最好不要使用`WebSocket`。

注意：如果仅加载一次数据，则`RESTful` `Web`服务足以从服务器获取数据。

六、websocket 断线重连
----------------

心跳就是客户端定时的给服务端发送消息，证明客户端是在线的， 如果超过一定的时间没有发送则就是离线了。

### 如何判断在线离线？

当客户端第一次发送请求至服务端时会携带唯一标识、以及时间戳，服务端到 db 或者缓存去查询改请求的唯一标识，如果不存在就存入 db 或者缓存中，

第二次客户端定时再次发送请求依旧携带唯一标识、以及时间戳，服务端到 db 或者缓存去查询改请求的唯一标识，如果存在就把上次的时间戳拿取出来，使用当前时间戳减去上次的时间，

得出的毫秒秒数判断是否大于指定的时间，若小于的话就是在线，否则就是离线；

### 如何解决断线问题

通过查阅资料了解到 nginx 代理的 websocket 转发，无消息连接会出现超时断开问题。网上资料提到解决方案两种，一种是修改 nginx 配置信息，第二种是 websocket 发送心跳包。

下面就来总结一下本次项目实践中解决的 websocket 的断线 和 重连 这两个问题的解决方案。

主动触发包括主动断开连接，客户端主动发送消息给后端

1.  主动断开连接

```
ws.close();
```

主动断开连接，根据需要使用，基本很少用到。

2.  主动发送消息

```
ws.send("hello world");
```

针对 websocket 断线我们来分析一下，

*   断线的可能原因 1：websocket 超时没有消息自动断开连接，应对措施：
    
    这时候我们就需要知道服务端设置的超时时长是多少，在小于超时时间内发送心跳包，有 2 中方案: 一种是客户端主动发送上行心跳包，另一种方案是服务端主动发送下行心跳包。
    
    下面主要讲一下客户端也就是前端如何实现心跳包：
    
    首先了解一下心跳包机制
    
    跳包之所以叫心跳包是因为：它像心跳一样每隔固定时间发一次，以此来告诉服务器，这个客户端还活着。事实上这是为了保持长连接，至于这个包的内容，是没有什么特别规定的，不过一般都是很小的包，或者只包含包头的一个空包。
    
    在 TCP 的机制里面，本身是存在有心跳包的机制的，也就是 TCP 的选项：SO_KEEPALIVE。系统默认是设置的 2 小时的心跳频率。但是它检查不到机器断电、网线拔出、防火墙这些断线。而且逻辑层处理断线可能也不是那么好处理。一般，如果只是用于保活还是可以的。
    
    心跳包一般来说都是在逻辑层发送空的 echo 包来实现的。`下一个定时器，在一定时间间隔下发送一个空包给客户端，然后客户端反馈一个同样的空包回来，服务器如果在一定时间内收不到客户端发送过来的反馈包，那就只有认定说掉线了。`
    
    在长连接下，有可能很长一段时间都没有数据往来。理论上说，这个连接是一直保持连接的，但是实际情况中，如果中间节点出现什么故障是难以知道的。更要命的是，有的节点 (防火墙) 会自动把一定时间之内没有数据交互的连接给断掉。在这个时候，就需要我们的心跳包了，用于维持长连接，保活。
    
    心跳检测步骤：
    
    1.  客户端每隔一个时间间隔发生一个探测包给服务器
    2.  客户端发包时启动一个超时定时器
    3.  服务器端接收到检测包，应该回应一个包
    4.  如果客户机收到服务器的应答包，则说明服务器正常，删除超时定时器
    5.  如果客户端的超时定时器超时，依然没有收到应答包，则说明服务器挂了
    
    ```
    // 前端解决方案：心跳检测
    var heartCheck = {
        timeout: 30000, //30秒发一次心跳
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function(){
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            return this;
        },
        start: function(){
            var self = this;
            this.timeoutObj = setTimeout(function(){
                //这里发送一个心跳，后端收到后，返回一个心跳消息，
                //onmessage拿到返回的心跳就说明连接正常
                ws.send("ping");
                console.log("ping!")
    
                self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
                    ws.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                }, self.timeout);
            }, this.timeout);
        }
    }
    ```
    
*   断线的可能原因 2：websocket 异常包括服务端出现中断，交互切屏等等客户端异常中断等等
    
    当若服务端宕机了，客户端怎么做、服务端再次上线时怎么做？
    
    客户端则需要断开连接，通过 onclose 关闭连接，服务端再次上线时则需要清除之间存的数据，若不清除 则会造成只要请求到服务端的都会被视为离线。
    
    针对这种异常的中断解决方案就是处理重连，下面我们给出的重连方案是使用 js 库处理：引入 reconnecting-websocket.min.js，ws 建立链接方法使用 js 库 api 方法：
    
    ```
    var ws = new ReconnectingWebSocket(url);
    // 断线重连：
    reconnectSocket(){
        if ('ws' in window) {
            ws = new ReconnectingWebSocket(url);
        } else if ('MozWebSocket' in window) {
           ws = new MozWebSocket(url);
        } else {
          ws = new SockJS(url);
        }
    }
    ```
    
    断网监测支持使用 js 库：offline.min.js
    
    ```
    onLineCheck(){
        Offline.check();
        console.log(Offline.state,'---Offline.state');
        console.log(this.socketStatus,'---this.socketStatus');
    
        if(!this.socketStatus){
            console.log('网络连接已断开！');
            if(Offline.state === 'up' && websocket.reconnectAttempts > websocket.maxReconnectInterval){
                window.location.reload();
            }
            reconnectSocket();
        }else{
            console.log('网络连接成功！');
            websocket.send("heartBeat");
        }
    }
    
    // 使用：在websocket断开链接时调用网络中断监测
    websocket.onclose => () {
        onLineCheck();
    };
    ```
    
    以上方案，只是抛砖引玉，如果大家有更好的解决方案欢迎评论区分享交流。
    

七、总结
----

*   WebSocket 是为了在 web 应用上进行双通道通信而产生的协议，相比于轮询 HTTP 请求的方式，WebSocket 有节省服务器资源，效率高等优点。
*   WebSocket 中的掩码是为了防止早期版本中存在中间缓存污染攻击等问题而设置的，客户端向服务端发送数据需要掩码，服务端向客户端发送数据不需要掩码。
*   WebSocket 中 Sec-WebSocket-Key 的生成算法是拼接服务端和客户端生成的字符串，进行 SHA1 哈希算法，再用 base64 编码。
*   WebSocket 协议握手是依靠 HTTP 协议的，依靠于 HTTP 响应 101 进行协议升级转换。

参考 ：

[# 阮一峰：WebSocket 教程](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2017%2F05%2Fwebsocket.html "https://www.ruanyifeng.com/blog/2017/05/websocket.html")

[# 看完让你彻底理解 WebSocket 原理](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fnnngu%2Fp%2F9347635.html "https://www.cnblogs.com/nnngu/p/9347635.html")

[img-0]:data:image/webp;base64,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

[img-1]:data:image/webp;base64,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

[img-2]:data:image/webp;base64,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

[img-3]:data:image/webp;base64,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