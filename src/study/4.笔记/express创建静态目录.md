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
# express创建静态目录
## 如何node.js express 上传图片后如何可以被前端访问到



我们只需要设置一个express的中间件

```
//index.js
// 指定 public 目录为静态资源目录
app.use(express.static('public'));
```

要注意的是我们在访问图片的时候public是不用写的

加入目录结构为public/image/1.jpg,我们只需从这里获取就可以了

http://localhost:3000/image/1.jpg

