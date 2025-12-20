# [0274. H 指数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0274.%20H%20%E6%8C%87%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/h-index/)

给你一个整数数组 `citations` ，其中 `citations[i]` 表示研究者的第 `i` 篇论文被引用的次数。计算并返回该研究者的 `h` 指数。

根据维基百科上 [h 指数的定义][1]：`h` 代表“高引用次数” ，一名科研人员的 `h` 指数 是指他（她）至少发表了 `h` 篇论文，并且 至少 有 `h` 篇论文被引用次数大于等于 `h` 。如果 `h` 有多种可能的值，`h` 指数 是其中最大的那个。

---

- 示例 1：

```txt
输入：citations = [3,0,6,1,5]
输出：3

解释：
给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
```

- 示例 2：

```txt
输入：citations = [1,3,1]
输出：1
```

---

提示：

- `n == citations.length`
- `1 <= n <= 5000`
- `0 <= citations[i] <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [h 指数的定义][1]
  - 百度百科

[1]: https://baike.baidu.com/item/h-index/3991452?fr=aladdin
