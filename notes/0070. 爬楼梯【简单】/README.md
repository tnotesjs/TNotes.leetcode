# [0070. 爬楼梯【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0070.%20%E7%88%AC%E6%A5%BC%E6%A2%AF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划](#2--s1---动态规划)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/climbing-stairs/)

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

---

- **示例 1：**

```txt
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

- **示例 2：**

```txt
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

---

**提示：**

- `1 <= n <= 45`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.js [js]

:::
