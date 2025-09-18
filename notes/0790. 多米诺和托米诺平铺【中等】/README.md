# [0790. 多米诺和托米诺平铺【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0790.%20%E5%A4%9A%E7%B1%B3%E8%AF%BA%E5%92%8C%E6%89%98%E7%B1%B3%E8%AF%BA%E5%B9%B3%E9%93%BA%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/domino-and-tromino-tiling/)

有两种形状的瓷砖：一种是 `2 x 1` 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-47-51.png)

给定整数 n ，返回可以平铺 `2 x n` 的面板的方法的数量。**返回对** `10^9 + 7` **取模** 的值。

平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。

---

- **示例 1:**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-47-56.png)

```txt
输入: n = 3
输出: 5
解释: 五种不同的方法如上所示。
```

- **示例 2:**

```txt
输入: n = 1
输出: 1
```

---

**提示：**

- `1 <= n <= 1000`

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
