---
icon: pen-to-square
date: 2024-02-11
category:
  - Node.js
tag:
  - Node.js
  - Express
  - 大文件文件上传
---
# 大文件上传优化切片断点续传秒传前后端demo

### 大文件上传（具体代码在最后）

#### 前景提要

在工作中，经常会遇到上传文件的功能，但是当文件体积大时，如果使用把该文件直接在一个请求体中提交，会出现一些问题，以 nginx 为例：

*   其默认允许 1MB 以内的文件
*   超过 1MB 的文件，需要设置`client_max_body_size`放开体积限制

但是这样会存在一个问题，就是如果上传的文件体积很大，就会出现一些问题，最明显的问题是：

> 服务器的存储和网络带宽压力都会非常大

![][img-0]

当服务器、产品、用户忍不了时，就需要对大文件上传进行优化。

#### 1、大文件切片上传

##### 逻辑梗概

*   将大文件分割成多个文件块
*   逐个上传文件块
*   服务端将文件块顺序合并成完整文件

##### 优势分析

1.  减轻服务器压力：如果一次性上传大文件，服务器的存储和网络带宽压力都会非常大，而通过切片，可以将这些压力分散到多个小文件中，减轻服务器的压力。
2.  断点续传、错误重试：因为大文件被肢解了，如果因为一些原因中断、错误了，已经上传的部分就不用再重新上传了，只需要把后续的传上就好了。

##### 前端部分

###### 1.1 切文件（前端）

###### 1.2 判定切片是否完成上传完成（前端）

*   客户端记录切片的上传状态，只需要上传未成功的切片

###### 1.3 断点、错误续传（前端）

*   客户端上传文件时，记录已上传的切片位置
*   下次上传时，根据记录的位置，继续上传

##### 后端部分

###### 1.1 收切片、存切片

*   将相关切片保存在目标文件夹

###### 1.2 合并切片

*   服务端根据切片的顺序，将切片合并成完整文件

###### 1.3 文件是否存在校验

*   服务端根据文件 Hash 值、文件名，校验该文件是否已经上传

##### 代码实现

###### 1、搭建基础项目

###### 服务器（基于 express）

```
const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('服务已运行：http://localhost:3000');
})
```

###### 前端

> 基础页面

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta >
    <title>Document</title>
    <style>
        input{
            display: block;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <input type="file" id="file">
    <input type="button" id="upload" value="上传">
    <input type="button" id="continue" value="继续上传">
</body>
</html>
```

> 引入资源

```
<script type="module" src="./spark-md5.js"></script>
<script type="module" src="./operate.js"></script>
```

> operate.js

```
// 获取文件域
const fileEle = document.querySelector("#file");
const uploadButton = document.querySelector("#upload");
const continueButton = document.querySelector("#continue");
uploadButton.addEventListener("click", async () => {
    console.log("点击了上传按钮")
})
continueButton.addEventListener('click', async () => {
    console.log("点击了继续上传按钮")
})
```

###### 3、静态资源托管（server）

```
app.use(express.static('static'))
```

###### 4、上传接口

###### 搭建上传接口（server）

> 使用 body-parser 中间价解析请求体

```
// 导入中间件
const bodyParser = require('body-parser')
// 使用中间件
// 处理URL编码格式的数据
app.use(bodyParser.urlencoded({ extended: false })); 
// 处理JSON格式的数据
app.use(bodyParser.json());
```

> 上传接口

```
app.post('/upload', (req, res) => {
    res.send({
        msg: '上传成功',
        success: true
    })
})
```

###### 测试接口（前端）

```
// 单个文件上传
const uploadHandler = async (file) => {
    fetch('http://localhost:3000/upload', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fileName: '大文件',
        }),
    })
}
uploadButton.addEventListener("click", async (e) => {
    uploadHandler()
})
```

###### 5、文件上传接口存储文件（server）

> 使用 multer 中间件处理上传文件
> 
> > 设置 **uploadFiles** 文件夹为文件存储路径

```
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadFiles');
    },
});
const upload = multer({
    storage
})

app.post('/upload', upload.single('file'), (req, res) => {
    
})
```

> 测试

```
// 单个文件上传
const uploadHandler = async (file) => {
    let fd = new FormData();
    fd.append('file', file);
    fetch('http://localhost:3000/upload', {
        method: "POST",
        body: fd
    })
}
uploadButton.addEventListener("click", async () => {
    let file = fileEle.files[0];
    uploadHandler(file)
})
```

###### 6、文件切片

> 注意
> 
> > 假设切片大小为 1M 保存切片顺序（为了合成大文件时正确性） 上传状态（为了断点续传、前端显示进度条）

```
// 使用单独常量保存预设切片大小 1MB
const chunkSize = 1024 * 1024 * 1; 
// 文件切片
const createChunks = (file) => {
    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组
    const chunks = [];
    // 文件大小.slice(开始位置,结束位置)
    let start = 0;
    let index = 0;
    while (start < file.size) {
        let curChunk = file.slice(start, start + chunkSize);
        chunks.push({
            file: curChunk,
            uploaded: false,
            chunkIndex: index,
        });
        index++;
        start += chunkSize;
    }
    return chunks;
}
```

> 测试文件切片函数

```
// 存储当前文件所有切片
let chunks = [];
uploadButton.addEventListener("click", async () => {
    let file = fileEle.files[0];
    chunks = createChunks(file);
    console.log(chunks);
})
```

> 注意：将来要把这些切片全部都上传到服务器，并且最后需要把这些切片合并成一个文件，且要做出文件秒传功能，需要保留当前文件的 hash 值和文件名，以辨别文件和合并文件。

在页面中引入 spark-md5.js

```
<script type="module" src="./spark-md5.js"></script>
```

获取文件 Hash 值

```
const getHash = (file) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = function (e) {
            let fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);
            resolve(fileMd5);
        }
    });
}
```

把文件的 hash 值保存在切片信息中

```
// 文件hash值
let fileHash = "";
// 文件名
let fileName = "";
// 创建切片数组
const createChunks = (file) => {
    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组
    const chunks = [];
    // 文件大小.slice(开始位置,结束位置)
    let start = 0;
    let index = 0;
    while (start < file.size) {
        let curChunk = file.slice(start, start + chunkSize);
        chunks.push({
            file: curChunk,
            uploaded: false,
            fileHash: fileHash,
            chunkIndex: index,
        });
        index++;
        start += chunkSize;
    }
    return chunks;
}
// 上传执行函数
const uploadFile = async(file) => {
    // 设置文件名
    fileName = file.name;
    // 获取文件hash值
    fileHash = await getHash(file);
    chunks = createChunks(file);
    console.log(chunks);
}
```

###### 7、上传逻辑修改

前端部分

> 单个文件上传函数修改：
> 
> > 插入文件名、文件 Hash 值、切片索引
> > 
> > 上传成功之后修改状态标识（可用于断点续传、上传进度回显）

```
// 单个文件上传
const uploadHandler = (chunk) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fd = new FormData();
            fd.append('file', chunk.file);
            fd.append('fileHash', chunk.fileHash);
            fd.append('chunkIndex', chunk.chunkIndex);
            let result = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: fd
            }).then(res => res.json());
            chunk.uploaded = true;
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}
```

> 批量上传切片
> 
> > 限制并发数量（减轻服务器压力）

```
// 批量上传切片
const uploadChunks = (chunks, maxRequest = 6) => {
    return new Promise((resolve, reject) => {
        if (chunks.length == 0) {
            resolve([]);
        }
        let requestSliceArr = []
        let start = 0;
        while (start < chunks.length) {
            requestSliceArr.push(chunks.slice(start, start + maxRequest))
            start += maxRequest;
        }
        let index = 0;
        let requestReaults = [];
        let requestErrReaults = [];

        const request = async () => {
            if (index > requestSliceArr.length - 1) {
                resolve(requestReaults)
                return;
            }
            let sliceChunks = requestSliceArr[index];
            Promise.all(
                sliceChunks.map(chunk => uploadHandler(chunk))
            ).then((res) => {
                requestReaults.push(...(Array.isArray(res) ? res : []))
                index++;
                request()
            }).catch((err) => {
                requestErrReaults.push(...(Array.isArray(err) ? err : []))
                reject(requestErrReaults)
            })
        }
        request()
    })
}
```

> 抽离上传操作

```
// 文件上传
const uploadFile = async (file) => {
    // 设置文件名
    fileName = file.name;
    // 获取文件hash值
    fileHash = await getHash(file);
    // 获取切片
    chunks = createChunks(file);
    try {
        await uploadChunks(chunks)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
```

后端部分

> 修改上传接口，增加功能
> 
> > 使用一个文件 Hash 值同名的文件夹保存所有切片
> > 
> > 这里使用了 node 内置模块 path 处理路径
> > 
> > 使用 fs-extra 第三方模块处理文件操作

```
const path = require('path')
const fse = require('fs-extra')
app.post('/upload', upload.single('file'), (req, res) => {
    const { fileHash, chunkIndex } = req.body;
    // 上传文件临时目录文件夹
    let tempFileDir = path.resolve('uploadFiles', fileHash);
    // 如果当前文件的临时文件夹不存在，则创建该文件夹
    if (!fse.pathExistsSync(tempFileDir)) {
        fse.mkdirSync(tempFileDir)
    }
    // 如果无临时文件夹或不存在该切片，则将用户上传的切片移到临时文件夹里
    // 如果有临时文件夹并存在该切片，则删除用户上传的切片（因为用不到了）
    // 目标切片位置
    const tempChunkPath = path.resolve(tempFileDir, chunkIndex);
    // 当前切片位置（multer默认保存的位置）
    let currentChunkPath = path.resolve(req.file.path);
    if (!fse.existsSync(tempChunkPath)) {
        fse.moveSync(currentChunkPath, tempChunkPath)
    } else {
        fse.removeSync(currentChunkPath)
    }
    res.send({
        msg: '上传成功',
        success: true
    })
})
```

###### 8、合并文件

编写合并接口（server）

> 合并成的文件名为 `文件哈希值.文件扩展名`
> 
> > 所以需要传入文件 Hash 值、文件名

```
app.get('/merge', async (req, res) => {
    const { fileHash, fileName } = req.query;
    res.send({
        msg: `Hash：${fileHash},文件名：${fileName}`,
        success: true
    });
})
```

请求合并接口（前端）

> 封装合并请求函数

```
// 合并分片请求
const mergeRequest = (fileHash, fileName) => {
    return fetch(`http://localhost:3000/merge?fileHash=${fileHash}&fileName=${fileName}`, {
        method: "GET",
    }).then(res => res.json());
};
```

> 在切片上传完成后，调用合并接口

```
// 文件上传
const uploadFile = async (file) => {
    // 设置文件名
    fileName = file.name;
    // 获取文件hash值
    fileHash = await getHash(file);
    // 获取切片
    chunks = createChunks(file);
    try {
        await uploadChunks(chunks)
        await mergeRequest(fileHash, fileName)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
```

> 合并接口逻辑
> 
> > 1、根据文件 Hash 值，找到所有切片

```
app.get('/merge', async (req, res) => {
    const { fileHash, fileName } = req.query;
    // 最终合并的文件路径
    const filePath = path.resolve('uploadFiles', fileHash + path.extname(fileName));
    // 临时文件夹路径
    let tempFileDir = path.resolve('uploadFiles', fileHash);
    // 读取临时文件夹，获取所有切片
    const chunkPaths = fse.readdirSync(tempFileDir);
    console.log('chunkPaths：', chunkPaths);
    res.send({
        msg: "合并成功",
        success: true
    });
})
```

> 合并接口逻辑
> 
> > 2、遍历获取所有切片路径数组，根据路径找到切片，合并成一个文件，删除原有文件夹

```
app.get('/merge', async (req, res) => {
    const { fileHash, fileName } = req.query;
    // 最终合并的文件路径
    const filePath = path.resolve('uploadFiles', fileHash + path.extname(fileName));
    // 临时文件夹路径
    let tempFileDir = path.resolve('uploadFiles', fileHash);

    // 读取临时文件夹，获取所有切片
    const chunkPaths = fse.readdirSync(tempFileDir);

    console.log('chunkPaths：', chunkPaths);

    // 将切片追加到文件中
    let mergeTasks = [];
    for (let index = 0; index < chunkPaths.length; index++) {
        mergeTasks.push(new Promise((resolve) => {
            // 当前遍历的切片路径
            const chunkPath = path.resolve(tempFileDir, index + '');
            // 将当前遍历的切片切片追加到文件中
            fse.appendFileSync(filePath, fse.readFileSync(chunkPath));
            // 删除当前遍历的切片
            fse.unlinkSync(chunkPath);
            resolve();
        }))
    }
    await Promise.all(mergeTasks);
    // 等待所有切片追加到文件后，删除临时文件夹
    fse.removeSync(tempFileDir);
    res.send({
        msg: "合并成功",
        success: true
    });
})
```

###### 10、断点续传

> 封装`continueUpload`方法
> 
> > 在`continueUpload`方法中，只上传 `uploaded` 为 false 的切片
> > 
> > 修改后此功能对用户来说即是黑盒，用户只需要重复调用`continueUpload`方法即可

```
// 文件上传
const continueUpload = async (file) => {
    if(chunks.length == 0 || !fileHash || !fileName){
        return;
    }
    try {
        await uploadChunks(chunks.filter(chunk => !chunk.uploaded))
        await mergeRequest(fileHash, fileName)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
```

#### 2、大文件秒传

##### 逻辑梗概

*   客户端上传文件时，先提交文件的哈希值，
*   服务端根据哈希值查询文件是否已经上传，如果已上传，则直接返回已上传状态
*   客户端收到已上传状态后，直接跳过上传过程

##### 优势分析

*   提高上传效率：秒传可以提高上传效率，因为文件已经在上传过程中被上传过了，直接返回已上传状态，省要再次上传，提高效率。

##### 代码实现

###### 校验接口，校验是否已经存在目标文件

> 逻辑：根据文件 Hash 值和文件名组成 “文件 Hash. 文件扩展名” ，以保证文件名唯一

```
app.get('/verify', (req, res) => {
    const { fileHash, fileName } = req.query;
    const filePath = path.resolve('uploadFiles', fileHash + path.extname(fileName));
    const exitFile = fse.pathExistsSync(filePath);
    res.send({
        exitFile
    })
})
```

> 校验函数

```
// 校验文件、文件分片是否存在
const verify = (fileHash, fileName) => {
    return fetch(`http://localhost:3000/verify?fileHash=${fileHash}&fileName=${fileName}`, {
        method: "GET",
    }).then(res => res.json());
};

// 文件上传
const uploadFile = async (file) => {
    // 设置文件名
    fileName = file.name;
    // 获取文件hash值
    fileHash = await getHash(file);
    // 校验是否已经上传该文件
    let { exitFile } = await verify(fileHash, fileName);
    if (exitFile) {
        return {
            mag: "文件已上传",
            success: true
        }
    }
    // 获取切片
    chunks = createChunks(file);
    try {
        await uploadChunks(chunks.filter(chunk => !chunk.uploaded))
        await mergeRequest(fileHash, fileName)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
```

#### 3、提取为公共方法

封装

> 编写 **bigFileUpload.js** 文件，暴露`uploadFile`和`continueUpload`

```
// bigFileUpload.js
export default {
    uploadFile,
    continueUpload
}
```

使用

> 导入资源并调用

```
import bigUpload from './bigFileUpload.js'
uploadButton.addEventListener("click", async () => {
    let file = fileEle.files[0];
    bigUpload.uploadFile(file)
})
continueButton.addEventListener('click', async () => {
    bigUpload.continueUpload()
})
```

#### 4、可优化

> 前端：
> 
> > 封装形式可优化，采用类的方式封装，以保证数据的独立性、可定制性
> > 
> > 切片 Hash 的计算可以通过抽样切片的方式来进行
> > 
> > ...
> 
> 后端：
> 
> > 文件 Hash 校验可增加用户 ip 地址以保证文件唯一性
> > 
> > 待合并项可定时删除
> > 
> > ...

欢迎大家补充！

#### 资源

[express](https://link.juejin.cn?target=http%3A%2F%2Fexpressjs.jser.us%2F "http://expressjs.jser.us/")

[body-parser](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fbody-parser "https://www.npmjs.com/package/body-parser")

[multer](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmulter "https://www.npmjs.com/package/multer")

[Blob-slice](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FBlob%2Fslice "https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/slice")

[spark-md5](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fsatazor%2Fjs-spark-md5%3Ftab%3Dreadme-ov-file%23readme "https://github.com/satazor/js-spark-md5?tab=readme-ov-file#readme")

#### 代码放在最后

> 项目结构

```
- static
    -- js
        ---bigFileUpload.js
        ---operate.js
        ---spark-md5.js
    -- index.html
- uploadFiles
- app.js
```

> 后端服务

*   app.js

```
const express = require('express')
const multer = require('multer')
const path = require('path')
const fse = require('fs-extra')
const app = express()
app.use(express.static('static'))
// 导入中间件
const bodyParser = require('body-parser')
// 使用中间件
// 处理URL编码格式的数据
app.use(bodyParser.urlencoded({ extended: false })); 
// 处理JSON格式的数据
app.use(bodyParser.json()); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadFiles');
    },
});
const upload = multer({
    storage
})

app.post('/upload', upload.single('file'), (req, res) => {
    const { fileHash, chunkIndex } = req.body;
    // 上传文件临时目录文件夹
    let tempFileDir = path.resolve('uploadFiles', fileHash);
    // 如果当前文件的临时文件夹不存在，则创建该文件夹
    if (!fse.pathExistsSync(tempFileDir)) {
        fse.mkdirSync(tempFileDir)
    }
    // 如果无临时文件夹或不存在该切片，则将用户上传的切片移到临时文件夹里
    // 如果有临时文件夹并存在该切片，则删除用户上传的切片（因为用不到了）
    // 目标切片位置
    const tempChunkPath = path.resolve(tempFileDir, chunkIndex);
    // 当前切片位置（multer默认保存的位置）
    let currentChunkPath = path.resolve(req.file.path);
    if (!fse.existsSync(tempChunkPath)) {
        fse.moveSync(currentChunkPath, tempChunkPath)
    } else {
        fse.removeSync(currentChunkPath)
    }
    res.send({
        msg: '上传成功',
        success: true
    })
})

app.get('/merge', async (req, res) => {
    const { fileHash, fileName } = req.query;
    // 最终合并的文件路径
    const filePath = path.resolve('uploadFiles', fileHash + path.extname(fileName));
    // 临时文件夹路径
    let tempFileDir = path.resolve('uploadFiles', fileHash);
    // 读取临时文件夹，获取所有切片
    const chunkPaths = fse.readdirSync(tempFileDir);
    // 将切片追加到文件中
    let mergeTasks = [];
    for (let index = 0; index < chunkPaths.length; index++) {
        mergeTasks.push(new Promise((resolve) => {
            // 当前遍历的切片路径
            const chunkPath = path.resolve(tempFileDir, index + '');
            // 将当前遍历的切片切片追加到文件中
            fse.appendFileSync(filePath, fse.readFileSync(chunkPath));
            // 删除当前遍历的切片
            fse.unlinkSync(chunkPath);
            resolve();
        }))
    }
    await Promise.all(mergeTasks);
    // 等待所有切片追加到文件后，删除临时文件夹
    fse.removeSync(tempFileDir);
    res.send({
        msg: "合并成功",
        success: true
    });
})
app.get('/verify', (req, res) => {
    const { fileHash, fileName } = req.query;
    const filePath = path.resolve('uploadFiles', fileHash + path.extname(fileName));
    const exitFile = fse.pathExistsSync(filePath);
    res.send({
        exitFile
    })
})
app.listen(3000, () => {
    console.log('服务已运行：http://localhost:3000');
})
```

> 前端业务

*   页面 index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta >
    <title>Document</title>
    <style>
        input{
            display: block;
            margin: 10px 0;
        }
    </style>
    <script type="module" src="./js/spark-md5.js"></script>
    <script type="module" src="./js/operate.js"></script>
</head>
<body>
    <input type="file" id="file">
    <input type="button" id="upload" value="上传">
    <input type="button" id="continue" value="继续上传">
</body>
</html>
```

*   bigFileUpload.js

```
// 存储当前文件所有切片
let chunks = [];

// 文件hash值
let fileHash = "";
// 文件名
let fileName = "";

// 使用单独常量保存预设切片大小 1MB
const chunkSize = 1024 * 10;
// 创建切片数组
const createChunks = (file) => {
    // 接受一个文件对象，要把这个文件对象切片，返回一个切片数组
    const chunks = [];
    // 文件大小.slice(开始位置,结束位置)
    let start = 0;
    let index = 0;
    while (start < file.size) {
        let curChunk = file.slice(start, start + chunkSize);
        chunks.push({
            file: curChunk,
            uploaded: false,
            fileHash: fileHash,
            chunkIndex: index,
        });
        index++;
        start += chunkSize;
    }
    return chunks;
}
// 获取Hash值
const getHash = (file) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = function (e) {
            let fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);
            resolve(fileMd5);
        }
    });
}
// 校验文件、文件分片是否存在
const verify = (fileHash, fileName) => {
    return fetch(`http://localhost:3000/verify?fileHash=${fileHash}&fileName=${fileName}`, {
        method: "GET",
    }).then(res => res.json());
};

// 单个文件上传
const uploadHandler = (chunk) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fd = new FormData();
            fd.append('file', chunk.file);
            fd.append('fileHash', chunk.fileHash);
            fd.append('chunkIndex', chunk.chunkIndex);
            let result = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: fd
            }).then(res => res.json());
            chunk.uploaded = true;
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

// 批量上传切片
const uploadChunks = (chunks, maxRequest = 6) => {
    return new Promise((resolve, reject) => {
        if (chunks.length == 0) {
            resolve([]);
        }
        let requestSliceArr = []
        let start = 0;
        while (start < chunks.length) {
            requestSliceArr.push(chunks.slice(start, start + maxRequest))
            start += maxRequest;
        }
        let index = 0;
        let requestReaults = [];
        let requestErrReaults = [];

        const request = async () => {
            if (index > requestSliceArr.length - 1) {
                resolve(requestReaults)
                return;
            }
            let sliceChunks = requestSliceArr[index];
            Promise.all(
                sliceChunks.map(chunk => uploadHandler(chunk))
            ).then((res) => {
                requestReaults.push(...(Array.isArray(res) ? res : []))
                index++;
                request()
            }).catch((err) => {
                requestErrReaults.push(...(Array.isArray(err) ? err : []))
                reject(requestErrReaults)
            })
        }
        request()
    })
}
// 上传文件
const uploadFile = async (file) => {
    // 设置文件名
    fileName = file.name;
    // 获取文件hash值
    fileHash = await getHash(file);
    // 校验是否已经上传该文件
    let { exitFile } = await verify(fileHash, fileName);
    if (exitFile) {
        return {
            mag: "文件已上传",
            success: true
        }
    }
    // 获取切片
    chunks = createChunks(file);
    try {
        await uploadChunks(chunks.filter(chunk => !chunk.uploaded))
        await mergeRequest(fileHash, fileName)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
// 文件续传
const continueUpload = async (file) => {
    if (chunks.length == 0 || !fileHash || !fileName) {
        return;
    }
    try {
        await uploadChunks(chunks.filter(chunk => !chunk.uploaded))
        await mergeRequest(fileHash, fileName)
    } catch (err) {
        return {
            mag: "文件上传错误",
            success: false
        }
    }
}
// 合并分片请求
const mergeRequest = (fileHash, fileName) => {
    return fetch(`http://localhost:3000/merge?fileHash=${fileHash}&fileName=${fileName}`, {
        method: "GET",
    }).then(res => res.json());
};
// bigFileUpload.js
export default {
    uploadFile,
    continueUpload
}
```

*   operate.js

```
// 获取文件域
const fileEle = document.querySelector("#file");
const uploadButton = document.querySelector("#upload");
const continueButton = document.querySelector("#continue");

import bigUpload from './bigFileUpload.js'
uploadButton.addEventListener("click", async () => {
    let file = fileEle.files[0];
    bigUpload.uploadFile(file)
})
continueButton.addEventListener('click', async () => {
    bigUpload.continueUpload()
})
```

[img-0]:data:image/webp;base64,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