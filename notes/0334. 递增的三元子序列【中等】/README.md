# [0334. 递增的三元子序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0334.%20%E9%80%92%E5%A2%9E%E7%9A%84%E4%B8%89%E5%85%83%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/increasing-triplet-subsequence/)

给你一个整数数组 `nums`，判断这个数组中是否存在长度为 `3` 的递增子序列。

如果存在这样的三元组下标 `(i, j, k)` 且满足 `i < j < k`，使得 `nums[i] < nums[j] < nums[k]`，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：nums = [1,2,3,4,5]
输出：true
解释：任何 i < j < k 的三元组都满足题意
```

示例 2：

```txt
输入：nums = [5,4,3,2,1]
输出：false
解释：不存在满足题意的三元组
```

示例 3：

```txt
输入：nums = [2,1,5,0,4,6]
输出：true
解释：其中一个满足题意的三元组是 (3, 4, 5)，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
```

---

提示：

- `1 <= nums.length <= 5 * 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

进阶：你能实现时间复杂度为 `O(n)`，空间复杂度为 `O(1)` 的解决方案吗？

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(1)$

算法思路：

- 维护两个变量 `first` 和 `second`，分别表示最小值和次小值
- 若当前元素大于 `second`，则找到了递增的三元子序列
