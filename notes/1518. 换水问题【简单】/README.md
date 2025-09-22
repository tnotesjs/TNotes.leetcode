# [1518. 换水问题【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1518.%20%E6%8D%A2%E6%B0%B4%E9%97%AE%E9%A2%98%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/water-bottles/)

超市正在促销，你可以用 `numExchange` 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 `numBottles` 瓶水。

如果喝掉了水瓶中的水，那么水瓶就会变成空的。

给你两个整数 `numBottles` 和 `numExchange` ，返回你 **最多** 可以喝到多少瓶水。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-13-13.png)

```txt
输入：numBottles = 9, numExchange = 3
输出：13
解释：你可以用 3 个空瓶兑换 1 瓶水。
所以最多能喝到 9 + 3 + 1 = 13 瓶水。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-13-21.png)

```txt
输入：numBottles = 15, numExchange = 4
输出：19
解释：你可以用 4 个空瓶兑换 1 瓶水。
所以最多能喝到 15 + 3 + 1 = 19 瓶水。

```

---

**提示：**

- `1 <= numBottles <= 100`
- `2 <= numExchange <= 100`

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
