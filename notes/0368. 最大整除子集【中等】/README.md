# [0368. 最大整除子集【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0368.%20%E6%9C%80%E5%A4%A7%E6%95%B4%E9%99%A4%E5%AD%90%E9%9B%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-divisible-subset/)

给你一个由 **无重复** 正整数组成的集合 `nums` ，请你找出并返回其中最大的整除子集 `answer` ，子集中每一元素对 `(answer[i], answer[j])` 都应当满足：

- `answer[i] % answer[j] == 0` ，或
- `answer[j] % answer[i] == 0`

如果存在多个有效解子集，返回其中任何一个均可。

---

- **示例 1：**

```txt
输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。
```

- **示例 2：**

```txt
输入：nums = [1,2,4,8]
输出：[1,2,4,8]
```

---

**提示：**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- `nums` 中的所有整数 **互不相同**

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
