# [0593. 有效的正方形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0593.%20%E6%9C%89%E6%95%88%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/valid-square/)

给定 2D 空间中四个点的坐标 `p1`, `p2`, `p3` 和 `p4`，如果这四个点构成一个正方形，则返回 `true` 。

点的坐标 `pi` 表示为 `[xi, yi]` 。 `输入没有任何顺序` 。

一个 **有效的正方形** 有四条等边和四个等角(90 度角)。

---

- 示例 1:

```txt
输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: true
```

- 示例 2:

```txt
输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
输出：false
```

- 示例 3:

```txt
输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
输出：true
```

---

提示:

- `p1.length == p2.length == p3.length == p4.length == 2`
- `-10^4 <= xi, yi <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
