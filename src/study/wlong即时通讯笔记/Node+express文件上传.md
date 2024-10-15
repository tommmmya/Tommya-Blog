---
icon: pen-to-square
date: 2022-01-11
category:
  - Node.js
tag:
  - Node.js
  - Express
  - multer
---
# express创建静态目录

# nodejs+express 文件上传

## multer 框架

### 1、multer 简介

> 官网地址 [www.npmjs.com/package/mul…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmulter "https://www.npmjs.com/package/multer")

> 简介 `multer` 是一个 Node.js 中间件，用于处理`multipart/form-data`类型的数据，主要用于上传文件。它是专门设计来处理文件上传的，非常适合用在像图片上传这样的场景中

需要注意的是：

multer 不会处理任何非 multipart/form-data 类型的表单数据，就是没办法处理 base64 位的数据

换一句换说：前端必须这样设置类型 `'Content-type': 'multipart/form-data'`

guthub 官方解释链接 [github.com/expressjs/m…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fexpressjs%2Fmulter%2Fblob%2Fmaster%2Fdoc%2FREADME-zh-cn.md "https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md")

### 2、安装

```
yarn add --save multer
```

### 3、引入 multer 和路径 path

```
// 引入文件上传的包 Node.js中间件，用于处理multipart/form-data类型的数据
import multer from 'multer'
import path from 'path'
```

### 4、使用

```javascript
//upload.js
// 控制文件存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './data')
    },
    filename: function (req, file, cb) {
      let name = req.body.name
         // 1.png--》 122323232323.png
    cb(null, Date.now() + path.extname(file.originalname));
    }
})
// 设置文件大小限制为 1MB
const limits = { fileSize: 1 * 1024 };
// 创建multer实例
const upload = multer({ storage: storage, limits: limits });

//暴露路由
module.exports = function (app) {
    //前端文件上传
    app.post('/files/upload', upload.array('files', 10), function (req, res, next) {
        //获取文件信息
        let data = req.files
		// .....处理文件
        
        
        //错误处理中间件
    }, (err, req, res, next) => {
        if (err instanceof multer.MulterError) {
            // Multer 错误处理
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(413).json({
                    code: 1,
                    message: 'File size exceeds limit'
                });
            }
            return res.status(500).json({
                code: 1,
                message: 'Multer error occurred',
                details: err.message
            });
        } else if (err) {
            // 其他错误处理
            return res.status(500).json({
                code: 1,
                message: 'An unexpected error occurred',
                details: err.message
            });
        }
        next();
    })
}

```

```
//index.js
//导入路由
require('./router/files')(app)
```

##### 在学习上传文件过程中，发现自己对**express路由**的参数了解的不是很深刻，限制了文件大小之后不知如何捕获**upload.array('files', 10)**这个中间件的错误，查阅了以下资料`：

`express`框架中的`app.post()`方法用于定义处理POST请求的路由。它的基本语法如下：

Javascript深色版本

```
1app.post(path, [routeMiddleware, ...], callback)
```

- `path`: 这是一个字符串或正则表达式，表示你想要监听的URL路径。
- `routeMiddleware`: 这可以是零个或多个中间件函数，它们按顺序执行，每个中间件都可以访问`request`和`response`对象以及`next`函数，用于将控制权传递给下一个中间件。
- `callback`: 这是一个处理完成所有中间件后要执行的函数。它通常接收`request`和`response`作为参数，以及一个可选的`next`参数。在回调中，你可以处理请求、修改响应等。

但是，如果你想定义一个错误处理中间件，它需要接受四个参数：`err`, `req`, `res`, 和 `next`。错误处理中间件必须位于所有其他中间件和路由处理程序之后，以便它们能够捕获任何未处理的错误。

所以，对于普通的路由处理，`app.post()`可以有2到3个参数（`path`和一个或多个`middleware/callback`）。而错误处理中间件总是有4个参数。

在你的场景中，你可能希望先定义一个处理请求的中间件，然后紧跟着定义一个错误处理中间件，如下所示：

Javascript深色版本

```
1app.post('/files/upload', 
2    upload.array('files', 10),
3    (req, res, next) => {
4        // 正常处理逻辑
5    },
6    (err, req, res, next) => {
7        // 错误处理逻辑
8    }
9);
```

但是请注意，`express`要求错误处理中间件必须放在所有非错误处理中间件之后，并且必须明确指定四个参数。所以在实际的代码中，错误处理中间件通常是独立定义的，并且放在所有路由定义的最后面。