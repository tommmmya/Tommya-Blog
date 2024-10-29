---
icon: pen-to-square
date: 2024-03-21
category:
  - Node.js
tag:
  - Node.js
  - Express
  - TypeScript
---
# express +TS 环境搭建
### 1. 前言

作为前端开发人员而言，`ts`已经成为了一项必不可少的技能，类型检查可以帮助我们再开发时避免一些不必要的 bug，而且`ts`支持的类和装饰器等语法也更逼近后端语言，更适合服务器的开发。

本文将从零开始，搭建一个集成`ts`和`eslint`语法检查的`express`服务器。

### 2. 初始化 express 框架

我们可以使用官方提供的`express`生成器来快速生成`express`框架。

当然，`express`的初始化内容并不复杂，你也可以从一个`app.js`开始搭建自己喜欢的框架模式。

```
# 使用express生成器之前必须全局安装过express-generator
$ npm install -g express-generator

# --view后面是确定你使用哪种视图引擎，server是你工程的名称
$ express --view ejs server

# 生成的工程并不会默认给我们添加git，这里我们使用git init初始化一下
$ git init
```

初始化完成后我们添加一个`.gitignore`文件

```
node_modules/
dist/
```

### 3. 添加 TS 支持

#### 全局安装 TS

`ts`本身属于`js`的超集，`node`和浏览器并不认识，执行前需要先编译成`js`，所以没有全局安装过`ts`的需要先全局安装一下

```
$ npm install -g typescript
```

#### 安装 express 类型依赖

`express`是基于`node`环境的，所以我们需要安装两个类型依赖，以获得相关`api`的类型提示

```
$ npm install @types/node --save-dev

$ npm install @types/express --save-dev
```

#### 配置 tsconfig.json 文件

在项目根目录下新建`tsconfig.json`文件，`outDir`表示打包输出路径

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "lib": ["es2016","dom"],
    "outDir": "./dist",
  },
  "exclude": ["node_modules"]
}
```

这里如果包含了`include`或者`files`选项，将不会默认编译所有 ts 文件。

接下来我们可以把项目的所以`js`文件的后缀改为`.ts`，然后直接在命令行运行

```
$ tsc
```

默认会找到根目录下的`tsconfig.json`文件，按照配置帮我们进行编译，编译完成我们可以看到`dist`文件夹已经将所有`ts`文件编译成了`js`文件，而且保持了原来的目录结构。

接下来我们将目录下的其他资源也放入 dist 文件夹下，然后运行

```
$ node ./dist/bin/www
```

这时我们的服务已经可以正常启动了，但是在开发时如果每次运行都要进行**编译 -> 将资源文件移入 -> 运行命令**的流程，那也太繁琐了，所以接下来我们再添加一个第三方库`ts-node`。

#### 使用 ts-node 将 ts 文件编译在内存中

在使用`ts-node`之前需要进行全局安装

```
$ npm install ts-node -g

# 用ts-node直接运行项目，这个库会将我们的ts文件编译成js文件保存在内存中进行引用
$ ts-node ./bin/www
```

虽然`ts-node`可以帮我们直接运行 ts 文件，但在开发完成后部署在生产环境时，还是推荐使用`tsc`打包出来的`js`文件会更加稳定。

#### 使用 nodemon 进行热更新

全局安装`nodemon`

```
$ npm install nodemon -g

# 执行命令运行项目
$ nodemon -e ts --exec ts-node ./bin/www
```

`-e`：表示指定观察列表 (Specifying extension watch list)

`--exec`：代表命令行形式执行命令

#### 配置 npm 脚本

```
"scripts": {
  "start": "ts-node ./bin/www",
  "dev": "nodemon -e ts --exec ts-node ./bin/www",
  "build": "tsc",
  "server": "node ./dist/bin/www"
}
```

### 4. 配置 eslint

#### 为什么不是 tslint？

> **TSLint is deprecated.**
> 
> See this issue for more details: [Roadmap: TSLint → ESLint](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fpalantir%2Ftslint%2Fissues%2F4534). If you're interested in helping with the TSLint/ESLint migration, please check out our [OSS Fellowship](https://links.jianshu.com/go?to=https%3A%2F%2Fmedium.com%2Fpalantir%2Ffellowships-for-open-source-developers-3892e6b75ee1) program.

这是`tslint`团队给出的答案，目前推荐使用的是 [typescript-eslint](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Ftypescript-eslint%2Ftypescript-eslint)。

#### 为项目配置 eslint

```
# 未全局安装的需要全局安装
$ npm install eslint -g

$ eslint --init
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · commonjs
√ Which framework does your project use? · none
√ Does your project use TypeScript? · Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@>=7.11.0 eslint-plugin-import@>=2.22.1 eslint-plugin-node@>=11.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.2 @typescript-eslint/parser@latest
√ Would you like to install them now with npm? · Yes
```

关于`eslint`初始化的步骤还是比较简单易懂的，这里不展开叙述，关键一条：**Does your project use TypeScript? · Yes**

使用`eslint`命令行初始化后的项目还并没有开启对于`ts`相关语法的检查，这里需要在`.eslintrc.js`文件增加两条配置

```
extends: [
  'standard',
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended'
]
```

接下来我们会看到`ts`文件的一堆报错，就可以愉快的安装`ts`语法进行修改啦！

提示：`ts`对于`commonjs`的模块化语法并没有完全的支持，所以在使用`require`和`module.exports`时很容易遇到各种报错，官方也推荐了一些解决方式，这里推荐启用 ES 模块导入模式

```
{
  "compilerOptions": {
    ...
    "esModuleInterop": true
  }
}
```

这样就可以在项目中使用 es6 的`import`和`export`进行模块化了，`ts`在编译时会根据环境对我们的代码进行兼容性编译。

### 5. 小结

本文是本人在搭建自己`express`服务器并集成`ts`开发时所记录的一些操作，如有错误之处，还请多多指点！