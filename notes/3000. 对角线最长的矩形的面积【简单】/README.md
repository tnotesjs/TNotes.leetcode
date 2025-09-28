# [3000. 对角线最长的矩形的面积【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3000.%20%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%9C%80%E9%95%BF%E7%9A%84%E7%9F%A9%E5%BD%A2%E7%9A%84%E9%9D%A2%E7%A7%AF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-area-of-longest-diagonal-rectangle/)

给你一个下标从 **0** 开始的二维整数数组 `dimensions`。

对于所有下标 `i`（`0 <= i < dimensions.length`），`dimensions[i][0]` 表示矩形 `i` 的长度，而 `dimensions[i][1]` 表示矩形 `i` 的宽度。

返回对角线最 **长** 的矩形的 **面积** 。如果存在多个对角线长度相同的矩形，返回其中面积最 **大** 的矩形的面积。

---

- **示例 1：**

```txt
输入：dimensions = [[9,3],[8,6]]
输出：48
解释：
下标 = 0，长度 = 9，宽度 = 3。对角线长度 = sqrt(9 * 9 + 3 * 3) = sqrt(90) ≈ 9.487。
下标 = 1，长度 = 8，宽度 = 6。对角线长度 = sqrt(8 * 8 + 6 * 6) = sqrt(100) = 10。
因此，下标为 1 的矩形对角线更长，所以返回面积 = 8 * 6 = 48。
```

- **示例 2：**

```txt
输入：dimensions = [[3,4],[4,3]]
输出：12
解释：两个矩形的对角线长度相同，为 5，所以最大面积 = 12。
```

---

**提示：**

- `1 <= dimensions.length <= 100`
- `dimensions[i].length == 2`
- `1 <= dimensions[i][0], dimensions[i][1] <= 100`

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
