---
title: '浏览器使用' # 左侧标题
sidemenu: true # 左侧菜单
order: 3 # 排序
---


## 浏览器对比（Chrome & Edge）
> 微软放弃了IE发布了Edge，解决很多Chrome的痛点。一句话概括就是`Chrome有的Edge都有，Edge有的Chrome未必有`。由于是相同的内核，主要是指一些使用痛点上的差异。

## 使用技巧


1. 一键重新发起请求
2. 在控制台快速发起请求
3. 复制`JavaScript`变量
4. 控制台获取Elements面板选中的元素
5. 截取一张全屏的网页
6. 一键展开所有DOM元素
7. 控制台引用上一次执行的结果
8. 快速切换主题
9. "$"和"$$"选择器
10. $i直接在控制台安装npm包
11. Add conditional breakpoint条件断点的妙用
12. 





## 快捷键

|功能|快捷键说明|
|------|------------|
| 窗口切换 | ⌃+↓ |



## 扩展程序

|扩展名称|描述|
|------|------------|
| Vimium C | 全键盘操作浏览器，使用 `⇧+/` 显示相关快捷键 |
| Aria2 | 开源的下载工具，磁力链接、BT种子、http等类型的文件下载 |
| Bitwarden | 一个安全且免费的跨平台密码管理器 |
| FeHelper(前端助手) | JSON自动格式化、手动格式化，支持排序、解码、下载等，更多功能可在配置页按需安装 |
| Octotree、Octohint、Refined GitHub | 浏览源码仓库的优秀插件 |
| SwitchyOmega | 轻松快捷地管理和切换多个代理设置。可以让浏览器独立配置代理 | 
| Tampermonkey | 一款免费的浏览器扩展和最为流行的用户脚本管理器，有多强大自行度娘 |
| Vue.js devtools | Vue页面调试工具 |
| 广告终结者 | 清除网页上的所有广告：浮动广告，购物广告，恶意弹窗，跟踪代码。让你浏览网页更快更清爽。广告终结者，你唯一需要的广告插件 | 
| 沙拉查词-聚合词典划词翻译 | Saladict 沙拉查词是一款专业划词翻译扩展，为交叉阅读而生。大量权威词典涵盖中英日韩法德西语，支持复杂的划词操作、网页翻译 | 
| 掘金快捷分享、稀土掘金 | 掘金学习、笔记相关插件 |


## 特殊设置

1. 设置保存Tab分组页面
   > `chrome://flags/#Tab Groups Save` 可以设置保存Tab分组页面
2. 调整下载框提示
   > `chrome://flags/#Enable download bubble` 可以调整下载框提示


## 常见问题

1. Chrome 您的连接不是私密连接
   - 详细描述：
     通过Chrome浏览器访问ssl证书过期或者是ssl配置错误的相关网址
   - 原因分析：
     chrome版本移除了关于ssl配置错误后，点高级没有继续访问的选项
   - 解决步骤：
      1. 解决办法就是在当前页面用键盘输入 `thisisunsafe` ，不是在地址栏输入，就直接敲键盘就行了，页面即会自动刷新进入网页
      2. 在`chrome://flags`中设置`--ignore-certificate-errors`
