# [1014. 最佳观光组合【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1014.%20%E6%9C%80%E4%BD%B3%E8%A7%82%E5%85%89%E7%BB%84%E5%90%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/best-sightseeing-pair/)

给你一个正整数数组 `values`，其中 `values[i]` 表示第 `i` 个观光景点的评分，并且两个景点 `i` 和 `j` 之间的 **距离** 为 `j - i`。

一对景点（`i < j`）组成的观光组合的得分为 `values[i] + values[j] + i - j` ，也就是景点的评分之和 **减去** 它们两者之间的距离。

返回一对观光景点能取得的最高分。

---

- **示例 1：**

```txt
输入：values = [8,1,5,2,6]
输出：11
解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
```

- **示例 2：**

```txt
输入：values = [1,2]
输出：2
```

---

**提示：**

- `2 <= values.length <= 5 * 10^4`
- `1 <= values[i] <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
