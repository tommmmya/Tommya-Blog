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

# Node.js 中 bcryptjs 密码加密

-------------

bcryptjs 是一个第三方密码加密库，是对原有 bcrypt 的优化，优点是不需要安装任何依赖

[npmjs 地址](https://link.segmentfault.com/?enc=t12iw6PhsxVohksKmvEc5Q%3D%3D.jI2OBEC5CRglOXqHwvcxADnlRE%2B7bJ9RIBjV7GkpC34gC5PKucNfr%2F9oBylTD5FM)

### 引入 bcryptjs 库

```
npm install bcryptjs
```

```
var bcrypt = require('bcryptjs');
...
```

### 同步用法 (Sync)

生成 hash 密码

```
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.
```

密码验证

```
// Load hash from your password DB. 
bcrypt.compareSync("B4c0/\/", hash); // true 
bcrypt.compareSync("not_bacon", hash); // false
```

快速生成 hash 值

```
var hash = bcrypt.hashSync('bacon', 8);
```

### 异步用法 (Async)

生成 hash 密码

```
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB. 
    });
});
```

密码验证

```
// Load hash from your password DB. 
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true 
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false 
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted: 
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true 
});
```

快速生成 hash 值

```
bcrypt.hash('bacon', 8, function(err, hash) {
});
```