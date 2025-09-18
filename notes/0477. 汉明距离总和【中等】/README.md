# [0477. 汉明距离总和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0477.%20%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB%E6%80%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/total-hamming-distance/)

两个整数的 [汉明距离][1] 指的是这两个数字的二进制数对应位不同的数量。

给你一个整数数组 `nums`，请你计算并返回 `nums` 中任意两个数之间 **汉明距离的总和** 。

---

- **示例 1：**

```txt
输入：nums = [4,14,2]
输出：6

解释：
在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6
```

- **示例 2：**

```txt
输入：nums = [4,14,4]
输出：4
```

---

**提示：**

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^9`
- 给定输入的对应答案符合 **32-bit** 整数范围

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [汉明距离][1]
  - 百度百科

[1]: https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174?fr=aladdin
