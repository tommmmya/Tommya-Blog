---
icon: pen-to-square
date: 2022-01-11
category:
  - CSS
tag:
  - css
  - 伪元素
  - 伪类
---
# 伪类和伪元素

**_这篇想要跟大家分享的是 css 中的伪类和伪元素，有任何问题可以私聊我或者评论哦！_**

#### 首先，我们先来想一下

### 一、引入伪类跟伪元素的原因？

伪类和伪元素的引入是因为**在文档树里有些信息无法被充分描述**

比如 CSS 没有 “段落的第一行”、“文章首字母” 之类的选择器，而这在一些出版场景里又是必须的，因此引入。

 引用标准中的话：

 (CSS 引入伪类和伪元素的概念是为了实现基于文档树之外的信息的格式化。)  
 CSS introduces the concepts of pseudo-elements and pseudo-classes to permit formatting based on   
 information that lies outside the document tree.

### 二、什么是伪类，伪元素？

#### 1、伪类

**概念：**为处于某个状态的已有元素添加对应的样式，这个状态是根据用户行为而动态改变的。

它可以用于

- 设置鼠标悬停在元素上时的样式
- 为已访问和未访问链接设置不同的样式
- 设置元素获得焦点时的样式

#### 2、伪元素

**概念：**创建一些不在文档树中的元素，并为其添加样式。(就是选取某些元素前面或后面这种普通选择器无法完成的工作, **虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。**)

它可以用于

- 设置元素的首字母、首行的样式
- 在元素的内容之前或之后插入内容

### 三、伪类

分类

- 状态伪类
- 结构性伪类

#### 1、状态伪类：基于元素当前状态进行选择的

元素的样式会根据其状态呈现不同的样式，当元素处于某状态时会呈现该样式，而进入另一状态后，该样式也会失去。

常见的状态伪类

  :link 应用于未被访问过的链接；    

  :hover 应用于鼠标悬停到的元素；

  :active 应用于被激活的元素；

  :visited 应用于被访问过的链接，与: link 互斥。

  :focus 应用于拥有键盘输入焦点的元素。

**_实例_**

```
<!DOCTYPE html
<html
<head
<style
/* 未访问的链接 */
a:link {
  color: red;
}
 
/* 已访问的链接  */
a:visited {
  color: green;
}
 
/* 鼠标悬停链接  */
a:hover {
  color: hotpink;
}
 
/* 已选择的链接*/
a:active {
  color: blue;
}
</style
</head
<body
 
<p<a href=""这是一个链接</a</p
 
</body
</html
```

**_注意：_**

 **这几个伪类同时出现在一个元素的操作上，顺序不能改变，否则很大程度上会产生紊乱，造成效果失效！**

 `a:hover` 必须在 CSS 定义中的 `a:link` 和 `a:visited` 之后，才能生效。(意思是必须先写`a:link` 和 `a:visited再写` :hover）

 `a:active` 必须在 CSS 定义中的 `a:hover` 之后才能生效。(意思是必须先写`a:hover再写` :active）

 另外伪类名称对大小写并不敏感

**伪类和 CSS 类**

当您将鼠标悬停在类 highlight 上时，会改变颜色：

```
a.highlight:hover {
  color: red;
}
```

**悬停在 <div 上**

```
div:hover {
  background-color: blue;
}
```

**把鼠标悬停到 <div 元素以显示 <h1  元素（类似工具提示的效果）**

```
h1 {
  display: none;
  background-color: green;
  padding: 25px;
}
 
div:hover h1 {
  display: block;
}
```

#### 2、结构性伪类：css3 新增选择器

利用 dom 树进行元素过滤，通过文档结构的互相关系来匹配元素，能够减少 class 和 id 属性的定义，使文档结构更简洁。

常见的结构性伪类

 1. :first-child 选择某个元素的第一个子元素；  
 2. :last-child 选择某个元素的最后一个子元素；
 3. :nth-child(n) 匹配属于其**父元素**的第 n 个子元素，**不论元素的类型**；
 4. :nth-last-child() 从这个元素的最后一个子元素开始算, 选匹配属于其父元素的第 n 个子元素，不论元素的类型；
 5. :nth-of-type() 规定属于其父元素的第 n 个 指定 元素；
 6. :nth-last-of-type() 从元素的最后一个开始计算, 规定属于其父元素的指定 元素；
 7. :first-of-type 选择一个上级元素下的第一个同类子元素；
 8. :last-of-type 选择一个上级元素的最后一个同类子元素；
 9. :only-child 选择它的父元素的唯一一个子元素；
 10. :only-of-type 选择一个元素是它的上级元素的唯一一个相同类型的子元素；
 11. :checked 匹配被选中的 input 元素，这个 input 元素包括 radio 和 checkbox。
 12. :empty 选择的元素里面没有任何内容。
 13. :disabled 匹配禁用的表单元素。
 14. :enabled 匹配没有设置 disabled 属性的表单元素。
 15. :valid 匹配条件验证正确的表单元素。
 16. :in-range 选择具有指定范围内的值的 <input 元素。
 17. :optional 选择不带 "required" 属性的 <input 元素。
 18. :focus 选择获得焦点的 <input 元素。

**_实例_**

**选择器匹配 p 元素的第一个子元素：**

```
p:first-child {
  color: red;
}
<p你好</p
<p好啊</p
```

**匹配所有 <p 元素中的首个 <i 元素:**

```
p i:first-child {
  color: blue;
}
 
<p我是一个<i强壮</i的男人。我是一个<i强壮</i的男人。</p
 
<p我是一个<i强壮</i的男人。我是一个<i强壮</i的男人。</p
```

**段落 2 变成蓝色**

 **语法解释：p:nth-child(3),**P 标签的父元素是 body，body 的第 3 个子元素是 “段落 2。” 所以段落 2”，颜色变成了蓝色

```
p:nth-child(3)
{
background:blue;
}
 
<body
 
<h1今天学习伪类和伪元素</h1
<p段落1</p
<p段落2</p
<p段落3</p
 
 
</body
```

在上一个代码中，如果 p:nth-child(3) 改为属 **p:nth-of-type(3) ，则意思为规定其父元素的第 3 个 p 元素**，那么变蓝色的是段落 3

**lang="en" 的 q 元素定义~：** 

```
q:lang(en) {
  quotes: "~" "~";
}
 
<pSome text <q lang="en"A quote in a paragraph</q Some text.</p
```

 **选择获得焦点的 <input 元素 (点击输入框，背景颜色变为黄色）:**

```
input:focus {
  background-color: yellow;
}
  First name: <input type="text" <br
  Last name: <input type="text" <br
```

### 四、伪元素

所有的伪元素

<table><tbody><tr><th>选择器</th><th>例子</th><th>例子描述</th></tr><tr><td><a href="https://www.w3school.com.cn/cssref/selector_after.asp" rel="nofollow" title="::after">::after</a></td><td>p::after</td><td>在每个 &lt;p&gt; 元素之后插入内容。</td></tr><tr><td><a href="https://www.w3school.com.cn/cssref/selector_before.asp" rel="nofollow" title="::before">::before</a></td><td>p::before</td><td>在每个 &lt;p&gt; 元素之前插入内容。</td></tr><tr><td><a href="https://www.w3school.com.cn/cssref/selector_first-letter.asp" rel="nofollow" title="::first-letter">::first-letter</a></td><td>p::first-letter</td><td>选择每个 &lt;p&gt; 元素的首字母。</td></tr><tr><td><a href="https://www.w3school.com.cn/cssref/selector_first-line.asp" rel="nofollow" title="::first-line">::first-line</a></td><td>p::first-line</td><td>选择每个 &lt;p&gt; 元素的首行。</td></tr><tr><td><a href="https://www.w3school.com.cn/cssref/selector_selection.asp" rel="nofollow" title="::selection">::selection</a></td><td>p::selection</td><td>选择用户选择的元素部分。</td></tr></tbody></table>

**注意：**

  [CSS3](https://so.csdn.net/so/search?q=CSS3&spm=1001.2101.3001.7020 "CSS3") 规范中有一部分要求，为了区分伪类和伪元素，伪元素使用两个冒号 (::)， 伪类使用一个冒号 (:)

对于 CSS2 中已经有的伪元素，例如 :before，单冒号和双冒号的写法 ，::before 作用是一样的，所以，如果网站只需要兼容 webkit、firefox、opera 等浏览器，伪元素建议采用双冒号的写法，如果是要兼容 IE 浏览器，建议用 CSS2 的单冒号写法。

_**实例**_

**为所有 <p 元素中的首行添加样式：**

```
p::first-line {
  color: #ff0000;
  font-size:16px;
}
```

在这里对于::first-line, 我们需要注意，**`::first-line` 伪元素只能应用于块级元素。**

 以下属性适用于 ::first-line 伪元素：

 - 字体属性
 - 颜色属性
 - 背景属性
 - word-spacing
 - letter-spacing
 - text-decoration
 - vertical-align
 - text-transform
 - line-height
 - clear

**设置所有 <p 元素中文本的首字母格式：**

```
p::first-letter {
  color: red;
  font-size: 16px;
}
```

在这里对于::first-letter , 我们需要注意，**::first-letter  伪元素只能应用于块级元素。**

 下面的属性适用于 ::first-letter 伪元素：

 - 字体属性
 - 颜色属性
 - 背景属性
 - 外边距属性
 - 内边距属性
 - 边框属性
 - text-decoration
 - vertical-align（仅当 "float" 为 "none"）
 - text-transform
 - line-height
 - float
 - clear

**在这里要对::before 和::after, 做个讲解**

在元素的 ::before 和 ::after 中插入内容 -**content 属性**（如果没有写 content 样式，伪元素会失效）

<table<tbody<tr<th默认值：</th<tdnormal</td</tr<tr<th继承：</th<tdno</td</tr<tr<th版本：</th<tdCSS2</td</tr<tr<thJavaScript 语法：</th<td<emobject</em.style.content="url(beep.wav)"</td</tr</tbody</table

**contnt 属性的类别：**

<table<tbody<tr<tdnone</td<td设置 content 为空值。</td</tr<tr<tdnormal</td<td在 :before 和 :after 伪类元素中会被视为 none，即也是空值。</td</tr<tr<tdcounter</td<td设定计数器，格式可以是&nbsp;counter(name)&nbsp;或&nbsp;counter(name,style)&nbsp;。产生的内容是该伪类元素指定名称的最小范围的计数；格式由 style 指定（默认是'decimal'——十进制数字）</td</tr<tr<tdattr<em(attribute)</em</td<td将元素的 attribute 属性以字符串形式返回。。</td</tr<tr<td<emstring</em</td<td设置文本内容</td</tr<tr<tdopen-quote</td<td设置前引号</td</tr<tr<tdclose-quote</td<td设置后引号</td</tr<tr<tdno-open-quote</td<td移除内容的开始引号</td</tr<tr<tdno-close-quote</td<td移除内容的闭合引号</td</tr<tr<tdurl(<emurl</em)</td<td设置某种媒体（图像，声音，视频等内容）的链接地址</td</tr<tr<tdinherit</td<td指定的 content 属性的值，应该从父元素继承</td</tr</tbody</table

**在每个 <h1 元素的内容之前插入一幅图：**

```
h1::before {
  content: url();
}

```

**在每个 <h1 元素的内容之后插入一幅图像：**

```
h1::after {
  content: url();
}

```

**使所选文本在蓝色背景上显示为红色：**

```
::selection {
  color: red; 
  background:blue;
}

```

 可以应用于 ::selection：的属性

 - color
 - background
 - cursor
 - outline

**伪元素与 CSS 类结合使用：(将以粉色和较大的字体显示 的段落的首字母。)**

```
p.name::first-letter {
  color: hotpink;
  font-size: 200%;
}  
 
<p class="name"你好漂亮！</p

```

### 五、伪类和伪元素的应用

#### 1、画分割线

效果如图

![][img-0]

```
<style
/*content没有内容也一定要记得写*/
    .line::before, .line::after {
      content: '';
      display: inline-block;
      width: 300px;
      border-top: 1px solid black;
      margin: 5px;
    }
  </style
</head
<body
  <p class="line"此处为分割线</p
</body

```

#### 2、清除浮动

这里将会在**下一次分享 “浮动”** 时去分享

**其他应用**也会在后续的使用中，不断发现，不断补充

**最后！**

关于代码**只粘贴了主要代码**，其他的内容，需要读者自己进行补充

#### **下次见！**

[img-0]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYoAAABjCAYAAAA1mzRsAAAgAElEQVR4Ae3BCXSUhQHv7d87M8lkMpmELGQFkgAhRIgRkU1wScGC1IIgIqJorZZaRMFiFaHuxaqI0quiiLVWRKxVIlRr3ViEKCmbKWBIWQNCyEISMtmZmff63nPyHb4cloBKhfyfxzC/hYiIiIiIiIiIiIi0WTZEREREREREREREpE2zISIiIiIiIiIiIiJtmg0RERERERERERERadNsiIiIiIiIiIiIiEibZkNERERERERERERE2jQbIiIiIiIiIiIiItKm2RARERERERERERGRNs2GiIiIiIiIiIiIiLRpju07ixARERERERERERGRtsuGiIiIiIiIiIiIiLRphvktRERERERERERERKTNsiEiIiIiIiIiIiIibZoNEREREREREREREWnTbIiIiIiIiIiIiIhIm2ZDRERERERERERERNo0GyIiIiIiIiIiIiLSptkQERERERERERERkTbNhoiIiIiIiIiIiIi0aTZEREREREREREREpE2zISIiIiIiIiIiIiJtmg0RERERERERERERadNsiIiIiIiIiIiIiEibZkNERERERERERERE2jQbIiIiIiIiIiIiItKm2RARERERERERERGRNs2GiIiIiIiIiIiIiLRpNkRERERERERERESkTbMhIiIiIiIiIiIiIm2aDRERERERERERERFp02yIiIiIiIiIiIiISJtmf/hbiIiIiMj/lGmaVFdXU1tby5EjR3A6nRiGQUsffPABOTk57Nu3j/T0dOx2O6fDNE12796N3+8nODgYm81Ga9TX11NdXU1jYyNBQUHYbDZORyAQwGIYBsdSWVnJXXfdxQsvvEBVVRX9+vXjh+bz+bAYhkFL9fX1/OMf/8Dn8xEXF8f3pb6+nk8//ZTNmzfTvXt3DMPgdDU2NrJ+/Xp27NiBYRi0a9eOYzFNkyVLllBZWUliYiI2m43jaWpq4u233+af//wnhw8fplu3bjQrKSkhKCgIh8OBiIiIiJz9bIiIiIjI/1xDQwP33XcfMTEx3HfffTQ0NHAsGzduZPr06axatQq/38/pqqmp4eGHH6Z9+/bce++9NDU10RpLliwhJiaG7Oxsdu7cyekoKiri2muvJScnB9M0OZZAIMC+ffv4+OOPqaqq4ofm8/l46KGHGDNmDBs3bsQ0TZpVV1dzyy23cM011/DWW2/h8/n4vnz88cdcd911PPPMMxQVFfFd1NTU8PDDD5Odnc2aNWs4noMHD/LSSy8xaNAgZs2aRSAQ4Hj8fj+rVq1i+vTpbNy4kWYFBQWMHDmS66+/nl27diEiIiIiZz8bIiIiItLmVFRUsHPnTiwXXHABwcHBnAlHjhxh/vz5LFmyhF/84he8+uqr+Hw+/tfy8vJYtGgROTk5fPbZZwQCAZqFh4fz85//HMuiRYv46quv+L5kZ2czatQocnNzWbp0KaZp8kNbvnw5n376KRkZGYwZMwabzcapamxsJCIigpycHH7yk5/w97//nUAggIiIiIicvRyIiIiISJtTVFTEF198QUJCAj169OBMCQoK4v7776eqqooXX3yRu+++m4qKCu6++24cDgfNKisrKS8v50woKSlh9uzZFBUVkZ2dzfjx47Hb7RztiiuuYMSIESxbtoxXXnmFHj164HK5aI2ioiJ2797N8XTo0AHLu+++S9euXXG73RxLSEgIvXr1Ijg4mOrqanw+H6GhobhcLlqrsrKSd999F8uECRPo3r07J2IYBna7HcvBgwdpaGggJCSECy64gMWLF/PAAw8wb948xo4dy/Tp05kxYwYejwcREREROfs4EBEREZE2Z8OGDVjS09NJSEjgTPJ4PMyePRvDMJg3bx733nsvPp+P3/72tzidTix+vx+fz4elc+fO/FB8Ph+vvfYaS5cuxePxMH36dJKSkmgpNjaWX/7yl6xYsYI333yTyy+/nHHjxtEaa9as4cYbb+RkVq9ezerVqzmeoUOHsmjRIkJDQ7nvvvuYP38+b7zxBjfccAOttWLFCnJycsjKymL06NHY7XZOJCQkhPj4eCx+vx/TNGkWFRXFM888Q/fu3Zk5cyYFBQXU1dXh8XgQERERkbOPAxERERE5p5imSVVVFe3atcMwDFryer1s2rQJS69evYiJieFMc7vdPPXUU1jmzZvHH//4R1JSUrj++us5k5YvX86sWbOwTJw4kcsuu4zjGTJkCOPGjWPBggXMnTuXrKwsMjIyaK1f/epXjB8/nlO1f/9+HnnkEb6ryspK3nrrLSy33HIL3bp147tyOp1MnjyZ888/n8TEROLi4hARERGRs5MDERERETljtm/fzpIlS3A6nYwbN474+Hi+Tz6fj0WLFvHHP/6R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EZFTt2vXLpKTk/muHIMGDWLQoEGIiIiIyLmpsLCQnJwcLCNHjmTIkCH07t2b3NxcCgsLiYmJoVl+fj65ublkZWVx0UUXcSpcLhczZsygc+fO3HnnnYwbN47evXtzKvLz88nNzcXSp08fXC4XO3fu5KabbmLt2rXs2rWLWbNm4Xa7ORVBQUFYnE4nV199NdnZ2Rytvr6et99+m4KCAm688UZ69uzJiRw5coR//etf5ObmYrfbMQyD46mvr6euro7jqaurw+Lz+aisrOR4bDYbERERnK4vvviCZ599Fo/Hw5QpU0hKSqKZYRg8//zzPPjgg5xIeno6I0aMID09nW7dupGamkp0dDQul4vvYtSoUYwaNQoRERER+d9xjBkzBhERERE5d6WkpJCdnU1wcDCjR48mMTGRAQMGsHLlSj766CP69++P3W7H7/ezatUqvF4v/fv3p1OnTpwqm83G9ddfT2ZmJvHx8bjdblrL7/ezatUqvF4vGRkZ9O/fH0tqaip33HEHW7du5U9/+hNHjhzhqaeewu12c7S6ujosHo8Hu93OsYSFhXH77bfTUllZGbm5uRQUFDBs2DBuuOEGTqS+vp5vvvmG3NxcTmbJkiXceOONnMxnn31GWloaxzN06FAWLVpEaGgop6qkpITZs2dTVFTEtGnTGDZsGC117tyZ5ORk0tLS6NWrF+np6XTr1o3U1FRefPFFHn/8cYYPH84f/vAHgoODOVptbS2PPfYYV1xxBT/5yU8wDINTMWbMGERERETkf8uBiIiIiJzT3G43Dz74IJ988gldu3bFbrczePBgnn/+eT7++GNuueUWUlNT2bFjB8uWLcPy05/+FJfLxekwDIPMzExO1bZt23jnnXewXHHFFXTt2hWLzWZj3LhxNDY2cvfddzNv3jwsTz31FG63m2alpaVYOnfuTGRkJKeioqKCsrIyLB07duT71KVLF5544gmOZ8uWLbzxxhtkZGQwduxYXC4XxxIREYHT6eRU1dbW8uijj7J06VKys7O5++67CQ4O5vDhw+zevZuvv/6aAwcOcOutt3LDDTdwLOeffz6W//73v9TW1hIcHEwzn8/H888/z5NPPsm8efP461//yqhRoxARERGRs4sDERERETnnxcXFceONN9LswgsvZMiQIeTk5JCTk8Ndd93FkiVLyM/PZ8iQIQwYMIAzye/3s2zZ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rxePx8OsWbOYOHEiTqeTY4mOjmby5MlMmjSJgwcP8p///IeNGzeybt06ioqK2LRpEyeTkZFB//79CQQCLFiwgMcff5xm06dPZ8aMGXg8Hk4mIiKCxMREiouLOZ7MzExmzJjBmDFjsNvtHG3Pnj3ccsstrFy5kmajRo3i6aefpnPnzrTkcgkoPDoAABBoSURBVLlISkriREaNGsXjjz9OWloap+rll19m9OjRnExlZSW33347n332GUcLCQkhMTGR559/nmO59tpryczMxOJ2u5k1axYnEhwcjM/nY/Xq1VjS09O54447GD9+PNHR0RxLRkYGr732GlOmTOHjjz/m/fffp9nIkSO56qqrEBEREZGzi2F+CxERERE5pxUVFXH33XezceNGZs+ezTXXXIPNZuO7ME2T6upqfD4fx2Kz2YiIiMBms1FbW8u9997LBx98wOOPP87YsWNxOBy0RiAQ4PDhwwQCAfbt20dVVRXNgoKC6NatG9HR0dhsNo5n1apV3HzzzXTq1IkHHniA7OxsHA4Hx1NfX8+ePXsoKSnhaEFBQXTv3p2oqCgMw6C1mpqaePfdd9m7dy+XXXYZ/fv352Rqamp44403OHz4MKNHjyYtLY1ma9euZdWqVbTUuXNnhg8fjtvt5lTU1tYyd+5cLrzwQi6//HJcLhetUVtbyz/+8Q+WLl1KRUUFnTt3ZsaMGXTs2BERERERObsY5rcQERERkXNeRUUFNTU1dOrUif+Fw4cPU19fT3x8PGeaaZrs37+f+Ph4HA4HIiIiIiLy/2eY30JERERERERERERE2iwbIiIiIiIiIiIiItKm2RARERERERERERGRNs2GiIiIiIiIiIiIiLRpNkRERERERERERESkTbMhIiIiIiIiIiIiIm2aDRERERERERERERFp02yIiIiIiIiIiIiISJvmQERERERERERERM5ZpmliGAYW0zQxDIOWTNPEMAxM06QlwzBoZpomLRmGwcmYpolhGByPaZoYhsF3ZZomhmFwPKZp0swwDE6XaZo0MwwDi2maHIthGJimicUwDH6sDPNbiIiIiIiIiIiIyDnDNE38fj979uxh3759OJ1OEhMTCQoKIjIyktDQUJqZpomlqqqK//73vxw6dIjIyEiSkpIICgoiNjYWu91Os/r6evbt20dDQwMWwzAICwsjNDSUoKAgIiIisNvt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loaGBvx+P63hdrvp1KkTeXl5VFdX07FjR8LCwnA6nZimSVNTE7t37yYpKYnw8HCOJSEhgaCgIMrKyjhaXV0dpaWl9OnTB4vb7cZms7F9+3aGDRvG6TIMg4iICCIjI1m/fj19+/bFMAxCQ0MxDINDhw5ht9sJCgqipKSEN998k5SUFDIzMzlTHIiIiIiIiIiIiMg5JS0tjR07drBixQqqq6tpaGigsbGRlJQUbrvtNuLi4mjmdDq5+OKLWbNmDStWrCAQCNDU1ER9fT3t2rVjyJAh9O/fn2YHDhxg8eLFtOR2u+nUqRMjR44kKSmJZoZhsGfPHhoaGjgWwzAwDIPly5fTuXNnWiMqKoohQ4bw73//myVLllBXV4ff76e+vh6/309CQgJXXHEF4eHhtLR//37eeustjqdDhw706dMHi2EYWEzTpEePHjQzDIPdu3dTVVVFM8Mw2L17N3v37qVv3760ZLfb2bNnD9u2bWPXrl106dKFqKgovF4vn3zyCV6vl5qaGixZWVkMGzYMm83GmWKY30JERERERERERETOSTU1NdTW1uLxeAgNDeVkampqqK2tJTQ0FI/Hw9mgtraWmpoagoKC8Hg8BAUF8V2ZpolhGHz22WeUl5dz3XXX8UM6fPgwDQ0NREZGEhwczJlmmN9CRERERERERERERP4/pmlSW1vLs88+y7hx40hLS+N/5euvv+ZkSktLufzyyzldDkRERERERERERETk/zFNk61bt1JWVkZeXh7JycmkpaXxv1RaWsoPzTC/hYiIiIiIiIiIiIj8P/n5+ezfv5+YmBh69epFUFAQ5zrD/BYiIiIiIiIiIiIi0mbZEBEREREREREREZE2zYaIiIiIiIiIiIiItGk2RERERERERERERKRNsyEiIiIiIiIiIiIibZoNEREREREREREREWnTbIiIiIiIiIiIiIhIm2ZDRERERERERERERNo0GyIiIiIiIiIiIiLSpv1fXU/DxU7cfPYAAAAASUVORK5CYII=