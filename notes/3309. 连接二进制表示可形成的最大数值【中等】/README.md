# [3309. 连接二进制表示可形成的最大数值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3309.%20%E8%BF%9E%E6%8E%A5%E4%BA%8C%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E5%8F%AF%E5%BD%A2%E6%88%90%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-possible-number-by-binary-concatenation/)

给你一个长度为 `3` 的整数数组 `nums`。

现以某种顺序 连接 数组 `nums` 中所有元素的 二进制表示，请你返回可以由这种方法形成的 最大 数值。

注意 任何数字的二进制表示 不含 前导零。

---

示例 1：

输入: nums = [1,2,3]

输出: 30

解释:

按照顺序 `[3, 1, 2]` 连接数字的二进制表示，得到结果 `"11110"`，这是 30 的二进制表示。

---

示例 2：

输入: nums = [2,8,16]

输出: 1296

解释:

按照顺序 `[2, 8, 16]` 连接数字的二进制表述，得到结果 `"10100010000"`，这是 1296 的二进制表示。

---

提示：

- `nums.length == 3`
- `1 <= nums[i] <= 127`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
