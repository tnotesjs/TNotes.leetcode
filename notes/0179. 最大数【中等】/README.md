# [0179. 最大数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0179.%20%E6%9C%80%E5%A4%A7%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-number/)

给定一组非负整数 `nums`，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

---

注意： 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

---

- 示例 1：

```txt
输入：nums = [10,2]
输出："210"
```

示例 2：

```txt
输入：nums = [3,30,34,5,9]
输出："9534330"
```

---

提示：

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
