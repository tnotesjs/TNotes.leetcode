# [2829. k-avoiding 数组的最小总和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2829.%20k-avoiding%20%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E6%80%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-the-minimum-sum-of-a-k-avoiding-array/)

给你两个整数 `n` 和 `k`。

对于一个由 不同 正整数组成的数组，如果其中不存在任何求和等于 k 的不同元素对，则称其为 k-avoiding 数组。

返回长度为 `n` 的 k-avoiding 数组的可能的最小总和。

---

- 示例 1：

```txt
输入：n = 5, k = 4
输出：18
解释：设若 k-avoiding 数组为 [1,2,4,5,6] ，其元素总和为 18。
可以证明不存在总和小于 18 的 k-avoiding 数组。
```

---

- 示例 2：

```txt
输入：n = 2, k = 6
输出：3
解释：可以构造数组 [1,2] ，其元素总和为 3。
可以证明不存在总和小于 3 的 k-avoiding 数组。
```

---

提示：

- `1 <= n, k <= 50`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
