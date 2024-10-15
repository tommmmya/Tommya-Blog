---
icon: pen-to-square
date: 2022-01-11
category:
  - Node.js
tag:
  - Node.js
  - Express
  - bcryptjs
---

# express中req.body为空的问题
> 背景：在做登录验证的时候遇到了req.body为空的问题，虽然搞懂后发现确实有些小白了，但还是在此按照当初遇到问题的顺序来记录下，希望能给需要的同学提供一些思路。

缺少`body-parser`[中间件](https://cloud.tencent.com/product/tdmq?from_column=20065&from=20065)的原因。
Nodejs req.body 默认为空。如果使用了 `express` 框架，可以通过安装`body-parser`中间件加以解决
也就是说需要`安装`body-parser`中间件，然后在项目主文件中引入`body-parser`中间件并使用。

```
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

在http请求中，POST、PUT、PATCH三种请求方法中包含着请求体，也就是所谓的request，在Nodejs原生的http模块中，请求体是要基于流的方式来接受和解析。
body-parser是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体