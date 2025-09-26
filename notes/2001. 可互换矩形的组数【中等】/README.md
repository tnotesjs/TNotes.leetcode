# [2001. 可互换矩形的组数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2001.%20%E5%8F%AF%E4%BA%92%E6%8D%A2%E7%9F%A9%E5%BD%A2%E7%9A%84%E7%BB%84%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-pairs-of-interchangeable-rectangles/)

用一个下标从 **0** 开始的二维整数数组  `rectangles` 来表示 `n` 个矩形，其中 `rectangles[i] = [widthi, heighti]` 表示第 `i` 个矩形的宽度和高度。

如果两个矩形 `i` 和 `j`（`i < j`）的宽高比相同，则认为这两个矩形 **可互换** 。更规范的说法是，两个矩形满足  `widthi/heighti == widthj/heightj`（使用实数除法而非整数除法），则认为这两个矩形 **可互换** 。

计算并返回  `rectangles` 中有多少对 **可互换** 矩形。

---

- **示例 1：**

```txt
输入：rectangles = [[4,8],[3,6],[10,20],[15,30]]
输出：6
解释：下面按下标（从 0 开始）列出可互换矩形的配对情况：
- 矩形 0 和矩形 1 ：4/8 == 3/6
- 矩形 0 和矩形 2 ：4/8 == 10/20
- 矩形 0 和矩形 3 ：4/8 == 15/30
- 矩形 1 和矩形 2 ：3/6 == 10/20
- 矩形 1 和矩形 3 ：3/6 == 15/30
- 矩形 2 和矩形 3 ：10/20 == 15/30
```

- **示例 2：**

```txt
输入：rectangles = [[4,5],[7,8]]
输出：0
解释：不存在成对的可互换矩形。
```

---

**提示：**

- `n == rectangles.length`
- `1 <= n <= 10^5`
- `rectangles[i].length == 2`
- `1 <= widthi, heighti <= 10^5`

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
