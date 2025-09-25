# [1725. 可以形成最大正方形的矩形数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1725.%20%E5%8F%AF%E4%BB%A5%E5%BD%A2%E6%88%90%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%9A%84%E7%9F%A9%E5%BD%A2%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-rectangles-that-can-form-the-largest-square/)

给你一个数组 `rectangles` ，其中 `rectangles[i] = [li, wi]` 表示第 `i` 个矩形的长度为 `li` 、宽度为 `wi` 。

如果存在 `k` 同时满足 `k <= li` 和 `k <= wi` ，就可以将第 `i` 个矩形切成边长为 `k` 的正方形。例如，矩形 `[4,6]` 可以切成边长最大为 `4` 的正方形。

设 `maxLen` 为可以从矩形数组 `rectangles` 切分得到的 **最大正方形** 的边长。

请你统计有多少个矩形能够切出边长为 `maxLen` 的正方形，并返回矩形 **数目** 。

---

- **示例 1：**

```txt
输入：rectangles = [[5,8],[3,9],[5,12],[16,5]]
输出：3
解释：能从每个矩形中切出的最大正方形边长分别是 [5,3,5,5] 。
最大正方形的边长为 5 ，可以由 3 个矩形切分得到。
```

- **示例 2：**

```txt
输入：rectangles = [[2,3],[3,7],[4,3],[3,7]]
输出：3
```

---

**提示：**

- `1 <= rectangles.length <= 1000`
- `rectangles[i].length == 2`
- `1 <= li, wi <= 10^9`
- `li != wi`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
