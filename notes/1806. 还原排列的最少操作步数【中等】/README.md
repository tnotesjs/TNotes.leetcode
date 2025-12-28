# [1806. 还原排列的最少操作步数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1806.%20%E8%BF%98%E5%8E%9F%E6%8E%92%E5%88%97%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AD%A5%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation/)

给你一个偶数 `n`​​​​​​ ，已知存在一个长度为 `n` 的排列 `perm` ，其中 `perm[i] == i`​（下标 从 0 开始 计数）。

一步操作中，你将创建一个新数组 `arr` ，对于每个 `i` ：

- 如果 `i % 2 == 0` ，那么 `arr[i] = perm[i / 2]`
- 如果 `i % 2 == 1` ，那么 `arr[i] = perm[n / 2 + (i - 1) / 2]`

然后将 `arr`​​ 赋值 ​​ 给 `perm`。

要想使 `perm` 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。

---

示例 1：

```txt
输入：n = 2
输出：1
解释：最初，perm = [0,1]
第 1 步操作后，perm = [0,1]
所以，仅需执行 1 步操作
```

示例 2：

```txt
输入：n = 4
输出：2
解释：最初，perm = [0,1,2,3]
第 1 步操作后，perm = [0,2,1,3]
第 2 步操作后，perm = [0,1,2,3]
所以，仅需执行 2 步操作
```

示例 3：

```txt
输入：n = 6
输出：4
```

---

提示：

- `2 <= n <= 1000`
- `n`​​​​​​ 是一个偶数

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
