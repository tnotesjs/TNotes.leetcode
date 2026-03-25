# [0923. 三数之和的多种可能【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0923.%20%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%8F%AF%E8%83%BD%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/3sum-with-multiplicity/)

给定一个整数数组 `arr`，以及一个整数 `target` 作为目标值，返回满足 `i < j < k` 且 `arr[i] + arr[j] + arr[k] == target` 的元组 `i, j, k` 的数量。

由于结果会非常大，请返回 `10^9 + 7` 的模。

---

示例 1：

```txt
输入：arr = [1,1,2,2,3,3,4,4,5,5], target = 8
输出：20
解释：
按值枚举(arr[i], arr[j], arr[k])：
(1, 2, 5) 出现 8 次；
(1, 3, 4) 出现 8 次；
(2, 2, 4) 出现 2 次；
(2, 3, 3) 出现 2 次。
```

示例 2：

```txt
输入：arr = [1,1,2,2,2,2], target = 5
输出：12
解释：
arr[i] = 1, arr[j] = arr[k] = 2 出现 12 次：
我们从 [1,1] 中选择一个 1，有 2 种情况，
从 [2,2,2,2] 中选出两个 2，有 6 种情况。
```

---

提示：

- `3 <= arr.length <= 3000`
- `0 <= arr[i] <= 100`
- `0 <= target <= 300`

## 2. 🎯 s.1 - 计数 + 枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + C^2)$，其中 n 是数组长度，C = 101 是值域大小
- 空间复杂度：$O(C)$，计数数组

算法思路：

- 统计每个值的出现次数 `count`
- 枚举所有满足 $i \leq j \leq k$ 且 $i + j + k = target$ 的三元组
- 根据 i、j、k 是否相等选择不同的组合公式计算方案数
- 空间复杂度：$O(1)$
