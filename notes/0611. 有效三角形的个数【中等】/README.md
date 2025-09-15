# [0611. 有效三角形的个数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0611.%20%E6%9C%89%E6%95%88%E4%B8%89%E8%A7%92%E5%BD%A2%E7%9A%84%E4%B8%AA%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/valid-triangle-number/)

给定一个包含非负整数的数组  `nums` ，返回其中可以组成三角形三条边的三元组个数。

---

- **示例 1:**

```txt
输入: nums = [2,2,3,4]
输出: 3
解释:有效的组合是:
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
```

- **示例 2:**

```txt
输入: nums = [4,2,3,4]
输出: 4
```

---

**提示:**

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
