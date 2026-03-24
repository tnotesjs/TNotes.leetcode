# [0646. 最长数对链【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0646.%20%E6%9C%80%E9%95%BF%E6%95%B0%E5%AF%B9%E9%93%BE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-length-of-pair-chain/)

给你一个由 `n` 个数对组成的数对数组 `pairs`，其中 `pairs[i] = [lefti, righti]` 且 `lefti < righti`。

现在，我们定义一种 跟随 关系，当且仅当 `b < c` 时，数对 `p2 = [c, d]` 才可以跟在 `p1 = [a, b]` 后面。我们用这种形式来构造 数对链。

找出并返回能够形成的 最长数对链的长度。

你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

---

示例 1：

```txt
输入：pairs = [[1,2], [2,3], [3,4]]
输出：2
解释：最长的数对链是 [1,2] -> [3,4]。
```

示例 2：

```txt
输入：pairs = [[1,2],[7,8],[4,5]]
输出：3
解释：最长的数对链是 [1,2] -> [4,5] -> [7,8]。
```

---

提示：

- `n == pairs.length`
- `1 <= n <= 1000`
- `-1000 <= lefti < righti <= 1000`

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是数对数量
- 空间复杂度：$O(\log n)$，排序的栈空间

算法思路：

- 按右端点升序排序，等同于活动选择问题
- 贪心选择右端点最小的数对，保证剩余空间最大
