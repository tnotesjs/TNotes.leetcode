# [3034. 匹配模式数组的子数组数目 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3034.%20%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84%E6%95%B0%E7%9B%AE%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-subarrays-that-match-a-pattern-i/)

给你一个下标从 0 开始长度为 `n` 的整数数组 `nums`，和一个下标从 `0` 开始长度为 `m` 的整数数组 `pattern`，`pattern` 数组只包含整数 `-1`，`0` 和 `1`。

大小为 `m + 1` 的子数组 `nums[i..j]` 如果对于每个元素 `pattern[k]` 都满足以下条件，那么我们说这个子数组匹配模式数组 `pattern` ：

> 子数组 是数组中元素的连续序列。

- 如果 `pattern[k] == 1`，那么 `nums[i + k + 1] > nums[i + k]`
- 如果 `pattern[k] == 0`，那么 `nums[i + k + 1] == nums[i + k]`
- 如果 `pattern[k] == -1`，那么 `nums[i + k + 1] < nums[i + k]`

请你返回匹配 `pattern` 的 `nums` 子数组的 数目。

---

示例 1：

```txt
输入：nums = [1,2,3,4,5,6], pattern = [1,1]
输出：4
解释：模式 [1,1] 说明我们要找的子数组是长度为 3 且严格上升的。在数组 nums 中，子数组 [1,2,3]，[2,3,4]，[3,4,5] 和 [4,5,6] 都匹配这个模式。
所以 nums 中总共有 4 个子数组匹配这个模式。
```

---

示例 2：

```txt
输入：nums = [1,4,4,1,3,5,5,3], pattern = [1,0,-1]
输出：2
解释：这里，模式数组 [1,0,-1] 说明我们需要找的子数组中，第一个元素小于第二个元素，第二个元素等于第三个元素，第三个元素大于第四个元素。在 nums 中，子数组 [1,4,4,1] 和 [3,5,5,3] 都匹配这个模式。
所以 nums 中总共有 2 个子数组匹配这个模式。
```

---

提示：

- `2 <= n == nums.length <= 100`
- `1 <= nums[i] <= 10^9`
- `1 <= m == pattern.length < n`
- `-1 <= pattern[i] <= 1`

## 2. 🎯 s.1 - 模拟匹配

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(nm)$，其中 n 为 nums 长度，m 为 pattern 长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 枚举 nums 的每个起始位置 i
- 对于每个位置检查长度为 m+1 的子数组是否匹配 pattern
- 比较相邻元素的大小关系（大于/小于/等于）与 pattern 对应位置