# [1498. 满足条件的子序列数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1498.%20%E6%BB%A1%E8%B6%B3%E6%9D%A1%E4%BB%B6%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)

给你一个整数数组 `nums` 和一个整数 `target`。

请你统计并返回 `nums` 中能满足其最小元素与最大元素的 和 小于或等于 `target` 的 非空 子序列的数目。

由于答案可能很大，请将结果对 `10^9 + 7` 取余后返回。

---

示例 1：

```txt
输入：nums = [3,5,6,7], target = 9
输出：4
解释：有 4 个子序列满足该条件。
[3] -> 最小元素 + 最大元素 <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
```

示例 2：

```txt
输入：nums = [3,3,6,8], target = 10
输出：6
解释：有 6 个子序列满足该条件。（nums 中可以有重复数字）
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
```

示例 3：

```txt
输入：nums = [2,3,3,4,6,7], target = 12
输出：61
解释：共有 63 个非空子序列，其中 2 个不满足条件（[6,7], [7]）
有效序列总数为（63 - 2 = 61）
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `1 <= target <= 10^6`

## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，存储 2 的幂次数组

算法思路：

- 排序后使用双指针，left 从左往右，right 从右往左
- 当 `nums[left] + nums[right] <= target` 时，left 和 right 之间的元素可选可不选，贡献 $2^{right-left}$ 个子序列
- 预计算 2 的幂次避免重复计算，结果对 $10^9 + 7$ 取模
