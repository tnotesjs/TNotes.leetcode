# [1035. 不相交的线【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1035.%20%E4%B8%8D%E7%9B%B8%E4%BA%A4%E7%9A%84%E7%BA%BF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/uncrossed-lines/)

在两条独立的水平线上按给定的顺序写下 `nums1` 和 `nums2` 中的整数。

现在，可以绘制一些连接两个数字 `nums1[i]` 和 `nums2[j]` 的直线，这些直线需要同时满足：

- `nums1[i] == nums2[j]`
- 且绘制的直线不与任何其他连线（非水平线）相交。

请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

以这种方法绘制线条，并返回可以绘制的最大连线数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-25-07.png)

```txt
输入：nums1 = [1,4,2], nums2 = [1,2,4]
输出：2
解释：可以画出两条不交叉的线，如上图所示。
但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。
```

示例 2：

```txt
输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
输出：3
```

示例 3：

```txt
输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
输出：2
```

---

提示：

- `1 <= nums1.length, nums2.length <= 500`
- `1 <= nums1[i], nums2[j] <= 2000`

## 2. 🎯 s.1 - 动态规划 (LCS)

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 和 $n$ 分别是两个数组的长度
- 空间复杂度：$O(m \times n)$，DP 数组

算法思路：

- 本质是求两个数组的最长公共子序列 (LCS)
- `dp[i][j]` 表示 `nums1[0..i-1]` 和 `nums2[0..j-1]` 的最长公共子序列长度
- 若 `nums1[i-1] == nums2[j-1]`，则 `dp[i][j] = dp[i-1][j-1] + 1`，否则取 `max(dp[i-1][j], dp[i][j-1])`
