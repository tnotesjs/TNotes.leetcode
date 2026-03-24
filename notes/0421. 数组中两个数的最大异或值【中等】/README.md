# [0421. 数组中两个数的最大异或值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0421.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BC%82%E6%88%96%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array/)

给你一个整数数组 `nums`，返回 `nums[i] XOR nums[j]` 的最大运算结果，其中 `0 ≤ i ≤ j < n`。

---

示例 1：

```txt
输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
```

示例 2：

```txt
输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127
```

---

提示：

- `1 <= nums.length <= 2 * 10^5`
- `0 <= nums[i] <= 2^31 - 1`

## 2. 🎯 s.1 - 贪心 + 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(32n)$，即 $O(n)$
- 空间复杂度：$O(n)$

算法思路：

- 从最高位到最低位贪心地确定每一位是否可以为 1
- 利用 $a \oplus b = c \Leftrightarrow a \oplus c = b$ 的性质，用哈希表判断候选值是否可达
