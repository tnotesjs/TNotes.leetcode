# [3036. 匹配模式数组的子数组数目 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3036.%20%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84%E6%95%B0%E7%9B%AE%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - KMP 匹配](#2--s1---kmp-匹配)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-subarrays-that-match-a-pattern-ii/)

给你一个下标从 0 开始长度为 `n` 的整数数组 `nums`，和一个下标从 `0` 开始长度为 `m` 的整数数组 `pattern`，`pattern` 数组只包含整数 `-1`，`0` 和 `1`。

大小为 `m + 1` 的子数组 `nums[i..j]` 如果对于每个元素 `pattern[k]` 都满足以下条件，那么我们说这个子数组匹配模式数组 `pattern`：

> 子数组 是数组中元素的连续序列。

- 如果 `pattern[k] == 1`，那么 `nums[i + k + 1] > nums[i + k]`
- 如果 `pattern[k] == 0`，那么 `nums[i + k + 1] == nums[i + k]`
- 如果 `pattern[k] == -1`，那么 `nums[i + k + 1] < nums[i + k]`

请你返回匹配 `pattern` 的 `nums` 子数组的数目。

---

示例 1：

```txt
输入：nums = [1,2,3,4,5,6], pattern = [1,1]
输出：4
```

解释：

- 模式 [1,1] 说明我们要找的子数组是长度为 3 且严格上升的。在数组 nums 中，子数组 [1,2,3]，[2,3,4]，[3,4,5] 和 [4,5,6] 都匹配这个模式。
- 所以 nums 中总共有 4 个子数组匹配这个模式。

---

示例 2：

```txt
输入：nums = [1,4,4,1,3,5,5,3], pattern = [1,0,-1]
输出：2
```

解释：

- 这里，模式数组 [1,0,-1] 说明我们需要找的子数组中，第一个元素小于第二个元素，第二个元素等于第三个元素，第三个元素大于第四个元素。在 nums 中，子数组 [1,4,4,1] 和 [3,5,5,3] 都匹配这个模式。
- 所以 nums 中总共有 2 个子数组匹配这个模式。

---

提示：

- `2 <= n == nums.length <= 10^6`
- `1 <= nums[i] <= 10^9`
- `1 <= m == pattern.length < n`
- `-1 <= pattern[i] <= 1`

## 2. 🎯 s.1 - KMP 匹配

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，KMP 线性匹配
- 空间复杂度：$O(n + m)$，存储文本数组和失配数组

算法思路：

- 将 nums 的相邻差转换为模式数组（1/-1/0）
- 使用 KMP 算法在转换后的文本中匹配 pattern
- KMP 确保线性时间复杂度，适用于大数据量
