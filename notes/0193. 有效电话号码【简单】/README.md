# [0193. 有效电话号码【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0193.%20%E6%9C%89%E6%95%88%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/valid-phone-numbers/)

给定一个包含电话号码列表（一行一个电话号码）的文本文件 `file.txt`，写一个单行 bash 脚本输出所有有效的电话号码。

你可以假设一个有效的电话号码必须满足以下两种格式： (xxx) xxx-xxxx 或 xxx-xxx-xxxx。（x 表示一个数字）

你也可以假设每行前后没有多余的空格字符。

**示例：**

假设 `file.txt` 内容如下：

```txt
987-123-4567
123 456 7890
(123) 456-7890
```

你的脚本应当输出下列有效的电话号码：

```txt
987-123-4567
(123) 456-7890
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
