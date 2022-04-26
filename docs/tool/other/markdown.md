---
title: 'Markdow说明' # 左侧标题
sidemenu: true # 左侧菜单
order: 1 # 排序
---

## Markdown笔记

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
 
### 标题(1~6标题)
  1. 标题
   
  ```
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ###### 六级标题
  ```

### 段落格式
   1. 字体
   
```
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```
   2. 分割线
   
```
****

* * *

*****

- - -

----------
```
   3. 删除线
   
```
RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
```
   4. 下划线
   
```
<u>带下划线文本</u>
```
   5. 脚注
   
```
创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！
```

### 列表
  1. 无序列表
```
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

```
  2. 有序列表
```
1. 第一项
2. 第二项
3. 第三项
```
### 区块
> 可以嵌套区块或者列表
```
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```
### 代码
  1. 高亮引用
```
`tab`
```
  2. 块代码
```
    ```javascript


    ```
```
### 链接
```
[链接名称](链接地址)

或者

<链接地址>
```
### 图片
```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```
> 如果需要指定宽高可以使用\<img src with=""\>
### 表格
```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```
### 高级
1. 支持的 HTML 元素
> 不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
> 
> 目前支持的 HTML 元素有：\<kbd> \<b> \<i> \<em> \<sup> \<sub> \<br>等
2. 转义
> **文本加粗** <br>
> \*\* 正常显示星号 \*\*


Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

```
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

3. 公式

> Markdown Preview Enhanced 使用 KaTeX 或者 MathJax 来渲染数学表达式。**目前个人不常用不做笔记记录，如需要自行查找**

**typora支持更多流程图、时序图、甘特图等**